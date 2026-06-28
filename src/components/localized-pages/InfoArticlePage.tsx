import type { ReactNode } from "react";
import NextLink from "next/link";
import { ArrowRight, CalendarDays, ExternalLink } from "lucide-react";
import ContentLayout from "@/components/layout/ContentLayout";
import { PageHero } from "@/components/guide/PageHero";
import { FAQSection } from "@/components/guide/FAQSection";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { buildArticleJsonLd, buildBreadcrumbJsonLd, buildBreadcrumbs } from "@/lib/seo";

export interface InfoTable {
  headers: string[];
  rows: ReactNode[][];
}

export interface RelatedLink {
  href: string;
  label: string;
  external?: boolean;
  locale?: Locale;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleSection {
  title: string;
  body: ReactNode;
}

export interface InfoArticlePageProps {
  locale: Locale;
  path: string;
  eyebrow: string;
  title: string;
  intro: string;
  cta: {
    label: string;
    href: string;
    external?: boolean;
  };
  updated: string;
  hero: {
    src: string;
    alt: string;
  };
  quickAnswerTitle: string;
  quickAnswer: ReactNode;
  table: InfoTable;
  sections: ArticleSection[];
  faqs: FAQItem[];
  relatedLinks: RelatedLink[];
}

export default function InfoArticlePage({
  locale,
  path,
  eyebrow,
  title,
  intro,
  cta,
  updated,
  hero,
  quickAnswerTitle,
  quickAnswer,
  table,
  sections,
  faqs,
  relatedLinks,
}: InfoArticlePageProps) {
  const pagePathLocale = locale === "pt" ? locale : undefined;
  const breadcrumbs = buildBreadcrumbs(locale, [
    { label: "Home", href: "/" },
    { label: title, href: path },
  ]);
  const meta = {
    title,
    description: intro,
    updated,
  };

  return (
    <ContentLayout
      locale={locale}
      prose={false}
      contentClassName="max-w-[920px]"
      breadcrumbs={breadcrumbs}
      jsonLd={
        <>
          {buildArticleJsonLd({ meta, locale, path, imageUrl: hero.src })}
          {buildBreadcrumbJsonLd(locale, [
            { label: "Home", href: "/" },
            { label: title, href: path },
          ])}
        </>
      }
    >
      <PageHero src={hero.src} alt={hero.alt} />
      <header className="mb-8 border-b border-[var(--color-pencil-gray)] pb-8">
        <p className="mb-3 font-[family-name:var(--font-roboto-mono)] text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-terracotta)]">
          {eyebrow}
        </p>
        <h1 className="font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(2.3rem,5vw,4rem)] font-extrabold leading-[1.02] tracking-[0.02em] text-[var(--color-forest-ink)]">
          {title}
        </h1>
        <p className="mt-5 max-w-[720px] text-lg leading-[1.7] text-[var(--color-forest-ink)]/70">
          {intro}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {cta.external ? (
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--color-forest-ink)] px-5 py-3 text-sm font-bold text-[var(--color-cream-paper)] transition-opacity hover:opacity-90"
            >
              {cta.label}
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <Link
              href={cta.href as never}
              locale={pagePathLocale}
              className="inline-flex items-center gap-2 rounded-md bg-[var(--color-forest-ink)] px-5 py-3 text-sm font-bold text-[var(--color-cream-paper)] transition-opacity hover:opacity-90"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
          <span className="inline-flex items-center gap-2 rounded-md border border-[var(--color-pencil-gray)] px-3 py-2 text-xs font-medium text-[var(--color-forest-ink)]/60">
            <CalendarDays className="h-3.5 w-3.5" />
            {updated}
          </span>
        </div>
      </header>

      <nav
        aria-label="On this page"
        className="mb-8 rounded-xl border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-4"
      >
        <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-terracotta)]">
          On this page
        </h2>
        <div className="flex flex-wrap gap-2">
          <a href="#direct-answer" className="rounded-md border border-[var(--color-pencil-gray)] bg-[var(--color-whisper-gray)] px-3 py-2 text-sm font-semibold text-[var(--color-forest-ink)] transition-colors hover:border-[var(--color-banana-yellow)]">
            Direct answer
          </a>
          {sections.map((section) => {
            const id = section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
            return (
              <a
                key={section.title}
                href={`#${id}`}
                className="rounded-md border border-[var(--color-pencil-gray)] bg-[var(--color-whisper-gray)] px-3 py-2 text-sm font-semibold text-[var(--color-forest-ink)] transition-colors hover:border-[var(--color-banana-yellow)]"
              >
                {section.title}
              </a>
            );
          })}
        </div>
      </nav>

      <section id="direct-answer" className="my-8 rounded-xl border border-[var(--color-banana-yellow)] bg-[var(--color-banana-yellow)]/10 p-5">
        <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-forest-ink)]">
          {quickAnswerTitle}
        </h2>
        <div className="text-sm leading-7 text-[var(--color-forest-ink)]/75 [&_strong]:text-[var(--color-forest-ink)]">
          {quickAnswer}
        </div>
      </section>

      <ArticleTable table={table} />

      {sections.map((section) => (
        <section
          key={section.title}
          id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}
          className="mt-10 scroll-mt-32"
        >
          <h2 className="mb-4 text-2xl font-bold leading-tight text-[var(--color-forest-ink)]">
            {section.title}
          </h2>
          <div className="space-y-4 text-[var(--color-forest-ink)]/72 [&_a]:font-semibold [&_a]:text-[var(--color-terracotta)] [&_li]:leading-7 [&_p]:leading-7">
            {section.body}
          </div>
        </section>
      ))}

      <section className="mt-12 border-t border-[var(--color-pencil-gray)] pt-8">
        <h2 className="mb-4 text-xl font-bold text-[var(--color-forest-ink)]">
          Internal links
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {relatedLinks.map((link) => {
            const className = "rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-4 text-sm font-semibold text-[var(--color-forest-ink)] transition-colors hover:border-[var(--color-banana-yellow)]";

            return link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {link.label}
              </a>
            ) : link.locale === "en" ? (
              <NextLink
                key={link.href}
                href={link.href}
                className={className}
              >
                {link.label}
              </NextLink>
            ) : (
              <Link
                key={link.href}
                href={link.href as never}
                locale={getInfoLinkLocale(locale, link.locale)}
                className={className}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </section>

      <FAQSection
        title={locale === "pt" ? "FAQ" : "Frequently Asked Questions"}
        faqs={faqs}
      />
    </ContentLayout>
  );
}

function getInfoLinkLocale(pageLocale: Locale, linkLocale?: Locale) {
  const targetLocale = linkLocale ?? pageLocale;
  return targetLocale === "pt" ? targetLocale : undefined;
}

function ArticleTable({ table }: { table: InfoTable }) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)]">
      <table className="w-full min-w-[720px] text-sm">
        <thead>
          <tr className="border-b border-[var(--color-pencil-gray)] bg-[var(--color-whisper-gray)]">
            {table.headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 text-left font-bold text-[var(--color-forest-ink)]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-[var(--color-pencil-gray)] last:border-0">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 leading-6 text-[var(--color-forest-ink)]/72">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
