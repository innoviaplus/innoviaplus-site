import { NextRequest, NextResponse } from "next/server";
import { getPage, updatePage, deletePage, verifyAdmin } from "@/lib/kv";
import type { PageData } from "@/lib/types";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const page = await getPage(id);
  if (!page) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(page);
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = (await request.json()) as { password: string } & Partial<Omit<PageData, "id" | "createdAt">>;
  const { password, ...data } = body;
  if (!verifyAdmin(password)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const page = await updatePage(id, data);
  if (!page) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(page);
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { password } = (await request.json()) as { password: string };
  if (!verifyAdmin(password)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const deleted = await deletePage(id);
  if (!deleted) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ success: true });
}
