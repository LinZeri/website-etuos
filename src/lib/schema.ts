import { cidades } from "@/data/cidades";
import type { Servico } from "@/data/servicos";
import { site } from "@/data/site";
import type { PostFrontmatter } from "@/lib/blog";

// Todos os blocos JSON-LD do site saem daqui, para que Organization seja
// declarado uma vez só e referenciado por @id nos demais (provider, publisher).
// Regra: nunca declarar address, email ou preço. A Etuos não tem endereço
// físico público, não tem e-mail público e não divulga tabela de preços, então
// inventar qualquer um desses seria dado falso para o Google.

export const ID_ORGANIZACAO = `${site.dominio}/#organizacao`;
export const ID_WEBSITE = `${site.dominio}/#website`;

const url = (caminho: string) => `${site.dominio}${caminho}`;

export function organizacaoJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ID_ORGANIZACAO,
    name: site.nome,
    url: site.dominio,
    logo: `${site.dominio}/images/logo-etuos.svg`,
    description: site.descricao,
    areaServed: [
      { "@type": "Country", name: "Estados Unidos" },
      { "@type": "Country", name: "Brasil" },
      ...cidades.map((cidade) => ({
        "@type": "City",
        name: cidade.nome,
        containedInPlace: { "@type": "State", name: cidade.estado },
      })),
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "atendimento ao cliente",
        telephone: "+55-16-99125-2073",
        url: `https://wa.me/${site.whatsapp.numero}`,
        availableLanguage: ["Portuguese", "English"],
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": ID_WEBSITE,
    url: site.dominio,
    name: site.nome,
    inLanguage: "pt-BR",
    publisher: { "@id": ID_ORGANIZACAO },
  };
}

export function pessoaJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lin Zeri",
    jobTitle: "Fundador e estrategista de marketing digital",
    url: url("/sobre"),
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
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: servico.nome,
    name: servico.titulo,
    description: servico.descricaoCurta,
    url: url(`/servicos/${servico.slug}`),
    provider: { "@id": ID_ORGANIZACAO },
    areaServed: [
      { "@type": "Country", name: "Estados Unidos" },
      { "@type": "Country", name: "Brasil" },
    ],
    audience: {
      "@type": "Audience",
      audienceType:
        "Negócios e profissionais no Brasil e brasileiros que empreendem nos Estados Unidos",
    },
  };
}

export function postJsonLd(slug: string, frontmatter: PostFrontmatter) {
  // O front matter guarda só a data (AAAA-MM-DD). Publicar à meia-noite no fuso
  // de Brasília é uma aproximação honesta e mantém o ISO 8601 válido.
  const publicadoEm = `${frontmatter.data}T00:00:00-03:00`;
  const endereco = url(`/blog/${slug}`);
  const autor = frontmatter.autor ?? "Equipe Etuos";

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.titulo,
    description: frontmatter.descricao,
    datePublished: publicadoEm,
    dateModified: publicadoEm,
    inLanguage: "pt-BR",
    author:
      autor === "Lin Zeri"
        ? { "@type": "Person", name: "Lin Zeri", url: url("/sobre") }
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
