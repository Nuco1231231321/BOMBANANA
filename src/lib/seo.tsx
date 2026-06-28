import type { ContentMeta } from "@/lib/content";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
} from "@/components/layout/JsonLd";
import type { Locale } from "@/i18n/routing";

type BreadcrumbItem = {
  label: string;
  href: string;
};

export function buildBreadcrumbs(
  locale: Locale,
  items: BreadcrumbItem[],
) {
  const localePrefix = locale === "pt" ? "/pt" : "";

  return items.map((item) => ({
    label: item.label,
    href: `${localePrefix}${item.href}`,
  }));
}

export function buildArticleJsonLd(props: {
  meta: ContentMeta;
  locale: Locale;
  path: string;
  imageUrl?: string;
}) {
  const localePrefix = props.locale === "pt" ? "/pt" : "";
  const path =
    props.path === "/" ? localePrefix || "/" : `${localePrefix}${props.path}`;

  return (
    <ArticleJsonLd
      meta={props.meta}
      path={path}
      imageUrl={props.imageUrl}
    />
  );
}

export function buildBreadcrumbJsonLd(
  locale: Locale,
  items: BreadcrumbItem[],
) {
  return (
    <BreadcrumbJsonLd
      items={buildBreadcrumbs(locale, items).map((item) => ({
        name: item.label,
        href: item.href,
      }))}
    />
  );
}
