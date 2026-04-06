"use client";

import { useState } from "react";
import type { Topic } from "@/lib/types";
import { TopicCard } from "./TopicCard";

const filters = [
  { key: "all", label: "All" },
  { key: "year-1", label: "Year 1" },
  { key: "year-2", label: "Year 2" },
  { key: "Pure Mathematics", label: "Pure" },
  { key: "Statistics", label: "Statistics" },
  { key: "Mechanics", label: "Mechanics" },
];

export function TopicGrid({ topics }: { topics: Topic[] }) {
  const [active, setActive] = useState("all");

  const filtered = topics.filter((t) => {
    if (active === "all") return true;
    if (active === "year-1") return t.module === 1;
    if (active === "year-2") return t.module === 2;
    return t.category === active;
  });

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              active === f.key
                ? "bg-accent text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <TopicCard key={t.id} topic={t} />
        ))}
      </div>
    </div>
  );
}
