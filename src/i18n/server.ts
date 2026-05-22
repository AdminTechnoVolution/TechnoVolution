import "server-only";

import { cache } from "react";
import { getDictionary, hasLocale } from "./locale-loaders";
import { FALLBACK_LOCALE } from "./config";
import type { Dictionary, Locale } from "./types";

export const getLocaleDictionary = cache((locale: string): Dictionary => {
  return getDictionary(locale);
});

export function resolveLocale(locale: string): Locale {
  return hasLocale(locale) ? locale : FALLBACK_LOCALE;
}
