import type { Idioma } from "@/i18n/idiomas";
import {
  idDe,
  idsDe,
  slugDe,
  type IdCidade,
  type IdServico,
} from "@/i18n/mapa-slugs";
import type { Pergunta } from "@/data/servicos";
import { CIDADES_BASE } from "./base";
import { cidadesEn } from "./en";
import { cidadesEs } from "./es";
import { cidadesPt } from "./pt";

// Copy de uma cidade em um idioma. Regra do docs/seo.md: conteúdo único por
// cidade E por idioma. A versão pt fala com a comunidade brasileira, a en com
// o dono de negócio americano e a es com a comunidade hispânica da cidade.
export type ConteudoCidade = {
  estado: string;
  descricaoCurta: string;
  introducao: string[];
  nichos: string[];
  regioes: string[];
  // Como cada serviço se aplica àquela cidade. Record para obrigar copy local
  // dos três serviços em toda cidade (antes havia fallback genérico).
  servicosLocais: Record<IdServico, string>;
  // Comportamento de busca do cliente local, em um parágrafo.
  comoBuscam: string;
  // Perguntas específicas da cidade. Viram seção na página e FAQPage no JSON-LD.
  faq: Pergunta[];
};

export type Cidade = ConteudoCidade & {
  id: IdCidade;
  slug: string;
  idioma: Idioma;
  nome: string;
  estadoSigla: string;
};

const CONTEUDO: Record<Idioma, Record<IdCidade, ConteudoCidade>> = {
  pt: cidadesPt,
  en: cidadesEn,
  es: cidadesEs,
};

export function getCidadePorId(idioma: Idioma, id: IdCidade): Cidade {
  return {
    ...CIDADES_BASE[id],
    ...CONTEUDO[idioma][id],
    id,
    slug: slugDe("cidade", id, idioma),
    idioma,
  };
}

export function getCidades(idioma: Idioma): Cidade[] {
  return idsDe("cidade").map((id) => getCidadePorId(idioma, id));
}

export function getCidade(idioma: Idioma, slug: string): Cidade | undefined {
  const id = idDe("cidade", idioma, slug);
  return id ? getCidadePorId(idioma, id) : undefined;
}
