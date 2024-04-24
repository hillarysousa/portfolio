import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import './style.scss';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hillary Sousa - Design & Development",
  description: "Portfólio de Hillary Sousa",
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
