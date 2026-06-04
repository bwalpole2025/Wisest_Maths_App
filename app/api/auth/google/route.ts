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
import { supabaseClassesEnabled } from "@/lib/services/supabaseClasses";
import { resolveSchoolIdentity, isSchoolSuspended } from "@/lib/services/schools";

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

  // ── 4. Resolve which school this sign-in belongs to (first-login) ────
  // Matches the email to a seeded school_members row, stamps app_metadata, and
  // links the student's class roster within that school. Best-effort: a failure
  // must not block a valid login (the user simply has no school context yet).
  let identity = null;
  if (supabaseClassesEnabled()) {
    try {
      identity = await resolveSchoolIdentity(user.id, user.email);
    } catch (err) {
      console.error("[auth/google] school identity resolution failed:", err);
    }
  }
  const role = identity?.role ?? user.role;
  const schoolId = identity?.schoolId ?? user.schoolId;

  // Suspended school → block all of its users at login.
  if (schoolId && supabaseClassesEnabled() && (await isSchoolSuspended(schoolId))) {
    return NextResponse.json(
      { error: "Your school's access is currently suspended. Please contact Wisest Maths." },
      { status: 403 },
    );
  }

  // ── 5. Mint signed session + set HttpOnly cookie ─────────────────────
  const token = await createSessionToken({
    sub: user.id,
    email: user.email,
    name: user.name,
    role,
    ...(schoolId ? { schoolId } : {}),
  });

  const response = NextResponse.json({
    user: { email: user.email, name: user.name, role },
  });
  response.cookies.set(SESSION_COOKIE, token, sessionCookieOptions());
  return response;
}
