---
name: wisest-damtp-autogen
description: "Generate complete Wisest question-bank modules from Cambridge DAMTP example sheets, driven by the command \\do(module). Trigger whenever the user issues \\do(...) or do(...) with a module name (e.g. \\do(asymptotic_methods), \\do(perturbation_methods), \\do(fluid_dynamics)), or asks to build, generate, or populate a DAMTP module, a graduate or Part II/III maths module, a multi-topic question bank from example sheets, or content seeded from PDFs in a DAMTP_Example_Sheets folder — even when they don't mention Wisest, TypeScript, or the schema. Also trigger on module codes like am1 or am5b, or a request to generate the next subtopic or a specific topic of an existing module. Reads the example sheets for the module, builds a 10-topic and roughly 4-subtopic-per-topic taxonomy, then generates 30 fully-worked questions per subtopic (Foundation, Standard, Challenge, weighted toward Standard and Challenge) in the project's Question array schema, numerically verifying results before locking them."
---

# Wisest DAMTP Module Auto-Generator

Turns a folder of Cambridge DAMTP example sheets into a full Wisest question-bank
module. One command: `\do(<module>)`. It reads the sheets, builds the topic/subtopic
taxonomy, and generates 30 fully-worked questions per subtopic in the project's
`Question[]` schema, matching the style of the example sheets and the Wisest app.

This is the graduate-level sibling of `wisest-question-generator`. Two differences
matter: the content is whole modules (not single topics), and the solutions are
**fully detailed** rather than terse (see `references/solution-style.md`).

It write 10 topics and within thos 10 topics 4 sub topics for each xxxx of the \do(xxxx) command

## The `\do(...)` command

```
\do(<module>)                generate the next pending subtopic (build the manifest first if absent)
\do(<module>/<topicCode>)    work within one topic, e.g. \do(asymptotic_methods/am5)
\do(<module>/<subtopicCode>) generate exactly one subtopic, e.g. \do(asymptotic_methods/am5b)
\do(<module> --manifest)     build/refresh the taxonomy only, then stop
\do(<module> --all)          generate every remaining subtopic in turn (warn: this is many calls' worth)
```

`do(...)` without the backslash is the same command. The module name is matched
loosely against the sheet folders, so `asymptotic_methods`, `Asymptotic Methods`
and `asymptotic-methods` all resolve.

## Why generation is incremental

A module is ~10 topics (should be able to click on topic and opens another page with 4 subtopics) × ~4 subtopics × 30 questions ≈ **1200 questions**. That is
not one response. So `\do()` is **resumable**: it persists a manifest and a progress
file, and by default generates the **single next pending subtopic** per call. The
user advances the module by calling `\do(<module>)` repeatedly (or names a target).

## Pipeline (every call)

1. **Read the sheets.** `python scripts/read_sheets.py <module>` globs
   `~/Desktop/DAMTP_Example_Sheets/<module>/*.pdf` and dumps their text. If the
   folder isn't found, run `--list` to show what exists and ask. (Override the base
   with `--root`. If `pdfplumber`/`pypdf` are missing the script says how to install.)
2. **Manifest: load or build.** Look for `content/<module>/<module>.manifest.ts`.
   - Absent → build the taxonomy from the sheets per `references/taxonomy.md`, pipe
     the taxonomy JSON to `python scripts/manifest.py build <module>`, present the
     `*.manifest.ts`, and **stop for a go-ahead** unless the call named a specific
     subtopic. The partition shapes 1000+ questions; getting sign-off is worth it.
   - Present → continue.
3. **Pick the target subtopic.** Named in the command, else
   `python scripts/manifest.py next <module>` (prints the next `pending`).
4. **Generate 30 questions** for that subtopic — schema in `references/schema.md`,
   style in `references/solution-style.md`, mix below. Seed each question from the
   relevant example-sheet questions (`sheetRefs` in the manifest) but vary
   constants/limits/framing — never reproduce a sheet question verbatim.
5. **Verify before locking.** Numerically sanity-check every result that admits it
   (`scripts/verify.py` primitives — see below). Flag anything you cannot verify
   with a `// REVIEW:` comment above the question.
6. **Save & record.** Write `content/<module>/<subtopicCode>.ts`, then
   `python scripts/manifest.py done <module> <subtopicCode>`, and `present_files`
   the new bank. Report the running count (`status`).

The repo target mirrors the other Wisest generators
(`https://github.com/bwalpole2025/Wisest_Maths_App.git`); save under its content
directory if the user is working inside the repo, otherwise `content/<module>/`.

## Difficulty mix (per 30-question subtopic)

Weighted toward Standard and Challenge, Foundation the smallest share:

