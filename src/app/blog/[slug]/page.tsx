import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getSlugs } from "@/lib/blog";

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
  return {
    title: post.frontmatter.titulo,
    description: post.frontmatter.descricao,
    openGraph: {
      type: "article",
      publishedTime: post.frontmatter.data,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="prose mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold md:text-4xl">
        {post.frontmatter.titulo}
      </h1>
      <p className="mt-2 text-sm opacity-60">{post.frontmatter.data}</p>
      <div className="mt-8 space-y-4 leading-relaxed [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6">
        <MDXRemote source={post.conteudo} />
      </div>
    </article>
  );
}
