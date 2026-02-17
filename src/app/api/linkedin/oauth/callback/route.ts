import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  if (!code) return NextResponse.json({ error: "Missing code" }, { status: 400 });
  return NextResponse.json({ ok: true, message: "OAuth code received", codePreview: `${code.slice(0, 5)}...` });
}
