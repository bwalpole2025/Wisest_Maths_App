"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "mathsapp-topic-progress";

interface TopicState {
  watched: number;
  lastAccessed: string;
}

type ProgressMap = Record<string, TopicState>;

export function useTopicProgress() {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setProgress(JSON.parse(stored));
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  const persist = (updated: ProgressMap) => {
    setProgress(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const markWatched = useCallback(
    (topicId: string) => {
      setProgress((prev) => {
        const current = prev[topicId] || { watched: 0, lastAccessed: "" };
        if (current.watched >= 4) return prev;
        const updated: ProgressMap = {
          ...prev,
          [topicId]: {
            watched: current.watched + 1,
            lastAccessed: new Date().toISOString(),
          },
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        return updated;
      });
    },
    [],
  );

  const getWatchCount = useCallback(
    (topicId: string) => progress[topicId]?.watched ?? 0,
    [progress],
  );

  const isCompleted = useCallback(
    (topicId: string) => (progress[topicId]?.watched ?? 0) >= 4,
    [progress],
  );

  const completedCount = Object.values(progress).filter(
    (p) => p.watched >= 4,
  ).length;

  const totalWatched = Object.values(progress).reduce(
    (sum, p) => sum + p.watched,
    0,
  );

  /** Topic ID most recently accessed, or null */
  const lastAccessedId = (() => {
    let best: { id: string; time: string } | null = null;
    for (const [id, p] of Object.entries(progress)) {
      if (!best || p.lastAccessed > best.time) {
        best = { id, time: p.lastAccessed };
      }
    }
    return best?.id ?? null;
  })();

  /** Topic IDs where the student has watched all 4 videos */
  const readyForAssessment = Object.entries(progress)
    .filter(([, p]) => p.watched >= 4)
    .map(([id]) => id);

  /** Recently accessed topic IDs, most recent first */
  const recentTopicIds = Object.entries(progress)
    .filter(([, p]) => p.lastAccessed)
    .sort(([, a], [, b]) => b.lastAccessed.localeCompare(a.lastAccessed))
    .map(([id]) => id);

  /** Watched count for a category */
  const categoryProgress = useCallback(
    (topicIds: string[]) => {
      const total = topicIds.length * 4;
      const watched = topicIds.reduce(
        (sum, id) => sum + (progress[id]?.watched ?? 0),
        0,
      );
      return total > 0 ? Math.round((watched / total) * 100) : 0;
    },
    [progress],
  );

  return {
    loaded,
    progress,
    markWatched,
    getWatchCount,
    isCompleted,
    completedCount,
    totalWatched,
    lastAccessedId,
    readyForAssessment,
    recentTopicIds,
    categoryProgress,
  };
}
