# Wisest Question Schema (read-only reference)

The checker reads `.ts` files exporting `Question[]`. You don't need to validate the schema (out of scope), but you do need to know which fields contain the maths so you know what to check.

## Fields the checker reads

- **`id`** — e.g. `"y2df3-007"`. Use this in the report to identify the question.
- **`topicRef`** — e.g. `"y2df3"`. Used as the report's filename hint.
- **`questionText`** — LaTeX-bearing string, the problem statement. **Always read this and only this when re-deriving.**
- **`finalAnswer`** — LaTeX string, the headline answer. Check this.
- **`solutionSteps`** — array of `{ description, workingLatex, explanation }`. Check every `workingLatex` transition.
- **`marks`**, **`difficulty`**, **`examStyle`**, **`tags`**, **`topicTitle`**, **`yearCreated`** — metadata; this skill ignores them.

## LaTeX escape conventions in this codebase

The strings are TypeScript string literals, so backslashes are doubled. When you read `\\tfrac{1}{2}` from the file, the rendered LaTeX is `\tfrac{1}{2}`.

When you propose a correction in the report, **match the file's escaping** (so the user can paste your suggestion straight in). If the file has `\\cdot`, write `\\cdot`. If the file has `\\(x^2\\)`, wrap inline maths the same way.

## Inline vs display maths

- Inline math is wrapped `\\( ... \\)`.
- `questionText` and `finalAnswer` typically use inline.
- `workingLatex` is rendered as a display block — it does **not** need `\\(...\\)` wrappers, just the raw LaTeX expression.

## Skill clusters and difficulty

Questions are grouped by skill cluster within the file (with `// ── Cluster name ────` banner comments). The checker doesn't need to use clusters — it just walks every question — but if you spot a pattern (e.g. every question in the "Reciprocals" cluster has the same sign error), surface that in the report's footer:

```
Pattern: 4/4 errors are in the "Reciprocals" cluster — likely a systematic sign error in derivative of f(x)^{-1}.
```

This pattern footer is optional — only include it when there's a clear cluster-level pattern, not for one-off scattered errors.
