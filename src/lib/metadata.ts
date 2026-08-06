import type { Metadata } from "next";

export const TAMANHO_OG = { width: 1200, height: 630 };

export const ALT_OG =
  "Etuos: marketing digital para negócios no Brasil e nos Estados Unidos. Tráfego pago, SEO e criação de sites.";

// Imagem gerada por src/app/opengraph-image.tsx. Precisa ser declarada aqui
// porque o Next só aplica o arquivo de imagem automaticamente nas páginas que
// não sobrescrevem o bloco openGraph, e todas as nossas sobrescrevem (og:url).
const IMAGEM_OG_PADRAO = {
  url: "/opengraph-image",
  ...TAMANHO_OG,
  alt: ALT_OG,
  type: "image/png",
};

type Pagina = {
  /** Título sem o sufixo "| Etuos", que o template do layout já adiciona. */
  titulo?: string;
  descricao?: string;
  /** Caminho absoluto dentro do site, começando com barra. Ex.: "/servicos/seo". */
  caminho: string;
  tipo?: "website" | "article";
  /** Data de publicação em AAAA-MM-DD, só para artigos. */
  publicadoEm?: string;
  /**
   * Imagem própria da página (caminho em /public, ex.: "/images/blog/x-hero.webp").
   * Quando presente, substitui a og:image padrão de opengraph-image.tsx.
   */
  imagem?: string;
};

// O Next faz merge raso de metadata: quando uma página declara openGraph, o
// bloco do layout inteiro é substituído. Por isso o og é montado aqui, sempre
// completo, para que declarar a og:url não apague site_name, locale, tipo e a
// imagem de preview.
export function metadataDaPagina({
  titulo,
  descricao,
  caminho,
  tipo = "website",
  publicadoEm,
  imagem,
}: Pagina): Metadata {
  return {
    ...(titulo ? { title: titulo } : {}),
    ...(descricao ? { description: descricao } : {}),
    alternates: { canonical: caminho },
    openGraph: {
      type: tipo,
      locale: "pt_BR",
      siteName: "Etuos",
      url: caminho,
      ...(titulo ? { title: `${titulo} | Etuos` } : {}),
      ...(descricao ? { description: descricao } : {}),
      ...(tipo === "article" && publicadoEm
        ? { publishedTime: publicadoEm }
        : {}),
      images: imagem
        ? [{ url: imagem, ...TAMANHO_OG }]
        : [IMAGEM_OG_PADRAO],
    },
  };
}
