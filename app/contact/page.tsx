import type { Metadata } from "next";
import Nav from "../components/Nav";
import EmailLink from "../components/EmailLink";
import { INK, INK_SOFT, PAPER } from "../theme";

export const metadata: Metadata = {
  title: "Contact | Quexlab Technologies",
  description: "Get in touch with Quexlab Technologies in Accra, Ghana.",
  alternates: {
    canonical: "https://quexlabwebsite.vercel.app/contact",
  },
  openGraph: {
    title: "Contact | Quexlab Technologies",
    description: "Get in touch with Quexlab Technologies in Accra, Ghana.",
    url: "https://quexlabwebsite.vercel.app/contact",
    siteName: "Quexlab Technologies",
    locale: "en_GH",
    type: "website",
  },
};

export default function Contact() {
  return (
    <div
      className="flex h-[100dvh] w-screen flex-col overflow-hidden"
      style={{ background: PAPER, color: INK }}
    >
      <Nav />
      <div className="flex flex-1 flex-col items-center justify-center overflow-hidden px-6 text-center sm:px-10">
        <h2 className="text-2xl font-bold sm:text-3xl">Let&apos;s work together</h2>
        <p className="mt-3 max-w-sm text-sm sm:text-lg" style={{ color: INK_SOFT }}>
          Have a project in mind, or want to know more about what we do?
        </p>
        <EmailLink
          className="mt-6 inline-block rounded-full px-6 py-2.5 text-sm sm:px-8 sm:py-3"
          style={{ border: `1.5px solid ${INK}`, color: INK }}
        />
        <p className="mt-10 text-xs" style={{ color: "#A3ABB5" }}>
          © {new Date().getFullYear()} Quexlab Technologies. Accra, Ghana.
        </p>
      </div>
    </div>
  );
}
