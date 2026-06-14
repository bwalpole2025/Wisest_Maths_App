---
name: wisest-question-generator-with-diagrams
description: "Generate A-Level Maths question banks for Wisest as TypeScript files with Mafs diagrams in worked solutions. Trigger for A-Level maths questions or Year 2 Pure subtopics where visuals help: trig equations, transformations, modulus, vectors, curve sketching, cobweb/staircase, Newton-Raphson, codes like y2tr3."
---

# Wisest Generator + Mafs

Direct.

## Workflow

1. Confirm subtopic + `topicRef`.
2. Sketch 3–6 clusters, get go-ahead.
3. Read all references.
4. Generate 20 questions: 7F/7S/6C. Mafs JSX in `Step.diagram` where useful.
5. Self-check diagrams; flag uncertain with `// REVIEW:`.
6. Save and `present_files`.

## References (read first)

- `references/style.md` — words-first, KaTeX, units, vectors.
- `references/diagrams.md` — when to draw + label rules.
- `references/mafs.md` — Mafs API + schema.
- `references/output.md` — template + escaping.

First use: confirm Mafs imports + colour tokens.
