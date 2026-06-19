#!/usr/bin/env python3
"""
Wisest Undergraduate Depth & Count validator.

Gates a question bank (a .ts file exporting `questions: Question[]`, or a
directory of them) on the depth-and-count policy from
.claude/undergrad_q_skill.md:

  * exactly REQUIRED_COUNT questions per subtopic file;
  * every question's worked solution meets its per-difficulty step floor.

Problems-only: prints nothing for a clean question, exits non-zero on any
violation. Edit STEP_FLOORS / REQUIRED_COUNT below if the policy changes (keep
the SKILL.md table in agreement).

Usage:
    python scripts/check_depth.py content/asymptotic_methods/am8a.ts
    python scripts/check_depth.py content/asymptotic_methods/am8a.ts am8b.ts ...
    python scripts/check_depth.py content/undergrad/
"""

import re
import sys
from pathlib import Path

STEP_FLOORS = {"Foundation": 6, "Standard": 10, "Challenge": 20}
REQUIRED_COUNT = 30

ID_RE = re.compile(r'\bid:\s*"([^"]+)"')
DIFF_RE = re.compile(r'\bdifficulty:\s*"(\w+)"')
# One `workingLatex:` per solution step, in both schema shapes the repo uses
# (workedSolution.steps[] and solutionSteps[]); finalAnswer/canonicalAnswer
# carry no workingLatex, so this counts steps exactly.
STEP_RE = re.compile(r'\bworkingLatex:')


def check_file(path: Path):
    """Return (problems: list[str], count: int)."""
    src = path.read_text(encoding="utf-8")
    problems = []

    # Slice the file into per-question blocks on `id:` boundaries.
    starts = [m.start() for m in ID_RE.finditer(src)]
    ids = [m.group(1) for m in ID_RE.finditer(src)]
    bounds = starts + [len(src)]

    seen = 0
    for i, qid in enumerate(ids):
        block = src[bounds[i]:bounds[i + 1]]
        dm = DIFF_RE.search(block)
        if not dm:
            continue
        diff = dm.group(1)
        floor = STEP_FLOORS.get(diff)
        if floor is None:
            problems.append(f"{qid}: unknown difficulty {diff!r}")
            continue
        seen += 1
        steps = len(STEP_RE.findall(block))
        if steps < floor:
            problems.append(f"{qid} [{diff}]: {steps} steps < floor {floor}")

    if seen != REQUIRED_COUNT:
        problems.insert(0, f"count: {seen} questions, expected {REQUIRED_COUNT}")

    return problems, seen


def iter_targets(args):
    for a in args:
        p = Path(a)
        if p.is_dir():
            yield from sorted(p.rglob("*.ts"))
        else:
            yield p


def main(argv):
    targets = list(iter_targets(argv[1:] or ["."]))
    targets = [t for t in targets if t.suffix == ".ts"]
    if not targets:
        print("no .ts files to check")
        return 2

    any_fail = False
    for path in targets:
        problems, count = check_file(path)
        if problems:
            any_fail = True
            print(f"\nFAIL {path}  ({count} questions)")
            for pr in problems:
                print(f"  - {pr}")
        else:
            print(f"PASS {path}  ({count} questions, all step floors met)")

    if any_fail:
        print("\nDEPTH CHECK FAILED")
        return 1
    print("\nDEPTH CHECK PASSED")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
