# Mafs API + Schema

## Schema extension — RESOLVED (do not re-ask)

The field is **`mafs`** (NOT `diagram` — that name is already taken by the
structured `CurveDiagramConfig`). Confirmed live in `lib/types/index.ts`:

```ts
interface SolutionStep {
  // …existing fields (description, workingLatex, explanation, diagram?, tikz?)…
  mafs?: string;          // Mafs JSX source string, rendered by MafsDiagram.tsx
}
interface Question {
  // …existing fields…
  questionMafs?: string;  // optional Mafs figure shown with the stem
}
```

The `mafs` value is a JSX/TSX source string — a single `<Mafs>…</Mafs>` element —
written as a **template literal** (backticks) so the curly braces in JSX props
survive intact. It is rendered at runtime by
`components/questions/MafsDiagram.tsx` (react-live + the full `mafs` scope).

## Default Mafs API assumed

This is the standard `mafs.dev` API. If Benjamin's wrapper differs, patch this file after first use.

### Wrapper

```jsx
<Mafs viewBox={{ x: [-5, 5], y: [-3, 3] }} height={260}>
  ...
</Mafs>
```

Height between 220 and 320 px. Pick a viewBox slightly larger than the content (see label discipline in `diagrams.md`).

### Axes

```jsx
<Coordinates.Cartesian />
```

For trig, use `xAxis={{ lines: Math.PI / 2 }}` so gridlines fall on π/2 multiples.

For integer grids, just `<Coordinates.Cartesian />` is fine.

### Curves

```jsx
<Plot.OfX y={(x) => Math.sin(x)} color="var(--mafs-fg-accent)" />
<Plot.OfX y={(x) => x*x - 4} domain={[-3, 3]} />
<Plot.OfY x={(y) => y*y} />
```

Restrict to a domain if the curve goes off to infinity within the viewBox.

### Points

```jsx
<Point x={Math.PI / 6} y={0.5} color="var(--mafs-fg-blue)" />
```

### Vectors

```jsx
<Vector tail={[0, 0]} tip={[3, 2]} color="var(--mafs-fg-accent)" />
```

### Lines and line segments

```jsx
<Line.Segment point1={[0, 0]} point2={[4, 3]} />
<Line.ThroughPoints point1={[-2, 1]} point2={[2, 3]} />
```

### Shaded regions

```jsx
<Polygon points={[[0,0], [2,0], [2,1], [0,1]]} fillOpacity={0.2} />
```

### Text labels

```jsx
<Text x={Math.PI / 6} y={0.75} attach="n" attachDistance={4}>π/6</Text>
```

`attach` is one of `n`, `ne`, `e`, `se`, `s`, `sw`, `w`, `nw` — direction to offset the label relative to the anchor point.

## Colour tokens

Use CSS variables, never hex. This way Mafs's light/dark theme handles itself.

- `var(--mafs-fg-accent)` — primary curve / focus object
- `var(--mafs-fg-blue)` — secondary
- `var(--mafs-fg-orange)` — tertiary or "before" in a before/after pair
- `var(--mafs-fg-green)` — quaternary or "after"

## Complete example

```jsx
<Mafs viewBox={{ x: [-0.5, 7], y: [-1.5, 1.5] }} height={260}>
  <Coordinates.Cartesian xAxis={{ lines: Math.PI / 2 }} />
  <Plot.OfX y={(x) => Math.sin(x)} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0, 0.5]} point2={[2 * Math.PI, 0.5]} opacity={0.4} />
  <Point x={Math.PI / 6} y={0.5} color="var(--mafs-fg-blue)" />
  <Point x={5 * Math.PI / 6} y={0.5} color="var(--mafs-fg-blue)" />
</Mafs>
```

## If you need a primitive that's not above

Write the most reasonable JSX you can guess, and add `// REVIEW: <primitive> — confirm Mafs supports this` above the diagram.

## Confirmed setup (resolved 2026-06 — do not re-ask)

1. **Mafs imports** — `mafs@^0.21` is installed; `MafsDiagram.tsx` puts the WHOLE
   `mafs` module in scope, so `Mafs`, `Coordinates.Cartesian`, `Plot.OfX`,
   `Plot.OfY`, `Point`, `Vector`, `Line.Segment`, `Line.ThroughPoints`, `Polygon`,
   `Polyline`, `Circle`, `Ellipse`, `Text`, `Theme`, `LaTeX` are all available
   directly (no wrapper). `Math` is a JS global — use it freely.
2. **Field name** — **`mafs`** on a step, **`questionMafs`** on a question.
3. **Colour tokens** — `--mafs-fg-accent`, `--mafs-fg-blue`, `--mafs-fg-orange`,
   `--mafs-fg-green` are defined in `app/globals.css` (light + dark). Use
   `color="var(--mafs-fg-accent)"` etc., never hex.

Authoring notes: output ONE `<Mafs>…</Mafs>` element per `mafs` field as a
backtick template literal. Height 220–320. Keep the viewBox a touch larger than
the content. react-live evaluates it as a single JSX expression — no `import`,
no `return`, no surrounding function.