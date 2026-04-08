"use client";

import { useState, useEffect, useCallback, createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import type { Course } from "@/lib/types";

const COURSE_KEY = "mathsapp-course";

interface CourseState {
  course: Course | null;
  loading: boolean;
  selectCourse: (course: Course) => void;
  clearCourse: () => void;
}

const CourseContext = createContext<CourseState>({
  course: null,
  loading: true,
  selectCourse: () => {},
  clearCourse: () => {},
});

export function useCourse(): CourseState {
  return useContext(CourseContext);
}

export { CourseContext };

export function useCourseProvider(): CourseState {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COURSE_KEY);
      if (stored) setCourse(stored as Course);
    } catch {
      // ignore
    }
    setLoading(false);
  }, []);

  const selectCourse = useCallback(
    (c: Course) => {
      localStorage.setItem(COURSE_KEY, c);
      setCourse(c);
      router.push("/student/dashboard");
    },
    [router],
  );

  const clearCourse = useCallback(() => {
    localStorage.removeItem(COURSE_KEY);
    setCourse(null);
    router.push("/courses");
  }, [router]);

  return { course, loading, selectCourse, clearCourse };
}
