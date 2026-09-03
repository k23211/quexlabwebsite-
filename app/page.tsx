import type { Metadata } from "next";
import Link from "next/link";
import { Globe2, Smartphone, Sparkles, Sprout } from "lucide-react";
import Nav from "./components/Nav";
import DownloadButton from "./DownloadButton";
import { INK, INK_SOFT, LEAF, PAPER } from "./theme";

export const metadata: Metadata = {
  title: "Quexlab Technologies | Agriquex Hub, Apps & Farming Innovation",
  description:
    "Quexlab Technologies builds Agriquex Hub, a marketplace, community, and AI-powered farm tools app open to everyone, plus websites and culture-inspired games. Practical tools for real people, wherever they are.",
};

const FEATURES = [
  {
    Icon: Sparkles,
    label: "Culture-rooted design",
  },
  {
    Icon: Smartphone,
    label: "Apps & websites",
  },
  {
    Icon: Sprout,
    label: "Engaged in farming",
  },
  {
    Icon: Globe2,
    label: "Built for everyone",
  },
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
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
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
    <div
      className="relative flex h-[100dvh] w-screen flex-col overflow-hidden"
      style={{ background: PAPER, color: INK }}
    >
      <Nav />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center overflow-hidden px-6 text-center sm:px-10">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Quexlab
            <br />
            <span style={{ color: LEAF }}>Technologies</span>
          </h1>

          <p
            className="mt-4 max-w-sm text-sm leading-relaxed sm:mt-6 sm:max-w-md sm:text-lg"
            style={{ color: INK_SOFT }}
          >
            We build mobile apps, websites, and culture inspired games, and
            we engage in farming as well. Practical tools and real work that
            solve problems for real people, wherever they are.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
          <DownloadButton />
          <Link
            href="/work"
            className="rounded-full px-6 py-2.5 text-sm font-semibold sm:px-7 sm:py-3"
            style={{ color: INK, border: `1.5px solid ${INK}1f`, background: `${LEAF}0a` }}
          >
            See our work
          </Link>
          <Link
            href="/contact"
            className="rounded-full px-6 py-2.5 text-sm font-semibold sm:px-7 sm:py-3"
            style={{ color: INK, border: `1.5px solid ${INK}1f`, background: `${LEAF}0a` }}
          >
            Get in touch
          </Link>
        </div>

        {/* Feature strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:mt-14 sm:gap-3">
          {FEATURES.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium sm:text-sm"
              style={{
                color: INK_SOFT,
                background: `${LEAF}0d`,
                border: `1px solid ${LEAF}26`,
              }}
            >
              <Icon size={15} color={LEAF} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
