/**
 * Rate limiting — durable, multi-instance friendly.
 *
 * Backed by Upstash Redis when UPSTASH_REDIS_REST_URL/TOKEN are set. Falls
 * back to a process-local sliding window when they aren't, which is fine for
 * local development but should NEVER ship to production — see the warning log.
 *
 * Tiers:
 *   global  — 100 requests / 15 minutes
 *   auth    — 5 requests / 1 minute (login, signup, reset)
 *   ai      — 30 requests / 1 minute (LLM calls)
 *   payment — 5 requests / 1 minute
 */

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { env } from "@/lib/env";

// ── Tier definitions ─────────────────────────────────────────────────

export const RATE_LIMITS = {
  global: { maxRequests: 100, windowSeconds: 15 * 60 },
  auth: { maxRequests: 5, windowSeconds: 60 },
  ai: { maxRequests: 30, windowSeconds: 60 },
  payment: { maxRequests: 5, windowSeconds: 60 },
} as const;

export type RateLimitTier = keyof typeof RATE_LIMITS;

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterMs: number | null;
}

// ── Upstash setup (production) ───────────────────────────────────────

const upstashConfigured = Boolean(
  env.UPSTASH_REDIS_REST_URL && env.UPSTASH_REDIS_REST_TOKEN,
);

const redis = upstashConfigured
  ? new Redis({
      url: env.UPSTASH_REDIS_REST_URL!,
      token: env.UPSTASH_REDIS_REST_TOKEN!,
    })
  : null;

// Build one Ratelimit per tier so the prefixes don't collide.
const limiters: Record<RateLimitTier, Ratelimit> | null = redis
  ? (Object.fromEntries(
      (Object.entries(RATE_LIMITS) as [RateLimitTier, typeof RATE_LIMITS[RateLimitTier]][]).map(
        ([tier, config]) => [
          tier,
          new Ratelimit({
            redis,
            limiter: Ratelimit.slidingWindow(
              config.maxRequests,
              `${config.windowSeconds} s`,
            ),
            prefix: `wisest:ratelimit:${tier}`,
            analytics: true,
          }),
        ],
      ),
    ) as Record<RateLimitTier, Ratelimit>)
  : null;

// ── In-memory fallback (development only) ────────────────────────────

interface FallbackEntry {
  timestamps: number[];
}

const fallbackStore = new Map<string, FallbackEntry>();

function fallbackCheck(
  identifier: string,
  tier: RateLimitTier,
): RateLimitResult {
  const config = RATE_LIMITS[tier];
  const windowMs = config.windowSeconds * 1000;
  const key = `${tier}:${identifier}`;
  const now = Date.now();

  let entry = fallbackStore.get(key);
  if (!entry) {
    entry = { timestamps: [] };
    fallbackStore.set(key, entry);
  }

  entry.timestamps = entry.timestamps.filter((t) => now - t < windowMs);

  if (entry.timestamps.length >= config.maxRequests) {
    const oldestInWindow = entry.timestamps[0];
    const retryAfterMs = windowMs - (now - oldestInWindow);
    return { allowed: false, remaining: 0, retryAfterMs };
  }

  entry.timestamps.push(now);
  return {
    allowed: true,
    remaining: config.maxRequests - entry.timestamps.length,
    retryAfterMs: null,
  };
}

// One-time warning when running in production without Upstash configured.
if (!upstashConfigured && env.NODE_ENV === "production") {
  // eslint-disable-next-line no-console
  console.warn(
    "[rateLimit] UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN not set — falling back to in-memory rate limiting. " +
      "This is NOT safe for production: each serverless instance has its own counter and limits will not be enforced reliably. " +
      "Set up Upstash Redis (free tier) and configure the env vars.",
  );
}

// ── Public API ───────────────────────────────────────────────────────

/**
 * Check whether a request from `identifier` is within the rate limit for
 * `tier`. Returns immediately for in-memory fallback; performs an Upstash
 * round-trip for production.
 */
export async function checkRateLimit(
  identifier: string,
  tier: RateLimitTier = "global",
): Promise<RateLimitResult> {
  if (limiters) {
    const result = await limiters[tier].limit(identifier);
    return {
      allowed: result.success,
      remaining: result.remaining,
      retryAfterMs: result.success ? null : result.reset - Date.now(),
    };
  }
  return fallbackCheck(identifier, tier);
}

/**
 * Convenience wrapper for API route handlers. Returns a 429 Response if the
 * caller is over the limit, or `null` to proceed.
 */
export async function rateLimitResponse(
  identifier: string,
  tier: RateLimitTier = "global",
): Promise<Response | null> {
  const result = await checkRateLimit(identifier, tier);
  if (result.allowed) return null;
  return new Response(
    JSON.stringify({ error: "Too many requests. Please try again later." }),
    {
      status: 429,
      headers: {
        "Content-Type": "application/json",
        "Retry-After": String(Math.ceil((result.retryAfterMs ?? 60000) / 1000)),
        "X-RateLimit-Remaining": "0",
      },
    },
  );
}
