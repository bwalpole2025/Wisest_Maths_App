/**
 * Undergraduate Engineering Mathematics — bank authoring manifest.
 *
 * Drives the authoring loop: each topic is generated (20 questions, 6 Foundation /
 * 9 Standard / 5 Challenge), checked, expanded, re-checked, committed, then marked
 * "done". `authoringOrder()` returns topics in prerequisite-first (topological)
 * order so a bank is only authored once its prerequisites exist.
 *
 * Curriculum follows a standard first/second-year engineering-maths syllabus
 * (Stroud / Kreyszig lineage). Topic codes: `em01`…`emNN`.
 */
export interface UndergradTopic {
  code: string;
  title: string;
  /** Topic codes that should be authored before this one. */
  prereqs: string[];
  /** When true, generation hands off to the diagram-aware generator. */
  visual: boolean;
  status: "todo" | "done";
}

export const undergradManifest: UndergradTopic[] = [
  { code: "em01", title: "Complex Numbers", prereqs: [], visual: false, status: "done" },
  { code: "em02", title: "Matrices and Determinants", prereqs: [], visual: false, status: "done" },
  { code: "em03", title: "Vectors and Vector Algebra", prereqs: [], visual: false, status: "done" },
  { code: "em04", title: "Differentiation Techniques", prereqs: [], visual: false, status: "done" },
  { code: "em05", title: "Integration Techniques", prereqs: ["em04"], visual: false, status: "done" },
  { code: "em06", title: "Partial Differentiation", prereqs: ["em04"], visual: false, status: "todo" },
  { code: "em07", title: "Sequences and Series", prereqs: ["em04"], visual: false, status: "todo" },
  { code: "em08", title: "First-Order Differential Equations", prereqs: ["em05"], visual: false, status: "todo" },
  { code: "em09", title: "Second-Order Linear Differential Equations", prereqs: ["em08"], visual: false, status: "todo" },
  { code: "em10", title: "Laplace Transforms", prereqs: ["em09"], visual: false, status: "todo" },
  { code: "em11", title: "Fourier Series", prereqs: ["em05", "em07"], visual: true, status: "todo" },
  { code: "em12", title: "Multiple Integrals", prereqs: ["em05", "em06"], visual: false, status: "todo" },
  { code: "em13", title: "Eigenvalues and Eigenvectors", prereqs: ["em02"], visual: false, status: "todo" },
  { code: "em14", title: "Vector Calculus", prereqs: ["em03", "em06"], visual: false, status: "todo" },
  { code: "em15", title: "Numerical Methods", prereqs: ["em05", "em08"], visual: false, status: "todo" },
  { code: "em16", title: "Probability and Statistics", prereqs: [], visual: false, status: "todo" },
];

/**
 * Topics in prerequisite-first order (stable topological sort): a topic appears
 * only after every code in its `prereqs` has appeared. Ties keep manifest order.
 */
export function authoringOrder(manifest: UndergradTopic[] = undergradManifest): UndergradTopic[] {
  const byCode = new Map(manifest.map((t) => [t.code, t]));
  const ordered: UndergradTopic[] = [];
  const placed = new Set<string>();
  // Repeatedly emit any not-yet-placed topic whose prereqs are all placed.
  while (ordered.length < manifest.length) {
    const next = manifest.find(
      (t) => !placed.has(t.code) && t.prereqs.every((p) => placed.has(p) || !byCode.has(p)),
    );
    if (!next) {
      throw new Error("authoringOrder: unsatisfiable prerequisites (cycle or unknown code)");
    }
    ordered.push(next);
    placed.add(next.code);
  }
  return ordered;
}

/** The next topic still to author (prereq-first), or null when all are done. */
export function nextTodo(manifest: UndergradTopic[] = undergradManifest): UndergradTopic | null {
  return authoringOrder(manifest).find((t) => t.status === "todo") ?? null;
}
