import { describe, it, expect, vi } from "vitest";
import { checkWorking } from "./workingCheck";
import type { Question } from "@/lib/types";

// Mock the SymPy subprocess so tests are hermetic: a wrong final answer resolves
// deterministically as not-equivalent without spawning Python. Correct/equivalent
// cases resolve on the fast mathjs path and never reach this.
vi.mock("./sympyGrading", () => ({
  gradeWithSympy: async () => ({
    equivalent: false,
    method: "sympy",
    normalizedStudent: "",
    normalizedCanonical: "",
    detail: "sympy mock",
  }),
}));

const linear: Question = {
  id: "lin-1",
  topicRef: "alg",
  topicTitle: "Linear equations",
  difficulty: "Foundation",
  questionText: "Solve \\(2x + 1 = 7\\).",
  marks: 2,
  examStyle: false,
  yearCreated: 2026,
  tags: [],
  workedSolution: {
    steps: [
      { stepNumber: 1, description: "Subtract 1 from both sides", workingLatex: "2x = 6", explanation: "" },
      { stepNumber: 2, description: "Divide both sides by 2", workingLatex: "x = 3", explanation: "" },
    ],
    finalAnswer: "\\(x = 3\\)",
    canonicalAnswer: "3",
  },
};

describe("checkWorking", () => {
  it("marks correct working: final answer correct + both model steps matched", async () => {
    const res = await checkWorking("2x = 6\nx = 3", linear);
    expect(res.finalAnswer.equivalent).toBe(true);
    expect(res.finalAnswer.needsManualGrade).toBe(false);
    expect(res.working.totalSteps).toBe(2);
    expect(res.working.matchedSteps).toBe(2);
    expect(res.working.missing).toHaveLength(0);
  });

  it("marks a wrong final answer as not equivalent and reports missing steps", async () => {
    const res = await checkWorking("2x = 6\nx = 5", linear);
    expect(res.finalAnswer.equivalent).toBe(false);
    expect(res.working.matchedSteps).toBe(1); // "2x = 6" shown, "x = 3" not
    expect(res.working.missing.map((m) => m.stepNumber)).toContain(2);
  });

  it("accepts an equivalent-but-different-form final answer (0.75 == 3/4)", async () => {
    const q: Question = {
      ...linear,
      workedSolution: { steps: [], finalAnswer: "\\(\\tfrac34\\)", canonicalAnswer: "3/4" },
    };
    const res = await checkWorking("0.75", q);
    expect(res.finalAnswer.equivalent).toBe(true);
    expect(res.working.totalSteps).toBe(0);
  });

  it("is lenient when the final answer is not on the last line", async () => {
    // Last line is a check, not the answer; the answer "x = 3" is earlier.
    const res = await checkWorking("x = 3\ncheck: 2(3) + 1 = 7", linear);
    expect(res.finalAnswer.equivalent).toBe(true);
  });
});
