import type { Metadata } from "next";
import { AtSign, CirclePlay, ThumbsUp } from "lucide-react";
import Nav from "../components/Nav";
import EmailLink from "../components/EmailLink";
import { INK, INK_SOFT, LEAF, PAPER, LogoMark } from "../theme";

export const metadata: Metadata = {
  title: "Contact | Quexlab Technologies",
  description: "Get in touch with Quexlab Technologies in Kumasi, Ghana.",
  alternates: {
    canonical: "https://quexlabwebsite.vercel.app/contact",
  },
  openGraph: {
    title: "Contact | Quexlab Technologies",
    description: "Get in touch with Quexlab Technologies in Kumasi, Ghana.",
    url: "https://quexlabwebsite.vercel.app/contact",
    siteName: "Quexlab Technologies",
    locale: "en_GH",
    type: "website",
  },
};

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1LSCMvVYz3/",
    Icon: ThumbsUp,
    color: "#1877F2",
    bg: "#1877F21F",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@quexlabtechnologies?si=H_036ByQJ_pc-WJt",
    Icon: CirclePlay,
    color: "#FF0000",
    bg: "#FF00001F",
  },
  {
    label: "Twitter",
    href: "https://x.com/kofiagya20000",
    Icon: AtSign,
    color: INK,
    bg: `${INK}14`,
  },
];

export default function Contact() {
  return (
    <div
      className="relative flex h-[100dvh] w-screen flex-col overflow-hidden"
      style={{ background: PAPER, color: INK }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 opacity-[0.04] sm:-right-16 sm:-top-16"
      >
        <LogoMark size={420} />
      </div>

      <Nav />

      <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 text-center sm:px-10">
        <p
          className="text-xs font-semibold uppercase tracking-[0.3em]"
          style={{ color: LEAF }}
        >
          Say hello
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
          Let&apos;s work together
        </h2>
        <p
          className="mt-3 max-w-sm text-sm leading-relaxed sm:text-lg"
          style={{ color: INK_SOFT }}
        >
          Have a project in mind, or want to know more about what we do?
        </p>

        <div
          className="relative mt-8 overflow-hidden rounded-2xl px-7 py-6 shadow-[0_20px_45px_-20px_rgba(11,18,32,0.18)] sm:px-10"
          style={{ background: "#FFFFFF", border: `1px solid ${LEAF}26` }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full"
            style={{ background: `${LEAF}0f` }}
          />
          <div className="relative flex items-start gap-5 sm:gap-7">
            <div className="flex flex-col items-center gap-2">
              <EmailLink
                iconOnly
                iconColor={LEAF}
                iconBg={`${LEAF}1F`}
                className="flex h-12 w-12 items-center justify-center rounded-full shadow-[0_8px_18px_-8px_rgba(47,168,79,0.5)] transition-all duration-200 hover:-translate-y-0.5"
              />
              <span className="text-[11px] font-medium" style={{ color: INK_SOFT }}>
                Email
              </span>
            </div>
            {SOCIALS.map(({ label, href, Icon, color, bg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex flex-col items-center gap-2"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: bg, boxShadow: `0 8px 18px -8px ${color}55` }}
                >
                  <Icon size={18} color={color} />
                </span>
                <span className="text-[11px] font-medium" style={{ color: INK_SOFT }}>
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs" style={{ color: "#A3ABB5" }}>
          © {new Date().getFullYear()} Quexlab Technologies. Kumasi, Ghana.
        </p>
      </div>
    </div>
  );
}
