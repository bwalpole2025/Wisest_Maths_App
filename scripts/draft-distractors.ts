/**
 * OFFLINE distractor-authoring helper — NOT part of the request path.
 *
 * Calls the Anthropic API ONCE per question to PROPOSE the 5 most common wrong
 * answers and the misconception behind each, then writes DRAFT FeedbackRule
 * objects to `<bank>.distractors.draft.json` for HUMAN REVIEW. It NEVER writes
 * the live bank. After reviewing, hand-merge approved rules into each question's
 * `feedbackRules` (and make sure no hint contains the answer — see
 * lib/services/feedbackValidation.ts, which fails CI on a leak).
 *
 * Runtime code must NEVER import this file. It is run manually only:
 *
 *   npx tsx scripts/draft-distractors.ts <path/to/bank.ts> [--limit N] [--dry-run]
 *
 * Needs ANTHROPIC_API_KEY in the environment (unless --dry-run, which emits
 * clearly-marked placeholders so the file-writing path can be exercised offline).
 */
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type { Question, FeedbackRule } from "@/lib/types";

const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_VERSION = "2023-06-01";
const MODEL = process.env.ANTHROPIC_MARKER_MODEL ?? "claude-opus-4-8";

type DraftRule = Pick<FeedbackRule, "matchAnswer" | "misconception" | "hint">;

interface Args {
  bankPath: string;
  limit?: number;
  dryRun: boolean;
}

function parseArgs(argv: string[]): Args {
  const args = argv.slice(2);
  const bankPath = args.find((a) => !a.startsWith("--"));
  if (!bankPath) {
    console.error(
      "Usage: npx tsx scripts/draft-distractors.ts <bank.ts> [--limit N] [--dry-run]",
    );
    process.exit(1);
  }
  const limIdx = args.indexOf("--limit");
  const limit = limIdx >= 0 ? Number(args[limIdx + 1]) : undefined;
  return { bankPath, limit, dryRun: args.includes("--dry-run") };
}

async function loadQuestions(bankPath: string): Promise<Question[]> {
  const mod = (await import(pathToFileURL(resolve(bankPath)).href)) as { questions?: Question[] };
  if (!Array.isArray(mod.questions)) {
    console.error(`No 'questions' export found in ${bankPath}`);
    process.exit(1);
  }
  return mod.questions;
}

const SYSTEM = [
  "You are helping author DIAGNOSTIC distractors for a maths question bank.",
  "Given a question and its correct answer, list the 5 most common WRONG answers a",
  "student would give, the misconception behind each, and a short student-facing hint.",
  "HARD RULE: the hint MUST NOT contain or reveal the correct answer — only nudge.",
  'Respond with STRICT JSON only and nothing else: {"distractors":[{"matchAnswer":"<expr>","misconception":"<tag>","hint":"<nudge>"}]}.',
  "matchAnswer must be a single expression written in the same notation as the answer.",
].join(" ");

async function draftFor(q: Question, apiKey: string): Promise<DraftRule[]> {
  const correct = q.workedSolution.canonicalAnswer ?? q.workedSolution.finalAnswer;
  const user =
    `Question: ${q.questionText}\nCorrect answer: ${correct}\nAnswer type: ${q.answerType}\n` +
    "Propose the 5 most common wrong answers.";
  const res = await fetch(ANTHROPIC_URL, {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": ANTHROPIC_VERSION,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1024,
      temperature: 0,
      system: SYSTEM,
      messages: [{ role: "user", content: user }],
    }),
  });
  if (!res.ok) throw new Error(`anthropic ${res.status}`);
  const data = (await res.json()) as { content?: { type?: string; text?: string }[] };
  let text = "";
  for (const p of data.content ?? []) if (p?.type === "text" && p.text) text += p.text;
  const parsed = JSON.parse(text) as { distractors?: DraftRule[] };
  return (parsed.distractors ?? []).slice(0, 5).map((d) => ({
    matchAnswer: String(d.matchAnswer ?? ""),
    misconception: String(d.misconception ?? ""),
    hint: String(d.hint ?? ""),
  }));
}

function placeholder(): DraftRule[] {
  return [
    {
      matchAnswer: "<REPLACE: a common wrong answer, same notation as the answer>",
      misconception: "<REPLACE: misconception tag>",
      hint: "<REPLACE: a nudge that must NOT contain the answer>",
    },
  ];
}

async function main(): Promise<void> {
  const { bankPath, limit, dryRun } = parseArgs(process.argv);
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!dryRun && !apiKey) {
    console.error("ANTHROPIC_API_KEY is not set. Set it, or pass --dry-run to emit placeholders.");
    process.exit(1);
  }

  const questions = await loadQuestions(bankPath);
  const slice = typeof limit === "number" && limit > 0 ? questions.slice(0, limit) : questions;

  const drafts: Record<string, DraftRule[]> = {};
  for (const q of slice) {
    try {
      drafts[q.id] = dryRun ? placeholder() : await draftFor(q, apiKey as string);
      console.log(`drafted ${q.id} (${drafts[q.id].length} rules)`);
    } catch (err) {
      drafts[q.id] = [];
      console.warn(`skip ${q.id}: ${err instanceof Error ? err.message : "error"}`);
    }
  }

  // Write next to the bank file, NEVER the bank file itself.
  const outPath = resolve(bankPath).replace(/\.ts$/, "") + ".distractors.draft.json";
  const payload = {
    _warning:
      "UNREVIEWED AI DRAFT — do NOT merge without human review. Verify every matchAnswer, " +
      "ensure no hint contains the answer, then hand-merge approved rules into the question's feedbackRules.",
    _source: bankPath,
    _model: dryRun ? "dry-run (no LLM)" : MODEL,
    drafts,
  };
  writeFileSync(outPath, JSON.stringify(payload, null, 2) + "\n");
  console.log(`\nWrote ${Object.keys(drafts).length} question drafts to ${outPath}`);
  console.log("The source bank was NOT modified. Review the draft and hand-merge approved rules.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
