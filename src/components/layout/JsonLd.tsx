/**
 * JSON-LD structured data for Google rich results.
 * Provides Article / HowTo / FAQPage / BreadcrumbList schemas.
 */
import type { ContentMeta } from "@/lib/content";

interface ArticleJsonLdProps {
  meta: ContentMeta;
  slug: string;
  section: string;
  imageUrl?: string;
}

export function ArticleJsonLd({ meta, slug, section, imageUrl }: ArticleJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    image: imageUrl || "https://bombanana.online/images/ui/game-header.jpg",
    datePublished: meta.date,
    dateModified: meta.updated || meta.date,
    author: { "@type": "Organization", name: "BOMBANANA! Guide" },
    publisher: { "@type": "Organization", name: "BOMBANANA! Guide" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://bombanana.online/${section}/${slug}` },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

export function FAQPageJsonLd({ questions }: { questions: { question: string; answer: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://bombanana.online${item.href}`,
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

export function SiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BOMBANANA! Guide",
    url: "https://bombanana.online",
    description: "The ultimate strategy guide for BOMBANANA!, the chaotic 3-player co-op bomb defusal game.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bombanana.online/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}
