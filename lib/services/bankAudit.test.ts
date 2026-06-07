import { describe, it, expect } from "vitest";
import { auditQuestion, auditBank } from "./bankAudit";
import type { Question, AnswerType } from "@/lib/types";

function q(
  answerType: AnswerType,
  finalAnswer: string,
  extra: { canonicalAnswer?: string; answerMeta?: Question["answerMeta"] } = {},
): Question {
  return {
    id: "t",
    topicRef: "topic",
    topicTitle: "t",
    difficulty: "Standard",
    questionText: "",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    answerType,
    answerMeta: extra.answerMeta,
    workedSolution: { steps: [], finalAnswer, canonicalAnswer: extra.canonicalAnswer },
  };
}

describe("bankAudit — self-classification", () => {
  it("a well-formed expression question self-classifies (ok)", () => {
    expect(auditQuestion(q("expression", "x^2")).ok).toBe(true);
  });

  it("flags an exactValue question whose canonical is a bare decimal", () => {
    const r = auditQuestion(q("exactValue", "1.41", { canonicalAnswer: "1.41", answerMeta: { exactForm: true } }));
    expect(r.ok).toBe(false);
    expect(r.problem).toMatchObject({ answerType: "exactValue", reason: "notExactForm" });
  });

  it("flags a numeric question whose canonical violates requiredDp", () => {
    const r = auditQuestion(q("numeric", "0.5", { canonicalAnswer: "0.5", answerMeta: { requiredDp: 2 } }));
    expect(r.ok).toBe(false);
    expect(r.problem).toMatchObject({ answerType: "numeric", reason: "precision" });
  });

  it("treats a prose expression answer (no canonical) as expected-non-gradable, not a problem", () => {
    const r = auditQuestion(q("expression", "Isosceles; see the working."));
    expect(r.ok).toBe(false);
    expect(r.expectedNonGradable).toBe(true);
    expect(r.problem).toBeUndefined();
  });

  it("auditBank aggregates ok / expected-non-gradable / problems", () => {
    const report = auditBank([
      q("expression", "x^2"), // ok
      q("expression", "Some worded proof answer."), // expected-non-gradable
      q("exactValue", "1.41", { canonicalAnswer: "1.41", answerMeta: { exactForm: true } }), // problem
    ]);
    expect(report.total).toBe(3);
    expect(report.ok).toBe(1);
    expect(report.expectedNonGradable).toBe(1);
    expect(report.problems).toHaveLength(1);
    expect(report.problems[0].answerType).toBe("exactValue");
  });
});
