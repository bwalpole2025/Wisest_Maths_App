"use client";

/**
 * Assign a generated quiz — shown in the Quiz Builder preview.
 *
 * Targeting (see classStore.QuizAssignment.targetStudentIds):
 *   - Tick one or more classes → the quiz is assigned to the WHOLE of each.
 *   - With exactly ONE class ticked, switch to "Specific students" to target a
 *     single student or a subset of that class's roster.
 *   - Or build a brand-new class from names and assign in one step.
 */

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { useClasses } from "@/hooks/useClasses";
import { parseRoster } from "@/lib/services/classStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

interface Props {
  title: string;
  questionIds: string[];
  total: number;
  course: string | null;
}

export function AssignToClass({ title, questionIds, total, course }: Props) {
  const { classes, createClass, assignQuiz } = useClasses(course);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [targetMode, setTargetMode] = useState<"all" | "specific">("all");
  const [targetStudentIds, setTargetStudentIds] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);

  // New-class-from-names path
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState("");
  const [namesBlob, setNamesBlob] = useState("");
  const previewMembers = parseRoster(namesBlob);

  const quizBase = { title, questionIds, total };

  // Per-student targeting is only available when EXACTLY one class is selected.
  const singleClass = useMemo(
    () => (selectedIds.length === 1 ? classes.find((c) => c.id === selectedIds[0]) ?? null : null),
    [selectedIds, classes],
  );
  const canTargetStudents = !!singleClass && singleClass.students.length > 0;

  function toggleClass(id: string) {
    setSelectedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      // Leaving single-class mode resets targeting to whole-class.
      if (next.length !== 1) setTargetMode("all");
      return next;
    });
  }

  function chooseSpecific() {
    setTargetMode("specific");
    // Default to the whole roster selected, so the teacher unticks who to exclude.
    setTargetStudentIds(singleClass ? singleClass.students.map((s) => s.id) : []);
  }

  function toggleStudent(id: string) {
    setTargetStudentIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  async function assignToSelected() {
    if (selectedIds.length === 0) {
      toast.error("Tick at least one class.");
      return;
    }
    // Build the optional target list (only meaningful for a single class).
    let target: string[] | undefined;
    if (singleClass && targetMode === "specific") {
      if (targetStudentIds.length === 0) {
        toast.error("Pick at least one student, or choose Whole class.");
        return;
      }
      // A full roster selection is just a whole-class assignment.
      target = targetStudentIds.length < singleClass.students.length ? targetStudentIds : undefined;
    }

    setBusy(true);
    try {
      for (const id of selectedIds) {
        const isThisOne = singleClass && id === singleClass.id;
        await assignQuiz(id, {
          ...quizBase,
          ...(isThisOne && target ? { targetStudentIds: target } : {}),
        });
      }
      if (target && singleClass) {
        toast.success(`Assigned “${title}” to ${target.length} student(s) in ${singleClass.name}.`);
      } else {
        const names = selectedIds
          .map((id) => classes.find((c) => c.id === id)?.name)
          .filter(Boolean)
          .join(", ");
        toast.success(`Assigned “${title}” to ${selectedIds.length} class(es): ${names}.`);
      }
      setSelectedIds([]);
      setTargetMode("all");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not assign quiz.");
    } finally {
      setBusy(false);
    }
  }

  async function createAndAssign() {
    if (!newName.trim()) {
      toast.error("Give the new class a name.");
      return;
    }
    setBusy(true);
    try {
      const c = await createClass(newName, previewMembers);
      await assignQuiz(c.id, quizBase);
      toast.success(`Created “${c.name}” (${previewMembers.length} student(s)) and assigned the quiz.`);
      setNewName("");
      setNamesBlob("");
      setCreating(false);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not create/assign.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-3 rounded-md border bg-muted/20 p-3">
      <p className="text-sm font-semibold">Assign to classes or students</p>

      {/* Pick one or more classes */}
      {classes.length > 0 ? (
        <div className="space-y-2">
          <Label className="text-xs">Classes</Label>
          <div className="space-y-1 rounded-md border bg-background p-1.5">
            {classes.map((c) => (
              <label
                key={c.id}
                className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-muted/50"
              >
                <input
                  type="checkbox"
                  checked={selectedIds.includes(c.id)}
                  onChange={() => toggleClass(c.id)}
                  className="h-4 w-4 accent-indigo-600"
                />
                <span className="flex-1">{c.name}</span>
                <Badge variant="secondary" className="text-[10px]">
                  {c.students.length} student{c.students.length === 1 ? "" : "s"}
                </Badge>
              </label>
            ))}
          </div>

          {/* Targeting — only when exactly one class is selected */}
          {selectedIds.length > 1 && (
            <p className="text-xs text-muted-foreground">
              Assigning to the whole of each selected class. Select a single class to target specific students.
            </p>
          )}
          {canTargetStudents && (
            <div className="space-y-2 rounded-md border bg-background p-2.5">
              <div className="flex flex-wrap gap-3 text-sm">
                <label className="flex items-center gap-1.5">
                  <input
                    type="radio"
                    name="target-mode"
                    checked={targetMode === "all"}
                    onChange={() => setTargetMode("all")}
                    className="accent-indigo-600"
                  />
                  Whole class
                </label>
                <label className="flex items-center gap-1.5">
                  <input
                    type="radio"
                    name="target-mode"
                    checked={targetMode === "specific"}
                    onChange={chooseSpecific}
                    className="accent-indigo-600"
                  />
                  Specific students
                </label>
              </div>

              {targetMode === "specific" && singleClass && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {targetStudentIds.length} of {singleClass.students.length} selected
                    </span>
                    <div className="flex gap-2 text-xs">
                      <button
                        type="button"
                        className="text-accent hover:underline"
                        onClick={() => setTargetStudentIds(singleClass.students.map((s) => s.id))}
                      >
                        All
                      </button>
                      <button
                        type="button"
                        className="text-accent hover:underline"
                        onClick={() => setTargetStudentIds([])}
                      >
                        None
                      </button>
                    </div>
                  </div>
                  <div className="max-h-44 space-y-0.5 overflow-y-auto rounded border bg-muted/20 p-1">
                    {singleClass.students.map((s) => (
                      <label
                        key={s.id}
                        className="flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-sm hover:bg-muted/60"
                      >
                        <input
                          type="checkbox"
                          checked={targetStudentIds.includes(s.id)}
                          onChange={() => toggleStudent(s.id)}
                          className="h-4 w-4 accent-indigo-600"
                        />
                        <span className="flex-1">{s.name}</span>
                        {s.email && <span className="text-[11px] text-muted-foreground">{s.email}</span>}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <Button onClick={assignToSelected} disabled={busy || selectedIds.length === 0} className="w-full">
            {busy
              ? "Assigning…"
              : targetMode === "specific" && singleClass
                ? `Assign to ${targetStudentIds.length} student(s)`
                : `Assign to ${selectedIds.length || ""} class${selectedIds.length === 1 ? "" : "es"}`.trim()}
          </Button>
        </div>
      ) : (
        <p className="text-xs text-muted-foreground">
          No classes yet — create one below (or on the Classes page).
        </p>
      )}

      {/* Create a new class inline */}
      {!creating ? (
        <Button variant="outline" size="sm" onClick={() => setCreating(true)}>
          + New class from names
        </Button>
      ) : (
        <div className="space-y-2 rounded-md border bg-background p-2.5">
          <div className="space-y-1">
            <Label htmlFor="new-class-name" className="text-xs">
              Class name
            </Label>
            <Input
              id="new-class-name"
              placeholder="e.g. Year 13 Further Set A"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              maxLength={80}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="new-class-names" className="text-xs">
              Students (one per line or comma-separated)
            </Label>
            <Textarea
              id="new-class-names"
              rows={3}
              placeholder={"Alice Smith, alice@school.org\nBob Jones"}
              value={namesBlob}
              onChange={(e) => setNamesBlob(e.target.value)}
            />
            {previewMembers.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-0.5">
                {previewMembers.map((m, i) => (
                  <Badge key={i} variant="secondary" className="text-[10px]">
                    {m.name}
                    {m.email ? <span className="ml-1 opacity-60">· {m.email}</span> : null}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {previewMembers.length} student{previewMembers.length === 1 ? "" : "s"}
            </span>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={() => setCreating(false)}>
                Cancel
              </Button>
              <Button size="sm" onClick={createAndAssign} disabled={busy || !newName.trim()}>
                Create &amp; assign
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
