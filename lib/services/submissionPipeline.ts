/**
 * Submission pipeline orchestration — the single place that connects the phases.
 *
 *   upload → onSubmissionUploaded (recognise) → [student confirms] →
 *   onSubmissionConfirmed (mark)
 *
 * There is NO background-job system in this repo, so these run inline:
 * `onSubmissionUploaded` is fired-and-forgotten from the upload route (so the 201
 * stays fast) and `onSubmissionConfirmed` is awaited from the confirm route.
 *
 * TODO(queue): move both triggers onto a durable background queue (or Next.js
 * `after()`), with retries and idempotency, so they survive serverless freezes
 * and don't run inside the request lifecycle.
 */

import { recognise, type RecogniseDeps } from "./recognitionService";
import { mark, type MarkDeps } from "./markingService";
import type { SubmissionStatus } from "@/lib/types";

/** Codes for which marking actually attempted the grader and FAILED (mark() set FAILED). */
const MARKING_FAILED_CODES = new Set([
  "grader",
  "config",
  "anthropic_auth",
  "anthropic_http",
  "timeout",
  "schema",
]);

/** Trigger recognition after upload. Returns the recognise result. */
export async function onSubmissionUploaded(submissionId: string, deps: RecogniseDeps = {}) {
  return recognise(submissionId, deps);
}

/** Trigger marking after confirmation. Returns the resulting submission status. */
export async function onSubmissionConfirmed(submissionId: string, deps: MarkDeps = {}): Promise<SubmissionStatus> {
  const res = await mark(submissionId, deps);
  if (res.ok) return "MARKED";
  // mark() records FAILED only when the grader hard-failed; no_mark_scheme /
  // conflict / not_found leave the submission CONFIRMED.
  return MARKING_FAILED_CODES.has(res.error.code) ? "FAILED" : "CONFIRMED";
}
