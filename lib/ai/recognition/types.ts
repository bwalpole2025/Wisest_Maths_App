/**
 * Handwriting recognition — provider abstraction.
 *
 * The pipeline depends only on `RecognitionProvider`, so the OCR vendor (Mathpix
 * today) can be swapped without touching the orchestration in
 * lib/services/recognitionService.ts.
 */

export type RecognitionErrorCode =
  | "not_found" // submission row missing
  | "conflict" // submission not in a state that can transition to RECOGNISING
  | "no_image" // stored image missing/empty
  | "config" // provider/DB credentials not configured
  | "mathpix_auth" // 401/403 from Mathpix
  | "mathpix_http" // other HTTP / network failure
  | "timeout" // request aborted / timed out
  | "parse"; // unexpected/unparseable response

/** Typed, non-secret error surfaced by the recognition pipeline. */
export class RecognitionError extends Error {
  constructor(
    public readonly code: RecognitionErrorCode,
    message: string,
  ) {
    super(message);
    this.name = "RecognitionError";
  }
}

/** Normalised output every provider returns. */
export interface ProviderRecognition {
  /** Best LaTeX representation of the working. */
  latex: string;
  /** Provider's rendered markdown (Mathpix Markdown), if any. */
  renderedMarkdown: string | null;
  /** Overall confidence in [0,1], or null if the provider didn't report one. */
  confidence: number | null;
  /** Per-line data as returned by the provider (opaque JSON). */
  lineData: unknown | null;
}

export interface RecogniseImageInput {
  /** Base64-encoded image bytes (no data: URL prefix). */
  imageBase64: string;
  mimeType: string;
}

export interface RecognitionProvider {
  /** Stable provider name persisted on the Recognition row. */
  readonly name: string;
  recogniseImage(input: RecogniseImageInput): Promise<ProviderRecognition>;
}
