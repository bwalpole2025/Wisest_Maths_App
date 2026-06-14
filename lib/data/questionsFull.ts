// SERVER-ONLY. Full questions (with workedSolution), read from the precomputed
// lib/data/questions-full.generated.json with fs — deliberately NOT `import`ed —
// so the ~27MB bank never enters this route's webpack module graph. Importing
// the bank makes /api/questions' first (cold) compile ~3.6s in dev (1316
// modules); this reads one JSON file once (cached in module scope), so the first
// full-question load is well under 2s and every later one is ~30ms.
//
// Regenerate after adding/removing questions:
//   node scripts/gen-questions-full.js   (or: npm run gen:questions-full / gen:data)
import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";

import { topics } from "@/lib/data/topics";
import type { Course, Question } from "@/lib/types";

let BY_REF: Record<string, Question[]> | null = null;
let BY_ID: Map<string, Question> | null = null;

function load(): Record<string, Question[]> {
  if (BY_REF) return BY_REF;
  const file = join(process.cwd(), "lib/data/questions-full.generated.json");
  BY_REF = JSON.parse(readFileSync(file, "utf8")) as Record<string, Question[]>;
  BY_ID = new Map();
  for (const list of Object.values(BY_REF)) {
    for (const q of list) BY_ID.set(q.id, q);
  }
  return BY_REF;
}

/** Single full question by id (or undefined). */
export function getFullQuestionById(id: string): Question | undefined {
  load();
  return BY_ID!.get(id);
}

/** All full questions for one topicRef (bank's sorted order). */
export function getFullQuestionsByTopicRef(ref: string): Question[] {
  return load()[ref] ?? [];
}

/** All full questions for a course (topics → refs → questions; topics is bank-free). */
export function getFullQuestionsForCourse(course: Course): Question[] {
  const byRef = load();
  const out: Question[] = [];
  for (const t of topics) {
    if (t.course !== course) continue;
    const list = byRef[t.ref];
    if (list) out.push(...list);
  }
  return out;
}
