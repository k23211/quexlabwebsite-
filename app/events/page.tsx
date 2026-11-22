import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import { ArrowIcon, INK, PAPER } from "../theme";

export const metadata: Metadata = {
  title: "Past Events | Quexlab Technologies",
  description:
    "Look back at Quexlab and Agriquex Hub events, including The Impact of Chemical Use in Farming.",
};

const SPEAKERS = [
  {
    name: "Mrs Doris Lonta",
    role: "Host · Broadcast Journalist, Citi FM / Channel One TV",
  },
  {
    name: "Daniel Obiri-Yeboah",
    role: "Co-host · Secretary, Agriquex Hub",
  },
  {
    name: "Christina Oshin",
    role: "Guest speaker · Animal Scientist and Founder, CHRISTINASHANDMADE",
  },
  {
    name: "Richard Lontah",
    role: "Guest speaker · Co-founder, Quexlab Technologies",
  },
  {
    name: "Isaac Adjei",
    role: "Guest speaker · Marketing Officer, Bon Agro LTD",
  },
];

function initials(name: string) {
  return name
    .split(/[\s-]+/)
    .filter((word) => /^[A-Za-z]/.test(word) && !/^(Mrs|Mr|Ms|Dr)$/i.test(word))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

export default function EventsPage() {
  return (
    <div className="min-h-screen" style={{ background: PAPER, color: INK }}>
      <Nav />

      <div>
        <section className="shell reveal pb-10 pt-10 text-left sm:pb-14 sm:pt-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium">
            <span aria-hidden className="h-2 w-2 rounded-full bg-leaf" />
            Past event
          </span>
          <h1 className="mt-6 max-w-4xl text-[2.5rem] sm:text-6xl lg:text-7xl">
            The Impact of Chemical Use{" "}
            <span className="muted-text">in Farming</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
            An Agriquex Hub conversation bringing agriculture voices together
            to discuss chemical use in farming.
          </p>
        </section>

        <section className="shell grid gap-5 pb-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div>
            <div className="media relative aspect-[3/2] bg-[#073b82]">
              <Image
                src="/impact-chemical-use-farming.png"
                alt="Poster for The Impact of Chemical Use in Farming, featuring the event speakers"
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid gap-5">
            <div className="border-y border-line py-7 text-left sm:py-8">
              <span className="inline-flex rounded-full border border-line px-3.5 py-1.5 text-xs font-medium text-ink-soft">
                Completed event
              </span>
              <p className="mt-8 text-3xl font-semibold tracking-[-0.03em]">
                <time dateTime="2026-10-25">October 25, 2026</time>
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                7:00 PM GMT · Online conversation
              </p>
            </div>

            <div className="text-left">
              <h2 className="text-2xl">Speakers</h2>
              <ul className="mt-5 divide-y divide-line">
                {SPEAKERS.map(({ name, role }) => (
                  <li key={name} className="flex items-start gap-4 py-4">
                    <span
                      aria-hidden
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-paper text-sm font-semibold text-forest"
                    >
                      {initials(name)}
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold">{name}</p>
                      <p className="mt-1 text-sm leading-6 text-ink-soft">
                        {role}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-2 border-t border-line pt-5 text-sm leading-6 text-ink-soft">
                Presented by Agriquex Hub, a product of Quexlab Technologies.
              </p>
            </div>
          </div>
        </section>

        <section className="shell pb-16 pt-5 sm:pb-24">
          <div className="flex flex-col gap-6 border-y border-line py-7 text-left sm:flex-row sm:items-center sm:justify-between sm:py-10">
            <p className="headline max-w-md">
              Interested in a future event{" "}
              <span className="muted">or collaboration?</span>
            </p>
            <Link href="/contact" className="btn btn-dark w-fit shrink-0">
              Get in touch
              <span className="btn-icon">
                <ArrowIcon direction="up-right" />
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
