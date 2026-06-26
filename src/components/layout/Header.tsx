"use client";

import { useEffect, useState } from "react";
import { Banana, Globe, Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface HeaderProps {
  locale?: Locale;
}

const NAV_ITEMS = [
  { href: "/roles", key: "roles", translated: false },
  { href: "/modules", key: "modules", translated: false },
  { href: "/beginners", key: "beginners", translated: false },
  { href: "/communication", key: "communication", translated: false },
  { href: "/manual", key: "manual", translated: false },
  { href: "/demo", key: "demo", translated: true },
  { href: "/release-date", key: "releaseDate", translated: true },
  { href: "/faq", key: "faq", translated: false },
] as const;

export default function Header({ locale }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentLocale = useLocale() as Locale;
  const activeLocale = locale ?? currentLocale;
  const pathname = usePathname();
  const nav = useTranslations("nav");
  const common = useTranslations("common");
  const switchLocale: Locale = activeLocale === "pt" ? "en" : "pt";
  const switchHref = getSwitchHref(pathname, activeLocale, switchLocale);
  const activePathLocale = activeLocale === "pt" ? activeLocale : undefined;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300",
        scrolled && "pt-2"
      )}
    >
      <nav
        className={cn(
          "flex h-14 w-full max-w-[1200px] items-center px-3 sm:px-4",
          "rounded-2xl border border-[var(--color-forest-ink)]/10 bg-[var(--color-panel-cream)]/86 backdrop-blur-xl",
          "shadow-[var(--shadow-nav)] transition-all duration-300",
          scrolled && "h-12 bg-[var(--color-panel-cream)]/94 shadow-[var(--shadow-subtle-2)]"
        )}
      >
        <Link
          href={"/" as never}
          locale={activePathLocale}
          className="group mr-4 flex shrink-0 items-center gap-2"
          aria-label="BOMBANANA! Guide Home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--color-forest-ink)]/10 bg-[var(--color-banana-yellow)] text-[var(--color-forest-ink)] shadow-[var(--shadow-subtle)] transition-transform group-hover:scale-110">
            <Banana className="h-5 w-5" />
          </span>
          <span className="hidden text-[15px] font-bold tracking-tight text-[var(--color-forest-ink)] sm:block">
            BOMBANANA!
          </span>
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.key}
                href={item.href as never}
                locale={item.translated ? activePathLocale : undefined}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-sm font-semibold",
                  "text-[var(--color-forest-ink)]/68",
                  "transition-all duration-200 hover:bg-[var(--color-banana-yellow)]/35 hover:text-[var(--color-forest-ink)]",
                  isActive && "bg-[var(--color-forest-ink)] text-[var(--color-cream-paper)] hover:bg-[var(--color-forest-ink)] hover:text-[var(--color-cream-paper)]"
                )}
              >
                {nav(item.key)}
              </Link>
            );
          })}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Link
            href={switchHref as never}
            locale={switchLocale}
            className={cn(
              "hidden items-center gap-1.5 rounded-lg px-2.5 py-1.5 sm:flex",
              "text-xs font-semibold text-[var(--color-forest-ink)]/58",
              "transition-all duration-200 hover:bg-[var(--color-banana-yellow)]/30 hover:text-[var(--color-forest-ink)]"
            )}
            aria-label={common("switchLanguage")}
          >
            <Globe className="h-3.5 w-3.5" />
            <span>{switchLocale === "pt" ? "PT-BR" : "EN"}</span>
          </Link>

          <Link
            href={"/beginners" as never}
            locale={activePathLocale}
            className={cn(
              "hidden items-center gap-1.5 rounded-lg px-4 py-1.5 sm:inline-flex",
              "bg-[var(--color-forest-ink)] text-[var(--color-cream-paper)]",
              "text-sm font-bold shadow-[var(--shadow-subtle)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-terracotta)]"
            )}
          >
            {common("start")}
            <span aria-hidden="true">-&gt;</span>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-[var(--color-banana-yellow)]/30 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-[var(--color-forest-ink)]" />
            ) : (
              <Menu className="h-5 w-5 text-[var(--color-forest-ink)]" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 top-[72px] z-40 flex flex-col items-center justify-start gap-2 bg-[var(--color-panel-cream)]/96 pt-12 backdrop-blur lg:hidden",
          "transition-all duration-300 ease-in-out",
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
          {NAV_ITEMS.map((item, index) => (
          <Link
            key={item.key}
            href={item.href as never}
            locale={item.translated ? activePathLocale : undefined}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "rounded-xl px-8 py-3 text-xl font-semibold text-[var(--color-forest-ink)]",
              "opacity-0 transition-colors hover:bg-[var(--color-banana-yellow)]",
              mobileOpen && "animate-fade-in-up"
            )}
            style={{ animationDelay: mobileOpen ? `${index * 60}ms` : "0ms" }}
          >
            {nav(item.key)}
          </Link>
        ))}
        <Link
          href={switchHref as never}
          locale={switchLocale}
          onClick={() => setMobileOpen(false)}
          className={cn(
            "mt-3 inline-flex items-center gap-2 rounded-xl border border-[var(--color-pencil-gray)] px-6 py-2 text-[var(--color-forest-ink)]",
            "opacity-0",
            mobileOpen && "animate-fade-in-up"
          )}
          style={{ animationDelay: mobileOpen ? `${NAV_ITEMS.length * 60}ms` : "0ms" }}
        >
          <Globe className="h-4 w-4" />
          {switchLocale === "pt" ? common("portuguese") : common("english")}
        </Link>
        <Link
          href={"/beginners" as never}
          locale={activePathLocale}
          onClick={() => setMobileOpen(false)}
          className={cn(
            "mt-6 inline-flex items-center gap-2 rounded-xl px-8 py-3",
            "bg-[var(--color-forest-ink)] text-lg font-semibold text-[var(--color-cream-paper)]",
            "opacity-0",
            mobileOpen && "animate-fade-in-up"
          )}
          style={{ animationDelay: mobileOpen ? `${(NAV_ITEMS.length + 1) * 60}ms` : "0ms" }}
        >
          {common("getStarted")}
        </Link>
      </div>
    </header>
  );
}

function getSwitchHref(pathname: string, locale: Locale, targetLocale: Locale) {
  if (targetLocale === "en") {
    if (pathname === "/bombanana-demo") return "/demo";
    if (pathname === "/preco-data-lancamento") return "/release-date";
    return "/";
  }

  if (locale === "en") {
    if (pathname === "/demo") return "/demo";
    if (pathname === "/release-date") return "/release-date";
  }

  return "/como-jogar-bombanana";
}
