# Style Rules

These are tighter than the existing wisest-question-generator and override where they differ.

## 1. Questions begin with words, not maths

The first non-whitespace character of `questionText` must be alphabetic.

- ✓ `"Solve the equation \\( 2\\sin x = 1 \\) for ..."`
- ✗ `"\\( 2\\sin x = 1 \\) — solve."`

Reason: gives the student a frame ("solve" / "find" / "given that") before they meet the algebra. Matches Edexcel style.

## 2. All maths in KaTeX-renderable LaTeX

Every number, vector, expression, and unit in a maths context goes inside `\\( ... \\)`. No plain-text maths anywhere.

- ✓ `"... so \\( x = 3 \\)."`
- ✗ `"... so x = 3."`

## 3. Units use `\\mathrm{}`

Units are upright Roman, never italic.

- Speed: `\\( 12\\,\\mathrm{m\\,s^{-1}} \\)`
- Force: `\\( 5\\,\\mathrm{N} \\)`
- Energy: `\\( 200\\,\\mathrm{J} \\)`
- Angle: `\\( 30^{\\circ} \\)` (degrees use `^{\\circ}`, no `\\mathrm`)

Use a thin space `\\,` between value and unit.

## 4. Vectors

- Print form (component vectors): `\\mathbf{a}`, `\\mathbf{v}`
- Directed line segments: `\\vec{AB}`
- Column vectors: `\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}`
- Unit vectors: `\\mathbf{\\hat{i}}`, `\\mathbf{\\hat{j}}`, `\\mathbf{\\hat{k}}`

## 5. Inline math delimiters

Always `\\( ... \\)` (escaped for the TypeScript string literal). Never `$ ... $`.

## 6. Fractions

- `\\tfrac{a}{b}` in solution steps (compact, suits inline).
- `\\dfrac{a}{b}` in question stems when the fraction is the focus.

## 7. Multiplication

`\\cdot`, not `*` or `\\times`. Exception: when × is the operator the question is about (e.g. cross product), use `\\times`.

## 8. Exponents

Always wrap exponents that aren't single positive integers.

- ✓ `x^{-1/2}`, `e^{2x}`, `\\sin^{2}\\theta`
- ✗ `x^-1/2`, `e^2x`

## 9. Solution terseness

Wisest style is terse — short `description`, maths in `workingLatex`, `explanation` almost always `""`.

When a step has a diagram, the description can be even shorter ("Sketch the solutions.") because the picture carries the meaning. One-sentence `explanation` is fine for Challenge questions or genuinely subtle steps. Never write narration or motivation.