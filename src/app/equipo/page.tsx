import type { Metadata } from "next";
import { PageMain } from "@/components/layout/page-main";
import { TeamSection } from "@/components/sections/team-section";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Conoce al equipo fundador de Techno Volution: liderazgo con visión en tecnología, producto e innovación.",
};

export default function TeamPage() {
  return (
    <PageMain>
      <TeamSection />
    </PageMain>
  );
}
