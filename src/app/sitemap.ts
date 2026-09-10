import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { IDIOMAS, type Idioma } from "@/i18n/idiomas";
import {
  alternativas,
  caminho,
  hreflangDe,
  paginasIndexaveis,
  type PaginaSemPost,
} from "@/i18n/rotas";
import { alternativasDoPost, getPosts } from "@/lib/blog";
import { lastmodDoArquivo } from "@/lib/lastmod";

// Uma entrada por página e por idioma, cada uma com os alternates (hreflang)
// das versões que existem. A raiz "/" não entra: ela só redireciona. As
// landings de campanha (/lp/*) ficam fora de propósito: são noindex para não
// competirem com as páginas de serviço nas buscas orgânicas.

const url = (rota: string) => `${site.dominio}${rota}`;

function prioridade(pagina: PaginaSemPost): number {
  switch (pagina.tipo) {
    case "home":
      return 1;
    case "eua":
    case "brasil":
    case "servico":
      return 0.9;
    case "privacidade":
      return 0.3;
    default:
      return 0.8;
  }
}

// Arquivo cujo último commit representa "quando esta página mudou por
// último". Aproximação por tipo de página (a maior parte da copy de cada uma
// mora nesse arquivo); melhor que omitir lastmod, que era o estado anterior.
function arquivoFonte(idioma: Idioma, pagina: PaginaSemPost): string {
  switch (pagina.tipo) {
    case "home":
    case "eua":
    case "brasil":
    case "servicos":
    case "cidades":
    case "blog":
    case "contato":
      return `src/i18n/dicionario/${idioma}.ts`;
    case "sobre":
      return `src/paginas/conteudo/sobre/${idioma}.ts`;
    case "privacidade":
      return `src/paginas/conteudo/privacidade/${idioma}.ts`;
    case "servico":
      return `src/data/servicos/${idioma}.ts`;
    case "cidade":
      return `src/data/cidades/${idioma}.ts`;
    case "lp":
      return `src/paginas/conteudo/lp-${pagina.id}/${idioma}.ts`;
  }
}

function comAlternates(
  mapa: Partial<Record<string, string>> | undefined,
): Pick<MetadataRoute.Sitemap[number], "alternates"> {
  if (!mapa) return {};
  const languages = Object.fromEntries(
    Object.entries(mapa).map(([codigo, rota]) => [codigo, url(rota as string)]),
  );
  return { alternates: { languages } };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const estaticas = IDIOMAS.flatMap((idioma) =>
    paginasIndexaveis().map((pagina) => ({
      url: url(caminho(idioma, pagina)),
      lastModified: lastmodDoArquivo(arquivoFonte(idioma, pagina)),
      changeFrequency: pagina.tipo === "privacidade" ? ("yearly" as const) : ("monthly" as const),
      priority: prioridade(pagina),
      ...comAlternates(hreflangDe(alternativas(pagina), idioma)),
    })),
  );

  const posts = IDIOMAS.flatMap((idioma) =>
    getPosts(idioma).map((post) => ({
      url: url(caminho(idioma, { tipo: "post", slug: post.slug })),
      lastModified: post.frontmatter.data,
      changeFrequency: "yearly" as const,
      priority: 0.6,
      ...comAlternates(hreflangDe(alternativasDoPost(post), idioma)),
    })),
  );

  return [...estaticas, ...posts];
}
