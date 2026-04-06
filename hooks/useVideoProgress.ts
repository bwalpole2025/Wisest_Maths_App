"use client";

import { useState, useCallback } from "react";

interface VideoProgress {
  watched: string[];
  markWatched: (videoId: string) => void;
  isWatched: (videoId: string) => boolean;
  watchedCount: number;
}

export function useVideoProgress(topicId: string): VideoProgress {
  const storageKey = `video-progress-${topicId}`;

  const [watched, setWatched] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(storageKey);
    return stored ? JSON.parse(stored) : [];
  });

  const markWatched = useCallback(
    (videoId: string) => {
      setWatched((prev) => {
        if (prev.includes(videoId)) return prev;
        const next = [...prev, videoId];
        localStorage.setItem(storageKey, JSON.stringify(next));
        return next;
      });
    },
    [storageKey]
  );

  const isWatched = useCallback(
    (videoId: string) => watched.includes(videoId),
    [watched]
  );

  return { watched, markWatched, isWatched, watchedCount: watched.length };
}
