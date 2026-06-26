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
    label: "Blind",
    color: "blush" as const,
    title: "The Blind Monkey",
    desc: "Touches the bomb, hears the callouts, and follows commands without seeing colors or text.",
    traits: ["Operates the bomb", "Can hear and speak", "Needs precise verbal direction"],
  },
  {
    key: "deaf-monkey",
    icon: VolumeOff,
    label: "Deaf",
    color: "teal" as const,
    title: "The Deaf Monkey",
    desc: "Sees the bomb clearly and speaks instructions, but must read the Mute's gestures first.",
    traits: ["Sees the bomb", "Can speak", "Cannot hear the Blind"],
  },
  {
    key: "mute-monkey",
    icon: MessageSquareOff,
    label: "Mute",
    color: "mint" as const,
    title: "The Mute Monkey",
    desc: "Has the manual answers and must turn rules into gestures the Deaf can relay.",
    traits: ["Reads the manual", "Can hear the team", "Cannot speak"],
  },
] as const;

export default function RoleOverview({ locale = "en" }: RoleOverviewProps) {
  void locale;

  return (
    <section className="relative py-16 md:py-24">
      <div className="container-page">
        <div className="mb-10 grid items-end gap-4 md:mb-14 md:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="font-[family-name:var(--font-roboto-mono)] text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-terracotta)]">
              Role system
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(2.35rem,4.8vw,4.75rem)] font-extrabold leading-[0.95] text-[var(--color-forest-ink)] text-balance">
              Meet Your Crew
            </h2>
          </div>
          <p className="max-w-[520px] text-base leading-[1.7] text-[var(--color-forest-ink)]/66 md:justify-self-end md:text-lg">
            Three monkeys, three communication limits, one bomb ticking in the middle.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Card
                key={role.key}
                accent={role.color}
                className="group flex h-full flex-col border border-[var(--color-forest-ink)]/12 shadow-[var(--shadow-card)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-forest-ink)]/10 bg-[var(--color-panel-cream)] text-[var(--color-forest-ink)] transition-transform group-hover:-rotate-3 group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-[family-name:var(--font-roboto-mono)] text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-forest-ink)] opacity-55">
                    Role
                  </span>
                  <span className="ml-auto rounded-full bg-[var(--color-panel-cream)]/75 px-3 py-1 text-xs font-bold text-[var(--color-forest-ink)]/70">
                    {role.label}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-[var(--color-forest-ink)]">
                  {role.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-[1.65] text-[var(--color-forest-ink)]/72">
                  {role.desc}
                </p>

                <ul className="mb-5 space-y-1.5">
                  {role.traits.map((trait) => (
                    <li
                      key={trait}
                      className="flex items-center gap-2 text-xs font-semibold text-[var(--color-forest-ink)]/62"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-forest-ink)]/35" />
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
