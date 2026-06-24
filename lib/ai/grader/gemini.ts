/**
 * Google Gemini mark grader (A-Level mark-scheme marking engine).
 *
 * Mirrors the raw-fetch pattern used elsewhere for Gemini (lib/ai/marking/recognise.ts,
 * app/api/socratic): POST generativelanguage.googleapis.com/v1beta/models/<model>:generateContent
 * with the API key in the query string. The model id is read from config
 * (env.GEMINI_MARKER_MODEL), never hard-coded. The API key is never logged.
 *
 * On a parse/validate failure the marker is re-prompted ONCE with a "valid JSON
 * only" reminder; a second failure throws GraderError (→ the service sets FAILED).
 */

import { env } from "@/lib/env";
import type { MarkBreakdown } from "@/lib/types";
import { MARKER_SYSTEM_INSTRUCTIONS, buildUserContent } from "./prompt";
import { parseMarkBreakdown } from "./validate";
import { GraderError, type GradeInput, type MarkGrader } from "./types";

const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models";
const DEFAULT_TIMEOUT_MS = 60_000;
const DEFAULT_MAX_TOKENS = 8192;

const RETRY_REMINDER =
  "\n\nIMPORTANT: your previous response could not be used. Return ONE valid JSON object matching the required schema EXACTLY — no prose, no explanation, no markdown code fences.";

export interface GeminiGraderOptions {
  apiKey?: string;
  model?: string;
  fetchImpl?: typeof fetch;
  timeoutMs?: number;
  maxTokens?: number;
}

export class GeminiMarkGrader implements MarkGrader {
  readonly model: string;
  private readonly apiKey?: string;
  private readonly fetchImpl: typeof fetch;
  private readonly timeoutMs: number;
  private readonly maxTokens: number;

  constructor(opts: GeminiGraderOptions = {}) {
    this.apiKey = opts.apiKey ?? env.GEMINI_API_KEY;
    this.model = opts.model ?? env.GEMINI_MARKER_MODEL;
    this.fetchImpl = opts.fetchImpl ?? fetch;
    this.timeoutMs = opts.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    this.maxTokens = opts.maxTokens ?? DEFAULT_MAX_TOKENS;
  }

  async grade(input: GradeInput): Promise<MarkBreakdown> {
    if (!this.apiKey) {
      throw new GraderError("config", "Gemini API key is not configured.");
    }
    const baseUser = buildUserContent(input);

    // Attempt 1.
    const first = await this.callOnce(baseUser);
    try {
      return parseMarkBreakdown(first, input.scheme);
    } catch {
      // Retry ONCE with a strict-JSON reminder.
      const second = await this.callOnce(baseUser + RETRY_REMINDER);
      return parseMarkBreakdown(second, input.scheme); // throws GraderError on 2nd failure
    }
  }

  /** One generateContent call; returns the model's text. Throws on HTTP/timeout. */
  private async callOnce(userContent: string): Promise<string> {
    const res = await this.doFetch(userContent);
    if (!res.ok) {
      if (res.status === 401 || res.status === 403) {
        throw new GraderError("gemini_auth", `Gemini authentication failed (HTTP ${res.status}).`);
      }
      throw new GraderError("gemini_http", `Gemini returned HTTP ${res.status}.`);
    }
    let data: unknown;
    try {
      data = await res.json();
    } catch {
      throw new GraderError("gemini_http", "Gemini returned a non-JSON envelope.");
    }
    // Take the last non-"thought" text part (matches lib/ai/marking/recognise.ts).
    const parts = (data as { candidates?: { content?: { parts?: { text?: string; thought?: boolean }[] } }[] })
      ?.candidates?.[0]?.content?.parts;
    let text = "";
    if (Array.isArray(parts)) {
      for (let i = parts.length - 1; i >= 0; i--) {
        if (parts[i]?.thought) continue;
        if (typeof parts[i]?.text === "string") {
          text = parts[i].text as string;
          break;
        }
      }
    }
    return text;
  }

  private async doFetch(userContent: string): Promise<Response> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.timeoutMs);
    try {
      return await this.fetchImpl(
        `${GEMINI_BASE_URL}/${this.model}:generateContent?key=${this.apiKey!}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: MARKER_SYSTEM_INSTRUCTIONS }] },
            contents: [{ role: "user", parts: [{ text: userContent }] }],
            generationConfig: {
              temperature: 0,
              maxOutputTokens: this.maxTokens,
              responseMimeType: "application/json",
            },
          }),
          signal: controller.signal,
        },
      );
    } catch (err) {
      const isAbort = err instanceof Error && err.name === "AbortError";
      throw new GraderError(
        isAbort ? "timeout" : "gemini_http",
        isAbort ? "Gemini request timed out." : "Gemini request failed (network error).",
      );
    } finally {
      clearTimeout(timer);
    }
  }
}

/** App-wide default grader (reads key/model from env at construction). */
export const geminiMarkGrader = new GeminiMarkGrader();
