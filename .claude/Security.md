# SECURITY.md — Wisest Security Audit (single-file runbook for Claude Code)

> **Claude Code: read this whole file, then audit the codebase against every check below.** Each check has runnable `verify` commands, a pass/fail rule, and a fix. Run the commands from the repo root, decide a verdict per check, and write the result to `SECURITY-AUDIT-RESULT.md`. **Never mark a check PASS without evidence** — if you cannot verify it here, mark it `UNKNOWN` and say what a human must check.

- **Product:** Wisest AI Tutor — school-age students (mostly under 18, UK)
- **Stack:** Next.js (App Router), Supabase (Postgres/Auth/Storage), TypeScript
- **Manifest version:** 1.0.0

Treat all user data as **sensitive personal data of minors**. A data exposure here is a notifiable incident under UK GDPR / the ICO Children's Code, not just a bug. A check that exposes student data or allows auth bypass is always **CRITICAL** — never downgrade it because exploitation "seems unlikely".

---

## How to run this audit

**Pass 1 — Discovery.** Read the codebase first. Identify the framework, database, auth provider, and API layer; list every entry point (pages, `app/api/**/route.ts`, server actions, webhooks, cron); map the data flow from user input → database → response.

**Pass 2 — Verify.** For every check in every section below: run its `verify` commands, compare the output to **Pass if** / **Fail if**, and assign exactly one verdict. Do not group checks together — each one gets its own verdict.

