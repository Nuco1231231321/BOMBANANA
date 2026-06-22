import { notFound } from "next/navigation";
import ContentLayout from "@/components/layout/ContentLayout";
import { getContentComponent, getRegistrySlugs } from "@/content/registry";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }>; }

const META: Record<string, { title: string; description: string }> = {
  "blind-monkey": { title: "BOMBANANA! Blind Monkey Guide", description: "Master the Blind Monkey role. Touch the bomb, follow voice commands, defuse without seeing colors or text." },
  "deaf-monkey": { title: "BOMBANANA! Deaf Monkey Guide", description: "Master the Deaf Monkey role. Interpret gestures, give clear instructions, bridge the communication gap." },
  "mute-monkey": { title: "BOMBANANA! Mute Monkey Guide", description: "Master the Mute Monkey role. Hold the defusal manual, communicate through gestures, guide your team silently." },
};

export async function generateStaticParams() {
  return getRegistrySlugs("roles").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return META[slug] ?? { title: "Role Guide" };
}

export default async function RolePage({ params }: Props) {
  const { slug } = await params;
  const Component = getContentComponent("roles", slug);
  if (!Component) notFound();
  return (
    <ContentLayout prose={false} contentClassName="max-w-[860px]">
      <Component />
    </ContentLayout>
  );
}
