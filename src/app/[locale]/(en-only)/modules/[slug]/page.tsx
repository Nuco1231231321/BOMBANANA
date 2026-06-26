import { notFound } from "next/navigation";
import ContentLayout from "@/components/layout/ContentLayout";
import { getContentComponent, getRegistrySlugs } from "@/content/registry";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }>; }

const META: Record<string, { title: string; description: string }> = {
  overview: { title: "BOMBANANA! Module Overview — All Puzzle Types & Rules", description: "Complete overview of all bomb modules in BOMBANANA! Wire, button, switch, and symbol puzzle rules, panic effects, and team defusal strategies." },
  "wire-module": { title: "BOMBANANA! Wire Module Guide — LED Rules, Colors & Safe Cutting", description: "Master wire cutting in BOMBANANA! LED color rules for 3-wire and 4-wire configs, team communication flow, common mistakes, and step-by-step defusal guide." },
  "button-module": { title: "BOMBANANA! Button Module Guide — Press, Hold & Color Rules", description: "Master button puzzles in BOMBANANA! Color-label decision table, press vs hold rules, team callout examples, and how to avoid the most common button mistakes." },
  "switch-module": { title: "BOMBANANA! Switch Module Guide — Track State & Flip in Order", description: "Master the switch module in BOMBANANA! Board state tracking, sequence patterns, team callout protocol, and step-by-step flip verification process." },
  "symbols-module": { title: "BOMBANANA! Symbols Module Guide — Glyph Names & Match Rules", description: "Master symbol puzzles in BOMBANANA! Shared naming system, glyph reference table, team dictionary tips, and how to avoid mid-run name changes." },
};

export async function generateStaticParams() {
  return getRegistrySlugs("modules").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return META[slug] ?? { title: "Module Guide" };
}

export default async function ModulePage({ params }: Props) {
  const { slug } = await params;
  const Component = getContentComponent("modules", slug);
  if (!Component) notFound();
  return (
    <ContentLayout prose={false} contentClassName="max-w-[860px]">
      <Component />
    </ContentLayout>
  );
}
