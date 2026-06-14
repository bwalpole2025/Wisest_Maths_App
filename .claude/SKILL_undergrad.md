Wisest Undergraduate Engineering-Maths Question Generator
This is the undergraduate counterpart to wisest-question-generator. It produces
question banks for first- and second-year STEM/engineering mathematics (the
"mathematical methods" spine: complex numbers, vectors, linear algebra, calculus,
series, ODEs, multivariable & vector calculus, numerical methods).
The output is always a TypeScript file conforming to the project's Question[]
schema — identical to the A-Level banks — ready to drop into the codebase.
The defaults below are inherited from wisest-question-generator; only the
syllabus scope changes. Where this file is silent, follow that skill.
Scope (this is the only substantive difference from the A-Level generator)
Target level is first/second-year undergraduate engineering & STEM mathematics,
as defined by wisest-undergrad-eng-maths-manifest.ts. Each manifest entry gives
the topic code (use as topicRef), title (use as the base of topicTitle),
year (1 or 2 — calibrate difficulty to the appropriate stage), and a one-line
scope that is the topic's remit.
Replace the A-Level syllabus guard with this one: if a question would require a
technique outside first/second-year undergraduate engineering maths (e.g. measure
theory, advanced functional analysis, research-level material), flag it to the user
rather than silently including it. Undergraduate techniques the A-Level generator
would have refused — Laplace transforms, eigenvalues, partial derivatives, line
integrals, de Moivre at depth, etc. — are now in scope.
Core workflow

Resolve the topic from the manifest. The user passes a topic code
(e.g. uod9). Look it up in wisest-undergrad-eng-maths-manifest.ts for its
title, year, scope, and visual flag. If the topic isn't in the manifest,
ask once for its scope before proceeding. Don't re-ask for anything the manifest
already supplies.
If visual: true, defer to wisest-question-generator-with-diagrams instead
of this skill (vectors in 3D, Argand loci, gradient fields, phase planes, surfaces
of revolution, Fourier waveforms all read far better with a Mafs diagram).
Plan 3–6 skill clusters that partition the topic's scope (same rationale as
the A-Level generator: clusters are how the banks build fluency). Show the clusters,
get a quick go-ahead before generating all 20.
Generate 20 questions across clusters and difficulty bands (mix below).
Write the output as a valid TypeScript file <code>.ts following
references/schema.md, importing Question from @/lib/types.
Save to the undergraduate content directory of the repo and present it with
present_files.

Difficulty mix
Same 20-question spread as the A-Level banks, calibrated to the topic's year:

6 Foundation — the core technique in isolation, minimal chaining, 2 marks, examStyle: false.
9 Standard — typical application of the kind a first/second-year tutorial sheet would set, 3 marks, examStyle: true.
5 Challenge — synoptic / multi-step / proof-flavoured / cross-topic, 4+ marks, examStyle: true.

"Foundation" is relative to the undergraduate stage, not to A-Level — a Foundation
eigenvalue question is still a genuine 2x2 eigenvalue computation, just unembellished.
Style, schema and LaTeX
Identical to wisest-question-generator:

Terse solutions. Short imperative description, the maths in workingLatex,
explanation usually "" (a one-sentence note only for a genuinely subtle step).
Field-by-field schema and the worked example are in references/schema.md; tone,
granularity and cognitive-load principles in references/style-guide.md.
LaTeX: inline \\( ... \\), \\tfrac in steps / \\dfrac in stems, \\cdot for
multiplication, ^{-1/2} for fractional/negative exponents. Match the existing bank.
tags carry the headline technique plus any secondary technique used.

Mathematics quality
Every question must have a correct, independently-checked solution. Work each
problem from scratch; confirm finalAnswer matches the last workingLatex step;
keep marks consistent with the band. Watch undergraduate-specific equivalence
traps where the checker will later test for equivalence, not literal identity:
the arbitrary constant of integration, eigenvector scaling/sign, branch of arg,
±2πk in arguments, and equivalent surd/log forms.
Interaction style
For Benjamin building Wisest, not for end-students. Direct, no pleasantries, don't
narrate the generation at length: show the clusters, get a go-ahead, generate, save,
present. If the user provides examples, mirror their style precisely over these defaults.