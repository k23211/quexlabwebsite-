"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { INK, INK_SOFT, LEAF, LogoMark } from "../theme";

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
      className="mx-auto flex w-full max-w-7xl shrink-0 items-center justify-between border-b px-4 py-4 sm:px-10 sm:py-5"
      style={{ borderColor: "#D8D8CC" }}
    >
      <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
        <LogoMark size={28} />
        <span className="text-sm font-bold tracking-[-0.03em] sm:text-[15px]">
          Quex<span style={{ color: LEAF }}>lab</span>
        </span>
      </Link>
      <div className="flex items-center gap-0 sm:gap-3">
        {NAV.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="px-2 py-2 text-[11px] font-semibold transition-colors sm:px-3 sm:text-sm"
              style={
                active
                  ? { color: INK, textDecoration: "underline", textDecorationColor: LEAF, textDecorationThickness: "2px" }
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
