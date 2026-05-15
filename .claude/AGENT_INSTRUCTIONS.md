# Wisest Content Generation — Agent Instructions

You are running inside a GitHub Action triggered manually by Benjamin (the developer). The workflow passes three inputs in the prompt:

- `mode`: one of `check`, `expand`, `check-and-expand`, `render-sweep`
- `target_file`: path to a Wisest questions file (a `.ts` file with a `Question[]` export)
- `slice`: optional ID range (e.g. `01-30`). If non-empty, restrict scope to question IDs in that range.

This file is the dispatch table. Read it once, then execute the matching mode.

## Hard rules (every mode)

- **Never commit to `main`.** Work on a branch named `wisest/<mode>/<basename-of-target-file>-<run-id>` (e.g. `wisest/expand/v2_calculating_vectors-12345`) and open a PR against `main`.
- **Run `npx tsc --noEmit` before opening the PR.** If it surfaces errors in `target_file`, fix them or revert that file and abort.
- **Frozen fields — never modify in any mode:** `id`, `topicRef`, `topicTitle`, `difficulty`, `marks`, `examStyle`, `yearCreated`, `tags`, `hints[]`, `questionText`/`questionLatex`, every `questionDiagram` and every step-level `diagram` (preserve byte-for-byte unless `mode == render-sweep` AND the diagram itself has a render bug).
- **`finalAnswer` is frozen unless** the original is mathematically wrong (🔴 case in the checker/expander spec). Any change to `finalAnswer` MUST appear in the fix-log — never silent.
- **Edit per question.** For `expand` and `check-and-expand`, use `Edit` to swap each question's `workedSolution: { ... }` block individually. Do NOT rewrite the whole file in one `Write` call — that caused stalls in past runs.
- **Notation conventions:** match the file's existing style (`\tfrac` vs `\frac`, `\cdot` vs `\times`, etc.). Inside JS string literals, `\\overrightarrow` is correct (one backslash in rendered KaTeX); `\\\\overrightarrow` is a render bug. Matrix line breaks use `\\\\` inside `\begin{pmatrix}…\end{pmatrix}`.

## Modes

### `check`

1. Read `.claude/wisest-question-checker.md` in full and internalise its workflow (re-derivation discipline is critical).
2. Read `target_file`. If `slice` is non-empty, restrict to question IDs in that range.
3. For every in-scope question: independently re-derive the answer from the stem (do NOT anchor on the existing solution), then verify each `workingLatex` transition.
4. Build the checker report in the format specified by the checker skill — problems-only, severity-grouped (`🔴 / 🟠 / 🟡 / ⚠️ UNVERIFIED`). If zero problems, print the single-line `✅ All N questions check out.` line.
5. **Do not modify `target_file`.** Open a PR with an empty diff and the report as the PR body (use a placeholder commit on the branch — e.g. touch `.wisest-check-log` with the report — so the PR has at least one commit).

### `expand`

1. Read `.claude/wisest-question-expander.md` in full.
2. Read `target_file`. If `slice` is non-empty, restrict scope.
3. For every in-scope question: re-derive independently, then plan expanded `workedSolution.steps[]` per the granularity table in the skill (Foundation ≈ 1 move/step; Standard 1–2; Challenge 1–3). Rewrite `description` (~5–10 words, imperative) and `explanation` (1–3 sentences saying *why*).
4. Fix any 🔴 / 🟠 errors found during re-derivation. Log every fix.
5. Use `Edit` per question to replace each `workedSolution: { ... }` block in place. Preserve question ordering, field ordering within each question, blank lines between questions, imports, exports, and top-level comments.
6. Run `npx tsc --noEmit`. If it fails on `target_file`, fix or revert that file.
7. Print the fix-log per the expander spec format and include it in the PR body.

### `check-and-expand`

Run `check` workflow first to gather the report (hold in memory, do NOT open a separate PR). Then run `expand`. Open ONE PR whose body includes BOTH the original checker report and the expander fix-log.

### `render-sweep`

1. Read `target_file` (may be a single file or a directory — if directory, sweep all `.ts` files under it).
2. Scan every `workingLatex`, `questionText`, `finalAnswer`, `description`, `explanation`, and diagram `label` for render bugs:
   - **Double-escaped LaTeX** inside JS strings — e.g. `'\\\\overrightarrow{AB}'` (4 backslashes in source → `\\overrightarrow` in memory → KaTeX strips). Correct form: `'\\overrightarrow{AB}'`.
   - **Plain-text math labels** missing the `\\` prefix — e.g. `'mathbf{a}'` (renders as italic letters `mathbfa`). Correct: `'\\mathbf{a}'`.
   - **Unbalanced delimiters** — `\\begin{X}` without matching `\\end{X}`, unmatched `\\left(` / `\\right)`, unmatched `\(` / `\)`.
   - **Mixed-mode glitches** — multi-word text labels rendering as math (italic letters with no spaces), e.g. `'AF extended'` should be `'\\overrightarrow{AF}\\text{ extended}'` or wrapped via `\\text{}`.
   - **Diagram bounding-box violations** — any point in `lines[].from`, `lines[].to`, `points[].at` outside `[xMin,xMax]×[yMin,yMax]`, or large unused padding on one side.
   - **Truncated arrows** — line `to` coordinates that don't actually reach the labelled endpoint (e.g. an arrow from D `(2.5, 0)` to E `(2.5, 3.5)` but coded with `to: [2.75, 0.875]`).
3. Fix every issue. Group fixes by file and by category in the PR body. Run `npx tsc --noEmit` before opening the PR.

## PR conventions

- Title: `Wisest [<mode>] <target_file>` (exactly as the workflow set it).
- Body sections, in order:
  1. **Summary** — one line: file, mode, questions touched, fixes applied.
  2. **Checker report** (if `mode` includes `check`).
  3. **Expander fix-log** (if `mode` includes `expand`).
  4. **Render fixes** (if `mode == render-sweep`).
  5. **Caveats** — anything `⚠️ UNVERIFIED`, any `tsc` quirks, anything Benjamin should look at manually.
- Mark `⚠️ UNVERIFIED` items clearly — do not bury them.
- Do not mark the PR as ready-to-merge if there are 🔴 fixes the agent couldn't verify; flag for human review.

## When in doubt

- Re-derive on a fresh scratchpad before "fixing" anything.
- If a question stem is ill-posed (contradictory, missing constraints, no real solution), flag as `⚠️ UNVERIFIED`, expand prose conservatively, and leave `finalAnswer` untouched.
- If you can't verify a question because it's outside the A-Level syllabus you're confident in, list it under `⚠️ UNVERIFIED` rather than guessing.
- If the agent runtime is about to exceed turn budget partway through a file, STOP cleanly: revert any partial modifications to `target_file` and open a PR explaining what was completed and what was skipped. Do NOT leave the file in a half-modified state.

## Audience

This is for Benjamin (the developer), not students. Be direct. No preamble. The PR body and any stdout are the only surface that matters.
