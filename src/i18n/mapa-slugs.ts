import type { Idioma } from "./idiomas";

// Único lugar do projeto onde um slug de entidade é escrito. Roteamento,
// hreflang, sitemap e seletor de idioma derivam daqui. Um id sem slug em
// algum idioma é erro de compilação.

type Slugs = Record<Idioma, string>;

const igual = (slug: string): Slugs => ({ pt: slug, en: slug, es: slug });

export const MAPA_SLUGS = {
  servico: {
    "trafego-pago": { pt: "trafego-pago", en: "paid-ads", es: "anuncios-pagados" },
    seo: igual("seo"),
    "criacao-de-sites": {
      pt: "criacao-de-sites",
      en: "website-design",
      es: "creacion-de-sitios-web",
    },
  },
  // Nome de cidade é nome próprio: o slug é o mesmo nos três idiomas, mas a
  // estrutura permite traduzir no futuro sem mexer em código.
  cidade: {
    miami: igual("miami"),
    orlando: igual("orlando"),
    "fort-lauderdale": igual("fort-lauderdale"),
    "pompano-beach": igual("pompano-beach"),
    boston: igual("boston"),
    framingham: igual("framingham"),
    newark: igual("newark"),
    danbury: igual("danbury"),
    atlanta: igual("atlanta"),
    houston: igual("houston"),
  },
  lp: {
    seo: igual("seo"),
    "trafego-pago": { pt: "trafego-pago", en: "paid-ads", es: "anuncios-pagados" },
  },
} as const satisfies Record<string, Record<string, Slugs>>;

export type Colecao = keyof typeof MAPA_SLUGS;
export type IdServico = keyof typeof MAPA_SLUGS.servico;
export type IdCidade = keyof typeof MAPA_SLUGS.cidade;
export type IdLp = keyof typeof MAPA_SLUGS.lp;
export type IdDe<C extends Colecao> = keyof (typeof MAPA_SLUGS)[C] & string;

export function idsDe<C extends Colecao>(colecao: C): IdDe<C>[] {
  return Object.keys(MAPA_SLUGS[colecao]) as IdDe<C>[];
}

export function slugDe<C extends Colecao>(
  colecao: C,
  id: IdDe<C>,
  idioma: Idioma,
): string {
  const slugs = MAPA_SLUGS[colecao][id] as Slugs;
  return slugs[idioma];
}

export function idDe<C extends Colecao>(
  colecao: C,
  idioma: Idioma,
  slug: string,
): IdDe<C> | undefined {
  return idsDe(colecao).find(
    (id) => (MAPA_SLUGS[colecao][id] as Slugs)[idioma] === slug,
  );
}
