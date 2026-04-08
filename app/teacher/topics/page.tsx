"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getTopicsForCourse } from "@/lib/data/courseData";
import { useCourse } from "@/hooks/useCourse";
import { Skeleton } from "@/components/ui/skeleton";

interface TopicOverrides {
  [topicId: string]: {
    videoUrl?: string;
    isCore?: boolean;
  };
}

const OVERRIDES_KEY = "mathsapp-teacher-topic-overrides";

export default function TeacherTopicsPage() {
  const [mounted, setMounted] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editUrl, setEditUrl] = useState("");
  const [overrides, setOverrides] = useState<TopicOverrides>({});
  const [search, setSearch] = useState("");

  const { course } = useCourse();
  const topics = course ? getTopicsForCourse(course) : [];

  useEffect(() => {
    try {
      const stored = localStorage.getItem(OVERRIDES_KEY);
      if (stored) setOverrides(JSON.parse(stored));
    } catch { /* ignore */ }
    setMounted(true);
  }, []);

  const persist = (updated: TopicOverrides) => {
    setOverrides(updated);
    localStorage.setItem(OVERRIDES_KEY, JSON.stringify(updated));
  };

  const handleSaveUrl = (topicId: string) => {
    const updated = { ...overrides, [topicId]: { ...overrides[topicId], videoUrl: editUrl } };
    persist(updated);
    setEditingId(null);
    setEditUrl("");
  };

  const toggleCore = (topicId: string) => {
    const current = overrides[topicId]?.isCore ?? true;
    persist({ ...overrides, [topicId]: { ...overrides[topicId], isCore: !current } });
  };

  const filtered = search.trim()
    ? topics.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.ref.toLowerCase().includes(search.toLowerCase())
      )
    : topics;

  if (!mounted) {
    return (
      <div className="mx-auto max-w-5xl space-y-4">
        <Skeleton className="h-8 w-48" />
        {[1, 2, 3, 4, 5].map((i) => <Skeleton key={i} className="h-16 rounded-lg" />)}
      </div>
    );
  }

  /* Mock student completion data */
  const mockStudentCount = 24;
  const completionForTopic = (id: string) => {
    let h = 0;
    for (let i = 0; i < id.length; i++) h = ((h << 5) - h + id.charCodeAt(i)) | 0;
    return Math.abs(h) % (mockStudentCount + 1);
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Topic Overview</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            All {topics.length} topics · {filtered.length} shown
          </p>
        </div>
        {!previewMode && (
          <div className="flex items-center gap-3">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search topics..."
              className="rounded-md border border-input px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent w-48"
            />
            <button
              onClick={() => setPreviewMode(true)}
              className="rounded-md border border-border px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-muted"
            >
              Preview as Student
            </button>
          </div>
        )}
        {previewMode && (
          <button
            onClick={() => setPreviewMode(false)}
            className="rounded-md bg-accent px-3 py-2 text-xs font-bold text-white hover:bg-accent/90"
          >
            Exit Preview
          </button>
        )}
      </div>

      <div className="mt-6 overflow-hidden rounded-lg border border-border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30 text-left">
              <th className="px-4 py-3 font-medium text-muted-foreground">Ref</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Topic</th>
              <th className="hidden px-4 py-3 font-medium text-muted-foreground sm:table-cell">Category</th>
              {!previewMode && (
                <>
                  <th className="hidden px-4 py-3 font-medium text-muted-foreground md:table-cell">Students</th>
                  <th className="hidden px-4 py-3 font-medium text-muted-foreground md:table-cell">Type</th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">Actions</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {filtered.map((t) => {
              const isCore = overrides[t.id]?.isCore ?? true;
              const completed = completionForTopic(t.id);
              return (
                <tr key={t.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                  <td className="px-4 py-3 font-mono text-xs font-bold text-accent">{t.ref}</td>
                  <td className="px-4 py-3">
                    <Link href={`/student/topics/${t.id}`} className="font-medium text-foreground hover:text-accent">
                      {t.title}
                    </Link>
                    {!previewMode && (
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {completed} of {mockStudentCount} students completed
                      </p>
                    )}
                  </td>
                  <td className="hidden px-4 py-3 text-muted-foreground sm:table-cell">{t.category}</td>
                  {!previewMode && (
                    <>
                      <td className="hidden px-4 py-3 text-center md:table-cell">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          completed >= mockStudentCount * 0.7 ? "bg-green-100 text-green-700" :
                          completed > 0 ? "bg-amber-100 text-amber-700" :
                          "bg-gray-100 text-gray-500"
                        }`}>
                          {completed}/{mockStudentCount}
                        </span>
                      </td>
                      <td className="hidden px-4 py-3 md:table-cell">
                        <button
                          onClick={() => toggleCore(t.id)}
                          className={`rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${
                            isCore
                              ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                          }`}
                        >
                          {isCore ? "Core" : "Extension"}
                        </button>
                      </td>
                      <td className="px-4 py-3">
                        {editingId === t.id ? (
                          <div className="flex items-center gap-1">
                            <input
                              value={editUrl}
                              onChange={(e) => setEditUrl(e.target.value)}
                              placeholder="YouTube/Vimeo URL"
                              className="w-36 rounded border border-input px-2 py-1 text-xs outline-none focus:border-accent"
                              autoFocus
                            />
                            <button
                              onClick={() => handleSaveUrl(t.id)}
                              className="rounded bg-accent px-2 py-1 text-xs font-bold text-white hover:bg-accent/90"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => { setEditingId(null); setEditUrl(""); }}
                              className="rounded px-2 py-1 text-xs text-muted-foreground hover:bg-muted"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => { setEditingId(t.id); setEditUrl(overrides[t.id]?.videoUrl ?? t.videoUrl); }}
                            className="text-xs font-medium text-accent hover:underline"
                          >
                            Edit URL
                          </button>
                        )}
                      </td>
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
