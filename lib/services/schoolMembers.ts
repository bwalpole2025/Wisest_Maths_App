/**
 * School-admin roster management — tenant-scoped (RLS via withTenant).
 *
 * A School Admin bulk-imports their school's teachers and students into
 * `school_members`; on each user's first Google sign-in, resolveSchoolIdentity
 * (lib/services/schools.ts) matches the email, stamps their role + school onto
 * the account, and links their class rosters. Every statement here is bounded to
 * the admin's own school by RLS (school_members_write requires role=school_admin).
 */

import { withTenant } from "@/lib/db/tenant";
import type { SessionClaims } from "@/lib/auth/session";

type Claims = Pick<SessionClaims, "sub" | "role" | "schoolId" | "email">;

export interface MemberRow {
  email: string;
  name: string;
  role: "teacher" | "student";
}

export interface SchoolMember extends MemberRow {
  id: string;
  linked: boolean;
}

/** Bulk upsert teachers/students into the admin's school. Returns the count. */
export async function importMembers(claims: Claims, rows: MemberRow[]): Promise<number> {
  if (!claims.schoolId) throw new Error("No school context for this account.");
  if (rows.length === 0) return 0;
  return withTenant(claims, async (c) => {
    await c.query(
      `INSERT INTO school_members (school_id, email, name, role)
       SELECT $1, lower(e), n, r FROM unnest($2::text[], $3::text[], $4::text[]) AS t(e, n, r)
       ON CONFLICT (school_id, email) DO UPDATE SET name = EXCLUDED.name, role = EXCLUDED.role`,
      [claims.schoolId, rows.map((r) => r.email), rows.map((r) => r.name), rows.map((r) => r.role)],
    );
    return rows.length;
  });
}

export interface ProvisionedMember {
  email: string;
  name: string;
  role: "teacher" | "student";
  userId: string | null;
}

/**
 * Record provisioned accounts in the school roster, filling user_id so they're
 * already linked. Used by the spreadsheet import after accounts are created.
 */
export async function upsertRoster(claims: Claims, rows: ProvisionedMember[]): Promise<void> {
  if (!claims.schoolId) throw new Error("No school context for this account.");
  if (rows.length === 0) return;
  await withTenant(claims, async (c) => {
    await c.query(
      `INSERT INTO school_members (school_id, email, name, role, user_id)
       SELECT $1, lower(e), n, r, NULLIF(u, '')::uuid
       FROM unnest($2::text[], $3::text[], $4::text[], $5::text[]) AS t(e, n, r, u)
       ON CONFLICT (school_id, email) DO UPDATE
         SET name = EXCLUDED.name, role = EXCLUDED.role,
             user_id = COALESCE(EXCLUDED.user_id, school_members.user_id)`,
      [
        claims.schoolId,
        rows.map((r) => r.email),
        rows.map((r) => r.name),
        rows.map((r) => r.role),
        rows.map((r) => r.userId ?? ""),
      ],
    );
  });
}

/** List everyone provisioned into the admin's school. */
export async function listMembers(claims: Claims): Promise<SchoolMember[]> {
  if (!claims.schoolId) return [];
  return withTenant(claims, async (c) => {
    const { rows } = await c.query(
      "SELECT id, email, name, role, user_id FROM school_members WHERE school_id = $1 ORDER BY role, name",
      [claims.schoolId],
    );
    /* eslint-disable @typescript-eslint/no-explicit-any */
    return (rows as any[]).map((r) => ({
      id: r.id,
      email: r.email,
      name: r.name,
      role: r.role,
      linked: Boolean(r.user_id),
    }));
    /* eslint-enable @typescript-eslint/no-explicit-any */
  });
}
