import ContentLayout from "@/components/layout/ContentLayout";
import MdxRenderer from "@/components/layout/MdxRenderer";
import { getContentEntry } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata = {
  title: "BOMBANANA! Beginner Guide",
  description:
    "New to BOMBANANA!? Complete beginner's guide: setup, role selection, communication basics, and your first bomb defusal walkthrough.",
};

export default function BeginnersPage() {
  const entry = getContentEntry("en", "", "beginners");

  if (!entry) notFound();

  return (
    <ContentLayout>
      <MdxRenderer entry={entry} />
    </ContentLayout>
  );
}
