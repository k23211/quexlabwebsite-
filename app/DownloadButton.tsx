"use client";

import { Apple, Smartphone } from "lucide-react";
import { FOREST, INK, LEAF } from "./theme";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.agriquexdata.app";
const APP_STORE_URL =
  "https://apps.apple.com/gh/app/agriquex-hub/id6799785601";

export default function DownloadButton() {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-18372099949/TulxCJProNwcEO3-v7hE",
      });
    }
  };

  return (
    <>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="flex items-center gap-1.5 rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(15,61,46,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(15,61,46,0.55)] sm:px-7 sm:py-3"
        style={{ background: `linear-gradient(135deg, ${LEAF}, ${FOREST})` }}
      >
        <Smartphone size={15} />
        Get Agriquex Hub
      </a>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 sm:px-7 sm:py-3"
        style={{ color: INK, border: `1.5px solid ${INK}1f`, background: `${LEAF}0a` }}
      >
        <Apple size={15} />
        Get it on the App Store
      </a>
    </>
  );
}
