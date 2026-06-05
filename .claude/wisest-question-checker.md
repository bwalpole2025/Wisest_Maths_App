---
name: wisest-question-checker
description: "Check the mathematical correctness of A-Level Mathematics question banks for the Wisest AI Tutor platform. Use this skill whenever the user asks to check, verify, validate, audit, mark, proofread, or QA a Wisest questions file (`.ts` file with a `Question[]` export), a topic bank, a question pack, or any A-Level maths worked solutions — even when they don't say 'check' explicitly (e.g. 'is this right?', 'spot the errors', 'review the maths in y2df3.ts', 'go through these'). Also trigger on topic codes like `y2df3`, `y2in4`, `y2pf1` paired with verbs like 'review' / 'verify' / 'go through'. Verifies every `finalAnswer` and every intermediate `workingLatex` step against an independent re-derivation, then prints a problems-only report grouped by severity to stdout, with proposed corrections inline. Does not produce a corrected file and does not flag clean questions."
---
 
# Wisest A-Level Maths Question Checker
 
This skill audits the **mathematical correctness** of question banks generated for the Wisest AI Tutor platform. It is the verification counterpart to `wisest-question-generator`.
 
It assumes the input is a TypeScript file conforming to the project's `Question[]` schema (see `references/schema.md`).
 
## What this skill checks (and what it doesn't)
 
**Checks:**
 
- Whether `finalAnswer` is mathematically correct given the question stem.
- Whether every step in `solutionSteps[].workingLatex` follows validly from the previous step (no sign errors, no dropped factors, no arithmetic slips, no invalid algebraic moves).
- Whether the `finalAnswer` matches the last `workingLatex` step.
**Does NOT check (out of scope for this skill):**
 
- Schema / TypeScript validity, field types, ID format.
- LaTeX style conventions (`\\tfrac` vs `\\dfrac`, `\\cdot` usage, etc.).
- Tone or terseness of the `description` / `explanation` fields.
- Difficulty / marks consistency.
- Syllabus appropriateness.
If the user asks for any of those, point them at the generator skill's style guide rather than running this checker.
- Use SymPy package to check the answers and workings
 
## Core workflow
 
1. **Locate the file.** The user will either pass a path or reference a topic code (`y2df3` → look for `y2df3.ts` in the current repo). If ambiguous, ask once.
2. **Read the file.** Parse out the `Question[]` array. You don't need to evaluate the TypeScript — read it as text and extract each question object.
3. **For every question**, independently work the problem from the stem. Do **not** trust the existing solution while doing this — derive your own answer first, then compare. **Use SymPy to confirm any non-trivial algebra** — see "Using SymPy for verification" below.
4. **For every step** in `solutionSteps`, check that the LaTeX in that step is a valid consequence of the LaTeX in the previous step (or the question stem, for step 1). Where the transition is an algebraic simplification or an integration / differentiation result, **verify it in SymPy** rather than trusting pen-and-paper algebra.
5. **Classify any discrepancy** by severity (see below).
6. **Print the report to stdout** in the exact format specified in `references/report-format.md`. If there are zero problems, print a single-line confirmation and stop.
Read `references/working-method.md` for the re-derivation discipline (how to avoid being primed by the existing solution and miss errors).
 
## Severity classification
 
Every problem is one of three levels. Use these labels exactly:
 
- **🔴 WRONG FINAL ANSWER** — `finalAnswer` is mathematically incorrect, OR `finalAnswer` doesn't match the last `workingLatex` step. This is the highest severity because it's what the student sees as "the answer".
- **🟠 WRONG INTERMEDIATE STEP** — A step in `workingLatex` does not follow from the previous one (sign error, dropped term, invalid manipulation, arithmetic slip), but the final answer happens to come out right anyway (often because two errors cancel). Still serious — students learning from the worked solution will absorb the broken reasoning.
- **🟡 MINOR** — Mathematically defensible but suboptimal: unsimplified fraction in `finalAnswer` (e.g. `\\tfrac{6}{8}` instead of `\\tfrac{3}{4}`), inconsistent notation between steps that doesn't affect correctness, or a step that's so compressed it skips a genuine algebraic move. Only include these if they could plausibly mislead a student.
Do not invent a fourth severity. Do not include "info" or "style" notes — those are out of scope.
 
## Output format
 
Print to stdout. Do not write to a file. Do not produce a corrected version of the source file.
 
The format is fixed — see `references/report-format.md`. The shape is:
 
```
Wisest Question Check — {filename}
{N} problems across {M}/{total} questions.
 
🔴 WRONG FINAL ANSWER  ({count})
  {topicRef}-{id}  "{first 50 chars of question}"
    Given:    {finalAnswer as written}
    Correct:  {your re-derived answer}
    Why:      {one-sentence explanation of the error}
 
🟠 WRONG INTERMEDIATE STEP  ({count})
  {topicRef}-{id}  step {n}
    From:     {previous step latex}
    To:       {bad step latex}
    Should:   {what the step should have been}
    Why:      {one-sentence explanation}
 
🟡 MINOR  ({count})
  {topicRef}-{id}  {brief description + suggestion}
```
 
If there are zero problems:
 
```
Wisest Question Check — {filename}
✅ All {total} questions check out.
```
 
