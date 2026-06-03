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
 * SUPABASE_SERVICE_ROLE_KEY. Feature secrets (Gemini, Stripe, Upstash) are
 * optional and validated only for *shape* — the code that uses them already
 * degrades gracefully (503) when they are absent.
 */

import { z } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),

  // Required in production (see refinement below).
  SESSION_SECRET: z.string().min(32).optional(),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(20).optional(),

  // Feature secrets — optional; validated for shape only.
  GEMINI_API_KEY: z.string().min(1).optional(),
  STRIPE_SECRET_KEY: z.string().min(1).optional(),
  STRIPE_PRICE_ID: z.string().min(1).optional(),
  STRIPE_WEBHOOK_SECRET: z.string().min(1).optional(),
  NEXT_PUBLIC_BASE_URL: z.string().url().optional(),

  // Durable rate-limiting (Upstash Redis). Optional; in-memory fallback if unset.
  UPSTASH_REDIS_REST_URL: z.string().url().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().min(1).optional(),
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
    // If Upstash is partially configured, treat as a misconfiguration.
    const hasUrl = Boolean(env.UPSTASH_REDIS_REST_URL);
    const hasTok = Boolean(env.UPSTASH_REDIS_REST_TOKEN);
    if (hasUrl !== hasTok) {
      throw new Error(
        "Upstash rate-limiting requires BOTH UPSTASH_REDIS_REST_URL and " +
          "UPSTASH_REDIS_REST_TOKEN, or neither.",
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
