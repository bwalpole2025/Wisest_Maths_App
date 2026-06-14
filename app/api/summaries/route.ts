/**
 * GET /api/summaries?topicRef=am1a[&limit=24&offset=0]
 *
 * Slim, paginated, workedSolution-free question summaries for browse/list views.
 *
 * This route deliberately does NOT import the question bank — it reads the
 * precomputed lib/data/summaries.generated.json via fs. Importing the bank costs
 * ~14s on a cold server / dev recompile (983 modules); this route compiles in
 * milliseconds and answers from one cached JSON read, so browsing loads fast.
 * Full questions (with workedSolution) are served by /api/questions.
 */

import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/rateLimit";
import { getSummariesByTopicRef } from "@/lib/data/questionSummaries";

const CACHE_HEADERS = { "Cache-Control": "private, max-age=300, stale-while-revalidate=86400" };
const MAX_LIMIT = 100;

function clampInt(raw: string | null, fallback: number, max: number): number {
  const n = Number.parseInt(raw ?? "", 10);
  if (!Number.isFinite(n) || n < 0) return fallback;
  return Math.min(n, max);
}

export async function GET(request: NextRequest) {
  const session = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!session) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }
  const rate = await checkRateLimit(session.sub, "global");
  if (!rate.allowed) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  const params = request.nextUrl.searchParams;
  const topicRef = params.get("topicRef");
  if (!topicRef) {
    return NextResponse.json({ error: "Provide topicRef." }, { status: 400 });
  }

  const limit = clampInt(params.get("limit"), MAX_LIMIT, MAX_LIMIT);
  const offset = clampInt(params.get("offset"), 0, Number.MAX_SAFE_INTEGER);
  const { items, total } = getSummariesByTopicRef(topicRef, { limit, offset });
  return NextResponse.json({ questions: items, total }, { headers: CACHE_HEADERS });
}
