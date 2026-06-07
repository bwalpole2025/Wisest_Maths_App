import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  createSubmission,
  UploadError,
  type SubmissionsDb,
  type CreateSubmissionInput,
} from "./submissionUpload";
import { MAX_SUBMISSION_IMAGE_BYTES } from "@/lib/ai/marking/sanitise";
import type { StorageService } from "./storage";
import type { SessionClaims } from "@/lib/auth/session";

const PNG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x01, 0x02, 0x03]);
const PDF = Buffer.from("%PDF-1.7\nworking...\n%%EOF", "binary");
const TEXT = Buffer.from("definitely not an image");

const claims: Pick<SessionClaims, "sub" | "role" | "schoolId" | "email"> = {
  sub: "stu-1",
  role: "student",
  schoolId: undefined,
  email: "s@example.com",
};

let storage: StorageService & { put: ReturnType<typeof vi.fn>; delete: ReturnType<typeof vi.fn> };
let db: SubmissionsDb & { insert: ReturnType<typeof vi.fn> };

beforeEach(() => {
  storage = { put: vi.fn(async () => {}), get: vi.fn(async () => Buffer.alloc(0)), delete: vi.fn(async () => {}) };
  db = { insert: vi.fn(async () => ({ id: "sub-1", status: "UPLOADED" })) };
});

function input(over: Partial<CreateSubmissionInput> = {}): CreateSubmissionInput {
  return {
    studentId: "stu-1",
    questionId: "gn12-001",
    declaredMimeType: "image/png",
    sizeBytes: PNG.length,
    bytes: PNG,
    correlationId: "corr-1",
    ...over,
  };
}

const fixedNow = () => new Date("2026-06-06T00:00:00.000Z");

describe("createSubmission", () => {
  it("stores a valid PNG under a non-guessable key and persists only the key", async () => {
    const res = await createSubmission(input(), claims, { storage, db, now: fixedNow });

    expect(res.submissionId).toBe("sub-1");
    expect(res.status).toBe("UPLOADED");
    // key is submissions/<uuid>.png — never the client filename.
    expect(res.storageKey).toMatch(/^submissions\/[0-9a-f-]{36}\.png$/);

    // bytes streamed to storage under that key with the verified content type.
    expect(storage.put).toHaveBeenCalledTimes(1);
    const [key, body, opts] = storage.put.mock.calls[0];
    expect(key).toBe(res.storageKey);
    expect(body).toBe(PNG);
    expect(opts).toEqual({ contentType: "image/png" });

    // DB row carries the storage KEY (not the bytes) + retention = now + 30d.
    expect(db.insert).toHaveBeenCalledTimes(1);
    const [, row] = db.insert.mock.calls[0];
    expect(row.storageKey).toBe(res.storageKey);
    expect(row.studentId).toBe("stu-1");
    expect(row.mimeType).toBe("image/png");
    expect(row.sizeBytes).toBe(PNG.length);
    expect((row as Record<string, unknown>).bytes).toBeUndefined();
    expect(row.retentionExpiresAt).toBe(new Date("2026-07-06T00:00:00.000Z").toISOString());
  });

  it("accepts a valid PDF and stores it under a .pdf key", async () => {
    const res = await createSubmission(
      input({ declaredMimeType: "application/pdf", bytes: PDF, sizeBytes: PDF.length }),
      claims,
      { storage, db, now: fixedNow },
    );
    expect(res.storageKey).toMatch(/^submissions\/[0-9a-f-]{36}\.pdf$/);
    const [, body, opts] = storage.put.mock.calls[0];
    expect(body).toBe(PDF);
    expect(opts).toEqual({ contentType: "application/pdf" });
    const [, row] = db.insert.mock.calls[0];
    expect(row.mimeType).toBe("application/pdf");
  });

  it("rejects a spoofed PDF (declared application/pdf but bytes are text) with 415", async () => {
    await expect(
      createSubmission(input({ declaredMimeType: "application/pdf", bytes: TEXT }), claims, { storage, db }),
    ).rejects.toMatchObject({ status: 415 });
    expect(storage.put).not.toHaveBeenCalled();
  });

  it("rejects an oversized image with 413 and stores nothing", async () => {
    await expect(
      createSubmission(input({ sizeBytes: MAX_SUBMISSION_IMAGE_BYTES + 1 }), claims, { storage, db }),
    ).rejects.toMatchObject({ status: 413 });
    expect(storage.put).not.toHaveBeenCalled();
    expect(db.insert).not.toHaveBeenCalled();
  });

  it("rejects a disallowed declared type with 415", async () => {
    await expect(
      createSubmission(input({ declaredMimeType: "image/gif" }), claims, { storage, db }),
    ).rejects.toMatchObject({ status: 415 });
    expect(storage.put).not.toHaveBeenCalled();
  });

  it("rejects a spoofed MIME (declared image/png but bytes are text) with 415", async () => {
    await expect(
      createSubmission(input({ bytes: TEXT }), claims, { storage, db }),
    ).rejects.toBeInstanceOf(UploadError);
    await expect(
      createSubmission(input({ bytes: TEXT }), claims, { storage, db }),
    ).rejects.toMatchObject({ status: 415 });
    expect(storage.put).not.toHaveBeenCalled();
    expect(db.insert).not.toHaveBeenCalled();
  });

  it("rejects real PNG bytes declared as text/plain with 415", async () => {
    await expect(
      createSubmission(input({ declaredMimeType: "text/plain" }), claims, { storage, db }),
    ).rejects.toMatchObject({ status: 415 });
  });
});
