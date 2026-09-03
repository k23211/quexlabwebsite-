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
      "A platform to buy and sell, connect with a community, manage farm tools, and get help from AI. Built for agriculture and open to everyone.",
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
      "A match-3 puzzle game built around Adinkra symbols and kente patterns. A playful way to explore Akan visual culture.",
    ctaLabel: "Get it on Play Store",
    href: "https://play.google.com/store/apps/details?id=com.adinkramatchgh.game",
    screenshots: ADINKRA_SCREENSHOTS,
  },
];

export default function Work() {
  return (
    <div
      className="relative flex min-h-[100dvh] w-screen flex-col"
      style={{ background: PAPER, color: INK }}
    >
      <Nav />

      <div className="relative flex flex-1 flex-col px-6 py-12 sm:px-10 sm:py-16">
        <section className="mx-auto w-full max-w-6xl pb-10 sm:pb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: LEAF }}>
            Selected work
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
            Products made to be used.
          </h1>
          <p
            className="mt-5 max-w-2xl text-base leading-relaxed sm:text-lg"
            style={{ color: INK_SOFT }}
          >
            We take ideas from first sketch to the hands of real people. These
            are two live products built with care, purpose, and a close eye on
            the details that make software useful.
          </p>
        </section>

        <section className="mx-auto w-full max-w-6xl space-y-6 sm:space-y-8">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="relative overflow-hidden rounded-2xl border p-5 sm:p-8"
              style={{
                background: "#FFFFFF",
                borderColor: "#E4E2DA",
              }}
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-12">
              {/* Product details */}
              <div>
              <div
                className="mb-3 inline-flex items-center gap-1.5 text-xs font-medium"
                style={{ color: INK_SOFT }}
              >
                <project.BadgeIcon size={14} />
                {project.badge}
              </div>

              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl" style={{ color: INK }}>
                {project.title}
              </h3>
              <p
                className="mt-3 max-w-xl text-sm leading-relaxed sm:text-base"
                style={{ color: INK_SOFT }}
              >
                {project.description}
              </p>

              <div className="mt-2 flex flex-wrap gap-3">
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
                </div>

                {/* Screenshot gallery */}
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
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
