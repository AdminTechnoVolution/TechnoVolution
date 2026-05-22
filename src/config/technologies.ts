import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Code2,
  Database,
  Globe,
  Leaf,
  Boxes,
  Radio,
  Server,
  Smartphone,
  ArrowLeftRight,
} from "lucide-react";

export type TechnologyCatalogItem = {
  id: string;
  name?: string;
  icon: LucideIcon;
  translatable?: boolean;
};

export const technologyCatalog: TechnologyCatalogItem[] = [
  { id: "rn", name: "React Native", icon: Code2 },
  { id: "angular", name: "Angular", icon: Globe },
  { id: "dotnet", name: ".NET", icon: Code2 },
  { id: "node", name: "Node.js", icon: Server },
  { id: "azure", name: "Azure", icon: Cloud },
  { id: "cloud", name: "Cloud", icon: Cloud },
  { id: "sql", name: "SQL", icon: Database },
  { id: "mongo", name: "MongoDB", icon: Leaf },
  { id: "k8s", name: "Kubernetes", icon: Boxes },
  { id: "apis", name: "APIs", icon: ArrowLeftRight },
  { id: "realtime", icon: Radio, translatable: true },
  { id: "mobile", icon: Smartphone, translatable: true },
];
