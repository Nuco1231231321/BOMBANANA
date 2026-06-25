import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import { SiteJsonLd } from "@/components/layout/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
  weight: ["400"],
});

const GA_MEASUREMENT_ID = "G-GW4NH81201";

export const metadata: Metadata = {
  metadataBase: new URL("https://bombanana.online"),
  title: {
    default: "BOMBANANA! Guide - Bomb Defusal Strategy",
    template: "%s",
  },
  description:
    "The complete BOMBANANA! guide for monkey roles, bomb modules, communication, and 3-player co-op defusal strategy.",
  keywords: [
    "BOMBANANA",
    "BOMBANANA guide",
    "BOMBANANA walkthrough",
    "bomb defusal game",
    "co-op game guide",
    "Lefto Studio",
    "Steam game guide",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BOMBANANA! Guide",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@bombananaguide",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "YnhBaJq08Uuwd0KD4EgBrFeSuYjanoYxTuET_8S65hU",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-3114396640600943"
        />
      </head>
      <body className="min-h-screen bg-[var(--color-cream-paper)] text-[var(--color-forest-ink)] antialiased">
        <SiteJsonLd />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3114396640600943"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
