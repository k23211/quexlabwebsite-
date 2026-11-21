import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import Nav from "../../components/Nav";
import StoreBadge from "../../StoreBadge";
import { ArrowIcon, INK, PAPER } from "../../theme";

export const metadata: Metadata = {
  title: "Agriquex Hub | Quexlab Technologies",
  description: "Agriquex Hub helps people buy, sell, connect, and manage farm operations from one practical mobile app.",
  alternates: { canonical: "https://quexlabwebsite.vercel.app/work/agriquex-hub" },
};

const SCREENSHOTS = [
  ["/agriquex-screenshots/agriquex-03-dashboard.png", "Farm dashboard"],
  ["/agriquex-screenshots/agriquex-08-farm.png", "Farm management"],
  ["/agriquex-screenshots/agriquex-09-farm-tools.png", "Smart farm tools"],
  ["/agriquex-screenshots/agriquex-01-market.png", "Product hub marketplace"],
  ["/agriquex-screenshots/agriquex-12-product-detail.png", "Product details"],
  ["/agriquex-screenshots/agriquex-13-crops.png", "Crop farms directory"],
  ["/agriquex-screenshots/agriquex-10-extension-officers.png", "Extension officers"],
  ["/agriquex-screenshots/agriquex-07-community.png", "Community"],
  ["/agriquex-screenshots/agriquex-11-find-friends.png", "Find fellow farmers"],
];

const HIGHLIGHTS = [
  "One place to manage more.",
  "Built around real farm work.",
  "Open to the wider community.",
];

const FEATURES = [
  "Buy and sell farm-related products",
  "Track tasks and farm operations",
  "Connect with a farming community",
  "Get help with AI-powered tools",
];

const GREEN_TINT = "#E3EDD5";

export default function AgriquexHubPage() {
  return (
    <div style={{ background: PAPER, color: INK }}>
      <Nav />

      <div>
        <section className="shell reveal grid gap-10 pb-16 pt-10 sm:pb-24 sm:pt-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div className="text-left">
            <span className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-medium">
              Mobile app · Agriculture
            </span>
            <h1 className="mt-6 text-[2.5rem] sm:text-6xl lg:text-[4.25rem]">
              A better day on the farm{" "}
              <span className="muted-text">starts with better tools.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
              Agriquex Hub brings buying, selling, community, farm management,
              and practical AI help into one app built for agriculture and open
              to everyone.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <StoreBadge
                href="https://play.google.com/store/apps/details?id=com.agriquexdata.app"
                store="google"
              />
              <StoreBadge
                href="https://apps.apple.com/gh/app/agriquex-hub/id6799785601"
                store="apple"
              />
            </div>
          </div>

          <div className="card p-3">
            <div
              className="media relative aspect-[4/3]"
              style={{ background: GREEN_TINT }}
            >
              <Image
                src="/agriquex-hub-1.png"
                alt="Agriquex Hub app screens"
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-contain p-5 mix-blend-multiply sm:p-10"
              />
            </div>
          </div>
        </section>

        <section className="shell pb-16 sm:pb-24 lg:pb-32">
          <ul className="grid gap-5 sm:grid-cols-3">
            {HIGHLIGHTS.map((text) => (
              <li
                key={text}
                className="card p-7 text-left text-xl font-semibold tracking-[-0.02em] sm:p-8 sm:text-2xl"
              >
                {text}
              </li>
            ))}
          </ul>
        </section>

        <section className="shell grid gap-10 pb-16 sm:pb-24 lg:grid-cols-[0.7fr_1fr] lg:gap-16 lg:pb-32">
          <div className="text-left">
            <span className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-medium">
              What it does
            </span>
            <h2 className="headline mt-6 max-w-md">
              Practical <span className="muted">from the first tap.</span>
            </h2>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {FEATURES.map((item) => (
              <li
                key={item}
                className="card flex items-start gap-4 p-6 text-left text-[15px] leading-7"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-paper text-forest">
                  <Check size={18} />
                </span>
                <span className="pt-1">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="shell pb-16 sm:pb-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5 text-left sm:mb-14">
            <div>
              <span className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-medium">
                Inside the app
              </span>
              <h2 className="headline mt-6">
                See it <span className="muted">in action.</span>
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-medium transition-colors hover:border-ink"
            >
              All work <ArrowIcon size={14} direction="up-right" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
            {SCREENSHOTS.map(([src, alt], i) => (
              <div
                key={src}
                className={`media relative aspect-[2/3]${
                  i === SCREENSHOTS.length - 1 && SCREENSHOTS.length % 2 === 1
                    ? " col-span-2 mx-auto w-[calc(50%-0.375rem)] sm:col-span-1 sm:mx-0 sm:w-full"
                    : ""
                }`}
                style={{ background: GREEN_TINT }}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
