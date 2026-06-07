/**
 * Submission state machine — the single source of truth for legal status
 * transitions across the handwriting pipeline. Every service that advances a
 * submission's status guards against `canTransition`, and routes map an illegal
 * transition to HTTP 409.
 *
 * Legal path: UPLOADED → RECOGNISING → AWAITING_CONFIRMATION → CONFIRMED →
 * MARKING → MARKED. Any non-terminal state may also go to FAILED.
 */

import type { SubmissionStatus } from "@/lib/types";

/** Allowed forward transitions (FAILED is handled separately by `canTransition`). */
export const LEGAL_TRANSITIONS: Record<SubmissionStatus, SubmissionStatus[]> = {
  UPLOADED: ["RECOGNISING"],
  RECOGNISING: ["AWAITING_CONFIRMATION"],
  AWAITING_CONFIRMATION: ["CONFIRMED"],
  CONFIRMED: ["MARKING"],
  MARKING: ["MARKED"],
  MARKED: [], // terminal (success)
  FAILED: [], // terminal (failure)
};

/** True if moving `from → to` is allowed. Any non-terminal state may fail. */
export function canTransition(from: SubmissionStatus, to: SubmissionStatus): boolean {
  if (to === "FAILED") return from !== "FAILED" && from !== "MARKED";
  return LEGAL_TRANSITIONS[from].includes(to);
}
