import { notFound } from "next/navigation";
import ContentLayout from "@/components/layout/ContentLayout";
import MdxRenderer from "@/components/layout/MdxRenderer";
import { getContentEntries, getContentEntry } from "@/lib/content";
import { getContentComponent } from "@/content/registry";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getContentEntries("en", "modules").map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getContentEntry("en", "modules", slug);
  return entry ? { title: entry.meta.title, description: entry.meta.description } : { title: "Not Found" };
}

export default async function ModulePage({ params }: Props) {
  const { slug } = await params;
  // Try component registry first
  const Component = getContentComponent("modules", slug);
  if (Component) return <ContentLayout><Component /></ContentLayout>;
  // Fall back to MD
  const entry = getContentEntry("en", "modules", slug);
  if (!entry) notFound();
  return <ContentLayout><MdxRenderer entry={entry} /></ContentLayout>;
}
