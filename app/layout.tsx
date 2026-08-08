import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import VisitorCounter from "./components/VisitorCounter";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
        <VisitorCounter />
        <Analytics />
      </body>
    </html>
  );
}
