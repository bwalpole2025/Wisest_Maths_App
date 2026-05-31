/**
 * ⚠ DEMO MODE — REMOVE BEFORE PRODUCTION DEPLOY
 *
 * Provides a one-click "skip auth" bypass for local development so the
 * developer can browse questions and the AI tutor without setting up Supabase.
 *
 * Layered safety so this can't leak into production:
 *   1. Gated by `DEMO_MODE=true` env var (off by default)
 *   2. ALSO gated by `NODE_ENV !== "production"` at runtime
 *   3. The demo cookie value is irrelevant — it's only accepted when both
 *      gates above are open. Even if an attacker forges the cookie value,
 *      production will reject it because NODE_ENV is "production" there.
 *
 * To remove everything related to demo mode for a real deploy:
 *   1. Delete this file (lib/demoMode.ts).
 *   2. Delete app/api/auth/demo/route.ts.
 *   3. Delete components/DemoLoginButton.tsx (or wherever the button lives).
 *   4. Remove the DEMO_MODE env var entry from lib/env.ts and .env.example.
 *   5. Remove the demo-cookie short-circuit in middleware.ts and lib/auth.ts.
 *   6. Search the codebase for "DEMO MODE" comments and remove all of them.
 *
 * Any one of steps 1–5 alone disables the bypass; doing all of them removes
 * the code entirely.
 */

import { env } from "@/lib/env";
import type { UserRole } from "@/lib/types";

export const DEMO_COOKIE_NAME = "wisest-demo-session";

/**
 * Hard-coded demo identities. These have no real Supabase users behind them —
 * the auth helper short-circuits before reaching Supabase when this cookie is
 * accepted.
 */
export const DEMO_USERS: Record<string, DemoUser> = {
  student: {
    id: "demo-student-00000000-0000-0000-0000-000000000001",
    email: "demo-student@wisest.local",
    name: "Demo Student",
    role: "student",
  },
  teacher: {
    id: "demo-teacher-00000000-0000-0000-0000-000000000002",
    email: "demo-teacher@wisest.local",
    name: "Demo Teacher",
    role: "teacher",
  },
};

export interface DemoUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

/**
 * Returns true ONLY when both gates are open. Used by every demo-mode code
 * path. If this returns false the cookie is ignored.
 */
export function isDemoModeAllowed(): boolean {
  return env.NODE_ENV !== "production" && env.DEMO_MODE === "true";
}

/**
 * Look up the demo user behind a cookie value, or null if absent / invalid /
 * demo mode is not allowed.
 */
export function resolveDemoUser(cookieValue: string | undefined): DemoUser | null {
  if (!isDemoModeAllowed()) return null;
  if (!cookieValue) return null;
  const user = DEMO_USERS[cookieValue];
  return user ?? null;
}
