import Link from "next/link";
import { FOREST, INK_SOFT, LEAF, PAPER } from "../theme";

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "#D8D8CC", background: PAPER }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:py-16">
        <div>
          <p className="text-lg font-bold tracking-[-0.03em]">
            Quex<span style={{ color: LEAF }}>lab</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6" style={{ color: INK_SOFT }}>
            Software and digital products, designed and built for Ghana and the people connected to it.
          </p>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em]" style={{ color: FOREST }}>
            Kumasi, Ghana
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: INK_SOFT }}>Explore</p>
          <div className="mt-4 grid gap-3 text-sm font-semibold">
            <Link href="/about" className="hover:text-[var(--forest)]">About</Link>
            <Link href="/work" className="hover:text-[var(--forest)]">Work</Link>
            <Link href="/contact" className="hover:text-[var(--forest)]">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: INK_SOFT }}>Products</p>
          <div className="mt-4 grid gap-3 text-sm font-semibold">
            <Link href="/work/agriquex-hub" className="hover:text-[var(--forest)]">Agriquex Hub</Link>
            <Link href="/work/adinkra-match" className="hover:text-[var(--forest)]">Adinkra Match</Link>
            <a href="mailto:hello@quexlabtechnologies.com" className="hover:text-[var(--forest)]">Email us</a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t px-5 py-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-10" style={{ borderColor: "#D8D8CC", color: INK_SOFT }}>
        <span>© {new Date().getFullYear()} Quexlab Technologies.</span>
        <span>Built with care, from Ghana.</span>
      </div>
    </footer>
  );
}
