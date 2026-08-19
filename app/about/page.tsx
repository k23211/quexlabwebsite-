import type { Metadata } from "next";
import Image from "next/image";
import { Crown, HeartHandshake, Users } from "lucide-react";
import Nav from "../components/Nav";
import { FOREST, INK, INK_SOFT, LEAF, PAPER, LogoMark } from "../theme";

export const metadata: Metadata = {
  title: "About | Quexlab Technologies",
  description:
    "Quexlab Technologies is a team providing digital solutions to people everywhere.",
  alternates: {
    canonical: "https://quexlabwebsite.vercel.app/about",
  },
  openGraph: {
    title: "About | Quexlab Technologies",
    description:
      "Quexlab Technologies is a team providing digital solutions to people everywhere.",
    url: "https://quexlabwebsite.vercel.app/about",
    siteName: "Quexlab Technologies",
    locale: "en_US",
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
            Quexlab Technologies is a team providing digital solutions to
            people everywhere. We build tools people actually use, from
            agricultural data platforms to culturally-inspired games
            designed to be fresh and playable. One of those tools is{" "}
            <strong style={{ color: INK }}>Agriquex Hub</strong>, our
            agricultural data platform built to support farmers with the
            operations and resources they need to thrive.
          </p>
          <p
            className="mt-6 text-xs font-medium uppercase tracking-[0.3em]"
            style={{ color: FOREST }}
          >
            Versatile by design, adaptable by nature
          </p>

          {/* Founders */}
          <h3
            className="mt-12 text-sm font-semibold uppercase tracking-[0.2em] sm:mt-16"
            style={{ color: INK }}
          >
            The Founders
          </h3>
          <p
            className="mt-2 text-xs leading-relaxed sm:text-sm"
            style={{ color: INK_SOFT }}
          >
            Building and steering Quexlab Technologies as a whole.
          </p>

          <div
            className="mt-8"
            style={{ borderTop: `1px solid ${LEAF}26` }}
          >
            {/* Founder */}
            <div
              className="flex flex-col items-center gap-5 py-8 text-center sm:flex-row sm:items-center sm:gap-7 sm:text-left"
              style={{ borderBottom: `1px solid ${LEAF}26` }}
            >
              <span
                aria-hidden
                className="hidden text-4xl font-bold tabular-nums sm:block"
                style={{ color: `${LEAF}33` }}
              >
                01
              </span>
              <div
                className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full sm:h-24 sm:w-24"
              >
                <Image
                  src="/founder.jpg"
                  alt="Albert Agyapong, Founder of Quexlab Technologies"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col items-center sm:items-start">
                <h4
                  className="text-xl font-bold tracking-tight sm:text-2xl"
                  style={{ color: INK }}
                >
                  Albert Agyapong
                </h4>
                <span
                  className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.15em]"
                  style={{ color: FOREST }}
                >
                  <Crown size={12} strokeWidth={2.5} />
                  Founder &amp; Owner
                </span>
                <p
                  className="mt-2.5 max-w-sm text-xs leading-relaxed sm:text-sm"
                  style={{ color: INK_SOFT }}
                >
                  Leading the vision and direction of Quexlab Technologies.
                </p>
              </div>
            </div>

            {/* Co-Founder */}
            <div
              className="flex flex-col items-center gap-5 py-8 text-center sm:flex-row sm:items-center sm:gap-7 sm:text-left"
              style={{ borderBottom: `1px solid ${LEAF}26` }}
            >
              <span
                aria-hidden
                className="hidden text-4xl font-bold tabular-nums sm:block"
                style={{ color: `${LEAF}33` }}
              >
                02
              </span>
              <div
                className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full sm:h-24 sm:w-24"
              >
                <Image
                  src="/richard.jpg"
                  alt="Richard Lontah, Co-Founder of Quexlab Technologies"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col items-center sm:items-start">
                <h4
                  className="text-xl font-bold tracking-tight sm:text-2xl"
                  style={{ color: INK }}
                >
                  Richard Lontah
                </h4>
                <span
                  className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.15em]"
                  style={{ color: FOREST }}
                >
                  <Users size={12} strokeWidth={2.5} />
                  Co-Founder
                </span>
                <p
                  className="mt-2.5 max-w-sm text-xs leading-relaxed sm:text-sm"
                  style={{ color: INK_SOFT }}
                >
                  Bringing strong leadership and management to the team.
                </p>
              </div>
            </div>
          </div>

          {/* Agriquex Hub */}
          <h3
            className="mt-12 text-sm font-semibold uppercase tracking-[0.2em] sm:mt-16"
            style={{ color: INK }}
          >
            Agriquex Hub
          </h3>
          <p
            className="mt-2 text-xs leading-relaxed sm:text-sm"
            style={{ color: INK_SOFT }}
          >
            A Quexlab Technologies product. The team here focuses on
            supporting and building innovative solutions for Agriquex Hub.
          </p>

          <div
            className="mt-8"
            style={{ borderTop: `1px solid ${LEAF}26` }}
          >
            {/* Head of Operations & Farmer Support */}
            <div
              className="flex flex-col items-center gap-5 py-8 text-center sm:flex-row sm:items-center sm:gap-7 sm:text-left"
              style={{ borderBottom: `1px solid ${LEAF}26` }}
            >
              <span
                aria-hidden
                className="hidden text-4xl font-bold tabular-nums sm:block"
                style={{ color: `${LEAF}33` }}
              >
                01
              </span>
              <div
                className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full sm:h-28 sm:w-28"
              >
                <Image
                  src="/kenechi.jpg"
                  alt="Umezinwa Kenechi, Head of Operations and Farmer Support at Agriquex Hub"
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col items-center sm:items-start">
                <h4
                  className="text-xl font-bold tracking-tight sm:text-2xl"
                  style={{ color: INK }}
                >
                  Umezinwa Kenechi
                </h4>
                <span
                  className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase leading-tight tracking-[0.1em]"
                  style={{ color: FOREST }}
                >
                  <HeartHandshake size={12} strokeWidth={2.5} className="flex-shrink-0" />
                  Head of Operations &amp; Farmer Support
                </span>
                <p
                  className="mt-2.5 max-w-sm text-xs leading-relaxed sm:text-sm"
                  style={{ color: INK_SOFT }}
                >
                  Leading operations and farmer support, blending animal
                  science with hands-on ops expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
