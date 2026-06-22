import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "BOMBANANA! Guide — The Ultimate Bomb Defusal Strategy Site",
    template: "%s | BOMBANANA! Guide",
  },
  description:
    "The complete guide to BOMBANANA! — master every monkey role, bomb module, and defusal strategy. 3-player co-op chaos explained.",
  keywords: [
    "BOMBANANA",
    "BOMBANANA guide",
    "BOMBANANA攻略",
    "bomb defusal game",
    "co-op game guide",
    "Lefto Studio",
    "Steam game guide",
  ],
  openGraph: {
    title: "BOMBANANA! Guide — The Ultimate Bomb Defusal Strategy Site",
    description:
      "Master every monkey role, bomb module, and defusal strategy in BOMBANANA!",
    type: "website",
    locale: "en_US",
    siteName: "BOMBANANA! Guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOMBANANA! Guide",
    description:
      "Master every monkey role, bomb module, and defusal strategy in BOMBANANA!",
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
      <body className="min-h-screen bg-[var(--color-cream-paper)] text-[var(--color-forest-ink)] antialiased">
        {children}
      </body>
    </html>
  );
}
