# Wisest General LaTeX Rules

These rules apply to every Wisest content file (`questionText`, `workingLatex`,
`finalAnswer`, `explanation`, hints, and any in-app maths prose). They
**override** anything in `style.md` they contradict. All Wisest skills
(`wisest-question-generator`, `wisest-question-expander`,
`wisest-question-checker`, `wisest-diagram-add`) must follow them when
generating or editing content.

## 1. Always use larger integral signs

Every integral renders at display size. Never a small inline integral.

- **In `questionText` (where the integral is the focus):** use display math
  `\\[ \\int ... \\]`. Inside `\\[ ... \\]`, KaTeX auto-renders `\\int` at
  display size — no need for `\\displaystyle`.
- **In `workingLatex`, `explanation`, `finalAnswer` (inline contexts):** use
  `\\displaystyle\\int` inside inline math `\\( ... \\)` so the integral
  stays large in line with surrounding prose.
- **Never** use a bare `\\int` inside inline math `\\( ... \\)` — it
  collapses to a small inline operator that students misread.

Examples:

- ✓ `questionText: "Find \\[ \\int \\frac{x}{x^2 + 1}\\,dx \\]"`
- ✓ `workingLatex: "\\displaystyle\\int \\sin^2 x\\,dx = \\frac{x}{2} - \\frac{\\sin 2x}{4} + C"`
- ✓ `explanation: "...by linearity, \\(\\displaystyle\\int (f + g)\\,dx = \\displaystyle\\int f\\,dx + \\displaystyle\\int g\\,dx\\)."`
- ✗ `questionText: "Find \\( \\int \\frac{x}{x^2 + 1}\\,dx \\)."`  ← small integral, inline math clips
- ✗ `workingLatex: "\\int \\sin^2 x\\,dx = ..."`  ← bare `\\int` in inline = tiny

Definite integrals follow the same rule:

- ✓ `\\displaystyle\\int_0^{\\pi/2} \\cos^2 x\\,dx`
- ✗ `\\int_0^{\\pi/2} \\cos^2 x\\,dx`

## 2. Use `\\left( ... \\right)` for grouping

Whenever parentheses, brackets, or absolute-value bars wrap an expression
with tall content (a fraction, integral, exponent, summand, `\\sin^2`,
matrix, …), use the auto-sizing delimiters so the brackets grow to fit.

- ✓ `\\left( \\frac{x}{x^2 + 1} \\right)^3`
- ✓ `\\sin\\left( 2x \\right)`
- ✓ `\\ln\\left| f\\left( x \\right) \\right|`
- ✓ `\\left[ \\frac{x}{2} - \\frac{\\sin 2x}{4} \\right]_0^{\\pi/2}` ← evaluation brackets
- ✗ `(\\frac{x}{x^2 + 1})^3` ← parens stay small, fraction towers above them
- ✗ `|f(x)|` when `f(x)` is tall

Use `\\left[ \\right]`, `\\left\\{ \\right\\}`, `\\left| \\right|` for the
square/curly/absolute-value variants.

Exceptions where plain parens are fine:

- Single-token function arguments where nothing tall lurks: `f(x)`, `g(t)`,
  `P(A)`.
- Coordinate pairs: `(3, 4)`.

When in doubt, use `\\left( \\right)`. Plain parens around a fraction are
*always* wrong; auto-sized parens around `(x)` are never wrong.

## 3. `\\frac` everywhere — and `\\displaystyle\\frac` in inline math

Use `\\frac{a}{b}` for every fraction. Do **not** use `\\tfrac` or
`\\dfrac` anywhere, including inside `^{...}` and `_{...}`.

**In inline math `\\( ... \\)`**, prefix every top-level `\\frac` with
`\\displaystyle` so the fraction renders at full size. KaTeX's default
inline `\\frac` is text-style (small numerator/denominator) and is
visually indistinguishable from `\\tfrac` — `\\displaystyle\\frac`
forces the larger display-style rendering.

**In display math `\\[ ... \\]` and `workingLatex` (rendered as
BlockMath)**, plain `\\frac` is already display-style. The
`\\displaystyle` prefix is redundant but harmless; either form is fine.

**Inside `^{...}` and `_{...}` (exponents/subscripts)**, keep plain
`\\frac` without `\\displaystyle`. A full-size fraction in an exponent
visually dominates the base; the auto-shrunk script-style is the
correct size there.

- ✓ `\\( \\displaystyle\\frac{1}{2}\\ln|x^2 + 1| + C \\)`
- ✓ `\\( \\displaystyle\\frac{x}{2} - \\displaystyle\\frac{\\sin 2x}{4} \\)`
- ✓ `workingLatex: "\\frac{x}{2} - \\frac{\\sin 2x}{4}"` (BlockMath; bare `\\frac` is fine but `\\displaystyle\\frac` is also fine)
- ✓ `x^{\\frac{1}{2}}`, `\\left( x^2 + 4 \\right)^{\\frac{3}{2}}`, `e^{\\frac{1}{2} \\ln x}` (no `\\displaystyle` in exponents)
- ✗ `\\( \\frac{1}{2} \\)` ← renders text-style, looks like `\\tfrac`
- ✗ `\\tfrac{1}{2}\\ln|x^2 + 1| + C`
- ✗ `\\dfrac{x}{2} - \\dfrac{\\sin 2x}{4}`
- ✗ `x^{\\tfrac{1}{2}}` ← `\\tfrac` banned everywhere
- ✗ `x^{\\displaystyle\\frac{1}{2}}` ← exponent fraction too heavy
- ✗ `x^{1/2}` ← slash-form less clear than the LaTeX fraction

This **overrides** `style.md` §6 (which previously called for `\\tfrac` in
steps and `\\dfrac` in stems) and supersedes any earlier exception for
fractional exponents.

## Where these rules apply

- `questionText`
- Every `workedSolution.steps[].workingLatex`
- Every `workedSolution.steps[].description` and `explanation` containing math
- `workedSolution.finalAnswer`
- `hints[]`
- Topic / category descriptions in `topics.ts`
- Any TSX in `components/` or `app/` that emits user-facing maths

Internal docs and test helpers are exempt.

## How skills should enforce this

`wisest-question-generator`, `wisest-question-expander`, and
`wisest-question-checker`:

1. **Generate** new content compliant with §1–§3.
2. **Edit** existing content: silently bring non-compliant fragments into
   compliance as part of the run. Formatting normalisation does **not**
   need a fix-log entry; only material mathematical fixes do.
3. Treat the previous `\\tfrac`/`\\dfrac` policy in `style.md` §6 as
   **superseded** by §3 here.
