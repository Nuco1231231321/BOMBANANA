import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pt"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  localeDetection: false,
  pathnames: {
    "/": "/",
    "/roles": "/roles",
    "/modules": "/modules",
    "/beginners": "/beginners",
    "/communication": "/communication",
    "/manual": "/manual",
    "/faq": "/faq",
    "/troubleshooting": "/troubleshooting",
    "/free-mode": "/free-mode",
    "/levels": "/levels",
    "/updates": "/updates",
    "/demo": {
      en: "/demo",
      pt: "/bombanana-demo",
    },
    "/release-date": {
      en: "/release-date",
      pt: "/preco-data-lancamento",
    },
    "/como-jogar-bombanana": {
      en: "/how-to-play-bombanana",
      pt: "/como-jogar-bombanana",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
