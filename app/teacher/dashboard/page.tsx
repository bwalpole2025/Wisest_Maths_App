"use client";

import Link from "next/link";
import { getCategoriesForCourse, getTopicsByCategoryForCourse } from "@/lib/data/courseData";
import { useCourse } from "@/hooks/useCourse";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";

/* Mock student data */
const mockStudents = [
  { id: "1", name: "Alice Smith", lastActive: "2 hours ago", topicsCompleted: 12, latestScore: 85 },
  { id: "2", name: "Bob Jones", lastActive: "1 day ago", topicsCompleted: 8, latestScore: 72 },
  { id: "3", name: "Charlie Brown", lastActive: "3 hours ago", topicsCompleted: 15, latestScore: 91 },
  { id: "4", name: "Diana Lee", lastActive: "5 hours ago", topicsCompleted: 6, latestScore: 64 },
  { id: "5", name: "Ethan Clark", lastActive: "Just now", topicsCompleted: 20, latestScore: 88 },
];

const mockSubmissions = [
  { studentName: "Ethan Clark", topic: "Differentiating kx^n", score: 72, time: "10 min ago" },
  { studentName: "Alice Smith", topic: "Solving Quadratic Equations", score: 85, time: "1 hour ago" },
  { studentName: "Charlie Brown", topic: "The Pythagorean Identity", score: 91, time: "3 hours ago" },
  { studentName: "Bob Jones", topic: "Integration", score: 58, time: "Yesterday" },
];

function topicCoverage(topicTitle: string): "green" | "amber" | "grey" {
  /* Simulated: hash title to produce deterministic coverage */
  let h = 0;
  for (let i = 0; i < topicTitle.length; i++) h = ((h << 5) - h + topicTitle.charCodeAt(i)) | 0;
  const v = Math.abs(h) % 100;
  if (v < 30) return "green";
  if (v < 55) return "amber";
  return "grey";
}

const coverageColors = {
  green: "bg-green-400",
  amber: "bg-amber-400",
  grey: "bg-gray-200",
};

export default function TeacherDashboard() {
  const { course } = useCourse();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const stats = [
    { label: "Total Students", value: mockStudents.length, color: "border-accent" },
    { label: "Active This Week", value: 4, color: "border-blue-500" },
    { label: "Assessments Completed", value: 47, color: "border-emerald-500" },
    { label: "Average Score", value: "76%", color: "border-amber-500" },
  ];

  const categories = course ? getCategoriesForCourse(course) : [];

  if (!mounted) {
    return (
      <div className="mx-auto max-w-6xl space-y-6">
        <Skeleton className="h-8 w-48" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => <Skeleton key={i} className="h-24 rounded-lg" />)}
        </div>
        <Skeleton className="h-64 rounded-lg" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-2xl font-bold text-foreground">Teacher Dashboard</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Overview of class progress and recent activity.
      </p>

      {/* Stats row */}
      <div className="mt-6 grid gap-4 grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className={`rounded-lg border-l-4 ${s.color} bg-white p-5 shadow-sm`}>
            <div className="text-2xl font-extrabold text-foreground">{s.value}</div>
            <div className="mt-0.5 text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Left 2/3 */}
        <div className="space-y-8 lg:col-span-2">
          {/* Class Progress table */}
          <section>
            <h2 className="text-lg font-bold text-foreground">Class Progress</h2>
            {/* Desktop table */}
            <div className="mt-3 hidden overflow-hidden rounded-lg border border-border bg-white shadow-sm sm:block">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Student</th>
                    <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Last Active</th>
                    <th className="px-4 py-2.5 text-center font-medium text-muted-foreground">Topics</th>
                    <th className="px-4 py-2.5 text-center font-medium text-muted-foreground">Score</th>
                    <th className="px-4 py-2.5 text-right font-medium text-muted-foreground"></th>
                  </tr>
                </thead>
                <tbody>
                  {mockStudents.map((s) => (
                    <tr key={s.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium text-foreground">{s.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{s.lastActive}</td>
                      <td className="px-4 py-3 text-center">{s.topicsCompleted}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                          s.latestScore >= 80 ? "bg-green-100 text-green-700" :
                          s.latestScore >= 60 ? "bg-amber-100 text-amber-700" :
                          "bg-red-100 text-red-700"
                        }`}>
                          {s.latestScore}%
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Link href={`/teacher/students`} className="text-xs font-medium text-accent hover:underline">
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile cards */}
            <div className="mt-3 space-y-2 sm:hidden">
              {mockStudents.map((s) => (
                <div key={s.id} className="rounded-lg border border-border bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{s.name}</span>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      s.latestScore >= 80 ? "bg-green-100 text-green-700" :
                      s.latestScore >= 60 ? "bg-amber-100 text-amber-700" :
                      "bg-red-100 text-red-700"
                    }`}>{s.latestScore}%</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {s.topicsCompleted} topics · {s.lastActive}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Topic Coverage */}
          <section>
            <h2 className="text-lg font-bold text-foreground">Topic Coverage</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              <span className="inline-block h-2.5 w-2.5 rounded-sm bg-green-400 mr-1 align-middle" /> All students ≥ 70%
              <span className="inline-block h-2.5 w-2.5 rounded-sm bg-amber-400 mx-1 ml-3 align-middle" /> Some struggling
              <span className="inline-block h-2.5 w-2.5 rounded-sm bg-gray-200 mx-1 ml-3 align-middle" /> Not started
            </p>
            {categories.map((cat) => {
              const catTopics = course ? getTopicsByCategoryForCourse(course, cat) : [];
              return (
                <div key={cat} className="mt-3">
                  <h3 className="mb-1.5 text-xs font-semibold text-muted-foreground">{cat}</h3>
                  <div className="flex flex-wrap gap-1">
                    {catTopics.map((t) => {
                      const cov = topicCoverage(t.title);
                      return (
                        <div
                          key={t.id}
                          title={`${t.ref}: ${t.title} — ${cov === "green" ? "All ≥ 70%" : cov === "amber" ? "Some struggling" : "Not started"}`}
                          className={`h-5 w-5 rounded-sm ${coverageColors[cov]} cursor-default`}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </section>
        </div>

        {/* Right 1/3 */}
        <aside className="space-y-6">
          {/* Recent Submissions */}
          <section>
            <h2 className="text-lg font-bold text-foreground">Recent Submissions</h2>
            <div className="mt-3 space-y-2">
              {mockSubmissions.map((sub, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{sub.studentName}</span>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      sub.score >= 80 ? "bg-green-100 text-green-700" :
                      sub.score >= 60 ? "bg-amber-100 text-amber-700" :
                      "bg-red-100 text-red-700"
                    }`}>{sub.score}/100</span>
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{sub.topic}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground/60">{sub.time}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <section>
            <h2 className="text-lg font-bold text-foreground">Quick Actions</h2>
            <div className="mt-3 space-y-2">
              <Link href="/teacher/question-bank" className="block rounded-md bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-accent/90">
                Add Question to Bank
              </Link>
              <Link href="/teacher/question-bank" className="block rounded-md border border-border px-4 py-2.5 text-center text-sm font-semibold text-foreground hover:bg-muted">
                View Full Question Bank
              </Link>
              <Link href="/teacher/topics" className="block rounded-md border border-border px-4 py-2.5 text-center text-sm font-semibold text-foreground hover:bg-muted">
                Assign Topic to Class
              </Link>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
