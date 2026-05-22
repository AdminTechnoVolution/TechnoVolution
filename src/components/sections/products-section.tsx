"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProductCatalog, serviceCatalog } from "@/config/products";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { buttonVariants } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { useLocalizedRoutes, useTranslations } from "@/i18n/client";
import { cn } from "@/lib/utils";

const accentColors = ["#00D2FF", "#7029FF", "#FF00D4"];

type FeaturedProductId = keyof typeof import("@/i18n/locales/en.json")["products"]["featured"];
type ServiceProductId = keyof typeof import("@/i18n/locales/en.json")["products"]["services"];

function ProductCard({
  name,
  description,
  accent,
  logo,
  icon: Icon,
  href,
  external,
  ctaLabel,
}: {
  name: string;
  description: string;
  accent: string;
  logo?: string;
  icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  href: string;
  external?: boolean;
  ctaLabel: string;
}) {
  return (
    <GlassCard accentColor={accent} className="flex h-full flex-col">
      {logo ? (
        <div className="mb-5 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <Image src={logo} alt={name} width={56} height={56} className="h-full w-full object-cover" />
        </div>
      ) : Icon ? (
        <div
          className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{ backgroundColor: `${accent}15` }}
        >
          <Icon className="h-7 w-7" style={{ color: accent }} />
        </div>
      ) : null}

      <h3 className="mb-2 text-lg font-bold text-white">{name}</h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-400">{description}</p>

      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "ghost", size: "default" }),
            "w-fit px-0 text-cyan-brand hover:bg-transparent hover:text-cyan-brand/80",
          )}
        >
          {ctaLabel}
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
      ) : (
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant: "ghost", size: "default" }),
            "w-fit px-0 text-cyan-brand hover:bg-transparent hover:text-cyan-brand/80",
          )}
        >
          {ctaLabel}
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      )}
    </GlassCard>
  );
}

export function ProductsSection() {
  const t = useTranslations();
  const routes = useLocalizedRoutes();

  return (
    <Section id="products" variant="dark">
      <Container>
        <AnimatedSection>
          <SectionHeader
            overline={t.products.overline}
            title={t.products.title}
            subtitle={t.products.subtitle}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-cyan-brand">
            {t.products.featuredLabel}
          </p>
        </AnimatedSection>

        <StaggerContainer className="mb-16 grid gap-6 md:grid-cols-2">
          {featuredProductCatalog.map((product, index) => {
            const copy = t.products.featured[product.id as FeaturedProductId];
            return (
              <StaggerItem key={product.id}>
                <ProductCard
                  name={copy.name}
                  description={copy.description}
                  accent={accentColors[index % accentColors.length]}
                  logo={product.logo}
                  href={product.url ?? routes.contact}
                  external={Boolean(product.url)}
                  ctaLabel={t.products.visitSite}
                />
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection delay={0.1}>
          <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-purple-brand">
            {t.products.servicesLabel}
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceCatalog.map((product, index) => {
            const copy = t.products.services[product.id as ServiceProductId];
            const Icon = product.icon;

            return (
              <StaggerItem key={product.id} className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
                <ProductCard
                  name={copy.name}
                  description={copy.description}
                  accent={accentColors[index % accentColors.length]}
                  icon={Icon}
                  href={routes.service(product.id)}
                  ctaLabel={t.products.learnMore}
                />
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
