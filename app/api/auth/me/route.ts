/**
 * GET /api/auth/me
 *
 * Returns the current authenticated user from the *verified* session cookie,
 * or 401. The client uses this to hydrate auth state on load, since the session
 * cookie is now HttpOnly and cannot be read from JavaScript.
 *
 * Sliding refresh: on every successful check we re-mint the session cookie with
 * a fresh expiry, sliding the 7-day inactivity window forward. The middleware
 * does the same on each authenticated page navigation, so any activity keeps
 * the session alive; 7 days of no activity lets it lapse (→ /login). An explicit
 * "Sign Out" (POST /api/auth/logout) clears it immediately.
 */

import { NextRequest, NextResponse } from "next/server";
import {
  verifySessionToken,
  createSessionToken,
  sessionCookieOptions,
  SESSION_COOKIE,
} from "@/lib/auth/session";

export async function GET(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const claims = await verifySessionToken(token);
  if (!claims) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const response = NextResponse.json({
    user: { email: claims.email, name: claims.name, role: claims.role },
  });

  // Slide the expiry forward so an active session never lapses on its own.
  const fresh = await createSessionToken({
    sub: claims.sub,
    email: claims.email,
    name: claims.name,
    role: claims.role,
  });
  response.cookies.set(SESSION_COOKIE, fresh, sessionCookieOptions());

  return response;
}
