import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Comparativo } from "@/components/sections/Comparativo";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Faq } from "@/components/sections/Faq";
import { Fundador } from "@/components/sections/Fundador";
import { JsonLd } from "@/components/ui/JsonLd";
import { getServicoPorId } from "@/data/servicos";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import type { IdServico } from "@/i18n/mapa-slugs";
import { alternativas, caminho } from "@/i18n/rotas";
import { metadataDaPagina } from "@/lib/metadata";
import { faqJsonLd, servicoJsonLd, trilhaJsonLd } from "@/lib/schema";

type Props = { idioma: Idioma; id: IdServico };

export function metadataServico(idioma: Idioma, id: IdServico): Metadata {
  const servico = getServicoPorId(idioma, id);
  return metadataDaPagina({
    idioma,
    titulo: servico.titulo,
    descricao: servico.descricaoCurta,
    caminho: caminho(idioma, { tipo: "servico", id }),
    alternativas: alternativas({ tipo: "servico", id }),
  });
}

export function PaginaServico({ idioma, id }: Props) {
  const servico = getServicoPorId(idioma, id);
  const t = dicionario(idioma);
  const mensagem = t.servico.mensagem(servico.nome);

  return (
    <>
      <JsonLd
        dados={[
          servicoJsonLd(servico),
          trilhaJsonLd([
            {
              nome: t.schema.trilhaHome,
              caminho: caminho(idioma, { tipo: "home" }),
            },
            {
              nome: t.schema.trilhaServicos,
              caminho: caminho(idioma, { tipo: "servicos" }),
            },
            {
              nome: servico.nome,
              caminho: caminho(idioma, { tipo: "servico", id }),
            },
          ]),
          faqJsonLd(servico.faq),
        ]}
      />

      <section className="grid-dark bg-foreground text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {t.servico.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[0.95] md:text-6xl">
            {servico.titulo}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            {servico.heroDescricao}
          </p>
          <div className="mt-9">
            <WhatsAppButton
              idioma={idioma}
              texto={t.servico.ctaHero}
              mensagem={mensagem}
              className="inline-block rounded-lg bg-accent px-7 py-4 text-lg font-semibold text-foreground transition hover:brightness-95"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h2 className="max-w-2xl text-3xl md:text-4xl">
            {t.servico.doresTitulo}
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {servico.dores.map((dor) => (
              <li
                key={dor}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-5"
              >
                <span aria-hidden className="font-display text-xl text-accent">
                  ✕
                </span>
                <span className="text-foreground/90">{dor}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-lg font-medium">
            {t.servico.doresFecho}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          {t.servico.entregasEyebrow}
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
          {t.servico.entregasTitulo}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servico.entregas.map((entrega) => (
            <div
              key={entrega.titulo}
              className="rounded-xl border-t-2 border-accent bg-surface p-6"
            >
              <h3 className="text-lg">{entrega.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {entrega.descricao}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Comparativo idioma={idioma} linhas={servico.comparativo} />

      <section className="grid-dark grao bg-foreground text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {t.servico.processoEyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
            {t.servico.processoTitulo}
          </h2>
          <ol className="mt-10 grid gap-10 md:grid-cols-4 md:gap-6">
            {servico.processo.map((passo, indice) => (
              <li key={passo.titulo} className="border-t-2 border-accent pt-5">
                <span className="font-display text-5xl text-accent">
                  {indice + 1}
                </span>
                <h3 className="mt-3 text-xl">{passo.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {passo.descricao}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-12 max-w-2xl border-l-2 border-accent pl-5 text-white/80">
            {servico.paraQuem}
          </p>
        </div>
      </section>

      <Fundador idioma={idioma} compacto />

      <Faq titulo={t.servico.faqTitulo(servico.nome)} perguntas={servico.faq} />

      <CtaFinal
        idioma={idioma}
        titulo={t.servico.ctaTitulo}
        descricao={t.servico.ctaDescricao}
        mensagem={mensagem}
      />
    </>
  );
}
