/**
 * Bank self-classification audit (run: `npm run audit:banks`).
 *
 * Classifies every question in every bank using its OWN stored correct answer as
 * the student input — a well-formed question must classify as correct. Prints a
 * problems-only report (malformed answer/answerType), in the style of
 * verify-gcse / wisest-question-checker, and fails (non-zero exit) if any real
 * malformation is found. Deterministic + offline (sync classify, no network).
 *
 * Not part of `npm test` (the `.audit.ts` name is excluded from the default
 * test-file glob; this runs only under vitest.audit.config.ts).
 */
import { describe, it, expect } from "vitest";
import { questions } from "@/lib/data/questions";
import { auditBank } from "@/lib/services/bankAudit";

describe("bank self-classification audit", () => {
  it("every well-formed question's stored answer self-classifies", () => {
    const report = auditBank(questions);

    if (report.problems.length) {
      const byReason = new Map<string, number>();
      console.error(`\n✗ bank audit — ${report.problems.length} malformed question(s):\n`);
      for (const p of report.problems) {
        byReason.set(p.reason, (byReason.get(p.reason) ?? 0) + 1);
        const c = p.canonical.length > 60 ? `${p.canonical.slice(0, 57)}…` : p.canonical;
        console.error(`  ✗ ${p.id} [${p.answerType}] ${p.reason} — canonical: "${c}"`);
      }
      console.error(`\n  by reason: ${[...byReason].map(([r, n]) => `${r}=${n}`).join(", ")}`);
    }

    console.log(
      `\nbank audit — total ${report.total}, ok ${report.ok}, ` +
        `expected-non-gradable ${report.expectedNonGradable}, problems ${report.problems.length}\n`,
    );

    expect(report.problems).toEqual([]);
  });
});
