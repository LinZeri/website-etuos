import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CabecalhoPagina } from "@/components/sections/CabecalhoPagina";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Fundador } from "@/components/sections/Fundador";
import { ProvaNumeros } from "@/components/sections/ProvaNumeros";
import { ServicosLista } from "@/components/sections/ServicosLista";
import { JsonLd } from "@/components/ui/JsonLd";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import { alternativas, caminho } from "@/i18n/rotas";
import { metadataDaPagina } from "@/lib/metadata";
import { trilhaJsonLd } from "@/lib/schema";

const pagina = { tipo: "servicos" } as const;

export function metadataServicos(idioma: Idioma): Metadata {
  const t = dicionario(idioma).servicos;
  return metadataDaPagina({
    idioma,
    titulo: t.metaTitulo,
    descricao: t.metaDescricao,
    caminho: caminho(idioma, pagina),
    alternativas: alternativas(pagina),
  });
}

export function PaginaServicos({ idioma }: { idioma: Idioma }) {
  const d = dicionario(idioma);
  const t = d.servicos;
  return (
    <>
      <JsonLd
        dados={trilhaJsonLd([
          { nome: d.schema.trilhaHome, caminho: caminho(idioma, { tipo: "home" }) },
          { nome: d.nav.servicos, caminho: caminho(idioma, pagina) },
        ])}
      />
      <CabecalhoPagina
        eyebrow={t.eyebrow}
        titulo={t.titulo}
        descricao={t.descricao}
      >
        <WhatsAppButton
          idioma={idioma}
          texto={d.hero.cta}
          className="inline-block rounded-lg bg-accent px-7 py-4 text-lg font-semibold text-foreground transition hover:brightness-95"
        />
      </CabecalhoPagina>
      <ProvaNumeros idioma={idioma} sobreposto />
      <ServicosLista idioma={idioma} />
      <Fundador idioma={idioma} compacto />
      <CtaFinal idioma={idioma} />
    </>
  );
}
