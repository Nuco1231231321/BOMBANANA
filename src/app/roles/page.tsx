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
  title: "Role Guides — BOMBANANA! Strategy",
  description:
    "Complete role guides for BOMBANANA! Master the Blind, Deaf, and Mute monkeys. Strategies, tips, and communication techniques for every role.",
};

export default function RolesPage() {
  const roles = getContentEntries("en", "roles");

  return (
    <ContentLayout>
      {/* Header */}
      <header className="mb-10">
        <TaglineBadge icon={<Banana className="w-3 h-3" />}>
          ROLE GUIDES
        </TaglineBadge>
        <h1 className="font-[family-name:var(--font-bricolage-grotesque)] font-extrabold text-[clamp(2rem,4vw,3.4375rem)] leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] mt-4 mb-4">
          Choose Your Monkey
        </h1>
        <p className="text-lg text-[var(--color-forest-ink)] opacity-60 leading-relaxed max-w-[600px]">
          Each role is a completely different game. Pick your monkey and master every aspect of bomb defusal.
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
              title={role.meta.title}
              description={role.meta.description}
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
