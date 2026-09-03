import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import DownloadButton from "./DownloadButton";
import { INK, INK_SOFT, LEAF, PAPER } from "./theme";

export const metadata: Metadata = {
  title: "Quexlab Technologies | Agriquex Hub, Apps & Farming Innovation",
  description:
    "Quexlab Technologies builds Agriquex Hub, a marketplace, community, and AI-powered farm tools app open to everyone, plus websites and culture-inspired games. Practical tools for real people, wherever they are.",
};

const FEATURES = [
  { label: "Culture-rooted design" },
  { label: "Apps and websites" },
  { label: "Engaged in farming" },
  { label: "Built for everyone" },
];

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
      <div style={{ background: PAPER, color: INK }}>
        <Nav />

        {/* Hero */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-16 pt-12 sm:px-10 sm:pt-16 lg:grid-cols-2 lg:items-center lg:gap-8 lg:pb-24">
          <div>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Building technology.
              <br />
              Growing <span style={{ color: LEAF }}>impact</span>.
            </h1>

            <p
              className="mt-5 max-w-md text-base leading-relaxed sm:text-lg"
              style={{ color: INK_SOFT }}
            >
              We build mobile apps, websites, and culture inspired games, and
              we engage in farming as well. Practical tools and real work
              that solve problems for real people, wherever they are.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <DownloadButton />
              <Link
                href="/work"
                className="text-sm font-semibold"
                style={{ color: INK }}
              >
                See our work →
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold"
                style={{ color: INK }}
              >
                Get in touch →
              </Link>
            </div>
          </div>

          {/* Hexagon-cropped photo, echoing the logomark shape */}
          <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
            <div
              className="relative h-full w-full overflow-hidden"
              style={{
                clipPath:
                  "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
              }}
            >
              <Image
                src="/hero-seedling.png"
                alt="A seedling emerging from soil, backlit by early morning light"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, (min-width: 768px) 28rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Feature strip — plain text, no icon kit */}
        <section className="border-y" style={{ borderColor: "#E4E2DA" }}>
          <div
            className="mx-auto grid max-w-6xl grid-cols-2 px-6 py-8 sm:px-10 lg:grid-cols-4"
            style={{ color: INK_SOFT }}
          >
            {FEATURES.map(({ label }, i) => (
              <div
                key={label}
                className="py-3 text-sm font-medium lg:border-l lg:py-0 lg:pl-6"
                style={{ borderColor: i === 0 ? "transparent" : "#E4E2DA" }}
              >
                {label}
              </div>
            ))}
          </div>
        </section>

        {/* What we've built — pulls real product screenshots, not stock tiles */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
          <div className="mb-10 max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Two products, live and in people&rsquo;s hands.
            </h2>
            <p className="mt-3 text-base leading-relaxed" style={{ color: INK_SOFT }}>
              From idea to launch, we build things people actually use.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Link
              href="/work"
              className="group block overflow-hidden rounded-2xl border"
              style={{ borderColor: "#E4E2DA" }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden" style={{ background: `${LEAF}0d` }}>
                <Image
                  src="/agriquex-hub-1.png"
                  alt="Agriquex Hub app screens"
                  fill
                  priority
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium" style={{ color: INK_SOFT }}>
                  Mobile app
                </p>
                <h3 className="mt-1 text-lg font-bold">Agriquex Hub</h3>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: INK_SOFT }}>
                  Buy, sell, and manage farm tools with help from AI. Built
                  for agriculture and open to everyone.
                </p>
              </div>
            </Link>

            <Link
              href="/work"
              className="group block overflow-hidden rounded-2xl border"
              style={{ borderColor: "#E4E2DA" }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden" style={{ background: "#0F0B1E" }}>
                <Image
                  src="/adinkra-match-1.png"
                  alt="Adinkra Match game screens"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium" style={{ color: INK_SOFT }}>
                  Mobile game
                </p>
                <h3 className="mt-1 text-lg font-bold">Adinkra Match</h3>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: INK_SOFT }}>
                  A match-3 puzzle built around Adinkra symbols and kente
                  patterns. A playful way to explore Akan visual culture.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
