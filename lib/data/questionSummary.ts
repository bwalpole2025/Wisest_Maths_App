/**
 * Pure helpers for slim question payloads — no import of the (large) question
 * bank, so they're cheap to unit-test and safe to import anywhere.
 */

import type { Question, QuestionSummary } from "@/lib/types";

/** Drop the heavy `workedSolution` to produce a list/browse payload. */
export function toSummary(q: Question): QuestionSummary {
  const summary = { ...q } as Partial<Question>;
  delete summary.workedSolution;
  return summary as QuestionSummary;
}

/** Slice `items` to a page. `limit` undefined → all from `offset`. Returns the full `total`. */
export function paginate<T>(items: T[], limit?: number, offset = 0): { items: T[]; total: number } {
  const total = items.length;
  const start = Math.max(0, offset);
  const end = limit == null ? total : start + Math.max(0, limit);
  return { items: items.slice(start, end), total };
}
