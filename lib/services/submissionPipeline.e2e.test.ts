import { describe, it, expect } from "vitest";
import { recognise, type RecognitionStore } from "./recognitionService";
import { confirmTranscription, type ConfirmationStore } from "./confirmationService";
import { onSubmissionConfirmed } from "./submissionPipeline";
import { getSubmissionState, type SubmissionStateStore } from "./submissionState";
import type { MarkingStore } from "./markingService";
import type { RecognitionProvider } from "@/lib/ai/recognition/types";
import type { MarkGrader } from "@/lib/ai/grader/types";
import type { StorageService } from "./storage";
import { FIXTURE_SCHEME, VALID_BREAKDOWN } from "@/lib/ai/grader/__fixtures__/markScheme";
import type { SubmissionStatus } from "@/lib/types";

/**
 * End-to-end: upload(seed) → recognise → confirm → mark → GET state, all external
 * calls mocked, backed by a single in-memory record shared across every store seam.
 */
describe("submission pipeline E2E", () => {
  it("drives a submission to MARKED and exposes the advisory breakdown via state", async () => {
    const LATEX = "(x-2)(x-3)=0";
    const db = {
      studentId: "stu-1",
      questionId: "test-q1",
      status: "UPLOADED" as SubmissionStatus,
      imageStorageKey: "submissions/abc.png",
      imageMimeType: "image/png",
      recognition: null as null | {
        provider: string; rawLatex: string; renderedMarkdown: string | null;
        overallConfidence: number | null; lowConfidence: boolean; lineData: unknown;
      },
      confirmation: null as null | { confirmedLatex: string; editedByStudent: boolean },
      marking: null as null | {
        markSchemeId: string; totalMarksAvailable: number; totalMarksAwarded: number;
        finalAnswerCorrect: boolean | null; markBreakdown: typeof VALID_BREAKDOWN;
        advisory: boolean; markerModel: string;
      },
    };
    const claims = { sub: "stu-1", role: "student" as const, schoolId: undefined, email: "s@x.com" };

    const storage: StorageService = {
      get: async () => Buffer.from("image-bytes"),
      put: async () => {},
      delete: async () => {},
    };
    const provider: RecognitionProvider = {
      name: "mathpix",
      recogniseImage: async () => ({ latex: LATEX, renderedMarkdown: null, confidence: 0.95, lineData: [] }),
    };
    const grader: MarkGrader = { model: "claude-opus-4-8", grade: async () => VALID_BREAKDOWN };

    const recognitionStore: RecognitionStore = {
      loadSubmission: async () => ({
        id: "sub-1", studentId: db.studentId, imageStorageKey: db.imageStorageKey,
        imageMimeType: db.imageMimeType, status: db.status,
      }),
      setStatus: async (_id, status) => { db.status = status; },
      insertRecognition: async (row) => {
        db.recognition = {
          provider: row.provider, rawLatex: row.rawLatex, renderedMarkdown: row.renderedMarkdown,
          overallConfidence: row.overallConfidence, lowConfidence: row.lowConfidence, lineData: row.lineData,
        };
        return { id: "rec-1", submissionId: row.submissionId, ...db.recognition, createdAt: "t" };
      },
    };

    const confirmationStore: ConfirmationStore = {
      getView: async () => ({
        status: db.status,
        recognition: db.recognition
          ? { rawLatex: db.recognition.rawLatex, renderedMarkdown: db.recognition.renderedMarkdown,
              overallConfidence: db.recognition.overallConfidence, lowConfidence: db.recognition.lowConfidence }
          : null,
        confirmedLatex: db.confirmation?.confirmedLatex ?? null,
      }),
      confirm: async (_id, _claims, { confirmedLatex, editedByStudent }) => {
        db.confirmation = { confirmedLatex, editedByStudent };
        db.status = "CONFIRMED";
      },
    };

    const markingStore: MarkingStore = {
      loadForMarking: async () => ({
        status: db.status, questionId: db.questionId, confirmedLatex: db.confirmation?.confirmedLatex ?? null,
      }),
      setStatus: async (_id, status) => { db.status = status; },
      insertMarkingResult: async (row) => {
        db.marking = {
          markSchemeId: row.markSchemeId, totalMarksAvailable: row.totalMarksAvailable,
          totalMarksAwarded: row.totalMarksAwarded, finalAnswerCorrect: row.finalAnswerCorrect,
          markBreakdown: row.markBreakdown, advisory: true, markerModel: row.markerModel,
        };
        return { id: "mr-1", submissionId: row.submissionId, ...db.marking, createdAt: "t" };
      },
    };

    const stateStore: SubmissionStateStore = {
      load: async () => ({
        status: db.status,
        recognition: db.recognition
          ? { provider: db.recognition.provider, overallConfidence: db.recognition.overallConfidence,
              lowConfidence: db.recognition.lowConfidence, rawLatex: db.recognition.rawLatex,
              renderedMarkdown: db.recognition.renderedMarkdown }
          : null,
        confirmation: db.confirmation
          ? { confirmedLatex: db.confirmation.confirmedLatex, editedByStudent: db.confirmation.editedByStudent, confirmedAt: "t" }
          : null,
        marking: db.marking,
      }),
    };

    // 1. Recognise (post-upload trigger).
    const r = await recognise("sub-1", { provider, store: recognitionStore, storage });
    expect(r.ok).toBe(true);
    expect(db.status).toBe("AWAITING_CONFIRMATION");

    // 2. Student confirms.
    const c = await confirmTranscription("sub-1", claims, LATEX, { store: confirmationStore });
    expect(c).toMatchObject({ ok: true, status: "CONFIRMED" });
    expect(db.status).toBe("CONFIRMED");

    // 3. Marking (post-confirm trigger).
    const status = await onSubmissionConfirmed("sub-1", {
      store: markingStore, grader, loadMarkScheme: async () => FIXTURE_SCHEME, getQuestionText: async () => "Solve x^2-5x+6=0.",
    });
    expect(status).toBe("MARKED");
    expect(db.status).toBe("MARKED");

    // 4. GET full state.
    const state = await getSubmissionState("sub-1", claims, { store: stateStore });
    expect(state).not.toBeNull();
    if (!state) return;
    expect(state.status).toBe("MARKED");
    expect(state.recognition?.provider).toBe("mathpix");
    expect(state.confirmation?.confirmedLatex).toBe(LATEX);
    expect(state.marking?.advisory).toBe(true);
    expect(state.marking?.assertable.finalAnswerCorrect).toBe(false);
    expect(state.marking?.advisoryBreakdown.marks).toHaveLength(3);
    expect(state.marking?.marksNeedingReview).toContain("B1"); // 0.4 < 0.6
  });
});
