import { getCidades } from "@/data/cidades";
import type { Servico } from "@/data/servicos";
import { site } from "@/data/site";
import { dicionario } from "@/i18n/dicionario";
import { HREFLANG, type Idioma } from "@/i18n/idiomas";
import { caminho } from "@/i18n/rotas";
import type { PostFrontmatter } from "@/lib/blog";

// Todos os blocos JSON-LD do site saem daqui, para que Organization seja
// declarado uma vez só e referenciado por @id nos demais (provider, publisher).
// Regra: nunca declarar address, email ou preço. A Etuos não tem endereço
// físico público, não tem e-mail público e não divulga tabela de preços, então
// inventar qualquer um desses seria dado falso para o Google.
//
// A Organization é uma entidade só, com o mesmo @id nos três idiomas. WebSite
// e as demais entidades têm url e inLanguage por idioma.

export const ID_ORGANIZACAO = `${site.dominio}/#organizacao`;

const url = (rota: string) => `${site.dominio}${rota}`;

export function idWebsite(idioma: Idioma) {
  return `${site.dominio}/${idioma}#website`;
}

export function organizacaoJsonLd(idioma: Idioma) {
  const t = dicionario(idioma);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ID_ORGANIZACAO,
    name: site.nome,
    url: site.dominio,
    logo: `${site.dominio}/images/logo-etuos.svg`,
    description: site.descricao[idioma],
    areaServed: [
      { "@type": "Country", name: t.schema.eua },
      { "@type": "Country", name: t.schema.brasil },
      ...getCidades(idioma).map((cidade) => ({
        "@type": "City",
        name: cidade.nome,
        containedInPlace: { "@type": "State", name: cidade.estado },
      })),
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: t.schema.contatoTipo,
        telephone: "+55-16-99125-2073",
        url: `https://wa.me/${site.whatsapp.numero[idioma]}`,
        availableLanguage: ["Portuguese", "English", "Spanish"],
      },
    ],
  };
}

export function websiteJsonLd(idioma: Idioma) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": idWebsite(idioma),
    url: url(caminho(idioma, { tipo: "home" })),
    name: site.nome,
    inLanguage: HREFLANG[idioma],
    publisher: { "@id": ID_ORGANIZACAO },
  };
}

export function pessoaJsonLd(idioma: Idioma) {
  const t = dicionario(idioma);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lin Zeri",
    jobTitle: t.schema.cargoLin,
    url: url(caminho(idioma, { tipo: "sobre" })),
    worksFor: { "@id": ID_ORGANIZACAO },
    image: `${site.dominio}/images/lin-zeri.webp`,
    knowsLanguage: ["pt-BR", "en"],
  };
}

type ItemDeTrilha = { nome: string; caminho: string };

export function trilhaJsonLd(itens: ItemDeTrilha[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itens.map((item, indice) => ({
      "@type": "ListItem",
      position: indice + 1,
      name: item.nome,
      item: url(item.caminho),
    })),
  };
}

export function servicoJsonLd(servico: Servico) {
  const t = dicionario(servico.idioma);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: servico.nome,
    name: servico.titulo,
    description: servico.descricaoCurta,
    url: url(caminho(servico.idioma, { tipo: "servico", id: servico.id })),
    inLanguage: HREFLANG[servico.idioma],
    provider: { "@id": ID_ORGANIZACAO },
    areaServed: [
      { "@type": "Country", name: t.schema.eua },
      { "@type": "Country", name: t.schema.brasil },
    ],
    audience: {
      "@type": "Audience",
      audienceType: t.schema.audiencia,
    },
  };
}

export function postJsonLd(
  idioma: Idioma,
  slug: string,
  frontmatter: PostFrontmatter,
) {
  // O front matter guarda só a data (AAAA-MM-DD). Publicar à meia-noite no fuso
  // de Brasília é uma aproximação honesta e mantém o ISO 8601 válido.
  const publicadoEm = `${frontmatter.data}T00:00:00-03:00`;
  const endereco = url(caminho(idioma, { tipo: "post", slug }));
  const autor = frontmatter.autor ?? "Equipe Etuos";

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.titulo,
    description: frontmatter.descricao,
    datePublished: publicadoEm,
    dateModified: publicadoEm,
    inLanguage: HREFLANG[idioma],
    author:
      autor === "Lin Zeri"
        ? {
            "@type": "Person",
            name: "Lin Zeri",
            url: url(caminho(idioma, { tipo: "sobre" })),
          }
        : { "@type": "Organization", name: autor, url: site.dominio },
    publisher: { "@id": ID_ORGANIZACAO },
    mainEntityOfPage: { "@type": "WebPage", "@id": endereco },
    url: endereco,
    ...(frontmatter.imagem
      ? { image: `${site.dominio}${frontmatter.imagem}` }
      : {}),
  };
}

type Pergunta = { pergunta: string; resposta: string };

// FAQPage não gera mais rich result no Google, mas continua sendo o formato que
// ChatGPT, Perplexity e AI Overviews leem para citar resposta com fonte.
export function faqJsonLd(perguntas: Pergunta[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: perguntas.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: { "@type": "Answer", text: item.resposta },
    })),
  };
}
