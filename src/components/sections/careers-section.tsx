"use client";

import { CheckCircle2, Rocket } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { LinkButton } from "@/components/ui/link-button";
import { Container, Section } from "@/components/ui/container";
import { CircuitBackground } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/section-header";
import { useLocalizedRoutes, useTranslations } from "@/i18n/client";

export function CareersSection() {
  const t = useTranslations();
  const routes = useLocalizedRoutes();

  return (
    <Section id="careers" variant="darker" className="overflow-hidden">
      <CircuitBackground />
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-brand">
              {t.careers.overline}
            </p>
            <h2 className="mb-6 text-3xl font-extrabold text-white md:text-4xl">
              <GradientText>{t.careers.title}</GradientText>
            </h2>
            <p className="mb-8 text-base leading-relaxed text-slate-400 md:text-lg">
              {t.careers.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <LinkButton href={routes.contact} className="gradient-btn h-12 border-0 px-6 text-white">
                {t.careers.sendResume}
              </LinkButton>
              <LinkButton
                href={routes.contact}
                variant="outline"
                className="h-12 border-white/20 bg-white/5 px-6 text-white hover:bg-white/10"
              >
                {t.careers.viewOpportunities}
              </LinkButton>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-brand/15">
                  <Rocket className="h-6 w-6 text-purple-brand" />
                </div>
                <div>
                  <h3 className="font-bold text-white">{t.careers.joinTitle}</h3>
                  <p className="text-sm text-slate-400">{t.careers.joinSubtitle}</p>
                </div>
              </div>
              <ul className="space-y-4">
                {t.careers.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
