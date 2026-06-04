/**
 * POST /api/auth/login
 *
 * The ONLY place a session is minted. Verifies credentials server-side, then
 * sets a signed, HttpOnly session cookie. The role is decided here (server),
 * never accepted from the client.
 *
 * Security layers: rate limiting (auth tier) → Zod validation → credential
 * verification → signed-cookie issuance.
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { verifyCredentials } from "@/lib/auth/supabase";
import {
  createSessionToken,
  sessionCookieOptions,
  SESSION_COOKIE,
} from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/rateLimit";
import { getClientIp } from "@/lib/auth/clientIp";
import { supabaseClassesEnabled } from "@/lib/services/supabaseClasses";
import { resolveSchoolIdentity, isSchoolSuspended } from "@/lib/services/schools";

const LoginSchema = z.object({
  email: z.string().email().max(254),
  password: z.string().min(1).max(200),
});

export async function POST(request: NextRequest) {
  // ── 1. Rate limit by IP (stricter auth tier) ─────────────────────────
  const ip = getClientIp(request);
  const rate = await checkRateLimit(ip, "auth");
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many login attempts. Please try again shortly." },
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
  const parsed = LoginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "A valid email and password are required." },
      { status: 400 },
    );
  }

  // ── 3. Verify credentials ────────────────────────────────────────────
  let user;
  try {
    user = await verifyCredentials(parsed.data.email, parsed.data.password);
  } catch (err) {
    console.error("[auth/login] credential verification failed:", err);
    return NextResponse.json(
      { error: "Authentication is temporarily unavailable." },
      { status: 503 },
    );
  }
  if (!user) {
    // Generic message — do not reveal whether the email exists.
    return NextResponse.json(
      { error: "Invalid email or password." },
      { status: 401 },
    );
  }

  // ── 4. Resolve the school from the seeded roster (first login) ───────
  // If the account isn't yet stamped with a school, match its email to a
  // school_members row and stamp role+school — the same self-link the Google
  // path does, so email/password accounts work without manual app_metadata.
  let role = user.role;
  let schoolId = user.schoolId;
  if (!schoolId && supabaseClassesEnabled()) {
    try {
      const identity = await resolveSchoolIdentity(user.id, user.email);
      if (identity) {
        role = identity.role;
        schoolId = identity.schoolId;
      }
    } catch (err) {
      console.error("[auth/login] school identity resolution failed:", err);
    }
  }

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
