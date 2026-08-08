import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Gamepad2, Smartphone } from "lucide-react";
import Nav from "../components/Nav";
import { FOREST, INK, INK_SOFT, LEAF, PAPER, LogoMark } from "../theme";

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
    locale: "en_US",
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

type WorkItem = {
  title: string;
  badge: string;
  BadgeIcon: typeof Gamepad2;
  description: string;
  ctaLabel: string;
  href: string;
  screenshots: { src: string; alt: string }[];
};

const PROJECTS: WorkItem[] = [
  {
    title: "Adinkra Match",
    badge: "Mobile game",
    BadgeIcon: Gamepad2,
    description:
      "A match-3 puzzle game built around Adinkra symbols and kente patterns — a playful way to explore Akan visual culture.",
    ctaLabel: "Get it on Play Store",
    href: "https://play.google.com/store/apps/details?id=com.adinkramatchgh.game",
    screenshots: ADINKRA_SCREENSHOTS,
  },
  {
    title: "Agriquex Hub",
    badge: "Mobile app",
    BadgeIcon: Smartphone,
    description:
      "A platform helping farmers track and manage agricultural data, built for real conditions on the ground.",
    ctaLabel: "Get it on Play Store",
    href: "https://play.google.com/store/apps/details?id=com.agriquexdata.app",
    screenshots: AGRIQUEX_SCREENSHOTS,
  },
];

export default function Work() {
  return (
    <div
      className="relative flex min-h-[100dvh] w-screen flex-col overflow-hidden"
      style={{ background: PAPER, color: INK }}
    >
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          background: `radial-gradient(55% 40% at 50% 0%, ${LEAF}12 0%, transparent 70%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -right-24 -top-24 opacity-[0.04] sm:-right-16 sm:-top-16"
      >
        <LogoMark size={420} />
      </div>

      <Nav />

      <div className="relative flex flex-1 flex-col items-center px-6 py-10 sm:px-10 sm:py-14">
        {/* Page header — mirrors the homepage's eyebrow + rule motif */}
        <div
          className="mb-10 flex max-w-lg flex-col items-center text-center sm:mb-14"
          style={{ animation: "fade-rise 0.6s ease-out both" }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: LEAF }}
          >
            Selected Work
          </p>
          <span
            aria-hidden
            className="mt-2.5 block h-[3px] w-12 rounded-full"
            style={{ background: `linear-gradient(90deg, ${LEAF}, ${LEAF}00)` }}
          />
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Products we&apos;ve shipped
          </h1>
          <p
            className="mt-3 text-sm leading-relaxed sm:text-base"
            style={{ color: INK_SOFT }}
          >
            Live on the Play Store today — built end to end, from first
            sketch to something people actually use.
          </p>
        </div>

        <div className="w-full max-w-3xl space-y-6 sm:space-y-8">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="relative overflow-hidden rounded-2xl p-5 shadow-[0_20px_45px_-20px_rgba(11,18,32,0.18)] transition-all duration-200 hover:shadow-[0_26px_55px_-20px_rgba(11,18,32,0.24)] sm:p-7"
              style={{
                background: "#FFFFFF",
                border: `1px solid ${LEAF}26`,
                animation: `fade-rise 0.6s ease-out ${0.1 + i * 0.1}s both`,
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full"
                style={{ background: `${LEAF}0f` }}
              />

              {/* Badge */}
              <div
                className="relative mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                style={{
                  background: `${LEAF}14`,
                  color: FOREST,
                  border: `1px solid ${LEAF}33`,
                }}
              >
                <project.BadgeIcon size={12} />
                {project.badge}
              </div>

              <h3 className="relative text-lg font-semibold sm:text-xl" style={{ color: INK }}>
                {project.title}
              </h3>
              <p
                className="relative mt-2 max-w-xl text-xs leading-relaxed sm:text-sm"
                style={{ color: INK_SOFT }}
              >
                {project.description}
              </p>

              {/* CTA — a real button, not a text link, so it reads as tappable */}
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta relative mt-4 inline-flex items-center gap-1.5 overflow-hidden rounded-full py-2.5 pl-4 pr-3.5 text-xs font-semibold text-white shadow-[0_10px_22px_-8px_rgba(15,61,46,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-8px_rgba(15,61,46,0.65)] sm:text-sm"
                style={{ background: `linear-gradient(135deg, ${LEAF}, ${FOREST})` }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-1/2 opacity-25"
                  style={{ background: "linear-gradient(180deg, #ffffff, transparent)" }}
                />
                <span className="relative">{project.ctaLabel}</span>
                <ArrowUpRight
                  size={14}
                  className="relative transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                />
              </a>

              {/* Screenshot gallery — scrolls horizontally, fades at the edge
                  as a quiet hint that there's more to swipe through */}
              <div
                className="relative mt-5 flex gap-3 overflow-x-auto pb-2"
                style={{
                  scrollSnapType: "x mandatory",
                  WebkitMaskImage:
                    "linear-gradient(to right, black 90%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to right, black 90%, transparent 100%)",
                }}
              >
                {project.screenshots.map((shot) => (
                  <div
                    key={shot.src}
                    className="relative h-56 w-32 flex-shrink-0 overflow-hidden rounded-xl sm:h-72 sm:w-40"
                    style={{ scrollSnapAlign: "start", border: `1px solid ${LEAF}26` }}
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
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-rise {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
