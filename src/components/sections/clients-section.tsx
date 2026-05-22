"use client";

import { clientCatalog } from "@/config/clients";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Container, Section } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "@/i18n/client";

export function ClientsSection() {
  const t = useTranslations();

  return (
    <Section id="clients" variant="darker">
      <Container>
        <AnimatedSection>
          <SectionHeader
            overline={t.clients.overline}
            title={t.clients.title}
            subtitle={t.clients.subtitle}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mb-8 flex justify-center">
          <Badge variant="outline" className="border-white/10 bg-white/5 text-slate-400">
            {t.clients.placeholder}
          </Badge>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {clientCatalog.map((client) => (
            <StaggerItem key={client.id}>
              <GlassCard hover className="flex aspect-square flex-col items-center justify-center p-4 text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg font-bold text-slate-300">
                  {client.initials}
                </div>
                <span className="text-xs text-slate-500">{t.clients.items[client.id].label}</span>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
