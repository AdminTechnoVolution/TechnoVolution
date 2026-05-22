import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { LangSetter } from "@/components/layout/lang-setter";
import { I18nProvider } from "@/i18n/client";
import { locales } from "@/i18n/config";
import { getLocaleDictionary, resolveLocale } from "@/i18n/server";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: requestedLocale } = await params;
  const locale = resolveLocale(requestedLocale);

  if (!locales.includes(requestedLocale)) {
    notFound();
  }

  const dictionary = getLocaleDictionary(locale);

  return (
    <I18nProvider locale={locale} dictionary={dictionary}>
      <LangSetter />
      <Header />
      <main>{children}</main>
      <Footer />
    </I18nProvider>
  );
}
