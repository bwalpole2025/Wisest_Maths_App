"use client";

/**
 * Wisest super-admin → onboard a school when a contract is signed: create the
 * school and seed its first School Admin (who then imports the rest). Gated to
 * role === "wisest_admin" by middleware.
 */

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface School {
  id: string;
  name: string;
  contractRef?: string;
  seats?: number;
  status: "active" | "suspended";
  teacherCount: number;
  studentCount: number;
  classesCount: number;
}

export default function AdminSchoolsPage() {
  const [schools, setSchools] = useState<School[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [busy, setBusy] = useState(false);
  const [statusBusy, setStatusBusy] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", contractRef: "", seats: "", adminEmail: "", adminName: "" });

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/schools");
      if (res.ok) setSchools((await res.json()).schools ?? []);
    } finally {
      setLoaded(true);
    }
  }, []);
  useEffect(() => {
    refresh();
  }, [refresh]);

  async function createSchool() {
    if (!form.name.trim() || !form.adminEmail.trim() || !form.adminName.trim()) {
      toast.error("School name, admin name and admin email are required.");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/admin/schools", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          contractRef: form.contractRef.trim() || undefined,
          seats: form.seats ? Number(form.seats) : undefined,
          adminEmail: form.adminEmail.trim(),
          adminName: form.adminName.trim(),
        }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.error ?? "Failed to create school.");
      toast.success(`Created “${form.name}”. ${form.adminName} signs in with ${form.adminEmail} to manage it.`);
      setForm({ name: "", contractRef: "", seats: "", adminEmail: "", adminName: "" });
      await refresh();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not create school.");
    } finally {
      setBusy(false);
    }
  }

  async function toggleStatus(s: School) {
    const next = s.status === "active" ? "suspended" : "active";
    if (next === "suspended" && !confirm(`Suspend “${s.name}”? Its teachers and students won't be able to sign in.`)) {
      return;
    }
    setStatusBusy(s.id);
    try {
      const res = await fetch(`/api/admin/schools/${s.id}/status`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: next }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.error ?? "Failed.");
      toast.success(next === "suspended" ? `Suspended “${s.name}”.` : `Re-activated “${s.name}”.`);
      await refresh();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not change status.");
    } finally {
      setStatusBusy(null);
    }
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-6 py-10">
      <div>
        <h1 className="text-2xl font-bold">Schools</h1>
        <p className="text-sm text-muted-foreground">Onboard a school and seed its first School Admin.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">New school</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="s-name">School name</Label>
            <Input id="s-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="St. Example High School" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="s-ref">Contract reference (optional)</Label>
            <Input id="s-ref" value={form.contractRef} onChange={(e) => setForm({ ...form, contractRef: e.target.value })} placeholder="WM-2026-014" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="s-seats">Seats (optional)</Label>
            <Input id="s-seats" type="number" value={form.seats} onChange={(e) => setForm({ ...form, seats: e.target.value })} placeholder="500" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="a-name">School Admin name</Label>
            <Input id="a-name" value={form.adminName} onChange={(e) => setForm({ ...form, adminName: e.target.value })} placeholder="Jane Doe" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="a-email">School Admin school email</Label>
            <Input id="a-email" type="email" value={form.adminEmail} onChange={(e) => setForm({ ...form, adminEmail: e.target.value })} placeholder="jane.doe@school.org" />
          </div>
          <div className="sm:col-span-2">
            <Button onClick={createSchool} disabled={busy}>
              {busy ? "Creating…" : "Create school + admin"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Existing schools ({schools.length})</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {!loaded && <p className="text-sm text-muted-foreground">Loading…</p>}
          {loaded && schools.length === 0 && <p className="text-sm text-muted-foreground">No schools yet.</p>}
          {schools.map((s) => (
            <div key={s.id} className="flex items-center justify-between gap-3 rounded-md border px-3 py-2 text-sm">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{s.name}</span>
                  <Badge variant={s.status === "active" ? "secondary" : "destructive"} className="text-[10px]">
                    {s.status}
                  </Badge>
                  {s.contractRef && <Badge variant="outline" className="text-[10px]">{s.contractRef}</Badge>}
                </div>
                <div className="text-xs text-muted-foreground">
                  {s.teacherCount} teachers · {s.studentCount} students · {s.classesCount} classes
                  {s.seats ? ` · ${s.seats} seats` : ""}
                </div>
              </div>
              <Button
                variant={s.status === "active" ? "outline" : "default"}
                size="sm"
                disabled={statusBusy === s.id}
                onClick={() => toggleStatus(s)}
              >
                {statusBusy === s.id ? "…" : s.status === "active" ? "Suspend" : "Re-activate"}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
