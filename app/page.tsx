import type { Metadata } from "next";
import Link from "next/link";
import { Globe2, Smartphone, Sparkles } from "lucide-react";
import Nav from "./components/Nav";
import { INK, INK_SOFT, LEAF, PAPER, LogoMark } from "./theme";

export const metadata: Metadata = {
  title: "Quexlab Technologies | Software Studio in Kumasi, Ghana",
  description:
    "We build mobile apps and websites — culture-inspired games, and practical tools for everyday problems in Ghana.",
};

const FEATURES = [
  {
    Icon: Sparkles,
    label: "Culture-rooted design",
  },
  {
    Icon: Smartphone,
    label: "Real-world mobile tools",
  },
  {
    Icon: Globe2,
    label: "Built in Kumasi, for Ghana",
  },
];

export default function Home() {
  return (
    <div
      className="relative flex h-[100dvh] w-screen flex-col overflow-hidden"
      style={{ background: PAPER, color: INK }}
    >
      {/* subtle background marks — echo the logo, sit behind everything */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 opacity-[0.04] sm:-right-16 sm:-top-16"
      >
        <LogoMark size={420} />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 opacity-[0.03] sm:-bottom-24 sm:-left-24"
      >
        <LogoMark size={360} />
      </div>

      {/* Signature element: a Sankofa bird, low-opacity, sitting directly
          behind the headline — the studio's own symbol of "go back and
          fetch it," rather than a generic gradient accent. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06] sm:h-[460px] sm:w-[460px]"
        style={{ animation: "sankofa-breathe 9s ease-in-out infinite" }}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 20c-8 0-14 6-14 14 0 5 3 9 7 12-14 6-24 20-24 36 0 4 1 7 2 10-18 4-31 20-31 39 0 22 18 40 40 40 12 0 23-5 30-14 3 8 11 13 20 13 12 0 22-10 22-22 0-9-6-17-14-20 10-8 16-20 16-34 0-24-19-43-43-43-3 0-6 0-9 1 2-3 3-6 3-10 0-8-6-14-14-14-8 0-14 6-14 14 0 3 1 5 2 8-6-2-13-3-19-3z"
            stroke={LEAF}
            strokeWidth="3"
          />
          <circle cx="128" cy="46" r="4" fill={LEAF} />
        </svg>
      </div>

      <Nav />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center overflow-hidden px-6 text-center sm:px-10">
        <div
          className="flex flex-col items-center"
          style={{ animation: "fade-rise 0.7s ease-out both" }}
        >
          <p
            className="text-xs font-medium uppercase tracking-[0.3em]"
            style={{ color: LEAF }}
          >
            Kumasi, Ghana
          </p>
          <span
            aria-hidden
            className="mt-2 block h-px w-10"
            style={{ background: `${LEAF}66` }}
          />

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Quexlab
            <br />
            <span style={{ color: LEAF }}>Technologies</span>
          </h1>

          <p
            className="mt-4 max-w-sm text-sm leading-relaxed sm:mt-6 sm:max-w-md sm:text-lg"
            style={{ color: INK_SOFT }}
          >
            We build mobile apps and websites — culture-inspired games, and
            practical tools for everyday problems in Ghana.
          </p>
        </div>

        <div
          className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:gap-4"
          style={{ animation: "fade-rise 0.7s ease-out 0.15s both" }}
        >
          <Link
            href="/work"
            className="rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-transform duration-150 hover:scale-[1.03] hover:opacity-90 sm:px-7 sm:py-3"
            style={{ background: INK }}
          >
            See our work
          </Link>
          <Link
            href="/contact"
            className="rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-150 hover:opacity-70 sm:px-7 sm:py-3"
            style={{ color: INK, border: `1px solid ${INK}` }}
          >
            Get in touch
          </Link>
        </div>

        {/* Feature strip — fills the lower half with real substance rather
            than empty space, without turning into a stats-block cliché. */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:mt-14"
          style={{ animation: "fade-rise 0.7s ease-out 0.3s both" }}
        >
          {FEATURES.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-xs sm:text-sm"
              style={{ color: INK_SOFT }}
            >
              <Icon size={16} color={LEAF} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-rise {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sankofa-breathe {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.06; }
          50% { transform: translate(-50%, -50%) scale(1.04); opacity: 0.09; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
