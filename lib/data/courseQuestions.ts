// SERVER-ONLY. Importing the full question bank (~18MB of source) here keeps it
// out of every client bundle: it may only be reached from API routes and other
// server code. The `server-only` guard makes an accidental client import a hard
// build error rather than a silent +2MB bundle regression.
//
// Client code that needs question data should fetch it from /api/questions, and
// client code that only needs per-topic COUNTS should use POOL_SIZES via
// lib/data/questionCounts.ts (no bank import).
import "server-only";

import { questions } from "@/lib/data/questions";
import { topics } from "@/lib/data/topics";
import type { Course } from "@/lib/types";

export function getQuestionsForCourse(course: Course) {
  const courseTopicRefs = new Set(
    topics.filter((t) => t.course === course).map((t) => t.ref),
  );
  return questions.filter((q) => courseTopicRefs.has(q.topicRef));
}