Section headers are omitted when their count is zero (don't print an empty `🔴 WRONG FINAL ANSWER (0)` block).
 
## Re-derivation discipline (critical)
 
This is the part that makes the skill useful. If you skim the existing solution and then "check" it, you will anchor on the existing answer and miss errors. Instead:
 
1. Read **only the question stem** for the current question.
2. Solve it yourself, writing out your working in a scratchpad (a comment block, or just internally — but actually do the working, don't eyeball it). **Drive every non-trivial algebraic step through SymPy** (see next section); don't rely on mental arithmetic for anything more than one-step simplifications.
3. **Then** compare your `finalAnswer` to the file's `finalAnswer`. If they differ, the file is wrong (or your working is — recheck once with SymPy). If they match, walk the file's `workingLatex` steps to verify each transition.
4. For Challenge questions where there are multiple valid forms of the answer (e.g. `\\tfrac{1}{2}\\ln(2x)+C` vs `\\tfrac{1}{2}\\ln x + \\tfrac{1}{2}\\ln 2 + C`), check that the file's form is *equivalent* to yours, not literally identical — use `simplify(mine - theirs) == 0` in SymPy, which handles equivalent-but-not-identical forms automatically.
See `references/working-method.md` for worked examples of this discipline applied to differentiation, integration, and proof questions.

## Using SymPy for verification

The re-derivation discipline above is your primary safeguard. Back it up with **SymPy** (Python computer algebra library, version 1.13+ pre-installed) for any non-trivial algebraic claim. Pen-and-paper algebra is error-prone; SymPy is not. Invoke it via the Bash tool: `python3 -c "from sympy import *; ..."`.

Use SymPy to:

- **Verify a `finalAnswer` symbolically** — compute the closed-form answer (`integrate`, `diff`, `solve`, `dsolve`, `series`, `limit`, `summation`, `apart`, `Poly`) and compare to the file's form via `simplify(mine - theirs) == 0`. This handles equivalent-but-not-identical forms (e.g. `(x-1)e^x + C` vs `xe^x - e^x + C`).
- **Verify a `finalAnswer` numerically** — substitute concrete parameter values via `.subs(...).evalf()` and check `abs(mine - theirs) < 1e-9`. Catches arithmetic slips when full symbolic comparison is awkward.
- **Verify a `workingLatex` transition** — parse step `n` and step `n+1` as SymPy expressions and check `simplify(rhs_n - rhs_{n+1}) == 0`. Use this whenever a step claims algebraic simplification rather than a definitional substitution.
- **Verify integration / differentiation by round-trip** — differentiate the proposed antiderivative and check it equals the integrand: `simplify(diff(mine, x) - integrand) == 0`. For derivatives, integrate and compare.
- **Verify partial fractions / polynomial identities** — `apart(expr, x)` decomposes; `Poly(p, x) == Poly(q, x)` for polynomial equality; `together(...)` for the reverse.
- **Verify DE solutions** — substitute the candidate `y(t)` into the DE and confirm `simplify(lhs - rhs) == 0`. Or solve directly with `dsolve` and compare.
- **Verify trigonometric identities** — use `trigsimp(...)` or `simplify(...)`. Bare `simplify` often won't collapse `sin²x + cos²x → 1`; reach for `trigsimp` first.

Example (verifying an integration-by-parts answer):

```bash
python3 -c "
from sympy import symbols, integrate, diff, simplify, exp
x = symbols('x')
integrand = x*exp(x)
theirs = (x - 1)*exp(x)
print('round-trip match:', simplify(diff(theirs, x) - integrand) == 0)
"
```

Example (verifying a DE solution):

```bash
python3 -c "
from sympy import symbols, Function, diff, simplify, exp
t = symbols('t'); k = symbols('k', positive=True)
y = 100*exp(-k*t)        # proposed solution
lhs = diff(y, t)
rhs = -k*y               # the DE: dy/dt = -ky
print('DE match:', simplify(lhs - rhs) == 0)
"
```

If SymPy returns `False` or a non-zero residual, the file is wrong — re-derive by hand to find the exact step that broke, then flag it.

Practical notes:

- For `+C` integration answers, compare **derivatives** rather than antiderivatives — that strips the constant: `simplify(diff(mine, x) - diff(theirs, x)) == 0`.
- For piecewise expressions or modulus, use `Piecewise(...)` or `Abs(...)` rather than splitting manually.
- If SymPy returns an unevaluated `Eq(...)` rather than `True`/`False`, force a boolean with `bool(...)` or use `.is_zero` on the residual.
- Don't trust SymPy blindly either — for novel-looking results, sanity-check by substituting a concrete value of `x` and recomputing both sides numerically.
- For inline one-liners, prefer `python3 -c "..."` over creating a scratch file. Keep verifications as part of the audit trail visible to the user.
 
## Proposing corrections
 
Every problem in the report must include a proposed correction:
 
- **🔴**: provide the correct `finalAnswer` in the same LaTeX style the file uses.
- **🟠**: provide the corrected step (what the `workingLatex` for that step should have been). If the error propagates and changes subsequent steps, mention this in the `Why:` line but only show the first wrong step — listing every downstream consequence is noise.
- **🟡**: state the simpler / more consistent form.
Do not propose corrections in a different LaTeX style than the file. If the file uses `\\tfrac` you use `\\tfrac`; if it uses `\\frac` you use `\\frac`. The point is that your corrections should be drop-in replacements.
 
## Interaction style
 
This skill is for Benjamin (Wisest's developer), not end-students. Be direct, no preamble, no "I'll now check your file". Just run the checks and print the report.
 
If the user asks follow-up questions about a specific flagged problem, walk them through the re-derivation in detail — at that point a longer conceptual explanation is welcome. The terseness rule applies to the report itself, not to follow-up discussion.
 
## When in doubt
 
- If you're not certain a step is wrong — work it again on a fresh scratchpad before flagging.
- If the question stem itself is mathematically ill-posed (ambiguous, missing a constraint, has no real solution and shouldn't), report that as 🔴 with `Why: question stem is ill-posed — {reason}`. A broken stem is even worse than a wrong answer.
- If a question is outside the A-Level Pure syllabus and you're not confident, say so explicitly in a final `⚠️ UNVERIFIED ({count})` block rather than guessing.