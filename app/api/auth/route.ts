import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { password } = (await request.json()) as { password: string };
  const valid = password === process.env.ADMIN_PASSWORD;
  return NextResponse.json({ success: valid }, { status: valid ? 200 : 401 });
}
