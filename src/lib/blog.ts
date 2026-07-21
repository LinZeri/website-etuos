import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostFrontmatter = {
  titulo: string;
  descricao: string;
  data: string; // formato AAAA-MM-DD
  autor?: string;
  imagem?: string; // caminho em /public/images, sempre .webp
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  conteudo: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((arquivo) => arquivo.endsWith(".mdx"))
    .map((arquivo) => arquivo.replace(/\.mdx$/, ""));
}

export function getPost(slug: string): Post | undefined {
  const caminho = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(caminho)) return undefined;
  const bruto = fs.readFileSync(caminho, "utf8");
  const { data, content } = matter(bruto);
  return {
    slug,
    frontmatter: data as PostFrontmatter,
    conteudo: content,
  };
}

export function getPosts(): Post[] {
  return getSlugs()
    .map((slug) => getPost(slug))
    .filter((post): post is Post => post !== undefined)
    .sort((a, b) => (a.frontmatter.data < b.frontmatter.data ? 1 : -1));
}
