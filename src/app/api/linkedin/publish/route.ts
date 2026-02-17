import { NextResponse } from "next/server";
import { publishLinkedInPost } from "@/lib/linkedin/client";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const published = await publishLinkedInPost(body);
    return NextResponse.json(published);
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}
