import type { LucideIcon } from "lucide-react";
import {
  Bolt,
  Diamond,
  Heart,
  Lightbulb,
  Lock,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

export type ValueCatalogItem = {
  id: keyof typeof import("@/i18n/locales/en.json")["values"]["items"];
  icon: LucideIcon;
  color: string;
};

export const valueCatalog: ValueCatalogItem[] = [
  { id: "innovacion", icon: Lightbulb, color: "#00D2FF" },
  { id: "calidad", icon: Diamond, color: "#7029FF" },
  { id: "confianza", icon: ShieldCheck, color: "#FF00D4" },
  { id: "velocidad", icon: Bolt, color: "#00D2FF" },
  { id: "equipo", icon: Users, color: "#7029FF" },
  { id: "escalabilidad", icon: TrendingUp, color: "#FF00D4" },
  { id: "seguridad", icon: Lock, color: "#00D2FF" },
  { id: "ux", icon: Heart, color: "#7029FF" },
];
