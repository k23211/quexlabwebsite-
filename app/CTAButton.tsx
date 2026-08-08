"use client";

import { ArrowUpRight } from "lucide-react";
import { FOREST, LEAF } from "./theme";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function CTAButton({
  href,
  label,
  trackConversion,
}: {
  href: string;
  label: string;
  trackConversion?: boolean;
}) {
  const handleClick = () => {
    if (trackConversion && typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-18372099949/TulxCJProNwcEO3-v7hE",
      });
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group/cta relative mt-4 inline-flex items-center gap-1.5 overflow-hidden rounded-full py-2.5 pl-4 pr-3.5 text-xs font-semibold text-white shadow-[0_10px_22px_-8px_rgba(15,61,46,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-8px_rgba(15,61,46,0.65)] sm:text-sm"
      style={{ background: `linear-gradient(135deg, ${LEAF}, ${FOREST})` }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 opacity-25"
        style={{ background: "linear-gradient(180deg, #ffffff, transparent)" }}
      />
      <span className="relative">{label}</span>
      <ArrowUpRight
        size={14}
        className="relative transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
      />
    </a>
  );
}
