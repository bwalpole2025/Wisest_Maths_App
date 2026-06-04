"use client";

/**
 * School Admin → manage their school's roster: bulk-import teachers and students
 * (Name, school email — one per line), and see who's provisioned/linked. Each
 * imported person gets their role + school stamped on first Google sign-in.
 * Gated to role === "school_admin" by middleware; RLS bounds everything to this
 * admin's own school.
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { parseRoster } from "@/lib/services/classStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Member {
  id: string;
  email: string;
  name: string;
  role: "teacher" | "student";
  linked: boolean;
}

export default function SchoolAdminPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [role, setRole] = useState<"teacher" | "student">("student");
  const [blob, setBlob] = useState("");
  const [busy, setBusy] = useState(false);
  // Class-from-spreadsheet import
  const [cls, setCls] = useState({ name: "", course: "a-level-maths", teacherName: "", teacherEmail: "" });
  const [file, setFile] = useState<File | null>(null);
  const [importing, setImporting] = useState(false);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/school/members");
      if (res.ok) setMembers((await res.json()).members ?? []);
    } finally {
      setLoaded(true);
    }
  }, []);
  useEffect(() => {
    refresh();
  }, [refresh]);

  // Parse "Name, email" lines; an email is REQUIRED so the account links on SSO.
  const parsed = useMemo(() => parseRoster(blob), [blob]);
  const withEmail = parsed.filter((m) => m.email);
  const missingEmail = parsed.length - withEmail.length;

  async function importRoster() {
    if (withEmail.length === 0) {
      toast.error("Add at least one line with a school email (e.g. “Jane Doe, jane@school.org”).");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/school/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          members: withEmail.map((m) => ({ email: m.email!, name: m.name, role })),
        }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.error ?? "Import failed.");
      const data = await res.json();
      setMembers(data.members ?? []);
      toast.success(`Imported ${data.count} ${role}(s).`);
      setBlob("");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not import.");
    } finally {
      setBusy(false);
    }
  }

  async function importClass() {
    if (!cls.name.trim() || !cls.teacherName.trim() || !cls.teacherEmail.trim() || !file) {
      toast.error("Class name, teacher name + email, and a roster file are all required.");
      return;
    }
    setImporting(true);
    try {
      const fd = new FormData();
      fd.append("name", cls.name.trim());
      fd.append("course", cls.course);
      fd.append("teacherName", cls.teacherName.trim());
      fd.append("teacherEmail", cls.teacherEmail.trim());
      fd.append("file", file);
      const res = await fetch("/api/school/classes/import", { method: "POST", body: fd });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error ?? "Import failed.");
      }
      const summary = JSON.parse(res.headers.get("X-Import-Summary") ?? "{}");
      // Trigger download of the one-time credentials sheet.
      const url = URL.createObjectURL(await res.blob());
      const a = document.createElement("a");
      a.href = url;
      a.download = `${cls.name.trim().replace(/\s+/g, "_")}-credentials.xlsx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      toast.success(`Imported ${summary.students ?? 0} students into “${cls.name}”. Credentials sheet downloaded.`);
      setCls({ name: "", course: "a-level-maths", teacherName: "", teacherEmail: "" });
      setFile(null);
      refresh();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not import the class.");
    } finally {
      setImporting(false);
    }
  }

  const teachers = members.filter((m) => m.role === "teacher");
  const students = members.filter((m) => m.role === "student");

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-6 py-10">
      <div>
        <h1 className="text-2xl font-bold">Your school</h1>
        <p className="text-sm text-muted-foreground">Import a class from a spreadsheet — we create every account and hand you the passwords.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Import a class from a spreadsheet</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-xs text-muted-foreground">
            Name the class and its teacher, then upload a Google Sheets/Excel export (.xlsx or .csv) of
            students with <span className="font-medium">Name</span> and <span className="font-medium">Email</span>{" "}
            columns. We create accounts for the teacher and every student, generate a password for each, and
            download a credentials sheet for you to hand out.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="c-name">Class name</Label>
              <Input id="c-name" value={cls.name} onChange={(e) => setCls({ ...cls, name: e.target.value })} placeholder="Year 12 Set 1" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="c-course">Course</Label>
              <select
                id="c-course"
                value={cls.course}
                onChange={(e) => setCls({ ...cls, course: e.target.value })}
                className="h-9 w-full rounded-md border bg-background px-2 text-sm"
              >
                <option value="a-level-maths">A-Level Maths</option>
                <option value="a-level-further-maths">A-Level Further Maths</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="t-name">Teacher name</Label>
              <Input id="t-name" value={cls.teacherName} onChange={(e) => setCls({ ...cls, teacherName: e.target.value })} placeholder="Jane Doe" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="t-email">Teacher email</Label>
              <Input id="t-email" type="email" value={cls.teacherEmail} onChange={(e) => setCls({ ...cls, teacherEmail: e.target.value })} placeholder="jane.doe@school.org" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="c-file">Student roster file (.xlsx or .csv)</Label>
            <Input
              id="c-file"
              type="file"
              accept=".xlsx,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />
          </div>
          <Button onClick={importClass} disabled={importing}>
            {importing ? "Importing & creating accounts…" : "Import class + generate passwords"}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Import roster (no class)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex gap-4 text-sm">
            <label className="flex items-center gap-1.5">
              <input type="radio" name="role" checked={role === "student"} onChange={() => setRole("student")} className="accent-indigo-600" />
              Students
            </label>
            <label className="flex items-center gap-1.5">
              <input type="radio" name="role" checked={role === "teacher"} onChange={() => setRole("teacher")} className="accent-indigo-600" />
              Teachers
            </label>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="roster">One per line: <span className="font-normal text-muted-foreground">Name, school email</span></Label>
            <Textarea
              id="roster"
              rows={6}
              value={blob}
              onChange={(e) => setBlob(e.target.value)}
              placeholder={"Alice Smith, alice.smith@school.org\nBob Jones, bob.jones@school.org"}
            />
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{withEmail.length} with email{missingEmail > 0 ? ` · ${missingEmail} skipped (no email)` : ""}</span>
            </div>
          </div>
          <Button onClick={importRoster} disabled={busy || withEmail.length === 0}>
            {busy ? "Importing…" : `Import ${withEmail.length || ""} ${role}(s)`}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Roster ({members.length})</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!loaded && <p className="text-sm text-muted-foreground">Loading…</p>}
          {loaded && members.length === 0 && <p className="text-sm text-muted-foreground">No one imported yet.</p>}
          {[{ label: "Teachers", list: teachers }, { label: "Students", list: students }].map(
            ({ label, list }) =>
              list.length > 0 && (
                <div key={label} className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label} ({list.length})</p>
                  {list.map((m) => (
                    <div key={m.id} className="flex items-center justify-between rounded-md border px-3 py-1.5 text-sm">
                      <span>{m.name}</span>
                      <span className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{m.email}</span>
                        <Badge variant={m.linked ? "default" : "secondary"} className="text-[10px]">
                          {m.linked ? "signed in" : "invited"}
                        </Badge>
                      </span>
                    </div>
                  ))}
                </div>
              ),
          )}
        </CardContent>
      </Card>
    </div>
  );
}
