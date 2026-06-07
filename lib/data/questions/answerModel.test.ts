import { describe, it, expect } from "vitest";
import { questions } from "@/lib/data/questions";
import { ANSWER_TYPES } from "@/lib/types";

/**
 * Bank-wide invariants for the typed-answer model. This is the CI assertion that
 * every question (including any NEW one) declares a valid `answerType`, plus the
 * exactValue ⇒ answerMeta.exactForm rule. Iterates the whole aggregated bank.
 */
const VALID = new Set<string>(ANSWER_TYPES);

describe("question bank — answer model invariants", () => {
  it("every question declares a valid answerType", () => {
    const bad = questions.filter((q) => !VALID.has(q.answerType)).map((q) => q.id);
    expect(bad).toEqual([]);
  });

  it("every exactValue question sets answerMeta.exactForm = true", () => {
    const offenders = questions
      .filter((q) => q.answerType === "exactValue")
      .filter((q) => q.answerMeta?.exactForm !== true)
      .map((q) => q.id);
    expect(offenders).toEqual([]);
  });
});
