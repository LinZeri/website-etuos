import type { Metadata } from "next";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { Faq } from "@/components/sections/Faq";
import { Fundador } from "@/components/sections/Fundador";
import { Hero } from "@/components/sections/Hero";
import { PaisesGrid } from "@/components/sections/PaisesGrid";
import { ProvaNumeros } from "@/components/sections/ProvaNumeros";
import { Resultados } from "@/components/sections/Resultados";
import { ServicosLista } from "@/components/sections/ServicosLista";
import { TickerServicos } from "@/components/sections/TickerServicos";
import { JsonLd } from "@/components/ui/JsonLd";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import { alternativas, caminho } from "@/i18n/rotas";
import { metadataDaPagina } from "@/lib/metadata";
import { faqJsonLd } from "@/lib/schema";

const pagina = { tipo: "home" } as const;

export function metadataHome(idioma: Idioma): Metadata {
  // Sem título próprio: a home usa o title.default e a description do layout.
  return metadataDaPagina({
    idioma,
    caminho: caminho(idioma, pagina),
    alternativas: alternativas(pagina),
  });
}

// Funil da home: promessa, prova, serviços, resultados, depoimento, processo,
// fundador, países, objeções e o CTA final.
export function PaginaHome({ idioma }: { idioma: Idioma }) {
  const t = dicionario(idioma);
  return (
    <>
      <JsonLd dados={faqJsonLd(t.home.faq)} />
      <Hero
        idioma={idioma}
        eyebrow={t.home.hero.eyebrow}
        titulo={t.home.hero.titulo}
        destaque={t.home.hero.destaque}
        destaqueEstilo="contorno"
        mostrarCidades={false}
      />
      <ProvaNumeros idioma={idioma} sobreposto />
      <TickerServicos idioma={idioma} />
      <ServicosLista idioma={idioma} />
      <Resultados idioma={idioma} />
      <Depoimentos idioma={idioma} variante="destaque" />
      <ComoFunciona idioma={idioma} />
      <Fundador idioma={idioma} />
      <PaisesGrid idioma={idioma} />
      <Faq titulo={t.faq.titulo} perguntas={t.home.faq} />
      <CtaFinal idioma={idioma} />
    </>
  );
}
