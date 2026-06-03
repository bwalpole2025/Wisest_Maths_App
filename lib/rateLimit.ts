/**
 * Rate Limiting — DDoS & Flood Control
 *
 * Durable sliding-window rate limiter with two backends:
 *
 *   • Production / multi-instance: Upstash Redis (via @upstash/ratelimit).
 *     Counters are shared across all serverless instances and survive cold
 *     starts. Activated automatically when UPSTASH_REDIS_REST_URL and
 *     UPSTASH_REDIS_REST_TOKEN are set. Works on the Edge runtime (REST/fetch).
 *
 *   • Development fallback: in-memory sliding window. Fine for a single local
 *     process; NOT durable across instances — never relied on in production.
 *
 * The public API is async because the durable backend performs a network call.
 *
 * Tiers:
 *   - global:  100 requests / 15 minutes
 *   - auth:    5 requests / 1 minute   (login)
 *   - ai:      30 requests / 1 minute  (LLM calls)
 *   - payment: 5 requests / 1 minute   (Stripe)
 */

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

export const RATE_LIMITS = {
  global: { maxRequests: 100, windowMs: 15 * 60 * 1000 } as RateLimitConfig,
  auth: { maxRequests: 5, windowMs: 60 * 1000 } as RateLimitConfig,
  ai: { maxRequests: 30, windowMs: 60 * 1000 } as RateLimitConfig,
  payment: { maxRequests: 5, windowMs: 60 * 1000 } as RateLimitConfig,
};

export type RateLimitTier = keyof typeof RATE_LIMITS;

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterMs: number | null;
}

// ─────────────────────────────────────────────────────────────────────────
// Durable backend — Upstash Redis (used when configured)
// ─────────────────────────────────────────────────────────────────────────

const upstashConfigured = Boolean(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN,
);

let redis: Redis | null = null;
const limiters: Partial<Record<RateLimitTier, Ratelimit>> = {};

function getLimiter(tier: RateLimitTier): Ratelimit {
  if (!redis) {
    redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    });
  }
  let limiter = limiters[tier];
  if (!limiter) {
    const { maxRequests, windowMs } = RATE_LIMITS[tier];
    limiter = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(maxRequests, `${Math.round(windowMs / 1000)} s`),
      prefix: `rl:${tier}`,
      analytics: false,
    });
    limiters[tier] = limiter;
  }
  return limiter;
}

// ─────────────────────────────────────────────────────────────────────────
// In-memory fallback (development only)
// ─────────────────────────────────────────────────────────────────────────

interface RateLimitEntry {
  timestamps: number[];
}

const store = new Map<string, RateLimitEntry>();

// Clean stale entries every 5 minutes (dev fallback only).
if (!upstashConfigured && typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of store) {
      entry.timestamps = entry.timestamps.filter((t) => now - t < 15 * 60 * 1000);
      if (entry.timestamps.length === 0) store.delete(key);
    }
  }, 5 * 60 * 1000);
}

function checkInMemory(identifier: string, tier: RateLimitTier): RateLimitResult {
  const config = RATE_LIMITS[tier];
  const key = `${tier}:${identifier}`;
  const now = Date.now();

  let entry = store.get(key);
  if (!entry) {
    entry = { timestamps: [] };
    store.set(key, entry);
  }

  entry.timestamps = entry.timestamps.filter((t) => now - t < config.windowMs);

  if (entry.timestamps.length >= config.maxRequests) {
    const oldestInWindow = entry.timestamps[0];
    const retryAfterMs = config.windowMs - (now - oldestInWindow);
    return { allowed: false, remaining: 0, retryAfterMs };
  }

  entry.timestamps.push(now);
  return {
    allowed: true,
    remaining: config.maxRequests - entry.timestamps.length,
    retryAfterMs: null,
  };
}

// ─────────────────────────────────────────────────────────────────────────
// Public API
// ─────────────────────────────────────────────────────────────────────────

/**
 * Check whether a request from `identifier` (IP or user id) is within the
 * rate limit for the given tier. Uses Upstash Redis when configured, otherwise
 * the in-memory fallback.
 */
export async function checkRateLimit(
  identifier: string,
  tier: RateLimitTier = "global",
): Promise<RateLimitResult> {
  if (upstashConfigured) {
    const { success, remaining, reset } = await getLimiter(tier).limit(
      `${tier}:${identifier}`,
    );
    return {
      allowed: success,
      remaining,
      retryAfterMs: success ? null : Math.max(0, reset - Date.now()),
    };
  }
  return checkInMemory(identifier, tier);
}

/**
 * Helper for API route handlers. Returns a Response if rate-limited,
 * or null if the request is allowed.
 */
export async function rateLimitResponse(
  identifier: string,
  tier: RateLimitTier = "global",
): Promise<Response | null> {
  const result = await checkRateLimit(identifier, tier);
  if (!result.allowed) {
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
  return null;
}
