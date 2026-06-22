"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Banana, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { getNav, type Locale } from "@/lib/i18n";

interface HeaderProps {
  locale?: Locale;
}

const NAV_ITEMS = [
  { href: "/roles", key: "roles" as const },
  { href: "/modules", key: "modules" as const },
  { href: "/beginners", key: "beginners" as const },
  { href: "/communication", key: "communication" as const },
  { href: "/free-mode", key: "freeMode" as const },
  { href: "/levels", key: "levels" as const },
  { href: "/faq", key: "faq" as const },
  { href: "/troubleshooting", key: "troubleshooting" as const },
];

export default function Header({ locale = "en" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const nav = getNav(locale);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300",
        scrolled && "pt-2"
      )}
    >
      {/* Floating pill nav */}
      <nav
        className={cn(
          "flex items-center w-full max-w-[1200px] h-14 px-4",
          "bg-[var(--color-cream-paper)]",
          "border border-[var(--color-pencil-gray)]",
          "rounded-2xl",
          "shadow-[var(--shadow-nav)]",
          "transition-all duration-300",
          scrolled && "h-12 shadow-[var(--shadow-subtle-2)]"
        )}
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 mr-4 group"
          aria-label="BOMBANANA! Guide Home"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--color-banana-yellow)] text-[var(--color-forest-ink)] group-hover:scale-110 transition-transform">
            <Banana className="w-5 h-5" />
          </span>
          <span className="hidden sm:block font-bold text-[15px] text-[var(--color-forest-ink)] tracking-tight">
            BOMBANANA!
          </span>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "px-3 py-1.5 rounded-md text-sm font-medium",
                "text-[var(--color-forest-ink)] opacity-70",
                "hover:opacity-100 hover:bg-[var(--color-whisper-gray)]",
                "transition-all duration-200"
              )}
            >
              {nav[item.key]}
            </Link>
          ))}
        </div>

        {/* ── Right Actions ── */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Locale switcher placeholder — ready for i18n */}
          <button
            className={cn(
              "hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md",
              "text-xs font-medium text-[var(--color-forest-ink)] opacity-60",
              "hover:opacity-100 hover:bg-[var(--color-whisper-gray)]",
              "transition-all duration-200"
            )}
            aria-label="Switch language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{locale.toUpperCase()}</span>
          </button>

          {/* CTA */}
          <Link
            href="/beginners"
            className={cn(
              "hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md",
              "bg-[var(--color-forest-ink)] text-[var(--color-cream-paper)]",
              "text-sm font-medium",
              "hover:opacity-90 transition-opacity",
              "shadow-[var(--shadow-subtle)]"
            )}
          >
            {locale === "zh" ? "开始玩" : locale === "ja" ? "はじめる" : "Start"}
            <span aria-hidden="true">→</span>
          </Link>

          {/* ── Mobile Menu Toggle ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-md hover:bg-[var(--color-whisper-gray)] transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-[var(--color-forest-ink)]" />
            ) : (
              <Menu className="w-5 h-5 text-[var(--color-forest-ink)]" />
            )}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-[var(--color-cream-paper)] z-40 lg:hidden",
          "flex flex-col items-center justify-start pt-12 gap-2",
          "transition-all duration-300 ease-in-out",
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        {NAV_ITEMS.map((item, i) => (
          <Link
            key={item.key}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "text-xl font-semibold text-[var(--color-forest-ink)] py-3 px-8",
              "hover:bg-[var(--color-banana-yellow)] rounded-xl transition-colors",
              "opacity-0",
              mobileOpen && "animate-fade-in-up"
            )}
            style={{ animationDelay: mobileOpen ? `${i * 60}ms` : "0ms" }}
          >
            {nav[item.key]}
          </Link>
        ))}
        <Link
          href="/beginners"
          onClick={() => setMobileOpen(false)}
          className={cn(
            "mt-6 inline-flex items-center gap-2 px-8 py-3 rounded-xl",
            "bg-[var(--color-forest-ink)] text-[var(--color-cream-paper)]",
            "text-lg font-semibold",
            "opacity-0",
            mobileOpen && "animate-fade-in-up"
          )}
          style={{ animationDelay: mobileOpen ? `${NAV_ITEMS.length * 60}ms` : "0ms" }}
        >
          {locale === "zh" ? "🎮 开始游戏" : locale === "ja" ? "🎮 はじめる" : "🎮 Get Started"}
        </Link>
      </div>
    </header>
  );
}
