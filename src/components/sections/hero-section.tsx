"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { Container } from "@/components/ui/container";
import { TechInteractiveBackground } from "@/components/ui/tech-interactive-background";
import { GradientText } from "@/components/ui/section-header";
import { useLocalizedRoutes, useTranslations } from "@/i18n/client";

export function HeroSection() {
  const t = useTranslations();
  const routes = useLocalizedRoutes();

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-navy-deep pt-20">
      <TechInteractiveBackground />

      <Container className="relative z-10 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-brand backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-brand" />
              {t.hero.badge}
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              <GradientText>{t.hero.titleHighlight}</GradientText>
              <br />
              {t.hero.titleRest}
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-400">{t.hero.subtitle}</p>

            <div className="flex flex-wrap gap-4">
              <LinkButton
                href={routes.products}
                className="gradient-btn h-12 border-0 px-6 text-base text-white shadow-lg shadow-purple-brand/30"
              >
                {t.hero.ctaProducts}
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </LinkButton>
              <LinkButton
                href={routes.careers}
                variant="outline"
                className="h-12 border-cyan-brand/50 bg-white/5 px-6 text-base text-cyan-brand hover:bg-cyan-brand/10 hover:text-cyan-brand"
              >
                {t.hero.ctaCareers}
              </LinkButton>
              <LinkButton
                href={routes.contact}
                variant="ghost"
                className="h-12 px-6 text-base text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {t.hero.ctaContact}
              </LinkButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden justify-center lg:flex"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-brand/30 via-purple-brand/20 to-magenta-brand/30 blur-3xl" />
              <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <Image
                  src="/logo.png"
                  alt={t.company.name}
                  width={320}
                  height={320}
                  priority
                  className="rounded-full object-cover drop-shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link href={routes.about} className="flex flex-col items-center gap-1 text-slate-500 transition-colors hover:text-cyan-brand">
          <span className="text-xs uppercase tracking-widest">{t.hero.explore}</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
