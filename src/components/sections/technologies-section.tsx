"use client";

import { technologyCatalog } from "@/config/technologies";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Container, Section } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "@/i18n/client";

export function TechnologiesSection() {
  const t = useTranslations();

  return (
    <Section id="technologies" variant="elevated">
      <Container>
        <AnimatedSection>
          <SectionHeader
            overline={t.technologies.overline}
            title={t.technologies.title}
            subtitle={t.technologies.subtitle}
          />
        </AnimatedSection>

        <StaggerContainer className="flex flex-wrap justify-center gap-3">
          {technologyCatalog.map((tech) => {
            const Icon = tech.icon;
            const name = tech.translatable
              ? t.technologies.items[tech.id as "realtime" | "mobile"].name
              : tech.name!;

            return (
              <StaggerItem key={tech.id}>
                <div className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-sm transition-all hover:border-cyan-brand/30 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-cyan-brand/5">
                  <Icon className="h-4 w-4 text-cyan-brand transition-transform group-hover:scale-110" />
                  <span className="text-sm font-medium text-slate-300">{name}</span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
