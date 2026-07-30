import type { Metadata } from "next";
import Nav from "../components/Nav";
import { INK, LEAF, PAPER } from "../theme";

export const metadata: Metadata = {
  title: "Work | Quexlab Technologies",
  description:
    "AdinkraMatch3 and Agriquex Hub — mobile products built by Quexlab Technologies for Ghana.",
};

export default function Work() {
  return (
    <div
      className="flex h-[100dvh] w-screen flex-col overflow-hidden"
      style={{ background: PAPER, color: INK }}
    >
      <Nav />
      <div className="flex flex-1 flex-col justify-center overflow-hidden px-6 sm:px-10">
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
    </div>
  );
}
