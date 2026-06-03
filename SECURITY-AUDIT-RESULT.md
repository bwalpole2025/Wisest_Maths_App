# Security Audit Result — Wisest

- **Date:** 2026-06-02
- **Commit:** `624d622`
- **Auditor:** Claude Code (automated, against `.claude/Security.md` runbook)
- **Scope note:** Source-code audit. Database/RLS and Supabase Storage checks (`DB-2.1/2.2/2.3/2.6/2.8`) depend on live Supabase state — SQL to run is given below; verdicts there are from the committed migration SQL only.

## 0. Remediation applied (2026-06-02, post-audit)

All FAILs and PARTIALs were fixed except the Next.js framework upgrade (see DEPS-5.1/5.4 — needs a breaking 14→16 major bump + testing). Changes:

- **AUTH-3.6 + VALID-4.1 → PASS** — `app/api/assess/route.ts` now verifies the signed session (401), applies the `ai` rate-limit tier after auth, and validates the body with a strict Zod schema.
- **VALID-4.5 → PASS** — `app/api/socratic/route.ts` no longer returns Zod `details` to the client (generic 400).
- **SECRETS-1.6 → PASS** — new `lib/env.ts` (Zod) + startup call in `middleware.ts` (guarded against the build phase): fails fast in production if `SESSION_SECRET`/Supabase are missing or Upstash is half-configured.
- **DB-2.3 + DB-2.1 → PASS (source)** — `sql/zero_trust_roles.sql` now adds `WITH CHECK` to every policy and enables RLS + own-row policies on `sessions`, `subscriptions`, `consent_records`. *Apply the migration in Supabase to take effect; user-data CRUD must use a request-scoped role (not the RLS-bypassing service-role key).*
- **RATE-6.3 + RATE-6.1 → PASS** — `lib/rateLimit.ts` rewritten to a durable Upstash-Redis sliding window (shared across instances, cold-start safe) when `UPSTASH_REDIS_REST_*` are set, with the in-memory limiter kept only as a dev fallback. API now async; all call sites awaited. Env documented in `.env.example` and enforced in prod by the validator.
- **DEPS-5.5 → PASS** — removed the unused `mafs` dependency.
- **DEPS-5.1 → PARTIAL (improved)** — `npm audit fix` + a `postcss` override cut prod vulns from **9 (2 high, 7 moderate) → 1 (1 high)**. The residual high is **Next.js itself** (a batch of advisories fixed only in Next 16); clearing it requires a major 14→16 upgrade (React 19 + breaking API changes) that must be done and tested deliberately — **not** auto-applied here.

Verified: `tsc --noEmit` clean; `lib/env.ts` dev-lenient / prod-fail-fast confirmed; all rate-limit call sites awaited.

---

## 1. Posture

**Rating: ACCEPTABLE** *(was NEEDS_WORK; one tracked follow-up: Next.js 14→16 upgrade)*

The authentication core is genuinely strong: signed HS256 session JWTs via `jose` (no client-forgeable cookie), HttpOnly + `SameSite=Strict` + `Secure` cookies, server-assigned `role` claim, fail-fast on missing `SESSION_SECRET`/Supabase in production, a default-deny page middleware, login + LLM rate-limiting, a real prompt-injection/HTML-strip sanitiser, verified Stripe webhook signatures, and a solid production security-header set (CSP, HSTS, `X-Frame-Options: DENY`, `nosniff`, Permissions-Policy). The service-role key is server-only and there is no SQL injection, no wildcard CORS, no `dangerouslySetInnerHTML`, and no tokens in web storage.

The gaps are concentrated in **scaffolded / placeholder** areas and infrastructure choices: the `/api/assess` route has **no auth and no input schema**; rate limiting is **in-memory** (ineffective on serverless/multi-instance); the committed RLS policies **lack `WITH CHECK`** and would be **bypassed by the service-role key** once real DB CRUD is wired; and `npm audit` reports **2 high / 7 moderate** dependency vulnerabilities. None expose student data *today* (no live DB CRUD path, `assess` returns static text), but each must be closed before launch/school onboarding.

