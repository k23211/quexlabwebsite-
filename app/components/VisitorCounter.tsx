"use client";

import { useEffect, useState } from "react";
import { INK, PAPER } from "../theme";

// Free, no-signup counting API — each unique namespace/name pair gets its own counter.
const COUNTER_URL =
  "https://api.counterapi.dev/v1/quexlab-technologies/site-visits/up";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Avoid double-counting the same visitor if they navigate around during one browser session.
    if (sessionStorage.getItem("quexlab-counted")) {
      fetch(COUNTER_URL.replace("/up", ""))
        .then((res) => res.json())
        .then((data) => setCount(data?.data?.up_count ?? data?.count ?? null))
        .catch(() => setCount(null));
      return;
    }

    fetch(COUNTER_URL)
      .then((res) => res.json())
      .then((data) => {
        setCount(data?.data?.up_count ?? data?.count ?? null);
        sessionStorage.setItem("quexlab-counted", "1");
      })
      .catch(() => setCount(null));
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
