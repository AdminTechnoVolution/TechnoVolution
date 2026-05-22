"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { formatTranslation, useLocalizedRoutes, useTranslations } from "@/i18n/client";

export function Footer() {
  const t = useTranslations();
  const routes = useLocalizedRoutes();

  const footerLinks = {
    products: [
      { label: t.footer.links.mobileApps, href: routes.service("mobile") },
      { label: t.footer.links.webPlatforms, href: routes.service("web") },
      { label: t.footer.links.enterprise, href: routes.service("enterprise") },
      { label: t.footer.links.customSoftware, href: routes.service("automation") },
    ],
    company: [
      { label: t.footer.links.aboutUs, href: routes.about },
      { label: t.footer.links.missionVision, href: routes.about },
      { label: t.footer.links.values, href: routes.path("about", "#valores") },
      { label: t.footer.links.team, href: routes.team },
    ],
    careers: [
      { label: t.footer.links.opportunities, href: routes.careers },
      { label: t.footer.links.sendResume, href: routes.contact },
    ],
    contact: [{ label: t.footer.links.contactUs, href: routes.contact }],
  };

  return (
    <footer className="border-t border-white/10 bg-navy-deep py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <Image src="/logo.png" alt={t.company.name} width={40} height={40} className="rounded-full" />
              <span className="text-lg font-extrabold text-white">{t.company.name}</span>
            </div>
            <p className="mb-6 max-w-xs text-sm text-slate-400">{t.company.tagline}</p>
            <p className="text-xs text-slate-500">
              {formatTranslation(t.footer.copyright, { year: new Date().getFullYear() })}
            </p>
          </div>

          <FooterColumn title={t.footer.products} links={footerLinks.products} />
          <FooterColumn title={t.footer.company} links={footerLinks.company} />
          <div className="space-y-8">
            <FooterColumn title={t.footer.careers} links={footerLinks.careers} />
            <FooterColumn title={t.footer.contact} links={footerLinks.contact} />
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <p className="text-center text-xs text-slate-500">{t.footer.tagline}</p>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-bold text-white">{title}</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-slate-400 transition-colors hover:text-cyan-brand"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
