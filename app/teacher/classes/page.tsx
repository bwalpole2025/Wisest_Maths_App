"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useCourse } from "@/hooks/useCourse";
import { useClasses } from "@/hooks/useClasses";
import { parseNames } from "@/lib/services/classStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ClassesPage() {
  const { course } = useCourse();
  const { classes, loaded, backend, createClass, deleteClass, addStudents, removeStudent } =
    useClasses(course);

  const [name, setName] = useState("");
  const [namesBlob, setNamesBlob] = useState("");
  const [addInputs, setAddInputs] = useState<Record<string, string>>({});

  const previewNames = parseNames(namesBlob);

  async function handleCreate() {
    if (!name.trim()) {
      toast.error("Give the class a name.");
      return;
    }
    try {
      await createClass(name, previewNames);
      toast.success(`Created “${name.trim()}” with ${previewNames.length} student(s).`);
      setName("");
      setNamesBlob("");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not create class.");
    }
  }

  async function handleAdd(classId: string) {
    const names = parseNames(addInputs[classId] ?? "");
    if (!names.length) return;
    try {
      await addStudents(classId, names);
      setAddInputs((p) => ({ ...p, [classId]: "" }));
      toast.success(`Added ${names.length} student(s).`);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not add students.");
    }
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-2">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">Classes</h1>
          {loaded &&
            (backend === "supabase" ? (
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                Saved to Supabase
              </Badge>
            ) : (
              <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                Saved on this device
              </Badge>
            ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Build a class from your students’ names, then assign quizzes to it from the Quiz Builder.
          {backend === "local" && (
            <> Set the Supabase env vars and run <code>sql/quiz_engine.sql</code> to sync to the database.</>
          )}
        </p>
      </div>

      {/* ── Create a class ─────────────────────────────────── */}
      <Card>
        <CardHeader>
          <CardTitle>New class</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="class-name">Class name</Label>
            <Input
              id="class-name"
              placeholder="e.g. Year 12 Set 1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={80}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="class-names">Students (one per line, or comma-separated)</Label>
            <Textarea
              id="class-names"
              rows={5}
              placeholder={"Alice Smith\nBob Jones\nCharlie Brown"}
              value={namesBlob}
              onChange={(e) => setNamesBlob(e.target.value)}
            />
            {previewNames.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {previewNames.map((n, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {n}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {previewNames.length} student{previewNames.length === 1 ? "" : "s"} detected
            </span>
            <Button onClick={handleCreate} disabled={!name.trim()}>
              Create class
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ── Existing classes ───────────────────────────────── */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Your classes</h2>
        {loaded && classes.length === 0 && (
          <p className="text-sm text-muted-foreground">No classes yet — create one above.</p>
        )}
        {classes.map((c) => (
          <Card key={c.id}>
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <CardTitle className="text-base">
                {c.name}{" "}
                <span className="text-sm font-normal text-muted-foreground">
                  · {c.students.length} student{c.students.length === 1 ? "" : "s"}
                </span>
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-600 hover:text-red-700"
                onClick={async () => {
                  try {
                    await deleteClass(c.id);
                    toast.success("Class deleted.");
                  } catch (e) {
                    toast.error(e instanceof Error ? e.message : "Could not delete class.");
                  }
                }}
              >
                Delete
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Roster */}
              <div className="flex flex-wrap gap-1.5">
                {c.students.length === 0 && (
                  <span className="text-xs text-muted-foreground">No students yet.</span>
                )}
                {c.students.map((s) => (
                  <Badge key={s.id} variant="outline" className="gap-1 text-xs">
                    {s.name}
                    <button
                      type="button"
                      aria-label={`Remove ${s.name}`}
                      className="ml-0.5 text-muted-foreground hover:text-red-600"
                      onClick={() =>
                        removeStudent(c.id, s.id).catch((e) =>
                          toast.error(e instanceof Error ? e.message : "Could not remove."),
                        )
                      }
                    >
                      ×
                    </button>
                  </Badge>
                ))}
              </div>

              {/* Add more students */}
              <div className="flex items-end gap-2">
                <div className="flex-1 space-y-1">
                  <Label htmlFor={`add-${c.id}`} className="text-xs">
                    Add students
                  </Label>
                  <Input
                    id={`add-${c.id}`}
                    placeholder="Type names, comma-separated"
                    value={addInputs[c.id] ?? ""}
                    onChange={(e) => setAddInputs((p) => ({ ...p, [c.id]: e.target.value }))}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleAdd(c.id);
                    }}
                  />
                </div>
                <Button variant="outline" onClick={() => handleAdd(c.id)}>
                  Add
                </Button>
              </div>

              {/* Assigned quizzes */}
              {c.assignments.length > 0 && (
                <>
                  <Separator />
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Assigned quizzes
                    </p>
                    <ul className="space-y-1 text-sm">
                      {c.assignments.map((a) => (
                        <li key={a.id} className="flex items-center justify-between">
                          <span>{a.title}</span>
                          <span className="text-xs text-muted-foreground">
                            {a.total} question{a.total === 1 ? "" : "s"}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
