/**
 * Account provisioning — SERVER ONLY (service-role).
 *
 * Creates Supabase Auth accounts with a generated one-time password and stamps
 * their role + school onto app_metadata, so the account works on email/password
 * login immediately (and is school-scoped by RLS). The generated password is
 * RETURNED ONCE (for the credentials export) and never stored by us — Supabase
 * keeps only the hash.
 *
 * Idempotent: re-importing an existing email skips creation (never resets a
 * password) and resolves the existing user id from school_members so the person
 * can still be enrolled in the new class.
 */

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { UserRole } from "@/lib/types";
import { generatePassword } from "@/lib/auth/password";

let admin: SupabaseClient | null = null;
function db(): SupabaseClient {
  if (!admin) {
    admin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false, autoRefreshToken: false } },
    );
  }
  return admin;
}

export interface ProvisionResult {
  email: string;
  name: string;
  role: Extract<UserRole, "teacher" | "student">;
  userId: string | null;
  /** The one-time password — null when the account already existed. */
  password: string | null;
  status: "created" | "existing" | "error";
  error?: string;
}

/** Resolve a previously-provisioned user's id from our roster (no auth-admin list scan). */
async function existingUserId(email: string): Promise<string | null> {
  const { data } = await db()
    .from("school_members")
    .select("user_id")
    .ilike("email", email)
    .not("user_id", "is", null)
    .limit(1)
    .maybeSingle();
  return (data?.user_id as string | undefined) ?? null;
}

export async function createUserWithPassword(
  email: string,
  name: string,
  role: Extract<UserRole, "teacher" | "student">,
  schoolId: string,
): Promise<ProvisionResult> {
  const password = generatePassword();
  const { data, error } = await db().auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { name },
    app_metadata: { role, school_id: schoolId },
  });

  if (error) {
    // Already registered → enrol the existing account, don't reset its password.
    if (/already|registered|exists/i.test(error.message)) {
      return { email, name, role, userId: await existingUserId(email), password: null, status: "existing" };
    }
    return { email, name, role, userId: null, password: null, status: "error", error: error.message };
  }
  return { email, name, role, userId: data.user.id, password, status: "created" };
}
