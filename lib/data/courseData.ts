// Client-safe: this module holds only TOPIC METADATA helpers, so it can be
// imported from client components without dragging in the question bank.
// Question data lives in lib/data/courseQuestions.ts (server-only) and is
// reached from the client via /api/questions; per-topic counts come from
// lib/data/questionCounts.ts (POOL_SIZES).
import { topics } from "@/lib/data/topics";
import type { Course } from "@/lib/types";

export function getTopicsForCourse(course: Course) {
  return topics.filter((t) => t.course === course);
}

export function getTopicsByCategoryForCourse(course: Course, category: string) {
  return topics.filter((t) => t.course === course && t.category === category);
}

export function getCategoriesForCourse(course: Course) {
  const courseTopics = topics.filter((t) => t.course === course);
  return Array.from(new Set(courseTopics.map((t) => t.category)));
}
