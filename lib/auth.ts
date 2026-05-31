/**
 * Unified auth helper for API routes.
 *
 * Order of precedence:
 *   1. Demo cookie (only if isDemoModeAllowed() — gated by env, see lib/demoMode.ts)
 *   2. Supabase getUser() — JWT-validated against Supabase
 *
 * Returns null if neither produces a user. Routes that need authentication
 * should call this and return 401 on null.
 *
 * Removing demo mode for production: just delete the demo block below.
 */

import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { DEMO_COOKIE_NAME, resolveDemoUser } from "@/lib/demoMode";
import type { UserRole } from "@/lib/types";

export interface AuthenticatedUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

function deriveName(email: string): string {
  const local = email.split("@")[0] ?? "user";
  return local
    .split(/[._-]/)
    .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : ""))
    .filter(Boolean)
    .join(" ");
}

export async function getAuthenticatedUser(): Promise<AuthenticatedUser | null> {
  // ── 1. Demo cookie (dev-only) ─ REMOVE FOR PRODUCTION ─────────────
  const cookieStore = await cookies();
  const demoCookie = cookieStore.get(DEMO_COOKIE_NAME)?.value;
  const demoUser = resolveDemoUser(demoCookie);
  if (demoUser) {
    return {
      id: demoUser.id,
      email: demoUser.email,
      name: demoUser.name,
      role: demoUser.role,
    };
  }
  // ── end demo block ───────────────────────────────────────────────

  // ── 2. Real Supabase auth ────────────────────────────────────────
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const email = user.email ?? "";
  const name =
    (user.user_metadata?.name as string | undefined) || deriveName(email);

  return {
    id: user.id,
    email,
    name,
    role: (user.app_metadata?.role as UserRole | undefined) ?? "student",
  };
}
