import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { JsonLd } from "@/components/ui/JsonLd";
import Link from "next/link";
import { getFaqDoSchemaSidecar, getPost, getSlugs } from "@/lib/blog";
import { metadataDaPagina } from "@/lib/metadata";
import { postJsonLd, trilhaJsonLd } from "@/lib/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return metadataDaPagina({
    titulo: post.frontmatter.titulo,
    descricao: post.frontmatter.descricao,
    caminho: `/blog/${slug}`,
    tipo: "article",
    publicadoEm: post.frontmatter.data,
    imagem: post.frontmatter.imagem,
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="prose mx-auto max-w-3xl px-4 py-16">
      <JsonLd
        dados={[
          postJsonLd(slug, post.frontmatter),
          trilhaJsonLd([
            { nome: "Home", caminho: "/" },
            { nome: "Blog", caminho: "/blog" },
            { nome: post.frontmatter.titulo, caminho: `/blog/${slug}` },
          ]),
          ...getFaqDoSchemaSidecar(slug),
        ]}
      />
      <h1 className="text-3xl font-bold md:text-4xl">
        {post.frontmatter.titulo}
      </h1>
      <p className="mt-2 text-sm opacity-60">
        {post.frontmatter.data}
        {post.frontmatter.autor === "Lin Zeri" ? (
          <>
            {" "}
            · por{" "}
            <Link href="/sobre" className="underline">
              Lin Zeri
            </Link>
          </>
        ) : post.frontmatter.autor ? (
          <> · por {post.frontmatter.autor}</>
        ) : null}
      </p>
      <div className="mt-8 space-y-4 leading-relaxed [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6">
        <MDXRemote source={post.conteudo} />
      </div>
    </article>
  );
}
