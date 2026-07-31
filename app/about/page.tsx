import type { Metadata } from "next";
import Image from "next/image";
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
      className="relative flex min-h-[100dvh] w-screen flex-col"
      style={{ background: PAPER, color: INK }}
    >
      <div
        aria-hidden
        className="pointer-events-none fixed -right-24 -top-24 opacity-[0.04] sm:-right-16 sm:-top-16"
      >
        <LogoMark size={420} />
      </div>

      <Nav />

      <div className="relative flex flex-1 flex-col items-center px-6 py-10 sm:px-10 sm:py-14">
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

          {/* Founder section */}
          <div
            className="mt-10 flex flex-col items-center gap-4 rounded-2xl p-6 text-center sm:mt-14 sm:flex-row sm:gap-6 sm:p-8 sm:text-left"
            style={{ background: INK, border: `1px solid ${LEAF}33` }}
          >
            <div
              className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-full sm:h-32 sm:w-32"
              style={{ border: `2px solid ${LEAF}` }}
            >
              <Image
                src="/founder.jpg"
                alt="Albert Agyapong, Founder of Quexlab Technologies"
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                Albert Agyapong
              </h3>
              <p
                className="mt-1 text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: LEAF }}
              >
                Founder
              </p>
              <p
                className="mt-3 text-sm leading-relaxed sm:text-base"
                style={{ color: "#B7C0CC" }}
              >
                Albert holds a degree in Agribusiness with Entrepreneurship
                and Finance from Kumasi Technical University. He founded
                Quexlab Technologies to build mobile applications and
                websites that combine Ghanaian cultural identity with
                practical, real-world solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
