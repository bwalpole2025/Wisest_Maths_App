/**
 * GET /api/auth/me
 *
 * Returns the current authenticated user from the *verified* session cookie,
 * or 401. The client uses this to hydrate auth state on load, since the session
 * cookie is now HttpOnly and cannot be read from JavaScript.
 */

import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth/session";

export async function GET(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const claims = await verifySessionToken(token);
  if (!claims) {
    return NextResponse.json({ user: null }, { status: 401 });
  }
  return NextResponse.json({
    user: { email: claims.email, name: claims.name, role: claims.role },
  });
}
