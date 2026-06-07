import { describe, it, expect, vi } from "vitest";
import { diagnose, diagnoseAttempt, applyDisclosure } from "./attemptDiagnosis";
import { InMemoryAttemptStore, type AttemptClaims } from "./attemptStore";
import type { Question, SolutionStep } from "@/lib/types";

const claims: AttemptClaims = { sub: "stu-1", role: "student", schoolId: "", email: "" };

function steps(n: number): SolutionStep[] {
  return Array.from({ length: n }, (_, i) => ({
    stepNumber: i + 1,
    description: `step ${i + 1}`,
    workingLatex: `x_${i + 1}`,
    explanation: "",
  }));
}

function q(canonicalAnswer: string, nSteps: number, extra: Partial<Question> = {}): Question {
  return {
    id: "q1",
    topicRef: "t",
    topicTitle: "t",
    difficulty: "Standard",
    questionText: "",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    answerType: "expression",
    workedSolution: { steps: steps(nSteps), finalAnswer: canonicalAnswer, canonicalAnswer },
    ...extra,
  };
}

describe("diagnoseAttempt — unified result, layers in fixed order", () => {
  it("correct answer → { correct:true, source:'exact' }", async () => {
    const r = await diagnoseAttempt(claims, "42", q("42", 3), { store: new InMemoryAttemptStore() });
    expect(r).toMatchObject({ correct: true, source: "exact" });
  });

  it("sign-error answer → generic-transform hint", async () => {
    const r = await diagnoseAttempt(claims, "-(x^2)", q("x^2", 3), { store: new InMemoryAttemptStore() });
    expect(r).toMatchObject({ correct: false, source: "generic-transform", misconception: "sign-error" });
    expect(r.hint).toBeTruthy();
  });

  it("known distractor → distractor hint (by equivalence, 1/2 ≡ 0.5)", async () => {
    const Q = q("1/3", 3, {
      feedbackRules: [{ matchAnswer: "1/2", misconception: "halved-it", hint: "Did you halve it?" }],
    });
    const r = await diagnoseAttempt(claims, "0.5", Q, { store: new InMemoryAttemptStore() });
    expect(r).toMatchObject({ correct: false, source: "distractor", misconception: "halved-it" });
  });

  it("novel wrong answer → disclosure step", async () => {
    const r = await diagnoseAttempt(claims, "5", q("42", 3), { store: new InMemoryAttemptStore() });
    expect(r).toMatchObject({ correct: false, source: "disclosure", fullSolutionUnlocked: false });
    expect(r.revealedStep?.index).toBe(0);
    expect(r.revealedStep?.content).toContain("step 1");
  });

  it("unparseable garbage → source:'unparseable' (no reveal)", async () => {
    const r = await diagnoseAttempt(claims, ")(", q("42", 3), { store: new InMemoryAttemptStore() });
    expect(r).toMatchObject({ correct: false, source: "unparseable" });
    expect(r.revealedStep).toBeUndefined();
  });

  it("reveals steps in order, never skipping to the answer; caps at the last", async () => {
    const Q = q("42", 3);
    const store = new InMemoryAttemptStore();
    const r1 = await diagnoseAttempt(claims, "5", Q, { store });
    expect(r1.revealedStep?.index).toBe(0);
    expect(r1.fullSolutionUnlocked).toBe(false);
    const r2 = await diagnoseAttempt(claims, "6", Q, { store });
    expect(r2.revealedStep?.index).toBe(1);
    expect(r2.fullSolutionUnlocked).toBe(false);
    const r3 = await diagnoseAttempt(claims, "7", Q, { store });
    expect(r3.revealedStep?.index).toBe(2);
    expect(r3.fullSolutionUnlocked).toBe(true); // full solution only after every prior step
    const r4 = await diagnoseAttempt(claims, "8", Q, { store });
    expect(r4.revealedStep).toBeUndefined(); // capped — nothing new to reveal
    expect(r4.fullSolutionUnlocked).toBe(true);
  });

  it("a correct answer resets the attempt", async () => {
    const Q = q("42", 3);
    const store = new InMemoryAttemptStore();
    await diagnoseAttempt(claims, "5", Q, { store }); // reveals index 0
    await diagnoseAttempt(claims, "42", Q, { store }); // correct → reset
    const after = await diagnoseAttempt(claims, "5", Q, { store });
    expect(after.revealedStep?.index).toBe(0); // back to the first step
  });

  it("a targeted hint does not consume a disclosure step", async () => {
    const Q = q("x^2", 3);
    const store = new InMemoryAttemptStore();
    const hit = await diagnoseAttempt(claims, "-(x^2)", Q, { store }); // negate → targeted
    expect(hit.source).toBe("generic-transform");
    expect(hit.revealedStep).toBeUndefined();
    const next = await diagnoseAttempt(claims, "x+5", Q, { store }); // no match → disclosure
    expect(next.source).toBe("disclosure");
    expect(next.revealedStep?.index).toBe(0); // reveals step[0], proving the hint consumed none
  });

  it("first match wins: Layer 1 (generic) precedes Layer 2 (distractor)", async () => {
    // The answer matches BOTH a generic transform (negate of x^2) and an authored
    // distractor rule; Layer 1 runs first, so the source is generic-transform.
    const Q = q("x^2", 3, {
      feedbackRules: [{ matchAnswer: "-(x^2)", misconception: "by-rule", hint: "rule hint" }],
    });
    const r = await diagnoseAttempt(claims, "-(x^2)", Q, { store: new InMemoryAttemptStore() });
    expect(r.source).toBe("generic-transform");
    expect(r.misconception).toBe("sign-error");
  });

  it("records the misconception tag for analytics on a targeted match", async () => {
    const recordMisconception = vi.fn();
    await diagnoseAttempt(claims, "-(x^2)", q("x^2", 3), {
      store: new InMemoryAttemptStore(),
      recordMisconception,
    });
    expect(recordMisconception).toHaveBeenCalledWith(
      expect.objectContaining({ topicRef: "t", misconception: "sign-error", source: "generic-transform" }),
    );
  });

  it("does NOT record analytics for a plain disclosure (no misconception)", async () => {
    const recordMisconception = vi.fn();
    await diagnoseAttempt(claims, "5", q("42", 3), {
      store: new InMemoryAttemptStore(),
      recordMisconception,
    });
    expect(recordMisconception).not.toHaveBeenCalled();
  });
});

describe("diagnose — makes no network calls (no LLM; sidecar disabled in tests)", () => {
  it("runs a wrong-answer diagnosis without calling fetch", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    try {
      const r = await diagnose("5", q("42", 3), { wrongAttempts: 0, revealedStepCount: 0 });
      expect(r.source).toBe("disclosure");
      expect(fetchSpy).not.toHaveBeenCalled(); // only the optional sidecar may fetch, and it is off
    } finally {
      fetchSpy.mockRestore();
    }
  });
});

describe("applyDisclosure — pure policy", () => {
  const P = { firstRevealAtWrongCount: 1, stepsPerReveal: 1 };
  it("reveals from the first wrong and caps at totalSteps", () => {
    expect(applyDisclosure(0, 1, 3, P)).toBe(1);
    expect(applyDisclosure(2, 5, 3, P)).toBe(3);
  });
  it("respects a higher first-reveal threshold", () => {
    const T2 = { firstRevealAtWrongCount: 2, stepsPerReveal: 1 };
    expect(applyDisclosure(0, 1, 3, T2)).toBe(0);
    expect(applyDisclosure(0, 2, 3, T2)).toBe(1);
  });
});
