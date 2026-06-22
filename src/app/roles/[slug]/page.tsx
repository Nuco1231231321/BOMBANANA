import { notFound } from "next/navigation";
import ContentLayout from "@/components/layout/ContentLayout";
import MdxRenderer from "@/components/layout/MdxRenderer";
import { getContentEntries, getContentEntry } from "@/lib/content";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const entries = getContentEntries("en", "roles");
  return entries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getContentEntry("en", "roles", slug);
  if (!entry) return { title: "Not Found" };

  return {
    title: entry.meta.title,
    description: entry.meta.description,
  };
}

export default async function RolePage({ params }: Props) {
  const { slug } = await params;
  const entry = getContentEntry("en", "roles", slug);

  if (!entry) notFound();

  return (
    <ContentLayout>
      <MdxRenderer entry={entry} />
    </ContentLayout>
  );
}
