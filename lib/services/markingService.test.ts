import { describe, it, expect, vi } from "vitest";
import { mark, type MarkingStore, type InsertMarkingResultRow } from "./markingService";
import { GraderError, type MarkGrader } from "@/lib/ai/grader/types";
import { FIXTURE_SCHEME, VALID_BREAKDOWN, ECF_BREAKDOWN } from "@/lib/ai/grader/__fixtures__/markScheme";
import type { SubmissionStatus, MarkBreakdown } from "@/lib/types";

function makeStore(loaded: { status: SubmissionStatus; questionId: string | null; confirmedLatex: string | null } | null) {
  const statuses: string[] = [];
  const reasons: (string | null | undefined)[] = [];
  let lastRow: InsertMarkingResultRow | null = null;
  const store: MarkingStore = {
    loadForMarking: vi.fn(async () => loaded),
    setStatus: vi.fn(async (_id, status, reason) => {
      statuses.push(status);
      reasons.push(reason);
    }),
    insertMarkingResult: vi.fn(async (row: InsertMarkingResultRow) => {
      lastRow = row;
      return {
        id: "mr-1",
        submissionId: row.submissionId,
        markSchemeId: row.markSchemeId,
        totalMarksAvailable: row.totalMarksAvailable,
        totalMarksAwarded: row.totalMarksAwarded,
        finalAnswerCorrect: row.finalAnswerCorrect,
        markBreakdown: row.markBreakdown,
        advisory: true, // store always persists advisory=true
        markerModel: row.markerModel,
        createdAt: "2026-06-06T00:00:00.000Z",
      };
    }),
  };
  return { store, statuses, reasons, row: () => lastRow };
}

const grader = (breakdown: MarkBreakdown | (() => Promise<never>)): MarkGrader => ({
  model: "claude-opus-4-8",
  grade: vi.fn(typeof breakdown === "function" ? breakdown : async () => breakdown),
});

const deps = (extra: Record<string, unknown>) => ({
  loadMarkScheme: async () => FIXTURE_SCHEME,
  getQuestionText: async () => "Solve x^2 - 5x + 6 = 0.",
  ...extra,
});

const CONFIRMED = { status: "CONFIRMED" as const, questionId: "test-q1", confirmedLatex: "(x-2)(x-3)=0" };

describe("mark", () => {
  it("writes a verbatim, advisory MarkingResult and transitions MARKING → MARKED", async () => {
    const { store, statuses, row } = makeStore(CONFIRMED);
    const res = await mark("sub-1", deps({ store, grader: grader(VALID_BREAKDOWN) }));

    expect(res.ok).toBe(true);
    if (!res.ok) return;
    expect(statuses).toEqual(["MARKING", "MARKED"]);
    expect(res.result.advisory).toBe(true);
    expect(res.result.markerModel).toBe("claude-opus-4-8");

    const r = row()!;
    expect(r.markSchemeId).toBe("ms-test-q1");
    expect(r.totalMarksAvailable).toBe(3); // authoritative Σ scheme.maxMarks
    expect(r.finalAnswerCorrect).toBe(false);
    expect(r.markBreakdown).toBe(VALID_BREAKDOWN); // stored verbatim
  });

  it("surfaces low-confidence allocations as needing human review", async () => {
    const { store } = makeStore(CONFIRMED);
    const res = await mark("sub-1", deps({ store, grader: grader(VALID_BREAKDOWN) }));
    expect(res.ok).toBe(true);
    if (!res.ok) return;
    // B1 has confidence 0.4 < 0.6 default threshold.
    expect(res.marksNeedingReview.map((m) => m.markId)).toContain("B1");
  });

  it("represents an ECF scenario: method earned despite a wrong answer, A mark via follow-through", async () => {
    const { store, row } = makeStore(CONFIRMED);
    const res = await mark("sub-1", deps({ store, grader: grader(ECF_BREAKDOWN) }));
    expect(res.ok).toBe(true);
    const marks = row()!.markBreakdown.marks;
    expect(marks.find((m) => m.markId === "M1")?.awarded).toBe(true); // method earned
    const a1 = marks.find((m) => m.markId === "A1");
    expect(a1?.awarded).toBe(true);
    expect(a1?.ecfApplied).toBe(true); // earned via error-carried-forward
    expect(row()!.finalAnswerCorrect).toBe(false);
  });

  it("on a grader failure sets FAILED (no secret in reason) and does not throw", async () => {
    const { store, statuses, reasons } = makeStore(CONFIRMED);
    const failing = grader(async () => {
      throw new GraderError("schema", "Marker response did not match the required schema.");
    });
    const res = await mark("sub-1", deps({ store, grader: failing }));
    expect(res.ok).toBe(false);
    if (res.ok) return;
    expect(statuses).toEqual(["MARKING", "FAILED"]);
    expect(store.insertMarkingResult).not.toHaveBeenCalled();
    const reason = reasons[reasons.length - 1] ?? "";
    expect(reason).toBe("marking:schema");
    expect(reason).not.toMatch(/x-api-key|ANTHROPIC|sk-/i);
  });

  it("409-conflicts (no transition) when the submission is not CONFIRMED", async () => {
    const { store, statuses } = makeStore({ status: "UPLOADED", questionId: "test-q1", confirmedLatex: null });
    const res = await mark("sub-1", deps({ store, grader: grader(VALID_BREAKDOWN) }));
    expect(res).toMatchObject({ ok: false });
    if (res.ok) return;
    expect(res.error.code).toBe("conflict");
    expect(statuses).toEqual([]); // never moved to MARKING
  });

  it("returns no_mark_scheme (no transition) when none exists", async () => {
    const { store, statuses } = makeStore(CONFIRMED);
    const res = await mark("sub-1", { store, grader: grader(VALID_BREAKDOWN), loadMarkScheme: async () => null, getQuestionText: async () => "q" });
    expect(res).toMatchObject({ ok: false });
    if (res.ok) return;
    expect(res.error.code).toBe("no_mark_scheme");
    expect(statuses).toEqual([]);
  });

  it("returns not_found for a missing submission", async () => {
    const { store } = makeStore(null);
    const res = await mark("missing", deps({ store, grader: grader(VALID_BREAKDOWN) }));
    expect(res).toMatchObject({ ok: false });
    if (res.ok) return;
    expect(res.error.code).toBe("not_found");
  });
});
