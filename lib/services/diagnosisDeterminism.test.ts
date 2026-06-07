import { describe, it, expect } from "vitest";
import { classify } from "./diagnosis";
import type { Question, AnswerType } from "@/lib/types";

function q(answerType: AnswerType, canonicalAnswer: string, extra: Partial<Question> = {}): Question {
  return {
    id: "t",
    topicRef: "t",
    topicTitle: "t",
    difficulty: "Standard",
    questionText: "",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    answerType,
    workedSolution: { steps: [], finalAnswer: canonicalAnswer, canonicalAnswer },
    ...extra,
  };
}

const verdict = (input: string, question: Question, seed?: number) => {
  const r = classify(input, question, seed === undefined ? {} : { seed });
  return JSON.stringify({ correct: r.correct, reason: r.reason });
};

describe("classify — reproducibility battery (seeded sampling is deterministic)", () => {
  const battery: Array<[string, Question]> = [
    ["sin(x)^2 + cos(x)^2", q("expression", "1")],
    ["(x+1)^2", q("expression", "x^2 + 2x + 1")],
    ["1/2", q("numeric", "0.5")],
    ["x^3", q("expression", "x^2")], // wrong — must stay wrong every run
    ["sqrt(2)", q("exactValue", "sqrt(2)", { answerMeta: { exactForm: true } })],
    ["{2,-2}", q("set", "{-2,2}")],
  ];

  it("classifies a fixed battery identically across 100 runs", () => {
    for (const [input, question] of battery) {
      const first = verdict(input, question);
      for (let i = 0; i < 100; i++) {
        expect(verdict(input, question)).toBe(first);
      }
    }
  });
});

describe("classify — false-positive guard (distinct functions not falsely equivalent)", () => {
  // Residual-risk note: numeric sampling at N=25 over a wide, non-integer domain
  // makes a coincidental all-25 agreement of two DISTINCT functions astronomically
  // unlikely — distinct analytic functions coincide only on a measure-zero set, so
  // 25 random reals landing only on intersection points has probability ≈ 0 — and
  // the symbolic simplify fallback covers sample-starved cases. Residual risk ≈ 0
  // for the bank's function classes. Pairs below coincide at a few points only.
  const pairs: Array<[string, string]> = [
    ["x^2", "x"], // agree at 0, 1
    ["x^3", "x"], // agree at 0, ±1
    ["2^x", "x^2"], // agree at 2, 4
    ["sin(x)", "x"], // agree at 0
  ];

  it("does not declare near-collision pairs equivalent (default seed)", () => {
    for (const [s, c] of pairs) {
      expect(classify(s, q("expression", c)).correct).toBe(false);
    }
  });

  it("stays robust across several seeds", () => {
    for (const seed of [1, 7, 42, 0x1234, 0x9e3779b9]) {
      for (const [s, c] of pairs) {
        expect(classify(s, q("expression", c), { seed }).correct).toBe(false);
      }
    }
  });
});
