import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { GoogleAds } from "@/components/analytics/GoogleAds";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/data/site";
import { organizacaoJsonLd, websiteJsonLd } from "@/lib/schema";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.dominio),
  title: {
    default: "Etuos | Marketing digital para negócios no Brasil e nos EUA",
    template: "%s | Etuos",
  },
  description: site.descricao,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.nome,
    url: site.dominio,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd dados={[organizacaoJsonLd(), websiteJsonLd()]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <GoogleAds />
      </body>
    </html>
  );
}
