import { notFound } from "next/navigation";
import ContentLayout from "@/components/layout/ContentLayout";
import { getContentComponent, getRegistrySlugs } from "@/content/registry";
import type { Metadata } from "next";
import { buildArticleJsonLd, buildBreadcrumbJsonLd, buildBreadcrumbs } from "@/lib/seo";

interface Props { params: Promise<{ slug: string }>; }

const META: Record<string, { title: string; description: string }> = {
  "team-callouts": { title: "BOMBANANA! Team Callouts", description: "Pre-agreed communication phrases that make defusal faster and clearer." },
  "voice-chat-settings": { title: "BOMBANANA! Voice Chat Settings", description: "Configure in-game voice chat: role restrictions, Steam setup, troubleshooting." },
  "communication-chain": { title: "BOMBANANA! Communication Chain", description: "Deep dive into the BOMBANANA! communication chain. Where it breaks and how to fix it." },
};

export async function generateStaticParams() {
  return getRegistrySlugs("communication").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return META[slug] ?? { title: "Communication Guide" };
}

export default async function CommunicationSubPage({ params }: Props) {
  const { slug } = await params;
  const Component = getContentComponent("communication", slug);
  if (!Component) notFound();
  const meta = META[slug] ?? { title: "Communication Guide", description: "BOMBANANA! communication guide." };
  const path = `/communication/${slug}`;

  return (
    <ContentLayout
      prose={false}
      contentClassName="max-w-[860px]"
      breadcrumbs={buildBreadcrumbs("en", [
        { label: "Home", href: "/" },
        { label: "Communication", href: "/communication" },
        { label: meta.title, href: path },
      ])}
      jsonLd={
        <>
          {buildArticleJsonLd({ meta, locale: "en", path })}
          {buildBreadcrumbJsonLd("en", [
            { label: "Home", href: "/" },
            { label: "Communication", href: "/communication" },
            { label: meta.title, href: path },
          ])}
        </>
      }
    >
      <Component />
    </ContentLayout>
  );
}
