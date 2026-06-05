/**
 * Class roster + quiz-assignment store.
 *
 * PROTOTYPE PERSISTENCE: this app runs in mock mode (no Supabase configured),
 * and the rest of the client state (course, progress) lives in localStorage —
 * so classes live there too. Everything goes through this one module, so when
 * a real backend is wired the storage can be swapped for the API/Supabase
 * tables in sql/quiz_engine.sql (classes / class_members / quiz_assignments)
 * without touching the UI.
 *
 * Per-browser only; not shared between devices. Flagged to the user as such.
 */

export interface ClassStudent {
  id: string;
  name: string;
  /** School email — the key used to link this roster row to a real account
   * (Google SSO) on the student's first sign-in. Optional for name-only rosters. */
  email?: string;
  /** Set once a real account is linked (Supabase user id). */
  studentId?: string;
}

/** A typed roster member entered by a teacher. */
export interface RosterMember {
  name: string;
  email?: string;
}

export interface QuizAssignment {
  id: string;
  title: string;
  /** Bank question ids that make up the assigned quiz. */
  questionIds: string[];
  total: number;
  assignedAt: number;
  /**
   * Targeting: which students in the class this quiz is for. When empty or
   * absent, the quiz goes to the WHOLE class. When set, only the listed roster
   * members (ClassStudent.id locally / class_members.id in Supabase) see it —
   * this is how a teacher targets a specific student or a subset of a class.
   */
  targetStudentIds?: string[];
}

export interface ClassGroup {
  id: string;
  name: string;
  /** Course this class belongs to (Course union value). */
  course: string;
  students: ClassStudent[];
  assignments: QuizAssignment[];
  createdAt: number;
}

const KEY = "mathsapp-classes";

export function uid(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
  }
}

/** Read every stored class (all courses). SSR-safe (returns [] on the server). */
export function readClasses(): ClassGroup[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as ClassGroup[]) : [];
  } catch {
    return [];
  }
}

export function writeClasses(list: ClassGroup[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* quota / disabled storage — ignore in the prototype */
  }
}

/**
 * Parse a free-text blob of names into a clean, de-duplicated list. Accepts
 * names separated by new lines, commas, or semicolons — so a teacher can type
 * one per line OR paste a comma-separated register.
 */
export function parseNames(blob: string): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of blob.split(/[\n,;]+/)) {
    const name = raw.trim().replace(/\s+/g, " ");
    if (!name) continue;
    const key = name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(name);
  }
  return out;
}

/**
 * Parse a roster blob into typed members. Each LINE is one student, written as
 * "Name", "Name, email@school", or "Name <email@school>". The email (if any) is
 * extracted; the rest of the line is the name. De-duplicated by name+email.
 */
export function parseRoster(blob: string): RosterMember[] {
  const seen = new Set<string>();
  const out: RosterMember[] = [];
  for (const raw of blob.split(/\n/)) {
    const line = raw.trim();
    if (!line) continue;
    const m = line.match(/[\w.+-]+@[\w.-]+\.\w+/);
    const email = m ? m[0].toLowerCase() : undefined;
    let name = (email ? line.replace(m![0], "") : line).replace(/[<>,;]/g, " ").replace(/\s+/g, " ").trim();
    if (!name && email) name = email.split("@")[0];
    if (!name) continue;
    const key = `${name.toLowerCase()}|${email ?? ""}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ name, ...(email ? { email } : {}) });
  }
  return out;
}

/** A quiz assignment as seen by a student, with the class it came from. */
export interface StudentAssignment {
  id: string;
  title: string;
  total: number;
  className: string;
  course: string;
  assignedAt: number;
  /** The question ids that make up this quiz (so the student can take it). */
  questionIds: string[];
}

/**
 * Find a student's assignments in the LOCAL store by matching their name
 * (case-insensitive) against class rosters. Used as the fallback when Supabase
 * isn't configured. NOTE: name-matching is approximate — the real link
 * (class_members.student_id → a user account) is a follow-up once student
 * accounts live in Supabase.
 */
export function localAssignmentsForName(name: string): StudentAssignment[] {
  const target = name.trim().toLowerCase();
  if (!target) return [];
  const out: StudentAssignment[] = [];
  for (const c of readClasses()) {
    const me = c.students.find((s) => s.name.trim().toLowerCase() === target);
    if (!me) continue;
    for (const a of c.assignments) {
      // Whole-class assignment (no targets) → everyone in the roster sees it.
      // Targeted assignment → only listed members see it.
      const targeted = a.targetStudentIds && a.targetStudentIds.length > 0;
      if (targeted && !a.targetStudentIds!.includes(me.id)) continue;
      out.push({
        id: a.id,
        title: a.title,
        total: a.total,
        className: c.name,
        course: c.course,
        assignedAt: a.assignedAt,
        questionIds: a.questionIds,
      });
    }
  }
  return out.sort((x, y) => y.assignedAt - x.assignedAt);
}
