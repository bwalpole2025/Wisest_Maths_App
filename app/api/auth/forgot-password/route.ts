/**
 * POST /api/auth/forgot-password   { email }
 *
 * Sends a Supabase password-reset email. Security:
 *   - Rate-limited by IP ("auth" tier) — throttles abuse / email bombing.
 *   - ALWAYS returns the same generic success response, whether or not the
 *     email belongs to a real account, so attackers can't enumerate accounts.
 *   - The emailed reset link is single-use and time-limited (Supabase).
 *
 * The link points at <base>/auth/reset, where the user sets a new password.
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendPasswordReset } from "@/lib/auth/supabase";
import { checkRateLimit } from "@/lib/rateLimit";
import { getClientIp } from "@/lib/auth/clientIp";

const Schema = z.object({ email: z.string().email().max(254) }).strict();

// Identical response for every outcome — the anti-enumeration guarantee.
const GENERIC = {
  ok: true,
  message: "If an account exists for that email, a password-reset link has been sent.",
};

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const rate = await checkRateLimit(ip, "auth");
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    // Even a malformed body gets the generic reply (no information leaked).
    return NextResponse.json(GENERIC);
  }
  const parsed = Schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(GENERIC);
  }

  const base = process.env.NEXT_PUBLIC_BASE_URL || request.nextUrl.origin;
  await sendPasswordReset(parsed.data.email, `${base}/auth/reset`);

  return NextResponse.json(GENERIC);
}
