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
import { useViewAs, type ViewAs } from "@/hooks/useViewAs";
import { cn } from "@/lib/utils";

export function ViewToggle({ className }: { className?: string }) {
  const { user } = useAuth();
  const { viewAs, setViewAs } = useViewAs();
  const router = useRouter();

  const isWisest = user?.role === "wisest_admin" || user?.role === "wisest_staff";
  const isTeacher = user?.role === "teacher";
  if (!isWisest && !isTeacher) return null;

  // Teacher: native = teacher, preview = student. Wisest: native = console.
  const segments: { key: ViewAs; label: string; href: string }[] = isWisest
    ? [
        { key: null, label: "Console", href: "/admin/schools" },
        { key: "teacher", label: "Teacher", href: "/teacher/dashboard" },
        { key: "student", label: "Student", href: "/student/dashboard" },
      ]
    : [
        { key: null, label: "Teacher", href: "/teacher/dashboard" },
        { key: "student", label: "Student", href: "/student/dashboard" },
      ];

  const select = (key: ViewAs, href: string) => {
    if (key === viewAs) return;
    setViewAs(key);
    router.push(href);
  };

  return (
    <div
      role="group"
      aria-label="Switch view"
      className={cn(
        "inline-flex items-center rounded-lg border border-black/10 bg-black/[0.03] p-0.5 text-xs font-semibold",
        className,
      )}
    >
      {segments.map((s) => {
        const active = s.key === viewAs;
        return (
          <button
            key={s.label}
            type="button"
            onClick={() => select(s.key, s.href)}
            aria-pressed={active}
            className={cn(
              "rounded-md px-3 py-1.5 transition-colors",
              active ? "bg-white text-foreground shadow-sm" : "text-foreground/55 hover:text-foreground",
            )}
          >
            {s.label}
          </button>
        );
      })}
    </div>
  );
}
