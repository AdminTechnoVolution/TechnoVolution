"use client";

import { createContext, useContext, useMemo } from "react";
import type { Dictionary, Locale } from "./types";
import { localizedPath, type RouteKey } from "./routes";

type I18nContextValue = {
  locale: Locale;
  t: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

type I18nProviderProps = {
  locale: Locale;
  dictionary: Dictionary;
  children: React.ReactNode;
};

export function I18nProvider({ locale, dictionary, children }: I18nProviderProps) {
  const value = useMemo(
    () => ({
      locale,
      t: dictionary,
    }),
    [locale, dictionary],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}

export function useTranslations() {
  return useI18n().t;
}

export function useLocale() {
  return useI18n().locale;
}

export function useLocalizedRoutes() {
  const locale = useLocale();

  return useMemo(
    () => ({
      home: localizedPath(locale, "home"),
      about: localizedPath(locale, "about"),
      products: localizedPath(locale, "products"),
      clients: localizedPath(locale, "clients"),
      team: localizedPath(locale, "team"),
      careers: localizedPath(locale, "careers"),
      contact: localizedPath(locale, "contact"),
      service: (serviceId: string) => `/${locale}/productos/${serviceId}`,
      path: (key: RouteKey, hash?: string) => localizedPath(locale, key, hash),
    }),
    [locale],
  );
}

export function formatTranslation(template: string, values: Record<string, string | number>) {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, String(value)),
    template,
  );
}
