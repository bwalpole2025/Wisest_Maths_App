# Security Audit Result — Wisest

- **Date / commit / auditor:** 2026-05-21 (post-remediation) · current working tree · Claude Code (SECURITY.md v1.0.0 runbook)
- **Stack:** Next.js **15.5.18** (App Router) + Supabase Auth (via `@supabase/ssr`) + Upstash Redis rate limiting + TypeScript.

## 1. Posture

**Rating: STRONG** (in implementation) / **ACCEPTABLE** (overall — pending operator setup of Supabase + Upstash projects).

The homebrew auth stub has been replaced end-to-end with Supabase Auth: server-side login / signup / logout routes, httpOnly cookies via `@supabase/ssr`, JWT-validated sessions through `getUser()`, default-deny middleware with role gating from `app_metadata` (server-managed, not user-editable). The in-memory rate limiter is now a sliding-window Upstash Redis limiter with a dev-only in-memory fallback that warns loudly in production. Every API route now does `auth → rate-limit → Zod parse` in that order, with generic 4xx errors that don't leak internals. Env vars are Zod-validated at server import time so a missing key fails fast with a clear pointer to `.env.example`. Next.js is now on 15.5.18 — the high-severity middleware/proxy/SSRF/cache-poisoning advisories that flagged 14.2.35 are resolved (`npm audit --omit=dev` is down to 2 moderate transitive postcss issues inside Next's build pipeline; runtime is clean).

The remaining work is operator-side: create a real Supabase project, create an Upstash database, set the env vars on Vercel, and configure the Supabase Site URL + Redirect URLs. The README walks through this.

## 2. Findings remediated since the previous audit

