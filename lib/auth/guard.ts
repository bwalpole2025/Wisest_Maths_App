/**
 * Shared role-gate for API routes. Verifies the signed session, checks the role
 * is allowed, and applies the standard rate limit. Returns either `{ error }`
 * (a ready-to-return NextResponse) or `{ session }` (the verified claims).
 */

import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE, type SessionClaims } from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/rateLimit";
import type { UserRole } from "@/lib/types";

export async function requireRole(
  request: NextRequest,
  roles: UserRole[],
): Promise<{ error: NextResponse; session?: never } | { error?: never; session: SessionClaims }> {
  const session = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!session) {
    return { error: NextResponse.json({ error: "Authentication required." }, { status: 401 }) };
  }
  if (!roles.includes(session.role)) {
    return { error: NextResponse.json({ error: "Forbidden." }, { status: 403 }) };
  }
  const rate = await checkRateLimit(session.sub, "global");
  if (!rate.allowed) {
    return { error: NextResponse.json({ error: "Too many requests." }, { status: 429 }) };
  }
  return { session };
}
