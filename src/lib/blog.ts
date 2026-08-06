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
  // Posts com data futura ficam fora da listagem e do sitemap até a data
  // chegar (publicação agendada; o build seguinte os revela). A rota do post
  // em si continua sendo gerada, então o link direto já funciona.
  const hoje = new Date().toLocaleDateString("en-CA", {
    timeZone: "America/Sao_Paulo",
  });
  return getSlugs()
    .map((slug) => getPost(slug))
    .filter((post): post is Post => post !== undefined)
    .filter((post) => post.frontmatter.data <= hoje)
    .sort((a, b) => (a.frontmatter.data < b.frontmatter.data ? 1 : -1));
}

// Nós FAQPage do schema sidecar gravado pelo blog-loop em
// content/blog/schemas/<slug>.schema.json. Só o FAQPage é aproveitado: as
// demais entidades (Organization, BlogPosting etc.) já saem de src/lib/schema.ts
// e duplicá-las criaria entidades conflitantes no grafo.
export function getFaqDoSchemaSidecar(slug: string): object[] {
  const caminho = path.join(BLOG_DIR, "schemas", `${slug}.schema.json`);
  if (!fs.existsSync(caminho)) return [];
  try {
    const dados = JSON.parse(fs.readFileSync(caminho, "utf8"));
    const nos: { "@type"?: string }[] = Array.isArray(dados["@graph"])
      ? dados["@graph"]
      : [dados];
    return nos.filter((no) => no["@type"] === "FAQPage");
  } catch {
    return [];
  }
}
