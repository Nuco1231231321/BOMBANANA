import ContentLayout from "@/components/layout/ContentLayout";
import MdxRenderer from "@/components/layout/MdxRenderer";
import { getContentEntry } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Communication Guide — Master Gestures & Teamwork",
  description:
    "Master BOMBANANA! communication. Design effective gesture systems, standardize your team's vocabulary, and defuse bombs with precision.",
};

export default function CommunicationPage() {
  const entry = getContentEntry("en", "", "communication");

  if (!entry) notFound();

  return (
    <ContentLayout>
      <MdxRenderer entry={entry} />
    </ContentLayout>
  );
}