**Pass 3 — Report.** For every `FAIL`, write a finding (severity, category, `file:line`, CWE, what's wrong, why it matters, vulnerable snippet, ready-to-paste fix, effort in minutes). Then write the summary block at the end of this file.

### Verdicts

| Verdict | Meaning |
|---|---|
| `PASS` | Handled correctly. Cite file:line as evidence. |
| `FAIL` | Vulnerability present. Produce a finding (see report_format). |
| `PARTIAL` | Some coverage, gaps remain. Explain what is missing. |
| `NA` | Not applicable to this codebase. State why. |
| `UNKNOWN` | Could not verify automatically. Needs manual review. |

### Checks that grep cannot settle (need a human + Supabase)

`DB-2.1`, `DB-2.2`, `DB-2.3`, `DB-2.6`, `DB-2.8` depend on **database state**, not source code. For these, output the SQL embedded in the check and ask the developer to run it in the **Supabase SQL editor**, then record the verdict from the result.

### Audit these hardest (highest-value targets)

Missing **RLS** (`DB-*`), the **service-role key** (`DB-2.5`), **identity taken from the request body** (`VALID-4.2`), **unprotected API routes** (`AUTH-3.6`), and the **un-rate-limited LLM endpoint** (`RATE-6.1`).

### Quick start (paste to Claude Code)

```
Read SECURITY.md in this repo, then run the full security audit: do the discovery
pass, verify every check by running its commands, assign a verdict each, and write
findings + the summary block to SECURITY-AUDIT-RESULT.md. Don't assume PASS without
evidence; mark UNKNOWN if a check can't be verified here. For database/RLS checks,
give me the SQL to run in Supabase and tell me exactly what to look for.
```

---

## The checks

### 1. Environment Variables & Secret Management

#### `SECRETS-1.1` — No hardcoded secrets in source

🔴 **CRITICAL**  ·  CWE-798 (Hardcoded Credentials)

*Why it matters:* A leaked key (esp. Supabase service-role or LLM key) lets an attacker read/delete all student data or run up your API bill.

**Verify:**

```bash
grep -rnE '(sk_live_|sk_test_|sk-ant-|sk-[A-Za-z0-9]{20,}|pk_live_|ghp_|gho_|github_pat_|xoxb-|xoxp-|AKIA[0-9A-Z]{16})' --include='*.ts' --include='*.tsx' --include='*.js' --include='*.json' .
grep -rnE "eyJ[A-Za-z0-9_-]{10,}" --include='*.ts' --include='*.tsx' .
```

- **Pass if:** No matches outside of .env files / type definitions.
- **Fail if:** Any key-like literal appears in committed source.
- **Fix:** Move the value to a server-only env var; read via process.env; rotate the leaked key immediately.
- **Fix prompt:** Remove the hardcoded key. Read it from process.env in server-side code only. Confirm nothing key-like remains in the bundle.

#### `SECRETS-1.2` — .env files git-ignored and never committed

🔴 **CRITICAL**  ·  CWE-540 (Information Exposure Through Source)

*Why it matters:* Secrets in git history stay exposed forever, even after deletion.

**Verify:**

```bash
grep -E '^\.env' .gitignore || echo 'NO_ENV_IN_GITIGNORE'
git log --all --full-history -- '*.env*' --oneline | head
```

- **Pass if:** .gitignore covers .env, .env.local, .env.*.local, .env.production AND git history shows no committed .env.
- **Fail if:** .env missing from .gitignore, or a .env file appears anywhere in git history.
- **Fix:** Add all .env variants to .gitignore. If a secret was ever committed, rotate it now; history scrubbing is secondary.

#### `SECRETS-1.3` — Server secrets do not use a public prefix

🔴 **CRITICAL**  ·  CWE-200 (Exposure of Sensitive Information)

*Why it matters:* Anything named NEXT_PUBLIC_* is bundled into client JS and visible to everyone. A service-role/LLM key behind that prefix is published.

**Verify:**

```bash
grep -rnE 'NEXT_PUBLIC_[A-Z_]*(SERVICE_ROLE|SECRET|API_KEY|SMTP|PASSWORD|TOKEN)' --include='*.ts' --include='*.tsx' --include='*.env*' .
```

- **Pass if:** No server secret uses NEXT_PUBLIC_ (only the Supabase URL and anon key may be public).
- **Fail if:** Any service-role key, LLM key, SMTP cred, or admin token uses NEXT_PUBLIC_.
- **Fix:** Rename to a non-public env var and read it only in server code. Rotate if it shipped to a client.
- **Fix prompt:** Audit all env var names. No secret may use NEXT_PUBLIC_. Only NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are allowed public.

#### `SECRETS-1.4` — No secrets logged to client/console

🟡 **MEDIUM**  ·  CWE-532 (Insertion of Sensitive Info into Log)

*Why it matters:* console.log of env vars or request bodies can leak secrets into browser consoles or log aggregators.

**Verify:**

```bash
grep -rnE 'console\.(log|error|warn)\([^)]*(process\.env|API_KEY|SERVICE_ROLE|req\.body|request\.body)' --include='*.ts' --include='*.tsx' .
```

- **Pass if:** No console statement prints env vars, keys, or full request bodies.
- **Fail if:** A console statement prints a secret or full request body.
- **Fix:** Remove or redact. Log non-sensitive identifiers server-side only.

#### `SECRETS-1.5` — Production source maps disabled

⚪ **LOW**  ·  CWE-540

*Why it matters:* Public source maps let anyone reconstruct your source, including inlined values.

**Verify:**

```bash
grep -rn 'productionBrowserSourceMaps' next.config.* 2>/dev/null || echo 'DEFAULT (off)'
```

- **Pass if:** productionBrowserSourceMaps is false or absent (default off).
- **Fail if:** productionBrowserSourceMaps is true in production.
- **Fix:** Set productionBrowserSourceMaps: false for production builds.

#### `SECRETS-1.6` — App fails fast on missing required env vars

🟡 **MEDIUM**  ·  CWE-1188 (Insecure Default Init)

*Why it matters:* Silently running with undefined secrets can fall back to insecure defaults or leak cryptic errors.

**Verify:**

```bash
grep -rnE '(z\.object|envSchema|assert).*process\.env' --include='*.ts' lib/ app/ 2>/dev/null || echo 'NO_ENV_VALIDATION'
```

- **Pass if:** A startup validator (e.g. Zod) parses required env vars and throws if missing.
- **Fail if:** No startup validation; code reads process.env.X directly with no guard.
- **Fix:** Add lib/env.ts that validates required vars with Zod at import time.

---

### 2. Database Security (Supabase / RLS)

#### `DB-2.1` — RLS enabled on every public table

🔴 **CRITICAL**  ·  CWE-284 (Improper Access Control)  ·  ⚙️ **needs manual / Supabase review**

*Why it matters:* A table without RLS is fully readable/writable by anyone holding the public anon key. This is the #1 Supabase breach cause.

**Verify:**

```bash
echo "Run in Supabase SQL editor:"
echo "select relname, relrowsecurity from pg_class c join pg_namespace n on n.oid=c.relnamespace where n.nspname='public' and c.relkind='r';"
grep -rni 'enable row level security' supabase/ migrations/ *.sql 2>/dev/null || echo 'NO_RLS_IN_MIGRATIONS'
```

- **Pass if:** Every table in the public schema has relrowsecurity = true.
- **Fail if:** Any public table has relrowsecurity = false.
- **Fix:** alter table public.<t> enable row level security; then add policies (see DB-2.2).
- **Fix prompt:** List every table you created. For each, enable RLS in the migration and report its RLS status.

#### `DB-2.2` — RLS-enabled tables have policies

🔴 **CRITICAL**  ·  CWE-284  ·  ⚙️ **needs manual / Supabase review**

*Why it matters:* RLS on with NO policy returns empty for all queries - looks like a bug, often 'fixed' by disabling RLS, re-opening the hole.

**Verify:**

```bash
echo "Run in Supabase SQL editor:"
echo "select tablename, policyname, cmd from pg_policies where schemaname='public' order by tablename;"
grep -rniE 'create policy' supabase/ migrations/ *.sql 2>/dev/null | wc -l
```

- **Pass if:** Every RLS-enabled table has at least SELECT and INSERT policies.
- **Fail if:** A table has RLS enabled but zero policies (silent empty results).
- **Fix:** Add policies scoped to auth.uid() = user_id. Do not disable RLS to 'fix' empty results.

#### `DB-2.3` — INSERT/UPDATE policies include WITH CHECK

🟠 **HIGH**  ·  CWE-639 (Authorization Bypass Through User-Controlled Key)  ·  ⚙️ **needs manual / Supabase review**

*Why it matters:* Without WITH CHECK, a user can insert rows owned by another user, or change a row's user_id to steal ownership.

**Verify:**

```bash
grep -rniE 'for (insert|update)' supabase/ migrations/ *.sql 2>/dev/null -A2 | grep -i 'with check' || echo 'CHECK_FOR_MISSING_WITH_CHECK'
```

- **Pass if:** Every INSERT and UPDATE policy has a WITH CHECK clause.
- **Fail if:** An INSERT/UPDATE policy lacks WITH CHECK.
- **Fix:** Add with check ( auth.uid() = user_id ) to insert/update policies.

#### `DB-2.4` — Policies use auth.uid(), not user_metadata

🟠 **HIGH**  ·  CWE-639

*Why it matters:* auth.jwt()->'user_metadata' is editable by the end user, so it is an attacker-controllable identity source.

**Verify:**

```bash
grep -rniE "user_metadata" supabase/ migrations/ *.sql 2>/dev/null || echo 'NONE_GOOD'
```

- **Pass if:** Policies key identity off auth.uid().
- **Fail if:** Any policy uses auth.jwt()->'user_metadata' (or app_metadata for identity) for access decisions.
- **Fix:** Rewrite the policy to use auth.uid().

#### `DB-2.5` — service_role key never used client-side

🔴 **CRITICAL**  ·  CWE-269 (Improper Privilege Management)

*Why it matters:* The service-role key bypasses ALL RLS. In client code it hands an attacker your entire database.

**Verify:**

```bash
grep -rnE 'SERVICE_ROLE' --include='*.ts' --include='*.tsx' app/ components/ pages/ 2>/dev/null | grep -viE '(/api/|server|route\.ts|action)' || echo 'NONE_FOUND'
```

- **Pass if:** service-role key only appears in server-only files (route handlers, server actions, scripts, webhooks).
- **Fail if:** service-role key imported into a component or any client-rendered file.
- **Fix:** Remove from client code. Use the anon client + RLS on the client; reserve service-role for trusted server tasks only.

#### `DB-2.6` — Storage buckets have policies

🟠 **HIGH**  ·  CWE-284  ·  ⚙️ **needs manual / Supabase review**

*Why it matters:* Supabase Storage buckets can be public by default; an open bucket is another open database.

**Verify:**

```bash
echo "Run in Supabase SQL editor: select * from storage.buckets;"
grep -rniE 'storage' supabase/ migrations/ *.sql 2>/dev/null | grep -i policy || echo 'NO_STORAGE_POLICIES'
```

- **Pass if:** Private buckets are marked non-public and have RLS policies.
- **Fail if:** A bucket holding user files is public or has no policies.
- **Fix:** Set bucket public=false and add storage.objects RLS policies.

#### `DB-2.7` — No SQL injection via string concatenation

🟠 **HIGH**  ·  CWE-89 (SQL Injection)

*Why it matters:* Raw SQL built from user input via template literals/concatenation is injectable. Supabase query builder is safe; raw rpc/pg is not.

**Verify:**

```bash
grep -rnE '(\.rpc\(|sql`|query\()' --include='*.ts' --include='*.tsx' . | grep -E '\$\{' || echo 'NONE_FOUND'
```

- **Pass if:** All raw SQL uses parameterised queries; no user input interpolated into SQL strings.
- **Fail if:** User input is concatenated/interpolated into a raw SQL string.
- **Fix:** Use parameterised queries / the Supabase query builder; never interpolate input into SQL.

#### `DB-2.8` — SECURITY DEFINER functions reviewed

🟡 **MEDIUM**  ·  CWE-269  ·  ⚙️ **needs manual / Supabase review**

*Why it matters:* SECURITY DEFINER functions run with creator (often superuser) privileges and can bypass RLS.

**Verify:**

```bash
grep -rniE 'security definer' supabase/ migrations/ *.sql 2>/dev/null || echo 'NONE'
```

- **Pass if:** No SECURITY DEFINER functions, or each is reviewed and does not expose data / bypass RLS.
- **Fail if:** A SECURITY DEFINER function exposes data or bypasses intended access control.
- **Fix:** Prefer SECURITY INVOKER; if DEFINER is required, constrain it and review carefully.

---

### 3. Authentication & Session Management

#### `AUTH-3.1` — Auth middleware exists and runs

🟠 **HIGH**  ·  CWE-306 (Missing Authentication)

*Why it matters:* Without middleware enforcing auth, protected pages are reachable by anyone.

**Verify:**

```bash
ls middleware.ts middleware.js 2>/dev/null || echo 'NO_MIDDLEWARE'
grep -nE 'matcher' middleware.* 2>/dev/null || echo 'NO_MATCHER'
```

- **Pass if:** middleware.ts exists and its matcher covers app routes.
- **Fail if:** No middleware, or matcher misses protected paths.
- **Fix:** Add middleware.ts that verifies the user and a matcher covering all non-static routes.
- **Fix prompt:** Create middleware.ts that protects all routes by default with a matcher excluding only static assets.

#### `AUTH-3.2` — Default-deny routing (public allowlist)

🟠 **HIGH**  ·  CWE-284

*Why it matters:* Default-deny means new routes are protected automatically; default-allow means each new route is open until you remember to lock it.

**Verify:**

```bash
grep -nE 'PUBLIC_PATHS|publicRoutes|allowlist' middleware.* 2>/dev/null || echo 'CHECK_PATTERN'
```

- **Pass if:** Middleware allows a short list of public paths and requires auth for everything else.
- **Fail if:** Middleware blocks specific routes and leaves the rest open (blocklist).
- **Fix:** Invert to an allowlist: define PUBLIC_PATHS; require auth for all others.

#### `AUTH-3.3` — getUser() not getSession() for security decisions

🟠 **HIGH**  ·  CWE-345 (Insufficient Verification of Data Authenticity)

*Why it matters:* getSession() only reads the local JWT without verifying it; a tampered token can slip through. getUser() validates against Supabase.

**Verify:**

```bash
grep -rnE 'getSession\(\)' --include='*.ts' --include='*.tsx' app/ middleware.* lib/ 2>/dev/null || echo 'NONE'
```

- **Pass if:** Server-side auth decisions use supabase.auth.getUser().
- **Fail if:** Security-sensitive server code relies on getSession() for identity.
- **Fix:** Replace getSession() with getUser() for any access decision on the server.
- **Fix prompt:** Use supabase.auth.getUser() (verified) everywhere a security decision depends on identity. Flag any getSession() use.

#### `AUTH-3.4` — Auth callback handled safely

🟡 **MEDIUM**  ·  CWE-598 (Info Exposure Through Query Strings)

*Why it matters:* A bad callback can expose tokens in URLs or logs, or fail open on error.

**Verify:**

```bash
ls app/auth/callback/route.ts 2>/dev/null || echo 'NO_CALLBACK_ROUTE'
grep -rnE 'exchangeCodeForSession' app/ 2>/dev/null || echo 'CHECK'
```

- **Pass if:** Callback exchanges code for session server-side, handles errors, never puts tokens in URLs/logs.
- **Fail if:** Tokens appear in URLs/logs or errors fail open.
- **Fix:** Use exchangeCodeForSession in a server route; redirect on error; never log tokens.

#### `AUTH-3.5` — Session tokens in httpOnly cookies, not localStorage

🟠 **HIGH**  ·  CWE-522 (Insufficiently Protected Credentials)

*Why it matters:* Tokens in localStorage are readable by any script, so an XSS payload can steal the session.

**Verify:**

```bash
grep -rnE '(localStorage|sessionStorage)\.(set|get)Item' --include='*.ts' --include='*.tsx' . | grep -iE '(token|session|auth|jwt)' || echo 'NONE'
```

- **Pass if:** Sessions are stored in httpOnly cookies (Supabase SSR default).
- **Fail if:** Auth tokens are written to localStorage/sessionStorage.
- **Fix:** Use the @supabase/ssr cookie-based client; never store tokens in web storage.

#### `AUTH-3.6` — Every data API route checks auth first

🔴 **CRITICAL**  ·  CWE-306

*Why it matters:* Routes added late often skip the auth check; an attacker calls them directly.

**Verify:**

```bash
for f in $(find app/api -name 'route.ts' 2>/dev/null); do grep -lq 'getUser' "$f" || echo "NO_AUTH_CHECK: $f"; done
```

- **Pass if:** Every /api route handling user data calls getUser() (or equivalent) before processing.
- **Fail if:** Any data-handling API route lacks an auth check.
- **Fix:** Add the getUser() guard returning 401 at the top of each route.
- **Fix prompt:** Audit every file under app/api. Each route handling user data must verify getUser() first and return 401 if absent. List each route and its status.

#### `AUTH-3.7` — OAuth callbacks validated, state used

🟡 **MEDIUM**  ·  CWE-352 (CSRF)  ·  ⚙️ **needs manual / Supabase review**

*Why it matters:* Missing state parameter enables CSRF on the OAuth flow; unvalidated callback URLs enable redirection attacks.

**Verify:**

```bash
grep -rniE 'oauth|signInWithOAuth|redirectTo' --include='*.ts' --include='*.tsx' . 2>/dev/null | head || echo 'NO_OAUTH'
```

- **Pass if:** OAuth uses state for CSRF protection and validates redirect URLs (managed provider handles this).
- **Fail if:** OAuth flow lacks state or accepts arbitrary redirect URLs.
- **Fix:** Rely on the managed provider's OAuth; restrict allowed redirect URLs in the provider dashboard.

#### `AUTH-3.8` — Password reset tokens expire and are single-use

🟡 **MEDIUM**  ·  CWE-640 (Weak Password Recovery)  ·  ⚙️ **needs manual / Supabase review**

*Why it matters:* Reusable or non-expiring reset tokens enable account takeover.

**Verify:**

```bash
echo 'Managed by Supabase Auth if using built-in reset; verify no custom token logic overrides it.'
grep -rniE 'resetPasswordForEmail|reset.token' --include='*.ts' . 2>/dev/null | head || echo 'USES_MANAGED'
```

- **Pass if:** Reset uses the managed provider's expiring single-use tokens.
- **Fail if:** Custom reset logic with non-expiring or reusable tokens.
- **Fix:** Use the provider's built-in reset flow; do not roll your own token store.

---

### 4. Server-Side Validation

#### `VALID-4.1` — All inputs validated server-side with a schema

🟠 **HIGH**  ·  CWE-20 (Improper Input Validation)

*Why it matters:* Frontend validation is bypassable with curl/Postman/devtools. Only server validation is a control.

**Verify:**

```bash
for f in $(find app/api -name 'route.ts' 2>/dev/null); do grep -lqE '(z\.|safeParse|\.parse\(|yup|valibot)' "$f" || echo "NO_SCHEMA: $f"; done
```

- **Pass if:** Every API route / server action parses input with Zod (or similar) before use.
- **Fail if:** A route uses req.json()/body fields without schema validation.
- **Fix:** Add a Zod schema and safeParse at the top of the route; reject invalid input with 400 + generic error.
- **Fix prompt:** Validate every input server-side with Zod before use. Reject unknown fields. Return a generic 400 on failure.

#### `VALID-4.2` — Write identity from session, never request body

🔴 **CRITICAL**  ·  CWE-639

*Why it matters:* If the server trusts a userId from the body, an attacker sends any userId and acts as any student.

**Verify:**

```bash
grep -rnE '(body|req|request|input|data)\.(user_?[Ii]d|userId)' --include='*.ts' app/api/ app/**/actions* 2>/dev/null || echo 'NONE'
```

- **Pass if:** user_id for writes comes from getUser(); never read from the request body.
- **Fail if:** Any write uses a userId taken from the request body/query.
- **Fix:** Derive user.id from supabase.auth.getUser(); ignore body-supplied ids.

#### `VALID-4.3` — User HTML content sanitised (no XSS)

🟠 **HIGH**  ·  CWE-79 (XSS)

*Why it matters:* Rendering user content as raw HTML lets injected scripts run in other users' browsers. LaTeX/Markdown can be a vector.

**Verify:**

```bash
grep -rnE 'dangerouslySetInnerHTML|innerHTML\s*=|v-html' --include='*.ts' --include='*.tsx' --include='*.vue' . || echo 'NONE'
```

- **Pass if:** No unsanitised user content rendered as HTML; maths rendered via a safe KaTeX/MathJax config.
- **Fail if:** dangerouslySetInnerHTML (or equivalent) renders unsanitised user input.
- **Fix:** Sanitise with a vetted sanitizer, or render via a safe library; avoid raw HTML injection of user content.

#### `VALID-4.4` — State-changing ops use POST/PUT/PATCH/DELETE

🟡 **MEDIUM**  ·  CWE-352 (CSRF)

*Why it matters:* GET requests can be triggered by prefetch/image tags without user intent.

**Verify:**

```bash
grep -rnE 'export async function GET' app/api/ 2>/dev/null | head || echo 'NONE'
```

- **Pass if:** Mutations use non-GET verbs; GET is read-only.
- **Fail if:** A GET handler performs a state change (insert/update/delete).
- **Fix:** Move the mutation to POST/PUT/PATCH/DELETE.

#### `VALID-4.5` — Errors do not leak internals to client

🟡 **MEDIUM**  ·  CWE-209 (Info Exposure Through Error Message)

*Why it matters:* Stack traces, SQL errors, file paths and env names hand an attacker a map of your internals.

**Verify:**

```bash
grep -rnE 'catch\s*\([^)]*\)\s*\{[^}]*(error\.(stack|message)|err\.(stack|message))' --include='*.ts' app/api/ 2>/dev/null | head || echo 'CHECK'
```

- **Pass if:** Client errors are generic; details logged server-side only.
- **Fail if:** Raw error.stack / DB error returned to the client.
- **Fix:** Return a generic message; log the detailed error server-side.

#### `VALID-4.6` — Webhook signatures verified

🟠 **HIGH**  ·  CWE-345  ·  ⚙️ **needs manual / Supabase review**

*Why it matters:* Without verification anyone can POST fake webhook events (e.g. fake 'subscription paid').

**Verify:**

```bash
grep -rnE '(constructEvent|verify|signature)' app/api/**/webhook* app/api/webhook* 2>/dev/null || echo 'NO_WEBHOOK_OR_UNVERIFIED'
```

- **Pass if:** Each webhook verifies its signature before processing.
- **Fail if:** A webhook processes the payload without verifying the signature.
- **Fix:** Verify the provider signature (e.g. Stripe constructEvent) before acting; reject on mismatch.

---

### 5. Dependency & Package Security

#### `DEPS-5.1` — No known vulnerable dependencies

🟠 **HIGH**  ·  CWE-1395 (Dependency on Vulnerable Component)

*Why it matters:* Known CVEs in dependencies are exploited automatically by scanners.

**Verify:**

```bash
npm audit --omit=dev 2>/dev/null | tail -20 || echo 'RUN_NPM_AUDIT'
```

- **Pass if:** npm audit reports no high/critical vulnerabilities.
- **Fail if:** High or critical vulnerabilities present.
- **Fix:** Run npm audit fix; update or replace the affected packages.

#### `DEPS-5.2` — No hallucinated / suspicious packages

🟠 **HIGH**  ·  CWE-829 (Inclusion of Functionality from Untrusted Source)  ·  ⚙️ **needs manual / Supabase review**

*Why it matters:* AI may invent package names; attackers pre-register them with malware (slopsquatting).

**Verify:**

```bash
node -e "const p=require('./package.json');console.log(Object.keys({...p.dependencies,...p.devDependencies}).join('\n'))" 2>/dev/null || echo 'NO_PACKAGE_JSON'
```

- **Pass if:** Every dependency is a real, established package (verify low-confidence names on npmjs.com: downloads, age, repo).
- **Fail if:** A dependency has very low downloads, a very recent publish date, or an odd name.
- **Fix:** Remove and replace any unverifiable package; rotate keys if a suspicious package was ever installed.

#### `DEPS-5.3` — Lockfile committed

🟡 **MEDIUM**  ·  CWE-494 (Download of Code Without Integrity Check)

*Why it matters:* Without a lockfile, installs can silently pull a different, possibly compromised version.

**Verify:**

```bash
ls package-lock.json pnpm-lock.yaml yarn.lock bun.lockb 2>/dev/null || echo 'NO_LOCKFILE'
git ls-files | grep -E 'lock' || echo 'LOCKFILE_NOT_TRACKED'
```

- **Pass if:** A lockfile exists and is committed to git.
- **Fail if:** No lockfile, or it is git-ignored.
- **Fix:** Commit the lockfile; do not ignore it.

#### `DEPS-5.4` — No badly outdated security-critical packages

🟡 **MEDIUM**  ·  CWE-1104 (Unmaintained Components)

*Why it matters:* Outdated auth/crypto/framework packages carry patched-but-unapplied vulnerabilities.

**Verify:**

```bash
npm outdated 2>/dev/null | head -30 || echo 'RUN_NPM_OUTDATED'
```

- **Pass if:** Auth, crypto, and framework packages are current (no major lag).
- **Fail if:** Security-critical packages are several versions behind.
- **Fix:** Update, prioritising next, @supabase/*, and any auth/crypto libs.

#### `DEPS-5.5` — No unused dependencies

⚪ **LOW**  ·  CWE-1071 (Unnecessary Attack Surface)

*Why it matters:* Unused packages are attack surface for no benefit.

**Verify:**

```bash
npx -y depcheck 2>/dev/null | sed -n '/Unused dependencies/,/Unused devD/p' || echo 'RUN_DEPCHECK'
```

- **Pass if:** No unused production dependencies.
- **Fail if:** Packages listed in package.json are not imported anywhere.
- **Fix:** Remove unused packages.

---

### 6. Rate Limiting

#### `RATE-6.1` — Paid/LLM endpoints are rate-limited

🟠 **HIGH**  ·  CWE-770 (Allocation Without Limits / Throttling)

*Why it matters:* An unprotected LLM tutor endpoint lets one attacker run your API bill into the thousands.

**Verify:**

```bash
grep -rnE '(Ratelimit|rateLimit|@upstash/ratelimit|limiter)' --include='*.ts' app/api/ lib/ 2>/dev/null || echo 'NO_RATE_LIMIT'
echo 'Confirm the tutor route applies a limiter AFTER the auth check.'
```

- **Pass if:** Every route calling a paid API applies a server-side limiter keyed on user id/IP.
- **Fail if:** A paid/LLM route has no rate limiting.
- **Fix:** Add an Upstash/Redis sliding-window limiter after auth; return 429 when exceeded.
- **Fix prompt:** Rate-limit the tutor route server-side with a Redis/Upstash sliding window keyed on user.id, applied after the auth check. Return 429.

#### `RATE-6.2` — Auth endpoints are rate-limited

🟡 **MEDIUM**  ·  CWE-307 (Improper Restriction of Excessive Auth Attempts)

*Why it matters:* Unlimited login/reset attempts enable brute force and credential stuffing.

**Verify:**

```bash
grep -rnE '(Ratelimit|rateLimit|limiter)' app/**/login* app/**/signup* app/api/auth* 2>/dev/null || echo 'CHECK_AUTH_RATE_LIMIT'
```

- **Pass if:** Login, signup, reset, OTP routes are rate-limited.
- **Fail if:** Auth endpoints have no throttling.
- **Fix:** Apply a strict limiter to auth routes.

#### `RATE-6.3` — Limiting is server-side and durable

🟡 **MEDIUM**  ·  CWE-770

*Why it matters:* In-memory counters reset on cold start and aren't shared across serverless instances, so they barely limit anything.

**Verify:**

```bash
grep -rnE 'new Map\(\)|let count|in.?memory' --include='*.ts' lib/ratelimit* lib/*limit* 2>/dev/null || echo 'CHECK'
```

- **Pass if:** Limiter is backed by Redis/Upstash, not an in-memory variable.
- **Fail if:** Rate limit stored in a process-local variable / Map.
- **Fix:** Back the limiter with Redis/Upstash so it survives restarts and is shared.

---

### 7. CORS Configuration

#### `CORS-7.1` — No wildcard CORS on data routes

🟡 **MEDIUM**  ·  CWE-942 (Permissive Cross-domain Policy)

*Why it matters:* Access-Control-Allow-Origin: * lets any site's JS call your API from a browser.

**Verify:**

```bash
grep -rnE "Access-Control-Allow-Origin['\"]?\s*[:,].{0,8}\*" --include='*.ts' --include='*.js' . next.config.* 2>/dev/null || echo 'NONE'
```

- **Pass if:** Own-frontend API routes do not use a wildcard origin.
- **Fail if:** A data route sets Allow-Origin: *.
- **Fix:** Restrict to your production domain(s); remove the wildcard.

#### `CORS-7.2` — Credentials not combined with wildcard origin

🟡 **MEDIUM**  ·  CWE-942

*Why it matters:* Allow-Credentials: true with a wildcard origin is invalid and dangerous.

**Verify:**

```bash
grep -rnE 'Access-Control-Allow-Credentials' --include='*.ts' . 2>/dev/null || echo 'NONE'
```

- **Pass if:** Allow-Credentials: true only appears with a specific origin.
- **Fail if:** Allow-Credentials: true paired with a wildcard origin.
- **Fix:** Use a specific origin whenever credentials are allowed.

---

### 8. File Upload Security

#### `UPLOAD-8.1` — Server-side type & size validation

🟠 **HIGH**  ·  CWE-434 (Unrestricted Upload of Dangerous File Type)  ·  ⚙️ **needs manual / Supabase review**

*Why it matters:* Trusting the file extension lets a renamed payload through; no size cap enables storage-exhaustion abuse.

**Verify:**

```bash
grep -rnE '(upload|multipart|formData\(\))' --include='*.ts' app/api/ 2>/dev/null | head || echo 'NO_UPLOADS'
```

- **Pass if:** Uploads validate real MIME type and max size on the server.
- **Fail if:** Upload route checks only the extension or has no size limit.
- **Fix:** Validate actual content type and enforce a max size server-side before storing.

#### `UPLOAD-8.2` — Public vs private uploads separated

🟡 **MEDIUM**  ·  CWE-284  ·  ⚙️ **needs manual / Supabase review**

*Why it matters:* Profile photos and private documents need different access controls.

**Verify:**

```bash
echo 'Verify bucket layout: public assets vs private user files in separate, policied buckets.'
```

- **Pass if:** Private uploads live in a private, RLS-policied bucket.
- **Fail if:** Private files are in a public bucket.
- **Fix:** Separate buckets; mark the private bucket non-public with storage policies.

#### `UPLOAD-8.3` — Uploaded files cannot be executed

🟡 **MEDIUM**  ·  CWE-434  ·  ⚙️ **needs manual / Supabase review**

*Why it matters:* Files served from an executable path can be run on the server.

**Verify:**

```bash
echo 'Confirm uploads go to object storage (Supabase Storage), not an executable web path.'
```

- **Pass if:** Uploads are stored as inert objects (Supabase Storage), never in an executable directory.
- **Fail if:** Uploads land in a server-executable path.
- **Fix:** Store in object storage; never serve uploads from an executable path.

---

## Write the result here (SECURITY-AUDIT-RESULT.md)

Use this exact structure.

```markdown
# Security Audit Result — Wisest
- Date / commit / auditor: ...

## 1. Posture
Rating: CRITICAL | NEEDS_WORK | ACCEPTABLE | STRONG
Executive summary: <one paragraph>

## 2. Critical & High findings
### FINDING #1
- Check:    <id, e.g. DB-2.1>
- Severity: CRITICAL
- Category: <e.g. Missing RLS>
- Location: <file:line>
- CWE:      <CWE-XXX (Name)>
- What's wrong:   ...
- Why it matters: ...
- Vulnerable code:
    <snippet>
- Fix:
    <ready-to-paste snippet>
- Effort: ~X minutes
<repeat per finding>

## 3. Quick wins (<10 min each)
## 4. Prioritised remediation plan  (severity, then effort; each with a time estimate)
## 5. What's already done right  (so it isn't broken later)

## 6. Checklist summary (one verdict per id)
SECRETS-1.1 <verdict>  SECRETS-1.2 <verdict>  SECRETS-1.3 <verdict>  SECRETS-1.4 <verdict>  SECRETS-1.5 <verdict>  SECRETS-1.6 <verdict>
DB-2.1 <verdict>  DB-2.2 <verdict>  DB-2.3 <verdict>  DB-2.4 <verdict>  DB-2.5 <verdict>  DB-2.6 <verdict>  DB-2.7 <verdict>  DB-2.8 <verdict>
AUTH-3.1 <verdict>  AUTH-3.2 <verdict>  AUTH-3.3 <verdict>  AUTH-3.4 <verdict>  AUTH-3.5 <verdict>  AUTH-3.6 <verdict>  AUTH-3.7 <verdict>  AUTH-3.8 <verdict>
VALID-4.1 <verdict>  VALID-4.2 <verdict>  VALID-4.3 <verdict>  VALID-4.4 <verdict>  VALID-4.5 <verdict>  VALID-4.6 <verdict>
DEPS-5.1 <verdict>  DEPS-5.2 <verdict>  DEPS-5.3 <verdict>  DEPS-5.4 <verdict>  DEPS-5.5 <verdict>
RATE-6.1 <verdict>  RATE-6.2 <verdict>  RATE-6.3 <verdict>
CORS-7.1 <verdict>  CORS-7.2 <verdict>
UPLOAD-8.1 <verdict>  UPLOAD-8.2 <verdict>  UPLOAD-8.3 <verdict>
```

---

## Prevent, don't just detect

Most of these failures are cheaper to prevent than to fix. Put the standing rules (secrets server-side only, RLS + policies on every table, server-side Zod validation, identity from `getUser()`, default-deny middleware, rate-limited paid routes) in the project's `CLAUDE.md` so they apply to every session. Re-run this audit after each significant feature and before any launch or school onboarding.

> This runbook catches common, pattern-based issues well. It will miss some cross-file and business-logic flaws, so for auth, RLS policies, the service-role key, and payment webhooks, also review the code by hand. Not legal advice.
