"use client";

import { Component, useEffect, useState, type ReactNode } from "react";
import { LiveProvider, LivePreview, LiveError } from "react-live";
import * as Mafs from "mafs";
import "mafs/core.css";

/**
 * Renders an authored Mafs JSX string (a single `<Mafs>…</Mafs>` element) at
 * runtime. The source comes from our own question banks (SolutionStep.mafs /
 * Question.questionMafs) — trusted, authored content, never user input — and is
 * evaluated against a scope limited to the Mafs primitives.
 *
 * Wrapped in an error boundary so a single bad/incompatible diagram can NEVER
 * crash the surrounding question or quiz: react-live reports transform errors,
 * but a render-time throw inside a Mafs primitive would otherwise propagate and
 * blank the page. On any failure we show a small inline notice instead.
 *
 * See .claude/mafs.md for the authoring API. Distinct from CurveDiagram, which
 * renders the structured CurveDiagramConfig object.
 */

// Everything the authored JSX may reference: <Mafs>, <Coordinates.Cartesian>,
// <Plot.OfX>, <Point>, <Vector>, <Line.Segment>, <Polygon>, <Text>, <Theme>, …
const scope = { ...Mafs };

class DiagramErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {
    /* swallow — a diagram must never take down the question/quiz view */
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

function Fallback() {
  return (
    <div className="my-4 rounded-lg border border-border bg-foreground/[0.06] px-4 py-3 text-xs text-foreground/50">
      Diagram unavailable.
    </div>
  );
}

export function MafsDiagram({ source }: { source: string }) {
  // Mafs uses ResizeObserver and measures the DOM, so only render after mount
  // to keep it out of SSR (which has no layout / browser globals).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const code = (source ?? "").trim();
  if (!code) return null;

  if (!mounted) {
    return (
      <div className="my-4 h-[260px] w-full animate-pulse rounded-lg bg-foreground/[0.06]" />
    );
  }

  return (
    <DiagramErrorBoundary fallback={<Fallback />}>
      <div className="mafs-diagram my-4 mx-auto w-full max-w-[480px] overflow-hidden rounded-lg border border-border">
        <LiveProvider code={code} scope={scope}>
          <LivePreview />
          <LiveError className="whitespace-pre-wrap p-2 text-xs text-red-600" />
        </LiveProvider>
      </div>
    </DiagramErrorBoundary>
  );
}

export default MafsDiagram;
