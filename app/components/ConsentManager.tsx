"use client";

import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { useState } from "react";
import Link from "next/link";
import { FOREST, INK, INK_SOFT, PAPER } from "../theme";

type ConsentChoice = "accepted" | "rejected";
const STORAGE_KEY = "quexlab-consent";

export default function ConsentManager() {
  const [choice, setChoice] = useState<ConsentChoice | null>(() => {
    if (typeof window === "undefined") return null;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "accepted" || saved === "rejected" ? saved : null;
  });

  const choose = (next: ConsentChoice) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    setChoice(next);
  };

  return (
    <>
      {choice === "accepted" && (
        <>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-18372099949"
            strategy="afterInteractive"
          />
          <Script id="google-ads-gtag" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18372099949');
            `}
          </Script>
          <Analytics />
        </>
      )}

      {choice === null && (
        <aside
          role="dialog"
          aria-label="Cookie preferences"
          className="fixed inset-x-4 bottom-4 z-[60] border p-5 shadow-[0_12px_36px_rgba(19,35,31,0.14)] sm:inset-x-auto sm:bottom-5 sm:left-5 sm:max-w-md"
          style={{ background: PAPER, borderColor: "#C9CCC1", color: INK }}
        >
          <p className="text-sm font-bold">Privacy choices</p>
          <p className="mt-2 text-sm leading-6" style={{ color: INK_SOFT }}>
            We use optional analytics and advertising tools to understand visits and improve the site. Essential features, such as the visitor counter, work without optional tracking.
          </p>
          <p className="mt-2 text-xs leading-5" style={{ color: INK_SOFT }}>
            Read our <Link href="/privacy" className="font-bold underline" style={{ color: FOREST }}>Privacy Policy</Link>.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={() => choose("accepted")} className="bg-[var(--forest)] px-4 py-2.5 text-sm font-bold text-white">Accept optional</button>
            <button type="button" onClick={() => choose("rejected")} className="border px-4 py-2.5 text-sm font-bold" style={{ borderColor: "#C9CCC1" }}>Reject optional</button>
          </div>
        </aside>
      )}
    </>
  );
}
