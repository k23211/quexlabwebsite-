import type { Metadata } from "next";
import Link from "next/link";
import Nav from "./components/Nav";
import { INK, INK_SOFT, LEAF, PAPER } from "./theme";

export const metadata: Metadata = {
  title: "Quexlab Technologies | Software Studio in Accra, Ghana",
  description:
    "Software and digital products, designed and built for Ghana.",
};

export default function Home() {
  return (
    <div
      className="flex h-[100dvh] w-screen flex-col overflow-hidden"
      style={{ background: PAPER, color: INK }}
    >
      <Nav />
      <div className="flex flex-1 flex-col items-center justify-center overflow-hidden px-6 text-center sm:px-10">
        <p className="text-xs uppercase tracking-[0.3em]" style={{ color: LEAF }}>
          Accra, Ghana
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
          Quexlab
          <br />
          <span style={{ color: LEAF }}>Technologies</span>
        </h1>
        <p
          className="mt-4 max-w-sm text-sm sm:mt-6 sm:max-w-md sm:text-lg"
          style={{ color: INK_SOFT }}
        >
          Software and digital products, designed and built for Ghana.
        </p>
        <Link
          href="/work"
          className="mt-6 rounded-full px-6 py-2.5 text-sm font-semibold text-white sm:mt-8 sm:px-7 sm:py-3"
          style={{ background: INK }}
        >
          See our work
        </Link>
      </div>
    </div>
  );
}
