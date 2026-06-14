// SERVER-ONLY. Slim, workedSolution-free question summaries for browse/list
// views. The precomputed map (lib/data/summaries.generated.json) is read from
// disk at runtime with fs — deliberately NOT `import`ed — so the 4MB file never
// enters the webpack module graph and never gets bundled/compiled into a route.
// Importing the ~24MB question bank costs ~14s on a cold server / dev recompile
// (983 modules); this reads one JSON file once (cached in module scope), so
// browsing answers fast. Regenerate after adding questions:
//   node scripts/gen-summaries.js   (or: npm run gen:summaries)
import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";

import type { QuestionSummary } from "@/lib/types";
import { paginate } from "@/lib/data/questionSummary";

let BY_REF: Record<string, QuestionSummary[]> | null = null;

function load(): Record<string, QuestionSummary[]> {
  if (BY_REF) return BY_REF;
  const file = join(process.cwd(), "lib/data/summaries.generated.json");
  BY_REF = JSON.parse(readFileSync(file, "utf8")) as Record<string, QuestionSummary[]>;
  return BY_REF;
}

/** Slim, paginated summaries for one topicRef — no question-bank import. */
export function getSummariesByTopicRef(
  ref: string,
  opts: { limit?: number; offset?: number } = {},
): { items: QuestionSummary[]; total: number } {
  return paginate(load()[ref] ?? [], opts.limit, opts.offset);
}
