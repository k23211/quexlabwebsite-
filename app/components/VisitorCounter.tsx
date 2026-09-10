"use client";

import { useEffect, useState } from "react";
import { INK, INK_SOFT, PAPER } from "../theme";

type VisitResponse = {
  count?: number;
};

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Show the last known count immediately (if cached) so a slow or
    // failing request doesn't leave the badge blank.
    const cached = localStorage.getItem("quexlab-last-count");
    const cachedTimer = cached
      ? window.setTimeout(() => setCount(Number(cached)), 0)
      : undefined;

    const applyCount = (data: VisitResponse) => {
      const next = data?.count ?? null;
      if (next !== null) {
        setCount(next);
        localStorage.setItem("quexlab-last-count", String(next));
      }
      // On failure, keep whatever count is already showing instead of
      // blanking it out.
    };

    // Avoid double-counting the same visitor if they navigate around
    // during one browser session.
    const alreadyCounted = sessionStorage.getItem("quexlab-counted");

    fetch("/api/visits", { method: alreadyCounted ? "GET" : "POST" })
      .then((res) => res.json())
      .then((data) => {
        applyCount(data);
        if (!alreadyCounted) sessionStorage.setItem("quexlab-counted", "1");
      })
      .catch(() => {});

    return () => {
      if (cachedTimer !== undefined) window.clearTimeout(cachedTimer);
    };
  }, []);

  if (count === null) return null;

  return (
    <div
      aria-label={`${count.toLocaleString()} total site visits`}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-3 border px-4 py-2.5 shadow-[0_8px_24px_rgba(19,35,31,0.08)] sm:bottom-5 sm:right-5 sm:px-5 sm:py-3"
      style={{ background: PAPER, borderColor: "#D8D8CC", color: INK }}
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: INK_SOFT }}>
        Site visits
      </span>
      <span className="text-base font-bold tabular-nums sm:text-lg">
        {count.toLocaleString()}
      </span>
    </div>
  );
}
