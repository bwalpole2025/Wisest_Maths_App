/**
 * SymPy-backed equivalence grader. Runs `scripts/grade_sympy.py` as a short-lived
 * Python subprocess (the server has python3 + sympy). The student/canonical
 * strings are pre-normalised here (Unicode/LaTeX → ASCII maths) before being sent
 * over stdin as JSON, so the Python side only ever sees plain maths.
 *
 * This is the AUTHORITATIVE grader in the hybrid setup (see app/api/quiz/grade):
 *   - strictForm=true  → structural-equality check (form matters; "simplify" Qs)
 *   - strictForm=false → mathematical equivalence (accepts any equal form)
 *
 * It never throws: if Python is missing / times out / returns junk, it resolves
 * to { equivalent: null } so the route can fall back to mathjs or manual grading.
 */
import { spawn } from "child_process";
import path from "path";
import { normalizeMath, type EquivalenceResult } from "./symbolicGrading";

const SCRIPT_PATH = path.join(process.cwd(), "scripts", "grade_sympy.py");
const PYTHON_BIN = process.env.PYTHON_BIN || "python3";
const TIMEOUT_MS = 4000;

export function gradeWithSympy(
  student: string,
  canonical: string,
  strictForm: boolean,
): Promise<EquivalenceResult> {
  const normalizedStudent = normalizeMath(student);
  const normalizedCanonical = normalizeMath(canonical);

  const fallback = (detail: string): EquivalenceResult => ({
    equivalent: null,
    method: "manual",
    normalizedStudent,
    normalizedCanonical,
    detail,
  });

  return new Promise((resolve) => {
    let child;
    try {
      child = spawn(PYTHON_BIN, [SCRIPT_PATH], { stdio: ["pipe", "pipe", "pipe"] });
    } catch {
      return resolve(fallback("python-spawn-failed"));
    }

    let out = "";
    let settled = false;
    const finish = (r: EquivalenceResult) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      try {
        child!.kill("SIGKILL");
      } catch {
        /* already gone */
      }
      resolve(r);
    };

    const timer = setTimeout(() => finish(fallback("timeout")), TIMEOUT_MS);

    child.on("error", () => finish(fallback("python-error")));
    child.stdout.on("data", (d) => (out += d.toString()));
    child.on("close", () => {
      if (settled) return;
      try {
        const parsed = JSON.parse(out.trim()) as { equivalent?: unknown; detail?: unknown };
        const equivalent =
          parsed.equivalent === true ? true : parsed.equivalent === false ? false : null;
        finish({
          equivalent,
          method: equivalent === null ? "manual" : "sympy",
          normalizedStudent,
          normalizedCanonical,
          detail: typeof parsed.detail === "string" ? `sympy:${parsed.detail}` : "sympy",
        });
      } catch {
        finish(fallback("bad-python-output"));
      }
    });

    try {
      child.stdin.write(
        JSON.stringify({ student: normalizedStudent, canonical: normalizedCanonical, strictForm }),
      );
      child.stdin.end();
    } catch {
      finish(fallback("stdin-failed"));
    }
  });
}
