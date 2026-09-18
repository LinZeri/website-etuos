import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { JsonLd } from "@/components/ui/JsonLd";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import { caminho } from "@/i18n/rotas";
import {
  alternativasDoPost,
  getFaqDoSchemaSidecar,
  getPost,
  type Post,
} from "@/lib/blog";
import { metadataDaPagina } from "@/lib/metadata";
import { postJsonLd, trilhaJsonLd } from "@/lib/schema";

// O post pode não existir (slug digitado errado): quem chama decide o 404.
export function buscarPost(idioma: Idioma, slug: string): Post | undefined {
  return getPost(idioma, slug);
}

export function metadataPost(post: Post): Metadata {
  return metadataDaPagina({
    idioma: post.idioma,
    titulo: post.frontmatter.metaTitulo ?? post.frontmatter.titulo,
    descricao: post.frontmatter.descricao,
    caminho: caminho(post.idioma, { tipo: "post", slug: post.slug }),
    alternativas: alternativasDoPost(post),
    tipo: "article",
    publicadoEm: post.frontmatter.data,
    imagem: post.frontmatter.imagem,
  });
}

export function PaginaPost({ post }: { post: Post }) {
  const { idioma, slug } = post;
  const t = dicionario(idioma);

  return (
    <article className="prose mx-auto max-w-3xl px-4 py-16">
      <JsonLd
        dados={[
          postJsonLd(idioma, slug, post.frontmatter),
          trilhaJsonLd([
            {
              nome: t.schema.trilhaHome,
              caminho: caminho(idioma, { tipo: "home" }),
            },
            {
              nome: t.schema.trilhaBlog,
              caminho: caminho(idioma, { tipo: "blog" }),
            },
            {
              nome: post.frontmatter.titulo,
              caminho: caminho(idioma, { tipo: "post", slug }),
            },
          ]),
          ...getFaqDoSchemaSidecar(idioma, slug),
        ]}
      />
      <h1 className="text-4xl leading-[0.95] md:text-5xl">
        {post.frontmatter.titulo}
      </h1>
      <p className="mt-2 text-sm opacity-60">
        {post.frontmatter.data}
        {post.frontmatter.autor === "Lin Zeri" ? (
          <>
            {" "}
            · {t.blog.por}{" "}
            <Link
              href={caminho(idioma, { tipo: "sobre" })}
              className="underline"
            >
              Lin Zeri
            </Link>
          </>
        ) : post.frontmatter.autor ? (
          <>
            {" "}
            · {t.blog.por} {post.frontmatter.autor}
          </>
        ) : null}
      </p>
      <div className="mt-8 space-y-4 leading-relaxed [&_h2]:mt-10 [&_h2]:text-3xl [&_h3]:mt-6 [&_h3]:text-xl [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mt-2">
        <MDXRemote source={post.conteudo} />
      </div>
    </article>
  );
}
