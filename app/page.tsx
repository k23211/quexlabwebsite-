"use client";

import { useState } from "react";

const INK = "#0B1220";
const FOREST = "#0F3D2E";
const LEAF = "#2FA84F";
const PAPER = "#F7F8F5";
const INK_SOFT = "#5B6472";

const NAV = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  { key: "work", label: "Work" },
  { key: "contact", label: "Contact" },
] as const;

type Tab = (typeof NAV)[number]["key"];

export default function Home() {
  const [active, setActive] = useState<Tab>("home");

  return (
    <div
      className="flex h-[100dvh] w-screen flex-col overflow-hidden"
      style={{ background: PAPER, color: INK }}
    >
      {/* NAV */}
      <nav
        className="flex shrink-0 items-center justify-between px-5 py-4 sm:px-10"
        style={{ borderBottom: "1px solid #E4E2DA" }}
      >
        <div className="flex items-center gap-2">
          <LogoMark size={26} />
          <span className="text-sm font-bold tracking-tight">
            Quex<span style={{ color: LEAF }}>lab</span>
          </span>
        </div>
        <div className="flex gap-1 sm:gap-2">
          {NAV.map((item) => (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className="rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm"
              style={
                active === item.key
                  ? { background: INK, color: PAPER }
                  : { color: INK_SOFT }
              }
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* CONTENT */}
      <div className="flex-1 overflow-hidden px-6 sm:px-10">
        {active === "home" && <HomePanel onExplore={() => setActive("work")} />}
        {active === "about" && <AboutPanel />}
        {active === "work" && <WorkPanel />}
        {active === "contact" && <ContactPanel />}
      </div>
    </div>
  );
}

function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path d="M50 6 L88 28 L88 72 L50 94 L12 72 L12 28 Z" stroke={INK} strokeWidth="7" />
      <path d="M50 28 L68 39 L68 61 L50 72 L32 61 L32 39 Z" fill={PAPER} />
      <path
        d="M46 58 C58 54 68 60 74 72 C64 70 56 74 52 82 C50 74 48 66 46 58 Z"
        fill={LEAF}
      />
      <circle cx="86" cy="14" r="3" stroke={LEAF} strokeWidth="2.5" fill={PAPER} />
      <path d="M86 17 L70 33" stroke={LEAF} strokeWidth="2.5" />
      <circle cx="70" cy="33" r="3" fill={LEAF} />
    </svg>
  );
}

function HomePanel({ onExplore }: { onExplore: () => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <p className="text-xs uppercase tracking-[0.3em]" style={{ color: LEAF }}>
        Accra, Ghana
      </p>
      <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
        Quexlab
        <br />
        <span style={{ color: LEAF }}>Technologies</span>
      </h1>
      <p
        className="mt-4 max-w-sm text-sm sm:mt-6 sm:max-w-md sm:text-lg"
        style={{ color: INK_SOFT }}
      >
        Software and digital products, designed and built for Ghana.
      </p>
      <button
        onClick={onExplore}
        className="mt-6 rounded-full px-6 py-2.5 text-sm font-semibold text-white sm:mt-8 sm:px-7 sm:py-3"
        style={{ background: INK }}
      >
        See our work
      </button>
    </div>
  );
}

function AboutPanel() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="max-w-xl">
        <p className="text-xs uppercase tracking-[0.3em]" style={{ color: LEAF }}>
          Sankofa — go back and fetch it
        </p>
        <h2 className="mt-3 text-2xl font-bold sm:text-3xl">About the studio</h2>
        <p
          className="mt-4 text-sm leading-relaxed sm:text-base sm:leading-8"
          style={{ color: INK_SOFT }}
        >
          Quexlab Technologies is a small software studio building mobile apps
          and digital services rooted in Ghanaian life and culture. We build
          tools people actually use — from agricultural data platforms to
          games that carry Akan symbolism into something fresh and playable.
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.3em]" style={{ color: FOREST }}>
          Nkyinkyim — versatility, adaptability
        </p>
      </div>
    </div>
  );
}

function WorkPanel() {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="mx-auto grid w-full max-w-3xl gap-4 sm:grid-cols-2 sm:gap-6">
        <div
          className="rounded-2xl p-5 sm:p-7"
          style={{ background: INK, border: `1px solid ${LEAF}33` }}
        >
          <h3 className="text-lg font-semibold text-white sm:text-xl">
            AdinkraMatch3
          </h3>
          <p className="mt-2 text-xs leading-relaxed sm:text-sm" style={{ color: "#B7C0CC" }}>
            A match-3 puzzle game built around Adinkra symbols and kente
            patterns — a playful way to explore Akan visual culture.
          </p>
          <span className="mt-3 block text-xs font-medium" style={{ color: LEAF }}>
            Mobile game · Play Store
          </span>
        </div>

        <div
          className="rounded-2xl p-5 sm:p-7"
          style={{ background: INK, border: `1px solid ${LEAF}33` }}
        >
          <h3 className="text-lg font-semibold text-white sm:text-xl">
            Agriquex Hub
          </h3>
          <p className="mt-2 text-xs leading-relaxed sm:text-sm" style={{ color: "#B7C0CC" }}>
            A platform helping Ghanaian farmers track and manage agricultural
            data, built for real conditions on the ground.
          </p>
          <span className="mt-3 block text-xs font-medium" style={{ color: "#9CC5A1" }}>
            Mobile app
          </span>
        </div>
      </div>
    </div>
  );
}

function ContactPanel() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-bold sm:text-3xl">Let&apos;s work together</h2>
      <p className="mt-3 max-w-sm text-sm sm:text-lg" style={{ color: INK_SOFT }}>
        Have a project in mind, or want to know more about what we do?
      </p>
      <a
        href="mailto:agyapongalbert01@gmail.com"
        className="mt-6 inline-block rounded-full px-6 py-2.5 text-sm sm:px-8 sm:py-3"
        style={{ border: `1.5px solid ${INK}`, color: INK }}
      >
        agyapongalbert01@gmail.com
      </a>
      <p className="mt-10 text-xs" style={{ color: "#A3ABB5" }}>
        © {new Date().getFullYear()} Quexlab Technologies. Accra, Ghana.
      </p>
    </div>
  );
}
