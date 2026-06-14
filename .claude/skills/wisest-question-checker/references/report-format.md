# Report Format

The report is printed to stdout. Plain text with emoji severity markers. No markdown headers, no preamble, no closing message.

## Skeleton

```
Wisest Question Check — {filename}
{N} problems across {M}/{total} questions.

🔴 WRONG FINAL ANSWER  ({count})
  {entries...}

🟠 WRONG INTERMEDIATE STEP  ({count})
  {entries...}

🟡 MINOR  ({count})
  {entries...}

⚠️ UNVERIFIED  ({count})
  {entries...}
```

Sections with zero entries are **omitted entirely** (header and all). If `N` is 0, print only:

```
Wisest Question Check — {filename}
✅ All {total} questions check out.
```

## Entry formats

### 🔴 WRONG FINAL ANSWER

```
  {id}  "{first 50 chars of questionText, ellipsis if longer}"
    Given:    {finalAnswer verbatim from file}
    Correct:  {your re-derived answer, same LaTeX style as file}
    Why:      {one sentence}
```

### 🟠 WRONG INTERMEDIATE STEP

```
  {id}  step {n}
    From:     {workingLatex of step n-1, or "(question stem)" if n=1}
    To:       {workingLatex of step n verbatim}
    Should:   {what step n's workingLatex should have been}
    Why:      {one sentence; mention if the error propagates or cancels}
```

### 🟡 MINOR

One-line entries:

```
  {id}  {brief description} → {suggested fix}
```

Examples:
```
  y2df3-007  finalAnswer 6/8 not simplified → \\tfrac{3}{4}
  y2in4-012  step 3 mixes \\frac and \\tfrac inconsistently → use \\tfrac throughout
```

### ⚠️ UNVERIFIED

```
  {id}  {one sentence saying what you couldn't confirm}
```

## Optional footer

Only if there's a clear cluster-level pattern (≥3 errors all in the same skill cluster, all the same kind of mistake), add a single blank line then:

```
Pattern: {one-sentence description of the systematic error}
```

Do not include a footer otherwise. No "Done.", no "Hope this helps.", no summary repetition.

## Full worked example

Suppose a 20-question chain rule file has three errors. The output is:

```
Wisest Question Check — y2df3.ts
3 problems across 3/20 questions.

🔴 WRONG FINAL ANSWER  (1)
  y2df3-004  "Differentiate y = (2x^2 + 1)^5"
    Given:    10x(2x^2+1)^4
    Correct:  20x(2x^2+1)^4
    Why:      inner derivative is 4x, not 2x.

🟠 WRONG INTERMEDIATE STEP  (1)
  y2df3-011  step 2
    From:     y = e^{3x^2}
    To:       \\tfrac{dy}{dx} = e^{3x^2}
    Should:   \\tfrac{dy}{dx} = 6x \\cdot e^{3x^2}
    Why:      chain factor 6x dropped; finalAnswer recovers it but the step is invalid as written.

🟡 MINOR  (1)
  y2df3-018  finalAnswer 6/8 not simplified → \\tfrac{3}{4}
```

And for a clean file:

```
Wisest Question Check — y2in4.ts
✅ All 20 questions check out.
```

That's the full spec. Match it exactly.
