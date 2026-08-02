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
            Learning from the past, building what&apos;s next
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
            Versatile by design, adaptable by nature
          </p>

          {/* Founder section */}
          <div
            className="relative mt-10 flex flex-col items-center gap-4 overflow-hidden rounded-2xl p-6 text-center shadow-[0_20px_45px_-20px_rgba(11,18,32,0.18)] sm:mt-14 sm:flex-row sm:gap-8 sm:p-9 sm:text-left"
            style={{ background: "#FFFFFF", border: `1px solid ${LEAF}26` }}
          >
            {/* faint corner wash so the card reads as considered, not stark white */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full"
              style={{ background: `${LEAF}0f` }}
            />

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
            <div className="relative">
              <h3 className="text-lg font-semibold sm:text-xl" style={{ color: INK }}>
                Albert Agyapong
              </h3>
              <span
                className="mt-1.5 inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: FOREST, background: `${LEAF}17` }}
              >
                Founder
              </span>
              <p
                className="mt-4 text-sm italic leading-relaxed sm:text-base sm:leading-8"
                style={{ color: INK_SOFT }}
              >
                <span aria-hidden style={{ color: LEAF, opacity: 0.5 }}>
                  &ldquo;
                </span>
                Albert holds a degree in Agribusiness with Entrepreneurship
                and Finance from Kumasi Technical University. He founded
                Quexlab Technologies to build mobile applications and
                websites that combine Ghanaian cultural identity with
                practical, real-world solutions.
                <span aria-hidden style={{ color: LEAF, opacity: 0.5 }}>
                  &rdquo;
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
