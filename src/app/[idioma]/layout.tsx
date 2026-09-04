import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { GoogleAds } from "@/components/analytics/GoogleAds";
import { BannerIdioma } from "@/components/layout/BannerIdioma";
import { BarraCtaMobile } from "@/components/layout/BarraCtaMobile";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/data/site";
import { dicionario, type Dicionario } from "@/i18n/dicionario";
import {
  HTML_LANG,
  IDIOMAS,
  OG_LOCALE,
  ehIdioma,
  type Idioma,
} from "@/i18n/idiomas";
import { organizacaoJsonLd, websiteJsonLd } from "@/lib/schema";

// Root layout do site, um por idioma. Toda URL vive sob /pt, /en ou /es; a
// raiz "/" só redireciona (ver next.config.ts) e URLs fora desse padrão caem
// no src/app/global-not-found.tsx.

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ idioma: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return IDIOMAS.map((idioma) => ({ idioma }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { idioma } = await params;
  if (!ehIdioma(idioma)) return {};
  const t = dicionario(idioma);
  return {
    metadataBase: new URL(site.dominio),
    title: {
      default: t.metadata.tituloPadrao,
      template: t.metadata.template,
    },
    description: site.descricao[idioma],
    openGraph: {
      type: "website",
      locale: OG_LOCALE[idioma],
      siteName: site.nome,
      url: `${site.dominio}/${idioma}`,
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { idioma } = await params;
  if (!ehIdioma(idioma)) notFound();

  const textosBanner = Object.fromEntries(
    IDIOMAS.map((outro) => [outro, dicionario(outro).bannerIdioma]),
  ) as Record<Idioma, Dicionario["bannerIdioma"]>;

  return (
    <html
      lang={HTML_LANG[idioma]}
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd dados={[organizacaoJsonLd(idioma), websiteJsonLd(idioma)]} />
        <Header idioma={idioma} />
        <main className="flex-1">{children}</main>
        <Footer idioma={idioma} />
        <FloatingWhatsApp idioma={idioma} />
        <BarraCtaMobile idioma={idioma} />
        <BannerIdioma idiomaAtual={idioma} textos={textosBanner} />
        <GoogleAds />
      </body>
    </html>
  );
}
