import { notFound } from "next/navigation";
import ContentLayout from "@/components/layout/ContentLayout";
import { getContentComponent, getRegistrySlugs } from "@/content/registry";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }>; }

const META: Record<string, { title: string; description: string }> = {
  overview: { title: "Bomb Modules Overview — Complete Catalog", description: "Complete overview of all bomb modules in BOMBANANA! Rules, panic effects, and strategies." },
  "wire-module": { title: "Wire Module Guide — BOMBANANA! Strategy", description: "Master wire cutting: color communication, sequences, conditional cuts. Complete guide." },
  "button-module": { title: "Button Module Guide — BOMBANANA! Strategy", description: "Master button grids, press/hold timing, Simon Says patterns. Complete guide." },
  "switch-module": { title: "Switch Module Guide — BOMBANANA! Strategy", description: "Master toggle switches: state communication, pattern matching, timed flips." },
  "symbols-module": { title: "Symbols Module Guide — BOMBANANA! Strategy", description: "Master abstract symbols: description frameworks, glyph matching, lookup strategies." },
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
