import type { Metadata, Viewport } from "next";
import { dir } from "i18next";
import { Yeseva_One, Sarabun } from "next/font/google";
import "../i18n";
import "./style.scss";
import i18nConfig from "@/i18nConfig";

const sarabun = Sarabun({
  subsets: ["latin"],
  variable: "--font-sarabun",
  display: "swap",
  weight: ["300", "500", "600", "700"],
});

const yeseva_one = Yeseva_One({
  subsets: ["latin"],
  variable: "--font-yeseva-one",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hillarysousa.com.br"),
  title: "Hillary Sousa - Design & Development",
  description: "Portfólio de Hillary Sousa",
  openGraph: {
    type: "website",
    url: "https://hillarysousa.com.br/",
    title: "Hillary Sousa - Design & Development",
    description: "Portfólio de Hillary Sousa",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html
      lang={locale}
      dir={dir(locale)}
      className={`${sarabun.variable} ${yeseva_one.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
