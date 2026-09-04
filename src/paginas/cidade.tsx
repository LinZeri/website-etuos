import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Faq } from "@/components/sections/Faq";
import { Fundador } from "@/components/sections/Fundador";
import { JsonLd } from "@/components/ui/JsonLd";
import { getCidadePorId } from "@/data/cidades";
import { getServicos } from "@/data/servicos";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import type { IdCidade } from "@/i18n/mapa-slugs";
import { alternativas, caminho } from "@/i18n/rotas";
import { metadataDaPagina } from "@/lib/metadata";
import { faqJsonLd, trilhaJsonLd } from "@/lib/schema";

type Props = { idioma: Idioma; id: IdCidade };

export function metadataCidade(idioma: Idioma, id: IdCidade): Metadata {
  const cidade = getCidadePorId(idioma, id);
  const t = dicionario(idioma).cidade;
  return metadataDaPagina({
    idioma,
    titulo: t.metaTitulo(cidade.nome, cidade.estadoSigla),
    descricao: t.metaDescricao(cidade.nome, cidade.estado),
    caminho: caminho(idioma, { tipo: "cidade", id }),
    alternativas: alternativas({ tipo: "cidade", id }),
  });
}

export function PaginaCidade({ idioma, id }: Props) {
  const cidade = getCidadePorId(idioma, id);
  const d = dicionario(idioma);
  const t = d.cidade;
  const mensagem = t.mensagem(cidade.nome);

  return (
    <>
      <JsonLd
        dados={[
          trilhaJsonLd([
            {
              nome: d.schema.trilhaHome,
              caminho: caminho(idioma, { tipo: "home" }),
            },
            {
              nome: d.schema.trilhaEua,
              caminho: caminho(idioma, { tipo: "eua" }),
            },
            { nome: cidade.nome, caminho: caminho(idioma, { tipo: "cidade", id }) },
          ]),
          faqJsonLd(cidade.faq),
        ]}
      />

      <section className="grid-dark bg-foreground text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {cidade.nome}, {cidade.estado}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[0.95] md:text-6xl">
            {t.h1Antes} <span className="text-accent">{cidade.nome}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            {cidade.descricaoCurta}
          </p>
          <div className="mt-9">
            <WhatsAppButton
              idioma={idioma}
              texto={t.ctaHero(cidade.nome)}
              mensagem={mensagem}
              className="inline-block rounded-lg bg-accent px-7 py-4 text-lg font-semibold text-foreground transition hover:brightness-95"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl">
              {t.mercadoTitulo(cidade.nome)}
            </h2>
            {cidade.introducao.map((paragrafo) => (
              <p
                key={paragrafo.slice(0, 32)}
                className="mt-5 leading-relaxed text-foreground/85"
              >
                {paragrafo}
              </p>
            ))}
          </div>
          <aside className="w-full md:w-64">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {t.nichosTitulo}
            </p>
            <ul className="mt-4 space-y-2">
              {cidade.nichos.map((nicho) => (
                <li
                  key={nicho}
                  className="border-l-2 border-accent bg-surface px-4 py-2 text-sm font-medium"
                >
                  {nicho}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h2 className="max-w-2xl text-3xl md:text-4xl">
            {t.comoAjudamosTitulo(cidade.nome)}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {getServicos(idioma).map((servico) => (
              <Link
                key={servico.id}
                href={caminho(idioma, { tipo: "servico", id: servico.id })}
                className="group rounded-xl border border-border bg-background p-6 transition hover:border-foreground"
              >
                <h3 className="text-xl">{servico.nome}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {cidade.servicosLocais[servico.id]}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold transition group-hover:translate-x-1">
                  {t.saibaMais} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl">
              {t.comoBuscamTitulo(cidade.nome)}
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-foreground/85">
              {cidade.comoBuscam}
            </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl">
              {t.atendemosTitulo(cidade.nome)}
            </h2>
            <p className="mt-5 text-muted">
              {t.atendemosDescricao(cidade.nome)}
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {cidade.regioes.map((regiao) => (
                <li
                  key={regiao}
                  className="rounded-full border border-border px-4 py-2 text-sm font-medium"
                >
                  {regiao}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Fundador idioma={idioma} compacto />

      <Faq titulo={t.faqTitulo(cidade.nome)} perguntas={cidade.faq} />

      <CtaFinal
        idioma={idioma}
        titulo={t.ctaTitulo(cidade.nome)}
        descricao={t.ctaDescricao}
        textoBotao={t.ctaHero(cidade.nome)}
        mensagem={mensagem}
      />
    </>
  );
}
