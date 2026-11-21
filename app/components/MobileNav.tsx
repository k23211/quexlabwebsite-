"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowIcon, LogoMark } from "../theme";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];
const DESKTOP_NAV = NAV.filter((item) => item.href !== "/contact");

type Props = {
  /** "overlay" sits on top of a dark hero image. "light" is for every other page. */
  variant?: "light" | "overlay";
};

export default function MobileNav({ variant = "light" }: Props) {
  const overlay = variant === "overlay";
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav
      aria-label="Main"
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-40 px-4 pt-4 sm:px-8 sm:pt-6"
          : "shell relative z-40 py-4 sm:py-5"
      }
    >
      <div className="relative flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white">
            <LogoMark size={24} />
          </span>
          <span
            className={`text-base font-semibold tracking-[-0.03em] ${
              overlay ? "text-white" : "text-ink"
            }`}
          >
            Quex<span className="text-leaf">lab</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div
          className={`hidden items-center md:flex ${
            overlay
              ? "gap-2"
              : "gap-1 rounded-full border border-line bg-white p-1"
          }`}
        >
          {DESKTOP_NAV.map((item) => {
            const active = pathname === item.href;
            const cls = overlay
              ? `pill ${active ? "pill-active" : ""}`
              : `rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-ink text-white"
                    : "text-ink-soft hover:bg-paper hover:text-ink"
                }`;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cls}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop button */}
        <Link
          href="/contact"
          className={`btn hidden md:inline-flex ${
            overlay ? "btn-light" : "btn-dark"
          }`}
        >
          Start a project
          <span className="btn-icon">
            <ArrowIcon direction="up-right" />
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          className={`grid h-11 w-11 place-items-center rounded-full md:hidden ${
            overlay
              ? "bg-white/15 text-white backdrop-blur-md"
              : "border border-line bg-white text-ink"
          }`}
          onClick={() => setOpen(!open)}
        >
          <span className="flex flex-col items-center gap-1.5">
            <span
              className={`h-px w-4 bg-current transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-4 bg-current transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="site-navigation"
          className="absolute inset-x-4 top-full mt-2 rounded-3xl border border-line bg-white p-2 shadow-[0_20px_40px_-20px_rgba(15,26,22,0.35)] sm:inset-x-8 md:hidden"
        >
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`block rounded-2xl px-4 py-3 text-base font-medium ${
                  active ? "bg-paper text-ink" : "text-ink-soft"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
