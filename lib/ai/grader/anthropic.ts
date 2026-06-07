/**
 * Anthropic Messages API mark grader.
 *
 * Endpoint/headers verified against platform.claude.com/docs/en/api/messages:
 * POST https://api.anthropic.com/v1/messages, headers x-api-key +
 * anthropic-version: 2023-06-01 + content-type. The model id is read from config
 * (env.ANTHROPIC_MARKER_MODEL), never hard-coded. The API key is never logged.
 *
 * On a parse/validate failure the marker is re-prompted ONCE with a "valid JSON
 * only" reminder; a second failure throws GraderError (→ the service sets FAILED).
 */

import { env } from "@/lib/env";
import type { MarkBreakdown } from "@/lib/types";
import { MARKER_SYSTEM_INSTRUCTIONS, buildUserContent } from "./prompt";
import { parseMarkBreakdown } from "./validate";
import { GraderError, type GradeInput, type MarkGrader } from "./types";

const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_VERSION = "2023-06-01";
const DEFAULT_TIMEOUT_MS = 60_000;
const DEFAULT_MAX_TOKENS = 4096;

const RETRY_REMINDER =
  "\n\nIMPORTANT: your previous response could not be used. Return ONE valid JSON object matching the required schema EXACTLY — no prose, no explanation, no markdown code fences.";

export interface AnthropicGraderOptions {
  apiKey?: string;
  model?: string;
  fetchImpl?: typeof fetch;
  timeoutMs?: number;
  maxTokens?: number;
}

export class AnthropicMarkGrader implements MarkGrader {
  readonly model: string;
  private readonly apiKey?: string;
  private readonly fetchImpl: typeof fetch;
  private readonly timeoutMs: number;
  private readonly maxTokens: number;

  constructor(opts: AnthropicGraderOptions = {}) {
    this.apiKey = opts.apiKey ?? env.ANTHROPIC_API_KEY;
    this.model = opts.model ?? env.ANTHROPIC_MARKER_MODEL;
    this.fetchImpl = opts.fetchImpl ?? fetch;
    this.timeoutMs = opts.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    this.maxTokens = opts.maxTokens ?? DEFAULT_MAX_TOKENS;
  }

  async grade(input: GradeInput): Promise<MarkBreakdown> {
    if (!this.apiKey) {
      throw new GraderError("config", "Anthropic API key is not configured.");
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

  /** One Messages call; returns the concatenated text content. Throws on HTTP/timeout. */
  private async callOnce(userContent: string): Promise<string> {
    const res = await this.doFetch(userContent);
    if (!res.ok) {
      if (res.status === 401 || res.status === 403) {
        throw new GraderError("anthropic_auth", `Anthropic authentication failed (HTTP ${res.status}).`);
      }
      throw new GraderError("anthropic_http", `Anthropic returned HTTP ${res.status}.`);
    }
    let data: unknown;
    try {
      data = await res.json();
    } catch {
      throw new GraderError("anthropic_http", "Anthropic returned a non-JSON envelope.");
    }
    const parts = (data as { content?: { type?: string; text?: string }[] })?.content;
    let text = "";
    if (Array.isArray(parts)) {
      for (const p of parts) {
        if (p?.type === "text" && typeof p.text === "string") text += p.text;
      }
    }
    return text;
  }

  private async doFetch(userContent: string): Promise<Response> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.timeoutMs);
    try {
      return await this.fetchImpl(ANTHROPIC_URL, {
        method: "POST",
        headers: {
          "x-api-key": this.apiKey!,
          "anthropic-version": ANTHROPIC_VERSION,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: this.model,
          max_tokens: this.maxTokens,
          temperature: 0,
          system: MARKER_SYSTEM_INSTRUCTIONS,
          messages: [{ role: "user", content: userContent }],
        }),
        signal: controller.signal,
      });
    } catch (err) {
      const isAbort = err instanceof Error && err.name === "AbortError";
      throw new GraderError(
        isAbort ? "timeout" : "anthropic_http",
        isAbort ? "Anthropic request timed out." : "Anthropic request failed (network error).",
      );
    } finally {
      clearTimeout(timer);
    }
  }
}

/** App-wide default grader (reads key/model from env at construction). */
export const anthropicMarkGrader = new AnthropicMarkGrader();
