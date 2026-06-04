// Client-safe per-topic question counts, derived from the precomputed
// POOL_SIZES map (no question-bank import). Use this anywhere the UI only needs
// "how many questions does this topic have" — e.g. topic lists — instead of
// importing the bank to call questions.filter(...).length.
//
// Regenerate POOL_SIZES with `node scripts/gen-pool-sizes.js` after adding or
// re-banding questions.
import { POOL_SIZES } from "@/lib/data/poolSizes.generated";
import type { Course } from "@/lib/types";

/** Total questions banked for a single topicRef (sum across difficulties). */
export function getTopicQuestionCount(course: Course, topicRef: string): number {
  const byDiff = POOL_SIZES[course]?.[topicRef];
  if (!byDiff) return 0;
  return Object.values(byDiff).reduce((sum, n) => sum + n, 0);
}

/** Map of topicRef -> total questions, for every topic in the course. */
export function getCourseQuestionCounts(course: Course): Map<string, number> {
  const counts = new Map<string, number>();
  const byRef = POOL_SIZES[course];
  if (!byRef) return counts;
  for (const ref of Object.keys(byRef)) {
    counts.set(ref, getTopicQuestionCount(course, ref));
  }
  return counts;
}
