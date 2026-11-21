import Link from "next/link";

const EXPLORE = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

const LINK_CLASS = "text-[15px] font-medium transition-colors hover:text-forest";

export default function Footer() {
  return (
    <footer className="shell pb-4 sm:pb-5">
      <div className="relative overflow-hidden rounded-[28px] border border-line bg-white px-6 pt-10 sm:px-10 sm:pt-14 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div className="text-left">
            <p className="text-2xl font-semibold tracking-[-0.03em]">
              Quex<span className="text-leaf">lab</span>
            </p>
            <p className="mt-3 max-w-sm text-[15px] leading-7 text-ink-soft">
              An independent software studio building mobile apps, websites, and
              digital products in Ghana and beyond.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium">
              <span aria-hidden className="h-2 w-2 rounded-full bg-leaf" />
              Kumasi, Ghana
            </span>
          </div>

          <div className="text-left">
            <p className="text-sm text-ink-soft">Explore</p>
            <div className="mt-4 grid gap-3">
              {EXPLORE.map(({ href, label }) => (
                <Link key={href} href={href} className={LINK_CLASS}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-left">
            <p className="text-sm text-ink-soft">Products</p>
            <div className="mt-4 grid gap-3">
              <Link href="/work/agriquex-hub" className={LINK_CLASS}>
                Agriquex Hub
              </Link>
              <Link href="/work/adinkra-match" className={LINK_CLASS}>
                Adinkra Match
              </Link>
              <a href="mailto:agriquex@gmail.com" className={LINK_CLASS}>
                Email us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-5 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Quexlab Technologies.</span>
          <span>Software built for real life.</span>
        </div>

        <p
          aria-hidden
          className="wordmark mt-6 select-none text-center"
          style={{
            fontSize: "clamp(4rem, 19.5vw, 17rem)",
            paddingBlock: "0.06em 0.1em",
          }}
        >
          Quexlab
        </p>
      </div>
    </footer>
  );
}
