/**
 * Stripe client — lazily constructed so the app boots without payment keys.
 *
 * SCAFFOLD: keys are read from env placeholders (see .env.example). The
 * checkout + webhook routes return a clear 503 when Stripe is not configured,
 * rather than crashing.
 */

import Stripe from "stripe";

let stripe: Stripe | null = null;

export function getStripe(): Stripe | null {
  if (stripe) return stripe;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  stripe = new Stripe(key);
  return stripe;
}

export function stripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}
