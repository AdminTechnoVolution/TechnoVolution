import { localeCodes } from "./locale-loaders";

/** Fallback when browser language is not supported */
export const FALLBACK_LOCALE = "en";

/** Supported locales (derived from registered dictionaries) */
export const locales = localeCodes;

export const localeLabels: Record<string, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
  it: "Italiano",
  fr: "Français",
  de: "Deutsch",
};
