import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../components/Nav";
import { INK, LEAF, PAPER, LogoMark } from "../theme";

export const metadata: Metadata = {
  title: "Work | Quexlab Technologies",
  description:
    "Adinkra Match and Agriquex Hub — mobile products built by Quexlab Technologies.",
  alternates: {
    canonical: "https://quexlabwebsite.vercel.app/work",
  },
  openGraph: {
    title: "Work | Quexlab Technologies",
    description:
      "Adinkra Match and Agriquex Hub — mobile products built by Quexlab Technologies.",
    url: "https://quexlabwebsite.vercel.app/work",
    siteName: "Quexlab Technologies",
    locale: "en_GH",
    type: "website",
  },
};

const ADINKRA_SCREENSHOTS = [
  { src: "/adinkramatch-screenshots/adinkra-01-battle.jpg", alt: "Adinkra Match Ananse's Challenge battle mode" },
  { src: "/adinkramatch-screenshots/adinkra-02-playmenu.jpg", alt: "Adinkra Match game modes menu" },
  { src: "/adinkramatch-screenshots/adinkra-03-maze.jpg", alt: "Adinkra Match maze quest gameplay" },
  { src: "/adinkramatch-screenshots/adinkra-04-flipmatch.jpg", alt: "Adinkra Match flip and match card game" },
  { src: "/adinkramatch-screenshots/adinkra-05-cards.jpg", alt: "Adinkra Match card collection levels" },
  { src: "/adinkramatch-screenshots/adinkra-06-ranks.jpg", alt: "Adinkra Match hall of champions leaderboard" },
];

const AGRIQUEX_SCREENSHOTS = [
  { src: "/agriquex-screenshots/agriquex-01-market.png", alt: "Agriquex Hub marketplace screen" },
  { src: "/agriquex-screenshots/agriquex-03-dashboard.png", alt: "Agriquex Hub dashboard overview" },
  { src: "/agriquex-screenshots/agriquex-05-poultry.png", alt: "Agriquex Hub poultry management" },
  { src: "/agriquex-screenshots/agriquex-04-tasks.png", alt: "Agriquex Hub task manager" },
  { src: "/agriquex-screenshots/agriquex-07-community.png", alt: "Agriquex Hub community feed" },
  { src: "/agriquex-screenshots/agriquex-06-profile.png", alt: "Agriquex Hub farm profile" },
  { src: "/agriquex-screenshots/agriquex-02-notifications.png", alt: "Agriquex Hub notifications" },
  { src: "/agriquex-screenshots/agriquex-08-farm.png", alt: "Agriquex Hub farm management" },
];

export default function Work() {
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
        <div className="w-full max-w-3xl space-y-6">
          <div
            className="rounded-2xl p-5 transition-all duration-150 sm:p-7"
            style={{ background: INK, border: `1px solid ${LEAF}33` }}
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.adinkramatchgh.game"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                Adinkra Match
              </h3>
              <p
                className="mt-2 text-xs leading-relaxed sm:text-sm"
                style={{ color: "#B7C0CC" }}
              >
                A match-3 puzzle game built around Adinkra symbols and kente
                patterns — a playful way to explore Akan visual culture.
              </p>
              <span
                className="mt-3 block text-xs font-medium"
                style={{ color: LEAF }}
              >
                Mobile game · Play Store →
              </span>
            </a>

            {/* Screenshot gallery — scrolls horizontally, swipeable on mobile */}
            <div
              className="mt-5 flex gap-3 overflow-x-auto pb-2"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {ADINKRA_SCREENSHOTS.map((shot) => (
                <div
                  key={shot.src}
                  className="relative h-56 w-32 flex-shrink-0 overflow-hidden rounded-xl sm:h-72 sm:w-40"
                  style={{ scrollSnapAlign: "start", border: `1px solid ${LEAF}33` }}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 640px) 128px, 160px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl p-5 transition-all duration-150 sm:p-7"
            style={{ background: INK, border: `1px solid ${LEAF}33` }}
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.agriquexdata.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                Agriquex Hub
              </h3>
              <p
                className="mt-2 text-xs leading-relaxed sm:text-sm"
                style={{ color: "#B7C0CC" }}
              >
                A platform helping Ghanaian farmers track and manage
                agricultural data, built for real conditions on the ground.
              </p>
              <span
                className="mt-3 block text-xs font-medium"
                style={{ color: "#9CC5A1" }}
              >
                Mobile app · Play Store →
              </span>
            </a>

            {/* Screenshot gallery — scrolls horizontally, swipeable on mobile */}
            <div
              className="mt-5 flex gap-3 overflow-x-auto pb-2"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {AGRIQUEX_SCREENSHOTS.map((shot) => (
                <div
                  key={shot.src}
                  className="relative h-56 w-32 flex-shrink-0 overflow-hidden rounded-xl sm:h-72 sm:w-40"
                  style={{ scrollSnapAlign: "start", border: `1px solid ${LEAF}33` }}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 640px) 128px, 160px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
