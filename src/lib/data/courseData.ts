import { topics } from "@/lib/data/topics";
import { questions } from "@/lib/data/questions";
import type { Course } from "@/lib/types";

export function getTopicsForCourse(course: Course) {
  return topics.filter((t) => t.course === course);
}

export function getQuestionsForCourse(course: Course) {
  const courseTopicRefs = new Set(
    topics.filter((t) => t.course === course).map((t) => t.ref),
  );
  return questions.filter((q) => courseTopicRefs.has(q.topicRef));
}

export function getTopicsByCategoryForCourse(course: Course, category: string) {
  return topics.filter((t) => t.course === course && t.category === category);
}

export function getCategoriesForCourse(course: Course) {
  const courseTopics = topics.filter((t) => t.course === course);
  return Array.from(new Set(courseTopics.map((t) => t.category)));
}