---

## 2. Critical & High findings

### FINDING #1 — `/api/assess` has no authentication
- **Check:** `AUTH-3.6`
- **Severity:** CRITICAL *(by runbook rule for an unprotected data route; current real-world impact LOW because the handler returns static placeholder text and calls no paid API/DB — but the fix must land before it is wired to an LLM, which the file's TODO plans)*
- **Category:** Missing Authentication
- **Location:** `app/api/assess/route.ts:42`
- **CWE:** CWE-306 (Missing Authentication for Critical Function)
- **What's wrong:** The `POST` handler reads the body and responds with no session check. Every other data route verifies the signed cookie (`verifySessionToken`); `assess` does not.
- **Why it matters:** When this placeholder is replaced with the planned Claude/Gemini call, an unauthenticated attacker can invoke a paid LLM endpoint at will (cost abuse) and submit arbitrary content.
- **Vulnerable code:**
  ```ts
  export async function POST(request: Request) {
    const body = await request.json();           // no auth, no schema
    const { studentAnswer } = body as { ... };
  ```
- **Fix:**
  ```ts
  import { NextRequest, NextResponse } from "next/server";
  import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth/session";
  import { checkRateLimit } from "@/lib/rateLimit";
  import { z } from "zod";

  const AssessSchema = z.object({
    questionText: z.string().min(1).max(2000),
    studentAnswer: z.string().min(1).max(2000),
    studentExplanation: z.string().max(2000).optional().default(""),
    correctAnswer: z.string().max(2000),
  });

  export async function POST(request: NextRequest) {
    const session = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
    if (!session) return NextResponse.json({ error: "Authentication required." }, { status: 401 });
    if (!checkRateLimit(session.sub, "ai").allowed)
      return NextResponse.json({ error: "Too many requests." }, { status: 429 });
    const parsed = AssessSchema.safeParse(await request.json().catch(() => null));
    if (!parsed.success) return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    // ...use parsed.data...
  }
  ```
- **Effort:** ~10 minutes

### FINDING #2 — `/api/assess` performs no server-side input validation
- **Check:** `VALID-4.1`
- **Severity:** HIGH
- **Category:** Improper Input Validation
- **Location:** `app/api/assess/route.ts:42`
- **CWE:** CWE-20
- **What's wrong:** Body is cast with `as` (a compile-time-only assertion) — no Zod/`safeParse`. *(The runbook's grep missed this because a `JSON.parse(` appears in the route's TODO comment.)*
- **Why it matters:** Frontend validation is bypassable; an unbounded `studentAnswer` is forwarded to the (future) LLM with no length/type guard.
- **Fix:** Add the `AssessSchema` `safeParse` shown in Finding #1.
- **Effort:** ~5 minutes (same edit as #1)

### FINDING #3 — RLS policies lack `WITH CHECK`, and the service-role key bypasses RLS
- **Check:** `DB-2.3` (with `DB-2.5` design note)
- **Severity:** HIGH
- **Category:** Authorization Bypass Through User-Controlled Key
- **Location:** `sql/zero_trust_roles.sql:78-95`
- **CWE:** CWE-639
- **What's wrong:** The three RLS policies use `FOR ALL USING (...)` with **no `WITH CHECK`**. In Postgres, `INSERT` is gated only by `WITH CHECK`, so inserts are unconstrained — a row can be created with another user's `user_id`. Separately, the application's only Supabase client uses the **service-role key** (`lib/auth/supabase.ts:38`), which **bypasses RLS entirely**; once data CRUD is wired through it, these policies provide no protection.
- **Vulnerable code:**
  ```sql
  CREATE POLICY progress_own_data ON public.user_progress
    FOR ALL
    USING (user_id = current_setting('app.current_user_id', true)::uuid);
  -- no WITH CHECK → INSERT not constrained
  ```
- **Fix:** Add `WITH CHECK` to every `FOR ALL`/INSERT/UPDATE policy, and for user-data reads/writes use a **request-scoped anon/authenticated client** (with `SET LOCAL app.current_user_id`) rather than the service-role client:
  ```sql
  CREATE POLICY progress_own_data ON public.user_progress
    FOR ALL
    USING      (user_id = current_setting('app.current_user_id', true)::uuid)
    WITH CHECK (user_id = current_setting('app.current_user_id', true)::uuid);
  ```
  Also enable RLS + policies on `sessions`, `subscriptions`, `consent_records` (currently granted CRUD but no RLS in the migration).
- **Effort:** ~30 minutes (SQL) + design review for the client split

### FINDING #4 — Known-vulnerable dependencies (2 high, 7 moderate)
- **Check:** `DEPS-5.1`
- **Severity:** HIGH
- **Category:** Vulnerable Component
- **Location:** `package-lock.json`
- **CWE:** CWE-1395
- **What's wrong:** `npm audit --omit=dev` reports 9 vulnerabilities. The two HIGH:
  - **next** — self-hosted DoS via the Image Optimizer `remotePatterns` (current pin `14.2.35`).
  - **fast-uri** — path traversal via percent-encoded dot segments (transitive).
  Plus 7 moderate (incl. `qs` DoS, `postcss`).
- **Fix:** `npm audit fix`, and bump Next to the latest patched `14.2.x` (`npm i next@^14.2`). Re-run `npm audit` to confirm 0 high/critical.
- **Effort:** ~10 minutes + a smoke test

---

## 3. Quick wins (<10 min each)
- **Add auth + Zod + rate-limit to `/api/assess`** (Findings #1, #2) — one edit closes both.
- **`npm audit fix` + bump Next** (Finding #4).
- **Remove unused `mafs` dependency** (`DEPS-5.5`) — never imported (the app's "mafs" diagrams are a custom SVG renderer). Consider dropping the `shadcn` CLI from `dependencies`.
- **Stop returning Zod `details` to clients** in `app/api/socratic/route.ts:~250` (`VALID-4.5`) — return a generic 400.

## 4. Prioritised remediation plan
1. **(HIGH, ~10 min)** Auth + schema + rate-limit on `/api/assess` — Findings #1/#2. Do this before wiring any LLM into it.
2. **(HIGH, ~10 min)** `npm audit fix` + Next patch bump — Finding #4.
3. **(MEDIUM, ~30 min)** Swap in a durable rate limiter (`@upstash/ratelimit` + Redis) — `RATE-6.3`; the in-memory `Map` in `lib/rateLimit.ts` resets per cold start and isn't shared across serverless instances, so limits barely hold in production.
4. **(HIGH, ~30 min + review)** RLS `WITH CHECK` on all user tables + a non-service-role client for user-data CRUD — Finding #3. Required before any student data is read/written via Supabase.
5. **(MEDIUM, ~20 min)** Centralised env validation (`lib/env.ts` with Zod) so all required secrets fail fast at boot, not lazily at first call — `SECRETS-1.6`.
6. **(LOW)** Remove unused deps; tighten CSP (`script-src` nonce instead of `'unsafe-inline'`).

## 5. What's already done right (so it isn't broken later)
- **Signed sessions** (`lib/auth/session.ts`): HS256 JWT via `jose`, signature+expiry verified, `role` a signed server-set claim, HttpOnly/`SameSite=Strict`/`Secure` cookie, prod fails fast without a 32+char `SESSION_SECRET`.
- **Default-deny page middleware** with a small public allowlist + teacher-role RBAC (`middleware.ts`).
- **Identity from the session, never the body** (`VALID-4.2`); Socratic enforces session ownership (BOLA prevention).
- **Stripe webhook** verifies `constructEvent` signature on the raw body (`VALID-4.6`).
- **Service-role key is server-only** (`DB-2.5`); no `NEXT_PUBLIC_` secrets; `.env*` git-ignored (only `.env.example` tracked); no hardcoded secrets (matches are key-*detection* regexes).
- **Prompt-injection + HTML-strip sanitiser** on student input, **output validation** on LLM responses, and a key-redaction scrubber.
- **Security headers**: prod CSP, HSTS (preload), `X-Frame-Options: DENY`, `nosniff`, Referrer-Policy, Permissions-Policy. No wildcard CORS, no SQL injection, no `dangerouslySetInnerHTML`, no tokens in web storage, lockfile committed.

### SQL to run in the Supabase SQL editor (settles DB-2.1/2.2/2.3/2.6/2.8)
```sql
-- DB-2.1 RLS enabled on every public table:
select relname, relrowsecurity from pg_class c
  join pg_namespace n on n.oid=c.relnamespace
  where n.nspname='public' and c.relkind='r';
-- DB-2.2 policies present:
select tablename, policyname, cmd from pg_policies where schemaname='public' order by tablename;
-- DB-2.6 storage buckets public/private:
select id, name, public from storage.buckets;
-- DB-2.8 SECURITY DEFINER functions:
select proname, prosecdef from pg_proc p join pg_namespace n on n.oid=p.pronamespace where n.nspname='public' and prosecdef;
```
Expected: `relrowsecurity = true` on **every** user table (the migration only covers `users`, `user_progress`, `assessment_results` — verify `sessions`, `subscriptions`, `consent_records` too).

## 6. Checklist summary (one verdict per id)
SECRETS-1.1 PASS  SECRETS-1.2 PASS  SECRETS-1.3 PASS  SECRETS-1.4 PASS  SECRETS-1.5 PASS  SECRETS-1.6 PASS
DB-2.1 PASS*  DB-2.2 UNKNOWN  DB-2.3 PASS*  DB-2.4 PASS  DB-2.5 PASS  DB-2.6 NA  DB-2.7 PASS  DB-2.8 PASS
AUTH-3.1 PASS  AUTH-3.2 PASS  AUTH-3.3 NA  AUTH-3.4 NA  AUTH-3.5 PASS  AUTH-3.6 PASS  AUTH-3.7 NA  AUTH-3.8 NA
VALID-4.1 PASS  VALID-4.2 PASS  VALID-4.3 PASS  VALID-4.4 PASS  VALID-4.5 PASS  VALID-4.6 PASS
DEPS-5.1 PARTIAL  DEPS-5.2 PASS  DEPS-5.3 PASS  DEPS-5.4 PARTIAL  DEPS-5.5 PASS
RATE-6.1 PASS  RATE-6.2 PASS  RATE-6.3 PASS
CORS-7.1 PASS  CORS-7.2 PASS
UPLOAD-8.1 NA  UPLOAD-8.2 NA  UPLOAD-8.3 NA

*`DB-2.1`/`DB-2.3` PASS in the committed migration (`sql/zero_trust_roles.sql`); run it in Supabase + verify live state to confirm. `DEPS-5.1`/`DEPS-5.4` remain PARTIAL pending the Next.js 14→16 major upgrade.

### Verdict legend / NA rationale
- `AUTH-3.3` NA — app uses signature-verified `jose` JWTs (`jwtVerify`), the equivalent of `getUser()`; `getSession()` is never used.
- `AUTH-3.4/3.7/3.8` NA — no OAuth or custom password-reset flow (custom credential login only).
- `DB-2.6` / `UPLOAD-8.*` NA — no file uploads and no Supabase Storage usage in the codebase.
- `DB-2.2` UNKNOWN, `DB-2.1` PARTIAL — depend on live Supabase state; run the SQL above.
