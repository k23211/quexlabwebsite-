import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import { FOREST, INK, INK_SOFT, LEAF, PAPER } from "./theme";

export const metadata: Metadata = {
  title: "Software Studio in Ghana | Quexlab Technologies",
  description:
    "Quexlab Technologies is a software studio in Ghana, building mobile apps, websites, games, and agriculture technology, including Agriquex Hub and Adinkra Match.",
};

const FEATURES = [
  "Culture rooted design",
  "Apps and websites",
  "Engaged in farming",
  "Built for everyone",
];

const SERVICES = [
  {
    title: "Mobile apps",
    text: "Android and iOS apps that stay fast on real phones and real networks.",
  },
  {
    title: "Websites and platforms",
    text: "Clear, quick sites and web platforms that people can find and trust.",
  },
  {
    title: "Product design",
    text: "Interfaces shaped around how your users actually work and decide.",
  },
  {
    title: "Agriculture technology",
    text: "Tools for farmers, buyers, and communities across the food chain.",
  },
];

const STEPS = [
  {
    title: "Understand the problem",
    text: "Start with the people, context, and outcome.",
  },
  {
    title: "Design the right shape",
    text: "Make the experience clear before making it big.",
  },
  {
    title: "Build and test in the open",
    text: "Keep feedback close to the work.",
  },
  {
    title: "Launch, learn, improve",
    text: "Treat launch as the beginning, not the finish.",
  },
];

const LINE = "var(--line)";

