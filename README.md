# Wisest Maths App

An A-Level Maths learning platform: 71-question subtopic banks with worked solutions, AI-powered Socratic tutoring, and student/teacher dashboards. Built on Next.js 14 + Supabase Auth + Upstash Redis rate limiting.

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Create a Supabase project

1. Sign up at [supabase.com](https://supabase.com) (free).
2. Create a new project. Take note of the **Project URL** and **anon public key** from Settings → API.
3. (Optional) Settings → Authentication → Email Auth → disable "Confirm email" while developing locally.

### 3. Set up Upstash Redis (for rate limiting in production)

1. Sign up at [upstash.com](https://upstash.com) (free).
2. Create a Redis database. Copy the REST URL and REST token from the database page.
3. In development you can skip this; the rate limiter falls back to an in-memory store with a warning. **Do not skip in production** — the in-memory limiter does not work across serverless instances.

### 4. Configure environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in the Supabase and (optionally) Upstash + Gemini values.

### 5. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Click **Create an account** to sign up your first user.

## ⚠ Demo mode (development only) — remove before production deploy

While building, you can browse questions and the AI tutor without setting up Supabase by enabling **demo mode**:

1. In `.env.local`, set `DEMO_MODE=true`.
2. Restart `npm run dev`.
3. Go to `/login` — you'll see "Demo Student" / "Demo Teacher" buttons. Click either.

Safety: demo mode is gated by **both** `DEMO_MODE=true` AND `NODE_ENV !== "production"`. On Vercel production builds, even if `DEMO_MODE=true` slipped in, the runtime gate blocks the bypass. The demo cookie is also useless without server cooperation.

**Removing demo mode entirely before launch** (defence in depth — the gates alone are enough but it's cleaner to delete the code):

1. Delete `lib/demoMode.ts`.
2. Delete `app/api/auth/demo/route.ts`.
3. Delete `components/DemoLoginButton.tsx`.
4. Remove the `DEMO_MODE` entry from `lib/env.ts` and `.env.example`.
5. Remove the `DEMO_COOKIE_NAME` / `resolveDemoUser` / `isDemoModeAllowed` block from `middleware.ts`.
6. Remove the demo block from `lib/auth.ts` (just delete steps 1–3 in the function — Supabase auth alone remains).
7. Remove the `<DemoLoginButton />` and its import from `app/login/page.tsx`.

Every file involved has a `⚠ DEMO MODE` comment marker at the top — `grep -rn "DEMO MODE"` finds them all.

## Promoting a user to teacher

The middleware reads role from `app_metadata.role` (server-managed, not user-editable). To promote a user manually:

```sql
-- In Supabase SQL Editor
update auth.users
set raw_app_meta_data = jsonb_set(coalesce(raw_app_meta_data, '{}'::jsonb), '{role}', '"teacher"')
where email = 'you@example.com';
```

## Architecture & security

See [SECURITY.md](./.claude/Security.md) for the standing audit checklist, and [SECURITY-AUDIT-RESULT.md](./SECURITY-AUDIT-RESULT.md) for the most recent verdict per check.

Key choices:

- **Auth:** Supabase Auth via `@supabase/ssr`. Sessions in `httpOnly` cookies; JWT-validated on every protected request via `getUser()` (not `getSession()`).
- **Default-deny middleware:** Only `PUBLIC_PATHS` (`/`, `/login`, `/signup`, `/auth/callback`, `/api/auth/*`, static assets) are publicly accessible. Every other route requires a verified session.
- **Rate limiting:** Upstash Redis sliding window, applied **after** the auth check, keyed on the verified user id. Tiers: `global`, `auth`, `ai`, `payment`.
- **Input validation:** Every API route parses input with Zod before use. Generic 400 on failure (no schema details leaked).
- **AI guardrails:** Student input is sanitised (HTML strip, prompt-injection scan) before reaching the LLM. The LLM response is parsed against a Zod schema and scanned for prohibited content (leaked API keys, code snippets, jailbreak markers) before returning to the client.
- **Env validation:** All required env vars are parsed with Zod at server start (`lib/env.ts`). A missing var fails fast with a clear message instead of a cryptic 500.

## Deploy on Vercel

1. Push the repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Add the env vars from `.env.example` in Project Settings → Environment Variables.
4. Set the Supabase **Site URL** (Authentication → URL Configuration) to your Vercel domain and add the same domain to **Redirect URLs**.
5. Deploy.

## Project scripts

```bash
npm run dev     # start dev server (http://localhost:3000)
npm run build   # production build
npm run start   # serve production build
npm run lint    # ESLint
```
