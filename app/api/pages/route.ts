import { NextRequest, NextResponse } from "next/server";
import { listPages, createPage, verifyAdmin } from "@/lib/kv";
import type { PageData } from "@/lib/types";

export async function GET() {
  const pages = await listPages();
  return NextResponse.json(pages);
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as { password: string } & Omit<PageData, "id" | "createdAt" | "updatedAt">;
  const { password, ...data } = body;
  if (!verifyAdmin(password)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const page = await createPage(data);
  return NextResponse.json(page, { status: 201 });
}