- **6 Foundation** (20%) — the core technique in isolation, 2 marks, `examStyle: false`.
- **12 Standard** (40%) — a typical example-sheet question, 3–4 marks, `examStyle: true`.
- **12 Challenge** (40%) — synoptic / multi-step / the starred `(∗)` parts of the
  sheets / cross-method, 5+ marks, `examStyle: true`.

Total 30. Adjust only if the user asks; keep Foundation the minority.

## Verification (the wedge — do not skip)

Hand-derived asymptotic coefficients are easy to get wrong by a sign or constant.
For each question whose result is numerically checkable, confirm it with
`scripts/verify.py` before locking:

- Integrals: `laplace_integral_check(integrand, a, b, asym, xs)` — evaluates the
  exact integral at large parameter values and compares to your asymptotic value;
  a correct expansion has relative error that shrinks as the parameter grows.
- Series: build coeffs, use `optimal_truncation` + `series_value`, check `rel_err`.
- Special functions / roots: compare against `mpmath` (`mp.gamma`, `mp.besseli`,
  `mp.findroot`, etc.).

Sanity-check the harness once with `python scripts/verify.py --selftest`. If a
result genuinely can't be checked numerically (a pure existence/uniqueness proof,
a sketch-the-Stokes-lines question), say so in the `// REVIEW:` note rather than
pretending it was verified.

## Mathematics quality

Work every problem from scratch; do not trust a sheet's stated answer without
re-deriving. Confirm `finalAnswer` matches the last `workingLatex` step and the
numerical check. Watch the usual equivalence traps the checker will later test for:
branch of `arg`, ±2πk in phases, ½ from half-Gaussians/endpoint maxima, the
\\(e^{\\pm i\\pi/4}\\) stationary-phase factor, constants of integration, sign of
the steepest-descent square root, equivalent surd/Γ forms.

If a subtopic would require a technique outside the module's scope, flag it rather
than silently including it.

## References (read before generating)

- `references/schema.md` — the `Question[]` schema, fields, LaTeX conventions, a
  worked graduate example.
- `references/solution-style.md` — the fully-detailed solution style (the
  deliberate departure from the terse A-Level banks) and rigour conventions.
- `references/taxonomy.md` — how to build the manifest from sheets, plus the full
  reference taxonomy for `asymptotic_methods` (10 topics, 40 subtopics).

## Interaction style

For Benjamin building Wisest, not for end-students. Direct, no pleasantries, no
long narration. On a manifest build: show the taxonomy, get a go-ahead. On a
generation call: state the target subtopic and mix, generate, verify, save,
present, report the count. If the user provides examples or a dialect, mirror it
over these defaults.---
name: wisest-damtp-autogen
description: "Generate complete Wisest question-bank modules from Cambridge DAMTP example sheets, driven by the command \\do(module). Trigger whenever the user issues \\do(...) or do(...) with a module name (e.g. \\do(asymptotic_methods), \\do(perturbation_methods), \\do(fluid_dynamics)), or asks to build, generate, or populate a DAMTP module, a graduate or Part II/III maths module, a multi-topic question bank from example sheets, or content seeded from PDFs in a DAMTP_Example_Sheets folder — even when they don't mention Wisest, TypeScript, or the schema. Also trigger on module codes like am1 or am5b, or a request to generate the next subtopic or a specific topic of an existing module. Reads the example sheets for the module, builds a 10-topic and roughly 4-subtopic-per-topic taxonomy, then generates 30 fully-worked questions per subtopic (Foundation, Standard, Challenge, weighted toward Standard and Challenge) in the project's Question array schema, numerically verifying results before locking them."
---

# Wisest DAMTP Module Auto-Generator

Turns a folder of Cambridge DAMTP example sheets into a full Wisest question-bank
module. One command: `\do(<module>)`. It reads the sheets, builds the topic/subtopic
taxonomy, and generates 30 fully-worked questions per subtopic in the project's
`Question[]` schema, matching the style of the example sheets and the Wisest app.

This is the graduate-level sibling of `wisest-question-generator`. Two differences
matter: the content is whole modules (not single topics), and the solutions are
**fully detailed** rather than terse (see `references/solution-style.md`).

## The `\do(...)` command

```
\do(<module>)                generate the next pending subtopic (build the manifest first if absent)
\do(<module>/<topicCode>)    work within one topic, e.g. \do(asymptotic_methods/am5)
\do(<module>/<subtopicCode>) generate exactly one subtopic, e.g. \do(asymptotic_methods/am5b)
\do(<module> --manifest)     build/refresh the taxonomy only, then stop
\do(<module> --all)          generate every remaining subtopic in turn (warn: this is many calls' worth)
```

`do(...)` without the backslash is the same command. The module name is matched
loosely against the sheet folders, so `asymptotic_methods`, `Asymptotic Methods`
and `asymptotic-methods` all resolve.

## Why generation is incremental

