import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import DownloadButton from "./DownloadButton";
import { FOREST, INK, INK_SOFT, LEAF, PAPER } from "./theme";

export const metadata: Metadata = {
  title: "Quexlab Technologies | Innovation for a Smarter Tomorrow",
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
      <div className="min-h-screen" style={{ background: PAPER, color: INK }}>
        <Nav />

        <section className="reveal mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20 lg:pb-28">
          <div className="max-w-xl">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] sm:mb-6 sm:text-xs sm:tracking-[0.22em]" style={{ color: FOREST }}>
              Software studio · Kumasi, Ghana
            </p>
            <h1 className="max-w-lg text-[3.35rem] leading-[0.94] sm:text-6xl lg:text-[5.2rem]">
              Innovation for a <em style={{ color: FOREST }}>smarter tomorrow.</em>
            </h1>

            <p
              className="mt-6 max-w-md text-[15px] leading-7 sm:mt-7 sm:text-lg"
              style={{ color: INK_SOFT }}
            >
              Quexlab builds mobile products, websites, and games rooted in
              Ghanaian life. We care about the unglamorous details that make
              technology useful after the launch day.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 sm:mt-9">
              <DownloadButton />
              <Link
                href="/work"
                className="text-sm font-bold underline decoration-1 underline-offset-4 transition-colors hover:text-[var(--forest)]"
                style={{ color: INK }}
              >
                Explore the work <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-[1.12/1] w-full max-w-2xl overflow-hidden lg:max-w-none">
            <div
              className="relative h-full w-full overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 88%, 94% 100%, 0 100%)",
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
            <div className="absolute bottom-0 left-0 bg-[var(--forest)] px-3 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.16em]">
              Innovation for a smarter tomorrow
            </div>
          </div>
        </section>

        <section className="border-y" style={{ borderColor: "#E4E2DA" }}>
          <div
            className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-4 sm:px-10 sm:py-6 lg:grid-cols-4"
            style={{ color: INK_SOFT }}
          >
            {FEATURES.map(({ label }, i) => (
              <div
                key={label}
                className="border-l py-2 pl-3 text-[10px] font-bold uppercase leading-5 tracking-[0.08em] sm:py-3 sm:pl-4 sm:text-xs sm:tracking-[0.12em] lg:pl-6"
                style={{ borderColor: i === 0 ? "transparent" : "#E4E2DA" }}
              >
                {label}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-10 sm:py-28">
          <div className="mb-12 grid gap-5 lg:grid-cols-[0.65fr_1fr] lg:items-end">
            <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: LEAF }}>
              Selected work
            </p>
            <h2 className="max-w-2xl text-4xl leading-[0.98] sm:text-5xl">
              Products that earn their place in people&rsquo;s lives.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Link
              href="/work/agriquex-hub"
              className="group block overflow-hidden border-b pb-7"
              style={{ borderColor: "#E4E2DA" }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden" style={{ background: PAPER }}>
                <Image
                  src="/agriquex-hub-1.png"
                  alt="Agriquex Hub app screens"
                  fill
                  priority
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: LEAF }}>
                  Mobile app
                </p>
                <h3 className="mt-2 text-2xl">Agriquex Hub</h3>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: INK_SOFT }}>
                  Buy, sell, and manage farm tools with help from AI. Built
                  for agriculture and open to everyone.
                </p>
              </div>
            </Link>

            <Link
              href="/work/adinkra-match"
              className="group block overflow-hidden border-b pb-7"
              style={{ borderColor: "#E4E2DA" }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden" style={{ background: PAPER }}>
                <Image
                  src="/adinkra-match-1.png"
                  alt="Adinkra Match game screens"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-contain p-4 mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: LEAF }}>
                  Mobile game
                </p>
                <h3 className="mt-2 text-2xl">Adinkra Match</h3>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: INK_SOFT }}>
                  A match-3 puzzle built around Adinkra symbols and kente
                  patterns. A playful way to explore Akan visual culture.
                </p>
              </div>
            </Link>
          </div>
        </section>

        <section className="border-y" style={{ borderColor: "#D8D8CC" }}>
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-10 sm:py-24 lg:grid-cols-[0.7fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: FOREST }}>What we do</p>
              <h2 className="mt-4 max-w-md text-4xl leading-none sm:text-5xl">From a clear problem to a product people can use.</h2>
            </div>
            <div className="grid gap-0 sm:grid-cols-2">
              {["Mobile apps", "Websites and platforms", "Product design", "Agriculture technology"].map((item, index) => (
                <div key={item} className="border-t py-5" style={{ borderColor: "#D8D8CC" }}>
                  <p className="text-xs font-bold" style={{ color: LEAF }}>0{index + 1}</p>
                  <p className="mt-3 text-lg font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-10 sm:py-24 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: LEAF }}>How we work</p>
            <h2 className="mt-4 max-w-md text-4xl leading-none sm:text-5xl">A practical process, without the theatre.</h2>
          </div>
          <div className="grid gap-0 sm:grid-cols-2">
            {["Understand the problem", "Design the right shape", "Build and test in the open", "Launch, learn, improve"].map((item, index) => (
              <div key={item} className="border-t py-5" style={{ borderColor: "#D8D8CC" }}>
                <p className="text-xs font-bold" style={{ color: LEAF }}>0{index + 1}</p>
                <p className="mt-3 text-lg font-semibold">{item}</p>
                <p className="mt-2 max-w-xs text-sm leading-6" style={{ color: INK_SOFT }}>{["Start with the people, context, and outcome.", "Make the experience clear before making it big.", "Keep feedback close to the work.", "Treat launch as the beginning, not the finish." ][index]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[var(--forest)] text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-14 sm:px-10 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
            <div><p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#B8D48B" }}>Start a conversation</p><h2 className="mt-4 max-w-2xl text-4xl leading-none sm:text-5xl">Have a useful idea? Let&rsquo;s give it a shape.</h2></div>
            <Link href="/contact" className="inline-flex w-fit items-center gap-2 border border-white/40 px-5 py-3 text-sm font-bold transition-colors hover:bg-white hover:text-[var(--forest)]">Tell us about it <span aria-hidden>↗</span></Link>
          </div>
        </section>
      </div>
    </>
  );
}
