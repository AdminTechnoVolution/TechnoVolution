"use client";

import { valueCatalog } from "@/config/values";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Container, Section } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "@/i18n/client";

export function ValuesSection() {
  const t = useTranslations();

  return (
    <Section id="valores" variant="elevated">
      <Container>
        <AnimatedSection>
          <SectionHeader
            overline={t.values.overline}
            title={t.values.title}
            subtitle={t.values.subtitle}
          />
        </AnimatedSection>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valueCatalog.map((value) => {
            const copy = t.values.items[value.id];
            const Icon = value.icon;

            return (
              <StaggerItem key={value.id}>
                <GlassCard accentColor={value.color} className="h-full">
                  <div
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${value.color}15` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: value.color }} />
                  </div>
                  <h3 className="mb-2 font-bold text-white">{copy.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{copy.description}</p>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
