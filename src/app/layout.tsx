import type { Metadata, Viewport } from "next";
import { Yeseva_One, Sarabun } from "next/font/google";
import Logo from "./assets/images/logo.png";

import './style.scss';

const sarabun = Sarabun({
  subsets: ["latin"],
  variable: '--font-sarabun',
  display: 'swap',
  weight: ['300', '500', '600', '700']
});

const yeseva_one = Yeseva_One({
  subsets: ['latin'],
  variable: '--font-yeseva-one',
  display: 'swap',
  weight: "400"
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hillarysousa.com.br'),
  title: "Hillary Sousa - Design & Development",
  description: "Portfólio de Hillary Sousa",
  openGraph: {
    type: 'website',
    url: 'https://hillarysousa.com.br/',
    title: "Hillary Sousa - Design & Development",
    description: "Portfólio de Hillary Sousa",
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sarabun.variable} ${yeseva_one.variable}`}>
      <body >{children}</body>
    </html>
  );
}
