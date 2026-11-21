import type { Metadata } from "next";
import { SiFacebook, SiYoutube, SiX, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import Nav from "../components/Nav";
import EmailLink from "../components/EmailLink";
import InquiryForm from "../components/InquiryForm";
import { FOREST, INK, LEAF, PAPER } from "../theme";

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
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/agriquex-hub",
    Icon: FaLinkedin,
    color: "#0A66C2",
    bg: "#0A66C21F",
  },
];

const ICON_CIRCLE =
  "grid h-12 w-12 place-items-center rounded-full bg-paper text-forest";

export default function Contact() {
  return (
    <div style={{ background: PAPER, color: INK }}>
      <Nav />

      <div>
        <section className="shell reveal pb-10 pt-10 text-left sm:pb-14 sm:pt-16">
          <span className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-medium">
            Start a conversation
          </span>
          <h1 className="display mt-6 max-w-4xl">
            Let&apos;s build{" "}
            <span className="muted-text">something useful.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
            Have a project in mind, a question about our products, or an idea
            worth exploring? Choose a channel and tell us what you are working
            on.
          </p>
        </section>

        <section className="shell grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card flex flex-col p-7 text-left">
            <span className={ICON_CIRCLE}>
              <Mail size={20} />
            </span>
            <h2 className="mt-8 text-xl">Email</h2>
            <p className="mt-2 text-[15px] leading-7 text-ink-soft">
              For project details, partnerships, and general questions.
            </p>
            <div className="mt-auto flex gap-3 pt-8">
              <EmailLink
                iconOnly
                iconColor={FOREST}
                iconBg={`${LEAF}1f`}
                className="flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-200 hover:-translate-y-0.5"
              />
            </div>
          </div>

          <div className="card flex flex-col p-7 text-left">
            <span className={ICON_CIRCLE}>
              <MessageCircle size={20} />
            </span>
            <h2 className="mt-8 text-xl">WhatsApp</h2>
            <p className="mt-2 text-[15px] leading-7 text-ink-soft">
              Reach the team directly through either of our WhatsApp lines.
            </p>
            <div className="mt-auto flex gap-3 pt-8">
              {WHATSAPP_NUMBERS.map((num, i) => (
                <a
                  key={num.href}
                  href={num.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp line ${i + 1}`}
                  title="WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ background: "#25D3661F" }}
                >
                  <SiWhatsapp size={18} color="#25D366" />
                </a>
              ))}
            </div>
          </div>

          <div className="card flex flex-col p-7 text-left">
            <span className={ICON_CIRCLE}>
              <ArrowUpRight size={20} />
            </span>
            <h2 className="mt-8 text-xl">Follow along</h2>
            <p className="mt-2 text-[15px] leading-7 text-ink-soft">
              See what we are building and share in the work behind the
              products.
            </p>
            <div className="mt-auto flex gap-3 pt-8">
              {SOCIALS.map(({ label, href, Icon, color, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ background: bg }}
                >
                  <Icon size={17} color={color} />
                </a>
              ))}
            </div>
          </div>

          <div className="card-accent flex flex-col p-7 text-left">
            <h2 className="text-xl">What to include</h2>
            <p className="mt-2 text-[15px] leading-7 text-white/75">
              A little context helps us understand your idea and respond with
              something useful.
            </p>
            <p className="mt-auto pt-8">
              <span className="inline-flex rounded-full bg-white/15 px-3.5 py-2 text-sm font-medium">
                Your goal, audience, and timeline
              </span>
            </p>
          </div>
        </section>

        <section className="shell section">
          <div className="card grid gap-10 p-6 sm:p-10 lg:grid-cols-[0.7fr_1fr] lg:gap-16 lg:p-14">
            <div className="text-left">
              <span className="inline-flex rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium">
                Project inquiry
              </span>
              <h2 className="headline mt-6 max-w-md">
                Tell us{" "}
                <span className="muted">what you&rsquo;re working on.</span>
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-7 text-ink-soft">
                A little context helps us understand the opportunity and
                respond with something useful.
              </p>
            </div>
            <InquiryForm />
          </div>
        </section>

      </div>
    </div>
  );
}
