import type { Metadata } from "next";
import { CidadesGrid } from "@/components/sections/CidadesGrid";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { Faq } from "@/components/sections/Faq";
import { Fundador } from "@/components/sections/Fundador";
import { Hero } from "@/components/sections/Hero";
import { ProvaNumeros } from "@/components/sections/ProvaNumeros";
import { Resultados } from "@/components/sections/Resultados";
import { ServicosLista } from "@/components/sections/ServicosLista";
import { JsonLd } from "@/components/ui/JsonLd";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import { alternativas, caminho } from "@/i18n/rotas";
import { metadataDaPagina } from "@/lib/metadata";
import { faqJsonLd, trilhaJsonLd } from "@/lib/schema";

type Pais = "eua" | "brasil";

// Hubs de país. Os dois têm a mesma estrutura; o hub dos EUA ganha o letreiro
// e a grade de cidades atendidas. Cada um tem FAQ própria.
export function metadataPais(idioma: Idioma, tipo: Pais): Metadata {
  const t = dicionario(idioma)[tipo];
  return metadataDaPagina({
    idioma,
    titulo: t.metaTitulo,
    descricao: t.metaDescricao,
    caminho: caminho(idioma, { tipo }),
    alternativas: alternativas({ tipo }),
  });
}

export function PaginaPais({ idioma, tipo }: { idioma: Idioma; tipo: Pais }) {
  const d = dicionario(idioma);
  const t = d[tipo];
  const eua = tipo === "eua";
  return (
    <>
      <JsonLd
        dados={[
          faqJsonLd(t.faq),
          trilhaJsonLd([
            { nome: d.schema.trilhaHome, caminho: caminho(idioma, { tipo: "home" }) },
            {
              nome: eua ? d.schema.trilhaEua : d.nav.brasil,
              caminho: caminho(idioma, { tipo }),
            },
          ]),
        ]}
      />
      <Hero
        idioma={idioma}
        eyebrow={t.hero.eyebrow}
        titulo={t.hero.titulo}
        destaque={t.hero.destaque}
        mostrarCidades={eua}
      />
      <ProvaNumeros idioma={idioma} sobreposto={!eua} />
      <ServicosLista idioma={idioma} />
      <Resultados idioma={idioma} />
      <Depoimentos idioma={idioma} />
      <ComoFunciona idioma={idioma} />
      {eua && <CidadesGrid idioma={idioma} />}
      <Fundador idioma={idioma} />
      <Faq titulo={d.faq.titulo} perguntas={t.faq} />
      <CtaFinal
        idioma={idioma}
        titulo={t.cta.titulo}
        descricao={t.cta.descricao}
        textoBotao={t.cta.botao}
      />
    </>
  );
}
