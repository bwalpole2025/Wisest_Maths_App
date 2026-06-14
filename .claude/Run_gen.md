n Foundation. Standard and Challenge questions get extensive, fully-detailed step-by-step worked solutions. Also trigger on level-bearing codes (y1.../y2... = A-Level, GCSE spec codes) paired with 'generate', 'run', 'build', 'question bank', or a bare \Run_wise_gen call.Wisest Bulk Question Generator — \Run_wise_gen(xxxx)
Produces question banks for the Wisest AI Tutor platform as TypeScript files
conforming to the project's Question[] schema, ready to drop into the codebase
unchanged. This is the bulk / command-driven generator: one invocation can emit
a single subtopic bank or fan out across every subtopic of a topic.
It differs from wisest-question-generator (the 20-question A-Level skill) in three
ways the user has specified:

Counts: 70 questions per A-Level subtopic, 30 per GCSE subtopic.
GCSE mix is skewed to mostly Standard + Challenge, only a small slice Foundation.
Standard and Challenge solutions are extensive and fully detailed — every step
shown, with the why in explanation. This overrides the terse A-Level house style
for those bands (see references/solution-style.md).

The command
\Run_wise_gen(xxxx)
Run_wise_gen(xxxx)          # backslash optional
run wisest question generator on xxxx
xxxx is a topic or a subtopic, given as a code (e.g. y2df3, galg2) or a
human name (e.g. "implicit differentiation", "quadratic equations").

xxxx is a subtopic → generate exactly one bank for it.
xxxx is a topic → generate one bank per subtopic within that topic, looping the
subtopic procedure once per subtopic. \Run_wise_gene(topic) ≡ calling
\Run_wise_gene(subtopic) for each subtopic in turn.

If it is unclear whether xxxx names a topic or a subtopic, resolve it against the
manifest (below); only ask the user if the manifest can't disambiguate it.
Determining the level (A-Level vs GCSE) — sets the count
The level decides everything downstream (70 vs 30, and the difficulty mix), so fix it first:

Look xxxx up in the relevant Wisest manifest/taxonomy. If the manifest tags it
A-Level or GCSE, use that.
Heuristic if no manifest tag: codes beginning y1/y2 (e.g. y2df3) are A-Level;
GCSE spec codes / topics for AQA, Edexcel, OCR, WJEC are GCSE.
If still ambiguous, ask once: "Is xxxx A-Level (70 questions) or GCSE (30)?"
Don't re-ask once told.

Resolving a topic into its subtopics
When xxxx is a topic, you need its subtopic list before fanning out:

Read the subtopics from the manifest/taxonomy for that topic.
If the topic isn't in any manifest, enumerate the subtopics yourself from the relevant
syllabus (Edexcel Pure for A-Level; the AQA/Edexcel/OCR/WJEC GCSE specification for GCSE),
then show the subtopic list and the resulting total question count and get a quick
go-ahead before generating. Fanning out is expensive to get wrong — a 6-subtopic A-Level
topic is 6 × 70 = 420 questions — so confirm the partition first.
Generate one subtopic file at a time, in order. Don't try to emit every subtopic in
a single object; produce <subtopicCode>.ts, then move to the next.

Per-subtopic workflow

Fix the level (above) → sets the count and mix.
Confirm topicRef and title. Use the subtopic code as topicRef; the human name as
the base of topicTitle. Don't re-ask for anything the manifest already supplies.
Plan skill clusters. Sketch 4–8 skill clusters that partition the subtopic (e.g. for
Chain Rule: polynomial^n, reciprocals, roots, e^{f(x)}, ln, trig, products needing
chain). Spread the questions across clusters so the bank builds fluency rather than drilling
one shape 70 times. For a single-subtopic call, show the clusters and get a quick go-ahead
before generating all of them; when fanning out across a topic, plan clusters per subtopic
but don't stop for confirmation on each one unless something looks wrong.
Generate the questions across clusters and difficulty bands per the mix below.
Verify the mathematics (see "Mathematics quality") before locking each question.
Write a valid TypeScript file <subtopicCode>.ts per references/schema.md, importing
Question from @/lib/types.
Save to the appropriate content directory of the repo
(https://github.com/bwalpole2025/Wisest_Maths_App.git) and present with present_files.

Difficulty mix and counts
A-Level — 70 questions per subtopic
Default spread (adjustable on request, but keep the total at 70):

14 Foundation (20%) — core technique in isolation, minimal chaining, 2 marks, examStyle: false.
35 Standard (50%) — typical exam-style application, 3 marks, examStyle: true.
21 Challenge (30%) — synoptic / multi-step / deeper reasoning, 4+ marks, examStyle: true.

GCSE — 30 questions per subtopic (skewed)
The user-specified skew: mostly Standard and Challenge, only a small fraction Foundation.

4 Foundation (~13%) — the small Foundation slice; core idea unembellished, 2 marks, examStyle: false.
14 Standard (~47%) — typical exam-style application, 3 marks, examStyle: true.
12 Challenge (40%) — multi-step / reasoning / problem-solving, 4+ marks, examStyle: true.

"Foundation" is relative to the level: a GCSE Foundation question is a clean GCSE-level item,
not an easier-than-GCSE one.
Worked-solution depth (the key requirement)
Standard and Challenge questions must have extensive, fully-detailed worked solutions —
every step shown, nothing a student would have to reconstruct silently, and the reason for
each non-mechanical move stated in explanation. This deliberately departs from the terse
house style of the original A-Level generator. Full guidance and a worked example are in
references/solution-style.md. In short:

Foundation: 2–4 steps, compact; explanation only where a genuine note helps.
Standard: 5–9 steps, one real move per step, explanation filled on every conceptual step.
Challenge: 8–14 steps; it is fine for a Challenge solution to be long. Never compress a
derivation to where the logic stops being followable.

finalAnswer must match the last workingLatex step.
Mathematics quality
Every question needs a correct, independently-checked solution. Before locking each one:

Re-derive the answer from scratch (differentiate/integrate/solve/expand independently),
don't just trust the working you wrote.
Substitute a concrete value or two to numerically sanity-check the finalAnswer where the
problem admits it (e.g. evaluate both sides of an identity, plug a root back in). Benjamin's
banks are checked downstream for equivalence, not literal identity — watch the usual traps:
arbitrary constant of integration, ± and +2πk in trig/arg, equivalent surd/log forms,
factored vs expanded forms.
Check marks matches the band (Foundation 2, Standard 3, Challenge 4+).
Check tags carries the headline technique plus every secondary technique used.
If a question needs a technique not yet taught at that point in the syllabus (A-Level Year 2
guard, or beyond the relevant GCSE tier), flag it rather than silently including it.

Schema and LaTeX conventions
Full field-by-field schema in references/schema.md. Match the existing bank exactly:

File top: import { Question } from "@/lib/types"; then export const questions: Question[] = [ ... ];
id is <topicRef>-NNN, sequential from 001.
Inline math wrapped \\( ... \\) (double-escaped for the TS string literal).
\\tfrac{a}{b} in solution steps, \\dfrac{a}{b} in stems where the fraction is the focus.
Multiplication \\cdot, never * or \\times (unless the question is about the × operator).
Negative/fractional exponents ^{-1/2}, ^{3/2}.
yearCreated is the current year.

Interaction style
For Benjamin building Wisest, not for end-students. Direct, no pleasantries, don't narrate the
generation at length. Resolve the level and subtopics, show clusters (for a single subtopic) or
the subtopic list (for a topic fan-out), get a go-ahead, generate, verify, save, present. If the
user supplies examples, mirror their style — wording, tag vocabulary, terseness — over these defaults.