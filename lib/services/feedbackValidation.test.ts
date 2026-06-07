import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { hintLeaksAnswer, findLeakyFeedbackRules } from "./feedbackValidation";
import type { Question } from "@/lib/types";

function q(finalAnswer: string, rules: Question["feedbackRules"]): Question {
  return {
    id: "t",
    topicRef: "t",
    topicTitle: "t",
    difficulty: "Standard",
    questionText: "",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    workedSolution: { steps: [], finalAnswer, canonicalAnswer: finalAnswer },
    feedbackRules: rules,
  };
}

describe("feedbackValidation — a hint must never leak the answer", () => {
  const question = q("2\\sqrt{3}", [
    { matchAnswer: "sqrt(12)", misconception: "unsimplified", hint: "Can the surd be simplified further?" },
    { matchAnswer: "6", misconception: "multiplied", hint: "The answer is 2\\sqrt{3}, not 6." }, // LEAK
  ]);

  it("flags a hint that contains the final answer", () => {
    expect(hintLeaksAnswer("The answer is 2\\sqrt{3}, not 6.", question)).toBe(true);
  });
  it("passes a hint that only nudges", () => {
    expect(hintLeaksAnswer("Can the surd be simplified further?", question)).toBe(false);
  });
  it("findLeakyFeedbackRules returns the leaking rule index", () => {
    expect(findLeakyFeedbackRules(question)).toEqual([
      { index: 1, hint: "The answer is 2\\sqrt{3}, not 6." },
    ]);
  });
});

describe("offline authoring script isolation", () => {
  it("no runtime file under lib/ or app/ imports the draft-distractors script", () => {
    const needle = ["draft", "distractors"].join("-"); // avoid a literal self-match
    const offenders: string[] = [];
    const scan = (dir: string) => {
      for (const name of readdirSync(dir)) {
        const full = join(dir, name);
        if (statSync(full).isDirectory()) {
          scan(full);
        } else if (/\.(ts|tsx)$/.test(name) && !/\.test\.(ts|tsx)$/.test(name)) {
          if (readFileSync(full, "utf8").includes(needle)) offenders.push(full);
        }
      }
    };
    scan("lib");
    scan("app");
    expect(offenders).toEqual([]);
  });
});
