import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Globe, PencilRuler, Smartphone, Sprout } from "lucide-react";
import Nav from "./components/Nav";
import { ArrowIcon, FOREST, INK, INK_SOFT, LEAF, PAPER } from "./theme";

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
    icon: Smartphone,
  },
  {
    title: "Websites and platforms",
    text: "Clear, quick sites and web platforms that people can find and trust.",
    icon: Globe,
  },
  {
    title: "Product design",
    text: "Interfaces shaped around how your users actually work and decide.",
    icon: PencilRuler,
  },
  {
    title: "Agriculture technology",
    text: "Tools for farmers, buyers, and communities across the food chain.",
    icon: Sprout,
    featured: true,
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

/** One header pattern for every section: pill label, then a headline whose second half fades to gray. */
function SectionHead({
  label,
  title,
  muted,
  light = false,
}: {
  label: string;
  title: string;
  muted?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-10 max-w-3xl text-left sm:mb-14">
      <span
        className={`inline-flex rounded-full border px-4 py-2 text-sm font-medium ${
          light ? "border-white/25 text-white" : "border-line bg-white"
        }`}
      >
        {label}
      </span>
      <h2
        className="headline mt-6"
        style={light ? { color: "#fff" } : undefined}
      >
        {title}
        {muted ? (
          <>
            {" "}
            <span className="muted">{muted}</span>
          </>
        ) : null}
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
        {/* Hero */}
        <section className="shell reveal pt-4 sm:pt-5">
          <div className="relative isolate overflow-hidden rounded-[28px]">
            <Image
              src="/hero-seedling.png"
              alt="A seedling emerging from soil, backlit by early morning light"
              fill
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="-z-10 object-cover object-center"
            />
            <div aria-hidden className="hero-overlay absolute inset-0 -z-10" />

            <Nav variant="overlay" />

            <div className="flex min-h-[640px] flex-col justify-end px-5 pb-8 pt-32 sm:min-h-[740px] sm:px-10 sm:pb-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl text-left">
                  <h1 className="display text-white">
                    Software that works for real life.
                  </h1>
                  <p className="mt-6 max-w-md text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                    We design and build mobile apps, websites, and digital
                    products for the way people live and work in Ghana and
                    beyond.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link href="/work" className="btn btn-light">
                      Explore our work
                      <span className="btn-icon">
                        <ArrowIcon />
                      </span>
                    </Link>
                    <Link
                      href="/contact"
                      className="btn bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25"
                    >
                      Talk to our team
                    </Link>
                  </div>
                </div>

                <Link
                  href="/work"
                  className="glass block w-full max-w-xs p-5 text-left transition-colors hover:bg-white/20"
                >
                  <p className="text-sm font-semibold">
                    Technology, grounded in Ghana
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-white/75">
                    Agriquex Hub and Adinkra Match, built in Kumasi.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                    See our work <ArrowIcon size={14} direction="up-right" />
                  </span>
                </Link>
              </div>

              <div className="mt-10 flex items-center justify-between gap-4 border-t border-white/20 pt-4 text-sm text-white/80">
                <span>Independent software studio in Kumasi, Ghana</span>
                <span className="hidden sm:block">Scroll for more</span>
              </div>
            </div>

            <KenteBand className="absolute inset-x-0 bottom-0" />
          </div>
        </section>

        {/* About and stats */}
        <section className="shell section">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div className="text-left">
              <span className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-medium">
                About us
              </span>
              <ul className="mt-8 grid gap-3">
                {FEATURES.map((label) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 text-[15px] font-medium"
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
            </div>

            <div className="text-left">
              <p className="headline max-w-3xl">
                We are an independent software studio in Kumasi, building
                mobile apps, websites, and farm tools{" "}
                <span className="muted">
                  shaped by the people who use them, in Ghana and beyond.
                </span>
              </p>

              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8 sm:mt-16">
                <div className="flex flex-col-reverse justify-end">
                  <dt className="stat-label">Apps on Google Play</dt>
                  <dd className="stat-value">2</dd>
                </div>
                <div className="flex flex-col-reverse justify-end">
                  <dt className="stat-label">Client website</dt>
                  <dd className="stat-value">1</dd>
                </div>
                <div className="flex flex-col-reverse justify-end">
                  <dt className="stat-label">Event hosted</dt>
                  <dd className="stat-value">1</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Selected work */}
        <section className="shell section">
          <SectionHead
            label="Selected work"
            title="Products that earn their place"
            muted="in people’s lives."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Link href="/work/agriquex-hub" className="group card block p-3">
              <div
                className="media relative aspect-[4/3] w-full"
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
              <div className="flex items-start justify-between gap-4 px-3 pb-3 pt-6 text-left">
                <div>
                  <span className="inline-flex rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-soft">
                    Mobile app
                  </span>
                  <h3 className="mt-3 text-2xl sm:text-[1.7rem]">
                    Agriquex Hub
                  </h3>
                  <p className="mt-2 max-w-md text-[15px] leading-7 text-ink-soft">
                    Buy, sell, and manage farm tools with help from AI. Built
                    for agriculture and open to everyone.
                  </p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-white transition-colors group-hover:border-leaf group-hover:bg-leaf group-hover:text-white">
                  <ArrowIcon direction="up-right" />
                </span>
              </div>
            </Link>

            <Link href="/work/adinkra-match" className="group card block p-3">
              <div
                className="media relative aspect-[4/3] w-full"
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
              <div className="flex items-start justify-between gap-4 px-3 pb-3 pt-6 text-left">
                <div>
                  <span className="inline-flex rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-soft">
                    Mobile game
                  </span>
                  <h3 className="mt-3 text-2xl sm:text-[1.7rem]">
                    Adinkra Match
                  </h3>
                  <p className="mt-2 max-w-md text-[15px] leading-7 text-ink-soft">
                    A match-3 puzzle built around Adinkra symbols and kente
                    patterns. A playful way to explore Akan visual culture.
                  </p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-white transition-colors group-hover:border-leaf group-hover:bg-leaf group-hover:text-white">
                  <ArrowIcon direction="up-right" />
                </span>
              </div>
            </Link>

            <a
              href="https://www.chardagrocorporatives.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group card grid p-3 sm:col-span-2 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-10"
            >
              <div className="media relative aspect-[3/2] w-full">
                <Image
                  src="/chard-agro-poster.png"
                  alt="Chard Agro Cooperatives: modern farming with healthy poultry and quality goats"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="px-3 pb-3 pt-6 text-left lg:p-6">
                <span className="inline-flex rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-soft">
                  Client website
                </span>
                <h3 className="mt-4 text-2xl sm:text-[1.7rem]">
                  Chard Agro Cooperatives
                </h3>
                <p className="mt-2 max-w-md text-[15px] leading-7 text-ink-soft">
                  A website for a Ghanaian agribusiness that raises poultry,
                  turkey, and goats, keeps its meat in cold storage, and sells
                  directly to customers.
                </p>
                <span className="mt-6 inline-flex items-center gap-3 text-sm font-medium">
                  Visit the website
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white transition-colors group-hover:border-leaf group-hover:bg-leaf group-hover:text-white">
                    <ArrowIcon direction="up-right" />
                  </span>
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* Past events */}
        <section className="shell pb-16 sm:pb-24 lg:pb-32">
          <SectionHead
            label="Past events"
            title="Good conversations make room"
            muted="for better ideas."
          />

          <Link
            href="/events"
            className="group card-accent grid p-3 sm:grid-cols-[1.05fr_1fr] sm:items-center"
          >
            <div className="media relative aspect-[3/2] bg-[#073b82] sm:aspect-auto sm:min-h-80 sm:self-stretch">
              <Image
                src="/impact-chemical-use-farming.png"
                alt="Event poster for The Impact of Chemical Use in Farming"
                fill
                sizes="(min-width: 640px) 55vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col items-start justify-center px-4 pb-5 pt-7 text-left sm:p-10 lg:p-14">
              <span className="rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-medium text-white">
                Completed on October 25, 2026
              </span>
              <h3 className="mt-5 text-3xl leading-[1.1] sm:text-4xl">
                The Impact of Chemical Use in Farming
              </h3>
              <p className="mt-4 max-w-sm text-[15px] leading-7 text-white/75">
                A conversation with agriculture voices about chemical use in
                farming, hosted by Agriquex Hub.
              </p>
              <span className="btn btn-light mt-8">
                Explore the event
                <span className="btn-icon">
                  <ArrowIcon />
                </span>
              </span>
            </div>
          </Link>
        </section>

        {/* What we do */}
        <section className="shell pb-16 sm:pb-24 lg:pb-32">
          <SectionHead
            label="What we do"
            title="From a clear problem"
            muted="to a product people can use."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {SERVICES.map(({ title, text, icon: Icon, featured }) => (
              <div
                key={title}
                className={`${featured ? "card-accent" : "card"} p-7 text-left sm:p-8`}
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-full ${
                    featured ? "bg-white/15 text-white" : "bg-paper text-forest"
                  }`}
                >
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="mt-10 text-2xl">{title}</h3>
                <p
                  className={`mt-3 max-w-sm text-[15px] leading-7 ${
                    featured ? "text-white/75" : "text-ink-soft"
                  }`}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How we work (a real sequence, so numbered) */}
        <section className="shell pb-16 sm:pb-24 lg:pb-32">
          <SectionHead
            label="How we work"
            title="A practical process,"
            muted="without the theatre."
          />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(({ title, text }, index) => (
              <li key={title} className="card p-6 text-left sm:p-7">
                <span
                  className="grid h-10 w-10 place-items-center rounded-full text-sm font-semibold text-white"
                  style={{ background: FOREST }}
                >
                  {index + 1}
                </span>
                <h3 className="mt-10 text-xl leading-snug">{title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-ink-soft">
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Call to action */}
        <section className="shell pb-16 sm:pb-24">
          <div className="card-accent flex flex-col gap-10 p-8 text-left sm:p-14 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white">
                Start a conversation
              </span>
              <h2 className="headline mt-6 text-white">
                Have a project in mind?{" "}
                <span className="text-white/55">Let’s talk it through.</span>
              </h2>
            </div>
            <Link href="/contact" className="btn btn-light w-fit shrink-0">
              Talk to our team
              <span className="btn-icon">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
