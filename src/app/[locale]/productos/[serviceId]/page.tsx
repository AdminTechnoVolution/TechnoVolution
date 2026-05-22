import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageMain } from "@/components/layout/page-main";
import { ServiceDetailSection } from "@/components/sections/service-detail-section";
import { isServiceId, type ServiceId } from "@/config/services";
import { serviceCatalog } from "@/config/products";
import { getLocaleDictionary, resolveLocale } from "@/i18n/server";

type PageProps = {
  params: Promise<{ locale: string; serviceId: string }>;
};

export function generateStaticParams() {
  return serviceCatalog.map((service) => ({ serviceId: service.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: requestedLocale, serviceId } = await params;

  if (!isServiceId(serviceId)) {
    return {};
  }

  const locale = resolveLocale(requestedLocale);
  const t = getLocaleDictionary(locale);
  const id = serviceId as ServiceId;
  const serviceName = t.products.services[id].name;

  return {
    title: serviceName,
    description: t.serviceDetails[id].metaDescription,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { serviceId } = await params;

  if (!isServiceId(serviceId)) {
    notFound();
  }

  return (
    <PageMain>
      <ServiceDetailSection serviceId={serviceId} />
    </PageMain>
  );
}
