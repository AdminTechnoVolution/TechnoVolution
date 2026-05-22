"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { ServiceId } from "@/config/services";
import { getServiceCatalogItem } from "@/config/services";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { LinkButton } from "@/components/ui/link-button";
import { Container, Section } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/section-header";
import { useLocalizedRoutes, useTranslations } from "@/i18n/client";

type ServiceDetailSectionProps = {
  serviceId: ServiceId;
};

export function ServiceDetailSection({ serviceId }: ServiceDetailSectionProps) {
  const t = useTranslations();
  const routes = useLocalizedRoutes();
  const catalog = getServiceCatalogItem(serviceId)!;
  const copy = t.serviceDetails[serviceId];
  const Icon = catalog.icon!;
  const accentColors = ["#00D2FF", "#7029FF", "#FF00D4"];

  return (
    <>
      <Section id="service-detail" variant="darker">
        <Container>
          <AnimatedSection>
            <Link
              href={routes.products}
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-brand"
            >
              <ArrowLeft className="h-4 w-4" />
              {copy.back}
            </Link>

            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl"
                style={{ backgroundColor: `${accentColors[0]}15` }}
              >
                <Icon className="h-8 w-8 text-cyan-brand" />
              </div>
              <div className="max-w-3xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-brand">
                  {t.products.servicesLabel}
                </p>
                <h1 className="mb-4 text-3xl font-extrabold text-white md:text-5xl">
                  <GradientText>{t.products.services[serviceId].name}</GradientText>
                </h1>
                <p className="text-lg leading-relaxed text-slate-400">{copy.subtitle}</p>
              </div>
            </div>

            <p className="mx-auto mb-12 max-w-4xl text-base leading-relaxed text-slate-400 md:text-lg">
              {copy.overview}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <GlassCard accentColor="#7029FF" className="mb-12">
              <h2 className="mb-6 text-xl font-bold text-white">{copy.highlightsTitle}</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {copy.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h2 className="mb-6 text-xl font-bold text-white">{copy.capabilitiesTitle}</h2>
          </AnimatedSection>

          <StaggerContainer className="mb-12 grid gap-6 md:grid-cols-3">
            {copy.capabilities.map((capability, index) => (
              <StaggerItem key={capability.title}>
                <GlassCard accentColor={accentColors[index % accentColors.length]} className="h-full">
                  <h3 className="mb-3 font-bold text-white">{capability.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{capability.description}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap gap-4">
              <LinkButton href={routes.contact} className="gradient-btn h-12 border-0 px-6 text-white">
                {copy.cta}
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </LinkButton>
              <LinkButton
                href={routes.products}
                variant="outline"
                className="h-12 border-white/20 bg-white/5 px-6 text-white hover:bg-white/10"
              >
                {copy.back}
              </LinkButton>
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}
