"use client";

/**
 * "View as" preview mode.
 *
 * - A TEACHER can preview the student view (teacher ⇄ student).
 * - A WISEST user (admin/staff) can preview the student OR teacher view, or sit
 *   in their native console (3-way).
 *
 * This is a PURELY CLIENT-SIDE display flag — it never changes the signed
 * session cookie or the server-trusted role, so it cannot grant privilege. All
 * real authorisation still happens server-side against the actual session (a
 * Wisest user has no school, so previewed data pages are simply empty).
 *
 * Persisted in sessionStorage so it survives client navigation, cleared on exit
 * or when the tab closes.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const STORAGE_KEY = "wisest-view-as";

export type ViewAs = "student" | "teacher" | null;

interface ViewAsState {
  /** Which view is being previewed (null = the user's native view). */
  viewAs: ViewAs;
  setViewAs: (v: ViewAs) => void;
  /** Back-compat: the teacher is previewing the student view. */
  previewing: boolean;
  enter: () => void;
  exit: () => void;
}

const ViewAsContext = createContext<ViewAsState>({
  viewAs: null,
  setViewAs: () => {},
  previewing: false,
  enter: () => {},
  exit: () => {},
});

export function useViewAs(): ViewAsState {
  return useContext(ViewAsContext);
}

export function ViewAsProvider({ children }: { children: React.ReactNode }) {
  const [viewAs, setViewAsState] = useState<ViewAs>(null);

  useEffect(() => {
    try {
      const v = sessionStorage.getItem(STORAGE_KEY);
      if (v === "student" || v === "teacher") setViewAsState(v);
    } catch {
      /* sessionStorage unavailable — default off */
    }
  }, []);

  const setViewAs = useCallback((v: ViewAs) => {
    try {
      if (v) sessionStorage.setItem(STORAGE_KEY, v);
      else sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setViewAsState(v);
  }, []);

  const enter = useCallback(() => setViewAs("student"), [setViewAs]);
  const exit = useCallback(() => setViewAs(null), [setViewAs]);

  return (
    <ViewAsContext.Provider value={{ viewAs, setViewAs, previewing: viewAs === "student", enter, exit }}>
      {children}
    </ViewAsContext.Provider>
  );
}
