import type { Metadata } from "next";
import Link from "next/link";
import { CabecalhoPagina } from "@/components/sections/CabecalhoPagina";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import { alternativas, caminho } from "@/i18n/rotas";
import { getPosts } from "@/lib/blog";
import { metadataDaPagina } from "@/lib/metadata";

const pagina = { tipo: "blog" } as const;

export function metadataBlog(idioma: Idioma): Metadata {
  const t = dicionario(idioma).blog;
  return metadataDaPagina({
    idioma,
    titulo: t.metaTitulo,
    descricao: t.metaDescricao,
    caminho: caminho(idioma, pagina),
    alternativas: alternativas(pagina),
  });
}

export function PaginaBlog({ idioma }: { idioma: Idioma }) {
  const t = dicionario(idioma).blog;
  const posts = getPosts(idioma);
  return (
    <>
      <CabecalhoPagina
        eyebrow={t.eyebrow}
        titulo={t.titulo}
        descricao={t.descricao}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <ol className="border-t border-border">
          {posts.map((post, indice) => (
            <li
              key={post.slug}
              className={`revelar border-b border-border ${indice > 0 ? `revelar-${Math.min(indice, 3)}` : ""}`}
            >
              <Link
                href={caminho(idioma, { tipo: "post", slug: post.slug })}
                className="group grid gap-4 py-8 transition hover:bg-surface md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10 md:px-4 md:py-10"
              >
                <span className="font-display texto-contorno text-4xl text-foreground/30 transition group-hover:text-accent md:text-6xl">
                  {String(indice + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    {post.frontmatter.data}
                  </span>
                  <h2 className="mt-2 text-2xl md:text-3xl">
                    {post.frontmatter.titulo}
                  </h2>
                  <p className="mt-2 max-w-2xl text-muted">
                    {post.frontmatter.descricao}
                  </p>
                </span>
                <span className="text-sm font-semibold transition group-hover:translate-x-1 group-hover:text-accent">
                  {t.ler} →
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