A module is ~10 topics × ~4 subtopics × 30 questions ≈ **1200 questions**. That is
not one response. So `\do()` is **resumable**: it persists a manifest and a progress
file, and by default generates the **single next pending subtopic** per call. The
user advances the module by calling `\do(<module>)` repeatedly (or names a target).

## Pipeline (every call)

1. **Read the sheets.** `python scripts/read_sheets.py <module>` globs
   `~/Desktop/DAMTP_Example_Sheets/<module>/*.pdf` and dumps their text. If the
   folder isn't found, run `--list` to show what exists and ask. (Override the base
   with `--root`. If `pdfplumber`/`pypdf` are missing the script says how to install.)
2. **Manifest: load or build.** Look for `content/<module>/<module>.manifest.ts`.
   - Absent → build the taxonomy from the sheets per `references/taxonomy.md`, pipe
     the taxonomy JSON to `python scripts/manifest.py build <module>`, present the
     `*.manifest.ts`, and **stop for a go-ahead** unless the call named a specific
     subtopic. The partition shapes 1000+ questions; getting sign-off is worth it.
   - Present → continue.
3. **Pick the target subtopic.** Named in the command, else
   `python scripts/manifest.py next <module>` (prints the next `pending`).
4. **Generate 30 questions** for that subtopic — schema in `references/schema.md`,
   style in `references/solution-style.md`, mix below. Seed each question from the
   relevant example-sheet questions (`sheetRefs` in the manifest) but vary
   constants/limits/framing — never reproduce a sheet question verbatim.
5. **Verify before locking.** Numerically sanity-check every result that admits it
   (`scripts/verify.py` primitives — see below). Flag anything you cannot verify
   with a `// REVIEW:` comment above the question.
6. **Save & record.** Write `content/<module>/<subtopicCode>.ts`, then
   `python scripts/manifest.py done <module> <subtopicCode>`, and `present_files`
   the new bank. Report the running count (`status`).

The repo target mirrors the other Wisest generators
(`https://github.com/bwalpole2025/Wisest_Maths_App.git`); save under its content
directory if the user is working inside the repo, otherwise `content/<module>/`.

## Difficulty mix (per 30-question subtopic)

Weighted toward Standard and Challenge, Foundation the smallest share:

- **6 Foundation** (20%) — the core technique in isolation, 2 marks, `examStyle: false`.
- **12 Standard** (40%) — a typical example-sheet question, 3–4 marks, `examStyle: true`.
- **12 Challenge** (40%) — synoptic / multi-step / the starred `(∗)` parts of the
  sheets / cross-method, 5+ marks, `examStyle: true`.

Total 30. Adjust only if the user asks; keep Foundation the minority.

## Verification (the wedge — do not skip)

Hand-derived asymptotic coefficients are easy to get wrong by a sign or constant.
For each question whose result is numerically checkable, confirm it with
`scripts/verify.py` before locking:

- Integrals: `laplace_integral_check(integrand, a, b, asym, xs)` — evaluates the
  exact integral at large parameter values and compares to your asymptotic value;
  a correct expansion has relative error that shrinks as the parameter grows.
- Series: build coeffs, use `optimal_truncation` + `series_value`, check `rel_err`.
- Special functions / roots: compare against `mpmath` (`mp.gamma`, `mp.besseli`,
  `mp.findroot`, etc.).

Sanity-check the harness once with `python scripts/verify.py --selftest`. If a
result genuinely can't be checked numerically (a pure existence/uniqueness proof,
a sketch-the-Stokes-lines question), say so in the `// REVIEW:` note rather than
pretending it was verified.

## Mathematics quality

Work every problem from scratch; do not trust a sheet's stated answer without
re-deriving. Confirm `finalAnswer` matches the last `workingLatex` step and the
numerical check. Watch the usual equivalence traps the checker will later test for:
branch of `arg`, ±2πk in phases, ½ from half-Gaussians/endpoint maxima, the
\\(e^{\\pm i\\pi/4}\\) stationary-phase factor, constants of integration, sign of
the steepest-descent square root, equivalent surd/Γ forms.

If a subtopic would require a technique outside the module's scope, flag it rather
than silently including it.

## References (read before generating)

- `references/schema.md` — the `Question[]` schema, fields, LaTeX conventions, a
  worked graduate example.
- `references/solution-style.md` — the fully-detailed solution style (the
  deliberate departure from the terse A-Level banks) and rigour conventions.
- `references/taxonomy.md` — how to build the manifest from sheets, plus the full
  reference taxonomy for `asymptotic_methods` (10 topics, 40 subtopics).

## Interaction style

For Benjamin building Wisest, not for end-students. Direct, no pleasantries, no
long narration. On a manifest build: show the taxonomy, get a go-ahead. On a
generation call: state the target subtopic and mix, generate, verify, save,
present, report the count. If the user provides examples or a dialect, mirror it
over these defaults.