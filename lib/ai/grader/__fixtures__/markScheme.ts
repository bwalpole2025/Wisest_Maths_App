import type { MarkScheme, MarkBreakdown } from "@/lib/types";

/** Fixture scheme: solve a quadratic. M1 → A1 (dependent), plus an independent B1. */
export const FIXTURE_SCHEME: MarkScheme = {
  id: "ms-test-q1",
  questionId: "test-q1",
  marks: [
    { id: "M1", type: "M", description: "Correct method to solve the quadratic (factorise / formula).", maxMarks: 1 },
    { id: "A1", type: "A", description: "Both correct roots.", dependsOn: ["M1"], maxMarks: 1 },
    { id: "B1", type: "B", description: "States the axis of symmetry.", maxMarks: 1 },
  ],
};

/** A conforming breakdown: method earned, accuracy lost, low-confidence B mark. */
export const VALID_BREAKDOWN: MarkBreakdown = {
  finalAnswerCorrect: false,
  totalMarksAvailable: 3,
  totalMarksAwarded: 1,
  marks: [
    { markId: "M1", type: "M", awarded: true, ecfApplied: false, confidence: 0.9, justification: "Factorised correctly on line 1.", studentLineRef: "line 1" },
    { markId: "A1", type: "A", awarded: false, ecfApplied: false, confidence: 0.82, justification: "Roots are wrong on line 3.", studentLineRef: "line 3" },
    { markId: "B1", type: "B", awarded: true, ecfApplied: false, confidence: 0.4, justification: "Axis of symmetry stated, but hard to read.", studentLineRef: "line 4" },
  ],
  uncertainNotes: ["B1 working was difficult to read."],
};

/** ECF case: wrong early value, but correct subsequent method → A1 earned via follow-through. */
export const ECF_BREAKDOWN: MarkBreakdown = {
  finalAnswerCorrect: false,
  totalMarksAvailable: 3,
  totalMarksAwarded: 2,
  marks: [
    { markId: "M1", type: "M", awarded: true, ecfApplied: false, confidence: 0.88, justification: "Correct method despite an arithmetic slip earlier.", studentLineRef: "line 2" },
    { markId: "A1", type: "A", awarded: true, ecfApplied: true, confidence: 0.7, justification: "Correct method applied to the student's earlier (wrong) value — follow-through.", studentLineRef: "line 3" },
    { markId: "B1", type: "B", awarded: false, ecfApplied: false, confidence: 0.75, justification: "Axis of symmetry not stated.", studentLineRef: null },
  ],
  uncertainNotes: [],
};
