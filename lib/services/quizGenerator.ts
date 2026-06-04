/**
 * Quiz generation service.
 *
 * Samples the in-memory question bank (lib/data/questions → Question[]) to
 * build a quiz that matches a teacher's exact configuration: for each selected
 * topic, exact counts per difficulty band (Foundation / Standard / Challenge).
 *
 * Pure and side-effect free — the API route is responsible for auth, validation
 * and any persistence. Sampling is reproducible: pass a `seed` and the same
 * config yields the same quiz (useful for "regenerate identical" and tests).
 *
 * When a pool is too small to satisfy a quota, the generator takes everything
 * available and records a `shortfall` warning rather than throwing — the caller
 * decides whether that's acceptable.
 */

import { questions as allQuestions } from "@/lib/data/questions";
import { getQuestionsForCourse } from "@/lib/data/courseQuestions";
import type { Question, QuestionDifficulty, Course } from "@/lib/types";

export const DIFFICULTIES: QuestionDifficulty[] = ["Foundation", "Standard", "Challenge"];

/** Exact per-difficulty counts requested for one topic. */
export interface TopicQuota {
  topicRef: string;
  Foundation: number;
  Standard: number;
  Challenge: number;
}

export interface QuizConfig {
  title: string;
  course: Course;
  topics: TopicQuota[];
  /** Optional reproducible-sampling seed. */
  seed?: number;
  /** Shuffle the final question order across topics (default true). */
  shuffle?: boolean;
}

/** A shortfall: a quota the bank couldn't fully satisfy. */
export interface QuotaWarning {
  topicRef: string;
  difficulty: QuestionDifficulty;
  requested: number;
  available: number;
}

export interface GeneratedQuiz {
  questions: Question[];
  requestedTotal: number;
  fulfilledTotal: number;
  warnings: QuotaWarning[];
}

/* ── deterministic RNG (mulberry32) ──────────────────────────────────── */

function makeRng(seed: number): () => number {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Fisher–Yates shuffle (returns a new array; does not mutate input). */
function shuffled<T>(items: readonly T[], rng: () => number): T[] {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/* ── sampling ────────────────────────────────────────────────────────── */

/**
 * Build a quiz from a config by sampling without replacement from the bank.
 * `pool` defaults to the questions belonging to the config's course.
 */
export function generateQuiz(config: QuizConfig, pool?: Question[]): GeneratedQuiz {
  const seed = config.seed ?? ((Math.random() * 2 ** 32) >>> 0);
  const rng = makeRng(seed);
  const bank = pool ?? getQuestionsForCourse(config.course);

  // Index the bank by topic+difficulty once, so each quota is an O(1) lookup.
  const byKey = new Map<string, Question[]>();
  for (const q of bank) {
    const key = `${q.topicRef}::${q.difficulty}`;
    const arr = byKey.get(key);
    if (arr) arr.push(q);
    else byKey.set(key, [q]);
  }

  const picked: Question[] = [];
  const usedIds = new Set<string>();
  const warnings: QuotaWarning[] = [];
  let requestedTotal = 0;

  for (const quota of config.topics) {
    for (const difficulty of DIFFICULTIES) {
      const want = Math.max(0, Math.floor(quota[difficulty] ?? 0));
      if (want === 0) continue;
      requestedTotal += want;

      // Available = matching questions not already chosen (no duplicates even
      // if the same topic appears twice in the config).
      const candidates = (byKey.get(`${quota.topicRef}::${difficulty}`) ?? []).filter(
        (q) => !usedIds.has(q.id),
      );
      const take = shuffled(candidates, rng).slice(0, want);
      for (const q of take) {
        usedIds.add(q.id);
        picked.push(q);
      }
      if (take.length < want) {
        warnings.push({
          topicRef: quota.topicRef,
          difficulty,
          requested: want,
          available: take.length,
        });
      }
    }
  }

  const ordered = config.shuffle === false ? picked : shuffled(picked, rng);
  return {
    questions: ordered,
    requestedTotal,
    fulfilledTotal: ordered.length,
    warnings,
  };
}

/** Look up a single question across the whole bank (used by the grader). */
export function getQuestionById(id: string): Question | undefined {
  return allQuestions.find((q) => q.id === id);
}

/**
 * How many questions exist for a (topicRef, difficulty) pair across the whole
 * bank — lets the UI cap inputs and warn before a generate request is sent.
 */
export function poolSizes(course: Course): Record<string, Record<QuestionDifficulty, number>> {
  const out: Record<string, Record<QuestionDifficulty, number>> = {};
  for (const q of getQuestionsForCourse(course)) {
    const row = (out[q.topicRef] ??= { Foundation: 0, Standard: 0, Challenge: 0 });
    row[q.difficulty] += 1;
  }
  return out;
}
