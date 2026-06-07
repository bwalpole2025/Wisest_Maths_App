/**
 * Centralised environment-variable validation.
 *
 * `validateEnv()` parses `process.env` against a Zod schema and throws a clear
 * error if anything is malformed, or if a production-required secret is missing.
 * It is invoked once at startup from `middleware.ts` (guarded against the build
 * phase), so a misconfigured production deploy fails fast and loudly instead of
 * falling back to insecure defaults or surfacing cryptic runtime errors.
 *
 * Required in production: SESSION_SECRET (32+ chars), NEXT_PUBLIC_SUPABASE_URL,
 * SUPABASE_SERVICE_ROLE_KEY, and BOTH Upstash vars (durable rate limiting must
 * not silently degrade to the in-memory fallback in prod). Feature secrets
 * (Gemini, Stripe) are optional and validated only for *shape* — the code that
 * uses them already degrades gracefully (503) when they are absent.
 */

import { z } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),

  // Required in production (see refinement below).
  SESSION_SECRET: z.string().min(32).optional(),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(20).optional(),
  // Public anon key — needed in the browser for Google (OAuth) sign-in.
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(20).optional(),

  // Feature secrets — optional; validated for shape only.
  GEMINI_API_KEY: z.string().min(1).optional(),
  STRIPE_SECRET_KEY: z.string().min(1).optional(),
  STRIPE_PRICE_ID: z.string().min(1).optional(),
  STRIPE_WEBHOOK_SECRET: z.string().min(1).optional(),
  NEXT_PUBLIC_BASE_URL: z.string().url().optional(),

  // Durable rate-limiting (Upstash Redis). Optional; in-memory fallback if unset.
  UPSTASH_REDIS_REST_URL: z.string().url().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().min(1).optional(),

  // Handwriting submissions — non-secret tunables.
  // Days a stored submission image is kept before the retention job deletes it.
  SUBMISSION_RETENTION_DAYS: z.coerce.number().int().positive().default(30),
  // Base directory for the local-disk StorageService (dev). Defaults to a temp dir.
  SUBMISSIONS_LOCAL_DIR: z.string().optional(),

  // Mathpix Convert API (handwriting recognition). Secrets — optional shape.
  MATHPIX_APP_ID: z.string().min(1).optional(),
  MATHPIX_APP_KEY: z.string().min(1).optional(),
  // Below this overall confidence, a recognition is flagged for careful review.
  MATHPIX_CONFIDENCE_THRESHOLD: z.coerce.number().min(0).max(1).default(0.7),

  // Anthropic (mark-scheme marking engine). Secret — optional shape.
  ANTHROPIC_API_KEY: z.string().min(1).optional(),
  // Marker model id — read from config, never hard-coded. Verify current ids at
  // platform.claude.com/docs/en/docs/about-claude/models/overview.
  ANTHROPIC_MARKER_MODEL: z.string().min(1).default("claude-opus-4-8"),
  // Below this per-mark confidence, an allocation is surfaced for human review.
  MARK_CONFIDENCE_THRESHOLD: z.coerce.number().min(0).max(1).default(0.6),

  // Optional SymPy symbolic sidecar (internal HTTP service). When unset, the
  // diagnosis engine runs sampling/math.js only. Must point at the INTERNAL URL.
  SYMBOLIC_SIDECAR_URL: z.string().url().optional(),
  SYMBOLIC_SIDECAR_TIMEOUT_MS: z.coerce.number().int().positive().default(1500),

  // Layer-3 progressive disclosure thresholds. First reveal happens once a
  // student has this many wrong attempts with no matching hint; each subsequent
  // such wrong reveals this many further steps.
  DIAGNOSIS_FIRST_REVEAL_AT_WRONG: z.coerce.number().int().positive().default(1),
  DIAGNOSIS_STEPS_PER_REVEAL: z.coerce.number().int().positive().default(1),
});

export type Env = z.infer<typeof EnvSchema>;

const PROD_REQUIRED = [
  "SESSION_SECRET",
  "NEXT_PUBLIC_SUPABASE_URL",
  "SUPABASE_SERVICE_ROLE_KEY",
] as const;

let cached: Env | null = null;

/** Parse + assert the environment. Throws on invalid/missing-in-production. */
export function validateEnv(): Env {
  if (cached) return cached;

  const parsed = EnvSchema.safeParse(process.env);
  if (!parsed.success) {
    const issues = parsed.error.issues
      .map((i) => `  - ${i.path.join(".") || "(root)"}: ${i.message}`)
      .join("\n");
    throw new Error(`Invalid environment configuration:\n${issues}`);
  }

  const env = parsed.data;
  if (env.NODE_ENV === "production") {
    const missing = PROD_REQUIRED.filter((k) => !env[k]);
    if (missing.length > 0) {
      throw new Error(
        `Missing required production environment variables: ${missing.join(", ")}. ` +
          `Set them before deploying.`,
      );
    }
    // Durable rate limiting is mandatory in production. Without Upstash, the
    // limiter silently falls back to an in-memory store that is NOT shared
    // across serverless instances and resets on cold start — i.e. effectively
    // no protection against brute force / API-bill abuse. Require BOTH vars so
    // a deploy can never degrade to that fallback unnoticed.
    const hasUrl = Boolean(env.UPSTASH_REDIS_REST_URL);
    const hasTok = Boolean(env.UPSTASH_REDIS_REST_TOKEN);
    if (!hasUrl || !hasTok) {
      const missingUpstash = [
        !hasUrl && "UPSTASH_REDIS_REST_URL",
        !hasTok && "UPSTASH_REDIS_REST_TOKEN",
      ].filter(Boolean);
      throw new Error(
        `Durable rate limiting is required in production but ${missingUpstash.join(
          " and ",
        )} ${missingUpstash.length > 1 ? "are" : "is"} missing. ` +
          "Set both UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN " +
          "(create a free database at https://upstash.com) before deploying.",
      );
    }
  }

  cached = env;
  return cached;
}

/** Lenient, never-throwing typed view of the environment for convenient reads. */
export const env: Env = (() => {
  const parsed = EnvSchema.safeParse(process.env);
  return parsed.success
    ? parsed.data
    : ({ NODE_ENV: (process.env.NODE_ENV as Env["NODE_ENV"]) ?? "development" } as Env);
})();

/** True when the optional SymPy symbolic sidecar is configured. */
export function symbolicSidecarEnabled(): boolean {
  return Boolean(env.SYMBOLIC_SIDECAR_URL);
}

/** Symbolic-sidecar connection config, or null when not configured. */
export function symbolicSidecarConfig(): { baseUrl: string; timeoutMs: number } | null {
  if (!env.SYMBOLIC_SIDECAR_URL) return null;
  return { baseUrl: env.SYMBOLIC_SIDECAR_URL, timeoutMs: env.SYMBOLIC_SIDECAR_TIMEOUT_MS };
}

/** Layer-3 progressive-disclosure thresholds (configurable). */
export function disclosurePolicy(): { firstRevealAtWrongCount: number; stepsPerReveal: number } {
  return {
    firstRevealAtWrongCount: env.DIAGNOSIS_FIRST_REVEAL_AT_WRONG,
    stepsPerReveal: env.DIAGNOSIS_STEPS_PER_REVEAL,
  };
}
