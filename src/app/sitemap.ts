import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { IDIOMAS } from "@/i18n/idiomas";
import {
  alternativas,
  caminho,
  hreflangDe,
  paginasIndexaveis,
  type PaginaSemPost,
} from "@/i18n/rotas";
import { alternativasDoPost, getPosts } from "@/lib/blog";

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
