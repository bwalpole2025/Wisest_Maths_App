/**
 * Supabase-backed persistence for classes, class members (student names) and
 * quiz assignments. Server-only.
 *
 * Uses a service-role client and scopes EVERY query by teacher_id = session.sub
 * (the app has no request-scoped DB role yet, so authorisation is enforced here
 * in code rather than by RLS — which the service role bypasses anyway). The
 * tables + RLS live in sql/quiz_engine.sql.
 *
 * `supabaseClassesEnabled()` lets callers fall back to the localStorage store
 * when Supabase isn't configured (the app's default dev/mock mode), so the
 * feature keeps working until credentials + the migration are in place.
 */

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { ClassGroup, StudentAssignment, RosterMember } from "@/lib/services/classStore";

export function supabaseClassesEnabled(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
}

let client: SupabaseClient | null = null;
function db(): SupabaseClient {
  if (!client) {
    client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false, autoRefreshToken: false } },
    );
  }
  return client;
}

const SELECT =
  "id,name,course,created_at,class_members(id,name,email,student_id),quiz_assignments(id,title,question_ids,assigned_at)";

/* eslint-disable @typescript-eslint/no-explicit-any */
function mapRow(r: any): ClassGroup {
  return {
    id: r.id,
    name: r.name,
    course: r.course,
    createdAt: r.created_at ? Date.parse(r.created_at) : 0,
    students: (r.class_members ?? []).map((m: any) => ({
      id: m.id,
      name: m.name,
      ...(m.email ? { email: m.email } : {}),
      ...(m.student_id ? { studentId: m.student_id } : {}),
    })),
    assignments: (r.quiz_assignments ?? [])
      .map((a: any) => ({
        id: a.id,
        title: a.title,
        questionIds: a.question_ids ?? [],
        total: (a.question_ids ?? []).length,
        assignedAt: a.assigned_at ? Date.parse(a.assigned_at) : 0,
      }))
      .sort((x: { assignedAt: number }, y: { assignedAt: number }) => y.assignedAt - x.assignedAt),
  };
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export async function listClasses(teacherId: string, course: string): Promise<ClassGroup[]> {
  const { data, error } = await db()
    .from("classes")
    .select(SELECT)
    .eq("teacher_id", teacherId)
    .eq("course", course)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []).map(mapRow);
}

async function getOne(teacherId: string, id: string): Promise<ClassGroup | null> {
  const { data, error } = await db()
    .from("classes")
    .select(SELECT)
    .eq("teacher_id", teacherId)
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data ? mapRow(data) : null;
}

export async function createClass(
  teacherId: string,
  name: string,
  course: string,
  members: RosterMember[],
): Promise<ClassGroup> {
  const { data, error } = await db()
    .from("classes")
    .insert({ teacher_id: teacherId, name, course })
    .select("id")
    .single();
  if (error) throw error;
  if (members.length) {
    const { error: mErr } = await db()
      .from("class_members")
      .insert(members.map((m) => ({ class_id: data.id, name: m.name, email: m.email ?? null })));
    if (mErr) throw mErr;
  }
  const created = await getOne(teacherId, data.id);
  if (!created) throw new Error("Class created but could not be read back.");
  return created;
}

export async function deleteClass(teacherId: string, id: string): Promise<void> {
  const { error } = await db().from("classes").delete().eq("teacher_id", teacherId).eq("id", id);
  if (error) throw error;
}

export async function addMembers(
  teacherId: string,
  id: string,
  members: RosterMember[],
): Promise<ClassGroup | null> {
  // Ownership check before any write to a child table.
  if (!(await getOne(teacherId, id))) throw new Error("Class not found.");
  if (members.length) {
    const { error } = await db()
      .from("class_members")
      .insert(members.map((m) => ({ class_id: id, name: m.name, email: m.email ?? null })));
    if (error) throw error;
  }
  return getOne(teacherId, id);
}

export async function removeMember(
  teacherId: string,
  id: string,
  memberId: string,
): Promise<ClassGroup | null> {
  if (!(await getOne(teacherId, id))) throw new Error("Class not found.");
  const { error } = await db()
    .from("class_members")
    .delete()
    .eq("id", memberId)
    .eq("class_id", id);
  if (error) throw error;
  return getOne(teacherId, id);
}

export async function assignQuiz(
  teacherId: string,
  id: string,
  title: string,
  questionIds: string[],
): Promise<ClassGroup | null> {
  if (!(await getOne(teacherId, id))) throw new Error("Class not found.");
  const { error } = await db()
    .from("quiz_assignments")
    .insert({ class_id: id, title, question_ids: questionIds });
  if (error) throw error;
  return getOne(teacherId, id);
}

/**
 * Link a freshly-signed-in student to their roster row(s) by school email.
 *
 * Called on first Google (school) sign-in: a teacher seeds the roster with
 * names + school emails ahead of a contract; when the student logs in with that
 * same Google email, we stamp their stable user id onto every matching,
 * not-yet-linked roster row. Idempotent (only fills rows where student_id is
 * null) and case-insensitive on email. Best-effort — callers should not fail
 * the login if this throws.
 */
export async function linkStudentByEmail(studentId: string, email: string): Promise<void> {
  if (!email) return;
  const { error } = await db()
    .from("class_members")
    .update({ student_id: studentId })
    .ilike("email", email)
    .is("student_id", null);
  if (error) throw error;
}

/**
 * A student's assignments: every quiz assigned to a class whose roster contains
 * a member matching `name` (case-insensitive). Approximate until members are
 * linked to accounts (class_members.student_id).
 */
export async function assignmentsForStudentName(name: string): Promise<StudentAssignment[]> {
  const { data, error } = await db()
    .from("class_members")
    .select("classes(name,course,quiz_assignments(id,title,question_ids,assigned_at))")
    .ilike("name", name);
  if (error) throw error;
  const out: StudentAssignment[] = [];
  /* eslint-disable @typescript-eslint/no-explicit-any */
  for (const row of (data ?? []) as any[]) {
    const cls = row.classes;
    if (!cls) continue;
    for (const a of cls.quiz_assignments ?? []) {
      out.push({
        id: a.id,
        title: a.title,
        total: (a.question_ids ?? []).length,
        className: cls.name,
        course: cls.course,
        assignedAt: a.assigned_at ? Date.parse(a.assigned_at) : 0,
      });
    }
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */
  return out.sort((x, y) => y.assignedAt - x.assignedAt);
}
