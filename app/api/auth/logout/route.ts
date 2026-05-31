/**
 * POST /api/auth/logout
 *
 * Clears the session cookie server-side. Because the cookie is HttpOnly, the
 * client cannot clear it itself — it must go through here.
 */

import { NextResponse } from "next/server";
import { sessionCookieOptions, SESSION_COOKIE } from "@/lib/auth/session";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  // Overwrite with an immediately-expired cookie.
  response.cookies.set(SESSION_COOKIE, "", sessionCookieOptions(0));
  return response;
}
