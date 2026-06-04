# Supabase setup — beginner's guide

This connects your app to a real database so logins work and student names are saved.

There are two parts:
- **Part 1 — Email/password login.** Do this first; it gets you working logins.
- **Part 2 — Google "school" sign-in.** Optional, do it later.

**The one rule that matters most:** the moment you connect Supabase, the app stops
accepting the old "type anything" demo login. So in Part 1 you create a teacher and a
student account *first*, and only *then* switch the app over. If you do it in this order
you cannot get locked out.

A few words you'll see:
- **Project** = your database, hosted by Supabase.
- **Key** = a long secret string the app uses to talk to the database.
- **`.env.local`** = a settings file in your project folder where you paste those keys.
  It lives in the **same folder as `package.json`** and is never uploaded to GitHub.

---

# PART 1 — Get login working

## Step 1. Make a Supabase account and project
1. Go to **https://supabase.com** and click **Start your project** / **Sign in** (you can sign in with GitHub).
2. Click **New project**.
3. Fill in:
   - **Name:** anything, e.g. `wisest-maths-dev`.
   - **Database Password:** click **Generate a password** and **save it somewhere** (you rarely need it, but don't lose it).
   - **Region:** the one closest to you.
4. On the options (the screen you screenshotted): **Enable Data API = ticked**, **Automatically expose new tables = unticked**, **Enable automatic RLS = ticked**.
5. Click **Create new project** and wait ~2 minutes while it sets up.

✅ **Check:** you land on the project's dashboard home page.

## Step 2. Copy your URL and 2 keys
Supabase's newer dashboard shows **two** keys (a Publishable one and a Secret one) — that's
correct, you don't need three. Here's what to grab:

1. In the **left sidebar**, click the **gear / Project Settings** icon (bottom), then **API Keys**.
2. You'll see two keys. Copy each into a temporary note:
   - **Publishable key** (starts `sb_publishable_…`, "safe to share publicly") — click the **copy** icon.
     → this is your **anon** key.
   - **Secret key** (starts `sb_secret_…`, "privileged") — click the **eye** icon to reveal it, then **copy**.
     → this is your **service_role** key. **Keep it private.**
   *(Ignore the "Legacy anon, service_role API keys" tab — the new keys work fine.)*
3. Get the **Project URL** separately: **Settings → Data API → URL** (or just take it from your
   browser address bar — it's `https://<project-ref>.supabase.co`, where `<project-ref>` is the
   code in the dashboard URL `…/project/<project-ref>/…`).

✅ **Check:** you have the Project URL, the Publishable key, and the Secret key copied.

## Step 3. Create the database tables
1. In the left sidebar, click **SQL Editor**.
2. Click **New query** (or **+**).
3. Open the file **`sql/quiz_engine.sql`** in your project, **select all the text, copy it**, and **paste it** into the SQL editor box.
4. Click **Run** (green button, bottom-right; or press Cmd/Ctrl + Enter).
5. Now run one more small command — **clear the box**, paste this, and click **Run**:
   ```sql
   alter table public.class_members add column if not exists email text;
   create index if not exists idx_class_members_email on public.class_members (lower(email));
   ```

✅ **Check:** each run shows **"Success. No rows returned"** (that's normal — it built tables, not data).

## Step 4. Create your teacher and student accounts
**Do this before Step 5.** The app decides who is a teacher from a hidden setting called `role`.

1. In the left sidebar, click **Authentication**, then **Users**.
2. Click **Add user → Create new user**. Fill in:
   - **Email:** `teacher@example.com`
   - **Password:** pick one you'll remember (e.g. `Teacher123!`)
   - **Auto Confirm User:** **turn this ON** (important — without it, login is blocked).
   - Click **Create user**.
3. Click **Add user → Create new user** again for the student:
   - **Email:** `student@example.com`, **Password:** e.g. `Student123!`, **Auto Confirm User: ON**, **Create user**.

Now tell the app which one is the teacher:
4. Go back to **SQL Editor → New query**, paste this, and click **Run**
   (change the emails if you used different ones):
   ```sql
   update auth.users
     set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"role":"teacher"}'::jsonb
   where email = 'teacher@example.com';

   update auth.users
     set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"role":"student"}'::jsonb
   where email = 'student@example.com';
   ```

✅ **Check:** under **Authentication → Users** you see two users, both showing a confirmed date (not "Waiting for verification").

## Step 5. Put the keys into the app
1. Open the file **`.env.local`** in your project folder (same folder as `package.json`). It already exists.
2. Fill in the lines using the keys from Step 2 (paste the key right after the `=`, no spaces, no quotes):
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://abcdxyz.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_...the Publishable key...
   SUPABASE_SERVICE_ROLE_KEY=sb_secret_...the Secret key...
   SESSION_SECRET=any-random-string-at-least-32-characters-long-abcdef
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```
   (For `SESSION_SECRET`, any long random string is fine for now — just make it 32+ characters.)
3. **Save the file.**

## Step 6. Restart the app and log in
1. Find the **terminal window** where the app is running (it shows `next dev`).
2. Click in it, press **Ctrl + C** to stop it.
3. Type **`npx next dev`** and press Enter to start it again. (Env settings are only read when it starts, so this restart is required.)
4. In your browser, go to **http://localhost:3000/login**, choose the **Teacher** tab, and sign in with `teacher@example.com` + your password. Then try the **Student** account.

✅ **Check:** both log in. 🎉 Part 1 is done — your app now uses the real database.

> **If you get "locked out" / login fails:** you almost certainly missed *Auto Confirm User*
> (Step 4.2) or didn't set the role (Step 4.4). Fix those, then restart (Step 6) again.

---

# PART 2 — Google "school" sign-in (do this later)

This lets students click **Sign in with Google** using their school Google account.

## Step 7. Create a Google sign-in app (Google Cloud)
1. Go to **https://console.cloud.google.com** and sign in. Create a project (top bar → **New Project**) if you don't have one.
2. Left menu → **APIs & Services → OAuth consent screen**. Choose **External**, fill in an app name and your email, and save through the steps.
3. Left menu → **APIs & Services → Credentials → Create credentials → OAuth client ID**.
   - **Application type:** **Web application**.
   - **Authorized JavaScript origins:** add `http://localhost:3000`
   - **Authorized redirect URIs:** add **`https://abcdxyz.supabase.co/auth/v1/callback`**
     (use *your* Project URL from Step 2, then `/auth/v1/callback` — this is Supabase's address, not your app's).
   - Click **Create**, then **copy the Client ID and Client secret**.

## Step 8. Turn on Google in Supabase
1. Supabase → **Authentication → Providers → Google**. Turn it **on**, paste the **Client ID** and **Client secret** from Step 7, and **Save**.
2. Supabase → **Authentication → URL Configuration**:
   - **Site URL:** `http://localhost:3000`
   - **Redirect URLs:** add `http://localhost:3000/auth/callback` (this one *is* your app's address).

## Step 9. Connect a student's Google account to their class
- When you (as a teacher) add students to a class, type **their school email** next to their name (the roster accepts `Anna Smith, anna@school.org`).
- The first time that student signs in with Google, the app matches their email and links them to your class automatically. From then on their quizzes and progress are tied to their real account.

> **The in-app code is done.** The **"Sign in with Google"** button (on the **School login**
> tab), the `/auth/callback` handler, the server verification at `/api/auth/google`, and the
> automatic roster-linking by email are all implemented. Once you finish Steps 7–9 above
> **and** set `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local` (the Publishable key — the
> button stays disabled with an explanatory note until this is present), Google sign-in works
> end-to-end. For production, also add your live URL to the Supabase **Redirect URLs**
> (e.g. `https://yourapp.com/auth/callback`).

---

## Quick checklist
- [ ] Project created, 3 keys copied.
- [ ] `sql/quiz_engine.sql` run + the `email` column added.
- [ ] Teacher + student users created, **Auto Confirm ON**, roles set via SQL.
- [ ] Keys pasted into `.env.local` and **saved**.
- [ ] App **restarted**, both accounts log in.
- [ ] (Later) Google credentials + Supabase provider + redirect URLs set.

---

# Multi-school (multi-tenancy) setup

Once a school buys a contract, its teachers and students are grouped into **one
school** and isolated from every other school by **Postgres Row Level Security**.
This requires a second DB connection (a restricted role) so RLS is actually
enforced — the service-role key bypasses RLS.

## 1. Run the role + tenant migrations (SQL Editor)
Run these once, in order:
1. `sql/zero_trust_roles.sql` — creates the restricted `wisest_app_user` role.
   **Change the placeholder password** (`CHANGE_ME_IN_PRODUCTION`) to a strong one.
2. `sql/multi_tenant_schools.sql` — adds `schools`, `school_members`,
   `classes.school_id`, and the school-scoped RLS policies. Safe to re-run.

## 2. Point `DATABASE_URL` at `wisest_app_user`
- Supabase → **Project Settings → Database → Connection string** (URI).
- Replace the user and password with `wisest_app_user` + the password you set:
  `postgresql://wisest_app_user:YOUR_PW@HOST:5432/postgres`
- Put it in `.env.local` as `DATABASE_URL=…` and **restart** the app.
- Without it, class/roster features fall back to the single-tenant localStorage
  store (fine for dev, NOT isolated).

## 3. Make yourself the Wisest super-admin
In SQL Editor, stamp your own account:
```sql
update auth.users
  set raw_app_meta_data = coalesce(raw_app_meta_data,'{}'::jsonb) || '{"role":"wisest_admin"}'::jsonb
where email = 'you@wisestmaths.com';
```
Sign out/in. You now land on **/admin/schools**.

## 4. Onboard a school
- **/admin/schools** → create a school + its first **School Admin** (name + their
  school Google email). No password is created — they sign in with Google.
- The School Admin signs in (Google) → lands on **/school** → bulk-imports their
  teachers and students (Name, school email, one per line).
- Each imported person's **role + school** is stamped automatically on their
  first Google sign-in (matched by email), and students are linked to their class
  rosters within that school only.

## How isolation works
- Identity carries the tenant: `app_metadata.{role, school_id}` → signed session
  → set as `app.current_user_id / current_school_id / current_role / current_email`
  on every request (lib/db/tenant.ts), which RLS reads.
- A teacher sees only their own classes; a School Admin sees the whole school;
  **no one** sees another school's data — even two schools with the same student
  name or email never collide.

---

# Wisest staff (no-PII back-office) + spreadsheet onboarding

Adds: a **Wisest employee** role that manages schools without seeing student PII,
**school suspend**, and **spreadsheet class import** that auto-creates accounts
with generated passwords.

## 1. Run the migration
Run **sql/wisest_staff_and_provisioning.sql** in the SQL Editor (after the earlier
migrations). It adds `schools.status`, the PII-free views (`school_overview`,
`school_admins`), and the RLS + grants for the staff role. Idempotent.

## 2. Create the restricted `wisest_staff` role
```sql
create role wisest_staff with login password 'YOUR-WISEST-STAFF-PASSWORD'
  nosuperuser nocreatedb nocreaterole;
```
Then **re-run sql/wisest_staff_and_provisioning.sql** once more so its grant block
(which only runs if the role exists) applies.

## 3. Set DATABASE_URL_WISEST in .env.local
Same pooler host as `DATABASE_URL`, but the `wisest_staff` role:
```
DATABASE_URL_WISEST=postgresql://wisest_staff.<project-ref>:YOUR-WISEST-STAFF-PASSWORD@aws-0-<region>.pooler.supabase.com:5432/postgres?sslmode=disable
```
Restart the app. (Without it, the super-admin still works via the service-role;
the *hard* DB-level PII guarantee only holds once this is set.)

## 4. Make a Wisest employee
Stamp an account with the employee role:
```sql
update auth.users
  set raw_app_meta_data = coalesce(raw_app_meta_data,'{}'::jsonb) || '{"role":"wisest_staff"}'::jsonb
where email = 'employee@wisestmaths.com';
```
They log in → land on /admin/schools → can create/suspend schools and see counts,
but never student names/emails.

## Using it (School Admin)
On /school → **Import a class from a spreadsheet**: name the class + teacher,
upload a .xlsx/.csv of students (Name, Email). The app creates every account with
a generated password and downloads a one-time credentials sheet to hand out.
