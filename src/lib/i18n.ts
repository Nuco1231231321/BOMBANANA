/**
 * i18n infrastructure — ready for multi-language expansion.
 *
 * Supported locales: en, zh, ja
 * Default: en
 *
 * To add a new locale:
 * 1. Add it to SUPPORTED_LOCALES
 * 2. Create content directory: src/content/<locale>/
 * 3. Add navigation translations below
 */

export const SUPPORTED_LOCALES = ["en", "zh", "ja"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  ja: "日本語",
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  en: "🇬🇧",
  zh: "🇨🇳",
  ja: "🇯🇵",
};

/** Navigation translations keyed by locale */
export const NAV_TRANSLATIONS: Record<
  Locale,
  {
    home: string;
    roles: string;
    modules: string;
    levels: string;
    communication: string;
    freeMode: string;
    beginners: string;
    news: string;
  }
> = {
  en: {
    home: "Home",
    roles: "Roles",
    modules: "Modules",
    levels: "Levels",
    communication: "Communication",
    freeMode: "Free Mode",
    beginners: "Beginner's Guide",
    news: "News",
  },
  zh: {
    home: "首页",
    roles: "角色攻略",
    modules: "炸弹模块",
    levels: "关卡攻略",
    communication: "沟通技巧",
    freeMode: "自由模式",
    beginners: "新手指南",
    news: "最新动态",
  },
  ja: {
    home: "ホーム",
    roles: "役割",
    modules: "モジュール",
    levels: "レベル",
    communication: "コミュニケーション",
    freeMode: "フリーモード",
    beginners: "初心者ガイド",
    news: "ニュース",
  },
};

/** Get navigation labels for a locale */
export function getNav(locale: Locale) {
  return NAV_TRANSLATIONS[locale] || NAV_TRANSLATIONS.en;
}

/** Resolve locale from path or default to 'en' */
export function resolveLocale(segment?: string): Locale {
  if (segment && SUPPORTED_LOCALES.includes(segment as Locale)) {
    return segment as Locale;
  }
  return DEFAULT_LOCALE;
}
