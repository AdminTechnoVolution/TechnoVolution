"use client";

import { partnershipCatalog } from "@/config/partnerships";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "@/i18n/client";

const accentColors = ["#00D2FF", "#7029FF", "#FF00D4", "#00D2FF"];

export function PartnershipsSection() {
  const t = useTranslations();

  return (
    <Section id="partnerships" variant="elevated">
      <Container>
        <AnimatedSection>
          <SectionHeader
            overline={t.partnerships.overline}
            title={t.partnerships.title}
            subtitle={t.partnerships.subtitle}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mb-8 flex justify-center">
          <Badge variant="outline" className="border-white/10 bg-white/5 text-slate-400">
            {t.partnerships.placeholder}
          </Badge>
        </AnimatedSection>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partnershipCatalog.map((partner, index) => {
            const copy = t.partnerships.items[partner.id];
            const Icon = partner.icon;
            const accent = accentColors[index];

            return (
              <StaggerItem key={partner.id}>
                <GlassCard accentColor={accent} className="h-full text-center">
                  <div
                    className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${accent}15` }}
                  >
                    <Icon className="h-7 w-7" style={{ color: accent }} />
                  </div>
                  <h3 className="mb-2 font-bold text-white">{copy.name}</h3>
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
