// Idiomas do site. O português é a língua fonte: toda copy nasce em pt e as
// demais versões são escritas (não traduzidas ao pé da letra) a partir dela.
export const IDIOMAS = ["pt", "en", "es"] as const;
export type Idioma = (typeof IDIOMAS)[number];

// Língua fonte do conteúdo e dos tipos (os dicionários en/es "satisfies" o pt).
export const IDIOMA_FONTE: Idioma = "pt";

// Destino do hreflang x-default e do redirect da raiz quando nada mais casa.
// É o que o Googlebot (IP dos EUA, sem Accept-Language) recebe.
export const IDIOMA_X_DEFAULT: Idioma = "en";

// Cookie gravado pelo seletor de idioma. O redirect da raiz em next.config.ts
// lê este cookie antes de olhar navegador e país.
export const COOKIE_IDIOMA = "etuos_idioma";

export const HTML_LANG: Record<Idioma, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

// Chaves aceitas por metadata.alternates.languages e pelo sitemap.
export const HREFLANG = {
  pt: "pt-BR",
  en: "en",
  es: "es",
} as const satisfies Record<Idioma, string>;

export type CodigoHreflang = (typeof HREFLANG)[Idioma] | "x-default";

export const OG_LOCALE: Record<Idioma, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
};

export const NOME_IDIOMA: Record<Idioma, { curto: string; longo: string }> = {
  pt: { curto: "PT", longo: "Português" },
  en: { curto: "EN", longo: "English" },
  es: { curto: "ES", longo: "Español" },
};

export function ehIdioma(valor: string): valor is Idioma {
  return (IDIOMAS as readonly string[]).includes(valor);
}
