import ContentLayout from "@/components/layout/ContentLayout";
import { LinkCard } from "@/components/ui/Card";
import { TaglineBadge } from "@/components/ui/TaglineBadge";
import { getContentEntries } from "@/lib/content";
import { EyeOff, VolumeOff, MessageSquareOff, Banana } from "lucide-react";

const roleIcons = {
  blind: EyeOff,
  deaf: VolumeOff,
  mute: MessageSquareOff,
} as const;

export const metadata = {
  title: "BOMBANANA! Role Guides - Blind, Deaf, and Mute Monkey Strategy",
  description:
    "BOMBANANA! role guides for Blind Monkey, Deaf Monkey, and Mute Monkey. Learn each co-op bomb defusal role, communication flow, and team strategy.",
};

const roleCards: Record<string, { title: string; description: string }> = {
  "blind-monkey": {
    title: "Blind Monkey",
    description: "Defuse the bomb by touch while teammates guide every move.",
  },
  "deaf-monkey": {
    title: "Deaf Monkey",
    description: "Read the bomb state and relay clear instructions to the team.",
  },
  "mute-monkey": {
    title: "Mute Monkey",
    description: "Use the manual and gestures to turn rules into safe actions.",
  },
};

export default function RolesPage() {
  const roles = getContentEntries("en", "roles");

  return (
    <ContentLayout prose={false} contentClassName="max-w-[980px]">
      {/* Header */}
      <header className="mb-10 max-w-[720px]">
        <TaglineBadge icon={<Banana className="w-3 h-3" />}>
          ROLE GUIDES
        </TaglineBadge>
        <h1 className="font-[family-name:var(--font-bricolage-grotesque)] font-extrabold text-[clamp(2rem,4vw,3.4375rem)] leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] mt-4 mb-4">
          BOMBANANA! Role Guides
        </h1>
        <p className="text-lg text-[var(--color-forest-ink)] opacity-60 leading-relaxed max-w-[600px]">
          Pick the Blind, Deaf, or Mute Monkey role and learn the core job before your next co-op bomb defusal run.
        </p>
      </header>

      {/* Role cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {roles.map((role) => {
          const Icon =
            roleIcons[role.meta.role as keyof typeof roleIcons] || Banana;
          return (
            <LinkCard
              key={role.slug}
              title={roleCards[role.slug]?.title ?? role.meta.title}
              description={roleCards[role.slug]?.description ?? role.meta.description}
              href={`/roles/${role.slug}`}
              accent={
                role.meta.role === "blind"
                  ? "blush"
                  : role.meta.role === "deaf"
                    ? "teal"
                    : "mint"
              }
              icon={<Icon className="w-5 h-5" />}
            />
          );
        })}
      </div>
    </ContentLayout>
  );
}
