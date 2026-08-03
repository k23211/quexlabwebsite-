import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../components/Nav";
import { FOREST, INK, INK_SOFT, LEAF, PAPER, LogoMark } from "../theme";

export const metadata: Metadata = {
  title: "About | Quexlab Technologies",
  description:
    "Quexlab Technologies is a small software studio building mobile apps and websites with roots in Ghanaian and Akan culture — designed for people everywhere.",
  alternates: {
    canonical: "https://quexlabwebsite.vercel.app/about",
  },
  openGraph: {
    title: "About | Quexlab Technologies",
    description:
      "Quexlab Technologies is a small software studio building mobile apps and websites with roots in Ghanaian and Akan culture — designed for people everywhere.",
    url: "https://quexlabwebsite.vercel.app/about",
    siteName: "Quexlab Technologies",
    locale: "en_GH",
    type: "website",
  },
};

export default function About() {
  return (
    <div
      className="relative flex min-h-[100dvh] w-screen flex-col"
      style={{ background: PAPER, color: INK }}
    >
      <div
        aria-hidden
        className="pointer-events-none fixed -right-24 -top-24 opacity-[0.04] sm:-right-16 sm:-top-16"
      >
        <LogoMark size={420} />
      </div>

      <Nav />

      <div className="relative flex flex-1 flex-col items-center px-6 py-10 sm:px-10 sm:py-14">
        <div className="max-w-xl sm:max-w-2xl">
          <p
            className="text-xs font-medium uppercase tracking-[0.3em]"
            style={{ color: LEAF }}
          >
            Learning from the past, building what&apos;s next
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            About the studio
          </h2>
          <p
            className="mt-4 text-sm leading-relaxed sm:text-base sm:leading-8"
            style={{ color: INK_SOFT }}
          >
            Quexlab Technologies is a small software studio building mobile
            apps and websites with roots in Ghanaian and Akan culture —
            designed for people everywhere. We build tools people actually
            use, from agricultural data platforms to games that carry Akan
            symbolism into something fresh and playable.
          </p>
          <p
            className="mt-6 text-xs font-medium uppercase tracking-[0.3em]"
            style={{ color: FOREST }}
          >
            Versatile by design, adaptable by nature
          </p>

          {/* Team section */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2">
            {/* Founder */}
            <div
              className="relative flex flex-row items-start gap-4 overflow-hidden rounded-2xl p-5 text-left shadow-[0_20px_45px_-20px_rgba(11,18,32,0.18)] sm:p-6"
              style={{ background: "#FFFFFF", border: `1px solid ${LEAF}26` }}
            >
              {/* faint corner wash so the card reads as considered, not stark white */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full"
                style={{ background: `${LEAF}0f` }}
              />

              <div
                className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full sm:h-28 sm:w-28"
                style={{ border: `2px solid ${LEAF}` }}
              >
                <Image
                  src="/founder.jpg"
                  alt="Albert Agyapong, Founder of Quexlab Technologies"
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div className="relative min-w-0 flex-1">
                <h3 className="text-base font-semibold sm:text-xl" style={{ color: INK }}>
                  Albert Agyapong
                </h3>
                <span
                  className="mt-1.5 inline-block whitespace-nowrap rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] sm:px-3 sm:text-[11px] sm:tracking-[0.2em]"
                  style={{ color: FOREST, background: `${LEAF}17` }}
                >
                  Founder &amp; Owner
                </span>
                <p
                  className="mt-3 text-xs leading-relaxed sm:text-sm"
                  style={{ color: INK_SOFT }}
                >
                  Leading the vision and direction of Quexlab Technologies.
                </p>
                <details className="mt-2 group">
                  <summary
                    className="inline-flex cursor-pointer list-none items-center gap-1 text-xs font-semibold [&::-webkit-details-marker]:hidden marker:content-none"
                    style={{ color: FOREST }}
                  >
                    Read full bio
                    <span className="transition-transform duration-200 group-open:rotate-180">
                      ▾
                    </span>
                  </summary>
                  <p
                    className="mt-3 text-sm italic leading-relaxed sm:text-base sm:leading-8"
                    style={{ color: INK_SOFT }}
                  >
                    <span aria-hidden style={{ color: LEAF, opacity: 0.5 }}>
                      &ldquo;
                    </span>
                    Albert holds a degree in Agribusiness with
                    Entrepreneurship and Finance from Kumasi Technical
                    University. He founded Quexlab Technologies to build
                    mobile applications and websites that combine Ghanaian
                    cultural identity with practical, real-world solutions.
                    <span aria-hidden style={{ color: LEAF, opacity: 0.5 }}>
                      &rdquo;
                    </span>
                  </p>
                </details>
              </div>
            </div>

            {/* Head of Operations & Farmer Support */}
            <div
              className="relative flex flex-row items-start gap-4 overflow-hidden rounded-2xl p-5 text-left shadow-[0_20px_45px_-20px_rgba(11,18,32,0.18)] sm:p-6"
              style={{ background: "#FFFFFF", border: `1px solid ${LEAF}26` }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full"
                style={{ background: `${LEAF}0f` }}
              />

              <div
                className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full sm:h-28 sm:w-28"
                style={{ border: `2px solid ${LEAF}` }}
              >
                <Image
                  src="/kenechi.jpg"
                  alt="Umezinwa Kenechi, Head of Operations and Farmer Support at Quexlab Technologies"
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div className="relative min-w-0 flex-1">
                <h3 className="text-base font-semibold sm:text-xl" style={{ color: INK }}>
                  Umezinwa Kenechi
                </h3>
                <span
                  className="mt-1.5 inline-block rounded-full px-2.5 py-1 text-[8px] font-semibold uppercase leading-tight tracking-[0.04em] sm:whitespace-nowrap sm:px-3 sm:text-[11px] sm:tracking-[0.12em]"
                  style={{ color: FOREST, background: `${LEAF}17` }}
                >
                  Head of Operations &amp; Farmer Support
                </span>
                <p
                  className="mt-3 text-xs leading-relaxed sm:text-sm"
                  style={{ color: INK_SOFT }}
                >
                  Leading operations and farmer support, blending animal
                  science with hands-on ops expertise.
                </p>
                <details className="mt-2 group">
                  <summary
                    className="inline-flex cursor-pointer list-none items-center gap-1 text-xs font-semibold [&::-webkit-details-marker]:hidden marker:content-none"
                    style={{ color: FOREST }}
                  >
                    Read full bio
                    <span className="transition-transform duration-200 group-open:rotate-180">
                      ▾
                    </span>
                  </summary>
                  <p
                    className="mt-3 text-sm italic leading-relaxed sm:text-base sm:leading-8"
                    style={{ color: INK_SOFT }}
                  >
                    <span aria-hidden style={{ color: LEAF, opacity: 0.5 }}>
                      &ldquo;
                    </span>
                    Kenechi holds a BSc in Animal Science from the
                    University of Nigeria, Nsukka, and an MSc in Animal
                    Function and Nutrition from Hokkaido University, Japan.
                    She leads operations and farmer support at Quexlab
                    Technologies, keeping our tools, communication, and
                    workflows running smoothly — pairing a scientific
                    grounding in animal nutrition with hands-on operational
                    expertise across the team.
                    <span aria-hidden style={{ color: LEAF, opacity: 0.5 }}>
                      &rdquo;
                    </span>
                  </p>
                </details>
              </div>
            </div>

            {/* Co-Founder */}
            <div
              className="relative flex flex-row items-start gap-4 overflow-hidden rounded-2xl p-5 text-left shadow-[0_20px_45px_-20px_rgba(11,18,32,0.18)] sm:p-6"
              style={{ background: "#FFFFFF", border: `1px solid ${LEAF}26` }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full"
                style={{ background: `${LEAF}0f` }}
              />

              <div
                className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full sm:h-28 sm:w-28"
                style={{ border: `2px solid ${LEAF}` }}
              >
                <Image
                  src="/richard.jpg"
                  alt="Richard Lontah, Co-Founder of Quexlab Technologies"
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div className="relative min-w-0 flex-1">
                <h3 className="text-base font-semibold sm:text-xl" style={{ color: INK }}>
                  Richard Lontah
                </h3>
                <span
                  className="mt-1.5 inline-block whitespace-nowrap rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] sm:px-3 sm:text-[11px] sm:tracking-[0.2em]"
                  style={{ color: FOREST, background: `${LEAF}17` }}
                >
                  Co-Founder
                </span>
                <p
                  className="mt-3 text-xs leading-relaxed sm:text-sm"
                  style={{ color: INK_SOFT }}
                >
                  Bringing strong leadership and management to the team.
                </p>
                <details className="mt-2 group">
                  <summary
                    className="inline-flex cursor-pointer list-none items-center gap-1 text-xs font-semibold [&::-webkit-details-marker]:hidden marker:content-none"
                    style={{ color: FOREST }}
                  >
                    Read full bio
                    <span className="transition-transform duration-200 group-open:rotate-180">
                      ▾
                    </span>
                  </summary>
                  <p
                    className="mt-3 text-sm italic leading-relaxed sm:text-base sm:leading-8"
                    style={{ color: INK_SOFT }}
                  >
                    <span aria-hidden style={{ color: LEAF, opacity: 0.5 }}>
                      &ldquo;
                    </span>
                    Richard studied alongside Albert and co-founded Quexlab
                    Technologies with him. He brings strong leadership and
                    management experience to the team, helping guide the
                    studio&apos;s direction and keeping day-to-day operations
                    running smoothly.
                    <span aria-hidden style={{ color: LEAF, opacity: 0.5 }}>
                      &rdquo;
                    </span>
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
