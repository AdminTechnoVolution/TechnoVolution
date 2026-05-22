import type { Metadata } from "next";
import { PageMain } from "@/components/layout/page-main";
import { ClientsSection } from "@/components/sections/clients-section";
import { PartnershipsSection } from "@/components/sections/partnerships-section";
import { getLocaleDictionary, resolveLocale } from "@/i18n/server";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  const locale = resolveLocale(requestedLocale);
  const t = getLocaleDictionary(locale);

  return {
    title: t.meta.clients.title,
    description: t.meta.clients.description,
  };
}

export default function ClientsPage() {
  return (
    <PageMain>
      <ClientsSection />
      <PartnershipsSection />
    </PageMain>
  );
}
