import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import { FOREST, INK, INK_SOFT, LEAF, PAPER } from "../theme";

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

export default function EventsPage() {
  return (
    <div className="min-h-screen" style={{ background: PAPER, color: INK }}>
      <Nav />

      <main>
        <section className="mx-auto max-w-7xl px-5 pb-12 pt-12 sm:px-10 sm:pb-16 sm:pt-20">
          <p
            className="text-xs font-bold uppercase tracking-[0.22em]"
            style={{ color: LEAF }}
          >
            Events · Past event
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
            The Impact of <em style={{ color: FOREST }}>Chemical Use</em> in
            Farming
          </h1>
          <p
            className="mt-6 max-w-2xl text-base leading-7 sm:text-lg"
            style={{ color: INK_SOFT }}
          >
            An Agriquex Hub conversation bringing agriculture voices together
            to discuss chemical use in farming.
          </p>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 sm:px-10 sm:pb-24 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div className="relative aspect-[3/2] overflow-hidden bg-[#073b82]">
            <Image
              src="/impact-chemical-use-farming.png"
              alt="Poster for The Impact of Chemical Use in Farming, featuring the event speakers"
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-contain"
            />
          </div>

          <div>
            <div
              className="border-b pb-6"
              style={{ borderColor: "#D8D8CC" }}
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.16em]"
                style={{ color: FOREST }}
              >
                Completed event
              </p>
              <p className="mt-4 text-2xl font-semibold">
                <time dateTime="2026-10-25">October 25, 2026</time>
              </p>
              <p className="mt-1 text-sm" style={{ color: INK_SOFT }}>
                7:00 PM GMT · Online conversation
              </p>
            </div>

            <div className="pt-6">
              <h2 className="text-2xl">Speakers</h2>
              <ul className="mt-5 divide-y" style={{ borderColor: "#D8D8CC" }}>
                {SPEAKERS.map(({ name, role }) => (
                  <li
                    key={name}
                    className="border-t py-4"
                    style={{ borderColor: "#D8D8CC" }}
                  >
                    <p className="font-semibold">{name}</p>
                    <p
                      className="mt-1 text-sm leading-6"
                      style={{ color: INK_SOFT }}
                    >
                      {role}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-sm leading-6" style={{ color: INK_SOFT }}>
              Presented by Agriquex Hub, a product of Quexlab Technologies.
            </p>
          </div>
        </section>

        <section className="border-y" style={{ borderColor: "#D8D8CC" }}>
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <p className="text-sm" style={{ color: INK_SOFT }}>
              Interested in a future event or collaboration?
            </p>
            <Link
              href="/contact"
              className="text-sm font-bold underline decoration-1 underline-offset-4"
              style={{ color: FOREST }}
            >
              Get in touch <span aria-hidden>↗</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
