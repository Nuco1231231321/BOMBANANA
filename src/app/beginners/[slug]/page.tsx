import { notFound } from "next/navigation";
import ContentLayout from "@/components/layout/ContentLayout";
import { getContentComponent, getRegistrySlugs } from "@/content/registry";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }>; }

const META: Record<string, { title: string; description: string }> = {
  "how-to-play": { title: "How to Play BOMBANANA! — First Session Guide", description: "Step-by-step walkthrough for your first session. From launching to defusing your first bomb." },
  "first-session-checklist": { title: "First Session Checklist — BOMBANANA! Setup Guide", description: "Printable pre-game checklist: system setup, role assignment, communication prep." },
  "beginner-mistakes": { title: "10 Beginner Mistakes — BOMBANANA! Tips", description: "The most common new-player errors and exactly how to fix each one." },
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
  return (
    <ContentLayout prose={false} contentClassName="max-w-[860px]">
      <Component />
    </ContentLayout>
  );
}
