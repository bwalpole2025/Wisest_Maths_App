/**
 * Bank self-classification audit: run `classify` over every question using its
 * OWN stored correct answer as the student input. A correctly-formed question
 * must classify as correct; a failure flags a malformed answer/answerType.
 *
 * Deterministic and offline — uses the SYNC `classify` (math.js sampling only,
 * no network). Scope: only REAL malformations are problems. An `expression`
 * question whose sole answer is unparseable prose (no `canonicalAnswer`) is
 * expected-non-gradable (the engine was never meant to grade it), so it is
 * counted but not flagged.
 */
import type { Question } from "@/lib/types";
import { classify } from "./diagnosis";
import { canonicalFor } from "./symbolicGrading";

export interface AuditProblem {
  id: string;
  topicRef: string;
  answerType: Question["answerType"];
  reason: string;
  canonical: string;
}

export interface AuditReport {
  total: number;
  ok: number;
  expectedNonGradable: number;
  problems: AuditProblem[];
}

type ClassifyFn = typeof classify;

/** Audit one question. ok=true when its stored answer self-classifies. */
export function auditQuestion(
  q: Question,
  classifyFn: ClassifyFn = classify,
): { ok: boolean; expectedNonGradable?: boolean; problem?: AuditProblem } {
  const canonical = canonicalFor(q.workedSolution);
  const res = classifyFn(canonical, q);
  if (res.correct) return { ok: true };

  // Prose `expression` answers with no machine-parseable canonical were never
  // meant to be auto-graded — expected, not a malformation.
  if (q.answerType === "expression" && !q.workedSolution.canonicalAnswer && res.reason === "unparseable") {
    return { ok: false, expectedNonGradable: true };
  }

  return {
    ok: false,
    problem: {
      id: q.id,
      topicRef: q.topicRef,
      answerType: q.answerType,
      reason: res.reason ?? "not-equivalent",
      canonical,
    },
  };
}

export function auditBank(questions: Question[], classifyFn: ClassifyFn = classify): AuditReport {
  let ok = 0;
  let expectedNonGradable = 0;
  const problems: AuditProblem[] = [];
  for (const q of questions) {
    const r = auditQuestion(q, classifyFn);
    if (r.ok) ok++;
    else if (r.expectedNonGradable) expectedNonGradable++;
    else if (r.problem) problems.push(r.problem);
  }
  return { total: questions.length, ok, expectedNonGradable, problems };
}
