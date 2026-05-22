"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { localeLabels, locales } from "@/i18n/config";
import { LOCALE_COOKIE } from "@/i18n/get-preferred-locale";
import { stripLocaleFromPathname } from "@/i18n/routes";
import { useLocale } from "@/i18n/client";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (nextLocale: string) => {
    document.cookie = `${LOCALE_COOKIE}=${nextLocale};path=/;max-age=31536000;SameSite=Lax`;
    const { pathname: pathWithoutLocale } = stripLocaleFromPathname(pathname, locales);
    const nextPath = pathWithoutLocale ? `/${nextLocale}${pathWithoutLocale}` : `/${nextLocale}`;
    router.push(nextPath);
  };

  return (
    <div className={cn("relative flex items-center gap-2", className)}>
      <Globe className="hidden h-4 w-4 text-slate-400 sm:block" aria-hidden />
      <label htmlFor="language-switcher" className="sr-only">
        Language
      </label>
      <select
        id="language-switcher"
        value={locale}
        onChange={(event) => handleChange(event.target.value)}
        className="rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-xs font-medium text-slate-300 outline-none transition-colors hover:border-white/20 hover:text-white focus:border-cyan-brand/50 focus:ring-1 focus:ring-cyan-brand/30"
      >
        {locales.map((code) => (
          <option key={code} value={code} className="bg-navy-deep text-white">
            {localeLabels[code] ?? code.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
