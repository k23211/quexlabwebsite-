import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import VisitorCounter from "./components/VisitorCounter";
import ConsentManager from "./components/ConsentManager";
import Footer from "./components/Footer";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Quexlab Technologies | Software Studio in Kumasi, Ghana",
  description:
    "Quexlab Technologies is a software studio in Kumasi, Ghana, building mobile apps, websites, games, and agriculture technology, including Agriquex Hub and Adinkra Match.",
  keywords: [
    "Quexlab",
    "Quexlab Technologies",
    "software studio Ghana",
    "Kumasi software company",
    "mobile app development Ghana",
    "website development Ghana",
    "agriculture technology Ghana",
    "Agriquex Hub",
    "Adinkra Match",
    "Adinkra",
  ],
  openGraph: {
    title: "Quexlab Technologies",
    description:
      "Innovation for a smarter tomorrow. Software, mobile apps, websites, games, and agriculture technology from Quexlab Technologies in Ghana.",
    url: "https://quexlabwebsite.vercel.app",
    siteName: "Quexlab Technologies",
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quexlab Technologies",
    description:
      "Innovation for a smarter tomorrow. Software, mobile apps, websites, games, and agriculture technology from Ghana.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className="flex flex-col flex-1">{children}</main>
        <Footer />
        <VisitorCounter />
        <ConsentManager />
      </body>
    </html>
  );
}
