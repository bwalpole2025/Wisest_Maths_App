"use client";

/**
 * Assign a generated quiz to a class — shown in the Quiz Builder preview.
 * Either pick an existing class, or construct a new one from names on the spot
 * (custom name + roster) and assign in one step.
 */

import { useState } from "react";
import { toast } from "sonner";
import { useClasses } from "@/hooks/useClasses";
import { parseNames } from "@/lib/services/classStore";
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
  const [selectedId, setSelectedId] = useState("");
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState("");
  const [namesBlob, setNamesBlob] = useState("");

  const previewNames = parseNames(namesBlob);
  const quiz = { title, questionIds, total };

  async function assignExisting() {
    if (!selectedId) {
      toast.error("Choose a class first.");
      return;
    }
    const c = classes.find((x) => x.id === selectedId);
    try {
      await assignQuiz(selectedId, quiz);
      toast.success(`Assigned “${title}” to ${c?.name ?? "class"}.`);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not assign quiz.");
    }
  }

  async function createAndAssign() {
    if (!newName.trim()) {
      toast.error("Give the new class a name.");
      return;
    }
    try {
      const c = await createClass(newName, previewNames);
      await assignQuiz(c.id, quiz);
      toast.success(`Created “${c.name}” (${previewNames.length} student(s)) and assigned the quiz.`);
      setNewName("");
      setNamesBlob("");
      setCreating(false);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not create/assign.");
    }
  }

  return (
    <div className="space-y-3 rounded-md border bg-muted/20 p-3">
      <p className="text-sm font-semibold">Assign to a class</p>

      {/* Existing classes */}
      {classes.length > 0 ? (
        <div className="flex items-end gap-2">
          <div className="flex-1 space-y-1">
            <Label htmlFor="assign-class" className="text-xs">
              Existing class
            </Label>
            <select
              id="assign-class"
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="h-9 w-full rounded-md border border-input bg-background px-2 text-sm"
            >
              <option value="">Select a class…</option>
              {classes.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.students.length})
                </option>
              ))}
            </select>
          </div>
          <Button onClick={assignExisting} disabled={!selectedId}>
            Assign
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
              placeholder={"Alice Smith\nBob Jones"}
              value={namesBlob}
              onChange={(e) => setNamesBlob(e.target.value)}
            />
            {previewNames.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-0.5">
                {previewNames.map((n, i) => (
                  <Badge key={i} variant="secondary" className="text-[10px]">
                    {n}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {previewNames.length} student{previewNames.length === 1 ? "" : "s"}
            </span>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={() => setCreating(false)}>
                Cancel
              </Button>
              <Button size="sm" onClick={createAndAssign} disabled={!newName.trim()}>
                Create &amp; assign
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
