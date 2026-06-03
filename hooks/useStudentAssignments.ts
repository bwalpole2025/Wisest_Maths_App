"use client";

import { useEffect, useState } from "react";
import { localAssignmentsForName, type StudentAssignment } from "@/lib/services/classStore";

/**
 * The logged-in student's quiz assignments. Uses the Supabase-backed endpoint
 * when configured, otherwise falls back to the local class store (matched by
 * `name`). `name` comes from the auth'd user — needed for the local fallback,
 * since the server resolves it from the session.
 */
export function useStudentAssignments(name?: string | null) {
  const [assignments, setAssignments] = useState<StudentAssignment[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const fallback = () => {
      if (cancelled) return;
      setAssignments(name ? localAssignmentsForName(name) : []);
      setLoaded(true);
    };
    (async () => {
      try {
        const res = await fetch("/api/student/assignments");
        if (res.status === 503) return fallback();
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (!cancelled) {
          setAssignments(data.assignments ?? []);
          setLoaded(true);
        }
      } catch {
        fallback();
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [name]);

  return { assignments, loaded };
}
