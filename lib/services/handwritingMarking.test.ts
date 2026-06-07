import { describe, it, expect, vi } from "vitest";
import { markHandwriting } from "./handwritingMarking";
import { parseRecognition } from "@/lib/ai/marking/validateOutput";
import { isAllowedImageType, sanitiseRecognisedAnswer } from "@/lib/ai/marking/sanitise";
import type { Question } from "@/lib/types";
import type { Recognition } from "@/lib/ai/marking/validateOutput";

// Mock the SymPy subprocess so tests are hermetic (no python, no spawn).
// The "correct" cases below resolve on the fast mathjs path and never call this;
// the "wrong" case does, so we pin it to a deterministic not-equivalent verdict.
vi.mock("./sympyGrading", () => ({
  gradeWithSympy: async () => ({
    equivalent: false,
    method: "sympy",
    normalizedStudent: "",
    normalizedCanonical: "",
    detail: "sympy mock",
  }),
}));

const question: Question = {
  id: "test-1",
  topicRef: "test",
  topicTitle: "Test",
  difficulty: "Foundation",
  questionText: "Work out \\(\\dfrac{1}{2} + \\dfrac{1}{4}\\).",
  marks: 1,
  examStyle: false,
  yearCreated: 2026,
  tags: [],
  answerType: "expression",
  workedSolution: { steps: [], finalAnswer: "3/4", canonicalAnswer: "3/4" },
};

const stub =
  (r: Partial<Recognition>) =>
  async (): Promise<Recognition> => ({
    recognisedAnswer: "",
    legible: true,
    confidence: 0.9,
    notes: "",
    ...r,
  });

describe("markHandwriting", () => {
  it("marks an exact recognised answer as equivalent (no string matching)", async () => {
    const res = await markHandwriting(
      { imageBase64: "x", mimeType: "image/png", question },
      { recognise: stub({ recognisedAnswer: "3/4" }) },
    );
    expect(res.recognised).toBe("3/4");
    expect(res.equivalent).toBe(true);
    expect(res.needsManualGrade).toBe(false);
  });

  it("accepts an equivalent but differently-written answer (0.75 == 3/4)", async () => {
    const res = await markHandwriting(
      { imageBase64: "x", mimeType: "image/png", question },
      { recognise: stub({ recognisedAnswer: "0.75" }) },
    );
    expect(res.equivalent).toBe(true);
  });

  it("marks a wrong answer as not equivalent", async () => {
    const res = await markHandwriting(
      { imageBase64: "x", mimeType: "image/png", question },
      { recognise: stub({ recognisedAnswer: "1/2" }) },
    );
    expect(res.equivalent).toBe(false);
    expect(res.needsManualGrade).toBe(false);
  });

  it("flags an illegible photo for manual grading without marking", async () => {
    const res = await markHandwriting(
      { imageBase64: "x", mimeType: "image/png", question },
      { recognise: stub({ recognisedAnswer: "", legible: false }) },
    );
    expect(res.recognised).toBeNull();
    expect(res.legible).toBe(false);
    expect(res.needsManualGrade).toBe(true);
    expect(res.method).toBe("recognition");
  });
});

describe("parseRecognition", () => {
  it("parses clean JSON", () => {
    const r = parseRecognition('{"recognisedAnswer":"x^2","legible":true,"confidence":0.8}');
    expect(r.recognisedAnswer).toBe("x^2");
    expect(r.legible).toBe(true);
  });

  it("strips markdown code fences", () => {
    const r = parseRecognition('```json\n{"recognisedAnswer":"7/4","legible":true,"confidence":1}\n```');
    expect(r.recognisedAnswer).toBe("7/4");
    expect(r.legible).toBe(true);
  });

  it("treats an empty answer as not legible", () => {
    const r = parseRecognition('{"recognisedAnswer":"   ","legible":true,"confidence":0.5}');
    expect(r.legible).toBe(false);
  });

  it("treats malformed output as not legible", () => {
    expect(parseRecognition("not json at all").legible).toBe(false);
    expect(parseRecognition("").legible).toBe(false);
  });
});

describe("upload sanitisation helpers", () => {
  it("only allows image MIME types", () => {
    expect(isAllowedImageType("image/png")).toBe(true);
    expect(isAllowedImageType("image/jpeg")).toBe(true);
    expect(isAllowedImageType("application/pdf")).toBe(false);
    expect(isAllowedImageType("text/html")).toBe(false);
    expect(isAllowedImageType(undefined)).toBe(false);
  });

  it("collapses whitespace and caps length of the recognised answer", () => {
    expect(sanitiseRecognisedAnswer("  3 / 4 \n ")).toBe("3 / 4");
    expect(sanitiseRecognisedAnswer("a".repeat(600)).length).toBe(512);
  });
});
