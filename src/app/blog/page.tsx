import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog: marketing digital para brasileiros nos EUA",
  description:
    "Artigos sobre marketing digital, tráfego pago, SEO e vendas para brasileiros que empreendem nos Estados Unidos.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getPosts();
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold md:text-4xl">Blog da Etuos</h1>
      <p className="mt-4 text-lg opacity-80">
        Conteúdo prático para você atrair mais clientes nos Estados Unidos.
      </p>
      <ul className="mt-8 space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="rounded-xl border border-border p-6">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:underline">
                {post.frontmatter.titulo}
              </h2>
            </Link>
            <p className="mt-2 opacity-80">{post.frontmatter.descricao}</p>
            <p className="mt-2 text-sm opacity-60">{post.frontmatter.data}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
