import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Gamepad2, Globe, Smartphone } from "lucide-react";
import Nav from "../components/Nav";
import StoreBadge from "../StoreBadge";
import { ArrowIcon, INK, PAPER } from "../theme";

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
  { src: "/agriquex-screenshots/agriquex-03-dashboard.png", alt: "Agriquex Hub dashboard overview" },
  { src: "/agriquex-screenshots/agriquex-08-farm.png", alt: "Agriquex Hub farm management" },
  { src: "/agriquex-screenshots/agriquex-09-farm-tools.png", alt: "Agriquex Hub smart farm tools" },
  { src: "/agriquex-screenshots/agriquex-01-market.png", alt: "Agriquex Hub product hub marketplace" },
  { src: "/agriquex-screenshots/agriquex-12-product-detail.png", alt: "Agriquex Hub product details" },
  { src: "/agriquex-screenshots/agriquex-13-crops.png", alt: "Agriquex Hub crop farms directory" },
  { src: "/agriquex-screenshots/agriquex-10-extension-officers.png", alt: "Agriquex Hub extension officers" },
  { src: "/agriquex-screenshots/agriquex-07-community.png", alt: "Agriquex Hub community feed" },
  { src: "/agriquex-screenshots/agriquex-11-find-friends.png", alt: "Agriquex Hub find fellow farmers" },
];

type WorkItem = {
  title: string;
  detailHref: string;
  badge: string;
  BadgeIcon: typeof Gamepad2;
  description: string;
  href: string;
  tint: string;
  trackConversion?: boolean;
  appStoreLabel?: string;
  appStoreHref?: string;
  screenshots: { src: string; alt: string }[];
};

const PROJECTS: WorkItem[] = [
  {
    title: "Agriquex Hub",
    detailHref: "/work/agriquex-hub",
    badge: "Mobile app",
    BadgeIcon: Smartphone,
    description:
      "A platform to buy and sell, connect with a community, manage farm tools, and get help from AI. Built for agriculture and open to everyone.",
    href: "https://play.google.com/store/apps/details?id=com.agriquexdata.app",
    tint: "#E3EDD5",
    trackConversion: true,
    appStoreHref: "https://apps.apple.com/gh/app/agriquex-hub/id6799785601",
    screenshots: AGRIQUEX_SCREENSHOTS,
  },
  {
    title: "Adinkra Match",
    detailHref: "/work/adinkra-match",
    badge: "Mobile game",
    BadgeIcon: Gamepad2,
    description:
      "A match-3 puzzle game built around Adinkra symbols and kente patterns. A playful way to explore Akan visual culture.",
    href: "https://play.google.com/store/apps/details?id=com.adinkramatchgh.game",
    tint: "#F2E4C4",
    screenshots: ADINKRA_SCREENSHOTS,
  },
];

const TYPE_PILL =
  "inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink-soft";

export default function Work() {
  return (
    <div style={{ background: PAPER, color: INK }}>
      <Nav />

      <div>
        <section className="shell reveal pb-10 pt-10 text-left sm:pb-14 sm:pt-16">
          <span className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-medium">
            Selected work
          </span>
          <h1 className="display mt-6 max-w-4xl">
            Products made{" "}
            <span className="muted-text">to be used.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
            We take ideas from first sketch to the hands of real people. These
            are live products and websites built with care, purpose, and a
            close eye on the details that make software useful.
          </p>
        </section>

        <section className="shell grid gap-5 pb-16 sm:pb-24 lg:pb-32">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
            >
              <div className="flex flex-col justify-between gap-10 p-4 text-left sm:p-8 lg:p-10">
                <div>
                  <span className={TYPE_PILL}>
                    <project.BadgeIcon size={14} />
                    {project.badge}
                  </span>
                  <h2 className="mt-5 text-4xl sm:text-5xl">
                    <Link href={project.detailHref}>{project.title}</Link>
                  </h2>
                  <p className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col items-start gap-5">
                  <Link href={project.detailHref} className="btn btn-dark">
                    View project
                    <span className="btn-icon">
                      <ArrowIcon direction="up-right" />
                    </span>
                  </Link>
                  <div className="flex flex-wrap items-center gap-3">
                    <StoreBadge
                      href={project.href}
                      store="google"
                      trackConversion={project.trackConversion}
                    />
                    {project.appStoreHref && (
                      <StoreBadge href={project.appStoreHref} store="apple" />
                    )}
                  </div>
                </div>
              </div>

              <div
                className="media min-w-0 p-4 sm:p-6"
                style={{ background: project.tint }}
              >
                <div
                  role="region"
                  aria-label={`${project.title} screenshots`}
                  tabIndex={0}
                  className="flex gap-3 overflow-x-auto pb-2"
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
                      className="relative h-64 w-36 shrink-0 overflow-hidden rounded-2xl bg-white sm:h-80 sm:w-44"
                      style={{ scrollSnapAlign: "start" }}
                    >
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes="(max-width: 640px) 144px, 176px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <article className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-stretch">
            <div className="flex flex-col justify-between gap-10 p-4 text-left sm:p-8 lg:p-10">
              <div>
                <span className={TYPE_PILL}>
                  <Globe size={14} />
                  Client website
                </span>
                <h2 className="mt-5 text-4xl sm:text-5xl">
                  <a
                    href="https://www.chardagrocorporatives.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chard Agro Cooperatives
                  </a>
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base">
                  A website for a Ghanaian agribusiness that raises poultry,
                  turkey, and goats, keeps its meat in cold storage, and sells
                  directly to customers.
                </p>
              </div>
              <a
                href="https://www.chardagrocorporatives.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark w-fit"
              >
                Visit website
                <span className="btn-icon">
                  <ArrowIcon direction="up-right" />
                </span>
              </a>
            </div>

            <div className="media relative aspect-[3/2] w-full lg:aspect-auto lg:min-h-80">
              <Image
                src="/chard-agro-poster.png"
                alt="Chard Agro Cooperatives: modern farming with healthy poultry and quality goats"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
