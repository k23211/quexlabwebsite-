import type { Metadata } from "next";
import { SiFacebook, SiYoutube, SiX, SiWhatsapp } from "react-icons/si";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import Nav from "../components/Nav";
import EmailLink from "../components/EmailLink";
import { FOREST, INK, INK_SOFT, LEAF, PAPER } from "../theme";

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
    label: "X",
    href: "https://x.com/kofiagya20000",
    Icon: SiX,
    color: INK,
    bg: `${INK}14`,
  },
];

export default function Contact() {
  return (
    <div
      className="relative flex min-h-[100dvh] w-screen flex-col"
      style={{ background: PAPER, color: INK }}
    >
      <Nav />

      <div className="relative flex flex-1 flex-col px-6 py-12 sm:px-10 sm:py-16">
        <section className="mx-auto w-full max-w-6xl pb-10 sm:pb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: LEAF }}>
            Start a conversation
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[0.95] sm:text-6xl">
            Let&apos;s build something useful.
          </h1>
          <p
            className="mt-5 max-w-2xl text-base leading-relaxed sm:text-lg"
            style={{ color: INK_SOFT }}
          >
            Have a project in mind, a question about our products, or an idea
            worth exploring? Choose a channel and tell us what you are working
            on.
          </p>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-8 border-t pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border-t-2 border-[var(--leaf)] pt-5">
            <Mail size={20} style={{ color: LEAF }} />
            <h2 className="mt-5 text-lg font-bold">Email</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: INK_SOFT }}>
              For project details, partnerships, and general questions.
            </p>
            <EmailLink
              iconOnly
              iconColor={FOREST}
              iconBg={`${LEAF}1f`}
              className="mt-5 flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-200 hover:-translate-y-0.5"
            />
          </div>

          <div className="border-t-2 border-[var(--leaf)] pt-5">
            <MessageCircle size={20} style={{ color: "#25D366" }} />
            <h2 className="mt-5 text-lg font-bold">WhatsApp</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: INK_SOFT }}>
              Reach the team directly through either of our WhatsApp lines.
            </p>
            <div className="mt-5 flex gap-4">
              {WHATSAPP_NUMBERS.map((num, i) => (
                <a key={num.href} href={num.href} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp line ${i + 1}`} title="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "#25D3661F" }}>
                  <SiWhatsapp size={17} color="#25D366" />
                </a>
              ))}
            </div>
          </div>

          <div className="border-t-2 border-[var(--leaf)] pt-5">
            <ArrowUpRight size={20} style={{ color: LEAF }} />
            <h2 className="mt-5 text-lg font-bold">Follow along</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: INK_SOFT }}>
              See what we are building and share in the work behind the products.
            </p>
            <div className="mt-5 flex gap-4">
              {SOCIALS.map(({ label, href, Icon, color, bg }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: bg }}>
                  <Icon size={16} color={color} />
                </a>
              ))}
            </div>
          </div>

          <div className="border-t-2 border-[var(--leaf)] pt-5">
            <h2 className="text-lg font-bold">What to include</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: INK_SOFT }}>
              A little context helps us understand your idea and respond with something useful.
            </p>
            <p className="mt-5 text-sm font-semibold" style={{ color: FOREST }}>
              Your goal, audience, and timeline
            </p>
          </div>
        </section>

        <p className="mx-auto mt-12 w-full max-w-6xl text-xs" style={{ color: "#A3ABB5" }}>
          © {new Date().getFullYear()} Quexlab Technologies.
        </p>
      </div>
    </div>
  );
}
