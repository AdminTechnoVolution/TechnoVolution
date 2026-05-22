"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { Input } from "@/components/ui/input";
import { SectionHeader } from "@/components/ui/section-header";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "@/i18n/client";

export function ContactSection() {
  const t = useTranslations();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section id="contact" variant="dark">
      <Container>
        <AnimatedSection>
          <SectionHeader
            overline={t.contact.overline}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />
        </AnimatedSection>

        <div className="grid gap-10 lg:grid-cols-5">
          <AnimatedSection delay={0.1} className="lg:col-span-2">
            <div className="space-y-6">
              <GlassCard hover={false} accentColor="#00D2FF">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-brand/10">
                    <Mail className="h-5 w-5 text-cyan-brand" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-white">{t.contact.email}</h3>
                    <a
                      href={`mailto:${t.company.email}`}
                      className="text-sm text-slate-400 transition-colors hover:text-cyan-brand"
                    >
                      {t.company.email}
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard hover={false} accentColor="#7029FF">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-brand/10">
                    <MapPin className="h-5 w-5 text-purple-brand" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-white">{t.contact.global}</h3>
                    <p className="text-sm text-slate-400">{t.contact.globalDescription}</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <GlassCard hover={false} className="p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-brand/10">
                    <Send className="h-7 w-7 text-cyan-brand" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">{t.contact.successTitle}</h3>
                  <p className="text-slate-400">{t.contact.successMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                        {t.contact.name}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder={t.contact.namePlaceholder}
                        className="border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                        {t.contact.email}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={t.contact.emailPlaceholder}
                        className="border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-300">
                      {t.contact.company}
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder={t.contact.companyPlaceholder}
                      className="border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                      {t.contact.message}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder={t.contact.messagePlaceholder}
                      className="resize-none border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                    />
                  </div>
                  <Button type="submit" size="lg" className="gradient-btn w-full border-0 text-white sm:w-auto">
                    {t.contact.submit}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </GlassCard>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
