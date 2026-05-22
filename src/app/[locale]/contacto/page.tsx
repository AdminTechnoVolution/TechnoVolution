import type { Metadata } from "next";
import { PageMain } from "@/components/layout/page-main";
import { ContactSection } from "@/components/sections/contact-section";
import { getLocaleDictionary, resolveLocale } from "@/i18n/server";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  const locale = resolveLocale(requestedLocale);
  const t = getLocaleDictionary(locale);

  return {
    title: t.meta.contact.title,
    description: t.meta.contact.description,
  };
}

export default function ContactPage() {
  return (
    <PageMain>
      <ContactSection />
    </PageMain>
  );
}
