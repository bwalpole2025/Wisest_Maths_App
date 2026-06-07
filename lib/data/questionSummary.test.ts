import { describe, it, expect } from "vitest";
import { toSummary, paginate } from "./questionSummary";
import type { Question } from "@/lib/types";

const q: Question = {
  id: "a1-001",
  topicRef: "a1",
  topicTitle: "Expanding brackets",
  difficulty: "Standard",
  questionText: "Expand \\((x+1)(x+2)\\).",
  marks: 2,
  examStyle: false,
  yearCreated: 2026,
  tags: [],
  answerType: "expression",
  workedSolution: {
    steps: [{ stepNumber: 1, description: "", workingLatex: "x^2+3x+2", explanation: "" }],
    finalAnswer: "x^2+3x+2",
    canonicalAnswer: "x^2+3x+2",
  },
};

describe("toSummary", () => {
  it("drops workedSolution but keeps the list fields", () => {
    const s = toSummary(q);
    expect("workedSolution" in s).toBe(false);
    expect(s.id).toBe("a1-001");
    expect(s.questionText).toBe("Expand \\((x+1)(x+2)\\).");
    expect(s.difficulty).toBe("Standard");
    expect(s.marks).toBe(2);
    expect(q.workedSolution).toBeDefined(); // original untouched
  });
});

describe("paginate", () => {
  const items = [1, 2, 3, 4, 5];
  it("returns the requested slice with the full total", () => {
    expect(paginate(items, 2, 0)).toEqual({ items: [1, 2], total: 5 });
    expect(paginate(items, 2, 4)).toEqual({ items: [5], total: 5 });
  });
  it("returns everything from offset when limit is undefined", () => {
    expect(paginate(items, undefined, 2)).toEqual({ items: [3, 4, 5], total: 5 });
  });
  it("handles out-of-range offset", () => {
    expect(paginate(items, 2, 99)).toEqual({ items: [], total: 5 });
  });
});
