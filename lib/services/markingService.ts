/**
 * MarkingService — grade a CONFIRMED submission against its mark scheme and
 * persist a MarkingResult. The per-mark M/A/B allocation is ADVISORY
 * (advisory=true always); only final-answer correctness is assertable.
 *
 * Reads ONLY the student-approved `confirmedLatex` (never the raw OCR). Session-
 * less step → service-role DB store. Grader, store, mark-scheme loader, and
 * question lookup are injectable for tests. Operational failures never throw —
 * mark() resolves a typed result and records FAILED on a hard grader error.
 */

import { env } from "@/lib/env";
import { getServiceClient } from "@/lib/db/service";
import { geminiMarkGrader } from "@/lib/ai/grader/gemini";
import { GraderError, type MarkGrader } from "@/lib/ai/grader/types";
import { canTransition } from "./submissionStateMachine";
import type {
  MarkScheme,
  MarkBreakdown,
  MarkAllocation,
  MarkingResult,
  SubmissionStatus,
} from "@/lib/types";

export type MarkingErrorCode = "not_found" | "conflict" | "no_mark_scheme" | "grader";

export class MarkingError extends Error {
  constructor(
    public readonly code: MarkingErrorCode,
    message: string,
  ) {
    super(message);
    this.name = "MarkingError";
  }
}

interface LoadedForMarking {
  status: SubmissionStatus;
  questionId: string | null;
  confirmedLatex: string | null;
}

export interface InsertMarkingResultRow {
  submissionId: string;
  markSchemeId: string;
  totalMarksAvailable: number;
  totalMarksAwarded: number;
  finalAnswerCorrect: boolean | null;
  markBreakdown: MarkBreakdown;
  markerModel: string;
}

/** DB seam — default impl uses the service-role client; mocked in tests. */
export interface MarkingStore {
  loadForMarking(id: string): Promise<LoadedForMarking | null>;
  setStatus(id: string, status: SubmissionStatus, failureReason?: string | null): Promise<void>;
  insertMarkingResult(row: InsertMarkingResultRow): Promise<MarkingResult>;
}

export type MarkResult =
  | { ok: true; result: MarkingResult; marksNeedingReview: MarkAllocation[] }
  | { ok: false; error: MarkingError | GraderError; status?: SubmissionStatus };

export interface MarkDeps {
  store?: MarkingStore;
  grader?: MarkGrader;
  loadMarkScheme?: (questionId: string) => Promise<MarkScheme | null>;
  getQuestionText?: (questionId: string) => Promise<string>;
}

export async function mark(submissionId: string, deps: MarkDeps = {}): Promise<MarkResult> {
  const store = deps.store ?? defaultStore;
  const grader = deps.grader ?? geminiMarkGrader;
  const loadMarkScheme = deps.loadMarkScheme ?? defaultLoadMarkScheme;
  const getQuestionText = deps.getQuestionText ?? defaultGetQuestionText;

  const loaded = await store.loadForMarking(submissionId);
  if (!loaded) {
    return { ok: false, error: new MarkingError("not_found", `Submission ${submissionId} not found.`) };
  }
  // State machine: only CONFIRMED may transition to MARKING. Includes already-MARKED
  // (don't re-mark / re-charge the API) and any pre-confirm state.
  if (!canTransition(loaded.status, "MARKING")) {
    return {
      ok: false,
      error: new MarkingError("conflict", `Submission is not ready for marking (status: ${loaded.status}).`),
      status: loaded.status,
    };
  }
  if (!loaded.confirmedLatex) {
    return { ok: false, error: new MarkingError("conflict", "No confirmed working to mark."), status: loaded.status };
  }

  const scheme = await loadMarkScheme(loaded.questionId ?? "");
  if (!scheme) {
    return { ok: false, error: new MarkingError("no_mark_scheme", "No mark scheme for this question.") };
  }

  await store.setStatus(submissionId, "MARKING");

  let breakdown: MarkBreakdown;
  try {
    const questionText = await getQuestionText(loaded.questionId ?? "");
    breakdown = await grader.grade({ questionText, scheme, confirmedLatex: loaded.confirmedLatex });
  } catch (err) {
    const error = err instanceof GraderError ? err : new MarkingError("grader", "Marking failed.");
    // Store only the error CODE — never a message that could leak request detail.
    await store.setStatus(submissionId, "FAILED", `marking:${error instanceof GraderError ? error.code : "grader"}`);
    console.warn(`[marking] ${submissionId} FAILED (${error instanceof GraderError ? error.code : "grader"})`);
    return { ok: false, error };
  }

  // total_marks_available is authoritative from the scheme; awarded is advisory.
  const totalMarksAvailable = scheme.marks.reduce((sum, m) => sum + m.maxMarks, 0);

  const result = await store.insertMarkingResult({
    submissionId,
    markSchemeId: scheme.id,
    totalMarksAvailable,
    totalMarksAwarded: breakdown.totalMarksAwarded,
    finalAnswerCorrect: breakdown.finalAnswerCorrect,
    markBreakdown: breakdown, // stored verbatim
    markerModel: grader.model,
  });

  await store.setStatus(submissionId, "MARKED");

  // Any allocation below the confidence threshold is surfaced for human review —
  // never silently counted as final.
  const threshold = env.MARK_CONFIDENCE_THRESHOLD;
  const marksNeedingReview = breakdown.marks.filter((m) => m.confidence < threshold);

  console.info(
    `[marking] ${submissionId} MARKED awarded=${breakdown.totalMarksAwarded}/${totalMarksAvailable} review=${marksNeedingReview.length}`,
  );
  return { ok: true, result, marksNeedingReview };
}

