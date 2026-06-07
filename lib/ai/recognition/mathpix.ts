/**
 * Mathpix Convert API (v3/text) recognition provider.
 *
 * Request/response field names confirmed against docs.mathpix.com/reference/post-v3-text.
 * Credentials come from the env/config layer (never process.env in callers).
 * Robustness: per-request timeout (AbortController), one retry with backoff on
 * transient failures (network / timeout / 429 / 5xx), typed errors otherwise.
 * Secrets (app_id/app_key) are never logged.
 */

import { env } from "@/lib/env";
import {
  RecognitionError,
  type ProviderRecognition,
  type RecogniseImageInput,
  type RecognitionProvider,
} from "./types";

const MATHPIX_URL = "https://api.mathpix.com/v3/text";
const DEFAULT_TIMEOUT_MS = 20_000;
const DEFAULT_BACKOFF_MS = 500;

/** Subset of the v3/text response we consume. */
interface MathpixTextResponse {
  text?: string;
  latex_styled?: string;
  confidence?: number;
  confidence_rate?: number;
  data?: { type: string; value: string }[];
  line_data?: unknown[];
  error?: string;
  error_info?: { id?: string; message?: string };
}

export interface MathpixProviderOptions {
  appId?: string;
  appKey?: string;
  fetchImpl?: typeof fetch;
  timeoutMs?: number;
  backoffMs?: number;
}

export class MathpixRecognitionProvider implements RecognitionProvider {
  readonly name = "mathpix";
  private readonly appId?: string;
  private readonly appKey?: string;
  private readonly fetchImpl: typeof fetch;
  private readonly timeoutMs: number;
  private readonly backoffMs: number;

  constructor(opts: MathpixProviderOptions = {}) {
    this.appId = opts.appId ?? env.MATHPIX_APP_ID;
    this.appKey = opts.appKey ?? env.MATHPIX_APP_KEY;
    this.fetchImpl = opts.fetchImpl ?? fetch;
    this.timeoutMs = opts.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    this.backoffMs = opts.backoffMs ?? DEFAULT_BACKOFF_MS;
  }

  async recogniseImage(input: RecogniseImageInput): Promise<ProviderRecognition> {
    if (!this.appId || !this.appKey) {
      throw new RecognitionError("config", "Mathpix credentials are not configured.");
    }

    const body = JSON.stringify({
      src: `data:${input.mimeType};base64,${input.imageBase64}`,
      formats: ["text", "data"],
      data_options: { include_latex: true, include_asciimath: true },
      rm_spaces: true,
      include_line_data: true,
    });

    const res = await this.fetchWithRetry(body);

    let json: MathpixTextResponse;
    try {
      json = (await res.json()) as MathpixTextResponse;
    } catch {
      throw new RecognitionError("parse", "Mathpix returned a non-JSON response.");
    }
    // Mathpix can return HTTP 200 with an error payload.
    if (json.error || json.error_info) {
      throw new RecognitionError(
        "mathpix_http",
        `Mathpix reported an error: ${json.error ?? json.error_info?.message ?? "unknown"}`,
      );
    }

    const latex = json.latex_styled?.trim() || json.text?.trim() || "";
    const confidence = typeof json.confidence === "number" ? json.confidence : null;
    return {
      latex,
      renderedMarkdown: json.text ?? null,
      confidence,
      lineData: json.line_data ?? null,
    };
  }

  /** Up to 2 attempts (one retry). Retries network/timeout/429/5xx; not other 4xx. */
  private async fetchWithRetry(body: string): Promise<Response> {
    let lastError: RecognitionError | null = null;
    for (let attempt = 0; attempt < 2; attempt++) {
      if (attempt > 0) await delay(this.backoffMs);

      let res: Response;
      try {
        res = await this.doFetch(body);
      } catch (err) {
        const isAbort = err instanceof Error && err.name === "AbortError";
        lastError = isAbort
          ? new RecognitionError("timeout", "Mathpix request timed out.")
          : new RecognitionError("mathpix_http", "Mathpix request failed (network error).");
        continue; // retryable
      }

      if (res.ok) return res;
      if (res.status === 401 || res.status === 403) {
        throw new RecognitionError("mathpix_auth", `Mathpix authentication failed (HTTP ${res.status}).`);
      }
      if (res.status === 429 || res.status >= 500) {
        lastError = new RecognitionError("mathpix_http", `Mathpix returned HTTP ${res.status}.`);
        continue; // retryable
      }
      // Other 4xx — caller/request error; not retryable.
      throw new RecognitionError("mathpix_http", `Mathpix returned HTTP ${res.status}.`);
    }
    throw lastError ?? new RecognitionError("mathpix_http", "Mathpix request failed.");
  }

  private async doFetch(body: string): Promise<Response> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.timeoutMs);
    try {
      return await this.fetchImpl(MATHPIX_URL, {
        method: "POST",
        headers: {
          app_id: this.appId!,
          app_key: this.appKey!,
          "Content-Type": "application/json",
        },
        body,
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timer);
    }
  }
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** App-wide default provider (reads credentials from env at construction). */
export const mathpixProvider = new MathpixRecognitionProvider();
