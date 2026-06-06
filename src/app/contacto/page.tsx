import type { Metadata } from "next";
import { PageMain } from "@/components/layout/page-main";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para conocer cómo Techno Volution puede ayudarte a evolucionar digitalmente.",
};

export default function ContactPage() {
  return (
    <PageMain>
      <ContactSection />
    </PageMain>
  );
}
