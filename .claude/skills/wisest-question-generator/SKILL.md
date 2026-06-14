---
name: wisest-question-generator
description: "Generate A-Level Mathematics Year 1 and 2 question banks for the Wisest AI Tutor platform as TypeScript files matching the project's Question[] schema. Trigger whenever the user asks for A-Level maths questions, a question bank, revision questions, practice problems, worked solutions, or content for a specific Year 2 Pure topic or subtopic (chain rule, implicit differentiation, proof by contradiction, partial fractions, parametric equations, trig identities, binomial expansion, numerical methods, etc.) — even when they don't explicitly mention Wisest, TypeScript, or the schema. Also trigger when the user references topic codes like y2df3, y2in4, y2pf1, or asks to produce a .ts file of `questions`. Produces 20 questions by default across Foundation / Standard / Challenge difficulty bands, each with a granular step-by-step worked solution in LaTeX."
---

# Wisest A-Level Maths Question Generator

This skill produces question banks for the Wisest AI Tutor platform — a web-based tutor aimed at UK A-Level Mathematics / Further Mathematics students, including those with high cognitive load, ADHD, or ASC.

The output is always a **TypeScript file** conforming to the project's `Question[]` schema, ready to drop into the codebase.

## When to use this skill

Use whenever the user wants to generate, extend, or restructure A-Level Maths question content for Wisest. Typical triggers:

- "Generate 20 question on [insert topic] in Wisest format of A-Level Maths Year [insert year]."

## The core workflow

1. **Confirm the subtopic and topicRef.** Ask the user for the subtopic name and a `topicRef` code (e.g. `y2df3` for Year 2 Differentiation §9.3). If they've already given these, don't re-ask.

2. **Plan skill clusters.** Before generating, sketch 3–6 *skill clusters* that partition the subtopic (e.g. for Chain Rule: polynomial^n, reciprocals, roots, e^f(x), ln, trig). This is how Wisest's existing banks are organised and it's what makes the output useful for building fluency. Show the clusters to the user and get quick confirmation before generating all 20 — this avoids wasted effort if the partition is wrong.
4. **Generate 20 questions** spread across clusters and difficulty bands (see "Difficulty mix" below).
5. **Write the output** as a valid TypeScript file following the schema in `references/schema.md`.
6. **Save to `https://github.com/bwalpole2025/Wisest_Maths_App.git`** and present it with `present_files`.

Read `references/style-guide.md` when you need guidance on tone, solution granularity, cognitive-load principles, and the Edexcel Pure Year 2 subtopic taxonomy.

## Difficulty mix

Default spread across 20 questions:

- **6 Foundation** — core concept in isolation, minimal chaining, 2 marks each, `examStyle: false`
- **9 Standard** — typical exam-style application, 3 marks each, `examStyle: true`
- **5 Challenge** — synoptic / multi-step / deeper reasoning, 4+ marks each, `examStyle: true`

Adjust if the user requests a different balance, but keep the total at 20 unless they specify otherwise.

## The style to hit

The solutions in Wisest are **terse, not narrated**. Each step has a short `description` (e.g. "Apply chain rule.", "Inner derivative is 2.", "Rewrite and apply.") and a `workingLatex` field with the actual mathematics. The `explanation` field is almost always `""` — it exists for cases where a genuine conceptual note is needed, not for padding.

This terseness is deliberate: it reduces cognitive load and keeps the student focused on the algebraic moves, not on walls of prose. Do not write chatty explanations. Do not add motivational text. Do not explain why the chain rule exists. Just show the work.

For *synoptic* Challenge questions or genuinely subtle conceptual steps, a one-sentence `explanation` is fine — but only when it adds something the algebra alone doesn't.

## Output format, the output should be like the following 
 {
        id: 'el2-001',
        topicRef: 'el2',
        topicTitle: 'Logarithms 01',
        difficulty: 'Foundation',
        questionText: 'Write the following using logarithm notation: \\( 3^4 = 81 \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'definition', 'index to log notation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the rule: if \\( a^c = b \\) then \\( \\log_a b = c \\).',
                    workingLatex: '3^4 = 81 \\Rightarrow \\log_3 81 = 4',
                    explanation: 'The base is 3, the power is 4, and the result is 81.'
                }
            ],
            finalAnswer: '\\( \\log_3 81 = 4 \\)'
        }
    },
    {
        id: 'el2-002',
        topicRef: 'el2',
        topicTitle: 'Logarithms 02',
        difficulty: 'Foundation',
        questionText: 'Write the following using logarithm notation: \\( 5^3 = 125 \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'definition', 'index to log notation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply \\( a^c = b \\Leftrightarrow \\log_a b = c \\).',
                    workingLatex: '5^3 = 125 \\Rightarrow \\log_5 125 = 3',
                    explanation: 'Base 5, power 3, result 125.'
                }
            ],
            finalAnswer: '\\( \\log_5 125 = 3 \\)'
        }
    },

The suffix doesn't have to match the ID number — in the existing bank the numbers are scattered, suggesting they're global indices across a larger source bank. Use sequential numbers starting from 01 unless the user tells you otherwise.
- `yearCreated` is the current year.
- Import the `Question` type from `@/lib/types` at the top: `import { Question } from "@/lib/types";`

See `references/schema.md` for the full field-by-field specification and a worked example.

## Mathematics quality

Every question must have a correct, checked solution. Before finalising:

- Differentiate/integrate/solve each question yourself mentally or in scratch working.
- Check that `finalAnswer` matches the last `workingLatex` step.
- Check that `marks` is consistent with the difficulty band (Foundation 2, Standard 3, Challenge 4+).
- Check that `tags` includes the headline technique plus any secondary technique used (e.g. `["chain rule", "reciprocal"]`).

If a question uses notation or a technique not yet on the A-Level Year 2 syllabus at the point this subtopic is taught, flag it to the user rather than silently including it.

## LaTeX conventions in this codebase

- Inline math is wrapped `\\( ... \\)` (escaped for the TypeScript string literal).
- Display fractions use `\\tfrac{a}{b}` in solution steps (more compact, suits inline rendering) and `\\dfrac{a}{b}` in question statements when the fraction is the focus.
- Multiplication is `\\cdot`, not `*` or `\\times` (unless the question is specifically about the × operator).
- Use `^{-1/2}` not `^-1/2` for negative/fractional exponents.

These match the existing bank. Consistency matters because the frontend's KaTeX/MathJax config is tuned for this style.

## Interaction style

This skill is for a specific user (Benjamin) building Wisest, not for end-students. Be direct, skip pleasantries, don't narrate the generation process at length. Show the clusters, get a go-ahead, generate, save, present the file. Done.

If the user provides examples, mirror their style precisely — their choice of wording, level of solution terseness, and tag vocabulary take priority over the defaults above.