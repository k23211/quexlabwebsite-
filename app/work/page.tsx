import type { Metadata } from "next";
import Image from "next/image";
import { Gamepad2, Smartphone } from "lucide-react";
import Nav from "../components/Nav";
import CTAButton from "../CTAButton";
import { INK, INK_SOFT, LEAF, PAPER } from "../theme";

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
  trackConversion?: boolean;
  appStoreLabel?: string;
  appStoreHref?: string;
  screenshots: { src: string; alt: string }[];
};

const PROJECTS: WorkItem[] = [
  {
    title: "Agriquex Hub",
    badge: "Mobile app",
    BadgeIcon: Smartphone,
    description:
      "A platform to buy and sell, connect with a community, manage farm tools, and get help from AI — built for agriculture, open to everyone.",
    ctaLabel: "Get it on Play Store",
    href: "https://play.google.com/store/apps/details?id=com.agriquexdata.app",
    trackConversion: true,
    appStoreLabel: "Download on the App Store",
    appStoreHref: "https://apps.apple.com/gh/app/agriquex-hub/id6799785601",
    screenshots: AGRIQUEX_SCREENSHOTS,
  },
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
];

export default function Work() {
  return (
    <div
      className="relative flex min-h-[100dvh] w-screen flex-col overflow-hidden"
      style={{ background: PAPER, color: INK }}
    >
      <Nav />

      <div className="relative flex flex-1 flex-col items-center px-6 py-10 sm:px-10 sm:py-14">
        {/* Page header */}
        <div className="mb-10 flex max-w-lg flex-col items-center text-center sm:mb-14">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Work
          </h1>
          <p
            className="mt-3 text-sm leading-relaxed sm:text-base"
            style={{ color: INK_SOFT }}
          >
            Two products, live on the Play Store and App Store — built end to
            end, from first sketch to something people actually use.
          </p>
        </div>

        <div className="w-full max-w-3xl space-y-6 sm:space-y-8">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="relative overflow-hidden rounded-xl p-5 sm:p-7"
              style={{
                background: "#FFFFFF",
                border: `1px solid ${LEAF}26`,
              }}
            >
              {/* Badge */}
              <div
                className="mb-3 inline-flex items-center gap-1.5 text-xs font-medium"
                style={{ color: INK_SOFT }}
              >
                <project.BadgeIcon size={14} />
                {project.badge}
              </div>

              <h3 className="text-lg font-semibold sm:text-xl" style={{ color: INK }}>
                {project.title}
              </h3>
              <p
                className="mt-2 max-w-xl text-xs leading-relaxed sm:text-sm"
                style={{ color: INK_SOFT }}
              >
                {project.description}
              </p>

              {/* CTA(s) — real buttons, not text links, so they read as tappable */}
              <div className="mt-4 flex flex-wrap gap-3">
                <CTAButton
                  href={project.href}
                  label={project.ctaLabel}
                  trackConversion={project.trackConversion}
                />
                {project.appStoreHref && (
                  <CTAButton
                    href={project.appStoreHref}
                    label={project.appStoreLabel ?? "Get it on the App Store"}
                  />
                )}
              </div>

              {/* Screenshot gallery — scrolls horizontally, fades at the edge
                  as a quiet hint that there's more to swipe through */}
              <div
                className="mt-5 flex gap-3 overflow-x-auto pb-2"
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
    </div>
  );
}
