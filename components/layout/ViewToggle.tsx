"use client";

/**
 * Teacher ⇄ Student view toggle.
 *
 * A segmented control, shown ONLY to accounts whose real session role is
 * teacher, that flips between the teacher view and a live preview of the
 * student view. It is bidirectional and visible on every page, so a teacher can
 * switch back and forth from anywhere.
 *
 * This is a purely client-side display switch (see hooks/useViewAs): it never
 * changes the signed session cookie or the server-trusted role, so it cannot
 * grant privilege — a teacher only ever drops into the lesser student view, and
 * all real authorisation still happens server-side against the teacher session.
 */

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useViewAs } from "@/hooks/useViewAs";
import { cn } from "@/lib/utils";

export function ViewToggle({ className }: { className?: string }) {
  const { user } = useAuth();
  const { previewing, enter, exit } = useViewAs();
  const router = useRouter();

  // Only real teachers can switch views.
  if (user?.role !== "teacher") return null;

  const studentView = previewing;

  const goTeacher = () => {
    if (!studentView) return;
    exit();
    router.push("/teacher/dashboard");
  };

  const goStudent = () => {
    if (studentView) return;
    enter();
    router.push("/student/dashboard");
  };

  return (
    <div
      role="group"
      aria-label="Switch between teacher and student view"
      className={cn(
        "inline-flex items-center rounded-lg border border-black/10 bg-black/[0.03] p-0.5 text-xs font-semibold",
        className,
      )}
    >
      <button
        type="button"
        onClick={goTeacher}
        aria-pressed={!studentView}
        className={cn(
          "rounded-md px-3 py-1.5 transition-colors",
          !studentView
            ? "bg-white text-foreground shadow-sm"
            : "text-foreground/55 hover:text-foreground",
        )}
      >
        Teacher
      </button>
      <button
        type="button"
        onClick={goStudent}
        aria-pressed={studentView}
        className={cn(
          "rounded-md px-3 py-1.5 transition-colors",
          studentView
            ? "bg-white text-foreground shadow-sm"
            : "text-foreground/55 hover:text-foreground",
        )}
      >
        Student
      </button>
    </div>
  );
}
