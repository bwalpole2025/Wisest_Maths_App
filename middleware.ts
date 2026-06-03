import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  verifySessionToken,
  createSessionToken,
  sessionCookieOptions,
  SESSION_COOKIE,
} from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/rateLimit";
import { getClientIp } from "@/lib/auth/clientIp";
import { validateEnv } from "@/lib/env";

// Fail fast at startup on a misconfigured production environment. Skipped
// during `next build` (env secrets are not present at build time).
if (process.env.NEXT_PHASE !== "phase-production-build") {
  validateEnv();
}

/**
 * Next.js Middleware — runs on the Edge runtime BEFORE any page renders.
 *
 * Responsibilities:
 *   1. Rate limiting — global on all /api/*, stricter on /api/auth/* and
 *      /api/stripe/*.
 *   2. Authentication — verify the SIGNED session cookie (not just its
 *      presence). A forged or tampered cookie fails signature verification and
 *      is treated as unauthenticated. This is the fix for the previous design,
 *      where the cookie was plaintext JSON the client could fabricate.
 *   3. Authorization — /teacher/* requires a verified role === "teacher".
 *
 * Protected routes: /student/*, /teacher/*, /courses/*
 * Public routes: /, /login, /api/* (each API route does its own auth), static.
 */

const PUBLIC_PATHS = new Set(["/", "/login"]);

function isPublicPath(pathname: string): boolean {
  if (PUBLIC_PATHS.has(pathname)) return true;
  if (pathname.startsWith("/_next")) return true;
  if (pathname.startsWith("/api")) return true;
  if (/\.(svg|png|jpg|jpeg|gif|ico|woff|woff2|css|js|map)$/.test(pathname)) return true;
  return false;
}

async function rateLimit(request: NextRequest, pathname: string): Promise<NextResponse | null> {
  // Only rate-limit API traffic at the edge — page navigations trigger many
  // prefetch/RSC requests and would cause false positives on a global counter.
  if (!pathname.startsWith("/api")) return null;

  const ip = getClientIp(request);
  // Strict "auth" tier is only for credential attempts (login). Read-only
  // endpoints like /api/auth/me run on every page load to hydrate auth state,
  // so they must use the generous "global" tier or normal browsing trips 429.
  const tier = pathname.startsWith("/api/auth/login")
    ? "auth"
    : pathname.startsWith("/api/stripe")
      ? "payment"
      : "global";

  const result = await checkRateLimit(ip, tier);
  if (!result.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((result.retryAfterMs ?? 60000) / 1000)),
        },
      },
    );
  }
  return null;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ── 1. Rate limiting (API only) ──────────────────────────────────────
  const limited = await rateLimit(request, pathname);
  if (limited) return limited;

  // ── 2. Public paths bypass auth ──────────────────────────────────────
  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // ── 3. Verify the SIGNED session ─────────────────────────────────────
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const session = await verifySessionToken(token);

  if (!session) {
    // No valid session — redirect to login, clearing any bogus cookie.
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    const response = NextResponse.redirect(loginUrl);
    if (token) response.cookies.delete(SESSION_COOKIE);
    return response;
  }

  // ── 4. Authorization — teacher routes require the teacher role ───────
  if (pathname.startsWith("/teacher") && session.role !== "teacher") {
    return NextResponse.redirect(new URL("/student/dashboard", request.url));
  }

  // ── 5. Slide the 7-day inactivity window forward on activity ─────────
  // Re-issue the session cookie with a fresh expiry on every authenticated
  // navigation, so an active user never gets logged out; only 7 days of no
  // activity lets the token lapse.
  const response = NextResponse.next();
  const refreshed = await createSessionToken({
    sub: session.sub,
    email: session.email,
    name: session.name,
    role: session.role,
  });
  response.cookies.set(SESSION_COOKIE, refreshed, sessionCookieOptions());
  return response;
}

export const config = {
  matcher: [
    // Run on all routes except Next.js internals and static files
    "/((?!_next/static|_next/image|favicon).*)",
  ],
};
