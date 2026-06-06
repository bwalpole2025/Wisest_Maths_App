/**
 * Input constraints + light sanitisation for the handwriting-marking feature.
 *
 * The uploaded image is processed in-memory and never persisted, so the main
 * concern is rejecting non-image / oversized payloads before they reach the
 * vision model, and trimming the model's transcription before it is graded.
 */

/** Allowed photo MIME types (matches what phone cameras / file pickers produce). */
export const ALLOWED_IMAGE_TYPES = new Set<string>([
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/heic",
]);

/** Hard cap on the in-memory marking image size (extends SECURITY UPLOAD-8.1). */
export const MAX_IMAGE_BYTES = 8 * 1024 * 1024; // 8 MB

/** Hard cap for the persisted /api/submissions upload (extends SECURITY UPLOAD-8.1). */
export const MAX_SUBMISSION_IMAGE_BYTES = 10 * 1024 * 1024; // 10 MB

export function isAllowedImageType(type: string | undefined | null): boolean {
  return !!type && ALLOWED_IMAGE_TYPES.has(type.toLowerCase());
}

/**
 * Allowed types for uploading working: the photo types above plus PDF (a student
 * may export/scan their working as a PDF instead of taking a photo).
 */
export const ALLOWED_UPLOAD_TYPES = new Set<string>([...ALLOWED_IMAGE_TYPES, "application/pdf"]);

export function isAllowedUploadType(type: string | undefined | null): boolean {
  return !!type && ALLOWED_UPLOAD_TYPES.has(type.toLowerCase());
}

/**
 * Trim and cap the model's transcription before it is handed to the symbolic
 * grader. Collapses whitespace/newlines (handwriting often transcribes with
 * stray line breaks) and enforces a sane length.
 */
export function sanitiseRecognisedAnswer(raw: string): string {
  return raw.replace(/\s+/g, " ").trim().slice(0, 512);
}
