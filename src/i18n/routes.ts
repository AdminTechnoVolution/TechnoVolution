export const routeSegments = {
  home: "",
  about: "/nosotros",
  products: "/productos",
  clients: "/clientes",
  team: "/equipo",
  careers: "/carreras",
  contact: "/contacto",
} as const;

export type RouteKey = keyof typeof routeSegments;

export function localizedPath(locale: string, key: RouteKey, hash?: string) {
  const base = `/${locale}${routeSegments[key]}`;
  return hash ? `${base}${hash}` : base;
}

export function stripLocaleFromPathname(pathname: string, locales: string[]) {
  const segments = pathname.split("/");
  const maybeLocale = segments[1];
  if (maybeLocale && locales.includes(maybeLocale)) {
    const rest = `/${segments.slice(2).join("/")}`.replace(/\/$/, "") || "/";
    return { locale: maybeLocale, pathname: rest === "/" ? "" : rest };
  }
  return { locale: null, pathname };
}
