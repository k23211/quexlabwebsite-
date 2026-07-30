export default function Home() {
  return (
    <div className="bg-[#12100E] text-[#F5EFE6]">
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* faint background motif — Gye Nyame, "except for God" — a symbol of supremacy and ambition */}
        <svg
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M100 20 C60 20 30 55 30 100 C30 145 60 180 100 180 C140 180 170 145 170 100 M100 20 C140 20 170 55 170 100 M60 70 C60 50 80 40 100 40 C120 40 140 50 140 70 M60 130 C60 150 80 160 100 160 C120 160 140 150 140 130"
            stroke="#C9A227"
            strokeWidth="4"
          />
        </svg>

        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C9A227]">
          Accra, Ghana
        </p>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          Quexlab Technologies
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[#F5EFE6]/70">
          Software and digital products, designed and built for Ghana.
        </p>
        <div className="mt-10 h-px w-16 bg-[#C9A227]/60" />
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-3xl px-6 py-28">
        <div className="flex items-start gap-6">
          <svg className="mt-1 h-10 w-10 shrink-0 opacity-80" viewBox="0 0 100 100" fill="none">
            <path
              d="M50 20 C30 20 20 35 20 50 C20 65 30 78 45 78 L45 55 M45 55 C45 65 55 65 55 55 L55 30"
              stroke="#C9A227"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#C9A227]">
              Sankofa — go back and fetch it
            </p>
            <h2 className="mb-4 text-3xl font-semibold">About the studio</h2>
            <p className="text-lg leading-8 text-[#F5EFE6]/75">
              Quexlab Technologies is a small software studio building mobile
              apps and digital services rooted in Ghanaian life and culture.
              We build tools people actually use — from agricultural data
              platforms to games that carry Akan symbolism into something
              fresh and playable.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-5xl px-6 py-28">
        <div className="mb-14 flex items-start gap-6">
          <svg className="mt-1 h-10 w-10 shrink-0 opacity-80" viewBox="0 0 100 100" fill="none">
            <path
              d="M30 30 C30 60 70 40 70 70 M70 30 C70 60 30 40 30 70"
              stroke="#A63A2D"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#A63A2D]">
              Nkyinkyim — versatility, adaptability
            </p>
            <h2 className="text-3xl font-semibold">What we've built</h2>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#F5EFE6]/10 bg-[#F5EFE6]/[0.03] p-8 transition-colors hover:border-[#C9A227]/40">
            <h3 className="mb-2 text-xl font-semibold">AdinkraMatch3</h3>
            <p className="mb-4 text-[#F5EFE6]/70">
              A match-3 puzzle game built around Adinkra symbols and kente
              patterns — a playful way to explore Akan visual culture.
            </p>
            <span className="text-sm text-[#C9A227]">Mobile game · Play Store</span>
          </div>

          <div className="rounded-2xl border border-[#F5EFE6]/10 bg-[#F5EFE6]/[0.03] p-8 transition-colors hover:border-[#C9A227]/40">
            <h3 className="mb-2 text-xl font-semibold">Agriquex Hub</h3>
            <p className="mb-4 text-[#F5EFE6]/70">
              A platform helping Ghanaian farmers track and manage
              agricultural data, built for real conditions on the ground.
            </p>
            <span className="text-sm text-[#2F5233]">Mobile app</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-3xl px-6 py-28 text-center">
        <h2 className="mb-4 text-3xl font-semibold">Let's work together</h2>
        <p className="mb-8 text-lg text-[#F5EFE6]/70">
          Have a project in mind, or want to know more about what we do?
        </p>
        <a
          href="mailto:agyapongalbert01@gmail.com"
          className="inline-block rounded-full border border-[#C9A227]/60 px-8 py-3 text-[#C9A227] transition-colors hover:bg-[#C9A227]/10"
        >
          agyapongalbert01@gmail.com
        </a>
      </section>

      <footer className="border-t border-[#F5EFE6]/10 px-6 py-10 text-center text-sm text-[#F5EFE6]/40">
        © {new Date().getFullYear()} Quexlab Technologies. Accra, Ghana.
      </footer>
    </div>
  );
}
