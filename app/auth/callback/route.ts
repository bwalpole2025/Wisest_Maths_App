/**
 * GET /auth/callback
 *
 * Supabase auth callback. Used for:
 *   - Email confirmation links
 *   - Password reset links
 *   - OAuth providers (if enabled)
 *
 * The `code` query parameter is single-use and short-lived; we exchange it
 * for a session via the server-side client (so the resulting cookies are
 * httpOnly), then redirect to `next` (validated against an allowlist) or "/".
 *
 * Security:
 *   - `next` is validated to be a relative path on this origin only.
 *   - On any error we redirect to /login with no token information in the URL.
 */

import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

/** Only allow relative redirects within the app — prevents open-redirect abuse. */
function safeRedirectTarget(next: string | null): string {
  if (!next) return "/courses";
  if (!next.startsWith("/")) return "/courses";
  if (next.startsWith("//")) return "/courses"; // protocol-relative URL
  return next;
}

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = safeRedirectTarget(searchParams.get("next"));

  if (!code) {
    return NextResponse.redirect(`${origin}/login`);
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    // Never echo the error back in the URL — generic redirect.
    return NextResponse.redirect(`${origin}/login`);
  }

  return NextResponse.redirect(`${origin}${next}`);
}
