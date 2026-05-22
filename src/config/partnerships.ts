import type { LucideIcon } from "lucide-react";
import { Cloud, Cpu, GitBranch, Handshake } from "lucide-react";

export type PartnershipCatalogItem = {
  id: keyof typeof import("@/i18n/locales/en.json")["partnerships"]["items"];
  icon: LucideIcon;
};

export const partnershipCatalog: PartnershipCatalogItem[] = [
  { id: "cloud", icon: Cloud },
  { id: "tech", icon: Cpu },
  { id: "integration", icon: GitBranch },
  { id: "strategic", icon: Handshake },
];
