import { describe, it, expect } from "vitest";
import { getSubmissionState, type SubmissionStateStore } from "./submissionState";
import { VALID_BREAKDOWN } from "@/lib/ai/grader/__fixtures__/markScheme";
import type { SessionClaims } from "@/lib/auth/session";

const claims: Pick<SessionClaims, "sub" | "role" | "schoolId" | "email"> = {
  sub: "stu-1",
  role: "student",
  schoolId: undefined,
  email: "s@example.com",
};

const markedStore: SubmissionStateStore = {
  async load() {
    return {
      status: "MARKED",
      recognition: {
        provider: "mathpix",
        overallConfidence: 0.95,
        lowConfidence: false,
        rawLatex: "(x-2)(x-3)=0",
        renderedMarkdown: null,
      },
      confirmation: { confirmedLatex: "(x-2)(x-3)=0", editedByStudent: false, confirmedAt: "2026-06-06T00:00:00Z" },
      marking: {
        markSchemeId: "ms-test-q1",
        totalMarksAvailable: 3,
        totalMarksAwarded: 1,
        finalAnswerCorrect: false,
        markBreakdown: VALID_BREAKDOWN,
        advisory: true,
        markerModel: "claude-opus-4-8",
      },
    };
  },
};

describe("getSubmissionState", () => {
  it("separates the assertable final answer from the advisory breakdown and flags needs-review", async () => {
    const state = await getSubmissionState("sub-1", claims, { store: markedStore });
    expect(state).not.toBeNull();
    if (!state) return;

    expect(state.status).toBe("MARKED");
    expect(state.recognition?.provider).toBe("mathpix");
    expect(state.confirmation?.editedByStudent).toBe(false);

    expect(state.marking).not.toBeNull();
    expect(state.marking!.advisory).toBe(true);
    // Assertable claim is isolated:
    expect(state.marking!.assertable.finalAnswerCorrect).toBe(false);
    // Advisory breakdown carries confidences + per-mark needsReview:
    const b1 = state.marking!.advisoryBreakdown.marks.find((m) => m.markId === "B1");
    expect(b1?.confidence).toBe(0.4);
    expect(b1?.needsReview).toBe(true); // 0.4 < 0.6 threshold
    const m1 = state.marking!.advisoryBreakdown.marks.find((m) => m.markId === "M1");
    expect(m1?.needsReview).toBe(false); // 0.9 ≥ 0.6
    expect(state.marking!.marksNeedingReview).toContain("B1");
    expect(state.marking!.marksNeedingReview).not.toContain("M1");
  });

  it("returns null when the store finds no (owned) row — route maps to 404", async () => {
    const state = await getSubmissionState("sub-1", claims, { store: { async load() { return null; } } });
    expect(state).toBeNull();
  });
});