/** Kente-inspired woven band. Used once, as the page's signature detail. */
function KenteBand({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={className}
      style={{
        height: 10,
        backgroundImage:
          "repeating-linear-gradient(90deg,#E8B94D 0 28px,#174D3D 28px 56px,#B23A2E 56px 70px,#16181B 70px 84px,#E8B94D 84px 98px,#174D3D 98px 126px)",
      }}
    />
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h9M8.5 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** One header pattern for every section: label on top, heading below, both left-aligned. */
function SectionHead({
  label,
  title,
  light = false,
}: {
  label: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="mb-10 max-w-2xl text-left sm:mb-14">
      <p
        className="mb-3 text-sm font-semibold"
        style={{ color: light ? "#C9E3A0" : FOREST }}
      >
        {label}
      </p>
      <h2
        className="text-[2rem] leading-[1.1] tracking-[-0.01em] sm:text-5xl sm:leading-[1.06]"
        style={{ color: light ? "#fff" : INK }}
      >
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Agriquex Hub",
    operatingSystem: "ANDROID",
    applicationCategory: "BusinessApplication",
    description:
      "A platform to buy and sell, connect with a community, manage farm tools, and get help from AI, built for agriculture and open to everyone.",
    url: "https://play.google.com/store/apps/details?id=com.agriquexdata.app",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: {
      "@type": "Organization",
      name: "Quexlab Technologies",
      url: "https://quexlabwebsite.vercel.app/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <div className="min-h-screen" style={{ background: PAPER, color: INK }}>
        <Nav />

        {/* Hero */}
        <section className="reveal mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pb-16 pt-10 sm:px-10 sm:pb-24 sm:pt-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16 lg:pb-28">
          <div className="max-w-xl text-left">
            <p
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border bg-white/70 px-4 py-2 text-sm font-medium"
              style={{ borderColor: LINE, color: INK_SOFT }}
            >
              <span
                aria-hidden
                className="h-2 w-2 rounded-full"
                style={{ background: LEAF }}
              />
              Independent software studio in Kumasi, Ghana
            </p>
            <h1 className="text-[3rem] leading-[1] tracking-[-0.02em] sm:text-6xl lg:text-[4.9rem]">
              Software that works for real life.
            </h1>
            <p
              className="mt-6 max-w-md text-base leading-7 sm:mt-7 sm:text-lg sm:leading-8"
              style={{ color: INK_SOFT }}
            >
              We design and build mobile apps, websites, and digital products
              for the way people live and work in Ghana and beyond.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/work"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--forest)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--ink)]"
              >
                Explore our work <Arrow />
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold underline decoration-1 underline-offset-[6px] transition-colors hover:text-[var(--forest)]"
                style={{ color: INK }}
              >
                Talk to our team
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div
              className="relative aspect-[1.08/1] w-full overflow-hidden rounded-[28px] border"
              style={{ borderColor: LINE }}
            >
              <Image
                src="/hero-seedling.png"
                alt="A seedling emerging from soil, backlit by early morning light"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, (min-width: 768px) 28rem, 100vw"
                className="object-cover"
              />
              <KenteBand className="absolute inset-x-0 bottom-0" />
            </div>
            <p
              className="absolute -bottom-4 left-5 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-[0_8px_24px_-12px_rgba(20,40,25,0.35)] sm:left-8"
              style={{ color: FOREST }}
            >
              Technology, grounded in Ghana
            </p>
          </div>
        </section>

        {/* Values strip */}
        <section className="border-y" style={{ borderColor: LINE }}>
          <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-4 px-5 py-6 sm:px-10 sm:py-7 lg:grid-cols-4">
            {FEATURES.map((label) => (
              <li
                key={label}
                className="flex items-center gap-3 text-sm font-semibold sm:text-[15px]"
                style={{ color: INK_SOFT }}
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: LEAF }}
                />
                {label}
              </li>
            ))}
          </ul>
        </section>

        {/* Selected work */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-10 sm:py-24">
          <SectionHead
            label="Selected work"
            title="Products that earn their place in people’s lives."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            <Link href="/work/agriquex-hub" className="group block">
              <div
                className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px]"
                style={{ background: "#E3EDD5" }}
              >
                <Image
                  src="/agriquex-hub-1.png"
                  alt="Agriquex Hub app screens"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-contain p-6 mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.03] sm:p-8"
                />
              </div>
              <div className="px-1 pt-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl sm:text-[1.7rem]">Agriquex Hub</h3>
                  <span
                    className="rounded-full border px-3 py-1 text-xs font-semibold"
                    style={{ borderColor: LINE, color: INK_SOFT }}
                  >
                    Mobile app
                  </span>
                </div>
                <p
                  className="mt-3 max-w-md text-[15px] leading-7"
                  style={{ color: INK_SOFT }}
                >
                  Buy, sell, and manage farm tools with help from AI. Built for
                  agriculture and open to everyone.
                </p>
                <span
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: FOREST }}
                >
                  See the project <Arrow />
                </span>
              </div>
            </Link>

            <Link href="/work/adinkra-match" className="group block">
              <div
                className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px]"
                style={{ background: "#F2E4C4" }}
              >
                <Image
                  src="/adinkra-match-1.png"
                  alt="Adinkra Match game screens"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-contain p-6 mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.03] sm:p-8"
                />
              </div>
              <div className="px-1 pt-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl sm:text-[1.7rem]">Adinkra Match</h3>
                  <span
                    className="rounded-full border px-3 py-1 text-xs font-semibold"
                    style={{ borderColor: LINE, color: INK_SOFT }}
                  >
                    Mobile game
                  </span>
                </div>
                <p
                  className="mt-3 max-w-md text-[15px] leading-7"
                  style={{ color: INK_SOFT }}
                >
                  A match-3 puzzle built around Adinkra symbols and kente
                  patterns. A playful way to explore Akan visual culture.
                </p>
                <span
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: FOREST }}
                >
                  See the project <Arrow />
                </span>
              </div>
            </Link>

            <a
              href="https://www.chardagrocorporatives.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-6 sm:col-span-2 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-10"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[24px]">
                <Image
                  src="/chard-agro-poster.png"
                  alt="Chard Agro Cooperatives: modern farming with healthy poultry and quality goats"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="px-1 text-left">
                <span
                  className="inline-block rounded-full border px-3 py-1 text-xs font-semibold"
                  style={{ borderColor: LINE, color: INK_SOFT }}
                >
                  Client website
                </span>
                <h3 className="mt-4 text-2xl sm:text-[1.7rem]">
                  Chard Agro Cooperatives
                </h3>
                <p
                  className="mt-3 max-w-md text-[15px] leading-7"
                  style={{ color: INK_SOFT }}
                >
                  A website for a Ghanaian agribusiness that raises poultry,
                  turkey, and goats, keeps its meat in cold storage, and sells
                  directly to customers.
                </p>
                <span
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: FOREST }}
                >
                  Visit the website <Arrow />
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* Past events */}
        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-10 sm:pb-24">
          <SectionHead
            label="Past events"
            title="Good conversations make room for better ideas."
          />

          <Link
            href="/events"
            className="group grid overflow-hidden rounded-[28px] bg-[var(--forest)] sm:grid-cols-[1.05fr_1fr]"
          >
            <div className="relative aspect-[3/2] overflow-hidden bg-[#073b82] sm:aspect-auto sm:min-h-80">
              <Image
                src="/impact-chemical-use-farming.png"
                alt="Event poster for The Impact of Chemical Use in Farming"
                fill
                sizes="(min-width: 640px) 55vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col items-start justify-center p-7 text-left text-white sm:p-10 lg:p-14">
              <span className="rounded-full bg-white/12 px-3.5 py-1.5 text-xs font-semibold text-[#DDEBC6]">
                Completed on October 25, 2026
              </span>
              <h3 className="mt-5 text-3xl leading-[1.1] sm:text-4xl">
                The Impact of Chemical Use in Farming
              </h3>
              <p className="mt-4 max-w-sm text-[15px] leading-7 text-white/80">
                A conversation with agriculture voices about chemical use in
                farming, hosted by Agriquex Hub.
              </p>
              <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[var(--forest)] transition-transform duration-300 group-hover:translate-x-1">
                Explore the event <Arrow />
              </span>
            </div>
          </Link>
        </section>

        {/* What we do */}
        <section
          className="border-y"
          style={{ borderColor: LINE, background: "rgba(255,255,255,0.55)" }}
        >
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-10 sm:py-24">
            <SectionHead
              label="What we do"
              title="From a clear problem to a product people can use."
            />
            <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map(({ title, text }) => (
                <div
                  key={title}
                  className="border-t-2 py-6 text-left"
                  style={{ borderColor: INK }}
                >
                  <h3 className="text-xl font-semibold leading-snug">{title}</h3>
                  <p
                    className="mt-3 max-w-xs text-[15px] leading-7"
                    style={{ color: INK_SOFT }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we work (a real sequence, so numbered) */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-10 sm:py-24">
          <SectionHead
            label="How we work"
            title="A practical process, without the theatre."
          />
          <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(({ title, text }, index) => (
              <li key={title} className="relative text-left">
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: FOREST }}
                  >
                    {index + 1}
                  </span>
                  {index < STEPS.length - 1 && (
                    <span
                      aria-hidden
                      className="hidden h-px flex-1 lg:block"
                      style={{ background: LINE }}
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold leading-snug">{title}</h3>
                <p
                  className="mt-3 max-w-[16rem] text-[15px] leading-7"
                  style={{ color: INK_SOFT }}
                >
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Call to action */}
        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-10 sm:pb-24">
          <div className="overflow-hidden rounded-[28px] bg-[var(--forest)] text-white">
            <KenteBand />
            <div className="flex flex-col gap-8 px-6 py-12 text-left sm:px-12 sm:py-16 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-semibold text-[#C9E3A0]">
                  Start a conversation
                </p>
                <h2 className="text-[2rem] leading-[1.1] tracking-[-0.01em] sm:text-5xl sm:leading-[1.06]">
                  Have a project in mind? Let’s talk it through.
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[var(--forest)] transition-colors hover:bg-[#E3EDD5]"
              >
                Talk to our team <Arrow />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
