/**
 * RecognitionService — turn a submitted image into LaTeX via an OCR provider
 * (Mathpix), persist a Recognition row, and advance the submission
 * RECOGNISING → AWAITING_CONFIRMATION (or FAILED with a stored reason).
 *
 * Provider, DB store, and storage are injectable so the logic is unit-testable
 * without network/DB/disk. The provider sits behind RecognitionProvider so the
 * vendor can be swapped. Operational failures never throw — recognise() resolves
 * a typed RecognitionResult and records FAILED on hard errors.
 */

import { env } from "@/lib/env";
import { storage as defaultStorage, type StorageService } from "./storage";
import { getServiceClient } from "@/lib/db/service";
import { mathpixProvider } from "@/lib/ai/recognition/mathpix";
import { RecognitionError, type RecognitionProvider } from "@/lib/ai/recognition/types";
import { canTransition } from "./submissionStateMachine";
import type { Recognition, SubmissionStatus } from "@/lib/types";

interface LoadedSubmission {
  id: string;
  studentId: string;
  imageStorageKey: string;
  imageMimeType: string;
  status: SubmissionStatus;
}

export interface InsertRecognitionRow {
  submissionId: string;
  provider: string;
  rawLatex: string;
  renderedMarkdown: string | null;
  overallConfidence: number | null;
  lineData: unknown | null;
  lowConfidence: boolean;
}

/** DB seam — default impl uses the service-role client; mocked in tests. */
export interface RecognitionStore {
  loadSubmission(id: string): Promise<LoadedSubmission | null>;
  setStatus(id: string, status: SubmissionStatus, failureReason?: string | null): Promise<void>;
  insertRecognition(row: InsertRecognitionRow): Promise<Recognition>;
}

export type RecognitionResult =
  | { ok: true; recognition: Recognition; lowConfidence: boolean }
  | { ok: false; error: RecognitionError };

export interface RecogniseDeps {
  provider?: RecognitionProvider;
  store?: RecognitionStore;
  storage?: StorageService;
}

export async function recognise(submissionId: string, deps: RecogniseDeps = {}): Promise<RecognitionResult> {
  const provider = deps.provider ?? mathpixProvider;
  const store = deps.store ?? defaultStore;
  const storageSvc = deps.storage ?? defaultStorage;

  const submission = await store.loadSubmission(submissionId);
  if (!submission) {
    return { ok: false, error: new RecognitionError("not_found", `Submission ${submissionId} not found.`) };
  }
  // State machine: only recognise from UPLOADED (don't re-recognise a confirmed/marked one).
  if (!canTransition(submission.status, "RECOGNISING")) {
    return {
      ok: false,
      error: new RecognitionError("conflict", `Cannot recognise from status ${submission.status}.`),
    };
  }

  await store.setStatus(submissionId, "RECOGNISING");

  // Fetch the image bytes from storage.
  let imageBase64: string;
  try {
    const bytes = await storageSvc.get(submission.imageStorageKey);
    if (!bytes || bytes.length === 0) {
      throw new RecognitionError("no_image", "Stored image is empty.");
    }
    imageBase64 = bytes.toString("base64");
  } catch (err) {
    const error =
      err instanceof RecognitionError ? err : new RecognitionError("no_image", "Could not read the stored image.");
    await store.setStatus(submissionId, "FAILED", error.message);
    console.warn(`[recognition] ${submissionId} FAILED (${error.code})`);
    return { ok: false, error };
  }

  // Call the OCR provider.
  let provided;
  try {
    provided = await provider.recogniseImage({ imageBase64, mimeType: submission.imageMimeType });
  } catch (err) {
    const error =
      err instanceof RecognitionError ? err : new RecognitionError("mathpix_http", "Recognition provider failed.");
    await store.setStatus(submissionId, "FAILED", error.message);
    console.warn(`[recognition] ${submissionId} FAILED (${error.code})`);
    return { ok: false, error };
  }

  // Confidence gating: still proceed to AWAITING_CONFIRMATION, but flag for review.
  const lowConfidence =
    provided.confidence == null || provided.confidence < env.MATHPIX_CONFIDENCE_THRESHOLD;

  const recognition = await store.insertRecognition({
    submissionId,
    provider: provider.name,
    rawLatex: provided.latex,
    renderedMarkdown: provided.renderedMarkdown,
    overallConfidence: provided.confidence,
    lineData: provided.lineData,
    lowConfidence,
  });

  await store.setStatus(submissionId, "AWAITING_CONFIRMATION");
  console.info(`[recognition] ${submissionId} AWAITING_CONFIRMATION lowConfidence=${lowConfidence}`);
  return { ok: true, recognition, lowConfidence };
}

/** Default store backed by the Supabase service-role client (RLS-bypassing). */
const defaultStore: RecognitionStore = {
  async loadSubmission(id) {
    const { data, error } = await getServiceClient()
      .from("submissions")
      .select("id, student_id, image_storage_key, image_mime_type, status")
      .eq("id", id)
      .maybeSingle();
    if (error) throw new RecognitionError("not_found", "Failed to load submission.");
    if (!data) return null;
    return {
      id: data.id,
      studentId: data.student_id,
      imageStorageKey: data.image_storage_key,
      imageMimeType: data.image_mime_type,
      status: data.status,
    };
  },

  async setStatus(id, status, failureReason) {
    const patch: Record<string, unknown> = { status };
    if (failureReason !== undefined) patch.failure_reason = failureReason;
    const { error } = await getServiceClient().from("submissions").update(patch).eq("id", id);
    if (error) throw new RecognitionError("config", "Failed to update submission status.");
  },

  async insertRecognition(row) {
    const { data, error } = await getServiceClient()
      .from("recognitions")
      .upsert(
        {
          submission_id: row.submissionId,
          provider: row.provider,
          raw_latex: row.rawLatex,
          rendered_markdown: row.renderedMarkdown,
          overall_confidence: row.overallConfidence,
          line_data: row.lineData,
          low_confidence: row.lowConfidence,
        },
        { onConflict: "submission_id" },
      )
      .select("id, submission_id, provider, raw_latex, rendered_markdown, overall_confidence, line_data, low_confidence, created_at")
      .single();
    if (error || !data) throw new RecognitionError("config", "Failed to persist recognition.");
    return {
      id: data.id,
      submissionId: data.submission_id,
      provider: data.provider,
      rawLatex: data.raw_latex,
      renderedMarkdown: data.rendered_markdown,
      overallConfidence: data.overall_confidence,
      lineData: data.line_data,
      lowConfidence: data.low_confidence,
      createdAt: data.created_at,
    };
  },
};
