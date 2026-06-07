import { describe, it, expect, vi } from "vitest";
import { recognise, type RecognitionStore, type InsertRecognitionRow } from "./recognitionService";
import { RecognitionError, type RecognitionProvider, type ProviderRecognition } from "@/lib/ai/recognition/types";
import type { StorageService } from "./storage";

const submission = {
  id: "sub-1",
  studentId: "stu-1",
  imageStorageKey: "submissions/abc.png",
  imageMimeType: "image/png",
  status: "UPLOADED" as const,
};

function makeStore(loaded: typeof submission | null = submission) {
  const statuses: string[] = [];
  const reasons: (string | null | undefined)[] = [];
  const store: RecognitionStore = {
    loadSubmission: vi.fn(async () => loaded),
    setStatus: vi.fn(async (_id, status, reason) => {
      statuses.push(status);
      reasons.push(reason);
    }),
    insertRecognition: vi.fn(async (row: InsertRecognitionRow) => ({
      id: "rec-1",
      submissionId: row.submissionId,
      provider: row.provider,
      rawLatex: row.rawLatex,
      renderedMarkdown: row.renderedMarkdown,
      overallConfidence: row.overallConfidence,
      lineData: row.lineData,
      lowConfidence: row.lowConfidence,
      createdAt: "2026-06-06T00:00:00.000Z",
    })),
  };
  return { store, statuses, reasons };
}

const storage: StorageService = {
  get: vi.fn(async () => Buffer.from("image-bytes")),
  put: vi.fn(async () => {}),
  delete: vi.fn(async () => {}),
};

function fakeProvider(over: Partial<ProviderRecognition> = {}): RecognitionProvider {
  return {
    name: "mathpix",
    recogniseImage: vi.fn(async () => ({
      latex: "x = 3",
      renderedMarkdown: "\\( x = 3 \\)",
      confidence: 0.97,
      lineData: [{ text: "x = 3", confidence: 0.97 }],
      ...over,
    })),
  };
}

describe("recognise", () => {
  it("writes a Recognition and transitions RECOGNISING → AWAITING_CONFIRMATION (high confidence)", async () => {
    const { store, statuses } = makeStore();
    const res = await recognise("sub-1", { provider: fakeProvider(), store, storage });

    expect(res.ok).toBe(true);
    if (!res.ok) return;
    expect(res.lowConfidence).toBe(false);
    expect(res.recognition.rawLatex).toBe("x = 3");

    expect(store.insertRecognition).toHaveBeenCalledTimes(1);
    const row = (store.insertRecognition as ReturnType<typeof vi.fn>).mock.calls[0][0] as InsertRecognitionRow;
    expect(row.rawLatex).toBe("x = 3");
    expect(row.overallConfidence).toBe(0.97);
    expect(row.lineData).toEqual([{ text: "x = 3", confidence: 0.97 }]);
    expect(row.lowConfidence).toBe(false);

    expect(statuses).toEqual(["RECOGNISING", "AWAITING_CONFIRMATION"]);
  });

  it("flags low confidence below threshold but still reaches AWAITING_CONFIRMATION", async () => {
    const { store, statuses } = makeStore();
    const res = await recognise("sub-1", { provider: fakeProvider({ confidence: 0.4 }), store, storage });

    expect(res.ok).toBe(true);
    if (!res.ok) return;
    expect(res.lowConfidence).toBe(true);
    const row = (store.insertRecognition as ReturnType<typeof vi.fn>).mock.calls[0][0] as InsertRecognitionRow;
    expect(row.lowConfidence).toBe(true);
    expect(statuses).toEqual(["RECOGNISING", "AWAITING_CONFIRMATION"]);
  });

  it("on provider 5xx/timeout sets FAILED, returns a typed error, and does not throw", async () => {
    const { store, statuses, reasons } = makeStore();
    const failing: RecognitionProvider = {
      name: "mathpix",
      recogniseImage: vi.fn(async () => {
        throw new RecognitionError("mathpix_http", "Mathpix returned HTTP 503.");
      }),
    };

    const res = await recognise("sub-1", { provider: failing, store, storage });

    expect(res.ok).toBe(false);
    if (res.ok) return;
    expect(res.error.code).toBe("mathpix_http");
    expect(store.insertRecognition).not.toHaveBeenCalled();
    expect(statuses).toEqual(["RECOGNISING", "FAILED"]);
    // No secrets in the stored reason.
    const reason = reasons[reasons.length - 1] ?? "";
    expect(reason).not.toMatch(/app_key|app_id|test-key|MATHPIX_/i);
  });

  it("returns not_found without transitioning when the submission is missing", async () => {
    const { store, statuses } = makeStore(null);
    const res = await recognise("missing", { provider: fakeProvider(), store, storage });
    expect(res.ok).toBe(false);
    if (res.ok) return;
    expect(res.error.code).toBe("not_found");
    expect(statuses).toEqual([]); // never moved to RECOGNISING
  });
});
