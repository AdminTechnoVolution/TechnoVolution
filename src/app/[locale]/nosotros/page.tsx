import type { Metadata } from "next";
import { PageMain } from "@/components/layout/page-main";
import { AboutSection } from "@/components/sections/about-section";
import { ValuesSection } from "@/components/sections/values-section";
import { getLocaleDictionary, resolveLocale } from "@/i18n/server";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  const locale = resolveLocale(requestedLocale);
  const t = getLocaleDictionary(locale);

  return {
    title: t.meta.about.title,
    description: t.meta.about.description,
  };
}

export default function AboutPage() {
  return (
    <PageMain>
      <AboutSection />
      <ValuesSection />
    </PageMain>
  );
}
