import type { Metadata } from "next";
import Nav from "../components/Nav";
import { INK, INK_SOFT, LEAF, PAPER } from "../theme";

export const metadata: Metadata = {
  title: "Privacy Policy | Quexlab Technologies",
  description: "How Quexlab Technologies handles website visits, analytics, contact information, and browser storage.",
  alternates: { canonical: "https://quexlabwebsite.vercel.app/privacy" },
};

export default function PrivacyPage() {
  return (
    <div style={{ background: PAPER, color: INK }}>
      <Nav />
      <main className="mx-auto max-w-4xl px-5 py-14 sm:px-10 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: LEAF }}>Privacy</p>
        <h1 className="mt-5 text-5xl leading-[0.95] sm:text-6xl">A clear explanation of what happens on this site.</h1>
        <p className="mt-6 text-sm" style={{ color: INK_SOFT }}>Last updated: September 11, 2026</p>

        <div className="mt-12 grid gap-10 text-base leading-7 sm:mt-16">
          <section><h2 className="text-3xl">What we collect</h2><p className="mt-3" style={{ color: INK_SOFT }}>Quexlab may receive information you choose to send through the contact form, such as your name, email address, project details, and message. We use that information only to respond to your inquiry.</p></section>
          <section><h2 className="text-3xl">Analytics and advertising</h2><p className="mt-3" style={{ color: INK_SOFT }}>If you accept optional tracking, this site may load Google Ads measurement and Vercel Analytics. These tools can provide information such as pages visited, device information, approximate location, and how you reached the site. If you reject optional tracking, these tools are not loaded by this website.</p></section>
          <section><h2 className="text-3xl">Essential browser storage</h2><p className="mt-3" style={{ color: INK_SOFT }}>The site uses local storage and session storage for essential functionality. The visitor counter uses these features to remember the latest count and avoid counting repeated navigation in the same browser session. This information is not used to identify you personally.</p></section>
          <section><h2 className="text-3xl">Third-party links</h2><p className="mt-3" style={{ color: INK_SOFT }}>The site links to services such as Google Play, the App Store, WhatsApp, and social networks. Those services have their own privacy policies and may collect information when you visit them.</p></section>
          <section><h2 className="text-3xl">Contact</h2><p className="mt-3" style={{ color: INK_SOFT }}>For privacy questions, email <a className="font-bold underline" href="mailto:agriquex@gmail.com">agriquex@gmail.com</a>.</p></section>
        </div>
      </main>
    </div>
  );
}
