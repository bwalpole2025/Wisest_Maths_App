import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Route protection middleware.
 *
 * Since auth is stored in localStorage (client-only), we can't read it in
 * middleware. Instead, the student and teacher layouts perform client-side
 * redirect checks. This middleware is a placeholder for future server-side
 * auth (cookies / JWT).
 */
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/student/:path*", "/teacher/:path*"],
};
