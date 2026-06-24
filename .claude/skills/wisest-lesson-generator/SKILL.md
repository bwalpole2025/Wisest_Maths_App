---
name: wisest-lesson-generator
description: "Generate Guided Learning lessons for the Wisest AI Tutor platform — Brilliant-style interactive lessons (teaching cards, each ending in a mini-question) for an A-Level Maths subtopic, as a TypeScript file matching the project's Lesson schema. Trigger whenever the user asks to create, generate, author, or add a guided lesson / interactive lesson / Brilliant-style lesson for a subtopic or topic code (e.g. a1, qc3, t2, d2), or to build out Guided Learning content. Produces one Lesson per subtopic (4–6 progressive cards), grounded in that subtopic's existing question bank for correctness, and wires it into lib/data/lessons/index.ts."
---

# Wisest Guided Learning — Lesson Generator

Produces **interactive lessons** for the Wisest "Guided Learning" feature (the
`/student/learn` section). A lesson teaches one subtopic Brilliant-style: a short
sequence of teaching **cards**, each explaining one idea and ending in a
**mini-question** the student must answer. At runtime the AI tutor judges the
answer against the card's stored `expectedAnswer` and, when wrong, replies with a
guiding question instead of the answer — iterating until the student understands.

Output is always a **TypeScript file** conforming to the `Lesson` schema, ready to
drop into the codebase.

## When to use

Whenever the user wants to create/extend Guided Learning content for a subtopic —
e.g. "make a guided lesson for completing the square", "author lessons for the
Trigonometry 1 subtopics", "build out Guided Learning for Pure Year 1". Trigger on
topic codes (a1, qc3, t2, …) paired with words like lesson / guided / interactive.

## The schema (authoritative)

Defined in `lib/data/lessons/types.ts`:

```ts
interface Lesson {
  topicRef: string;      // subtopic ref, e.g. "a1" — MUST match the question bank ref
  title: string;         // subtopic title (use the Topic.title from lib/data/topics.ts)
  intro: string;         // 1–2 sentence hook framing the lesson
  cards: LessonCard[];   // 4–6 progressive cards
}
interface LessonCard {
  id: string;            // "<ref>-c1", "<ref>-c2", …
  title: string;         // short card title
  concept: string;       // teaching prose with inline LaTeX in \( \) delimiters
  diagram?: CurveDiagramConfig;  // optional, reuse the question bank's config shape
  miniQuestion: LessonMiniQuestion;
}
interface LessonMiniQuestion {
  prompt: string;        // the question, LaTeX in \( \)
  expectedAnswer: string;// the CORRECT answer (LaTeX/plain) — grounds the AI's judging
  answerType?: "expression" | "exactValue" | "numeric" | "set" | "interval" | "equationRoots";
  options?: string[];    // 4 tappable multiple-choice answers (Brilliant-style)
  correctIndex?: number; // index into options of the correct one (required if options set)
  insight: string;       // the "why" / Eureka, revealed once the student is right
  hints?: string[];      // optional fallback nudge ladder (gentle → specific)
}
```

When `options` is present the card renders as tappable multiple-choice; one entry
MUST be the verbatim `expectedAnswer` and the other 3 are plausible distractors
(the subtopic's common slips). Vary `correctIndex` across cards. Omit `options` to
fall back to a free-text answer judged by the AI.

The file must `export const lesson: Lesson = { … }`.

## How to author a good lesson

1. **Ground it in the question bank.** Read the subtopic's question file under
   `lib/data/questions/Year_1_A_Level_Maths/<Subcategory>/<ref>_*.ts`. Reuse its
   worked-solution methods, conventions, and `finalAnswer` formats so the lesson is
   correct and consistent with the rest of the app. The `expectedAnswer` of a card
   should be verifiable against that bank's style.
2. **Build intuition progressively.** Card 1 introduces the core idea simply; each
   later card adds one wrinkle (signs, coefficients, special cases, applying the
   result). Card 4–6 should require light synthesis. One idea per card.
3. **Mini-questions are small and answerable in the head or a line.** They test the
   single idea just taught — not a full exam question. Prefer a concrete numeric or
   short-expression answer so judging is crisp.
4. **Target the common misconception** for the subtopic in at least one card (the
   bank's `commonMistakes` is a good source).
5. **Write the `insight` as the real "why".** It is revealed only on success and is
   the point of the card — make it land (e.g. "a negative inside the bracket stays
   negative when you multiply").
6. **LaTeX**: inline maths in `\( \)`. Never use the term "FOIL"; show expansion as
   `\( a(c+d) + b(c+d) \)`. Match the bank's notation (`\frac`, `\sqrt`, `\frac{dy}{dx}`).
7. **Optional `hints`**: 2–3 lines, gentle → specific, used only as a static
   fallback when the AI is unavailable.

See `lib/data/lessons/Year_1_A_Level_Maths/Algebra/a1_expanding_brackets.ts` as the
reference exemplar.

## Output location & wiring

1. Write the file to
   `lib/data/lessons/Year_1_A_Level_Maths/<Subcategory>/<ref>_<slug>.ts`
   (mirror the question bank's folder for that subtopic).
2. **Wire it into the registry** `lib/data/lessons/index.ts`: add an
   `import { lesson as <ref> } from "./…";` and include `<ref>` in the `allLessons`
   array. (The browser and API discover lessons from this registry — a file that
   isn't imported here will not appear.)
3. Run `npx tsc --noEmit` to confirm it compiles.

## Quality bar / self-check

- Every `expectedAnswer` is mathematically correct and matches the bank's format.
- Cards progress in difficulty; no card teaches two ideas at once.
- Mini-questions are answerable from the card just read.
- `insight` states the underlying reason, not just the answer.
- The lesson is wired into `index.ts` and `tsc` passes.
