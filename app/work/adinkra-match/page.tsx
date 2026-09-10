import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Nav from "../../components/Nav";
import StoreBadge from "../../StoreBadge";
import { FOREST, INK, INK_SOFT, LEAF, PAPER } from "../../theme";

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

export default function AdinkraMatchPage() {
  return (
    <div style={{ background: PAPER, color: INK }}>
      <Nav />
      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-14 sm:px-10 sm:pb-24 sm:pt-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: LEAF }}>Mobile game · Akan culture</p>
            <h1 className="mt-5 text-5xl leading-[0.94] sm:text-7xl">A playful way to meet the symbols that carry meaning.</h1>
            <p className="mt-7 max-w-lg text-base leading-7 sm:text-lg" style={{ color: INK_SOFT }}>Adinkra Match is a match-3 puzzle game built around Adinkra symbols, kente patterns, and a set of game modes designed for curious players.</p>
            <div className="mt-8 flex flex-wrap gap-3"><StoreBadge href="https://play.google.com/store/apps/details?id=com.adinkramatchgh.game" store="google" /></div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden" style={{ background: PAPER }}><Image src="/adinkra-match-1.png" alt="Adinkra Match game screens" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-contain p-5 mix-blend-multiply sm:p-10" /></div>
        </section>
        <section className="border-y" style={{ borderColor: "#D8D8CC" }}><div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-3 sm:px-10"><div><p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: LEAF }}>01</p><p className="mt-3 text-lg font-semibold">Easy to pick up.</p></div><div><p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: LEAF }}>02</p><p className="mt-3 text-lg font-semibold">Rich with cultural detail.</p></div><div><p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: LEAF }}>03</p><p className="mt-3 text-lg font-semibold">More than one way to play.</p></div></div></section>
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-10 sm:py-24 lg:grid-cols-[0.7fr_1fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: FOREST }}>The experience</p><h2 className="mt-4 text-4xl leading-none sm:text-5xl">Culture with room to play.</h2></div><div className="grid gap-4 sm:grid-cols-2">{["Match symbols and learn their names", "Explore multiple game modes", "Collect cards and climb the ranks", "Discover patterns inspired by kente"].map((item) => <p key={item} className="flex gap-3 border-t pt-4 text-sm leading-6" style={{ borderColor: "#D8D8CC" }}><Check size={18} style={{ color: LEAF }} />{item}</p>)}</div></section>
        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-10 sm:pb-24"><div className="mb-8 flex items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: FOREST }}>Inside the game</p><h2 className="mt-3 text-4xl leading-none sm:text-5xl">A world of symbols.</h2></div><Link href="/work" className="text-sm font-bold underline" style={{ color: FOREST }}>All work <ArrowUpRight size={15} className="inline" /></Link></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{SCREENSHOTS.map(([src, alt]) => <div key={src} className="relative aspect-[0.62] overflow-hidden" style={{ background: "#0F0B1E" }}><Image src={src} alt={alt} fill sizes="(min-width: 640px) 25vw, 50vw" className="object-cover" /></div>)}</div></section>
      </main>
    </div>
  );
}
