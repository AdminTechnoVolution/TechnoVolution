import type { LucideIcon } from "lucide-react";
import { Cog, Globe, Phone, Building2, Radio } from "lucide-react";

export type ProductCatalogItem = {
  id: string;
  icon?: LucideIcon;
  logo?: string;
  url?: string;
};

export const featuredProductCatalog: ProductCatalogItem[] = [
  {
    id: "single",
    logo: "/products/single.png",
    url: "https://single.techno-volution.com/",
  },
  {
    id: "play4cash",
    logo: "/products/play4cash.png",
    url: "https://p4c.techno-volution.com/",
  },
];

export const serviceCatalog: ProductCatalogItem[] = [
  { id: "mobile", icon: Phone },
  { id: "web", icon: Globe },
  { id: "enterprise", icon: Building2 },
  { id: "realtime", icon: Radio },
  { id: "automation", icon: Cog },
];
