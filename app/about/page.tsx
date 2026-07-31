import type { Metadata } from "next";
import Nav from "../components/Nav";
import { FOREST, INK, INK_SOFT, LEAF, PAPER } from "../theme";

export const metadata: Metadata = {
  title: "About | Quexlab Technologies",
  description:
    "Quexlab Technologies is a small software studio building mobile apps and digital services rooted in Ghanaian life and culture.",
  alternates: {
    canonical: "https://quexlabwebsite.vercel.app/about",
  },
  openGraph: {
    title: "About | Quexlab Technologies",
    description:
      "Quexlab Technologies is a small software studio building mobile apps and digital services rooted in Ghanaian life and culture.",
    url: "https://quexlabwebsite.vercel.app/about",
    siteName: "Quexlab Technologies",
    locale: "en_GH",
    type: "website",
  },
};

export default function About() {
  return (
    <div
      className="flex h-[100dvh] w-screen flex-col overflow-hidden"
      style={{ background: PAPER, color: INK }}
    >
      <Nav />
      <div className="flex flex-1 flex-col items-center justify-center overflow-hidden px-6 sm:px-10">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em]" style={{ color: LEAF }}>
            Sankofa — go back and fetch it
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">About the studio</h2>
          <p
            className="mt-4 text-sm leading-relaxed sm:text-base sm:leading-8"
            style={{ color: INK_SOFT }}
          >
            Quexlab Technologies is a small software studio building mobile apps
            and digital services rooted in Ghanaian life and culture. We build
            tools people actually use — from agricultural data platforms to
            games that carry Akan symbolism into something fresh and playable.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em]" style={{ color: FOREST }}>
            Nkyinkyim — versatility, adaptability
          </p>
        </div>
      </div>
    </div>
  );
}
