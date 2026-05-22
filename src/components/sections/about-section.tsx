"use client";

import { Target, Eye } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Container, Section } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "@/i18n/client";

export function AboutSection() {
  const t = useTranslations();

  return (
    <Section id="about" variant="darker">
      <Container>
        <AnimatedSection>
          <SectionHeader
            overline={t.about.overline}
            title={t.about.title}
            subtitle={t.about.description}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mx-auto mb-16 max-w-3xl text-center text-base leading-relaxed text-slate-400 md:text-lg">
            {t.about.body}
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          <AnimatedSection delay={0.15}>
            <GlassCard accentColor="#00D2FF" className="h-full">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-brand/10">
                <Target className="h-6 w-6 text-cyan-brand" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{t.about.missionTitle}</h3>
              <p className="leading-relaxed text-slate-400">{t.about.mission}</p>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <GlassCard accentColor="#7029FF" className="h-full">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-brand/10">
                <Eye className="h-6 w-6 text-purple-brand" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{t.about.visionTitle}</h3>
              <p className="leading-relaxed text-slate-400">{t.about.vision}</p>
            </GlassCard>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
