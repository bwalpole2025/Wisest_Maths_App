/**
 * /api/classes — teacher-owned classes, members (student names) and quiz
 * assignments, persisted in Supabase.
 *
 *   GET  ?course=…                 → list the teacher's classes for a course
 *   POST { action: "create",  name, course, students[] }
 *   POST { action: "delete",  id }
 *   POST { action: "addMembers", id, names[] }
 *   POST { action: "removeMember", id, memberId }
 *   POST { action: "assign",  id, title, questionIds[] }
 *
 * Security: auth → role==="teacher" → rate limit → strict Zod. Every operation
 * is scoped to teacher_id = session.sub server-side.
 *
 * When Supabase isn't configured (dev/mock mode) this returns HTTP 503 with
 * { error: "supabase-not-configured" } so the client falls back to its local
 * store instead of failing — see hooks/useClasses.ts.
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/rateLimit";
import {
  supabaseClassesEnabled,
  listClasses,
  createClass,
  deleteClass,
  addMembers,
  removeMember,
  assignQuiz,
} from "@/lib/services/supabaseClasses";

async function requireTeacher(request: NextRequest) {
  const session = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!session) return { error: NextResponse.json({ error: "Authentication required." }, { status: 401 }) };
  if (session.role !== "teacher") return { error: NextResponse.json({ error: "Teachers only." }, { status: 403 }) };
  const rate = await checkRateLimit(session.sub, "global");
  if (!rate.allowed) return { error: NextResponse.json({ error: "Too many requests." }, { status: 429 }) };
  return { session };
}

const NOT_CONFIGURED = NextResponse.json({ error: "supabase-not-configured" }, { status: 503 });

export async function GET(request: NextRequest) {
  const auth = await requireTeacher(request);
  if (auth.error) return auth.error;
  if (!supabaseClassesEnabled()) return NOT_CONFIGURED;

  const course = request.nextUrl.searchParams.get("course");
  if (!course) return NextResponse.json({ error: "Missing course." }, { status: 400 });
  try {
    const classes = await listClasses(auth.session.sub, course);
    return NextResponse.json({ classes });
  } catch {
    return NextResponse.json({ error: "Could not load classes." }, { status: 500 });
  }
}

const NameList = z.array(z.string().trim().min(1).max(80)).max(200);

const ActionSchema = z.discriminatedUnion("action", [
  z.object({
    action: z.literal("create"),
    name: z.string().trim().min(1).max(80),
    course: z.string().min(1).max(40),
    students: NameList.default([]),
  }),
  z.object({ action: z.literal("delete"), id: z.string().uuid() }),
  z.object({ action: z.literal("addMembers"), id: z.string().uuid(), names: NameList.min(1) }),
  z.object({ action: z.literal("removeMember"), id: z.string().uuid(), memberId: z.string().uuid() }),
  z.object({
    action: z.literal("assign"),
    id: z.string().uuid(),
    title: z.string().trim().min(1).max(120),
    questionIds: z.array(z.string().min(1).max(64)).min(1).max(100),
  }),
]);

export async function POST(request: NextRequest) {
  const auth = await requireTeacher(request);
  if (auth.error) return auth.error;
  if (!supabaseClassesEnabled()) return NOT_CONFIGURED;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  const parsed = ActionSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid request." }, { status: 400 });

  const teacherId = auth.session.sub;
  const p = parsed.data;
  try {
    switch (p.action) {
      case "create":
        return NextResponse.json({ class: await createClass(teacherId, p.name, p.course, p.students) });
      case "delete":
        await deleteClass(teacherId, p.id);
        return NextResponse.json({ ok: true });
      case "addMembers":
        return NextResponse.json({ class: await addMembers(teacherId, p.id, p.names) });
      case "removeMember":
        return NextResponse.json({ class: await removeMember(teacherId, p.id, p.memberId) });
      case "assign":
        return NextResponse.json({ class: await assignQuiz(teacherId, p.id, p.title, p.questionIds) });
    }
  } catch (e) {
    // Most likely the migration (sql/quiz_engine.sql) hasn't been applied.
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Database error." },
      { status: 500 },
    );
  }
}
