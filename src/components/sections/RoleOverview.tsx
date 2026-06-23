import { EyeOff, MessageSquareOff, VolumeOff } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { Locale } from "@/i18n/routing";

interface RoleOverviewProps {
  locale?: Locale;
}

const roles = [
  {
    key: "blind-monkey",
    icon: EyeOff,
    emoji: "🙈",
    color: "blush" as const,
    title: "The Blind Monkey",
    desc: "Touches the bomb, hears the callouts, and follows commands without seeing colors or text.",
    traits: ["Operates the bomb", "Can hear and speak", "Needs precise verbal direction"],
  },
  {
    key: "deaf-monkey",
    icon: VolumeOff,
    emoji: "🙉",
    color: "teal" as const,
    title: "The Deaf Monkey",
    desc: "Sees the bomb clearly and speaks instructions, but must read the Mute's gestures first.",
    traits: ["Sees the bomb", "Can speak", "Cannot hear the Blind"],
  },
  {
    key: "mute-monkey",
    icon: MessageSquareOff,
    emoji: "🙊",
    color: "mint" as const,
    title: "The Mute Monkey",
    desc: "Has the manual answers and must turn rules into gestures the Deaf can relay.",
    traits: ["Reads the manual", "Can hear the team", "Cannot speak"],
  },
] as const;

export default function RoleOverview({ locale = "en" }: RoleOverviewProps) {
  void locale;

  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(2rem,4vw,3.4375rem)] font-extrabold leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] text-balance">
            Meet Your Crew
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-lg text-[var(--color-forest-ink)] opacity-60 text-balance">
            Three monkeys, three communication limits, one bomb ticking in the middle.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Card key={role.key} accent={role.color} className="flex h-full flex-col">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-cream-paper)] text-[var(--color-forest-ink)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-[family-name:var(--font-roboto-mono)] text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-forest-ink)] opacity-55">
                    Role
                  </span>
                  <span className="text-3xl" aria-hidden="true">
                    {role.emoji}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-[var(--color-forest-ink)]">
                  {role.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-[1.6] text-[var(--color-forest-ink)] opacity-70">
                  {role.desc}
                </p>

                <ul className="mb-5 space-y-1.5">
                  {role.traits.map((trait) => (
                    <li
                      key={trait}
                      className="flex items-center gap-2 text-xs font-medium text-[var(--color-forest-ink)] opacity-60"
                    >
                      <span className="h-1 w-1 rounded-full bg-[var(--color-forest-ink)] opacity-40" />
                      {trait}
                    </li>
                  ))}
                </ul>

                <Button
                  href={`/roles/${role.key}`}
                  variant="primary"
                  size="sm"
                  arrow
                  className="mt-auto self-start"
                >
                  Read Full Guide
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
