import { describe, it, expect, vi } from "vitest";
import { GeminiMarkGrader } from "./gemini";
import { FIXTURE_SCHEME, VALID_BREAKDOWN } from "./__fixtures__/markScheme";
import { geminiTextResponse } from "./__fixtures__/geminiResponse";

const input = {
  questionText: "Solve \\( x^2 - 5x + 6 = 0 \\).",
  scheme: FIXTURE_SCHEME,
  confirmedLatex: "x^2-5x+6=0\\n(x-2)(x-3)=0\\nx=2, x=3",
};
const opts = { apiKey: "test-key", model: "gemini-2.5-pro", timeoutMs: 5000 };

describe("GeminiMarkGrader", () => {
  it("parses a valid generateContent response and sends the documented request", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(geminiTextResponse(JSON.stringify(VALID_BREAKDOWN)));
    const grader = new GeminiMarkGrader({ ...opts, fetchImpl });

    const out = await grader.grade(input);
    expect(out.marks).toHaveLength(3);
    expect(out.finalAnswerCorrect).toBe(false);

    expect(fetchImpl).toHaveBeenCalledTimes(1);
    const [url, init] = fetchImpl.mock.calls[0];
    expect(url).toBe(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=test-key",
    );
    const body = JSON.parse((init as RequestInit).body as string);
    expect(body.systemInstruction.parts[0].text).toBeTypeOf("string");
    expect(body.contents[0].role).toBe("user");
    expect(body.generationConfig.temperature).toBe(0);
  });

  it("parses fenced JSON", async () => {
    const fenced = "```json\n" + JSON.stringify(VALID_BREAKDOWN) + "\n```";
    const fetchImpl = vi.fn().mockResolvedValue(geminiTextResponse(fenced));
    const grader = new GeminiMarkGrader({ ...opts, fetchImpl });
    expect((await grader.grade(input)).marks).toHaveLength(3);
  });

  it("skips thought parts and reads the answer text", async () => {
    const env = {
      candidates: [
        {
          content: {
            role: "model",
            parts: [
              { thought: true, text: "let me think…" },
              { text: JSON.stringify(VALID_BREAKDOWN) },
            ],
          },
        },
      ],
    };
    const fetchImpl = vi.fn(async () => new Response(JSON.stringify(env), { status: 200 }));
    const grader = new GeminiMarkGrader({ ...opts, fetchImpl });
    expect((await grader.grade(input)).marks).toHaveLength(3);
  });

  it("retries once on non-JSON, then throws GraderError(schema)", async () => {
    // Fresh Response per call (a Response body can only be read once).
    const fetchImpl = vi.fn(async () => geminiTextResponse("sorry, here are the marks…"));
    const grader = new GeminiMarkGrader({ ...opts, fetchImpl });
    await expect(grader.grade(input)).rejects.toMatchObject({ code: "schema" });
    expect(fetchImpl).toHaveBeenCalledTimes(2); // original + one retry
  });

  it("throws config when the API key is missing (no request made)", async () => {
    const fetchImpl = vi.fn();
    const grader = new GeminiMarkGrader({ apiKey: undefined, model: "gemini-2.5-pro", fetchImpl });
    await expect(grader.grade(input)).rejects.toMatchObject({ code: "config" });
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it("maps a 401 to an auth error", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(geminiTextResponse("{}", 401));
    const grader = new GeminiMarkGrader({ ...opts, fetchImpl });
    await expect(grader.grade(input)).rejects.toMatchObject({ code: "gemini_auth" });
  });
});
