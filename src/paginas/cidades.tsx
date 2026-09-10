import type { Metadata } from "next";
import Link from "next/link";
import { CabecalhoPagina } from "@/components/sections/CabecalhoPagina";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { JsonLd } from "@/components/ui/JsonLd";
import { getCidades } from "@/data/cidades";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import { alternativas, caminho } from "@/i18n/rotas";
import { metadataDaPagina } from "@/lib/metadata";
import { trilhaJsonLd } from "@/lib/schema";

const pagina = { tipo: "cidades" } as const;

// Hub que lista as 10 cidades atendidas, cada uma com um parágrafo próprio e
// link para a página de cidade. Concentra links internos para as páginas de
// cidade (hoje só alcançadas pelo rodapé e pela grade do hub dos EUA) e dá a
// elas um ponto de entrada dedicado no menu de rastreamento do Google.
export function metadataCidadesHub(idioma: Idioma): Metadata {
  const t = dicionario(idioma).cidadesPagina;
  return metadataDaPagina({
    idioma,
    titulo: t.metaTitulo,
    descricao: t.metaDescricao,
    caminho: caminho(idioma, pagina),
    alternativas: alternativas(pagina),
  });
}

export function PaginaCidadesHub({ idioma }: { idioma: Idioma }) {
  const d = dicionario(idioma);
  const t = d.cidadesPagina;
  const cidades = getCidades(idioma);

  return (
    <>
      <JsonLd
        dados={trilhaJsonLd([
          { nome: d.schema.trilhaHome, caminho: caminho(idioma, { tipo: "home" }) },
          { nome: t.eyebrow, caminho: caminho(idioma, pagina) },
        ])}
      />
      <CabecalhoPagina
        eyebrow={t.eyebrow}
        titulo={t.titulo}
        descricao={t.descricao}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <ol className="grid gap-4 md:grid-cols-2">
          {cidades.map((cidade, indice) => (
            <li
              key={cidade.id}
              className={`revelar ${indice > 0 ? `revelar-${Math.min(indice % 5, 3)}` : ""}`}
            >
              <Link
                href={caminho(idioma, { tipo: "cidade", id: cidade.id })}
                className="group flex h-full flex-col rounded-xl border border-border bg-background p-6 transition hover:border-foreground"
              >
                <span className="font-display text-2xl uppercase leading-tight">
                  {cidade.nome}
                </span>
                <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted">
                  {cidade.estado}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {cidade.descricaoCurta}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold transition group-hover:translate-x-1 group-hover:text-accent">
                  {d.cidade.saibaMais} →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
      <CtaFinal idioma={idioma} />
    </>
  );
}
