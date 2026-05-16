# Output Format + LaTeX Escaping

## File structure

```ts
import { Question } from "@/lib/types";

export const questions: Question[] = [
  // 20 question objects
];
```

## A complete example question

```ts
{
  id: 'y2tr3-001',
  topicRef: 'y2tr3',
  topicTitle: 'Solving Trigonometric Equations 01',
  difficulty: 'Foundation',
  questionText: 'Solve \\( \\sin x = \\tfrac{1}{2} \\) for \\( 0 \\le x \\le 2\\pi \\).',
  marks: 2,
  examStyle: false,
  yearCreated: 2026,
  tags: ['trig equations', 'sin', 'principal values'],
  workedSolution: {
    steps: [
      {
        stepNumber: 1,
        description: 'Find the principal value.',
        workingLatex: '\\sin x = \\tfrac{1}{2} \\Rightarrow x = \\tfrac{\\pi}{6}',
        explanation: ''
      },
      {
        stepNumber: 2,
        description: 'Use symmetry of \\( \\sin x \\) for the second solution.',
        workingLatex: 'x = \\pi - \\tfrac{\\pi}{6} = \\tfrac{5\\pi}{6}',
        explanation: '',
        diagram: `<Mafs viewBox={{ x: [-0.5, 7], y: [-1.5, 1.5] }} height={260}>
  <Coordinates.Cartesian xAxis={{ lines: Math.PI / 2 }} />
  <Plot.OfX y={(x) => Math.sin(x)} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0, 0.5]} point2={[2 * Math.PI, 0.5]} opacity={0.4} />
  <Point x={Math.PI / 6} y={0.5} color="var(--mafs-fg-blue)" />
  <Point x={5 * Math.PI / 6} y={0.5} color="var(--mafs-fg-blue)" />
</Mafs>`
      }
    ],
    finalAnswer: '\\( x = \\tfrac{\\pi}{6},\\ \\tfrac{5\\pi}{6} \\)'
  }
},
```

## Field rules

- `id`: `<topicRef>-NNN`, zero-padded to 3 digits, sequential from 001.
- `topicRef`: the code Benjamin gave (e.g. `y2tr3`).
- `topicTitle`: human title + 2-digit suffix (`"Solving Trigonometric Equations 01"`).
- `difficulty`: `'Foundation'` | `'Standard'` | `'Challenge'`.
- `marks`: Foundation 2, Standard 3, Challenge 4+.
- `examStyle`: `false` for Foundation, `true` for Standard and Challenge.
- `yearCreated`: 2026.
- `tags`: headline technique + secondary techniques used (e.g. `['trig equations', 'double angle', 'identities']`).
- `finalAnswer`: matches the last `workingLatex` step. Always wrapped in `\\( ... \\)`.

## LaTeX escaping — this is where errors creep in

There are two different string types in the output and they escape differently:

### LaTeX fields (`questionText`, `description`, `workingLatex`, `explanation`, `finalAnswer`)

Use **single-quoted strings** and double-backslash everything:

- ✓ `'Solve \\( \\sin x = 1 \\) for ...'`
- ✗ `'Solve \( \sin x = 1 \) for ...'` (escapes won't survive)

The single `\\` in source becomes one `\` at runtime, which is what KaTeX needs.

### `diagram` field (Mafs JSX)

Use **backticks** (template literal). JSX expects single backslashes for its strings, and the JSX braces need to survive:

```ts
diagram: `<Mafs viewBox={{ x: [-1, 1], y: [-1, 1] }} height={260}>
  <Plot.OfX y={(x) => Math.sin(x)} />
</Mafs>`
```

There's no LaTeX inside `diagram` — Mafs renders maths through its own text/label components, not KaTeX. If you do need a label with maths-looking content, write it as plain text:

```jsx
<Text x={1} y={0.6}>π/6</Text>
```

Not `\\pi/6`. The Mafs `<Text>` renders plain Unicode.

### Common escaping mistakes

- Double-backticking LaTeX (it'll work but is unconventional and Benjamin's prettier config likely flags it).
- Single-backslashing inside a single-quoted LaTeX string (escapes vanish).
- Putting `\\sin x` inside a backtick `diagram` field (renders the literal `\sin x` in the SVG, which is wrong).

## Saving and presenting

Save to the working directory as `<topicRef>.ts` (e.g. `y2tr3.ts`). Then call `present_files` with the file path so Benjamin can download it directly.

## Pre-save checklist

- [ ] Solve each question yourself in scratch working.
- [ ] `finalAnswer` matches the last `workingLatex` step.
- [ ] `marks` matches difficulty band.
- [ ] `tags` covers headline + secondary techniques.
- [ ] Each `diagram` is consistent with its step's algebra.
- [ ] First non-whitespace character of every `questionText` is alphabetic.
- [ ] All numbers/vectors/units in maths contexts are wrapped in `\\( ... \\)`.
- [ ] All units use `\\mathrm{}`.
- [ ] No technique used that hasn't been taught yet at this syllabus point — if there is, flag it.