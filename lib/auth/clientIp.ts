import type { NextRequest } from "next/server";

/**
 * Best-effort client IP for rate-limiting keys. Behind a proxy/CDN the real IP
 * is in x-forwarded-for (first hop). Falls back to a constant so rate limiting
 * still degrades safely (shared bucket) rather than crashing.
 */
export function getClientIp(request: NextRequest): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const real = request.headers.get("x-real-ip");
  if (real) return real.trim();
  // NextRequest.ip is populated on some hosts (e.g. Vercel) but not in plain
  // Node dev; guard the access.
  return (request as unknown as { ip?: string }).ip ?? "unknown";
}
