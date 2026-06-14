# Wisest Solution Style Guide (RECONSTRUCTED)

> Reconstructed from the style documented in the generator `SKILL.md` and the
> expander's `prose-style.md` / `granularity.md`. The original `style-guide.md` was
> **not present in the sandbox** — if you have your canonical version on disk or in
> git history, prefer it over this file. The one element that could not be
> reconstructed is the Edexcel Pure Year 2 subtopic taxonomy the A-Level generator
> cites; it is not needed for the undergraduate banks, which take their taxonomy from
> the manifest.

## Audience

Wisest serves UK maths students including those with high cognitive load, ADHD or
ASC. Every styling choice below serves one goal: keep the student on the mathematical
move in front of them, not on prose.

## Solution terseness (the core rule)

Solutions are terse, not narrated. Each step is `{ description, workingLatex, explanation }`:

- `description` — a short imperative label for the move ("Apply the chain rule.",
  "Factor the common term.", "Substitute u = 2x + 1."). ~5–10 words.
- `workingLatex` — the actual mathematics for that step. Rendered as a display block;
  no `\\( \\)` wrappers needed here.
- `explanation` — almost always `""`. Use a single sentence only when a step hides a
  genuine conceptual subtlety the algebra alone doesn't show. Never motivational text,
  never "why the rule exists", never padding.

## Granularity by band

- **Foundation** — one algebraic move per step.
- **Standard** — one to two moves per step.
- **Challenge** — one to three moves, but never a compressed jump that hides a
  substantive technique.

A "move" = applying one named rule (chain, product, quotient, parts), one round of
manipulation (expand, factor, collect, multiply both sides), one substitution, or one
numerical simplification.

## finalAnswer

- Matches the last `workingLatex` step exactly.
- Simplified (no `\\tfrac{6}{8}` where `\\tfrac{3}{4}` is meant).
- Where multiple valid forms exist (constant of integration, eigenvector scaling/sign,
  branch of arg, ±2πk), pick the conventional one; the checker tests *equivalence*,
  not literal identity.

## Tags

Headline technique first, then any secondary technique actually used
(e.g. `["chain rule", "reciprocal"]`).

## LaTeX conventions (must match the existing bank)

- Inline maths wrapped `\\( ... \\)` (doubled backslashes in the TS string literal).
- `\\tfrac{a}{b}` in solution steps; `\\dfrac{a}{b}` in stems when the fraction is the focus.
- Multiplication `\\cdot` (not `*` or `\\times`, unless the question is about the × operator).
- Negative/fractional exponents braced: `^{-1/2}`, not `^-1/2`.
- `yearCreated` is the current year; import `Question` from `@/lib/types`.

## What not to do

No chatty explanations, no motivational asides, no walls of prose, no explaining why a
standard technique exists. Show the work.
