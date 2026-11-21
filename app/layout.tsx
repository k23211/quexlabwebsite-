import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import VisitorCounter from "./components/VisitorCounter";
import ConsentManager from "./components/ConsentManager";
import Footer from "./components/Footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      "An independent software studio in Ghana building mobile apps, websites, games, and digital products.",
    url: "https://quexlabwebsite.vercel.app",
    siteName: "Quexlab Technologies",
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quexlab Technologies",
    description:
      "An independent software studio in Ghana building mobile apps, websites, games, and digital products.",
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
      className={`${geist.variable} h-full antialiased`}
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
