import { describe, it, expect, vi } from "vitest";
import { AnthropicMarkGrader } from "./anthropic";
import { FIXTURE_SCHEME, VALID_BREAKDOWN } from "./__fixtures__/markScheme";
import { anthropicTextResponse } from "./__fixtures__/anthropicResponse";

const input = {
  questionText: "Solve \\( x^2 - 5x + 6 = 0 \\).",
  scheme: FIXTURE_SCHEME,
  confirmedLatex: "x^2-5x+6=0\\n(x-2)(x-3)=0\\nx=2, x=3",
};
const opts = { apiKey: "test-key", model: "claude-opus-4-8", timeoutMs: 5000 };

describe("AnthropicMarkGrader", () => {
  it("parses a valid Messages response and sends the documented request", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(anthropicTextResponse(JSON.stringify(VALID_BREAKDOWN)));
    const grader = new AnthropicMarkGrader({ ...opts, fetchImpl });

    const out = await grader.grade(input);
    expect(out.marks).toHaveLength(3);
    expect(out.finalAnswerCorrect).toBe(false);

    expect(fetchImpl).toHaveBeenCalledTimes(1);
    const [url, init] = fetchImpl.mock.calls[0];
    expect(url).toBe("https://api.anthropic.com/v1/messages");
    const headers = (init as RequestInit).headers as Record<string, string>;
    expect(headers["anthropic-version"]).toBe("2023-06-01");
    expect(headers["x-api-key"]).toBe("test-key");
    const body = JSON.parse((init as RequestInit).body as string);
    expect(body.model).toBe("claude-opus-4-8");
    expect(body.temperature).toBe(0);
    expect(typeof body.system).toBe("string");
    expect(body.messages[0].role).toBe("user");
  });

  it("parses fenced JSON", async () => {
    const fenced = "```json\n" + JSON.stringify(VALID_BREAKDOWN) + "\n```";
    const fetchImpl = vi.fn().mockResolvedValue(anthropicTextResponse(fenced));
    const grader = new AnthropicMarkGrader({ ...opts, fetchImpl });
    expect((await grader.grade(input)).marks).toHaveLength(3);
  });

  it("retries once on non-JSON, then throws GraderError(schema)", async () => {
    // Fresh Response per call (a Response body can only be read once).
    const fetchImpl = vi.fn(async () => anthropicTextResponse("sorry, here are the marks…"));
    const grader = new AnthropicMarkGrader({ ...opts, fetchImpl });
    await expect(grader.grade(input)).rejects.toMatchObject({ code: "schema" });
    expect(fetchImpl).toHaveBeenCalledTimes(2); // original + one retry
  });

  it("throws config when the API key is missing (no request made)", async () => {
    const fetchImpl = vi.fn();
    const grader = new AnthropicMarkGrader({ apiKey: undefined, model: "claude-opus-4-8", fetchImpl });
    await expect(grader.grade(input)).rejects.toMatchObject({ code: "config" });
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it("maps a 401 to an auth error", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(anthropicTextResponse("{}", 401));
    const grader = new AnthropicMarkGrader({ ...opts, fetchImpl });
    await expect(grader.grade(input)).rejects.toMatchObject({ code: "anthropic_auth" });
  });
});
