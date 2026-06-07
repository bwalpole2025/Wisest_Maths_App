/**
 * Defensive parsing + validation of the marker's JSON output.
 *
 * Strips stray markdown fences, JSON.parse in try/catch (with a backslash-repair
 * fallback for under-escaped LaTeX), validates against the required schema, then
 * checks conformance to the supplied mark scheme (never invent / drop / retype a
 * mark). Any failure throws GraderError("schema") so the caller can retry once.
 */

import { z } from "zod";
import type { MarkScheme, MarkBreakdown } from "@/lib/types";
import { GraderError } from "./types";

const MarkAllocationSchema = z
  .object({
    markId: z.string(),
    type: z.enum(["M", "A", "B"]),
    awarded: z.boolean(),
    ecfApplied: z.boolean(),
    confidence: z.number().min(0).max(1),
    justification: z.string(),
    studentLineRef: z.string().nullable(),
  })
  .strict();

export const MarkBreakdownSchema = z
  .object({
    finalAnswerCorrect: z.boolean().nullable(),
    totalMarksAvailable: z.number(),
    totalMarksAwarded: z.number(),
    marks: z.array(MarkAllocationSchema),
    uncertainNotes: z.array(z.string()),
  })
  .strict();

/** Strip ```json fences and isolate the outermost JSON object. */
function isolateJson(raw: string): string {
  let s = (raw ?? "").trim();
  if (s.startsWith("```")) {
    s = s.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/, "").trim();
  }
  const first = s.indexOf("{");
  const last = s.lastIndexOf("}");
  if (first !== -1 && last !== -1 && last > first) s = s.slice(first, last + 1);
  return s;
}

/** Repair under-escaped backslashes (e.g. `\frac`) only as a parse fallback. */
function repairBackslashes(s: string): string {
  return s.replace(/\\(?!["\\/bfnrtu])/g, "\\\\");
}

function tryParse(s: string): unknown | undefined {
  try {
    return JSON.parse(s);
  } catch {
    try {
      return JSON.parse(repairBackslashes(s));
    } catch {
      return undefined;
    }
  }
}

export function parseMarkBreakdown(raw: string, scheme: MarkScheme): MarkBreakdown {
  const json = tryParse(isolateJson(raw));
  if (json === undefined) {
    throw new GraderError("schema", "Marker response was not valid JSON.");
  }
  const parsed = MarkBreakdownSchema.safeParse(json);
  if (!parsed.success) {
    throw new GraderError("schema", "Marker response did not match the required schema.");
  }
  const breakdown = parsed.data;

  // Conformance: exactly the scheme's marks, with matching ids and types.
  const schemeById = new Map(scheme.marks.map((m) => [m.id, m]));
  const seen = new Set<string>();
  for (const m of breakdown.marks) {
    const schemeMark = schemeById.get(m.markId);
    if (!schemeMark) {
      throw new GraderError("schema", `Marker invented a mark not in the scheme: ${m.markId}.`);
    }
    if (seen.has(m.markId)) {
      throw new GraderError("schema", `Marker returned a duplicate mark: ${m.markId}.`);
    }
    if (schemeMark.type !== m.type) {
      throw new GraderError("schema", `Marker changed the type of ${m.markId}.`);
    }
    seen.add(m.markId);
  }
  if (seen.size !== scheme.marks.length) {
    throw new GraderError("schema", "Marker did not address every mark in the scheme.");
  }

  return breakdown as MarkBreakdown;
}
