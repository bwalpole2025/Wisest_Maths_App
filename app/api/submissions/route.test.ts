import { describe, it, expect } from "vitest";
import { NextRequest } from "next/server";
import { POST } from "./route";

describe("POST /api/submissions auth guard", () => {
  it("rejects an unauthenticated request with 401 (before any storage/DB work)", async () => {
    const req = new NextRequest("http://localhost/api/submissions", { method: "POST" });
    const res = await POST(req);
    expect(res.status).toBe(401);
    const body = await res.json();
    expect(body.error).toMatch(/auth/i);
  });
});
