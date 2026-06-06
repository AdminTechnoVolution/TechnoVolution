import type { Metadata } from "next";
import { PageMain } from "@/components/layout/page-main";
import { AboutSection } from "@/components/sections/about-section";
import { ValuesSection } from "@/components/sections/values-section";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce la misión, visión y valores de Techno Volution. Tecnología con propósito para impulsar la evolución digital.",
};

export default function AboutPage() {
  return (
    <PageMain>
      <AboutSection />
      <ValuesSection />
    </PageMain>
  );
}
