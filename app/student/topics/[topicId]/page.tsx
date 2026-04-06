"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getTopicById, getTopicsBySubcategory } from "@/lib/data/topics";
import { VideoPlayer } from "@/components/video/VideoPlayer";
import { useTopicProgress } from "@/hooks/useTopicProgress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function TopicDetailPage() {
  const params = useParams<{ topicId: string }>();
  const topic = getTopicById(params.topicId);
  const { loaded, getWatchCount, markWatched, isCompleted } = useTopicProgress();
  const [showModal, setShowModal] = useState(false);

  const watchCount = topic ? getWatchCount(topic.id) : 0;
  const completed = topic ? isCompleted(topic.id) : false;

  // Show modal when hitting 4
  const [prevCount, setPrevCount] = useState(0);
  useEffect(() => {
    if (prevCount < 4 && watchCount >= 4) {
      setShowModal(true);
    }
    setPrevCount(watchCount);
  }, [watchCount, prevCount]);

  if (!topic) {
    return (
      <div className="mx-auto max-w-6xl py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground">Topic not found</h1>
        <Link href="/student/topics" className="mt-4 inline-block text-sm text-accent hover:underline">
          Back to topics
        </Link>
      </div>
    );
  }

  const related = getTopicsBySubcategory(topic.subcategory)
    .filter((t) => t.id !== topic.id)
    .slice(0, 3);

  const handleMarkWatched = () => {
    if (watchCount < 4) {
      markWatched(topic.id);
    }
  };

  return (
    <div className="mx-auto max-w-6xl">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-muted-foreground">
        <Link href="/student/topics" className="hover:text-foreground transition-colors">
          Topics
        </Link>
        <span className="text-border">/</span>
        <span>{topic.category}</span>
        <span className="text-border">/</span>
        <span className="font-medium text-foreground">{topic.title}</span>
      </nav>

      {/* Main content: video + info panel */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Video (2/3) */}
        <div className="lg:col-span-2">
          <VideoPlayer url={topic.videoUrl} title={topic.videoTitle} />
        </div>

        {/* Info panel (1/3) */}
        <div className="space-y-5">
          {/* Badges */}
          <div className="flex items-center gap-2">
            <span className="inline-block rounded bg-accent/10 px-2.5 py-1 text-xs font-bold text-accent font-mono">
              {topic.ref}
            </span>
            <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
              Year {topic.module}
            </span>
          </div>

          <h1 className="text-xl font-bold text-foreground">{topic.title}</h1>
          <p className="text-sm text-muted-foreground">
            {topic.subcategory} &middot; {topic.category}
          </p>

          {/* Learning Outcome */}
          <div className="rounded-lg border border-border bg-white p-4 shadow-sm">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Learning Outcome
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              {topic.learningOutcome}
            </p>
          </div>

          {/* Progress tracker */}
          <div className="rounded-lg border border-border bg-white p-4 shadow-sm">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Video Progress
            </h3>
            <div className="mt-3 flex items-center gap-3">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs font-bold transition-all ${
                    loaded && n <= watchCount
                      ? "border-accent bg-accent text-white shadow-sm shadow-accent/25"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {loaded && n <= watchCount ? (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    n
                  )}
                </div>
              ))}
            </div>

            {!completed && (
              <>
                <p className="mt-3 text-xs text-muted-foreground">
                  {watchCount === 0
                    ? "Watch 4 videos to unlock assessment"
                    : `${watchCount}/4 videos watched`}
                </p>
                <button
                  onClick={handleMarkWatched}
                  className="mt-3 w-full rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent/30 active:translate-y-0"
                >
                  Mark as Watched
                </button>
              </>
            )}

            {/* Assessment Unlocked banner */}
            {completed && (
              <div className="mt-3 rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-center">
                <p className="text-sm font-bold text-emerald-700">
                  Assessment Unlocked! &#127881;
                </p>
                <Link
                  href={`/student/assessment/${topic.id}`}
                  className="mt-2 inline-block rounded-md bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-700"
                >
                  Start Assessment &rarr;
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related topics */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-lg font-bold text-foreground">
            More in {topic.subcategory}
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/student/topics/${r.id}`}
                className="rounded-lg border border-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-accent font-mono">{r.ref}</span>
                  <span className="text-xs text-muted-foreground">Year {r.module}</span>
                </div>
                <h3 className="mt-2 text-sm font-semibold text-foreground">{r.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                  {r.videoTitle}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Assessment Unlocked Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">
              &#127881; Assessment Ready!
            </DialogTitle>
            <DialogDescription className="text-center">
              You&apos;ve watched 4 videos on <strong>{topic.title}</strong>.
              Your AI Assessment is now ready.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href={`/student/assessment/${topic.id}`}
              className="rounded-lg bg-accent px-6 py-3 text-center text-sm font-bold text-white shadow-md shadow-accent/25 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Start Assessment &rarr;
            </Link>
            <button
              onClick={() => setShowModal(false)}
              className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted"
            >
              Maybe Later
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
