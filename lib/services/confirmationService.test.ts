import { describe, it, expect, vi } from "vitest";
import {
  getRecognitionForConfirmation,
  confirmTranscription,
  type ConfirmationStore,
} from "./confirmationService";
import type { SessionClaims } from "@/lib/auth/session";
import type { SubmissionStatus } from "@/lib/types";

const OWNER = "stu-1";
const claims: Pick<SessionClaims, "sub" | "role" | "schoolId" | "email"> = {
  sub: OWNER,
  role: "student",
  schoolId: undefined,
  email: "s@example.com",
};
const otherClaims = { ...claims, sub: "stu-2" };

type View = Awaited<ReturnType<ConfirmationStore["getView"]>>;

function makeStore(view: View, ownerSub = OWNER) {
  const confirm = vi.fn(async () => {});
  // getView returns the row only to the owner — models RLS row-scoping.
  const getView = vi.fn(async (_id: string, c: { sub: string }) => (c.sub === ownerSub ? view : null));
  const store: ConfirmationStore = { getView, confirm };
  return { store, confirm, getView };
}

const recognition = {
  rawLatex: "x = 3",
  renderedMarkdown: null,
  overallConfidence: 0.95,
  lowConfidence: false,
};

function view(status: SubmissionStatus, over: Partial<NonNullable<View>> = {}): NonNullable<View> {
  return { status, recognition, confirmedLatex: null, ...over };
}

describe("getRecognitionForConfirmation", () => {
  it("returns the recognised latex for an AWAITING_CONFIRMATION submission", async () => {
    const { store } = makeStore(view("AWAITING_CONFIRMATION"));
    const res = await getRecognitionForConfirmation("sub-1", claims, { store });
    expect(res.ok).toBe(true);
    if (!res.ok) return;
    expect(res.body.submissionLatex).toBe("x = 3");
    expect(res.body.renderedMarkdownOrLatexForDisplay).toBe("x = 3");
    expect(res.body.lowConfidence).toBe(false);
    expect(res.body.status).toBe("AWAITING_CONFIRMATION");
  });

  it("409-conflicts for a wrong state", async () => {
    const { store } = makeStore(view("FAILED", { recognition: null }));
    const res = await getRecognitionForConfirmation("sub-1", claims, { store });
    expect(res).toMatchObject({ ok: false, code: "conflict", status: "FAILED" });
  });

  it("returns the confirmed version once CONFIRMED", async () => {
    const { store } = makeStore(view("CONFIRMED", { confirmedLatex: "x = 4" }));
    const res = await getRecognitionForConfirmation("sub-1", claims, { store });
    expect(res.ok).toBe(true);
    if (!res.ok) return;
    expect(res.body.submissionLatex).toBe("x = 4");
    expect(res.body.status).toBe("CONFIRMED");
  });

  it("404s when another user requests the submission (ownership)", async () => {
    const { store } = makeStore(view("AWAITING_CONFIRMATION"));
    const res = await getRecognitionForConfirmation("sub-1", otherClaims, { store });
    expect(res).toMatchObject({ ok: false, code: "not_found" });
  });
});

describe("confirmTranscription", () => {
  it("sets editedByStudent=true for edited latex and moves to CONFIRMED", async () => {
    const { store, confirm } = makeStore(view("AWAITING_CONFIRMATION"));
    const res = await confirmTranscription("sub-1", claims, "x = 4", { store });
    expect(res).toEqual({ ok: true, status: "CONFIRMED" });
    expect(confirm).toHaveBeenCalledWith("sub-1", claims, { confirmedLatex: "x = 4", editedByStudent: true });
  });

  it("sets editedByStudent=false when the student keeps the OCR output", async () => {
    const { confirm, store } = makeStore(view("AWAITING_CONFIRMATION"));
    await confirmTranscription("sub-1", claims, "x = 3", { store });
    expect(confirm).toHaveBeenCalledWith("sub-1", claims, { confirmedLatex: "x = 3", editedByStudent: false });
  });

  it("is idempotent when already CONFIRMED (no duplicate write)", async () => {
    const { store, confirm } = makeStore(view("CONFIRMED", { confirmedLatex: "x = 3" }));
    const res = await confirmTranscription("sub-1", claims, "x = 3", { store });
    expect(res).toEqual({ ok: true, status: "CONFIRMED" });
    expect(confirm).not.toHaveBeenCalled();
  });

  it("409-conflicts from a non-confirmable state", async () => {
    const { store, confirm } = makeStore(view("UPLOADED", { recognition: null }));
    const res = await confirmTranscription("sub-1", claims, "x = 3", { store });
    expect(res).toMatchObject({ ok: false, code: "conflict", status: "UPLOADED" });
    expect(confirm).not.toHaveBeenCalled();
  });

  it("409-conflicts when confirming before recognition completes (RECOGNISING)", async () => {
    const { store, confirm } = makeStore(view("RECOGNISING", { recognition: null }));
    const res = await confirmTranscription("sub-1", claims, "x = 3", { store });
    expect(res).toMatchObject({ ok: false, code: "conflict", status: "RECOGNISING" });
    expect(confirm).not.toHaveBeenCalled();
  });

  it("rejects empty confirmed latex", async () => {
    const { store, confirm } = makeStore(view("AWAITING_CONFIRMATION"));
    const res = await confirmTranscription("sub-1", claims, "   ", { store });
    expect(res).toMatchObject({ ok: false, code: "empty" });
    expect(confirm).not.toHaveBeenCalled();
  });

  it("404s when another user tries to confirm (ownership)", async () => {
    const { store, confirm } = makeStore(view("AWAITING_CONFIRMATION"));
    const res = await confirmTranscription("sub-1", otherClaims, "x = 4", { store });
    expect(res).toMatchObject({ ok: false, code: "not_found" });
    expect(confirm).not.toHaveBeenCalled();
  });
});
