import type { Metadata } from "next";
import { PageMain } from "@/components/layout/page-main";
import { ClientsSection } from "@/components/sections/clients-section";
import { PartnershipsSection } from "@/components/sections/partnerships-section";

export const metadata: Metadata = {
  title: "Clientes",
  description:
    "Empresas e instituciones que confían en Techno Volution para impulsar su transformación digital.",
};

export default function ClientsPage() {
  return (
    <PageMain>
      <ClientsSection />
      <PartnershipsSection />
    </PageMain>
  );
}
