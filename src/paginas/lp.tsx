import type { Metadata } from "next";
import { FormularioCampanha } from "@/components/campanha/FormularioCampanha";
import {
  CtaCampanha,
  HeroCampanha,
  Passos,
  PlanoDeAcao,
  QuemFaz,
} from "@/components/campanha/secoes";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { Faq } from "@/components/sections/Faq";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import type { IdLp } from "@/i18n/mapa-slugs";
import { caminho } from "@/i18n/rotas";
import { metadataDaPagina } from "@/lib/metadata";
import { conteudoLp } from "./conteudo";

type Props = { idioma: Idioma; id: IdLp };

// Landings de campanha paga. Ficam fora do índice do Google de propósito, para
// não competirem com as páginas de serviço, fora do sitemap e sem hreflang
// (página noindex não entra em cluster de idiomas).
export function metadataLp(idioma: Idioma, id: IdLp): Metadata {
  const c = conteudoLp(idioma, id);
  return metadataDaPagina({
    idioma,
    titulo: c.metaTitulo,
    descricao: c.metaDescricao,
    caminho: caminho(idioma, { tipo: "lp", id }),
    indexar: false,
  });
}

export function PaginaLp({ idioma, id }: Props) {
  const c = conteudoLp(idioma, id);
  const t = dicionario(idioma);
  const linkPrivacidade = caminho(idioma, { tipo: "privacidade" });

  const formulario = (comId: boolean) => (
    <FormularioCampanha
      idioma={idioma}
      origem={id}
      id={comId ? "plano" : undefined}
      titulo={c.formulario.titulo}
      descricao={c.formulario.descricao}
      textoBotao={c.formulario.botao}
      mensagemWhatsApp={c.mensagemWhatsApp}
      textos={t.formulario}
      linkPrivacidade={linkPrivacidade}
    />
  );

  return (
    <>
      <HeroCampanha
        eyebrow={c.hero.eyebrow}
        titulo={c.hero.titulo}
        destaque={c.hero.destaque}
        descricao={c.hero.descricao}
        provas={c.hero.provas}
      >
        {formulario(true)}
      </HeroCampanha>

      <PlanoDeAcao
        eyebrow={c.plano.eyebrow}
        titulo={c.plano.titulo}
        descricao={c.plano.descricao}
        itens={c.plano.itens}
      />

      <Passos idioma={idioma} titulo={c.passosTitulo} passos={c.passos} />

      <Depoimentos idioma={idioma} />

      <QuemFaz idioma={idioma} texto={c.quemFaz} />

      <Faq titulo={t.faq.titulo} perguntas={c.perguntas} />

      <CtaCampanha
        idioma={idioma}
        titulo={c.cta.titulo}
        descricao={c.cta.descricao}
        mensagemWhatsApp={c.mensagemWhatsApp}
      >
        {formulario(false)}
      </CtaCampanha>
    </>
  );
}
