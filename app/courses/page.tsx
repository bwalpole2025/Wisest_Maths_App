"use client";

import { useAuth } from "@/hooks/useAuth";
import { useCourse } from "@/hooks/useCourse";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import type { Course } from "@/lib/types";

const courses: {
  id: Course;
  title: string;
  description: string;
  icon: string;
  available: boolean;
}[] = [
  {
    id: "a-level-maths",
    title: "A-Level Maths",
    description:
      "OCR B (MEI) — Pure Maths, Statistics, and Mechanics.",
    icon: "\u222B",
    available: true,
  },
  {
    id: "a-level-further-maths",
    title: "A-Level Further Maths",
    description:
      "OCR B (MEI) — Further Pure, Further Mechanics, and more.",
    icon: "\u2211",
    available: true,
  },
];

export default function CourseSelectionPage() {
  const { user, loading: authLoading } = useAuth();
  const { course, selectCourse, loading: courseLoading } = useCourse();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !user) router.replace("/login");
  }, [user, authLoading, router]);

  useEffect(() => {
    if (!courseLoading && course) {
      const dest = user?.role === "teacher" ? "/teacher/dashboard" : "/student/dashboard";
      router.replace(dest);
    }
  }, [course, courseLoading, router, user]);

  if (authLoading || courseLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-accent border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-foreground">
          Choose Your Course
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Select a course to get started. You can switch courses at any time.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {courses.map((c) => (
            <button
              key={c.id}
              onClick={() => c.available && selectCourse(c.id)}
              disabled={!c.available}
              className={`group rounded-xl border-2 p-8 text-left shadow-sm transition-all ${
                c.available
                  ? "border-border bg-white hover:border-accent hover:-translate-y-1 hover:shadow-md cursor-pointer"
                  : "border-border bg-muted/50 opacity-60 cursor-not-allowed"
              }`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-2xl font-bold text-white shadow-md">
                {c.icon}
              </div>
              <h2 className="mt-4 text-lg font-bold text-foreground">
                {c.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {c.description}
              </p>
              {!c.available && (
                <span className="mt-3 inline-block rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                  Coming Soon
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
