import { describe, it, expect } from "vitest";
import { NextRequest } from "next/server";
import { POST } from "./route";

describe("POST /api/submissions/[id]/confirm auth guard", () => {
  it("rejects an unauthenticated request with 401", async () => {
    const req = new NextRequest("http://localhost/api/submissions/sub-1/confirm", {
      method: "POST",
      body: JSON.stringify({ confirmedLatex: "x = 3" }),
      headers: { "Content-Type": "application/json" },
    });
    const res = await POST(req, { params: Promise.resolve({ id: "sub-1" }) });
    expect(res.status).toBe(401);
  });
});
