# Mafs API + Schema

## Schema extension

The existing `Question` schema gets one new optional field on each step:

```ts
interface Step {
  stepNumber: number;
  description: string;
  workingLatex: string;
  explanation: string;
  diagram?: string;   // NEW — Mafs JSX as a string, rendered by the frontend
}
```

The `diagram` value is a JSX/TSX source string written as a **template literal** (backticks) so the curly braces in JSX props survive intact.

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

## Confirm on first use

The big unchecked assumptions:

1. **Mafs imports** — does Benjamin's app expose `Mafs`, `Coordinates.Cartesian`, `Plot.OfX`, `Point`, `Vector`, `Line.Segment`, `Polygon`, `Text` directly, or via a wrapper?
2. **Field name** — is `Step.diagram` correct, or different (`figure`, `mafs`, `svg`)?
3. **Colour tokens** — do `var(--mafs-fg-accent)` etc. exist in his CSS?

After he answers once, patch this file with the real names so it doesn't get re-asked.