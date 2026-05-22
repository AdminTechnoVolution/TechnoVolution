export type ClientCatalogItem = {
  id: keyof typeof import("@/i18n/locales/en.json")["clients"]["items"];
  initials: string;
};

export const clientCatalog: ClientCatalogItem[] = [
  { id: "client-1", initials: "CE" },
  { id: "client-2", initials: "CF" },
  { id: "client-3", initials: "CR" },
  { id: "client-4", initials: "CH" },
  { id: "client-5", initials: "CS" },
  { id: "client-6", initials: "CG" },
];
