import ContentLayout from "@/components/layout/ContentLayout";
import MdxRenderer from "@/components/layout/MdxRenderer";
import { getContentEntry } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata = {
  title: "BOMBANANA! Troubleshooting — Fix Common Issues",
  description: "Fix common BOMBANANA! issues: connection problems, voice chat not working, lobby errors, demo issues, and technical troubleshooting guide.",
};

export default function TroubleshootingPage() {
  const entry = getContentEntry("en", "", "troubleshooting");
  if (!entry) notFound();
  return (
    <ContentLayout>
      <MdxRenderer entry={entry} />
    </ContentLayout>
  );
}
