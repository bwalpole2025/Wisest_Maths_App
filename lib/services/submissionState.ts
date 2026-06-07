/**
 * Aggregate submission state for GET /api/submissions/:id.
 *
 * Returns the whole pipeline state for the owner, with the ASSERTABLE
 * `finalAnswerCorrect` cleanly separated from the ADVISORY M/A/B breakdown
 * (per-mark confidence + needs-review flags). Owner-scoping is enforced by RLS
 * via `withTenant` (a non-owner sees no row → null → the route returns 404).
 *
 * `needsReview` is derived here from the verbatim stored breakdown +
 * env.MARK_CONFIDENCE_THRESHOLD — the breakdown itself is never mutated.
 */

import { withTenant } from "@/lib/db/tenant";
import { env } from "@/lib/env";
import type { SessionClaims } from "@/lib/auth/session";
import type { MarkAllocation, MarkBreakdown, SubmissionStatus } from "@/lib/types";

type Claims = Pick<SessionClaims, "sub" | "role" | "schoolId" | "email">;

interface StateRow {
  status: SubmissionStatus;
  recognition: {
    provider: string;
    overallConfidence: number | null;
    lowConfidence: boolean;
    rawLatex: string;
    renderedMarkdown: string | null;
  } | null;
  confirmation: { confirmedLatex: string; editedByStudent: boolean; confirmedAt: string } | null;
  marking: {
    markSchemeId: string;
    totalMarksAvailable: number;
    totalMarksAwarded: number;
    finalAnswerCorrect: boolean | null;
    markBreakdown: MarkBreakdown;
    advisory: boolean;
    markerModel: string;
  } | null;
}

export interface SubmissionStateStore {
  load(id: string, claims: Claims): Promise<StateRow | null>;
}

export interface SubmissionStateResponse {
  id: string;
  status: SubmissionStatus;
  recognition: StateRow["recognition"];
  confirmation: StateRow["confirmation"];
  marking: {
    advisory: true;
    markerModel: string;
    markSchemeId: string;
    /** The only assertable claim. */
    assertable: { finalAnswerCorrect: boolean | null };
    /** The whole M/A/B allocation is advisory. */
    advisoryBreakdown: {
      totalMarksAvailable: number;
      totalMarksAwarded: number;
      marks: (MarkAllocation & { needsReview: boolean })[];
      uncertainNotes: string[];
    };
    /** markIds whose confidence is below the review threshold. */
    marksNeedingReview: string[];
  } | null;
}

export interface SubmissionStateDeps {
  store?: SubmissionStateStore;
}

export async function getSubmissionState(
  id: string,
  claims: Claims,
  deps: SubmissionStateDeps = {},
): Promise<SubmissionStateResponse | null> {
  const store = deps.store ?? defaultStore;
  const row = await store.load(id, claims);
  if (!row) return null;

  let marking: SubmissionStateResponse["marking"] = null;
  if (row.marking) {
    const threshold = env.MARK_CONFIDENCE_THRESHOLD;
    const breakdown = row.marking.markBreakdown;
    const marks = breakdown.marks.map((m) => ({ ...m, needsReview: m.confidence < threshold }));
    marking = {
      advisory: true,
      markerModel: row.marking.markerModel,
      markSchemeId: row.marking.markSchemeId,
      assertable: { finalAnswerCorrect: row.marking.finalAnswerCorrect },
      advisoryBreakdown: {
        totalMarksAvailable: row.marking.totalMarksAvailable,
        totalMarksAwarded: row.marking.totalMarksAwarded,
        marks,
        uncertainNotes: breakdown.uncertainNotes,
      },
      marksNeedingReview: marks.filter((m) => m.needsReview).map((m) => m.markId),
    };
  }

  return {
    id,
    status: row.status,
    recognition: row.recognition,
    confirmation: row.confirmation,
    marking,
  };
}

/** Default store: one owner-scoped (RLS) query joining the four tables. */
const defaultStore: SubmissionStateStore = {
  async load(id, claims) {
    return withTenant(claims, async (c) => {
      const { rows } = await c.query(
        `SELECT s.status,
                r.provider, r.raw_latex, r.rendered_markdown, r.overall_confidence, r.low_confidence,
                tc.confirmed_latex, tc.edited_by_student, tc.confirmed_at,
                mr.mark_scheme_id, mr.total_marks_available, mr.total_marks_awarded,
                mr.final_answer_correct, mr.mark_breakdown, mr.advisory, mr.marker_model
           FROM public.submissions s
           LEFT JOIN public.recognitions r              ON r.submission_id = s.id
           LEFT JOIN public.transcription_confirmations tc ON tc.submission_id = s.id
           LEFT JOIN public.marking_results mr          ON mr.submission_id = s.id
          WHERE s.id = $1`,
        [id],
      );
      if (rows.length === 0) return null; // not found OR not owned (RLS)
      const x = rows[0];
      return {
        status: x.status as SubmissionStatus,
        recognition:
          x.raw_latex == null
            ? null
            : {
                provider: x.provider as string,
                overallConfidence: x.overall_confidence as number | null,
                lowConfidence: Boolean(x.low_confidence),
                rawLatex: x.raw_latex as string,
                renderedMarkdown: x.rendered_markdown as string | null,
              },
        confirmation:
          x.confirmed_latex == null
            ? null
            : {
                confirmedLatex: x.confirmed_latex as string,
                editedByStudent: Boolean(x.edited_by_student),
                confirmedAt: x.confirmed_at as string,
              },
        marking:
          x.mark_scheme_id == null
            ? null
            : {
                markSchemeId: x.mark_scheme_id as string,
                totalMarksAvailable: x.total_marks_available as number,
                totalMarksAwarded: x.total_marks_awarded as number,
                finalAnswerCorrect: x.final_answer_correct as boolean | null,
                markBreakdown: x.mark_breakdown as MarkBreakdown,
                advisory: Boolean(x.advisory),
                markerModel: x.marker_model as string,
              },
      };
    });
  },
};
