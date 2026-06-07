import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/auth/session", () => ({
  SESSION_COOKIE: "mathsapp-session",
  verifySessionToken: vi.fn(),
}));
vi.mock("@/lib/services/quizGenerator", () => ({
  getQuestionById: vi.fn(),
}));

import { NextRequest } from "next/server";
import { POST } from "./route";
import { verifySessionToken } from "@/lib/auth/session";
import { getQuestionById } from "@/lib/services/quizGenerator";
import type { Question, SolutionStep } from "@/lib/types";

const mockVerify = vi.mocked(verifySessionToken);
const mockGetQ = vi.mocked(getQuestionById);

function steps(n: number): SolutionStep[] {
  return Array.from({ length: n }, (_, i) => ({
    stepNumber: i + 1,
    description: `step ${i + 1}`,
    workingLatex: `x_${i + 1}`,
    explanation: "",
  }));
}
function q(id: string, canonicalAnswer: string, n: number): Question {
  return {
    id,
    topicRef: "t",
    topicTitle: "t",
    difficulty: "Standard",
    questionText: "",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    answerType: "expression",
    workedSolution: { steps: steps(n), finalAnswer: canonicalAnswer, canonicalAnswer },
  };
}

function ctx(id: string) {
  return { params: Promise.resolve({ id }) };
}
function req(body: unknown, cookie?: string): NextRequest {
  return new NextRequest("http://localhost/api/questions/q1/attempt", {
    method: "POST",
    headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) },
    body: JSON.stringify(body),
  });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sess = (sub: string) => ({ sub, role: "student", email: "", schoolId: "" }) as any;

describe("POST /api/questions/[id]/attempt", () => {
  beforeEach(() => {
    mockVerify.mockReset();
    mockGetQ.mockReset();
  });

  it("401 without a session", async () => {
    mockVerify.mockResolvedValue(null);
    const res = await POST(req({ answer: "x" }, "mathsapp-session=bad"), ctx("q1"));
    expect(res.status).toBe(401);
  });

  it("400 on a bad body", async () => {
    mockVerify.mockResolvedValue(sess("s"));
    const res = await POST(req({}, "mathsapp-session=good"), ctx("q1"));
    expect(res.status).toBe(400);
  });

  it("404 for an unknown question", async () => {
    mockVerify.mockResolvedValue(sess("s"));
    mockGetQ.mockReturnValue(undefined);
    const res = await POST(req({ answer: "x" }, "mathsapp-session=good"), ctx("nope"));
    expect(res.status).toBe(404);
  });

  it("strips the internal misconception tag from the payload", async () => {
    mockVerify.mockResolvedValue(sess("stu-strip"));
    mockGetQ.mockReturnValue(q("q1", "x^2", 3));
    const res = await POST(req({ answer: "-(x^2)" }, "mathsapp-session=good"), ctx("q1"));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.source).toBe("generic-transform"); // a targeted hint fired
    expect(data.hint).toBeTruthy();
    expect("misconception" in data).toBe(false); // …but its tag is never sent to the student
  });

  it("enforces ownership: another student's attempts don't share state", async () => {
    mockGetQ.mockReturnValue(q("qOwn", "42", 3));

    mockVerify.mockResolvedValue(sess("stu-A"));
    await POST(req({ answer: "5" }, "mathsapp-session=good"), ctx("qOwn")); // A: reveals index 0
    const a2 = await (await POST(req({ answer: "6" }, "mathsapp-session=good"), ctx("qOwn"))).json();
    expect(a2.revealedStep.index).toBe(1); // A advanced to index 1

    mockVerify.mockResolvedValue(sess("stu-B"));
    const b1 = await (await POST(req({ answer: "5" }, "mathsapp-session=good"), ctx("qOwn"))).json();
    expect(b1.revealedStep.index).toBe(0); // B starts fresh — A's progress is not visible
  });

  it("makes no external/LLM call on the attempt path", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    try {
      mockVerify.mockResolvedValue(sess("stu-net"));
      mockGetQ.mockReturnValue(q("qNet", "42", 3));
      await POST(req({ answer: "5" }, "mathsapp-session=good"), ctx("qNet"));
      expect(fetchSpy).not.toHaveBeenCalled();
    } finally {
      fetchSpy.mockRestore();
    }
  });
});