/** No mark-scheme data exists in the bank yet; authoring schemes is future work. */
const defaultLoadMarkScheme = async (): Promise<MarkScheme | null> => null;

const defaultGetQuestionText = async (questionId: string): Promise<string> => {
  if (!questionId) return "";
  const { getQuestionById } = await import("@/lib/services/quizGenerator");
  return getQuestionById(questionId)?.questionText ?? "";
};

/** Default store backed by the Supabase service-role client (RLS-bypassing). */
const defaultStore: MarkingStore = {
  async loadForMarking(id) {
    const client = getServiceClient();
    const { data: sub, error } = await client
      .from("submissions")
      .select("status, question_id")
      .eq("id", id)
      .maybeSingle();
    if (error) throw new MarkingError("not_found", "Failed to load submission.");
    if (!sub) return null;

    let confirmedLatex: string | null = null;
    if (sub.status === "CONFIRMED") {
      const { data: tc } = await client
        .from("transcription_confirmations")
        .select("confirmed_latex")
        .eq("submission_id", id)
        .maybeSingle();
      confirmedLatex = (tc?.confirmed_latex as string | null) ?? null;
    }
    return { status: sub.status as SubmissionStatus, questionId: sub.question_id as string | null, confirmedLatex };
  },

  async setStatus(id, status, failureReason) {
    const patch: Record<string, unknown> = { status };
    if (failureReason !== undefined) patch.failure_reason = failureReason;
    const { error } = await getServiceClient().from("submissions").update(patch).eq("id", id);
    if (error) throw new MarkingError("conflict", "Failed to update submission status.");
  },

  async insertMarkingResult(row) {
    const { data, error } = await getServiceClient()
      .from("marking_results")
      .upsert(
        {
          submission_id: row.submissionId,
          mark_scheme_id: row.markSchemeId,
          total_marks_available: row.totalMarksAvailable,
          total_marks_awarded: row.totalMarksAwarded,
          final_answer_correct: row.finalAnswerCorrect,
          mark_breakdown: row.markBreakdown,
          advisory: true, // ALWAYS advisory
          marker_model: row.markerModel,
        },
        { onConflict: "submission_id" },
      )
      .select(
        "id, submission_id, mark_scheme_id, total_marks_available, total_marks_awarded, final_answer_correct, mark_breakdown, advisory, marker_model, created_at",
      )
      .single();
    if (error || !data) throw new MarkingError("grader", "Failed to persist marking result.");
    return {
      id: data.id,
      submissionId: data.submission_id,
      markSchemeId: data.mark_scheme_id,
      totalMarksAvailable: data.total_marks_available,
      totalMarksAwarded: data.total_marks_awarded,
      finalAnswerCorrect: data.final_answer_correct,
      markBreakdown: data.mark_breakdown as MarkBreakdown,
      advisory: data.advisory,
      markerModel: data.marker_model,
      createdAt: data.created_at,
    };
  },
};
