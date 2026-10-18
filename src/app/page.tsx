import { redirectToFallbackLocale } from "@/i18n/server";

export default function HomePage() {
  redirectToFallbackLocale("home");
}
