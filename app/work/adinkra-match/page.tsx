import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import Nav from "../../components/Nav";
import StoreBadge from "../../StoreBadge";
import { ArrowIcon, INK, PAPER } from "../../theme";

export const metadata: Metadata = {
  title: "Adinkra Match | Quexlab Technologies",
  description: "Adinkra Match is a match-3 puzzle game inspired by Adinkra symbols and kente patterns.",
  alternates: { canonical: "https://quexlabwebsite.vercel.app/work/adinkra-match" },
};

const SCREENSHOTS = [
  ["/adinkramatch-screenshots/adinkra-01-battle.jpg", "Battle mode"],
  ["/adinkramatch-screenshots/adinkra-02-playmenu.jpg", "Game modes"],
  ["/adinkramatch-screenshots/adinkra-03-maze.jpg", "Maze quest"],
  ["/adinkramatch-screenshots/adinkra-06-ranks.jpg", "Hall of champions"],
];

const HIGHLIGHTS = [
  "Easy to pick up.",
  "Rich with cultural detail.",
  "More than one way to play.",
];

const EXPERIENCE = [
  "Match symbols and learn their names",
  "Explore multiple game modes",
  "Collect cards and climb the ranks",
  "Discover patterns inspired by kente",
];

export default function AdinkraMatchPage() {
  return (
    <div style={{ background: PAPER, color: INK }}>
      <Nav />

      <div>
        <section className="shell reveal grid gap-10 pb-16 pt-10 sm:pb-24 sm:pt-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div className="text-left">
            <span className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-medium">
              Mobile game · Akan culture
            </span>
            <h1 className="mt-6 text-[2.5rem] sm:text-6xl lg:text-[4.25rem]">
              A playful way to meet{" "}
              <span className="muted-text">the symbols that carry meaning.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
              Adinkra Match is a match-3 puzzle game built around Adinkra
              symbols, kente patterns, and a set of game modes designed for
              curious players.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <StoreBadge
                href="https://play.google.com/store/apps/details?id=com.adinkramatchgh.game"
                store="google"
              />
            </div>
          </div>

          <div className="card p-3">
            <div
              className="media relative aspect-[4/3]"
              style={{ background: "#F2E4C4" }}
            >
              <Image
                src="/adinkra-match-1.png"
                alt="Adinkra Match game screens"
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
              The experience
            </span>
            <h2 className="headline mt-6 max-w-md">
              Culture with <span className="muted">room to play.</span>
            </h2>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {EXPERIENCE.map((item) => (
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
                Inside the game
              </span>
              <h2 className="headline mt-6">
                A world <span className="muted">of symbols.</span>
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-medium transition-colors hover:border-ink"
            >
              All work <ArrowIcon size={14} direction="up-right" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
            {SCREENSHOTS.map(([src, alt]) => (
              <div
                key={src}
                className="media relative aspect-[0.62]"
                style={{ background: "#0F0B1E" }}
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
