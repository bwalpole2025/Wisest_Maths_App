import { describe, it, expect } from "vitest";
import { NextRequest } from "next/server";
import { POST } from "./route";

describe("POST /api/check-working auth guard", () => {
  it("rejects an unauthenticated request with 401", async () => {
    const req = new NextRequest("http://localhost/api/check-working", {
      method: "POST",
      body: JSON.stringify({ questionId: "gn12-001", working: "x = 3" }),
      headers: { "Content-Type": "application/json" },
    });
    const res = await POST(req);
    expect(res.status).toBe(401);
    const body = await res.json();
    expect(body.error).toMatch(/auth/i);
  });
});
