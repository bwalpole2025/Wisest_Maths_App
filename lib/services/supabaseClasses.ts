/**
 * Tenant-scoped persistence for classes, class members and quiz assignments.
 * Server-only.
 *
 * Authorisation is enforced by Postgres Row Level Security, not app code: every
 * function runs through `withTenant(claims, …)` (lib/db/tenant.ts), which opens a
 * transaction as the restricted `wisest_app_user` role and sets
 * app.current_user_id / app.current_school_id / app.current_role / app.current_email.
 * The policies in sql/multi_tenant_schools.sql then scope each statement to the
 * caller's SCHOOL and (for teachers) their own classes; a school_admin sees the
 * whole school; a student sees only their own assignments. This closes the old
 * name/email cross-school leaks.
 *
 * `supabaseClassesEnabled()` (service-role present) gates the OAuth identity
 * resolver; tenant CRUD is gated by `tenantDbEnabled()` (DATABASE_URL present),
 * with the localStorage store as the dev fallback when it's absent.
 */

import type { ClassGroup, StudentAssignment, RosterMember } from "@/lib/services/classStore";
import type { SessionClaims } from "@/lib/auth/session";
import { withTenant } from "@/lib/db/tenant";

export { tenantDbEnabled } from "@/lib/db/tenant";

/** Service-role present — used by the OAuth identity resolver (lib/services/schools.ts). */
export function supabaseClassesEnabled(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

type Claims = Pick<SessionClaims, "sub" | "role" | "schoolId" | "email">;

/* eslint-disable @typescript-eslint/no-explicit-any */
// One class + its members + assignments, as a single RLS-filtered query.
const classSelectSql = (where: string) => `
  SELECT c.id, c.name, c.course,
    (extract(epoch from c.created_at) * 1000)::bigint AS created_ms,
    coalesce((SELECT json_agg(json_build_object('id', m.id, 'name', m.name, 'email', m.email,
              'student_id', m.student_id) ORDER BY m.created_at)
              FROM class_members m WHERE m.class_id = c.id), '[]'::json) AS members,
    coalesce((SELECT json_agg(json_build_object('id', a.id, 'title', a.title, 'question_ids', a.question_ids,
              'assigned_ms', (extract(epoch from a.assigned_at) * 1000)::bigint,
              'target_member_ids', a.target_member_ids) ORDER BY a.assigned_at DESC)
              FROM quiz_assignments a WHERE a.class_id = c.id), '[]'::json) AS assignments
  FROM classes c
  WHERE ${where}
  ORDER BY c.created_at DESC`;

function mapClassRow(r: any): ClassGroup {
  return {
    id: r.id,
    name: r.name,
    course: r.course,
    createdAt: Number(r.created_ms) || 0,
    students: (r.members ?? []).map((m: any) => ({
      id: m.id,
      name: m.name,
      ...(m.email ? { email: m.email } : {}),
      ...(m.student_id ? { studentId: m.student_id } : {}),
    })),
    assignments: (r.assignments ?? []).map((a: any) => ({
      id: a.id,
      title: a.title,
      questionIds: a.question_ids ?? [],
      total: (a.question_ids ?? []).length,
      assignedAt: Number(a.assigned_ms) || 0,
      ...(a.target_member_ids && a.target_member_ids.length > 0
        ? { targetStudentIds: a.target_member_ids as string[] }
        : {}),
    })),
  };
}

import type { PoolClient } from "pg";
async function getOneIn(client: PoolClient, id: string): Promise<ClassGroup | null> {
  const { rows } = await client.query(classSelectSql("c.id = $1"), [id]);
  return rows[0] ? mapClassRow(rows[0]) : null;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export async function listClasses(claims: Claims, course: string): Promise<ClassGroup[]> {
  return withTenant(claims, async (c) => {
    const { rows } = await c.query(classSelectSql("c.course = $1"), [course]);
    return rows.map(mapClassRow);
  });
}

export async function createClass(
  claims: Claims,
  name: string,
  course: string,
  members: RosterMember[],
): Promise<ClassGroup> {
  if (!claims.schoolId) throw new Error("No school context for this account.");
  return withTenant(claims, async (c) => {
    const { rows } = await c.query(
      "INSERT INTO classes (school_id, teacher_id, name, course) VALUES ($1,$2,$3,$4) RETURNING id",
      [claims.schoolId, claims.sub, name, course],
    );
    const id = rows[0].id as string;
    if (members.length) {
      await c.query(
        "INSERT INTO class_members (class_id, name, email) SELECT $1, * FROM unnest($2::text[], $3::text[])",
        [id, members.map((m) => m.name), members.map((m) => m.email ?? null)],
      );
    }
    const created = await getOneIn(c, id);
    if (!created) throw new Error("Class created but could not be read back.");
    return created;
  });
}

export async function deleteClass(claims: Claims, id: string): Promise<void> {
  await withTenant(claims, async (c) => {
    await c.query("DELETE FROM classes WHERE id = $1", [id]);
  });
}

export interface EnrolledMember {
  name: string;
  email: string;
  /** Pre-linked Supabase user id (set during spreadsheet provisioning). */
  studentId: string | null;
}

/**
 * Create a class on behalf of a teacher (school-admin onboarding). teacher_id is
 * the teacher's account, not the admin's — allowed because the classes_school RLS
 * policy lets a school_admin create for any teacher in their school. Members are
 * inserted with their student_id already linked.
 */
export async function createClassForTeacher(
  claims: Claims,
  teacherId: string,
  name: string,
  course: string,
  members: EnrolledMember[],
): Promise<ClassGroup> {
  if (!claims.schoolId) throw new Error("No school context for this account.");
  return withTenant(claims, async (c) => {
    const { rows } = await c.query(
      "INSERT INTO classes (school_id, teacher_id, name, course) VALUES ($1,$2,$3,$4) RETURNING id",
      [claims.schoolId, teacherId, name, course],
    );
    const id = rows[0].id as string;
    if (members.length) {
      await c.query(
        `INSERT INTO class_members (class_id, name, email, student_id)
         SELECT $1, * FROM unnest($2::text[], $3::text[], $4::uuid[])`,
        [id, members.map((m) => m.name), members.map((m) => m.email), members.map((m) => m.studentId)],
      );
    }
    const created = await getOneIn(c, id);
    if (!created) throw new Error("Class created but could not be read back.");
    return created;
  });
}

export async function addMembers(claims: Claims, id: string, members: RosterMember[]): Promise<ClassGroup | null> {
  return withTenant(claims, async (c) => {
    if (!(await getOneIn(c, id))) throw new Error("Class not found.");
    if (members.length) {
      await c.query(
        "INSERT INTO class_members (class_id, name, email) SELECT $1, * FROM unnest($2::text[], $3::text[])",
        [id, members.map((m) => m.name), members.map((m) => m.email ?? null)],
      );
    }
    return getOneIn(c, id);
  });
}

export async function removeMember(claims: Claims, id: string, memberId: string): Promise<ClassGroup | null> {
  return withTenant(claims, async (c) => {
    if (!(await getOneIn(c, id))) throw new Error("Class not found.");
    await c.query("DELETE FROM class_members WHERE id = $1 AND class_id = $2", [memberId, id]);
    return getOneIn(c, id);
  });
}

export async function assignQuiz(
  claims: Claims,
  id: string,
  title: string,
  questionIds: string[],
  targetMemberIds?: string[],
): Promise<ClassGroup | null> {
  return withTenant(claims, async (c) => {
    if (!(await getOneIn(c, id))) throw new Error("Class not found.");
    const target = targetMemberIds && targetMemberIds.length > 0 ? targetMemberIds : null;
    await c.query(
      "INSERT INTO quiz_assignments (class_id, title, question_ids, target_member_ids) VALUES ($1,$2,$3,$4)",
      [id, title, questionIds, target],
    );
    return getOneIn(c, id);
  });
}

/**
 * A student's assignments: every quiz for a class they're a member of, matched
 * by linked account (student_id) OR verified email — RLS bounds this to their
 * own school, so two schools' "John Smith" / shared emails never collide.
 */
export async function assignmentsForStudent(claims: Claims): Promise<StudentAssignment[]> {
  return withTenant(claims, async (c) => {
    const { rows } = await c.query(
      `SELECT a.id, a.title, a.question_ids,
              (extract(epoch from a.assigned_at) * 1000)::bigint AS assigned_ms,
              a.target_member_ids, cl.name AS class_name, cl.course, m.id AS member_id
       FROM class_members m
       JOIN classes cl ON cl.id = m.class_id
       JOIN quiz_assignments a ON a.class_id = cl.id
       WHERE m.student_id = $1::uuid OR lower(m.email) = lower($2)`,
      [claims.sub, claims.email],
    );
    const out: StudentAssignment[] = [];
    /* eslint-disable @typescript-eslint/no-explicit-any */
    for (const r of rows as any[]) {
      const target = r.target_member_ids as string[] | null;
      if (target && target.length > 0 && !target.includes(r.member_id)) continue;
      out.push({
        id: r.id,
        title: r.title,
        total: (r.question_ids ?? []).length,
        className: r.class_name,
        course: r.course,
        assignedAt: Number(r.assigned_ms) || 0,
        questionIds: (r.question_ids ?? []) as string[],
      });
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */
    return out.sort((x, y) => y.assignedAt - x.assignedAt);
  });
}
