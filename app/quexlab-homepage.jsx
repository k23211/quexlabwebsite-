import React from "react";

const ink = "#0B1220";
const forest = "#0F3D2E";
const leaf = "#2FA84F";
const leafLight = "#7ED957";
const paper = "#F7F8F5";
const inkSoft = "#4B5563";

function LogoMark({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path
        d="M50 6 L88 28 L88 72 L50 94 L12 72 L12 28 Z"
        stroke={ink}
        strokeWidth="7"
        fill="none"
      />
      <path
        d="M50 28 L68 39 L68 61 L50 72 L32 61 L32 39 Z"
        fill={paper}
      />
      <path
        d="M46 58 C58 54 68 60 74 72 C64 70 56 74 52 82 C50 74 48 66 46 58 Z"
        fill={leaf}
      />
      <circle cx="86" cy="14" r="3" stroke={leaf} strokeWidth="2.5" fill={paper} />
      <path d="M86 17 L70 33" stroke={leaf} strokeWidth="2.5" />
      <circle cx="70" cy="33" r="3" fill={leaf} />
    </svg>
  );
}

function AdinkraNote({ symbol, name, meaning }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-semibold"
        style={{ background: forest, color: leafLight }}
      >
        {symbol}
      </div>
      <div>
        <p className="font-mono text-xs tracking-wide" style={{ color: leaf }}>
          {name}
        </p>
        <p className="text-sm" style={{ color: inkSoft }}>
          {meaning}
        </p>
      </div>
    </div>
  );
}

function ProductCard({ eyebrow, title, desc, accent }) {
  return (
    <div
      className="rounded-2xl p-7 transition-transform hover:-translate-y-1"
      style={{ background: ink, border: `1px solid ${accent}33` }}
    >
      <p className="font-mono text-xs tracking-widest" style={{ color: accent }}>
        {eyebrow}
      </p>
      <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: "#B7C0CC" }}>
        {desc}
      </p>
    </div>
  );
}

export default function QuexlabHomepage() {
  return (
    <div style={{ background: paper, color: ink }} className="min-h-screen font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .display { font-family: 'Space Grotesk', sans-serif; }
        .body-font { font-family: 'Inter', sans-serif; }
        .mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      {/* Header */}
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <LogoMark />
          <div>
            <p className="display text-base font-bold leading-none">
              Quex<span style={{ color: leaf }}>lab</span>
            </p>
            <p className="mono text-[10px] tracking-widest" style={{ color: inkSoft }}>
              TECHNOLOGIES
            </p>
          </div>
        </div>
        <nav className="body-font hidden gap-8 text-sm font-medium sm:flex">
          <a href="#about" style={{ color: inkSoft }}>About</a>
          <a href="#work" style={{ color: inkSoft }}>Work</a>
          <a href="#contact" style={{ color: inkSoft }}>Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-5xl px-6 pb-20 pt-10 sm:pt-16">
        <svg
          className="pointer-events-none absolute -left-2 top-0 hidden h-full w-24 sm:block"
          viewBox="0 0 100 500"
          fill="none"
        >
          <path
            d="M50 0 L50 300 L20 340 L20 420"
            stroke={leaf}
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <circle cx="50" cy="0" r="4" fill={leaf} />
          <circle cx="50" cy="300" r="4" fill={leaf} />
          <path
            d="M8 420 C24 412 40 420 48 438 C36 436 26 442 22 452 C18 442 13 431 8 420 Z"
            fill={leaf}
          />
        </svg>

        <p className="mono text-xs tracking-[0.2em]" style={{ color: leaf }}>
          ACCRA, GHANA
        </p>
        <h1 className="display mt-4 text-5xl font-bold leading-[1.05] sm:text-6xl">
          Quexlab
          <br />
          <span style={{ color: leaf }}>Technologies</span>
        </h1>
        <p className="body-font mt-6 max-w-md text-lg" style={{ color: inkSoft }}>
          Software and digital products, designed and built for Ghana.
        </p>
        <p className="mono mt-8 text-sm italic" style={{ color: forest }}>
          "Sankofa" — go back and fetch it.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#work"
            className="body-font rounded-full px-6 py-3 text-sm font-semibold text-white"
            style={{ background: ink }}
          >
            See our work
          </a>
          <a
            href="#contact"
            className="body-font rounded-full px-6 py-3 text-sm font-semibold"
            style={{ border: `1.5px solid ${ink}`, color: ink }}
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-16" style={{ borderTop: `1px solid #E4E2DA` }}>
        <p className="mono text-xs tracking-widest" style={{ color: leaf }}>
          ABOUT THE STUDIO
        </p>
        <h2 className="display mt-3 max-w-xl text-3xl font-bold leading-snug">
          Building tools people actually use.
        </h2>
        <p className="body-font mt-5 max-w-xl leading-relaxed" style={{ color: inkSoft }}>
          Quexlab Technologies is a small software studio building mobile apps and
          digital services rooted in Ghanaian life and culture — from agricultural
          data platforms to games that carry Akan symbolism into something fresh
          and playable.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <AdinkraNote
            symbol="ꕮ"
            name="NKYINKYIM"
            meaning="Versatility, adaptability — the same spirit behind how we build."
          />
          <AdinkraNote
            symbol="ꖤ"
            name="SANKOFA"
            meaning="Go back and fetch it — honoring where an idea comes from."
          />
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-5xl px-6 py-16" style={{ borderTop: `1px solid #E4E2DA` }}>
        <p className="mono text-xs tracking-widest" style={{ color: leaf }}>
          WHAT WE'VE BUILT
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <ProductCard
            eyebrow="MOBILE GAME · PLAY STORE"
            title="AdinkraMatch3"
            desc="A match-3 puzzle game built around Adinkra symbols and kente patterns — a playful way to explore Akan visual culture."
            accent={leafLight}
          />
          <ProductCard
            eyebrow="MOBILE APP"
            title="Agriquex Hub"
            desc="A platform helping Ghanaian farmers track and manage agricultural data, built for real conditions on the ground."
            accent="#9CC5A1"
          />
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-5xl px-6 py-16"
        style={{ borderTop: `1px solid #E4E2DA` }}
      >
        <div className="rounded-2xl px-8 py-12 text-center" style={{ background: ink }}>
          <h2 className="display text-2xl font-bold text-white sm:text-3xl">
            Let's work together
          </h2>
          <p className="body-font mt-3" style={{ color: "#B7C0CC" }}>
            Have a project in mind, or want to know more about what we do?
          </p>
          <a
            href="mailto:agyapongalbert01@gmail.com"
            className="mono mt-6 inline-block text-sm"
            style={{ color: leafLight }}
          >
            agyapongalbert01@gmail.com
          </a>
        </div>
      </section>

      <footer className="mx-auto max-w-5xl px-6 pb-10 text-center">
        <p className="mono text-xs" style={{ color: inkSoft }}>
          © 2026 Quexlab Technologies. Accra, Ghana.
        </p>
      </footer>
    </div>
  );
}
