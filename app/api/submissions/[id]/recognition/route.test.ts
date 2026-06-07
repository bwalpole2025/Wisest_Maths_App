import { describe, it, expect } from "vitest";
import { NextRequest } from "next/server";
import { GET } from "./route";

describe("GET /api/submissions/[id]/recognition auth guard", () => {
  it("rejects an unauthenticated request with 401", async () => {
    const req = new NextRequest("http://localhost/api/submissions/sub-1/recognition");
    const res = await GET(req, { params: Promise.resolve({ id: "sub-1" }) });
    expect(res.status).toBe(401);
  });
});
