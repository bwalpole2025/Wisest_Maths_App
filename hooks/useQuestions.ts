"use client";

import { useEffect, useState } from "react";
import type { Question, Course } from "@/lib/types";

/**
 * Client hooks for fetching question data from /api/questions, so pages don't
 * import the ~18MB bank into their JS bundle. Each returns a `loaded` flag so
 * the UI can show a lightweight loading state while the data streams in.
 */

async function fetchQuestions(query: string, signal: AbortSignal): Promise<Question[]> {
  const res = await fetch(`/api/questions?${query}`, { signal });
  if (!res.ok) throw new Error(`questions fetch failed: ${res.status}`);
  const data = await res.json();
  return (data.questions as Question[]) ?? [];
}

/** All questions for a topicRef. Empty + not-loaded until `topicRef` is set. */
export function useTopicQuestions(topicRef: string | null): { questions: Question[]; loaded: boolean } {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!topicRef) {
      setQuestions([]);
      setLoaded(false);
      return;
    }
    const ctrl = new AbortController();
    setLoaded(false);
    fetchQuestions(`topicRef=${encodeURIComponent(topicRef)}`, ctrl.signal)
      .then((qs) => {
        setQuestions(qs);
        setLoaded(true);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setQuestions([]);
          setLoaded(true);
        }
      });
    return () => ctrl.abort();
  }, [topicRef]);

  return { questions, loaded };
}

/** All questions for a course. Empty + not-loaded until `course` is set. */
export function useCourseQuestions(course: Course | null): { questions: Question[]; loaded: boolean } {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!course) {
      setQuestions([]);
      setLoaded(false);
      return;
    }
    const ctrl = new AbortController();
    setLoaded(false);
    fetchQuestions(`course=${encodeURIComponent(course)}`, ctrl.signal)
      .then((qs) => {
        setQuestions(qs);
        setLoaded(true);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setQuestions([]);
          setLoaded(true);
        }
      });
    return () => ctrl.abort();
  }, [course]);

  return { questions, loaded };
}

/** A single question by id. */
export function useQuestionById(id: string | null): { question: Question | null; loaded: boolean } {
  const [question, setQuestion] = useState<Question | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!id) {
      setQuestion(null);
      setLoaded(true);
      return;
    }
    const ctrl = new AbortController();
    setLoaded(false);
    fetch(`/api/questions?id=${encodeURIComponent(id)}`, { signal: ctrl.signal })
      .then(async (res) => {
        if (res.status === 404) return null;
        if (!res.ok) throw new Error(`question fetch failed: ${res.status}`);
        const data = await res.json();
        return (data.question as Question) ?? null;
      })
      .then((q) => {
        setQuestion(q);
        setLoaded(true);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setQuestion(null);
          setLoaded(true);
        }
      });
    return () => ctrl.abort();
  }, [id]);

  return { question, loaded };
}
