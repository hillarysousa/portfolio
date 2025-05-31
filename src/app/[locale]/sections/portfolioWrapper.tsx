import initTranslations from "@/app/i18n";
import TranslationsProvider from "../providers/translations";
import Portfolio from "./portfolio";

const i18nNamespaces = ["t"];

export default async function PortfolioWrapper({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Portfolio />
    </TranslationsProvider>
  );
}
