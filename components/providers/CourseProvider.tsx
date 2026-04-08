"use client";

import { CourseContext, useCourseProvider } from "@/hooks/useCourse";

export function CourseProvider({ children }: { children: React.ReactNode }) {
  const courseState = useCourseProvider();
  return (
    <CourseContext.Provider value={courseState}>{children}</CourseContext.Provider>
  );
}
