import OpenAI from "openai";
import { z } from "zod";

const postSchema = z.object({ post: z.string(), hooks: z.array(z.string()).default([]), ctas: z.array(z.string()).default([]), score: z.number().min(0).max(100) });

export type AITask =
  | "generatePost"
  | "generateHooks"
  | "generateCTAs"
  | "rewritePost"
  | "repurposeFromURL"
  | "repurposeFromPDF"
  | "repurposeFromAudio"
  | "generateComment"
  | "scorePost";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function runAIStructured(task: AITask, input: Record<string, string>) {
  if (!process.env.OPENAI_API_KEY || process.env.LIVE_MODE !== "true") {
    return { post: `[SANDBOX_MODE] ${task} output`, hooks: ["Hook 1"], ctas: ["CTA 1"], score: 82 };
  }
  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: `Task: ${task}\nInput: ${JSON.stringify(input)}\nReturn concise JSON object with post, hooks, ctas, score.`,
    text: { format: { type: "json_object" } }
  });
  const text = response.output_text;
  return postSchema.parse(JSON.parse(text));
}
