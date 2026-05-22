import type { Metadata } from "next";
import { PageMain } from "@/components/layout/page-main";
import { CareersSection } from "@/components/sections/careers-section";
import { TechnologiesSection } from "@/components/sections/technologies-section";
import { getLocaleDictionary, resolveLocale } from "@/i18n/server";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  const locale = resolveLocale(requestedLocale);
  const t = getLocaleDictionary(locale);

  return {
    title: t.meta.careers.title,
    description: t.meta.careers.description,
  };
}

export default function CareersPage() {
  return (
    <PageMain>
      <CareersSection />
      <TechnologiesSection />
    </PageMain>
  );
}
