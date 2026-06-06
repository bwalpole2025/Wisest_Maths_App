/**
 * Handwriting submission upload — orchestration.
 *
 * Validates an uploaded image (declared type → size → magic-byte signature),
 * stores it under a non-guessable key via the StorageService, and creates the
 * `submissions` row (status UPLOADED) through the RLS-respecting tenant DB.
 * Only the storage key is persisted — never the image bytes.
 *
 * Storage + DB are injectable so the logic is unit-testable without disk/network.
 */

import { randomUUID } from "crypto";
import { withTenant } from "@/lib/db/tenant";
import type { SessionClaims } from "@/lib/auth/session";
import { env } from "@/lib/env";
import { ALLOWED_UPLOAD_TYPES, isAllowedUploadType, MAX_SUBMISSION_IMAGE_BYTES } from "@/lib/ai/marking/sanitise";
import { sniffUploadType, extFor } from "@/lib/utils/imageSniffer";
import { storage, type StorageService } from "./storage";

type Claims = Pick<SessionClaims, "sub" | "role" | "schoolId" | "email">;

/** Validation failure carrying the HTTP status the route should return. */
export class UploadError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "UploadError";
  }
}

export interface NewSubmissionRow {
  studentId: string;
  questionId: string | null;
  storageKey: string;
  mimeType: string;
  sizeBytes: number;
  retentionExpiresAt: string;
}

/** DB seam — default impl inserts via the RLS tenant pool; mocked in tests. */
export interface SubmissionsDb {
  insert(claims: Claims, row: NewSubmissionRow): Promise<{ id: string; status: string }>;
}

const defaultDb: SubmissionsDb = {
  async insert(claims, row) {
    return withTenant(claims, async (c) => {
      const { rows } = await c.query(
        `INSERT INTO public.submissions
           (student_id, question_id, status, image_storage_key, image_mime_type, image_size_bytes, retention_expires_at)
         VALUES ($1, $2, 'UPLOADED', $3, $4, $5, $6)
         RETURNING id, status`,
        [row.studentId, row.questionId, row.storageKey, row.mimeType, row.sizeBytes, row.retentionExpiresAt],
      );
      return { id: rows[0].id as string, status: rows[0].status as string };
    });
  },
};

export interface CreateSubmissionInput {
  /** = session.sub (never taken from the request body). */
  studentId: string;
  questionId: string | null;
  declaredMimeType: string;
  sizeBytes: number;
  bytes: Buffer;
  /** Correlation id for logging (no PII). */
  correlationId: string;
}

export interface CreateSubmissionDeps {
  storage?: StorageService;
  db?: SubmissionsDb;
  now?: () => Date;
}

export async function createSubmission(
  input: CreateSubmissionInput,
  claims: Claims,
  deps: CreateSubmissionDeps = {},
): Promise<{ submissionId: string; status: string; storageKey: string }> {
  const store = deps.storage ?? storage;
  const db = deps.db ?? defaultDb;
  const now = deps.now ?? (() => new Date());

  // 1. Declared MIME must be in the allowlist (image types or PDF).
  if (!isAllowedUploadType(input.declaredMimeType)) {
    throw new UploadError(415, `Unsupported file type. Allowed: ${[...ALLOWED_UPLOAD_TYPES].join(", ")}.`);
  }
  // 2. Size cap.
  if (input.sizeBytes > MAX_SUBMISSION_IMAGE_BYTES) {
    throw new UploadError(413, `File too large (max ${Math.round(MAX_SUBMISSION_IMAGE_BYTES / (1024 * 1024))} MB).`);
  }
  // 3. Verify the ACTUAL content by magic bytes (defeats a spoofed MIME/extension).
  const sniffed = sniffUploadType(input.bytes);
  if (!sniffed || !ALLOWED_UPLOAD_TYPES.has(sniffed)) {
    throw new UploadError(415, "File content is not a supported image or PDF (failed signature check).");
  }

  // 4. Non-guessable key — random UUID, never the client filename.
  const storageKey = `submissions/${randomUUID()}.${extFor(sniffed)}`;
  await store.put(storageKey, input.bytes, { contentType: sniffed });

  // 5. Retention window (config-driven).
  const retentionExpiresAt = new Date(
    now().getTime() + env.SUBMISSION_RETENTION_DAYS * 24 * 60 * 60 * 1000,
  ).toISOString();

  // 6. Persist the row — only the key, the verified type, and the size.
  const { id, status } = await db.insert(claims, {
    studentId: input.studentId,
    questionId: input.questionId,
    storageKey,
    mimeType: sniffed,
    sizeBytes: input.sizeBytes,
    retentionExpiresAt,
  });

  return { submissionId: id, status, storageKey };
}
