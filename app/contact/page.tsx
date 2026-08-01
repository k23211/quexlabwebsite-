import type { Metadata } from "next";
import { CirclePlay, Globe2, MessagesSquare } from "lucide-react";
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
    Icon: Globe2,
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
    Icon: MessagesSquare,
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
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Let&apos;s work together
        </h2>
        <p
          className="mt-3 max-w-sm text-sm leading-relaxed sm:text-lg"
          style={{ color: INK_SOFT }}
        >
          Have a project in mind, or want to know more about what we do?
        </p>

        <div className="mt-8 flex items-center gap-4">
          <EmailLink
            iconOnly
            iconColor={LEAF}
            iconBg={`${LEAF}1F`}
            className="flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-150 hover:scale-110"
          />
          {SOCIALS.map(({ label, href, Icon, color, bg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-150 hover:scale-110"
              style={{ background: bg }}
            >
              <Icon size={18} color={color} />
            </a>
          ))}
        </div>

        <p className="mt-8 text-xs" style={{ color: "#A3ABB5" }}>
          © {new Date().getFullYear()} Quexlab Technologies. Kumasi, Ghana.
        </p>
      </div>
    </div>
  );
}
