/**
 * Supabase credential verification — the seam where real auth plugs in.
 *
 * Design decision: Supabase is used ONLY to verify a user's email + password
 * (and, later, to read their role / subscription tier). The *session* itself is
 * our own signed JWT (see lib/auth/session.ts), so the whole app has a single
 * session mechanism and the Edge middleware can verify it without a network
 * call to Supabase on every request.
 *
 * Until SUPABASE env vars are configured this falls back to a development-only
 * mock so the app remains runnable and testable. The mock accepts any password
 * and derives the role from the email — exactly the previous behaviour, but now
 * confined to one clearly-marked place and gated to non-production.
 */

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { UserRole } from "@/lib/types";

export interface VerifiedCredentials {
  /** Stable user id (Supabase user id, or the email in mock mode). */
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

function supabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
}

let client: SupabaseClient | null = null;
function getClient(): SupabaseClient {
  if (!client) {
    client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false, autoRefreshToken: false } },
    );
  }
  return client;
}

function deriveName(email: string): string {
  const local = email.split("@")[0] ?? "user";
  return local
    .split(/[._-]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function deriveRole(email: string): UserRole {
  return email.endsWith("@teacher.mathsapp.com") ? "teacher" : "student";
}

/**
 * Verify a login attempt. Returns the verified user on success, or null on
 * bad credentials. Throwing is reserved for unexpected/internal errors.
 */
export async function verifyCredentials(
  email: string,
  password: string,
): Promise<VerifiedCredentials | null> {
  if (supabaseConfigured()) {
    // ── Real path ───────────────────────────────────────────────────────
    const supabase = getClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error || !data.user) {
      return null;
    }
    // Role/subscription live in user metadata or a `profiles` table. Read the
    // server-trusted value here — NEVER take the role from the client.
    const metaRole = data.user.app_metadata?.role as UserRole | undefined;
    return {
      id: data.user.id,
      email: data.user.email ?? email,
      name:
        (data.user.user_metadata?.name as string | undefined) ??
        deriveName(email),
      role: metaRole ?? deriveRole(email),
    };
  }

  // ── Development mock (no Supabase configured) ──────────────────────────
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and " +
        "SUPABASE_SERVICE_ROLE_KEY before deploying.",
    );
  }
  if (!email || !password) return null;
  return {
    id: email,
    email,
    name: deriveName(email),
    role: deriveRole(email),
  };
}
