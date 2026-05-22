"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { LinkButton } from "@/components/ui/link-button";
import { useLocalizedRoutes, useTranslations } from "@/i18n/client";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();
  const routes = useLocalizedRoutes();

  const navLinks = [
    { id: "about", label: t.nav.about, href: routes.about },
    { id: "products", label: t.nav.products, href: routes.products },
    { id: "clients", label: t.nav.clients, href: routes.clients },
    { id: "team", label: t.nav.team, href: routes.team },
    { id: "careers", label: t.nav.careers, href: routes.careers },
    { id: "contact", label: t.nav.contact, href: routes.contact },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-deep/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link href={routes.home} className="flex shrink-0 items-center gap-3">
          <Image src="/logo.png" alt={t.company.name} width={44} height={44} className="rounded-full" />
          <span className="hidden font-extrabold tracking-wide text-white sm:inline">{t.company.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive(pathname, link.href) ? "text-cyan-brand" : "text-slate-400 hover:text-cyan-brand",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <LinkButton
            href={routes.contact}
            className="gradient-btn h-10 border-0 px-5 text-white shadow-lg shadow-purple-brand/25"
          >
            {t.nav.contactCta}
          </LinkButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-navy-deep/95 backdrop-blur-xl lg:hidden",
          open ? "max-h-[28rem]" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-white/5 hover:text-white",
                isActive(pathname, link.href) ? "text-cyan-brand" : "text-slate-400",
              )}
            >
              {link.label}
            </Link>
          ))}
          <LinkButton
            href={routes.contact}
            onClick={() => setOpen(false)}
            className="gradient-btn mt-2 h-10 border-0 text-white"
          >
            {t.nav.contactCta}
          </LinkButton>
        </nav>
      </div>
    </motion.header>
  );
}
