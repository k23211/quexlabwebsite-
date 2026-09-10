import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Nav from "../../components/Nav";
import StoreBadge from "../../StoreBadge";
import { FOREST, INK, INK_SOFT, LEAF, PAPER } from "../../theme";

export const metadata: Metadata = {
  title: "Agriquex Hub | Quexlab Technologies",
  description: "Agriquex Hub helps people buy, sell, connect, and manage farm operations from one practical mobile app.",
  alternates: { canonical: "https://quexlabwebsite.vercel.app/work/agriquex-hub" },
};

const SCREENSHOTS = [
  ["/agriquex-screenshots/agriquex-01-market.png", "Marketplace"],
  ["/agriquex-screenshots/agriquex-03-dashboard.png", "Farm dashboard"],
  ["/agriquex-screenshots/agriquex-05-poultry.png", "Poultry management"],
  ["/agriquex-screenshots/agriquex-07-community.png", "Community"],
];

export default function AgriquexHubPage() {
  return (
    <div style={{ background: PAPER, color: INK }}>
      <Nav />
      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-14 sm:px-10 sm:pb-24 sm:pt-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: LEAF }}>Mobile app · Agriculture</p>
            <h1 className="mt-5 text-5xl leading-[0.94] sm:text-7xl">A better day on the farm starts with better tools.</h1>
            <p className="mt-7 max-w-lg text-base leading-7 sm:text-lg" style={{ color: INK_SOFT }}>Agriquex Hub brings buying, selling, community, farm management, and practical AI help into one app built for agriculture and open to everyone.</p>
            <div className="mt-8 flex flex-wrap gap-3"><StoreBadge href="https://play.google.com/store/apps/details?id=com.agriquexdata.app" store="google" /><StoreBadge href="https://apps.apple.com/gh/app/agriquex-hub/id6799785601" store="apple" /></div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden" style={{ background: `${LEAF}18` }}><Image src="/agriquex-hub-1.png" alt="Agriquex Hub app screens" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-contain p-5 sm:p-10" /></div>
        </section>
        <section className="border-y" style={{ borderColor: "#D8D8CC" }}><div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-3 sm:px-10"><div><p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: LEAF }}>01</p><p className="mt-3 text-lg font-semibold">One place to manage more.</p></div><div><p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: LEAF }}>02</p><p className="mt-3 text-lg font-semibold">Built around real farm work.</p></div><div><p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: LEAF }}>03</p><p className="mt-3 text-lg font-semibold">Open to the wider community.</p></div></div></section>
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-10 sm:py-24 lg:grid-cols-[0.7fr_1fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: FOREST }}>What it does</p><h2 className="mt-4 text-4xl leading-none sm:text-5xl">Practical from the first tap.</h2></div><div className="grid gap-4 sm:grid-cols-2">{["Buy and sell farm-related products", "Track tasks and farm operations", "Connect with a farming community", "Get help with AI-powered tools"].map((item) => <p key={item} className="flex gap-3 border-t pt-4 text-sm leading-6" style={{ borderColor: "#D8D8CC" }}><Check size={18} style={{ color: LEAF }} />{item}</p>)}</div></section>
        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-10 sm:pb-24"><div className="mb-8 flex items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: FOREST }}>Inside the app</p><h2 className="mt-3 text-4xl leading-none sm:text-5xl">See it in action.</h2></div><Link href="/work" className="text-sm font-bold underline" style={{ color: FOREST }}>All work <ArrowUpRight size={15} className="inline" /></Link></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{SCREENSHOTS.map(([src, alt]) => <div key={src} className="relative aspect-[0.62] overflow-hidden" style={{ background: `${LEAF}12` }}><Image src={src} alt={alt} fill sizes="(min-width: 640px) 25vw, 50vw" className="object-cover" /></div>)}</div></section>
      </main>
    </div>
  );
}
