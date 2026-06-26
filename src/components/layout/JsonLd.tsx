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

interface HowToStep {
  name: string;
  text: string;
}

export function ModuleHowToJsonLd({
  moduleName,
  steps,
  totalTime,
  imageUrl,
}: {
  moduleName: string;
  steps: HowToStep[];
  totalTime?: string;
  imageUrl?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Solve the ${moduleName} in BOMBANANA!`,
    description: `Step-by-step guide for solving the ${moduleName} in BOMBANANA!, the 3-player co-op bomb defusal game.`,
    image: imageUrl || "https://bombanana.online/images/ui/game-header.jpg",
    ...(totalTime ? { totalTime } : {}),
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
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
    image: "https://bombanana.online/images/ui/game-header.jpg",
    description: "Complete BOMBANANA! strategy guide with manual rules, module walkthroughs, role guides, and communication tips for the 3-player co-op bomb defusal game.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://bombanana.online/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}
