import dynamic from "next/dynamic";
import Home from "./sections/home";
import Portfolio from "./sections/portfolio";
import Experience from "./sections/experience";
import Contact from "./sections/contact";
import TranslationsProvider from "./providers/translations";
import initTranslations from "../i18n";

const i18nNamespaces = ["t"];

const NoSSRHeader = dynamic(() => import("./components/header"), {
  ssr: false,
});

export default async function App({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <NoSSRHeader />
      <main>
        <Home />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
    </TranslationsProvider>
  );
}
