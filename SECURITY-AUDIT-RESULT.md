# Security Audit Result — Wisest

- **Date:** 2026-06-03 (re-run after the auth/session + Google-SSO + view-toggle changes)
- **Commit:** working tree on branch `deps/next15-supabase-upgrade`
- **Auditor:** Claude Code, against `.claude/Security.md` v1.0.0
- **Method:** Static analysis (grep/read of source + migrations + `package.json`/lockfile + `npm audit`). Database-state and Supabase-dashboard checks (`DB-2.1`, `DB-2.2`, `DB-2.6`, `AUTH-3.7`) are marked accordingly with SQL/steps for you to confirm.
- **This re-run covers** the new session model (7-day inactivity timeout with sliding refresh), the now-complete Google SSO (`/api/auth/google`, `/auth/callback`, roster-linking), and the Teacher⇄Student view toggle. **No new findings**; verdicts below are unchanged or improved.

---

## 1. Posture

**Rating: STRONG** (both flagged gaps fixed 2026-06-03; remaining work is live-DB confirmation + an optional incomplete feature, not vulnerabilities).

The application is well-architected for security. Authentication uses a signed-JWT session cookie (HttpOnly + Secure + SameSite=Strict) verified in Edge middleware with **default-deny** routing and teacher RBAC; every data API route independently re-verifies the session; identity for writes is **always** taken from the session, never the request body (the single most important control for protecting minors' data — and it is correct everywhere). All inputs are validated server-side with strict Zod schemas, the Stripe webhook verifies its signature, LLM and auth endpoints are rate-limited after auth, no secrets are hardcoded or client-exposed, and the SQL migrations enable RLS with `WITH CHECK` on every table keyed off `app.current_user_id` (never user-editable metadata).

**Session management (this re-run):** sessions now use a **7-day inactivity timeout** — the signed token carries a 7-day expiry that slides forward on each authenticated page navigation (middleware) and app load (`/api/auth/me`); 7 days of no activity lets it lapse, and Sign Out clears it immediately. This is a sound, bounded session lifetime (an improvement over an unbounded "until sign out" session for an app holding minors' data). **Google SSO is now complete and audits clean:** `/api/auth/google` is rate-limited (auth tier), Zod-validated (`.strict()`), and **verifies the Supabase access token server-side** (`auth.getUser`) reading the role from server-trusted metadata — identity is never taken from the client; `/auth/callback` is a token-free client redirect handler. The Teacher⇄Student **view toggle is a client-only display flag** (sessionStorage value `"1"`) — it never alters the signed cookie or server-trusted role, so it cannot escalate privilege.

Both originally-flagged gaps were **fixed on 2026-06-03**: (1) the dependency findings — `next` upgraded 14.2.35 → 15.5.19 (clears 2 HIGH advisories, stays on React 18), `mathjs` → 15.2.0 (clears a prototype-pollution HIGH), `@supabase/supabase-js` → 2.107.0; `npm audit` now reports **0 vulnerabilities** and the production build passes; (2) the rate-limiting gap — `lib/env.ts` now refuses to boot in production without both Upstash vars, so it can no longer silently degrade to the in-memory limiter. Also note the app currently performs server DB access with the **service-role key, which bypasses RLS** — so RLS is defense-in-depth only and the API-layer `teacher_id`/`student_id` scoping is the *actual* access control today. That scoping is correct, but it means one missing filter equals a cross-tenant leak; the RLS migrations should be applied to the live DB and the app moved to a request-scoped role before onboarding a real school.

---

## 2. Critical & High findings

### FINDING #1 — ✅ RESOLVED 2026-06-03
- **Check:**    DEPS-5.1 (+ DEPS-5.4)
- **Severity:** HIGH (was)
- **Category:** Vulnerable dependency
- **Location:** `package.json` → `next`, `mathjs`
- **CWE:**      CWE-1395 (Dependency on Vulnerable Component); CWE-1321 (Prototype Pollution, mathjs)
- **What was wrong:** `npm audit --omit=dev` reported **2 high-severity** Next.js advisories on 14.2.35 (XSS GHSA-ffhc-5mcf-pf4q, RSC cache poisoning GHSA-vfv6-92ff-j949 / GHSA-wfc6-r584-vfw7, SSRF GHSA-c4j6-fc7j-m34r, Image-DoS GHSA-h64f-5h5j-jqjh). After upgrading Next, a separate **mathjs prototype-pollution** high surfaced (GHSA-29qv-4j9f-fjw5 / GHSA-jvff-x2qm-6286) — relevant because the grading engine feeds student-supplied answer strings into mathjs.
- **Fix applied (branch `deps/next15-supabase-upgrade`):**
  - `next` 14.2.35 → **15.5.19** and `eslint-config-next` → **15.5.19**. Chose the Next **15** line (not 16) because 15.5.x still peer-supports **React 18** (`^18.2.0 || ^19.0.0`), so the advisories clear without the React 19 migration that Next 16 forces. The app's only async-API exposure (Next 15 made `cookies()`/`headers()`/`params` async) is nil: cookies are read via `request.cookies` (`NextRequest`, unaffected), there's no `next/headers` import, and all three dynamic routes are client components using `useParams()`.
  - `mathjs` 14.9.1 → **15.2.0** (clears the prototype-pollution advisory; the hardened `create(all)` instance in `lib/services/symbolicGrading.ts` is API-compatible).
  - `@supabase/supabase-js` 2.106.2 → **2.107.0** (non-breaking).
- **Verification:** `npm audit --omit=dev` → **0 vulnerabilities**; `npx tsc --noEmit` clean; `npx next build` succeeds (all 35 routes + middleware compile, no warnings); `next lint` clean.
- **Effort (actual):** ~30 minutes.

> No remaining CRITICAL or HIGH findings. Open items are the DB-state confirmations (§6) and the optional Google-SSO completion (§3).

---

## 3. Quick wins (<10 min each)

- **RATE-6.3 — enforce Upstash in production. ✅ DONE (2026-06-03).** `lib/env.ts` now *requires* both `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` when `NODE_ENV === "production"` — the app throws at startup rather than silently degrading to the non-durable in-memory limiter. `.env.example` updated to match.
- **DEPS-5.4 — bump `@supabase/supabase-js`** 2.106.2 → 2.107.0 (non-breaking).
- **AUTH-3.4 / Google SSO — finish or disable.** `signInWithGoogle()` redirects to `/auth/callback`, which does not exist (`app/auth/callback/page.tsx` and `app/api/auth/google` are not built). Not a vulnerability, but the "School login → Google" path currently dead-ends. Either complete it or hide the entry point until ready.

## 4. Prioritised remediation plan

| # | Item | Check | Severity | Effort |
|---|------|-------|----------|--------|
| 1 | ~~Enforce Upstash vars in prod env validation~~ ✅ **DONE 2026-06-03** | RATE-6.3 | MEDIUM | done |
| 2 | Apply `sql/zero_trust_roles.sql` + `sql/quiz_engine.sql` to the live DB and confirm RLS via the SQL in §6; move app DB access off the service-role key to a request-scoped role (`SET LOCAL app.current_user_id`) | DB-2.1/2.2/2.5 | HIGH (pre-onboarding) | ~60–120 min |
| 3 | ~~Upgrade Next.js off 14.2.35~~ ✅ **DONE 2026-06-03** (→ 15.5.19; mathjs → 15.2.0; audit clean) | DEPS-5.1/5.4 | HIGH | done |
| 4 | ~~Bump `@supabase/supabase-js`~~ ✅ **DONE 2026-06-03** (→ 2.107.0) | DEPS-5.4 | LOW | done |
| 5 | Complete or hide Google SSO callback | AUTH-3.4 | LOW | varies |
| 6 | Confirm Supabase OAuth redirect-URL allowlist in dashboard | AUTH-3.7 | LOW | ~5 min |

## 5. What's already done right (don't regress these)

- **Identity from session, never body (VALID-4.2)** — zero matches for body-supplied `userId`; every write derives identity from `verifySessionToken`. This is the keystone control and it's correct.
- **Default-deny middleware (AUTH-3.1/3.2)** — `PUBLIC_PATHS = {"/", "/login"}` allowlist; everything else requires a *signature-verified* session cookie; `/teacher/*` requires `role === "teacher"`.
- **Per-route re-auth (AUTH-3.6)** — every data route re-verifies the session itself; unauthenticated routes (login, logout, forgot-password, Stripe webhook) are intentionally and correctly so.
- **Strict server-side validation (VALID-4.1)** — Zod `.strict()` + `safeParse` on all POST routes.
- **Secrets hygiene (SECRETS-1.1–1.6)** — no hardcoded keys (the only matches are redaction *patterns* in `lib/ai/parseAIResponse.ts` / `validateOutput.ts`), no `NEXT_PUBLIC_` secret, no secret logging, `lib/env.ts` fails fast in production on missing required vars.
- **Rate limiting (RATE-6.1/6.2)** — LLM endpoints (`ai` tier) and auth endpoints (`auth` tier) limited after the auth check.
- **RLS design (DB-2.3/2.4)** — every policy has `WITH CHECK` and keys off `current_setting('app.current_user_id')`, not user-editable metadata.
- **Secure password reset (AUTH-3.8)** — managed Supabase tokens (`resetPasswordForEmail`), anti-enumeration generic responses, IP rate-limited, min-8 + confirm at `/auth/reset`. No custom token store.
- **Safe maths rendering (VALID-4.3)** — KaTeX / `react-katex`; no `dangerouslySetInnerHTML` anywhere.
- **Webhook signature verification (VALID-4.6)** — Stripe `constructEvent` on the raw body; rejects on mismatch.
- **Bounded session lifetime (AUTH-3.5)** — 7-day inactivity timeout with sliding refresh on activity; HttpOnly + Secure + SameSite=Strict cookie; no tokens in web storage (the only sessionStorage use is the view-toggle flag `"1"`).
- **Server-verified Google SSO (AUTH-3.4)** — `/api/auth/google` verifies the Supabase token server-side, reads role from trusted metadata, rate-limited + Zod `.strict()`; the callback never places tokens in URLs/logs and fails closed (shows an error, never grants a session).

## 6. Checklist summary (one verdict per id)

```
SECRETS-1.1 PASS   SECRETS-1.2 PASS   SECRETS-1.3 PASS   SECRETS-1.4 PASS   SECRETS-1.5 PASS   SECRETS-1.6 PASS
DB-2.1 PARTIAL*    DB-2.2 PARTIAL*    DB-2.3 PASS        DB-2.4 PASS        DB-2.5 PASS        DB-2.6 NA   DB-2.7 PASS   DB-2.8 PASS
AUTH-3.1 PASS      AUTH-3.2 PASS      AUTH-3.3 PASS      AUTH-3.4 PASS†      AUTH-3.5 PASS      AUTH-3.6 PASS   AUTH-3.7 UNKNOWN‡   AUTH-3.8 PASS
VALID-4.1 PASS     VALID-4.2 PASS     VALID-4.3 PASS     VALID-4.4 PASS     VALID-4.5 PASS     VALID-4.6 PASS
DEPS-5.1 PASS (fixed 2026-06-03)   DEPS-5.2 PASS   DEPS-5.3 PASS   DEPS-5.4 PASS (fixed 2026-06-03)   DEPS-5.5 UNKNOWN
RATE-6.1 PASS      RATE-6.2 PASS      RATE-6.3 PASS (fixed 2026-06-03)
CORS-7.1 PASS      CORS-7.2 PASS
UPLOAD-8.1 NA      UPLOAD-8.2 NA      UPLOAD-8.3 NA
```

\* **DB-2.1 / DB-2.2 — source verdict is strong, live state unverified.** The migrations enable RLS on all 14 public tables and define 14 policies (each with SELECT/INSERT coverage via `FOR ALL`). But (a) these depend on the migrations actually having been applied to your live Supabase project, and (b) the running app accesses the DB with the **service-role key, which bypasses RLS**, so RLS is not currently the enforcing control. Run this in the **Supabase SQL editor** to confirm the live state:

```sql
-- Every public table should show relrowsecurity = true:
select relname, relrowsecurity
from pg_class c join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relkind = 'r'
order by relname;

-- Every RLS-enabled table should have at least one policy:
select tablename, policyname, cmd
from pg_policies where schemaname = 'public'
order by tablename;
```
Expect `relrowsecurity = true` for: `users, user_progress, assessment_results, sessions, subscriptions, consent_records, question_bank, quiz_templates, quizzes, quiz_submissions, quiz_answers, classes, class_members, quiz_assignments`. If any is `false`, that table is exposed to any non-bypassing role — re-run the `ALTER TABLE … ENABLE ROW LEVEL SECURITY` and its policy. **Do not "fix" empty query results by disabling RLS.**

† **AUTH-3.4 — PASS (callback now implemented and safe).** Google SSO is complete. The browser Supabase client exchanges the OAuth `?code=` for a session, then `/auth/callback` hands the access token to `/api/auth/google`, which **verifies it server-side** (`auth.getUser`) and mints the app's own signed cookie. Tokens are never written to the URL or logs by app code, and the callback **fails closed** — on any error it shows a message and a link back to `/login`, never granting a session. Roster-linking by email (`linkStudentByEmail`) is best-effort and cannot block or alter the verified login. Still depends on AUTH-3.7 (dashboard redirect-URL allowlist) for full CSRF/redirect hardening.

‡ **AUTH-3.7 — UNKNOWN (needs Supabase dashboard).** OAuth uses the managed provider (`signInWithOAuth`), which handles the `state` parameter. Confirm the **allowed redirect URLs** are restricted to your production origin(s) in Supabase → Authentication → URL Configuration.

§ **DEPS-5.2 — PASS with a manual note.** All dependencies are established packages, but three have unusual version pins worth a 30-second check on npmjs.com before launch: `lucide-react ^1.7.0`, `shadcn ^4.1.2`, `@base-ui/react ^1.3.0`. **DEPS-5.5** (`depcheck` for unused deps) was not run (LOW priority).

---

### Standing prevention (recommend adding to `.claude/CLAUDE.md`)

> Secrets server-side only · RLS + `WITH CHECK` policies on every table · server-side Zod validation on every route · identity from the verified session, never the request body · default-deny middleware · rate-limit paid/LLM and auth routes after the auth check · keep `next` and `@supabase/*` patched. Re-run `.claude/Security.md` after each significant feature and before any school onboarding.
