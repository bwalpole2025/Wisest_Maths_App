# Re-derivation Discipline

The single biggest failure mode of this skill is anchoring on the existing solution — reading the worked solution, finding it plausible, and rubber-stamping it. This file shows how to avoid that.

## The rule

For every question:

1. **Cover the solution.** Read `questionText` and only `questionText`.
2. **Solve it from scratch** in a scratchpad. Actually do the algebra — write each step. Don't shortcut to "yes that looks right".
3. **Then** uncover and compare.

In practice, when working in a Claude Code session, the "scratchpad" can be a comment block in your reasoning, or a temp file at `/tmp/scratch-{id}.txt`. The key is that you commit to an answer *before* seeing the file's answer.

## What "checking a step transition" means

For step `n` with previous step `n-1`:

- Treat step `n-1` as **given** (even if you'd have written it differently).
- Ask: is step `n` a valid mathematical consequence of step `n-1`? Specifically:
  - If step `n-1` says `f(x) = (3x+2)^4` and step `n` says `f'(x) = 4(3x+2)^3 \\cdot 3`, that's a valid chain-rule application. ✅
  - If step `n` says `f'(x) = 4(3x+2)^3` (no inner derivative), that's wrong. 🟠
  - If step `n` says `f'(x) = 4(3x+2)^3 \\cdot 3 = 12(3x+2)^4` (kept the power instead of decreasing it), that's wrong. 🟠

Important: don't flag a step as wrong just because *you* would have written it differently. Multiple valid solution paths exist for most problems. Only flag if the move from step `n-1` to step `n` is mathematically invalid.

## Worked examples of the discipline

### Example 1 — differentiation, finding a 🔴

**Question stem:** Differentiate `\\(y = (2x^2 + 1)^5\\)`.

**My fresh re-derivation** (without looking at the file):
```
Let u = 2x^2 + 1, so y = u^5.
dy/du = 5u^4
du/dx = 4x
dy/dx = 5(2x^2 + 1)^4 · 4x = 20x(2x^2 + 1)^4
```

So my answer is `20x(2x^2+1)^4`.

**File's `finalAnswer`:** `10x(2x^2+1)^4`.

**Discrepancy.** Recheck once: `du/dx = 4x` (yes, derivative of `2x^2 + 1` is `4x`, not `2x`). My answer stands. Flag as 🔴 with `Correct: 20x(2x^2+1)^4` and `Why: inner derivative is 4x, not 2x`.

### Example 2 — integration, finding a 🟠 with right finalAnswer

**Question stem:** Find `\\(\\int 6x(x^2+1)^2 \\, dx\\)`.

**My re-derivation:** Let `u = x^2 + 1`, `du = 2x \\, dx`, so `6x \\, dx = 3 \\, du`. Integral becomes `\\int 3u^2 \\, du = u^3 + C = (x^2+1)^3 + C`.

**File's `finalAnswer`:** `(x^2+1)^3 + C` ✅ matches.

**File's step 2:** `\\int 6x(x^2+1)^2 \\, dx = \\int 3(x^2+1)^2 \\cdot 2x \\, dx`. ✅ valid.

**File's step 3:** `= 3 \\cdot \\tfrac{(x^2+1)^3}{3} + C`. Wait — they've written the antiderivative of `(x^2+1)^2 \\cdot 2x` as `\\tfrac{(x^2+1)^3}{3}`. The factor of `1/3` is correct (raise power, divide by new power). The `3` outside times `1/3` gives `1`, so the next step `(x^2+1)^3 + C` is right. ✅

This one's clean. Move on.

### Example 3 — integration, 🟠 where two errors cancel

**Question stem:** `\\(\\int \\sin(2x) \\, dx\\)`.

**My re-derivation:** `-\\tfrac{1}{2}\\cos(2x) + C`.

**File's `finalAnswer`:** `-\\tfrac{1}{2}\\cos(2x) + C` ✅.

**File's step 2:** `= -\\cos(2x) \\cdot \\tfrac{1}{2} + C` (just rearranged) ✅.

**File's step 1:** `\\int \\sin(2x) \\, dx = -\\cos(2x)`. **🟠** — they've omitted the `1/2` factor in step 1. Step 2 then "introduces" the `1/2` as if rearranging, but it's actually correcting the missing factor. The final answer is right but the reasoning is broken.

Flag as 🟠 with:
```
From:   ∫ sin(2x) dx
To:     -cos(2x)
Should: -½ cos(2x)
Why:    chain factor of 1/2 dropped in step 1; final answer is correct only because step 2 silently reintroduces it.
```

### Example 4 — equivalent forms, no issue

**Question stem:** `\\(\\int \\tfrac{1}{2x} \\, dx\\)`.

**File's `finalAnswer`:** `\\tfrac{1}{2}\\ln|x| + C`.

**My re-derivation:** `\\tfrac{1}{2}\\ln|2x| + C` — but `\\ln|2x| = \\ln 2 + \\ln|x|`, so this is `\\tfrac{1}{2}\\ln|x| + (\\tfrac{1}{2}\\ln 2 + C)`, which absorbs into the constant. Equivalent. ✅

Don't flag this. The forms are equivalent up to the constant of integration.

## Common error modes to watch for

- **Sign errors** in derivatives of `\\cos` / `\\sin` / `e^{-x}`.
- **Dropped chain-rule inner derivatives** (the most common error in the differentiation banks).
- **Missing `+C`** in indefinite integrals (this is a 🟠 — the answer is incomplete, not literally wrong).
- **Wrong limits substitution order** in definite integrals: `F(b) - F(a)`, not `F(a) - F(b)`.
- **Algebra: incorrect expansion of `(a+b)^2 = a^2 + b^2`** (missing `2ab`).
- **Logarithm rule misapplication**: `\\ln(a+b) ≠ \\ln a + \\ln b`.
- **Confusing `\\ln` and `\\log`** — A-Level uses `\\ln` for natural log; if a question says `\\log` it usually means base 10.
- **Quotient rule numerator order**: `\\tfrac{u'v - uv'}{v^2}`, not `\\tfrac{uv' - u'v}{v^2}`.

When you spot one of these, double-check by re-deriving — these are also the errors you might *introduce* if you're rushing.

## When you genuinely can't tell

If you've worked the question twice and you're still unsure (e.g. the question is at the edge of A-Level Further Maths and involves a technique you're not confident on), don't flag it as wrong. Add it to the `⚠️ UNVERIFIED` block in the report with a one-sentence note on what you'd need to confirm. Better to under-flag than to flag confidently and be wrong — a false positive teaches Benjamin to distrust the checker.
