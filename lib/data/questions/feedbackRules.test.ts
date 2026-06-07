import { describe, it, expect } from "vitest";
import { questions } from "@/lib/data/questions";
import { findLeakyFeedbackRules } from "@/lib/services/feedbackValidation";

/**
 * CI gate: no authored per-question feedbackRules hint may contain its question's
 * answer. Passes today (no rules authored yet) and locks the invariant for every
 * rule merged in future.
 */
describe("question bank — feedbackRules hints never leak the answer", () => {
  it("no authored hint contains its question's answer", () => {
    const leaks = questions
      .filter((q) => q.feedbackRules?.length)
      .flatMap((q) => findLeakyFeedbackRules(q).map((l) => ({ id: q.id, ...l })));
    expect(leaks).toEqual([]);
  });
});
