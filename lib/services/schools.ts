/**
 * School provisioning + first-login identity resolution — SERVER ONLY.
 *
 * These functions use the Supabase SERVICE-ROLE client because they are
 * privileged auth/admin operations (creating schools, stamping a user's
 * app_metadata, resolving which school a brand-new sign-in belongs to). They are
 * NOT tenant CRUD — that goes through lib/db/tenant.ts (RLS, wisest_app_user).
 *
 * Trust model: createSchool / createSchoolAdmin must only be called behind a
 * `wisest_admin` gate; resolveSchoolIdentity runs during the OAuth callback.
 */

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { UserRole } from "@/lib/types";
import type { SessionClaims } from "@/lib/auth/session";
import { withWisestStaff, platformDbEnabled } from "@/lib/db/platform";

// The PII boundary is about READS: a Wisest employee must not be able to READ
// student data. So employee READS (listSchoolOverview) go through the restricted
// no-PII connection, while WRITES (create school / admin, suspend) — which expose
// no student PII either way — use the service-role. This keeps the hard read
// guarantee without a finicky write-grant surface on the wisest_staff role.
type WisestClaims = Pick<SessionClaims, "sub" | "role">;
const staffRead = (claims: WisestClaims) => claims.role === "wisest_staff" && platformDbEnabled();

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

export interface School {
  id: string;
  name: string;
  contractRef?: string;
  seats?: number;
}

export interface SchoolIdentity {
  role: UserRole;
  schoolId: string;
}

export interface SchoolOverview {
  id: string;
  name: string;
  contractRef?: string;
  seats?: number;
  status: "active" | "suspended";
  teacherCount: number;
  studentCount: number;
  classesCount: number;
}

/** Create a school (Wisest staff or super-admin; service-role — no PII involved). */
export async function createSchool(
  _claims: WisestClaims,
  name: string,
  contractRef?: string,
  seats?: number,
): Promise<School> {
  const { data, error } = await db()
    .from("schools")
    .insert({ name, contract_ref: contractRef ?? null, seats: seats ?? null })
    .select("id,name,contract_ref,seats")
    .single();
  if (error) throw error;
  return { id: data.id, name: data.name, contractRef: data.contract_ref ?? undefined, seats: data.seats ?? undefined };
}

/* eslint-disable @typescript-eslint/no-explicit-any */
const mapOverview = (s: any): SchoolOverview => ({
  id: s.school_id,
  name: s.name,
  contractRef: s.contract_ref ?? undefined,
  seats: s.seats ?? undefined,
  status: s.status,
  teacherCount: Number(s.teacher_count) || 0,
  studentCount: Number(s.student_count) || 0,
  classesCount: Number(s.classes_count) || 0,
});
/* eslint-enable @typescript-eslint/no-explicit-any */

/** PII-free school list with counts + status (Wisest staff or super-admin). */
export async function listSchoolOverview(claims: WisestClaims): Promise<SchoolOverview[]> {
  if (staffRead(claims)) {
    return withWisestStaff(claims, async (c) => {
      const { rows } = await c.query(
        "SELECT school_id, name, contract_ref, seats, status, teacher_count, student_count, classes_count FROM school_overview ORDER BY name",
      );
      return rows.map(mapOverview);
    });
  }
  const { data, error } = await db().from("school_overview").select("*").order("name");
  if (error) throw error;
  return (data ?? []).map(mapOverview);
}

/** Suspend or re-activate a school (blocks/unblocks its users at login). */
export async function setSchoolStatus(
  _claims: WisestClaims,
  schoolId: string,
  status: "active" | "suspended",
): Promise<void> {
  const { error } = await db().from("schools").update({ status }).eq("id", schoolId);
  if (error) throw error;
}

/** Internal check used at login — is this school suspended? (service-role) */
export async function isSchoolSuspended(schoolId: string): Promise<boolean> {
  const { data, error } = await db().from("schools").select("status").eq("id", schoolId).maybeSingle();
  if (error) return false; // fail open on read error; never block a valid login on a glitch
  return data?.status === "suspended";
}

/**
 * Seed a school's first School Admin. Roster-seed model: we record them in
 * school_members so their identity resolves on first Google sign-in. (No auth
 * account is created here — they sign in with their school Google account.)
 */
export async function createSchoolAdmin(
  _claims: WisestClaims,
  schoolId: string,
  email: string,
  name: string,
): Promise<void> {
  const { error } = await db()
    .from("school_members")
    .upsert(
      { school_id: schoolId, email: email.toLowerCase(), name, role: "school_admin" },
      { onConflict: "school_id,email" },
    );
  if (error) throw error;
}

/**
 * First-login resolution: match the signing-in email to a seeded school_members
 * row, stamp app_metadata.{role,school_id} onto the auth user (so subsequent
 * logins read it directly), mark the roster row linked, and — for students —
 * link their class roster rows WITHIN THIS SCHOOL ONLY. Returns the resolved
 * identity, or null if the email isn't provisioned to any school.
 */
export async function resolveSchoolIdentity(userId: string, email: string): Promise<SchoolIdentity | null> {
  const lower = email.toLowerCase();
  const { data: member, error } = await db()
    .from("school_members")
    .select("id,school_id,role,user_id")
    .ilike("email", lower)
    .limit(1)
    .maybeSingle();
  if (error || !member) return null;

  const role = member.role as UserRole;
  const schoolId = member.school_id as string;

  // Stamp identity so future logins read it from app_metadata directly.
  try {
    await db().auth.admin.updateUserById(userId, { app_metadata: { role, school_id: schoolId } });
  } catch (e) {
    console.error("[schools] failed to stamp app_metadata:", e);
  }

  if (!member.user_id) {
    await db().from("school_members").update({ user_id: userId }).eq("id", member.id);
  }

  // Students: link class_members rows for this email, but only inside this school
  // (closes the cross-school email-collision leak).
  if (role === "student") {
    const { data: classes } = await db().from("classes").select("id").eq("school_id", schoolId);
    const classIds = (classes ?? []).map((c) => c.id);
    if (classIds.length > 0) {
      await db()
        .from("class_members")
        .update({ student_id: userId })
        .ilike("email", lower)
        .is("student_id", null)
        .in("class_id", classIds);
    }
  }

  return { role, schoolId };
}
