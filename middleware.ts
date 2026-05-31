import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";
import { DEMO_COOKIE_NAME, isDemoModeAllowed, resolveDemoUser } from "@/lib/demoMode";

/**
 * Next.js Middleware — runs on the Edge BEFORE any page renders.
 *
 * Default-deny: PUBLIC_PATHS is the only allowlist; every other path requires
 * a verified Supabase session (or, in dev with DEMO_MODE=true, a demo cookie).
 *
 * Auth verification uses supabase.auth.getUser() — JWT-validated, not the
 * forgeable getSession().
 *
 * Teacher routes additionally require role === "teacher" stored in
 * app_metadata (server-managed, NOT user_metadata which is user-editable).
 */

const PUBLIC_PATHS = new Set(["/", "/login", "/signup"]);

function isPublicPath(pathname: string): boolean {
  if (PUBLIC_PATHS.has(pathname)) return true;
  if (pathname.startsWith("/_next")) return true;
  if (pathname.startsWith("/auth/callback")) return true;
  if (pathname.startsWith("/api/auth")) return true;
  if (/\.(svg|png|jpg|jpeg|gif|ico|woff|woff2|css|js|map)$/.test(pathname)) return true;
  return false;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // ── DEMO MODE short-circuit (dev-only, see lib/demoMode.ts) ─────
  if (isDemoModeAllowed()) {
    const demoUser = resolveDemoUser(request.cookies.get(DEMO_COOKIE_NAME)?.value);
    if (demoUser) {
      if (pathname.startsWith("/teacher") && demoUser.role !== "teacher") {
        return NextResponse.redirect(new URL("/courses", request.url));
      }
      return NextResponse.next();
    }
  }
  // ── end demo block ──────────────────────────────────────────────

  // Verify session with Supabase (network call, JWT-validated).
  const { supabaseResponse, user } = await updateSession(request);

  if (!user) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname.startsWith("/teacher")) {
    const role = (user.app_metadata?.role as string | undefined) ?? "student";
    if (role !== "teacher") {
      return NextResponse.redirect(new URL("/courses", request.url));
    }
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
