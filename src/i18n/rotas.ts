import {
  HREFLANG,
  IDIOMAS,
  IDIOMA_X_DEFAULT,
  type CodigoHreflang,
  type Idioma,
} from "./idiomas";
import {
  idDe,
  idsDe,
  slugDe,
  type IdCidade,
  type IdLp,
  type IdServico,
} from "./mapa-slugs";

// Tabela de rotas do site. É a fonte única de: roteamento (page.tsx catch-all),
// links internos, hreflang, sitemap e seletor de idioma. Arquivo puro, sem
// copy, seguro para importar em componentes de cliente.

export const SEGMENTOS = {
  eua: { pt: "eua", en: "usa", es: "estados-unidos" },
  brasil: { pt: "brasil", en: "brazil", es: "brasil" },
  sobre: { pt: "sobre", en: "about", es: "sobre-nosotros" },
  servicos: { pt: "servicos", en: "services", es: "servicios" },
  cidades: { pt: "cidades", en: "cities", es: "ciudades" },
  blog: { pt: "blog", en: "blog", es: "blog" },
  contato: { pt: "contato", en: "contact", es: "contacto" },
  privacidade: {
    pt: "politica-de-privacidade",
    en: "privacy-policy",
    es: "politica-de-privacidad",
  },
  lp: { pt: "lp", en: "lp", es: "lp" },
} as const satisfies Record<string, Record<Idioma, string>>;

type Segmento = keyof typeof SEGMENTOS;

export type Pagina =
  | { tipo: "home" }
  | { tipo: "eua" }
  | { tipo: "brasil" }
  | { tipo: "sobre" }
  | { tipo: "servicos" }
  | { tipo: "servico"; id: IdServico }
  | { tipo: "cidade"; id: IdCidade }
  | { tipo: "blog" }
  | { tipo: "post"; slug: string }
  | { tipo: "contato" }
  | { tipo: "privacidade" }
  | { tipo: "lp"; id: IdLp };

export type TipoPagina = Pagina["tipo"];
export type PaginaSemPost = Exclude<Pagina, { tipo: "post" }>;

const SIMPLES = [
  "eua",
  "brasil",
  "sobre",
  "servicos",
  "blog",
  "contato",
  "privacidade",
] as const;

type TipoSimples = (typeof SIMPLES)[number];

function ehSimples(tipo: string): tipo is TipoSimples {
  return (SIMPLES as readonly string[]).includes(tipo);
}

export function caminho(idioma: Idioma, pagina: Pagina): string {
  const base = `/${idioma}`;
  const seg = (chave: Segmento) => `${base}/${SEGMENTOS[chave][idioma]}`;

  switch (pagina.tipo) {
    case "home":
      return base;
    case "eua":
    case "brasil":
    case "sobre":
    case "servicos":
    case "blog":
    case "contato":
    case "privacidade":
      return seg(pagina.tipo);
    case "servico":
      return `${seg("servicos")}/${slugDe("servico", pagina.id, idioma)}`;
    case "cidade":
      return `${seg("cidades")}/${slugDe("cidade", pagina.id, idioma)}`;
    case "post":
      return `${seg("blog")}/${pagina.slug}`;
    case "lp":
      return `${seg("lp")}/${slugDe("lp", pagina.id, idioma)}`;
  }
}

// Inverso de caminho(): recebe os segmentos depois do idioma. Para "post"
// devolve o slug sem verificar se o arquivo existe (quem chama confere).
export function resolverCaminho(
  idioma: Idioma,
  segmentos: string[],
): Pagina | undefined {
  if (segmentos.length === 0) return { tipo: "home" };
  if (segmentos.length > 2) return undefined;

  const [primeiro, segundo] = segmentos;
  const chave = (Object.keys(SEGMENTOS) as Segmento[]).find(
    (segmento) => SEGMENTOS[segmento][idioma] === primeiro,
  );
  if (!chave) return undefined;

  if (segundo === undefined) {
    return ehSimples(chave) ? { tipo: chave } : undefined;
  }

  switch (chave) {
    case "servicos": {
      const id = idDe("servico", idioma, segundo);
      return id ? { tipo: "servico", id } : undefined;
    }
    case "cidades": {
      const id = idDe("cidade", idioma, segundo);
      return id ? { tipo: "cidade", id } : undefined;
    }
    case "blog":
      return { tipo: "post", slug: segundo };
    case "lp": {
      const id = idDe("lp", idioma, segundo);
      return id ? { tipo: "lp", id } : undefined;
    }
    default:
      return undefined;
  }
}

export type Alternativas = Partial<Record<Idioma, string>>;

// Toda página que não é post existe nos três idiomas por construção.
export function alternativas(pagina: PaginaSemPost): Record<Idioma, string> {
  return Object.fromEntries(
    IDIOMAS.map((idioma) => [idioma, caminho(idioma, pagina)]),
  ) as Record<Idioma, string>;
}

// Monta o mapa hreflang a partir das alternativas que existem de fato.
// Autorreferente e recíproco por construção: toda versão da página recebe o
// mesmo mapa. Com um idioma só, não há cluster e o hreflang é omitido.
export function hreflangDe(
  alts: Alternativas,
  atual: Idioma,
): Partial<Record<CodigoHreflang, string>> | undefined {
  const presentes = IDIOMAS.filter((idioma) => alts[idioma]);
  if (presentes.length < 2) return undefined;

  const mapa: Partial<Record<CodigoHreflang, string>> = {};
  for (const idioma of presentes) {
    mapa[HREFLANG[idioma]] = alts[idioma];
  }
  mapa["x-default"] = alts[IDIOMA_X_DEFAULT] ?? alts[atual];
  return mapa;
}

// Páginas pré-renderizadas em todo idioma (exceto posts, que vêm do blog).
export function paginasEstaticas(): PaginaSemPost[] {
  return [
    { tipo: "home" },
    { tipo: "eua" },
    { tipo: "brasil" },
    { tipo: "sobre" },
    { tipo: "servicos" },
    ...idsDe("servico").map((id) => ({ tipo: "servico", id }) as const),
    ...idsDe("cidade").map((id) => ({ tipo: "cidade", id }) as const),
    { tipo: "blog" },
    { tipo: "contato" },
    { tipo: "privacidade" },
    ...idsDe("lp").map((id) => ({ tipo: "lp", id }) as const),
  ];
}

// As landings de campanha são noindex e ficam fora do sitemap.
export function paginasIndexaveis(): PaginaSemPost[] {
  return paginasEstaticas().filter((pagina) => pagina.tipo !== "lp");
}
