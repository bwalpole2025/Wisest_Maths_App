/**
 * The single diagnosis entry point: runs Layers 0–3 in a fixed order, first
 * match wins, and returns one canonical `DiagnosisResult` regardless of which
 * layer fired. AI-free — it uses only the in-process math.js engine plus the
 * OPTIONAL internal SymPy sidecar; it never calls an LLM.
 *
 *   Layer 0  classify        → correct        ⇒ { correct:true, source:"exact" }
 *            (unparseable)    → garbage input  ⇒ source:"unparseable"
 *   Layer 1  diagnoseGeneric  → generic slip   ⇒ source:"generic-transform" (+hint)
 *   Layer 2  diagnoseSpecific → authored rule  ⇒ source:"distractor" (+hint)
 *   Layer 3  disclosure       → reveal step    ⇒ source:"disclosure"
 *
 * `diagnose` is pure over the supplied attempt state. `diagnoseAttempt` wraps it
 * with the persisted AttemptStore (load → diagnose → persist) and records the
 * misconception tag for analytics. The route strips `misconception` before
 * returning, so it never reaches the student.
 */
import type { Question, SolutionStep } from "@/lib/types";
import { disclosurePolicy } from "@/lib/env";
import { classifyAsync, diagnoseGenericAsync, diagnoseSpecific } from "./diagnosis";
import type { SymbolicOracle } from "./symbolicClient";
import { type AttemptStore, type AttemptClaims, getAttemptStore } from "./attemptStore";

export interface DiagnosisResult {
  correct: boolean;
  source: "exact" | "generic-transform" | "distractor" | "disclosure" | "unparseable";
  /** Internal misconception tag for analytics. Stripped from the HTTP payload. */
  misconception?: string;
  /** Student-facing nudge — never the answer. */
  hint?: string;
  /** Layer-3 progressive disclosure: the single step revealed this attempt. */
  revealedStep?: { index: number; content: string };
  fullSolutionUnlocked?: boolean;
}

export interface DisclosurePolicy {
  firstRevealAtWrongCount: number;
  stepsPerReveal: number;
}

/** Attempt progress this diagnosis is computed against. */
export interface AttemptProgress {
  wrongAttempts: number;
  revealedStepCount: number;
}

export interface MisconceptionEvent {
  topicRef: string;
  questionId: string;
  misconception: string;
  source: DiagnosisResult["source"];
}
export type MisconceptionRecorder = (evt: MisconceptionEvent) => void;

// Default analytics sink: a structured per-topic log line. Deliberately carries
// NO student identifier (matches the pipeline's "no student id at info level").
const defaultRecorder: MisconceptionRecorder = (evt) => {
  console.info("[diagnosis-event]", JSON.stringify(evt));
};

/**
 * Pure disclosure step: reveals strictly in order, capped at totalSteps, so the
 * final-answer (last) step only ever appears once every prior step has. Called
 * only on a wrong attempt with no targeted hint.
 */
export function applyDisclosure(
  prevRevealed: number,
  wrongAttempts: number,
  totalSteps: number,
  policy: DisclosurePolicy,
): number {
  if (wrongAttempts < policy.firstRevealAtWrongCount) return prevRevealed;
  return Math.min(prevRevealed + policy.stepsPerReveal, totalSteps);
}

function stepToText(s: SolutionStep): string {
  return [s.description, s.workingLatex, s.explanation]
    .map((x) => (x ?? "").trim())
    .filter(Boolean)
    .join(" — ");
}

interface DiagnoseOpts {
  seed?: number;
  oracle?: SymbolicOracle | null;
  policy?: DisclosurePolicy;
}

/** Run all layers in fixed order against the given attempt state; first wins. */
export async function diagnose(
  studentInput: string,
  question: Question,
  attemptState: AttemptProgress,
  opts: DiagnoseOpts = {},
): Promise<DiagnosisResult> {
  const { seed, oracle } = opts;
  const policy = opts.policy ?? disclosurePolicy();

  // Layer 0 — correctness.
  const verdict = await classifyAsync(studentInput, question, { seed, oracle });
  if (verdict.correct) return { correct: true, source: "exact" };
  if (verdict.reason === "unparseable") return { correct: false, source: "unparseable" };

  // Layer 1 — generic misconception transforms.
  const generic = await diagnoseGenericAsync(studentInput, question, { seed, oracle });
  if (generic) {
    return { correct: false, source: "generic-transform", misconception: generic.misconception, hint: generic.hint };
  }

  // Layer 2 — authored per-question distractors.
  const specific = diagnoseSpecific(studentInput, question, { seed });
  if (specific) {
    return { correct: false, source: "distractor", misconception: specific.misconception, hint: specific.hint };
  }

  // Layer 3 — progressive disclosure of the worked solution.
  const total = question.workedSolution.steps.length;
  const next = applyDisclosure(attemptState.revealedStepCount, attemptState.wrongAttempts + 1, total, policy);
  if (next > attemptState.revealedStepCount && next > 0) {
    const index = next - 1;
    return {
      correct: false,
      source: "disclosure",
      revealedStep: { index, content: stepToText(question.workedSolution.steps[index]) },
      fullSolutionUnlocked: next >= total,
    };
  }
  // Below the first-reveal threshold (or nothing to reveal): prompt a retry.
  return {
    correct: false,
    source: "disclosure",
    fullSolutionUnlocked: total > 0 && attemptState.revealedStepCount >= total,
  };
}

interface DiagnoseAttemptOpts extends DiagnoseOpts {
  store?: AttemptStore;
  recordMisconception?: MisconceptionRecorder;
}

/**
 * Store-backed orchestrator the route calls: loads the caller's attempt state,
 * runs `diagnose`, persists the updated state (correct ⇒ reset), and records the
 * misconception tag for analytics. Returns the full result (incl. misconception);
 * the route strips it from the student-facing payload.
 */
export async function diagnoseAttempt(
  claims: AttemptClaims,
  studentInput: string,
  question: Question,
  opts: DiagnoseAttemptOpts = {},
): Promise<DiagnosisResult> {
  const store = opts.store ?? getAttemptStore();
  const record = opts.recordMisconception ?? defaultRecorder;

  const prior = await store.load(claims, question.id);
  const state: AttemptProgress = {
    wrongAttempts: prior?.wrongAttempts ?? 0,
    revealedStepCount: prior?.revealedStepCount ?? 0,
  };

  const result = await diagnose(studentInput, question, state, {
    seed: opts.seed,
    oracle: opts.oracle,
    policy: opts.policy,
  });

  if (result.correct) {
    await store.reset(claims, question.id); // a correct answer closes the attempt
  } else {
    const wrongAttempts = state.wrongAttempts + 1;
    const revealedStepCount = result.revealedStep ? result.revealedStep.index + 1 : state.revealedStepCount;
    await store.save(claims, { questionId: question.id, wrongAttempts, revealedStepCount });
  }

  if (result.misconception) {
    record({
      topicRef: question.topicRef,
      questionId: question.id,
      misconception: result.misconception,
      source: result.source,
    });
  }
  return result;
}
