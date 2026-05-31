/**
 * POST /api/stripe/checkout  —  SCAFFOLD
 *
 * Creates a Stripe Hosted Checkout session for the subscription product and
 * returns its URL. The 'Hosted Checkout' pattern keeps card data on Stripe's
 * servers, so this app stays out of PCI-DSS scope.
 *
 * Auth is required (a signed session) so the checkout is tied to a real user;
 * the user id is attached to the session as `client_reference_id` and metadata
 * so the webhook can update the right account on payment success.
 *
 * Rate limiting (payment tier) is applied in middleware for /api/stripe/*.
 *
 * To go live: set STRIPE_SECRET_KEY, STRIPE_PRICE_ID, NEXT_PUBLIC_BASE_URL.
 */

import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/payments/stripe";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth/session";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  // ── Auth ─────────────────────────────────────────────────────────────
  const session = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!session) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }

  // ── Config guard ─────────────────────────────────────────────────────
  const stripe = getStripe();
  const priceId = process.env.STRIPE_PRICE_ID;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!stripe || !priceId || !baseUrl) {
    return NextResponse.json(
      { error: "Payments are not yet configured." },
      { status: 503 },
    );
  }

  try {
    const checkout = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      // Tie the payment back to our user for the webhook.
      client_reference_id: session.sub,
      customer_email: session.email,
      metadata: { userId: session.sub },
      success_url: `${baseUrl}/student/dashboard?checkout=success`,
      cancel_url: `${baseUrl}/courses?checkout=cancelled`,
    });
    return NextResponse.json({ url: checkout.url });
  } catch (err) {
    console.error("[stripe/checkout] failed to create session:", err);
    return NextResponse.json(
      { error: "Could not start checkout. Please try again." },
      { status: 500 },
    );
  }
}
