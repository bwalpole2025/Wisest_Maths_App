# When Diagrams Earn Their Place

Reach for a diagram when **the spatial / geometric meaning is the point**, not when it's incidental.

## Subtopic guide

| Subtopic | Diagram-worthy step | Skip |
|---|---|---|
| Trig equations | Solution ring on unit circle; sin/cos curve with horizontal line through intersections | Algebraic rearrangement (e.g. expand `\\sin 2x`) |
| Transformations of functions | Before/after sketch showing the transformation | Restating the mapping rule in words |
| Modulus equations | Reflected branches of \\(y = \|f(x)\|\\); intersection with the line | Case-splitting algebra |
| Sketching curves | The final sketch with intercepts/asymptotes/turning points | Differentiating to find stationary points |
| Vectors (2D) | Parallelogram of vectors, position triangle | Dot/cross product arithmetic |
| Vectors (3D) | Directions in 3-space, projection lines | Component arithmetic |
| Numerical methods | Cobweb/staircase showing convergence; Newton-Raphson tangent line | The recurrence relation written out |
| Sequences / series | Cobweb for recurrence convergence | Sum formulas |
| Exponential/log | Curve with asymptote, intercept | Log laws |

## What not to put a diagram on

If you're tempted to attach a diagram to "Apply the chain rule" or "Multiply both sides by 2", **don't**. That's noise. The student is doing algebra, not geometry.

## Roughly how many diagrams per bank

For 20 questions, target **15–25 diagrams total** across the bank. Some questions will have zero, some two. Don't pad for the sake of hitting a count.

Per difficulty band:
- **Foundation (7)**: 0–1 diagrams each — usually a clarifying sketch for the trickier ones.
- **Standard (7)**: 1 diagram each, typically in the worked solution.
- **Challenge (6)**: may warrant 2 diagrams (e.g. before/after transformation, cobweb at two iteration depths).

## Label-overlap discipline

Since this skill can't render Mafs JSX visually to check, follow these rules when placing labels:

1. **Offset labels ≥ 0.2 viewBox units in y** from their point. Steep curves: offset 0.4 in x instead.
2. **Don't place labels on grid intersections** — they collide with axis tick labels.
3. **Multiple labelled points on a curve**: alternate above/below.
4. **Generous viewBox** — curve range \\([-1, 1]\\) → viewBox y \\([-1.5, 1.5]\\). A curve that just barely fits looks cramped.
5. **Don't place labels at the same x-coordinate** unless vertically separated by ≥0.5 viewBox units.

If a step's diagram has 4+ labels, the diagram is doing too much — split into two steps.

## When you're uncertain

Add `// REVIEW:` above the `diagram` field as a TypeScript comment, with a one-line note about what's worth checking. Examples:

```ts
// REVIEW: cobweb on f(x) = cos(x) — verify staircase doesn't cross x-axis
diagram: `<Mafs ...>`
```

Benjamin will look at flagged ones first in his dev environment. 