import { serviceCatalog } from "@/config/products";

export type ServiceId = "mobile" | "web" | "enterprise" | "realtime" | "automation";

export const serviceIds: ServiceId[] = serviceCatalog.map((service) => service.id as ServiceId);

export function isServiceId(value: string): value is ServiceId {
  return serviceIds.includes(value as ServiceId);
}

export function getServiceCatalogItem(serviceId: ServiceId) {
  return serviceCatalog.find((service) => service.id === serviceId);
}
