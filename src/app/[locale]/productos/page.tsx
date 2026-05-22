import type { Metadata } from "next";
import { PageMain } from "@/components/layout/page-main";
import { ProductsSection } from "@/components/sections/products-section";
import { getLocaleDictionary, resolveLocale } from "@/i18n/server";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  const locale = resolveLocale(requestedLocale);
  const t = getLocaleDictionary(locale);

  return {
    title: t.meta.products.title,
    description: t.meta.products.description,
  };
}

export default function ProductsPage() {
  return (
    <PageMain>
      <ProductsSection />
    </PageMain>
  );
}
