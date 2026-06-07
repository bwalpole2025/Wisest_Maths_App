import { describe, it, expect, vi } from "vitest";
import { MathpixRecognitionProvider } from "./mathpix";
import { MATHPIX_TEXT_FIXTURE } from "./__fixtures__/mathpixText";

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
}

const creds = { appId: "test-id", appKey: "test-key", backoffMs: 0 };

describe("MathpixRecognitionProvider", () => {
  it("parses latex, confidence and line data, and sends the documented request", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse(MATHPIX_TEXT_FIXTURE));
    const provider = new MathpixRecognitionProvider({ ...creds, fetchImpl });

    const out = await provider.recogniseImage({ imageBase64: "AAAA", mimeType: "image/png" });

    expect(out.latex).toBe("x = 3");
    expect(out.confidence).toBe(0.97);
    expect(Array.isArray(out.lineData)).toBe(true);
    expect((out.lineData as unknown[]).length).toBe(2);
    expect(out.renderedMarkdown).toContain("x = 3");

    // Request shape (per docs).
    const [url, init] = fetchImpl.mock.calls[0];
    expect(url).toBe("https://api.mathpix.com/v3/text");
    const body = JSON.parse((init as RequestInit).body as string);
    expect(body.formats).toEqual(["text", "data"]);
    expect(body.data_options).toEqual({ include_latex: true, include_asciimath: true });
    expect(body.rm_spaces).toBe(true);
    expect(body.include_line_data).toBe(true);
    expect(body.src).toBe("data:image/png;base64,AAAA");
    const headers = (init as RequestInit).headers as Record<string, string>;
    expect(headers.app_id).toBe("test-id");
    expect(headers.app_key).toBe("test-key");
  });

  it("retries once then throws mathpix_http on repeated 5xx", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse({}, 503));
    const provider = new MathpixRecognitionProvider({ ...creds, fetchImpl });

    await expect(provider.recogniseImage({ imageBase64: "A", mimeType: "image/png" })).rejects.toMatchObject({
      code: "mathpix_http",
    });
    expect(fetchImpl).toHaveBeenCalledTimes(2); // one retry
  });

  it("maps an aborted/timed-out request to a timeout error", async () => {
    const abort = Object.assign(new Error("aborted"), { name: "AbortError" });
    const fetchImpl = vi.fn().mockRejectedValue(abort);
    const provider = new MathpixRecognitionProvider({ ...creds, fetchImpl });

    await expect(provider.recogniseImage({ imageBase64: "A", mimeType: "image/png" })).rejects.toMatchObject({
      code: "timeout",
    });
  });

  it("does not retry a 401 and reports an auth error", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse({}, 401));
    const provider = new MathpixRecognitionProvider({ ...creds, fetchImpl });

    await expect(provider.recogniseImage({ imageBase64: "A", mimeType: "image/png" })).rejects.toMatchObject({
      code: "mathpix_auth",
    });
    expect(fetchImpl).toHaveBeenCalledTimes(1);
  });

  it("throws config when credentials are missing", async () => {
    const provider = new MathpixRecognitionProvider({ appId: undefined, appKey: undefined, fetchImpl: vi.fn() });
    await expect(provider.recogniseImage({ imageBase64: "A", mimeType: "image/png" })).rejects.toMatchObject({
      code: "config",
    });
  });
});
