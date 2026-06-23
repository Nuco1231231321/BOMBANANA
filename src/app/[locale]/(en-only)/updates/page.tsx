import ContentLayout from "@/components/layout/ContentLayout";
import MdxRenderer from "@/components/layout/MdxRenderer";
import { Link } from "@/i18n/navigation";
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
      <div className="mt-8 rounded-xl border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-5">
        <h2 className="mb-2 text-xl font-bold text-[var(--color-forest-ink)]">
          Release status
        </h2>
        <p className="mb-3 text-sm leading-7 text-[var(--color-forest-ink)]/70">
          For current demo, price, platform, and console status, use the dedicated release status page.
        </p>
        <Link href="/release-date" className="text-sm font-semibold text-[var(--color-terracotta)]">
          Open release date, price, and platforms
        </Link>
      </div>
    </ContentLayout>
  );
}
