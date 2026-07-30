"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { INK, INK_SOFT, LEAF, PAPER, LogoMark } from "../theme";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className="flex shrink-0 items-center justify-between px-5 py-4 sm:px-10"
      style={{ borderBottom: "1px solid #E4E2DA" }}
    >
      <Link href="/" className="flex items-center gap-2">
        <LogoMark size={26} />
        <span className="text-sm font-bold tracking-tight">
          Quex<span style={{ color: LEAF }}>lab</span>
        </span>
      </Link>
      <div className="flex gap-1 sm:gap-2">
        {NAV.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm"
              style={
                active
                  ? { background: INK, color: PAPER }
                  : { color: INK_SOFT }
              }
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
