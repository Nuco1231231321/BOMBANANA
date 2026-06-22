import ContentLayout from "@/components/layout/ContentLayout";
import MdxRenderer from "@/components/layout/MdxRenderer";
import { getContentEntry } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata = {
  title: "BOMBANANA! Updates & Patch Notes",
  description: "Stay up to date with the latest BOMBANANA! patch notes, updates, new features, bug fixes, and balance changes.",
};

export default function UpdatesPage() {
  const entry = getContentEntry("en", "", "updates");
  if (!entry) notFound();
  return (
    <ContentLayout>
      <MdxRenderer entry={entry} />
    </ContentLayout>
  );
}
