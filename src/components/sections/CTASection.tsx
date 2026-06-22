import { Button } from "@/components/ui/Button";
import { HighlightedWord } from "@/components/ui/TaglineBadge";
import { Banana } from "lucide-react";
import type { Locale } from "@/lib/i18n";

interface CTASectionProps {
  locale?: Locale;
}

const content = {
  en: {
    headline1: "Ready to",
    highlight: "Defuse",
    headline2: "?",
    subhead:
      "Grab two friends, pick your roles, and dive into the chaotic world of BOMBANANA! We'll guide you through every bomb, every module, and every panic attack.",
    cta: "Beginner's Guide",
    caption: "No prior bomb defusal experience required.",
  },
  zh: {
    headline1: "准备好",
    highlight: "拆弹",
    headline2: "了吗？",
    subhead:
      "拉上两个朋友，选好角色，跳进 BOMBANANA! 的混沌世界。我们会带你拆解每一颗炸弹、每一个模块、每一次崩溃。",
    cta: "新手指南",
    caption: "无需任何拆弹经验。",
  },
  ja: {
    headline1: "爆弾を",
    highlight: "解除",
    headline2: "する準備は？",
    subhead:
      "友達2人を誘って、役割を選び、BOMBANANA!の混沌の世界に飛び込もう。全ての爆弾、全てのモジュール、全てのパニックを攻略しよう。",
    cta: "初心者ガイド",
    caption: "爆弾解除の経験は不要です。",
  },
};

export default function CTASection({ locale = "en" }: CTASectionProps) {
  const t = content[locale] || content.en;

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-[640px] mx-auto text-center">
          {/* Decorative banana icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-banana-yellow)] mb-8 shadow-[var(--shadow-subtle)]">
            <Banana className="w-8 h-8 text-[var(--color-forest-ink)]" />
          </div>

          <h2
            className="font-[family-name:var(--font-bricolage-grotesque)] font-extrabold text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] text-balance"
          >
            {t.headline1}{" "}
            <HighlightedWord>{t.highlight}</HighlightedWord>
            {t.headline2}
          </h2>

          <p className="mt-6 text-[var(--color-forest-ink)] opacity-60 text-lg leading-relaxed max-w-[520px] mx-auto text-balance">
            {t.subhead}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <Button href="/beginners" variant="primary" size="lg" arrow>
              {t.cta}
            </Button>
            <p className="text-xs text-[var(--color-forest-ink)] opacity-40">
              {t.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
