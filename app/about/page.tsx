import type { Metadata } from "next";
import Image from "next/image";
import { Crown, HeartHandshake, Users } from "lucide-react";
import Nav from "../components/Nav";
import { FOREST, INK, INK_SOFT, LEAF, PAPER } from "../theme";

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

const STATS = [
  { label: "Founders" },
  { label: "Live products" },
  { label: "Culture-rooted design" },
  { label: "Built for everyone" },
];

const FOUNDERS = [
  {
    name: "Albert Agyapong",
    role: "Founder & Owner",
    icon: Crown,
    photo: "/founder.jpg",
    bio: "Leading the vision and direction of Quexlab Technologies.",
  },
  {
    name: "Richard Lontah",
    role: "Co-Founder",
    icon: Users,
    photo: "/richard.jpg",
    bio: "Bringing strong leadership and management to the team.",
  },
];

const AGRIQUEX_TEAM = [
  {
    name: "Umezinwa Kenechi",
    role: "Head of Operations & Farmer Support",
    icon: HeartHandshake,
    bio: "Leading operations and farmer support, blending animal science with hands-on ops expertise.",
  },
];

function PersonCard({
  name,
  role,
  icon: Icon,
  bio,
  photo,
}: {
  name: string;
  role: string;
  icon: typeof Crown;
  bio: string;
  photo?: string;
}) {
  return (
    <div
      className="rounded-2xl border p-6 sm:p-7"
      style={{ borderColor: "#E4E2DA" }}
    >
      <div className="flex items-center gap-4">
        {photo ? (
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
            <Image src={photo} alt={name} fill sizes="64px" className="object-cover" />
          </div>
        ) : (
          <div
            className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full"
            style={{ background: `${LEAF}14` }}
          >
            <Icon size={22} strokeWidth={2} style={{ color: FOREST }} />
          </div>
        )}
        <div className="min-w-0">
          <h4 className="text-lg font-bold tracking-tight sm:text-xl">{name}</h4>
          <span
            className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase leading-tight tracking-[0.15em]"
            style={{ color: FOREST }}
          >
            <Icon size={12} strokeWidth={2.5} className="flex-shrink-0" />
            {role}
          </span>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed" style={{ color: INK_SOFT }}>
        {bio}
      </p>
    </div>
  );
}

export default function About() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Quexlab Technologies",
    url: "https://quexlabwebsite.vercel.app/",
    description:
      "Quexlab Technologies is a team providing digital solutions to people everywhere.",
    founders: [{ "@type": "Person", name: "Albert Agyapong" }, { "@type": "Person", name: "Richard Lontah" }],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <div style={{ background: PAPER, color: INK }}>
        <Nav />

        <section className="mx-auto max-w-7xl px-6 pb-16 pt-14 sm:px-10 sm:pb-24 sm:pt-20">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em]" style={{ color: FOREST }}>
            The studio
          </p>
          <h1 className="max-w-3xl text-5xl leading-[0.96] sm:text-6xl">
            Small team. Serious about useful technology.
          </h1>
          <p
            className="mt-7 max-w-2xl text-base leading-7 sm:text-lg"
            style={{ color: INK_SOFT }}
          >
            Quexlab Technologies is a team providing digital solutions to
            people everywhere. We build tools people actually use, from
            agricultural data platforms to culturally-inspired games designed
            to be fresh and playable. One of those tools is{" "}
            <strong style={{ color: INK }}>Agriquex Hub</strong>, our
            agricultural data platform built to support farmers with the
            operations and resources they need to thrive.
          </p>
        </section>

        <section className="border-y" style={{ borderColor: "#E4E2DA" }}>
          <div
            className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-6 sm:px-10 lg:grid-cols-4"
            style={{ color: INK_SOFT }}
          >
            {STATS.map(({ label }, i) => (
              <div
                key={label}
                className="border-l py-3 pl-4 text-xs font-bold uppercase tracking-[0.12em] lg:pl-6"
                style={{ borderColor: i === 0 ? "transparent" : "#E4E2DA" }}
              >
                {label}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="mb-10 max-w-xl">
            <h2 className="text-4xl leading-none sm:text-5xl">
              The Founders
            </h2>
            <p className="mt-3 text-base leading-relaxed" style={{ color: INK_SOFT }}>
              Building and steering Quexlab Technologies as a whole.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {FOUNDERS.map((person) => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 sm:pb-28">
          <div className="mb-10 max-w-xl">
            <h2 className="text-4xl leading-none sm:text-5xl">
              Agriquex Hub
            </h2>
            <p className="mt-3 text-base leading-relaxed" style={{ color: INK_SOFT }}>
              A Quexlab Technologies product. The team here focuses on
              supporting and building innovative solutions for Agriquex Hub.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {AGRIQUEX_TEAM.map((person) => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
