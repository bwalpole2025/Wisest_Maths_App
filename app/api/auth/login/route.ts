/**
 * POST /api/auth/login
 *
 * Server-side login. Verifies credentials against Supabase, sets the httpOnly
 * session cookie, returns the authenticated user.
 *
 * Security:
 *   1. Rate limit (auth tier — 5 attempts / minute / IP)
 *   2. Zod validation of input
 *   3. Generic error message on failure (no user-enumeration leak)
 *   4. Session in httpOnly cookie via @supabase/ssr — not accessible to JS
 */

import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { rateLimitResponse } from "@/lib/rateLimit";

const LoginSchema = z.object({
  email: z.string().email().max(254),
  password: z.string().min(1).max(128),
});

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: NextRequest) {
  // ── Rate limit by IP ────────────────────────────────────────────
  const ip = getClientIp(request);
  const limited = await rateLimitResponse(ip, "auth");
  if (limited) return limited;

  // ── Parse + validate body ──────────────────────────────────────
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request format." },
      { status: 400 },
    );
  }

  const parsed = LoginSchema.safeParse(body);
  if (!parsed.success) {
    // Generic message — don't leak which field failed.
    return NextResponse.json(
      { error: "Invalid request format." },
      { status: 400 },
    );
  }

  // ── Sign in via Supabase ───────────────────────────────────────
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: parsed.data.email,
    password: parsed.data.password,
  });

  if (error || !data.user) {
    // Generic message — same response for "no such user", "wrong password",
    // and "email not confirmed" to avoid user enumeration.
    return NextResponse.json(
      { error: "Invalid email or password." },
      { status: 401 },
    );
  }

  // Supabase SSR has already set the auth cookies via createClient(). Return
  // the user (without sensitive fields) so the client can redirect.
  return NextResponse.json({
    user: {
      id: data.user.id,
      email: data.user.email,
      role: (data.user.app_metadata?.role as string | undefined) ?? "student",
    },
  });
}
