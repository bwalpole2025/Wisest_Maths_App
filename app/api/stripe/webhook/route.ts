/**
 * POST /api/stripe/webhook  —  SCAFFOLD
 *
 * Listens for Stripe events and updates the user's subscription status. The
 * raw request body is verified against the Stripe signature header using
 * STRIPE_WEBHOOK_SECRET — this is what prevents a forged request from granting
 * a free subscription. NEVER trust the body without verifying the signature.
 *
 * To go live: set STRIPE_SECRET_KEY + STRIPE_WEBHOOK_SECRET, then point a
 * Stripe webhook endpoint at this route (or run `stripe listen --forward-to
 * localhost:3000/api/stripe/webhook` in development).
 */

import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/payments/stripe";

export const runtime = "nodejs";

async function setSubscriptionStatus(
  userId: string | null,
  active: boolean,
): Promise<void> {
  // TODO(supabase): update the user's subscriptionTier / expiry in Postgres.
  //   await supabaseAdmin.from("profiles")
  //     .update({ subscription_tier: active ? "subscribed" : "free" })
  //     .eq("id", userId);
  console.info(
    `[stripe/webhook] subscription ${active ? "activated" : "deactivated"} for user ${userId}`,
  );
}

export async function POST(request: NextRequest) {
  const stripe = getStripe();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !webhookSecret) {
    return NextResponse.json(
      { error: "Webhook is not configured." },
      { status: 503 },
    );
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature." }, { status: 400 });
  }

  // Raw body is required for signature verification — do not parse as JSON.
  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error("[stripe/webhook] signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const s = event.data.object as Stripe.Checkout.Session;
        const userId = s.metadata?.userId ?? s.client_reference_id ?? null;
        await setSubscriptionStatus(userId, true);
        break;
      }
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        const userId = (sub.metadata?.userId as string | undefined) ?? null;
        await setSubscriptionStatus(userId, false);
        break;
      }
      default:
        // Unhandled event types are acknowledged so Stripe stops retrying.
        break;
    }
  } catch (err) {
    console.error("[stripe/webhook] handler error:", err);
    // Return 500 so Stripe retries delivery.
    return NextResponse.json({ error: "Handler error." }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
