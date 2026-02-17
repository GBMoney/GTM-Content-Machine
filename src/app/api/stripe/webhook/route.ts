import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { verifyStripeSignature } from "@/lib/billing/stripe";

export async function POST(req: Request) {
  const signature = headers().get("stripe-signature");
  if (!signature) return NextResponse.json({ error: "Missing stripe signature" }, { status: 400 });
  const payload = await req.text();

  try {
    const event = verifyStripeSignature(payload, signature);
    return NextResponse.json({ received: true, type: event.type });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Invalid signature" }, { status: 400 });
  }
}
