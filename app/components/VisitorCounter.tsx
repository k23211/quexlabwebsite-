"use client";

import { useEffect, useState } from "react";
import { INK, PAPER } from "../theme";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Show the last known count immediately (if cached) so a slow or
    // failing request doesn't leave the badge blank.
    const cached = localStorage.getItem("quexlab-last-count");
    if (cached) setCount(Number(cached));

    const applyCount = (data: any) => {
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
  }, []);

  if (count === null) return null;

  return (
    <div
      className="fixed bottom-3 right-3 z-50 rounded-full px-3 py-1 text-[10px] font-medium shadow-sm sm:text-xs"
      style={{ background: INK, color: PAPER }}
    >
      {count.toLocaleString()} visits
    </div>
  );
}
