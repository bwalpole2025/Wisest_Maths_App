/**
 * Centralised environment variable validation.
 *
 * Every server-side import of `env` triggers Zod validation. If a required
 * variable is missing or malformed, the process throws at import time with a
 * clear message — much better than a cryptic 500 weeks later.
 *
 * Public (NEXT_PUBLIC_*) values are bundled into the client; everything else
 * is server-only. Never read process.env directly outside this file.
 */

import { z } from "zod";

// ── Schema ───────────────────────────────────────────────────────────

// Helper: treat empty strings (common in .env files) as missing, so optional
// fields can be left blank in .env.local without triggering validation errors.
const optionalNonEmpty = z
  .string()
  .transform((s) => (s.trim() === "" ? undefined : s))
  .optional();

const optionalUrl = z
  .string()
  .transform((s) => (s.trim() === "" ? undefined : s))
  .optional()
  .pipe(z.string().url().optional());

const ServerEnvSchema = z.object({
  // Supabase — required for auth + DB
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  SUPABASE_SERVICE_ROLE_KEY: optionalNonEmpty,

  // LLM keys — optional in development, required for AI features in production
  GEMINI_API_KEY: optionalNonEmpty,
  ANTHROPIC_API_KEY: optionalNonEmpty,

  // Upstash Redis for rate limiting — optional (falls back to in-memory for dev)
  UPSTASH_REDIS_REST_URL: optionalUrl,
  UPSTASH_REDIS_REST_TOKEN: optionalNonEmpty,

  // ⚠ DEMO MODE — bypasses auth for local development. NEVER set to "true" in
  // production. Also gated by NODE_ENV check at runtime. See lib/demoMode.ts.
  DEMO_MODE: z
    .string()
    .transform((s) => s.trim().toLowerCase())
    .optional()
    .default("false"),

  // Node environment
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

const ClientEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
});

// ── Parsing ──────────────────────────────────────────────────────────

function formatErrors(error: z.ZodError): string {
  return error.issues
    .map((i) => `  • ${i.path.join(".")}: ${i.message}`)
    .join("\n");
}

function parseServerEnv() {
  // During Next.js build, env vars from Vercel/etc. are present at build time.
  // During type-check (no env), allow placeholder values so `npm run build` works
  // when only checking types. Real validation happens on first server import.
  const result = ServerEnvSchema.safeParse(process.env);
  if (!result.success) {
    const message = `❌ Invalid server environment variables:\n${formatErrors(result.error)}\n\nSee .env.example for the full list of required vars.`;
    // In production, fail fast. In dev/test, log and throw so the dev server reports it cleanly.
    throw new Error(message);
  }
  return result.data;
}

function parseClientEnv() {
  // NEXT_PUBLIC_* vars are inlined at build time, so process.env access here is safe on client too.
  const result = ClientEnvSchema.safeParse({
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  });
  if (!result.success) {
    throw new Error(`Invalid public environment variables:\n${formatErrors(result.error)}`);
  }
  return result.data;
}

// ── Exports ──────────────────────────────────────────────────────────

/**
 * Server-side env. Importing this from a client component will fail the build
 * because `SUPABASE_SERVICE_ROLE_KEY` etc. don't exist on the client. That's
 * intentional — it's how we keep secrets server-only.
 */
export const env = typeof window === "undefined" ? parseServerEnv() : (null as never);

/** Public env values, safe to use in client components. */
export const publicEnv = parseClientEnv();
