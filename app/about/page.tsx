import type { Metadata } from "next";
import Nav from "../components/Nav";
import { FOREST, INK, INK_SOFT, LEAF, PAPER, LogoMark } from "../theme";

export const metadata: Metadata = {
  title: "About | Quexlab Technologies",
  description:
    "Quexlab Technologies is a small software studio building mobile apps and websites with roots in Ghanaian and Akan culture — designed for people everywhere.",
  alternates: {
    canonical: "https://quexlabwebsite.vercel.app/about",
  },
  openGraph: {
    title: "About | Quexlab Technologies",
    description:
      "Quexlab Technologies is a small software studio building mobile apps and websites with roots in Ghanaian and Akan culture — designed for people everywhere.",
    url: "https://quexlabwebsite.vercel.app/about",
    siteName: "Quexlab Technologies",
    locale: "en_GH",
    type: "website",
  },
};

export default function About() {
  return (
    <div
      className="relative flex h-[100dvh] w-screen flex-col overflow-hidden"
      style={{ background: PAPER, color: INK }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 opacity-[0.04] sm:-right-16 sm:-top-16"
      >
        <LogoMark size={420} />
      </div>

      <Nav />

      <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 sm:px-10">
        <div className="max-w-xl">
          <p
            className="text-xs font-medium uppercase tracking-[0.3em]"
            style={{ color: LEAF }}
          >
            Sankofa — go back and fetch it
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            About the studio
          </h2>
          <p
            className="mt-4 text-sm leading-relaxed sm:text-base sm:leading-8"
            style={{ color: INK_SOFT }}
          >
            Quexlab Technologies is a small software studio building mobile
            apps and websites with roots in Ghanaian and Akan culture —
            designed for people everywhere. We build tools people actually
            use, from agricultural data platforms to games that carry Akan
            symbolism into something fresh and playable.
          </p>
          <p
            className="mt-6 text-xs font-medium uppercase tracking-[0.3em]"
            style={{ color: FOREST }}
          >
            Nkyinkyim — versatility, adaptability
          </p>
        </div>
      </div>
    </div>
  );
}
