import type { Dictionary } from "./types";
import de from "./locales/de.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import it from "./locales/it.json";
import pt from "./locales/pt.json";

/**
 * Register new locales here after adding `src/i18n/locales/<code>.json`.
 * Copy the structure from `en.json`.
 */
export const dictionaries = {
  de,
  en,
  es,
  fr,
  it,
  pt,
} as const satisfies Record<string, Dictionary>;

export const localeCodes = Object.keys(dictionaries);

export function hasLocale(locale: string) {
  return locale in dictionaries;
}

export function getDictionary(locale: string): Dictionary {
  if (hasLocale(locale)) return dictionaries[locale as keyof typeof dictionaries];
  return dictionaries.en;
}
