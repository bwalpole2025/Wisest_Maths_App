"use client";

import { useEffect, useState } from "react";
import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Client hook for fetching a subtopic's Guided Learning lesson from /api/lessons.
 * Returns a `loaded` flag (UI shows a loading state) and `notFound` (no lesson
 * authored yet for this ref). Mirrors useTopicQuestions in hooks/useQuestions.ts.
 */
export function useLesson(topicRef: string | null): {
  lesson: Lesson | null;
  loaded: boolean;
  notFound: boolean;
} {
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!topicRef) {
      setLesson(null);
      setLoaded(false);
      setNotFound(false);
      return;
    }
    const ctrl = new AbortController();
    setLoaded(false);
    setNotFound(false);
    fetch(`/api/lessons?topicRef=${encodeURIComponent(topicRef)}`, { signal: ctrl.signal })
      .then(async (res) => {
        if (res.status === 404) {
          setNotFound(true);
          return null;
        }
        if (!res.ok) throw new Error(`lesson fetch failed: ${res.status}`);
        const data = await res.json();
        return (data.lesson as Lesson) ?? null;
      })
      .then((l) => {
        setLesson(l);
        setLoaded(true);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setLesson(null);
          setLoaded(true);
        }
      });
    return () => ctrl.abort();
  }, [topicRef]);

  return { lesson, loaded, notFound };
}
