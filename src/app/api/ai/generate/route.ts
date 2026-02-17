import { NextResponse } from "next/server";
import { z } from "zod";
import { runAIStructured } from "@/lib/ai/provider";

const schema = z.object({ task: z.string(), input: z.record(z.string()) });

export async function POST(req: Request) {
  const parsed = schema.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

  const output = await runAIStructured(parsed.data.task as never, parsed.data.input);
  return NextResponse.json({ output });
}
