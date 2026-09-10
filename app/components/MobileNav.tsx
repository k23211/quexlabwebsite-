"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FOREST, INK, INK_SOFT, LEAF, LogoMark, PAPER } from "../theme";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-40 mx-auto w-full max-w-7xl border-b px-4 py-4 sm:px-10 sm:py-5" style={{ borderColor: "#D8D8CC", background: PAPER }}>
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3" onClick={() => setOpen(false)}>
          <LogoMark size={28} />
          <span className="text-sm font-bold tracking-[-0.03em] sm:text-[15px]">Quex<span style={{ color: LEAF }}>lab</span></span>
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border sm:hidden"
          style={{ borderColor: "#D8D8CC" }}
          onClick={() => setOpen(!open)}
        >
          <span className={`h-px w-4 transition-transform ${open ? "translate-y-1 rotate-45" : ""}`} style={{ background: INK }} />
          <span className={`h-px w-4 transition-opacity ${open ? "opacity-0" : ""}`} style={{ background: INK }} />
          <span className={`h-px w-4 transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} style={{ background: INK }} />
        </button>
        <div className="hidden items-center gap-3 sm:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return <Link key={item.href} href={item.href} className="px-3 py-2 text-sm font-semibold" style={active ? { color: INK, textDecoration: "underline", textDecorationColor: LEAF, textDecorationThickness: "2px" } : { color: INK_SOFT }}>{item.label}</Link>;
          })}
        </div>
      </div>
      {open && (
        <div id="site-navigation" className="grid gap-1 border-t pt-3 sm:hidden" style={{ borderColor: "#D8D8CC" }}>
          {NAV.map((item) => {
            const active = pathname === item.href;
            return <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-2 py-3 text-base font-semibold" style={active ? { color: FOREST } : { color: INK_SOFT }}>{item.label}</Link>;
          })}
        </div>
      )}
    </nav>
  );
}
