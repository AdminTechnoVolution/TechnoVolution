import type { Metadata } from "next";
import { PageMain } from "@/components/layout/page-main";
import { CareersSection } from "@/components/sections/careers-section";
import { TechnologiesSection } from "@/components/sections/technologies-section";

export const metadata: Metadata = {
  title: "Trabaja con nosotros",
  description:
    "Únete a Techno Volution. Buscamos talento apasionado por la tecnología, la innovación y el producto digital.",
};

export default function CareersPage() {
  return (
    <PageMain>
      <CareersSection />
      <TechnologiesSection />
    </PageMain>
  );
}