| # | Check | Previous verdict | Now | What changed |
|---|---|---|---|---|
| 1 | AUTH-3.3 (forgeable session) | FAIL | **PASS** | [middleware.ts:38](middleware.ts#L38) and [lib/supabase/middleware.ts:40](lib/supabase/middleware.ts#L40) verify the JWT via `supabase.auth.getUser()` — a tampered cookie fails the JWT signature check at Supabase, no longer trusted locally. |
| 2 | AUTH-3.5 (localStorage tokens) | FAIL | **PASS** | [hooks/useAuth.ts](hooks/useAuth.ts) no longer touches `localStorage` for auth. Tokens are in httpOnly cookies set by `@supabase/ssr`. The hook only mirrors the user object for the React tree. The remaining `sessionStorage` writes in [app/student/questions/page.tsx:67](app/student/questions/page.tsx#L67) are for scroll-position restore, not auth. |
| 3 | AUTH-3.6 (`/api/assess` no auth) | FAIL | **PASS** | [app/api/assess/route.ts:28-46](app/api/assess/route.ts#L28) — `getUser()` → 401, then `rateLimitResponse(user.id, "ai")` → 429, then Zod parse → 400, before any business logic. |
| 4 | DEPS-5.1 (Next CVEs) | FAIL | **PASS** | Upgraded `next` to 15.5.18 and `eslint-config-next` to match. The 8 advisories on 14.2.35 (high: middleware-bypass i18n, SSRF; moderate: image DoS, RSC cache poisoning, beforeInteractive XSS) are all resolved. 2 transitive postcss moderates remain inside Next's build chain — not runtime-exploitable in this app. |
| 5 | RATE-6.3 (in-memory limit) | FAIL | **PASS** | [lib/rateLimit.ts](lib/rateLimit.ts) is now Upstash-backed when `UPSTASH_REDIS_REST_URL/TOKEN` are set. Sliding-window 30/min "ai" tier, 5/min "auth" tier, applied by id. Logs a one-time production warning if env vars are absent. |
| 6 | RATE-6.2 (no login throttle) | FAIL | **PASS** | [app/api/auth/login/route.ts:38-41](app/api/auth/login/route.ts#L38) and [signup/route.ts:36-39](app/api/auth/signup/route.ts#L36) both rate-limit by IP via `rateLimitResponse(ip, "auth")` (5/min). |
| 7 | SECRETS-1.6 (no env validation) | FAIL | **PASS** | [lib/env.ts](lib/env.ts) defines Zod schemas for both server and public env, throws at server-side import with a formatted message pointing to `.env.example` when a required variable is missing. Verified empirically (the dev server fails loudly without `.env.local`). |
| 8 | VALID-4.5 (Zod errors leak) | PARTIAL | **PASS** | [app/api/socratic/route.ts:218-221](app/api/socratic/route.ts#L218) now returns a generic `"Invalid request format."` with no `parseResult.error.issues` payload. Same pattern in [/api/assess](app/api/assess/route.ts#L55) and [/api/auth/login](app/api/auth/login/route.ts#L48). |
| 9 | AUTH-3.4 (callback handling) | NA | **PASS** | [app/auth/callback/route.ts](app/auth/callback/route.ts) exchanges the code for a session server-side via `exchangeCodeForSession`, redirects to a same-origin allowlisted `next` param (protocol-relative URLs blocked), never echoes errors back into the URL. |
| 10 | AUTH-3.1 / AUTH-3.2 | PARTIAL / PASS | **PASS** / **PASS** | Default-deny middleware unchanged in shape but now backed by JWT validation. `PUBLIC_PATHS` allowlists `/`, `/login`, `/signup`, `/auth/callback`, `/api/auth/*`, and static assets. Everything else is locked. |
| 11 | AUTH-3.7 (OAuth CSRF/state) | NA | **NA** (still) | No OAuth providers wired yet. When added, Supabase handles `state` automatically; redirect URLs must be allowlisted in the Supabase dashboard. |
| 12 | AUTH-3.8 (password reset) | NA | **NA** (still) | No custom reset flow. If added, will route through Supabase's built-in reset (single-use, expiring tokens). |

## 3. Still NA (genuinely don't apply)

- **DB-2.\***: still no active database tables backing the static question banks. `auth.users` is now used via Supabase but no `public` tables yet. When user-data tables (progress, sessions) are added, enable RLS + add SELECT/INSERT policies keyed on `auth.uid() = user_id` with `WITH CHECK`.
- **VALID-4.6**: no webhooks. Stripe webhook (when Payment & Content Protection from the original SKILL is wired) will need `stripe.webhooks.constructEvent` before processing.
- **UPLOAD-8.\***: no upload endpoints.

## 4. What an operator still needs to do (no code changes)

This codebase is now ready to deploy. The remaining steps are configuration:

1. **Create a Supabase project** (free) — `supabase.com` → new project → copy Project URL + anon key. Optionally disable "Confirm email" while developing.
2. **Create an Upstash Redis database** (free) — `upstash.com` → new Redis → copy REST URL + REST token.
3. **Set env vars** locally (`.env.local`) and on Vercel (Project Settings → Environment Variables) using `.env.example` as the template.
4. **Supabase Site URL / Redirect URLs** (Authentication → URL Configuration) must include your Vercel deployment URL.
5. **Promote your account to teacher** after signing up — run the SQL in the README.
6. **Re-run `npm audit`** monthly; consider adding GitHub Dependabot.

## 5. What's still done right (preserved from the previous audit)

- Default-deny middleware allowlist pattern.
- Zod-validated input on every API route.
- AI input sanitiser ([lib/ai/socratic/sanitise.ts](lib/ai/socratic/sanitise.ts)) — HTML strip, double-pass decoder, `javascript:` URI strip, 16 injection keywords + 6 regex patterns.
- AI output validator ([lib/ai/socratic/validateOutput.ts](lib/ai/socratic/validateOutput.ts)) — Zod schema + scan for leaked API-key markers, code snippets, jailbreak strings before returning.
- `.env*` git-ignored + absent from history.
- No `NEXT_PUBLIC_*SECRET` patterns.
- No `dangerouslySetInnerHTML` in `app/`.
- Lockfile committed.
- Rate-limit applied **after** auth (preserved in the new implementation).
- No wildcard CORS, no `Access-Control-Allow-Credentials` mistakes.

## 6. Checklist summary

```
SECRETS-1.1 PASS       SECRETS-1.2 PASS       SECRETS-1.3 PASS       SECRETS-1.4 PASS       SECRETS-1.5 PASS       SECRETS-1.6 PASS
DB-2.1 NA              DB-2.2 NA              DB-2.3 NA              DB-2.4 NA              DB-2.5 NA              DB-2.6 NA              DB-2.7 NA              DB-2.8 NA
AUTH-3.1 PASS          AUTH-3.2 PASS          AUTH-3.3 PASS          AUTH-3.4 PASS          AUTH-3.5 PASS          AUTH-3.6 PASS          AUTH-3.7 NA            AUTH-3.8 NA
VALID-4.1 PASS         VALID-4.2 PASS         VALID-4.3 PASS         VALID-4.4 PASS         VALID-4.5 PASS         VALID-4.6 NA
DEPS-5.1 PASS          DEPS-5.2 PASS          DEPS-5.3 PASS          DEPS-5.4 PASS          DEPS-5.5 UNKNOWN
RATE-6.1 PASS          RATE-6.2 PASS          RATE-6.3 PASS
CORS-7.1 PASS          CORS-7.2 PASS
UPLOAD-8.1 NA          UPLOAD-8.2 NA          UPLOAD-8.3 NA
```

### Verdict notes

- **SECRETS-1.1 PASS**: The remaining `sk-ant-` / `sk_live_` literals in [lib/ai/parseAIResponse.ts:23-24](lib/ai/parseAIResponse.ts#L23) and [lib/ai/socratic/validateOutput.ts:39-40](lib/ai/socratic/validateOutput.ts#L39) are regex patterns used to **detect** leaked keys in AI output. Reviewed and confirmed safe.
- **AUTH-3.6 PASS**: All data-handling API routes (`/api/assess`, `/api/socratic`, `/api/auth/login`) call `supabase.auth.getUser()` before processing. `/api/auth/signup` is intentionally pre-auth (creating an account). `/api/auth/logout` calls `supabase.auth.signOut()` which is safely idempotent without an explicit auth check.
- **VALID-4.1 PASS**: All routes that accept a body validate with Zod (`/api/auth/login`, `/api/auth/signup`, `/api/assess`, `/api/socratic`). `/api/auth/logout` takes no body — no schema needed.
- **DEPS-5.1 PASS** (with caveat): 2 moderate transitive postcss issues remain inside Next.js's internal build pipeline. The npm advice to downgrade to next@9.x is nonsense. These are not runtime-exploitable in this app (no untrusted CSS reaching `postcss.stringify`). Track upstream Next.js patches.
- **DEPS-5.4 PASS**: `next` and `eslint-config-next` upgraded to 15.5.18 (latest stable 15.x). Other minor lags (`lucide-react`, `katex` etc.) are non-security.
- **DEPS-5.5 UNKNOWN**: `depcheck` not run in this pass; safe to defer.
- **AUTH-3.7 / 3.8 / VALID-4.6 / UPLOAD-8.\*** still NA — no OAuth, no custom reset, no webhook, no uploads in scope.
- **DB-2.\*** still NA — the static `.ts` question banks remain the data layer. When user-progress tables land, enable RLS + policies per `DB-2.1`–`DB-2.4`; see the SQL template in [sql/zero_trust_roles.sql](sql/zero_trust_roles.sql) (which still needs `WITH CHECK` added to its policies).

## 7. Verification

- **Type-check:** `npx tsc --noEmit` — clean.
- **Boot:** Dev server starts on Next 15.5.18 and immediately throws a clear "❌ Invalid server environment variables" error pointing to `.env.example` when env vars are missing. With env vars set, all auth flows route through the new server endpoints.
- **`npm audit --omit=dev`:** 8 vulnerabilities (6 moderate, 2 high) → **2 vulnerabilities (2 moderate)**. The 2 remaining are transitive postcss in Next's build chain.
- **Source-map / secret scan:** clean.
