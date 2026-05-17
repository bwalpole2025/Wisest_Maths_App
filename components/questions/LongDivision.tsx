"use client";

import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import type { LongDivisionConfig } from "@/lib/types";

/**
 * Renders a polynomial long-division "house" layout from a structured config.
 *
 * Layout:
 *   - Divisor on the left, baseline-aligned with the dividend row, followed by `)`.
 *   - A right-hand table with one column per descending power of x in the dividend.
 *   - Top row = quotient terms (column-aligned to dividend), with a single
 *     continuous bottom border spanning all dividend columns.
 *   - Dividend row beneath.
 *   - For each subtraction step:
 *       * a subtrahend row (terms displayed with sign as they would be added),
 *       * a separator row whose cells have a bottom border only on the
 *         columns the new remainder occupies — drawn continuously via
 *         per-cell `border-bottom`,
 *       * the new remainder row.
 */
export function LongDivision({ config }: { config: LongDivisionConfig }) {
  const { divisor, dividend, quotient, steps } = config;
  const numCols = dividend.length;

  // Determine, for each step, which columns the new remainder occupies (so the
  // partial bar above the new remainder spans exactly those columns).
  const stepBarCols = steps.map((s) => s.remainder.map((c) => c.trim() !== ""));

  const cellClass = "px-1.5 py-0.5 text-right align-baseline whitespace-nowrap";

  return (
    <div className="my-3 flex justify-center overflow-x-auto">
      <div className="inline-flex items-stretch">
        {/* Divisor + ) on the left, baseline aligned with the dividend row. */}
        <div className="flex flex-col justify-start pr-1 select-none">
          {/* Empty top row to skip the quotient row. */}
          <div className="invisible px-1.5 py-0.5">
            <InlineMath math={"x"} />
          </div>
          {/* The divisor + bracket sits opposite the dividend row. */}
          <div className="px-1.5 py-0.5 align-baseline whitespace-nowrap text-right">
            <InlineMath math={divisor} />
            <span className="ml-1 font-serif text-lg leading-none">{")"}</span>
          </div>
        </div>

        {/* Right-hand table: quotient / dividend / step rows. */}
        <table className="border-collapse">
          <tbody>
            {/* Quotient row with continuous bottom bar across all dividend cols. */}
            <tr>
              {quotient.map((q, i) => (
                <td
                  key={`q-${i}`}
                  className={cellClass}
                  style={{ borderBottom: "1px solid currentColor" }}
                >
                  {q.trim() ? <InlineMath math={q} /> : <span>&nbsp;</span>}
                </td>
              ))}
            </tr>
            {/* Dividend row. */}
            <tr>
              {dividend.map((d, i) => (
                <td key={`d-${i}`} className={cellClass}>
                  {d.trim() ? <InlineMath math={d} /> : <span>&nbsp;</span>}
                </td>
              ))}
            </tr>
            {/* Subtraction / remainder steps. */}
            {steps.map((step, sIdx) => {
              const isLast = sIdx === steps.length - 1;
              const barCols = stepBarCols[sIdx];
              return (
                <FragmentRows
                  key={`step-${sIdx}`}
                  subtrahend={step.subtrahend}
                  remainder={step.remainder}
                  barCols={barCols}
                  numCols={numCols}
                  cellClass={cellClass}
                  isLast={isLast}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/**
 * Subtrahend + bar + remainder. The continuous partial bar is implemented as
 * `border-bottom` on the subtrahend row's cells, restricted to the columns
 * the new remainder occupies. Because `border-collapse: collapse` is set on
 * the table, adjacent bordered cells share their border edges seamlessly,
 * producing a single visually continuous bar.
 */
function FragmentRows({
  subtrahend,
  remainder,
  barCols,
  numCols,
  cellClass,
  isLast,
}: {
  subtrahend: string[];
  remainder: string[];
  barCols: boolean[];
  numCols: number;
  cellClass: string;
  isLast: boolean;
}) {
  // Pad / trim arrays defensively to the dividend column count.
  const sub = [...subtrahend];
  while (sub.length < numCols) sub.push("");
  const rem = [...remainder];
  while (rem.length < numCols) rem.push("");

  return (
    <>
      <tr>
        {sub.map((cell, i) => (
          <td
            key={`s-${i}`}
            className={cellClass}
            style={
              barCols[i]
                ? { borderBottom: "1px solid currentColor" }
                : undefined
            }
          >
            {cell.trim() ? <InlineMath math={cell} /> : <span>&nbsp;</span>}
          </td>
        ))}
      </tr>
      <tr>
        {rem.map((cell, i) => (
          <td key={`r-${i}`} className={cellClass}>
            {cell.trim() ? <InlineMath math={cell} /> : <span>&nbsp;</span>}
          </td>
        ))}
      </tr>
      {isLast ? null : null}
    </>
  );
}
