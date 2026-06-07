/**
 * Human-in-the-loop confirmation gate.
 *
 * The student reviews the OCR'd LaTeX (Recognition.rawLatex) and approves it —
 * possibly after editing — producing a TranscriptionConfirmation and moving the
 * submission AWAITING_CONFIRMATION → CONFIRMED.
 *
 * ⚠️ MARKING CONTRACT: the marker (Phase 5/6) must read ONLY
 * `transcription_confirmations.confirmed_latex` — the student-approved working.
 * `recognitions.raw_latex` is the unverified OCR output and must NEVER be passed
 * to the marker. This gate is the single point where raw OCR becomes approved
 * input; downstream code should take `confirmedLatex` and never see `rawLatex`.
 *
 * Access uses `withTenant` (RLS): a non-owner sees zero rows, so getView returns
 * null and the caller responds 404 — ownership is enforced by the database.
 */

import { withTenant } from "@/lib/db/tenant";
import type { SessionClaims } from "@/lib/auth/session";
import type { SubmissionStatus } from "@/lib/types";
import { canTransition } from "./submissionStateMachine";

type Claims = Pick<SessionClaims, "sub" | "role" | "schoolId" | "email">;

interface RecognitionView {
  rawLatex: string;
  renderedMarkdown: string | null;
  overallConfidence: number | null;
  lowConfidence: boolean;
}

interface ConfirmationView {
  status: SubmissionStatus;
  recognition: RecognitionView | null;
  confirmedLatex: string | null;
}

/** DB seam — default impl uses the RLS tenant connection; mocked in tests. */
export interface ConfirmationStore {
  getView(id: string, claims: Claims): Promise<ConfirmationView | null>;
  confirm(
    id: string,
    claims: Claims,
    args: { confirmedLatex: string; editedByStudent: boolean },
  ): Promise<void>;
}

export interface RecognitionForConfirmation {
  submissionLatex: string;
  renderedMarkdownOrLatexForDisplay: string;
  overallConfidence: number | null;
  lowConfidence: boolean;
  status: SubmissionStatus;
}

export type GetConfirmationResult =
  | { ok: true; body: RecognitionForConfirmation }
  | { ok: false; code: "not_found" }
  | { ok: false; code: "conflict"; status: SubmissionStatus };

export type ConfirmResult =
  | { ok: true; status: "CONFIRMED" }
  | { ok: false; code: "not_found" }
  | { ok: false; code: "empty" }
  | { ok: false; code: "conflict"; status: SubmissionStatus };

export interface ConfirmationDeps {
  store?: ConfirmationStore;
}

const MAX_CONFIRMED_LATEX = 5000;

export async function getRecognitionForConfirmation(
  id: string,
  claims: Claims,
  deps: ConfirmationDeps = {},
): Promise<GetConfirmationResult> {
  const store = deps.store ?? defaultStore;
  const view = await store.getView(id, claims);
  if (!view) return { ok: false, code: "not_found" };

  if (view.status === "AWAITING_CONFIRMATION") {
    if (!view.recognition) return { ok: false, code: "conflict", status: view.status };
    const r = view.recognition;
    return {
      ok: true,
      body: {
        submissionLatex: r.rawLatex,
        renderedMarkdownOrLatexForDisplay: r.renderedMarkdown ?? r.rawLatex,
        overallConfidence: r.overallConfidence,
        lowConfidence: r.lowConfidence,
        status: view.status,
      },
    };
  }

  if (view.status === "CONFIRMED") {
    // Return the confirmed (student-approved) version.
    const latex = view.confirmedLatex ?? view.recognition?.rawLatex ?? "";
    return {
      ok: true,
      body: {
        submissionLatex: latex,
        renderedMarkdownOrLatexForDisplay: latex,
        overallConfidence: view.recognition?.overallConfidence ?? null,
        lowConfidence: view.recognition?.lowConfidence ?? false,
        status: view.status,
      },
    };
  }

  // UPLOADED / RECOGNISING / MARKING / MARKED / FAILED — not reviewable.
  return { ok: false, code: "conflict", status: view.status };
}

export async function confirmTranscription(
  id: string,
  claims: Claims,
  confirmedLatexRaw: string,
  deps: ConfirmationDeps = {},
): Promise<ConfirmResult> {
  const store = deps.store ?? defaultStore;
  const confirmedLatex = confirmedLatexRaw.trim().slice(0, MAX_CONFIRMED_LATEX);
  if (!confirmedLatex) return { ok: false, code: "empty" };

  const view = await store.getView(id, claims);
  if (!view) return { ok: false, code: "not_found" };

  // Idempotent: a second confirm on an already-CONFIRMED submission is a no-op.
  if (view.status === "CONFIRMED") return { ok: true, status: "CONFIRMED" };

  // State machine: only AWAITING_CONFIRMATION may transition to CONFIRMED.
  if (!canTransition(view.status, "CONFIRMED")) {
    return { ok: false, code: "conflict", status: view.status };
  }
  if (!view.recognition) return { ok: false, code: "conflict", status: view.status };

  const editedByStudent = confirmedLatex !== view.recognition.rawLatex;
  await store.confirm(id, claims, { confirmedLatex, editedByStudent });
  return { ok: true, status: "CONFIRMED" };
}

/** Default store backed by the RLS-scoped tenant connection. */
const defaultStore: ConfirmationStore = {
  async getView(id, claims) {
    return withTenant(claims, async (c) => {
      const { rows } = await c.query(
        `SELECT s.status,
                r.raw_latex, r.rendered_markdown, r.overall_confidence, r.low_confidence,
                tc.confirmed_latex
           FROM public.submissions s
           LEFT JOIN public.recognitions r  ON r.submission_id = s.id
           LEFT JOIN public.transcription_confirmations tc ON tc.submission_id = s.id
          WHERE s.id = $1`,
        [id],
      );
      if (rows.length === 0) return null; // not found OR not owned (RLS)
      const row = rows[0];
      return {
        status: row.status as SubmissionStatus,
        recognition:
          row.raw_latex == null
            ? null
            : {
                rawLatex: row.raw_latex as string,
                renderedMarkdown: row.rendered_markdown as string | null,
                overallConfidence: row.overall_confidence as number | null,
                lowConfidence: Boolean(row.low_confidence),
              },
        confirmedLatex: (row.confirmed_latex as string | null) ?? null,
      };
    });
  },

  async confirm(id, claims, { confirmedLatex, editedByStudent }) {
    // One transaction (withTenant wraps BEGIN/COMMIT): persist the approved
    // working, then flip the status. ON CONFLICT keeps it idempotent at the DB.
    await withTenant(claims, async (c) => {
      await c.query(
        `INSERT INTO public.transcription_confirmations (submission_id, confirmed_latex, edited_by_student)
         VALUES ($1, $2, $3)
         ON CONFLICT (submission_id) DO NOTHING`,
        [id, confirmedLatex, editedByStudent],
      );
      await c.query(`UPDATE public.submissions SET status = 'CONFIRMED' WHERE id = $1`, [id]);
    });
  },
};
