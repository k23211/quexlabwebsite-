import type { Metadata } from "next";
import Link from "next/link";
import Nav from "./components/Nav";
import { INK, INK_SOFT, LEAF, PAPER, LogoMark } from "./theme";

export const metadata: Metadata = {
  title: "Quexlab Technologies | Software Studio in Accra, Ghana",
  description:
    "Mobile apps and websites — from culture-inspired games to real-world tools for everyday problems.",
};

export default function Home() {
  return (
    <div
      className="relative flex h-[100dvh] w-screen flex-col overflow-hidden"
      style={{ background: PAPER, color: INK }}
    >
      {/* subtle background mark — echoes the logo, sits behind everything */}
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

      <Nav />

      <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 text-center sm:px-10">
        <p
          className="text-xs font-medium uppercase tracking-[0.3em]"
          style={{ color: LEAF }}
        >
          kumasi, Ghana
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Quexlab
          <br />
          <span style={{ color: LEAF }}>Technologies</span>
        </h1>

        <p
          className="mt-4 max-w-sm text-sm leading-relaxed sm:mt-6 sm:max-w-md sm:text-lg"
          style={{ color: INK_SOFT }}
        >
          Mobile apps and websites — from culture-inspired games to
          real-world tools for everyday problems.
        </p>

        <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
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
      </div>
    </div>
  );
}
