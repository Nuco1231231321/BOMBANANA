import ContentLayout from "@/components/layout/ContentLayout";
import MdxRenderer from "@/components/layout/MdxRenderer";
import { getContentEntry } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata = {
  title: "BOMBANANA! FAQ — Multiplayer, Co-op & Common Questions",
  description: "Complete BOMBANANA! FAQ. Multiplayer requirements, co-op setup, voice chat, demo vs full game, crossplay, and all your most-asked questions answered.",
};

export default function FAQPage() {
  const entry = getContentEntry("en", "", "faq");
  if (!entry) notFound();
  return (
    <ContentLayout>
      <MdxRenderer entry={entry} />
    </ContentLayout>
  );
}
