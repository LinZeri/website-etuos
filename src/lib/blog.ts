import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { IDIOMAS, type Idioma } from "@/i18n/idiomas";
import { caminho, type Alternativas } from "@/i18n/rotas";

export type PostFrontmatter = {
  titulo: string;
  // Title da aba e do Google quando o título do artigo passa de 52
  // caracteres (60 com o sufixo " | Etuos"). Ausente = usa o titulo.
  metaTitulo?: string;
  descricao: string;
  data: string; // formato AAAA-MM-DD
  autor?: string;
  imagem?: string; // caminho em /public/images, sempre .webp
  // Liga traduções do mesmo artigo: posts com o mesmo grupo, em pastas de
  // idiomas diferentes, viram hreflang um do outro. Ausente = slug do próprio
  // arquivo, então um post sem tradução não precisa declarar nada.
  grupo?: string;
};

export type Post = {
  slug: string;
  idioma: Idioma;
  grupo: string;
  frontmatter: PostFrontmatter;
  conteudo: string;
};

// Um diretório por idioma: content/blog/pt, content/blog/en, content/blog/es.
// O blog-loop grava os posts em português (ver .blog-loop.config.json).
const BLOG_DIR = path.join(process.cwd(), "content", "blog");

const dirDe = (idioma: Idioma) => path.join(BLOG_DIR, idioma);

export function getSlugs(idioma: Idioma): string[] {
  const dir = dirDe(idioma);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((arquivo) => arquivo.endsWith(".mdx"))
    .map((arquivo) => arquivo.replace(/\.mdx$/, ""));
}

export function getPost(idioma: Idioma, slug: string): Post | undefined {
  const arquivo = path.join(dirDe(idioma), `${slug}.mdx`);
  if (!fs.existsSync(arquivo)) return undefined;
  const bruto = fs.readFileSync(arquivo, "utf8");
  const { data, content } = matter(bruto);
  const frontmatter = data as PostFrontmatter;
  return {
    slug,
    idioma,
    grupo: frontmatter.grupo ?? slug,
    frontmatter,
    conteudo: content,
  };
}

function hoje(): string {
  return new Date().toLocaleDateString("en-CA", {
    timeZone: "America/Sao_Paulo",
  });
}

export function getPosts(idioma: Idioma): Post[] {
  // Posts com data futura ficam fora da listagem e do sitemap até a data
  // chegar (publicação agendada; o build seguinte os revela). A rota do post
  // em si continua sendo gerada, então o link direto já funciona.
  const limite = hoje();
  return getSlugs(idioma)
    .map((slug) => getPost(idioma, slug))
    .filter((post): post is Post => post !== undefined)
    .filter((post) => post.frontmatter.data <= limite)
    .sort((a, b) => (a.frontmatter.data < b.frontmatter.data ? 1 : -1));
}

// Todos os posts de todos os idiomas, inclusive os agendados, para o
// generateStaticParams da rota catch-all.
export function todosOsPostsParaRotas(): { idioma: Idioma; slug: string }[] {
  return IDIOMAS.flatMap((idioma) =>
    getSlugs(idioma).map((slug) => ({ idioma, slug })),
  );
}

// grupo -> { idioma: slug }. Calculado uma vez por build.
let indice: Map<string, Partial<Record<Idioma, string>>> | undefined;

function indicePorGrupo() {
  if (indice) return indice;
  indice = new Map();
  for (const idioma of IDIOMAS) {
    for (const slug of getSlugs(idioma)) {
      const post = getPost(idioma, slug);
      if (!post) continue;
      const grupo = indice.get(post.grupo) ?? {};
      grupo[idioma] = slug;
      indice.set(post.grupo, grupo);
    }
  }
  return indice;
}

// URLs do mesmo artigo nos idiomas em que ele existe. Com um idioma só, o
// mapa tem uma entrada e hreflangDe() não emite hreflang.
export function alternativasDoPost(post: Post): Alternativas {
  const grupo = indicePorGrupo().get(post.grupo) ?? { [post.idioma]: post.slug };
  const alts: Alternativas = {};
  for (const idioma of IDIOMAS) {
    const slug = grupo[idioma];
    if (slug) alts[idioma] = caminho(idioma, { tipo: "post", slug });
  }
  return alts;
}

// Nós FAQPage do schema sidecar gravado pelo blog-loop em
// content/blog/<idioma>/schemas/<slug>.schema.json. Só o FAQPage é
// aproveitado: as demais entidades (Organization, BlogPosting etc.) já saem de
// src/lib/schema.ts e duplicá-las criaria entidades conflitantes no grafo.
export function getFaqDoSchemaSidecar(idioma: Idioma, slug: string): object[] {
  const arquivo = path.join(dirDe(idioma), "schemas", `${slug}.schema.json`);
  if (!fs.existsSync(arquivo)) return [];
  try {
    const dados = JSON.parse(fs.readFileSync(arquivo, "utf8"));
    const nos: { "@type"?: string }[] = Array.isArray(dados["@graph"])
      ? dados["@graph"]
      : [dados];
    return nos.filter((no) => no["@type"] === "FAQPage");
  } catch {
    return [];
  }
}
