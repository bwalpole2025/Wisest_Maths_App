/**
 * POST /api/auth/google   { accessToken }
 *
 * Completes the "School login" (Google SSO) handshake. The browser runs the
 * Google OAuth flow against Supabase (see lib/auth/supabaseBrowser.ts) and
 * hands us the resulting Supabase access token here. We:
 *
 *   1. Rate-limit by IP (auth tier) — same throttle as password login.
 *   2. VERIFY the token server-side against Supabase (verifyAccessToken →
 *      auth.getUser), so a forged/expired token is rejected. The role is read
 *      from server-trusted metadata, never from the client.
 *   3. Mint the app's OWN signed, HttpOnly session cookie (single session
 *      mechanism — Supabase's browser session is just a stepping stone).
 *   4. Best-effort: link this user to any roster rows seeded with their school
 *      email (class_members.student_id), so teacher-assigned quizzes attach to
 *      the real account on first login.
 *
 * Never trusts identity from the request body — only the verified token.
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { verifyAccessToken } from "@/lib/auth/supabase";
import {
  createSessionToken,
  sessionCookieOptions,
  SESSION_COOKIE,
} from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/rateLimit";
import { getClientIp } from "@/lib/auth/clientIp";
import { linkStudentByEmail, supabaseClassesEnabled } from "@/lib/services/supabaseClasses";

const Schema = z.object({ accessToken: z.string().min(1).max(4096) }).strict();

export async function POST(request: NextRequest) {
  // ── 1. Rate limit by IP (auth tier) ─────────────────────────────────
  const ip = getClientIp(request);
  const rate = await checkRateLimit(ip, "auth");
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many sign-in attempts. Please try again shortly." },
      { status: 429 },
    );
  }

  // ── 2. Validate body ─────────────────────────────────────────────────
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  const parsed = Schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "A sign-in token is required." }, { status: 400 });
  }

  // ── 3. Verify the Supabase access token (server-side) ────────────────
  let user;
  try {
    user = await verifyAccessToken(parsed.data.accessToken);
  } catch (err) {
    console.error("[auth/google] token verification failed:", err);
    return NextResponse.json(
      { error: "Sign-in is temporarily unavailable." },
      { status: 503 },
    );
  }
  if (!user) {
    return NextResponse.json(
      { error: "Could not verify your Google sign-in. Please try again." },
      { status: 401 },
    );
  }

  // ── 4. Link roster rows seeded with this school email (best-effort) ──
  if (supabaseClassesEnabled()) {
    try {
      await linkStudentByEmail(user.id, user.email);
    } catch (err) {
      // A linking failure must not block a valid login.
      console.error("[auth/google] roster link failed:", err);
    }
  }

  // ── 5. Mint signed session + set HttpOnly cookie ─────────────────────
  const token = await createSessionToken({
    sub: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  });

  const response = NextResponse.json({
    user: { email: user.email, name: user.name, role: user.role },
  });
  response.cookies.set(SESSION_COOKIE, token, sessionCookieOptions());
  return response;
}
