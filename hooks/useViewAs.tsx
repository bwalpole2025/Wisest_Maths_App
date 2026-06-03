"use client";

/**
 * "View as student" preview mode (teacher-only).
 *
 * Lets a teacher preview exactly what a student sees after logging in, without
 * a second account. This is a PURELY CLIENT-SIDE display flag — it never
 * changes the signed session cookie or the server-trusted role, so it cannot
 * grant any privilege (a teacher dropping into the less-privileged student view
 * is the only direction it moves). All real authorisation still happens
 * server-side against the teacher's actual session.
 *
 * The flag is persisted in sessionStorage so it survives client navigation
 * between student pages, and is cleared on exit or when the tab closes.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const STORAGE_KEY = "wisest-view-as-student";

interface ViewAsState {
  /** Raw flag: the teacher has opted into student preview. */
  previewing: boolean;
  enter: () => void;
  exit: () => void;
}

const ViewAsContext = createContext<ViewAsState>({
  previewing: false,
  enter: () => {},
  exit: () => {},
});

export function useViewAs(): ViewAsState {
  return useContext(ViewAsContext);
}

export function ViewAsProvider({ children }: { children: React.ReactNode }) {
  const [previewing, setPreviewing] = useState(false);

  // Rehydrate the flag on mount (client only).
  useEffect(() => {
    try {
      setPreviewing(sessionStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      /* sessionStorage unavailable — default off */
    }
  }, []);

  const enter = useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setPreviewing(true);
  }, []);

  const exit = useCallback(() => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setPreviewing(false);
  }, []);

  return (
    <ViewAsContext.Provider value={{ previewing, enter, exit }}>
      {children}
    </ViewAsContext.Provider>
  );
}
