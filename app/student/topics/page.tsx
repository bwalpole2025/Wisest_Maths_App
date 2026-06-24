"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getTopicsForCourse } from "@/lib/data/courseData";
import { useCourse } from "@/hooks/useCourse";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useTopicProgress } from "@/hooks/useTopicProgress";

const aLevelFilterOptions = [
  { key: "all", label: "All" },
  { key: "year-1", label: "Year 1" },
  { key: "year-2", label: "Year 2" },
  { key: "Pure Mathematics", label: "Pure Maths" },
  { key: "Statistics", label: "Statistics" },
  { key: "Mechanics", label: "Mechanics" },
];

// GCSE browses by tier and strand rather than year/component. "Foundation"
// shows content on the Foundation paper (tier "Both"); "Higher only" shows the
// Higher-exclusive content (tier "Higher"); strand keys filter by category.
const gcseFilterOptions = [
  { key: "all", label: "All" },
  { key: "tier-Foundation", label: "Foundation" },
  { key: "tier-Higher", label: "Higher only" },
  { key: "Number", label: "Number" },
  { key: "Algebra", label: "Algebra" },
  { key: "Ratio, Proportion & Rates of Change", label: "Ratio" },
  { key: "Geometry & Measures", label: "Geometry" },
  { key: "Probability", label: "Probability" },
  { key: "Statistics", label: "Statistics" },
];

export default function TopicsPage() {
  const { course } = useCourse();
  const searchParams = useSearchParams();
  const isGcse = course === "gcse-maths";
  const filterOptions = isGcse ? gcseFilterOptions : aLevelFilterOptions;

  // A Foundation-tier deep-link from the GCSE landing pre-selects that filter;
  // Higher-tier entry shows everything ("all"), since Higher covers all content.
  const tierParam = searchParams.get("tier");
  const initialFilter = tierParam === "Foundation" ? "tier-Foundation" : "all";

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(initialFilter);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const topics = useMemo(() => course ? getTopicsForCourse(course) : [], [course]);
  const { loaded, isCompleted, getWatchCount } = useTopicProgress();

  const filtered = useMemo(() => {
    let result = topics;

    if (filter === "year-1") result = result.filter((t) => t.module === 1);
    else if (filter === "year-2") result = result.filter((t) => t.module === 2);
    else if (filter === "tier-Foundation") result = result.filter((t) => t.tier === "Both");
    else if (filter === "tier-Higher") result = result.filter((t) => t.tier === "Higher");
    else if (filter !== "all") result = result.filter((t) => t.category === filter);

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.ref.toLowerCase().includes(q) ||
          t.subcategory.toLowerCase().includes(q) ||
          t.learningOutcome.toLowerCase().includes(q),
      );
    }

    return result;
  }, [search, filter, topics]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof topics>();
    filtered.forEach((t) => {
      const list = map.get(t.subcategory) || [];
      list.push(t);
      map.set(t.subcategory, list);
    });
    return map;
  }, [filtered]);

  const toggleSection = (sub: string) => {
    setOpenSections((prev) => ({ ...prev, [sub]: !prev[sub] }));
  };

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-2xl font-bold text-foreground">Topics</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        All {topics.length} topics &mdash; search, filter, and explore.
      </p>

      {/* Search */}
      <div className="mt-6">
        <Input
          placeholder="Search topics, spec references..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />
      </div>

      {/* Filter pills */}
      <div className="mt-4 flex flex-wrap gap-2">
        {filterOptions.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
              filter === f.key
                ? "bg-accent text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Showing {filtered.length} of {topics.length} topics
      </p>

      {/* Collapsible subcategory sections */}
      <div className="mt-6 space-y-3">
        {Array.from(grouped.entries()).map(([subcategory, subTopics]) => {
          const completedInSection = loaded
            ? subTopics.filter((t) => isCompleted(t.id)).length
            : 0;

          return (
            <Collapsible
              key={subcategory}
              open={openSections[subcategory] !== false}
              onOpenChange={() => toggleSection(subcategory)}
            >
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-border bg-card px-5 py-3.5 text-left shadow-sm transition-colors hover:bg-muted/30">
                <div className="flex items-center gap-3">
                  <h3 className="text-sm font-bold text-foreground">
                    {subcategory}
                  </h3>
                  <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    {subTopics.length}
                  </span>
                  {loaded && completedInSection > 0 && (
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-300">
                      {completedInSection} done
                    </span>
                  )}
                </div>
                <svg
                  className="h-4 w-4 text-muted-foreground transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="mt-2 space-y-2 pl-1">
                  {subTopics.map((t) => {
                    const done = loaded && isCompleted(t.id);
                    const watched = loaded ? getWatchCount(t.id) : 0;

                    return (
                      <div
                        key={t.id}
                        className={`flex items-center gap-4 rounded-lg border bg-card px-5 py-3.5 shadow-sm transition-colors ${
                          done
                            ? "border-l-4 border-l-emerald-500 border-t-border border-r-border border-b-border"
                            : "border-border"
                        }`}
                      >
                        {/* Spec ref badge */}
                        <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-bold text-accent font-mono">
                          {t.ref}
                        </span>

                        {/* Title & video title */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-semibold text-foreground">
                              {t.title}
                            </h4>
                            {/* Green tick */}
                            {done && (
                              <svg
                                className="h-4 w-4 shrink-0 text-emerald-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {t.videoTitle ||
                              (t.tier
                                ? `${t.tier === "Higher" ? "Higher tier" : "Foundation & Higher"}${t.dfeRef?.length ? ` · ${t.dfeRef.join(", ")}` : ""}`
                                : "")}
                          </p>
                        </div>

                        {/* Duration pill */}
                        <span className="hidden shrink-0 rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground sm:inline-block">
                          {Math.round(t.duration / 60)} min
                        </span>

                        {/* Progress or Year badge */}
                        {loaded && watched > 0 && !done && (
                          <span className="hidden shrink-0 text-xs text-muted-foreground sm:inline-block">
                            {watched}/4
                          </span>
                        )}

                        {/* Watch button */}
                        <Link
                          href={`/student/topics/${t.id}`}
                          className={`shrink-0 rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                            done
                              ? "bg-emerald-500/15 text-emerald-300 hover:bg-emerald-100"
                              : "bg-accent text-white hover:bg-accent/90"
                          }`}
                        >
                          {done ? "Review" : "Watch"}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </div>
    </div>
  );
}
