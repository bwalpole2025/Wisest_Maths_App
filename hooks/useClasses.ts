"use client";

import { useCallback, useEffect, useState } from "react";
import {
  readClasses,
  writeClasses,
  uid,
  type ClassGroup,
  type QuizAssignment,
  type RosterMember,
} from "@/lib/services/classStore";

/**
 * Classes state with a dual backend:
 *   - "supabase": persisted server-side via /api/classes (shared, durable).
 *   - "local":    localStorage fallback when Supabase isn't configured, so the
 *                 feature keeps working in dev/mock mode.
 * The backend is detected once (the GET returns 503 when Supabase is off) and
 * every mutator routes accordingly. All mutators are async.
 */
export type ClassBackend = "loading" | "supabase" | "local";

export function useClasses(course?: string | null) {
  const [classes, setClasses] = useState<ClassGroup[]>([]);
  const [backend, setBackend] = useState<ClassBackend>("loading");
  const loaded = backend !== "loading";

  const loadLocal = useCallback(() => {
    const all = readClasses();
    setClasses(course ? all.filter((c) => c.course === course) : all);
  }, [course]);

  const refresh = useCallback(async () => {
    if (!course) {
      setClasses([]);
      return;
    }
    try {
      const res = await fetch(`/api/classes?course=${encodeURIComponent(course)}`);
      if (res.status === 503) {
        setBackend("local");
        loadLocal();
        return;
      }
      if (!res.ok) throw new Error();
      const data = await res.json();
      setBackend("supabase");
      setClasses(data.classes ?? []);
    } catch {
      // Network/server error → don't lose the feature; use the local store.
      setBackend("local");
      loadLocal();
    }
  }, [course, loadLocal]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const persistLocal = useCallback(
    (next: ClassGroup[]) => {
      writeClasses(next);
      loadLocal();
    },
    [loadLocal],
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const post = useCallback(async (body: Record<string, any>) => {
    const res = await fetch("/api/classes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const msg = (await res.json().catch(() => ({}))).error ?? "Request failed.";
      throw new Error(msg);
    }
    return res.json();
  }, []);

  const createClass = useCallback(
    async (name: string, members: RosterMember[]): Promise<ClassGroup> => {
      if (backend === "supabase") {
        const { class: c } = await post({ action: "create", name, course, members });
        await refresh();
        return c as ClassGroup;
      }
      const group: ClassGroup = {
        id: uid(),
        name: name.trim() || "Untitled class",
        course: course ?? "",
        students: members.map((m) => ({ id: uid(), name: m.name, ...(m.email ? { email: m.email } : {}) })),
        assignments: [],
        createdAt: Date.now(),
      };
      persistLocal([group, ...readClasses()]);
      return group;
    },
    [backend, course, post, refresh, persistLocal],
  );

  const deleteClass = useCallback(
    async (id: string) => {
      if (backend === "supabase") {
        await post({ action: "delete", id });
        await refresh();
        return;
      }
      persistLocal(readClasses().filter((c) => c.id !== id));
    },
    [backend, post, refresh, persistLocal],
  );

  const addStudents = useCallback(
    async (id: string, members: RosterMember[]) => {
      if (backend === "supabase") {
        await post({ action: "addMembers", id, members });
        await refresh();
        return;
      }
      persistLocal(
        readClasses().map((c) =>
          c.id === id
            ? {
                ...c,
                students: [
                  ...c.students,
                  ...members.map((m) => ({ id: uid(), name: m.name, ...(m.email ? { email: m.email } : {}) })),
                ],
              }
            : c,
        ),
      );
    },
    [backend, post, refresh, persistLocal],
  );

  const removeStudent = useCallback(
    async (id: string, studentId: string) => {
      if (backend === "supabase") {
        await post({ action: "removeMember", id, memberId: studentId });
        await refresh();
        return;
      }
      persistLocal(
        readClasses().map((c) =>
          c.id === id ? { ...c, students: c.students.filter((s) => s.id !== studentId) } : c,
        ),
      );
    },
    [backend, post, refresh, persistLocal],
  );

  const assignQuiz = useCallback(
    async (id: string, quiz: Omit<QuizAssignment, "id" | "assignedAt">) => {
      if (backend === "supabase") {
        await post({ action: "assign", id, title: quiz.title, questionIds: quiz.questionIds });
        await refresh();
        return;
      }
      persistLocal(
        readClasses().map((c) =>
          c.id === id
            ? { ...c, assignments: [{ ...quiz, id: uid(), assignedAt: Date.now() }, ...c.assignments] }
            : c,
        ),
      );
    },
    [backend, post, refresh, persistLocal],
  );

  return {
    classes,
    loaded,
    backend,
    createClass,
    deleteClass,
    addStudents,
    removeStudent,
    assignQuiz,
  };
}
