import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import VisitorCounter from "./components/VisitorCounter";
import { Analytics } from "@vercel/analytics/next";

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
    "Quexlab Technologies is a software studio in Kumasi, Ghana, building mobile apps and digital products rooted in Ghanaian life and culture — from agricultural data platforms to games inspired by Adinkra symbolism.",
  keywords: [
    "Quexlab",
    "Quexlab Technologies",
    "software studio Ghana",
    "Kumasi software company",
    "mobile app development Ghana",
    "Adinkra",
  ],
  openGraph: {
    title: "Quexlab Technologies",
    description:
      "Software and digital products, designed and built for Ghana.",
    url: "https://quexlabwebsite.vercel.app",
    siteName: "Quexlab Technologies",
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quexlab Technologies",
    description:
      "Software and digital products, designed and built for Ghana.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};
import Footer from "./components/Footer";

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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18372099949"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18372099949');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <main className="flex flex-col flex-1">{children}</main>
        <Footer />
        <VisitorCounter />
        <Analytics />
      </body>
    </html>
  );
}
