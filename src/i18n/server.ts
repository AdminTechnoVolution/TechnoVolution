import "server-only";

import { cache } from "react";
import { redirect } from "next/navigation";
import { getDictionary, hasLocale } from "./locale-loaders";
import { FALLBACK_LOCALE } from "./config";
import { localizedPath, type RouteKey } from "./routes";
import type { Dictionary, Locale } from "./types";

export const getLocaleDictionary = cache((locale: string): Dictionary => {
  return getDictionary(locale);
});

export function resolveLocale(locale: string): Locale {
  return hasLocale(locale) ? locale : FALLBACK_LOCALE;
}

/** Fallback for non-localized URLs (e.g. /carreras) when the proxy hasn't redirected them */
export function redirectToFallbackLocale(key: RouteKey): never {
  redirect(localizedPath(FALLBACK_LOCALE, key));
}
