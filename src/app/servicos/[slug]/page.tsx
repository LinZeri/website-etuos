import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { getServico, servicos } from "@/data/servicos";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicos.map((servico) => ({ slug: servico.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const servico = getServico(slug);
  if (!servico) return {};
  return {
    title: servico.titulo,
    description: servico.descricaoCurta,
    alternates: { canonical: `/servicos/${servico.slug}` },
  };
}

export default async function ServicoPage({ params }: Props) {
  const { slug } = await params;
  const servico = getServico(slug);
  if (!servico) notFound();

  return (
    <>
      <section className="grid-dark bg-foreground text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Serviço
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[0.95] md:text-6xl">
            {servico.titulo}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            {servico.heroDescricao}
          </p>
          <div className="mt-9">
            <WhatsAppButton
              texto="Quero esse serviço"
              mensagem={`Olá! Vim pelo site da Etuos e quero saber mais sobre ${servico.nome}.`}
              className="inline-block rounded-lg bg-accent px-7 py-4 text-lg font-semibold text-foreground transition hover:brightness-95"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h2 className="max-w-2xl text-3xl md:text-4xl">
            Isso parece com a sua rotina?
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
            Se você assentiu para pelo menos uma, este serviço foi feito para
            você.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          O que está incluso
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
          O que a gente entrega
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

      <section className="grid-dark bg-foreground text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Processo
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
            Como funciona na prática
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

      <CtaFinal
        titulo="Vamos começar?"
        descricao="Chama no WhatsApp, conta sobre o seu negócio e a gente te diz com sinceridade se esse serviço é o certo para o seu momento."
        mensagem={`Olá! Vim pelo site da Etuos e quero saber mais sobre ${servico.nome}.`}
      />
    </>
  );
}
