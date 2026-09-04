import type { Metadata } from "next";
import { dicionario } from "@/i18n/dicionario";
import { IDIOMAS, OG_LOCALE, type Idioma } from "@/i18n/idiomas";
import { hreflangDe, type Alternativas } from "@/i18n/rotas";

export const TAMANHO_OG = { width: 1200, height: 630 };

type Pagina = {
  idioma: Idioma;
  /** Título sem o sufixo "| Etuos", que o template do layout já adiciona. */
  titulo?: string;
  descricao?: string;
  /** Caminho absoluto dentro do site, já com o idioma. Ex.: "/en/services/seo". */
  caminho: string;
  /**
   * URLs desta mesma página nos outros idiomas (só as que existem). Vira o
   * hreflang, autorreferente e recíproco. Omitir em páginas noindex.
   */
  alternativas?: Alternativas;
  tipo?: "website" | "article";
  /** Data de publicação em AAAA-MM-DD, só para artigos. */
  publicadoEm?: string;
  /**
   * Imagem própria da página (caminho em /public, ex.: "/images/blog/x-hero.webp").
   * Quando presente, substitui a og:image padrão gerada por idioma.
   */
  imagem?: string;
  /** false nas landings de campanha: noindex, nofollow. */
  indexar?: boolean;
};

// O Next faz merge raso de metadata: quando uma página declara openGraph, o
// bloco do layout inteiro é substituído. Por isso o og é montado aqui, sempre
// completo, para que declarar a og:url não apague site_name, locale, tipo e a
// imagem de preview.
export function metadataDaPagina({
  idioma,
  titulo,
  descricao,
  caminho,
  alternativas,
  tipo = "website",
  publicadoEm,
  imagem,
  indexar = true,
}: Pagina): Metadata {
  const t = dicionario(idioma);
  const linguagens = alternativas ? hreflangDe(alternativas, idioma) : undefined;
  const outrosIdiomas = IDIOMAS.filter(
    (outro) => outro !== idioma && alternativas?.[outro],
  );

  // A imagem gerada por src/app/[idioma]/opengraph-image.tsx precisa ser
  // declarada aqui porque o Next só aplica o arquivo de imagem automaticamente
  // nas páginas que não sobrescrevem o bloco openGraph.
  const imagemPadrao = {
    url: `/${idioma}/opengraph-image`,
    ...TAMANHO_OG,
    alt: t.og.alt,
    type: "image/png",
  };

  return {
    ...(titulo ? { title: titulo } : {}),
    ...(descricao ? { description: descricao } : {}),
    alternates: {
      canonical: caminho,
      ...(linguagens ? { languages: linguagens } : {}),
    },
    ...(indexar ? {} : { robots: { index: false, follow: false } }),
    openGraph: {
      type: tipo,
      locale: OG_LOCALE[idioma],
      ...(outrosIdiomas.length > 0
        ? { alternateLocale: outrosIdiomas.map((outro) => OG_LOCALE[outro]) }
        : {}),
      siteName: "Etuos",
      url: caminho,
      ...(titulo ? { title: `${titulo} | Etuos` } : {}),
      ...(descricao ? { description: descricao } : {}),
      ...(tipo === "article" && publicadoEm
        ? { publishedTime: publicadoEm }
        : {}),
      images: imagem ? [{ url: imagem, ...TAMANHO_OG }] : [imagemPadrao],
    },
  };
}
