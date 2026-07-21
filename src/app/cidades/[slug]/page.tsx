import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { cidades, getCidade } from "@/data/cidades";
import { servicos } from "@/data/servicos";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cidades.map((cidade) => ({ slug: cidade.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cidade = getCidade(slug);
  if (!cidade) return {};
  return {
    title: `Marketing digital para brasileiros em ${cidade.nome}, ${cidade.estadoSigla}`,
    description: `Agência de marketing digital para brasileiros em ${cidade.nome}, ${cidade.estado}. Tráfego pago, SEO e sites para atrair mais clientes na região.`,
    alternates: { canonical: `/cidades/${cidade.slug}` },
  };
}

export default async function CidadePage({ params }: Props) {
  const { slug } = await params;
  const cidade = getCidade(slug);
  if (!cidade) notFound();

  return (
    <>
      <section className="grid-dark bg-foreground text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {cidade.nome}, {cidade.estado}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[0.95] md:text-6xl">
            Marketing digital para brasileiros em{" "}
            <span className="text-accent">{cidade.nome}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            {cidade.descricaoCurta}
          </p>
          <div className="mt-9">
            <WhatsAppButton
              texto={`Atrair clientes em ${cidade.nome}`}
              mensagem={`Olá! Tenho um negócio na região de ${cidade.nome} e quero atrair mais clientes.`}
              className="inline-block rounded-lg bg-accent px-7 py-4 text-lg font-semibold text-foreground transition hover:brightness-95"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl">
              O mercado brasileiro em {cidade.nome}
            </h2>
            {cidade.introducao.map((paragrafo) => (
              <p key={paragrafo.slice(0, 32)} className="mt-5 leading-relaxed text-foreground/85">
                {paragrafo}
              </p>
            ))}
          </div>
          <aside className="w-full md:w-64">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Nichos fortes na região
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
            Como ajudamos negócios em {cidade.nome}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {servicos.map((servico) => (
              <Link
                key={servico.slug}
                href={`/servicos/${servico.slug}`}
                className="group rounded-xl border border-border bg-background p-6 transition hover:border-foreground"
              >
                <h3 className="text-xl">{servico.nome}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {servico.descricaoCurta}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold transition group-hover:translate-x-1">
                  Saiba mais →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="max-w-2xl text-3xl md:text-4xl">
          Atendemos {cidade.nome} e região
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Trabalhamos com negócios em toda a área de {cidade.nome}, incluindo:
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
      </section>

      <CtaFinal
        titulo={`Pronto para crescer em ${cidade.nome}?`}
        descricao="Chama a gente no WhatsApp e receba um diagnóstico do seu marketing na sua região, sem compromisso."
        textoBotao={`Atrair clientes em ${cidade.nome}`}
        mensagem={`Olá! Tenho um negócio na região de ${cidade.nome} e quero atrair mais clientes.`}
      />
    </>
  );
}
