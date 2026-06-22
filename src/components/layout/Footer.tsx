import Link from "next/link";
import { Banana, Github, MessageCircle, Rss } from "lucide-react";
import { getNav, type Locale } from "@/lib/i18n";

interface FooterProps {
  locale?: Locale;
}

type NavKey = "roles" | "modules" | "levels" | "beginners" | "communication" | "freeMode" | "news";

interface FooterLinkItem {
  href: string;
  key?: NavKey;
  label?: string;
}

interface FooterSection {
  en: string;
  zh: string;
  ja: string;
  items: FooterLinkItem[];
}

const FOOTER_LINKS: Record<string, FooterSection> = {
  guides: {
    en: "Guides",
    zh: "攻略",
    ja: "ガイド",
    items: [
      { href: "/roles", key: "roles" },
      { href: "/modules", key: "modules" },
      { href: "/levels", key: "levels" },
      { href: "/beginners", key: "beginners" },
    ],
  },
  community: {
    en: "Community",
    zh: "社区",
    ja: "コミュニティ",
    items: [
      { href: "/communication", key: "communication" },
      { href: "/free-mode", key: "freeMode" },
      { href: "/news", key: "news" },
    ],
  },
  resources: {
    en: "Resources",
    zh: "资源",
    ja: "リソース",
    items: [
      { href: "https://store.steampowered.com/app/4747510/BOMBANANA_Demo/", label: "Steam Demo" },
      { href: "https://store.steampowered.com/app/4656000/BOMBANANA/", label: "Steam Full Game" },
      { href: "https://store.steampowered.com/search/?developer=Lefto%20Studio", label: "Developer" },
    ],
  },
};

export default function Footer({ locale = "en" }: FooterProps) {
  const nav = getNav(locale);

  return (
    <footer className="bg-[var(--color-surface-dark)] text-[var(--color-cream-paper)] mt-32">
      {/* Main footer */}
      <div className="container-page py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* ── Brand Column ── */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-banana-yellow)] text-[var(--color-forest-ink)] group-hover:scale-110 transition-transform">
                <Banana className="w-6 h-6" />
              </span>
              <span className="font-bold text-xl text-[var(--color-cream-paper)] tracking-tight">
                BOMBANANA!
              </span>
            </Link>
            <p className="text-sm text-[var(--color-pencil-gray)] max-w-xs leading-relaxed mt-3">
              {locale === "zh"
                ? "BOMBANANA! 最全面的中文攻略站。三只猴子的拆弹冒险 — 盲猴、聋猴、哑猴的终极合作指南。"
                : locale === "ja"
                  ? "BOMBANANA! の完全攻略ガイド。3匹の猿による爆弾解除 — 見ざる、言わざる、聞かざるの究極協力プレイ。"
                  : "The ultimate guide for BOMBANANA! Master the art of bomb defusal with your three-monkey crew — blind, deaf, and mute chaos."}
            </p>
          </div>

          {/* ── Guides ── */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-[var(--color-cream-paper)] uppercase tracking-wider">
              {FOOTER_LINKS.guides[locale] || FOOTER_LINKS.guides.en}
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.guides.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-pencil-gray)] hover:text-[var(--color-banana-yellow)] transition-colors"
                  >
                    {item.key ? nav[item.key] : item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Community ── */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-[var(--color-cream-paper)] uppercase tracking-wider">
              {FOOTER_LINKS.community[locale] || FOOTER_LINKS.community.en}
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.community.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-pencil-gray)] hover:text-[var(--color-banana-yellow)] transition-colors"
                  >
                    {item.key ? nav[item.key] : item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Resources ── */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-[var(--color-cream-paper)] uppercase tracking-wider">
              {FOOTER_LINKS.resources[locale] || FOOTER_LINKS.resources.en}
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.resources.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-pencil-gray)] hover:text-[var(--color-banana-yellow)] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-[rgba(255,255,255,0.08)]">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-pencil-gray)]">
            &copy; {new Date().getFullYear()} BOMBANANA! Guide.{" "}
            <span className="opacity-60">
              {locale === "zh"
                ? "独立的粉丝攻略站，与 Lefto Studio 无关。"
                : locale === "ja"
                  ? "Lefto Studio非公式のファンガイドです。"
                  : "An unofficial fan guide. Not affiliated with Lefto Studio."}
            </span>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Nuco1231231321/BOMBANANA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-pencil-gray)] hover:text-[var(--color-banana-yellow)] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-[var(--color-pencil-gray)] hover:text-[var(--color-banana-yellow)] transition-colors"
              aria-label="Discord"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-[var(--color-pencil-gray)] hover:text-[var(--color-banana-yellow)] transition-colors"
              aria-label="RSS Feed"
            >
              <Rss className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
