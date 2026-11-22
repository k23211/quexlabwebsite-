import type { Metadata } from "next";
import Image from "next/image";
import { Crown, Users } from "lucide-react";
import Nav from "../components/Nav";
import { FOREST, INK, LEAF, PAPER } from "../theme";

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

const VALUES = [
  "Founders",
  "Live products",
  "Culture-rooted design",
  "Built for everyone",
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

type Person = {
  name: string;
  role: string;
  icon: typeof Crown;
  bio: string;
  photo?: string;
};

function PersonCard({ name, role, icon: Icon, bio, photo }: Person) {
  return (
    <article>
      <div className="media relative aspect-[4/5] bg-paper">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div
            className="grid h-full w-full place-items-center"
            style={{ background: `${LEAF}14` }}
          >
            <Icon size={32} strokeWidth={2} style={{ color: FOREST }} />
          </div>
        )}
      </div>
      <div className="px-3 pb-3 pt-5 text-left">
        <span
          className="inline-flex items-center gap-1.5 rounded-full bg-paper px-3 py-1.5 text-xs font-medium"
          style={{ color: FOREST }}
        >
          <Icon size={12} strokeWidth={2.5} className="shrink-0" />
          {role}
        </span>
        <h3 className="mt-4 text-2xl">{name}</h3>
        <p className="mt-2 text-[15px] leading-7 text-ink-soft">{bio}</p>
      </div>
    </article>
  );
}

function PeopleBlock({
  title,
  intro,
  people,
}: {
  title: string;
  intro: string;
  people: Person[];
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
      <div className="text-left">
        <h2 className="headline">{title}</h2>
        <p className="mt-4 max-w-xs text-[15px] leading-7 text-ink-soft">
          {intro}
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {people.map((person) => (
          <PersonCard key={person.name} {...person} />
        ))}
      </div>
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
    founders: [
      { "@type": "Person", name: "Albert Agyapong" },
      { "@type": "Person", name: "Richard Lontah" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <div style={{ background: PAPER, color: INK }}>
        <Nav />

        <section className="shell reveal pb-6 pt-10 text-left sm:pt-16">
          <h1 className="display max-w-4xl">
            Small team.{" "}
            <span className="muted-text">
              Serious about useful technology.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
            Quexlab Technologies is a team providing digital solutions to people
            everywhere. We build tools people actually use, from agricultural
            data platforms to culturally-inspired games designed to be fresh and
            playable. One of those tools is{" "}
            <strong className="font-semibold text-ink">Agriquex Hub</strong>,
            our agricultural data platform built to support farmers with the
            operations and resources they need to thrive.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {VALUES.map((label) => (
              <li
                key={label}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium"
              >
                {label}
              </li>
            ))}
          </ul>
        </section>

        <section className="shell section grid gap-20 sm:gap-28">
          <PeopleBlock
            title="The Founders"
            intro="Building and steering Quexlab Technologies as a whole."
            people={FOUNDERS}
          />
        </section>
      </div>
    </>
  );
}
