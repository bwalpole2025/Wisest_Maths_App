/**
 * Signed Session Tokens — the security boundary for authentication.
 *
 * Replaces the previous design, where the session cookie was plaintext JSON
 * written client-side. That cookie was trivially forgeable: anyone could set
 * `mathsapp-session={"role":"teacher"}` in their browser and the server would
 * trust it. This module issues a cryptographically signed JWT (HMAC-SHA256)
 * instead, so the server can prove a session it sees was minted by the server.
 *
 * - The signing secret NEVER leaves the server.
 * - The cookie is HttpOnly (JS cannot read it) + SameSite=Strict + Secure.
 * - `role` is a SIGNED claim, assigned server-side, so it cannot be tampered
 *   with on the client.
 *
 * Uses `jose` because it runs on the Edge runtime (Web Crypto), which is where
 * Next.js middleware executes.
 */

import { SignJWT, jwtVerify } from "jose";
import type { UserRole } from "@/lib/types";

export const SESSION_COOKIE = "mathsapp-session";

/** 30 days, in seconds. */
const SESSION_MAX_AGE = 60 * 60 * 24 * 30;

/** Validated, server-trusted session claims. */
export interface SessionClaims {
  /** Stable user identifier (Supabase user id once wired; email until then). */
  sub: string;
  email: string;
  name: string;
  role: UserRole;
}

/**
 * Dev fallback secret. Lets the app run + be tested locally without any env
 * setup, but is intentionally NOT usable in production: see getSecret().
 */
const DEV_FALLBACK_SECRET =
  "dev-only-insecure-session-secret-change-me-in-production-32+chars";

let warnedAboutDevSecret = false;

function getSecret(): Uint8Array {
  const secret = process.env.SESSION_SECRET;
  if (secret && secret.length >= 32) {
    return new TextEncoder().encode(secret);
  }
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "SESSION_SECRET must be set to a 32+ character random string in production.",
    );
  }
  if (!warnedAboutDevSecret) {
    // eslint-disable-next-line no-console
    console.warn(
      "[auth] SESSION_SECRET is not set — using an insecure dev fallback. " +
        "Set SESSION_SECRET (32+ chars) before deploying.",
    );
    warnedAboutDevSecret = true;
  }
  return new TextEncoder().encode(DEV_FALLBACK_SECRET);
}

/** Mint a signed session token for the given claims. */
export async function createSessionToken(claims: SessionClaims): Promise<string> {
  return new SignJWT({
    email: claims.email,
    name: claims.name,
    role: claims.role,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(claims.sub)
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE}s`)
    .sign(getSecret());
}

/**
 * Verify a session token. Returns the claims if the signature AND expiry are
 * valid, otherwise null. NEVER throws — callers treat null as "unauthenticated".
 */
export async function verifySessionToken(
  token: string | undefined | null,
): Promise<SessionClaims | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecret(), {
      algorithms: ["HS256"],
    });
    const role = payload.role;
    if (
      typeof payload.sub !== "string" ||
      typeof payload.email !== "string" ||
      typeof payload.name !== "string" ||
      (role !== "student" && role !== "teacher")
    ) {
      return null;
    }
    return {
      sub: payload.sub,
      email: payload.email,
      name: payload.name as string,
      role,
    };
  } catch {
    // Bad signature, malformed token, or expired — all mean "no valid session".
    return null;
  }
}

/** Cookie attributes for the session cookie. Shared by login + logout. */
export function sessionCookieOptions(maxAge: number = SESSION_MAX_AGE) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    path: "/",
    maxAge,
  };
}

export { SESSION_MAX_AGE };
