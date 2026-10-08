import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
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

const opcoesMdx = { mdxOptions: { remarkPlugins: [remarkGfm] } };

// Imagens do corpo: proporção reservada (sem CLS), otimizadas pelo next/image.
const componentesMdx = {
  img: ({ src, alt }: { src?: string | Blob; alt?: string }) =>
    typeof src === "string" ? (
      <Image
        src={src}
        alt={alt ?? ""}
        width={1200}
        height={675}
        sizes="(min-width: 768px) 768px, 100vw"
        className="my-8 h-auto w-full rounded-2xl border border-border"
      />
    ) : null,
};

// Rodapé "Sobre o autor" (separador --- + título em negrito): vira um box.
const RODAPE_AUTOR =
  /\n-{3,}[ \t]*\n+\*\*(Sobre o autor|About the author|Sobre el autor)\*\*[ \t]*\n+([\s\S]*?)\s*$/;

function separarRodapeAutor(conteudo: string): {
  corpo: string;
  autor?: { titulo: string; texto: string };
} {
  const normalizado = conteudo.replace(/\r\n/g, "\n");
  const m = RODAPE_AUTOR.exec(normalizado);
  if (!m) return { corpo: conteudo };
  return {
    corpo: normalizado.slice(0, m.index),
    autor: { titulo: m[1], texto: m[2] },
  };
}

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
  const { corpo, autor } = separarRodapeAutor(post.conteudo);

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
      <div className="post-corpo mt-8 space-y-4 leading-relaxed [&_h2]:mt-10 [&_h2]:text-3xl [&_h3]:mt-6 [&_h3]:text-xl [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mt-2">
        <MDXRemote
          source={corpo}
          options={opcoesMdx}
          components={componentesMdx}
        />
      </div>
      {autor ? (
        <aside className="mt-14 flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-start sm:p-8">
          <Image
            src="/images/lin-zeri.webp"
            alt="Lin Zeri"
            width={96}
            height={115}
            className="h-24 w-20 shrink-0 rounded-xl object-cover object-top grayscale"
          />
          <div className="min-w-0">
            <p className="font-display text-sm uppercase tracking-widest">
              <span className="marca">{autor.titulo}</span>
            </p>
            <div className="mt-3 text-[0.95rem] leading-relaxed text-muted [&_a]:font-semibold [&_a]:text-foreground [&_a]:underline">
              <MDXRemote source={autor.texto} />
            </div>
          </div>
        </aside>
      ) : null}
    </article>
  );
}
