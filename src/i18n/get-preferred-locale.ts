import type { NextRequest } from "next/server";
import { FALLBACK_LOCALE } from "./config";
import { hasLocale } from "./locale-loaders";

const LOCALE_COOKIE = "NEXT_LOCALE";

export function getPreferredLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && hasLocale(cookieLocale)) return cookieLocale;

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const languages = acceptLanguage
    .split(",")
    .map((part) => {
      const [lang, quality] = part.trim().split(";q=");
      return {
        lang: lang.split("-")[0]?.toLowerCase() ?? "",
        quality: quality ? Number.parseFloat(quality) : 1,
      };
    })
    .filter(({ lang }) => lang.length > 0)
    .sort((a, b) => b.quality - a.quality);

  for (const { lang } of languages) {
    if (hasLocale(lang)) return lang;
  }

  return FALLBACK_LOCALE;
}

export { LOCALE_COOKIE };
