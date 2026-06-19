nd step granularity and gates output with a validator.Wisest Undergraduate Depth & Count Policy
Layers a non-negotiable depth-and-count policy on top of
wisest-undergrad-question-generator. Content scope, schema, LaTeX conventions
and interaction style are inherited from that skill unchanged. This skill changes
only two things: how many questions per subtopic and how many solution steps
each question must have, and it provides a validator that gates every bank.
When generating undergraduate banks, this skill's numbers win over the generator's
defaults.
The policy (hard, non-negotiable)
Per subtopic file: exactly 30 questions. Every topic's every subtopic is a
30-question bank.
Per-question solution-step floors, by difficulty:
difficultyminimum solution stepsFoundation>= 6Standard>= 10Challenge>= 20
A "step" is one entry in the question's solution-step array (one workingLatex
per step) — in either schema shape the repo uses (solutionSteps: [...] or
workedSolution: { steps: [...] }).
These are floors, not targets. A question may exceed its floor; it may never fall
below it.
Difficulty mix (30 per subtopic)

6 Foundation — 2 marks, examStyle: false, >= 6 steps each.
12 Standard — 3–4 marks, examStyle: true, >= 10 steps each.
12 Challenge — 5+ marks, examStyle: true, >= 20 steps each.

Total 30. Foundation stays the minority. Adjust the 6/12/12 split only if the user
asks; the 30 total and the step floors never move.
Hitting the floors honestly (do not pad)
The floors exist to force genuinely granular, teachable derivations — not artificial
splitting. Benjamin's house style is verification-first; a solution padded with
vacuous steps fails the spirit of the policy and reads as filler. Reach the floor by
decomposing real mathematical work finely, one move per step:

Separate setup, substitution, simplification, and evaluation into distinct steps
rather than collapsing them.
State each algebraic manipulation as its own step (factor, cancel, common
denominator, expand, collect).
For multi-stage methods (eigenvalues → eigenvectors → diagonalise; or solve
homogeneous → particular → apply ICs), every stage is several steps.
Make implicit reasoning explicit: domain/branch checks, convergence conditions,
why a limit may be extended, sign of an eigenvector, the arbitrary constant.
The final step states the result; finalAnswer matches it exactly.

A genuine Challenge undergraduate problem (a full ODE with boundary conditions, a
contour-integral evaluation, a Gram–Schmidt then projection) decomposes into 20+
honest steps without strain. If a question cannot reach its floor without padding,
it is too thin for its band — promote a harder question or move it down a band, do
not inflate it.
If reaching the floor would require steps outside first/second-year undergraduate
maths, flag it rather than inventing material (same guard as the generator).
Workflow

Generate the 30-question bank per wisest-undergrad-question-generator
(resolve the topic from the manifest, plan clusters, get a go-ahead), but apply
this skill's 6/12/12 mix and write each solution to its step floor from the start
— do not generate thin and backfill.
Verify the maths as the generator requires (every finalAnswer independently
re-derived; watch the undergraduate equivalence traps — constant of integration,
eigenvector scaling/sign, branch of arg, ±2πk, equivalent surd/log forms).
Gate on depth and count. Run the validator on the written file:

bash   python scripts/check_depth.py <path-to-bank>.ts
It is problems-only and exits non-zero on any violation. It reports per-file
count shortfalls and every question below its step floor, by id.
4. Fix and re-run. For any question flagged short, expand its solution with
genuine intermediate steps (the wisest-question-expander approach: finer-grained
moves and richer prose, never padding) until it clears the floor; for a count
shortfall, generate the missing questions. Re-run the validator. Never present a
bank that the validator fails.
5. Present the passing file with present_files, and report the validator's
final PASS line.
For a whole topic, point the validator at the directory — it checks every subtopic
file and confirms each is a 30-question, floor-met bank:
bashpython scripts/check_depth.py content/undergrad/
Changing the policy
The floors and the required count live as constants at the top of
scripts/check_depth.py (STEP_FLOORS, REQUIRED_COUNT). Edit there if the policy
changes; the SKILL.md table and the script must stay in agreement.
Interaction style
For Benjamin building Wisest. Direct, no pleasantries, no narration of the
generation. Show clusters, get a go-ahead, generate to the floors, verify, gate,
present the PASS line. Mirror any examples the user provides over these defaults.