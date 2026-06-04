/**
 * POST /api/school/classes/import — class-centric onboarding (School Admin).
 *
 * Multipart form: { name, course, teacherName, teacherEmail, file(.xlsx/.csv) }.
 * Provisions the teacher + every student in the sheet as Supabase accounts with
 * generated passwords, creates the class (owned by the teacher) with students
 * pre-enrolled, and responds with a one-time credentials .xlsx download.
 *
 * Gated to school_admin; the generated passwords are returned ONCE in the file
 * and never stored by us. Account creation uses the service-role; the class +
 * roster writes go through withTenant (RLS-scoped to this admin's school).
 */

import { NextRequest, NextResponse } from "next/server";
import { requireRole } from "@/lib/auth/guard";
import { tenantDbEnabled } from "@/lib/db/tenant";
import {
  supabaseClassesEnabled,
  createClassForTeacher,
  type EnrolledMember,
} from "@/lib/services/supabaseClasses";
import { createUserWithPassword } from "@/lib/services/provisioning";
import { upsertRoster } from "@/lib/services/schoolMembers";
import { parseRosterSheet, buildCredentialsSheet, type CredentialRow } from "@/lib/services/spreadsheet";

const COURSES = ["a-level-maths", "a-level-further-maths"];
const MAX_FILE = 2 * 1024 * 1024; // 2 MB
const MAX_STUDENTS = 500;
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const bad = (msg: string) => NextResponse.json({ error: msg }, { status: 400 });
const safeName = (s: string) => s.replace(/[^a-zA-Z0-9 _-]+/g, "").trim().replace(/\s+/g, "_") || "class";

export async function POST(request: NextRequest) {
  const auth = await requireRole(request, ["school_admin"]);
  if (auth.error) return auth.error;
  if (!tenantDbEnabled() || !supabaseClassesEnabled()) {
    return NextResponse.json({ error: "supabase-not-configured" }, { status: 503 });
  }
  const claims = auth.session;
  if (!claims.schoolId) return bad("This account has no school.");

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return bad("Invalid form data.");
  }
  const name = String(form.get("name") ?? "").trim();
  const course = String(form.get("course") ?? "").trim();
  const teacherName = String(form.get("teacherName") ?? "").trim();
  const teacherEmail = String(form.get("teacherEmail") ?? "").trim().toLowerCase();
  const file = form.get("file");

  if (!name || name.length > 80) return bad("A class name (1–80 chars) is required.");
  if (!COURSES.includes(course)) return bad("Pick a valid course.");
  if (!teacherName || teacherName.length > 120) return bad("A teacher name is required.");
  if (!EMAIL_RE.test(teacherEmail)) return bad("A valid teacher email is required.");
  if (!(file instanceof File)) return bad("Upload a .xlsx or .csv roster file.");
  if (file.size > MAX_FILE) return bad("File too large (max 2 MB).");

  let students;
  try {
    students = parseRosterSheet(Buffer.from(await file.arrayBuffer()));
  } catch {
    return bad("Could not read that spreadsheet. Use .xlsx or .csv with Name and Email columns.");
  }
  if (students.length === 0) return bad("No students with email addresses found in the sheet.");
  if (students.length > MAX_STUDENTS) return bad(`Too many students (max ${MAX_STUDENTS}).`);

  try {
    // 1. Teacher account (generated password).
    const teacher = await createUserWithPassword(teacherEmail, teacherName, "teacher", claims.schoolId);
    if (!teacher.userId) {
      return NextResponse.json({ error: teacher.error ?? "Could not create the teacher account." }, { status: 500 });
    }
    // 2. Student accounts.
    const studentResults = [];
    for (const s of students) {
      studentResults.push(await createUserWithPassword(s.email, s.name, "student", claims.schoolId));
    }
    // 3. Record everyone in the school roster (linked).
    await upsertRoster(claims, [
      { email: teacherEmail, name: teacherName, role: "teacher", userId: teacher.userId },
      ...studentResults.map((r) => ({ email: r.email, name: r.name, role: "student" as const, userId: r.userId })),
    ]);
    // 4. Create the class, owned by the teacher, with students pre-enrolled.
    const members: EnrolledMember[] = studentResults
      .filter((r) => r.userId)
      .map((r) => ({ name: r.name, email: r.email, studentId: r.userId }));
    await createClassForTeacher(claims, teacher.userId, name, course, members);

    // 5. One-time credentials sheet.
    const credRows: CredentialRow[] = [
      { name: teacher.name, email: teacher.email, role: "teacher", password: teacher.password, status: teacher.status },
      ...studentResults.map((r) => ({
        name: r.name,
        email: r.email,
        role: "student",
        password: r.password,
        status: r.status,
      })),
    ];
    const xlsx = buildCredentialsSheet(credRows, name);
    const summary = {
      class: name,
      teacher: teacherEmail,
      students: studentResults.length,
      created: credRows.filter((r) => r.status === "created").length,
      existing: credRows.filter((r) => r.status === "existing").length,
    };
    return new NextResponse(new Uint8Array(xlsx), {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="${safeName(name)}-credentials.xlsx"`,
        "X-Import-Summary": JSON.stringify(summary),
      },
    });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Import failed." }, { status: 500 });
  }
}
