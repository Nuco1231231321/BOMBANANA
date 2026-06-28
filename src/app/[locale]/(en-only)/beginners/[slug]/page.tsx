import { notFound } from "next/navigation";
import ContentLayout from "@/components/layout/ContentLayout";
import { getContentComponent, getRegistrySlugs } from "@/content/registry";
import type { Metadata } from "next";
import { buildArticleJsonLd, buildBreadcrumbJsonLd, buildBreadcrumbs } from "@/lib/seo";

interface Props { params: Promise<{ slug: string }>; }

const META: Record<string, { title: string; description: string }> = {
  "how-to-play": { title: "BOMBANANA! First Session Guide", description: "Step-by-step walkthrough for your first session. From launching to defusing your first bomb." },
  "first-session-checklist": { title: "BOMBANANA! Setup Checklist", description: "Printable pre-game checklist: system setup, role assignment, communication prep." },
  "beginner-mistakes": { title: "BOMBANANA! Beginner Mistakes", description: "The most common new-player errors and exactly how to fix each one." },
};

export async function generateStaticParams() {
  return getRegistrySlugs("beginners").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return META[slug] ?? { title: "Beginner's Guide" };
}

export default async function BeginnerSubPage({ params }: Props) {
  const { slug } = await params;
  const Component = getContentComponent("beginners", slug);
  if (!Component) notFound();
  const meta = META[slug] ?? { title: "Beginner's Guide", description: "BOMBANANA! beginner guide." };
  const path = `/beginners/${slug}`;

  return (
    <ContentLayout
      prose={false}
      contentClassName="max-w-[860px]"
      breadcrumbs={buildBreadcrumbs("en", [
        { label: "Home", href: "/" },
        { label: "Beginners", href: "/beginners" },
        { label: meta.title, href: path },
      ])}
      jsonLd={
        <>
          {buildArticleJsonLd({ meta, locale: "en", path })}
          {buildBreadcrumbJsonLd("en", [
            { label: "Home", href: "/" },
            { label: "Beginners", href: "/beginners" },
            { label: meta.title, href: path },
          ])}
        </>
      }
    >
      <Component />
    </ContentLayout>
  );
}
