import { notFound } from "next/navigation";
import ContentLayout from "@/components/layout/ContentLayout";
import MdxRenderer from "@/components/layout/MdxRenderer";
import { getContentEntries, getContentEntry } from "@/lib/content";
import { getContentComponent } from "@/content/registry";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getContentEntries("en", "beginners").map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getContentEntry("en", "beginners", slug);
  return entry ? { title: entry.meta.title, description: entry.meta.description } : { title: "Not Found" };
}

export default async function BeginnerSubPage({ params }: Props) {
  const { slug } = await params;
  const Component = getContentComponent("beginners", slug);
  if (Component) return <ContentLayout><Component /></ContentLayout>;
  const entry = getContentEntry("en", "beginners", slug);
  if (!entry) notFound();
  return <ContentLayout><MdxRenderer entry={entry} /></ContentLayout>;
}
