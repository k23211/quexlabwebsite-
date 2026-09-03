import type { Metadata } from "next";
import { SiFacebook, SiYoutube, SiX, SiWhatsapp } from "react-icons/si";
import Nav from "../components/Nav";
import EmailLink from "../components/EmailLink";
import { INK, INK_SOFT, LEAF, PAPER } from "../theme";

export const metadata: Metadata = {
  title: "Contact | Quexlab Technologies",
  description: "Get in touch with Quexlab Technologies.",
  alternates: {
    canonical: "https://quexlabwebsite.vercel.app/contact",
  },
  openGraph: {
    title: "Contact | Quexlab Technologies",
    description: "Get in touch with Quexlab Technologies.",
    url: "https://quexlabwebsite.vercel.app/contact",
    siteName: "Quexlab Technologies",
    locale: "en_US",
    type: "website",
  },
};

const WHATSAPP_NUMBERS = [
  { display: "+233 55 473 7934", href: "https://wa.me/233554737934" },
  { display: "+233 55 868 5411", href: "https://wa.me/233558685411" },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1LSCMvVYz3/",
    Icon: SiFacebook,
    color: "#1877F2",
    bg: "#1877F21F",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@quexlabtechnologies?si=H_036ByQJ_pc-WJt",
    Icon: SiYoutube,
    color: "#FF0000",
    bg: "#FF00001F",
  },
  {
    label: "Twitter",
    href: "https://x.com/kofiagya20000",
    Icon: SiX,
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
      <Nav />

      <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 text-center sm:px-10">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Let&apos;s work together
          </h2>
          <p
            className="mt-3 max-w-sm text-sm leading-relaxed sm:text-lg"
            style={{ color: INK_SOFT }}
          >
            Have a project in mind, or want to know more about what we do?
          </p>
        </div>

        <div
          className="relative mt-8 overflow-hidden rounded-xl px-7 py-6 sm:px-10"
          style={{
            background: "#FFFFFF",
            border: `1px solid ${LEAF}26`,
          }}
        >
          <div className="flex flex-wrap items-start justify-center gap-5 sm:gap-7">
            <div className="flex flex-col items-center gap-2">
              <EmailLink
                iconOnly
                iconColor={LEAF}
                iconBg={`${LEAF}1F`}
                className="flex h-12 w-12 items-center justify-center rounded-full"
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
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ background: bg }}
                >
                  <Icon size={18} color={color} />
                </span>
                <span className="text-[11px] font-medium" style={{ color: INK_SOFT }}>
                  {label}
                </span>
              </a>
            ))}
          </div>

          {/* WhatsApp — icon-only tap targets, same treatment as the row
              above, no raw digits ever shown */}
          <div
            className="mt-6 border-t pt-5"
            style={{ borderColor: `${LEAF}1f` }}
          >
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: INK_SOFT }}>
              WhatsApp us
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7">
              {WHATSAPP_NUMBERS.map((num, i) => (
                <a
                  key={num.href}
                  href={num.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp line ${i + 1}`}
                  title="WhatsApp"
                  className="flex flex-col items-center gap-2"
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ background: "#25D3661F" }}
                  >
                    <SiWhatsapp size={18} color="#25D366" />
                  </span>
                  <span className="text-[11px] font-medium" style={{ color: INK_SOFT }}>
                    Line {i + 1}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <p
          className="mt-8 text-xs"
          style={{ color: "#A3ABB5" }}
        >
          © {new Date().getFullYear()} Quexlab Technologies.
        </p>
      </div>
    </div>
  );
}
