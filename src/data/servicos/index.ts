import type { Idioma } from "@/i18n/idiomas";
import { idDe, idsDe, slugDe, type IdServico } from "@/i18n/mapa-slugs";
import { servicosEn } from "./en";
import { servicosEs } from "./es";
import { servicosPt } from "./pt";

export type Pergunta = { pergunta: string; resposta: string };

// Copy de um serviço em um idioma. O slug não mora aqui: vem de
// src/i18n/mapa-slugs.ts, que é a fonte única de URLs.
export type ConteudoServico = {
  nome: string;
  titulo: string;
  descricaoCurta: string;
  heroDescricao: string;
  dores: string[];
  entregas: { titulo: string; descricao: string }[];
  processo: { titulo: string; descricao: string }[];
  paraQuem: string;
  // Tabela "fazer sozinho, agência comum ou Etuos". Cinco linhas curtas que
  // respondem a objeção de quem compara antes de chamar.
  comparativo: {
    criterio: string;
    sozinho: string;
    agencia: string;
    etuos: string;
  }[];
  // Perguntas reais de quem chega pelo WhatsApp. Viram seção na página e
  // FAQPage no JSON-LD, que é o formato que as IAs leem para citar resposta.
  faq: Pergunta[];
};

export type Servico = ConteudoServico & {
  id: IdServico;
  slug: string;
  idioma: Idioma;
};

const CONTEUDO: Record<Idioma, Record<IdServico, ConteudoServico>> = {
  pt: servicosPt,
  en: servicosEn,
  es: servicosEs,
};

export function getServicoPorId(idioma: Idioma, id: IdServico): Servico {
  return {
    ...CONTEUDO[idioma][id],
    id,
    slug: slugDe("servico", id, idioma),
    idioma,
  };
}

export function getServicos(idioma: Idioma): Servico[] {
  return idsDe("servico").map((id) => getServicoPorId(idioma, id));
}

export function getServico(idioma: Idioma, slug: string): Servico | undefined {
  const id = idDe("servico", idioma, slug);
  return id ? getServicoPorId(idioma, id) : undefined;
}
