import type { Metadata } from "next";
import { PageMain } from "@/components/layout/page-main";
import { ProductsSection } from "@/components/sections/products-section";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Descubre Single, Play4Cash, UnlockIt Adventure, Mero Chef, Anty Spend y nuestros servicios de desarrollo: apps móviles, plataformas web y soluciones empresariales.",
};

export default function ProductsPage() {
  return (
    <PageMain>
      <ProductsSection />
    </PageMain>
  );
}
