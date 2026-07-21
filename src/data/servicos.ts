export type Servico = {
  slug: string;
  nome: string;
  titulo: string;
  descricaoCurta: string;
};

export const servicos: Servico[] = [
  {
    slug: "trafego-pago",
    nome: "Tráfego pago",
    titulo: "Gestão de tráfego pago (Google e Meta Ads)",
    descricaoCurta:
      "Campanhas no Google, Instagram e Facebook para colocar o seu negócio na frente de quem já está procurando o que você vende.",
  },
  {
    slug: "seo",
    nome: "SEO",
    titulo: "SEO: apareça no Google sem pagar por clique",
    descricaoCurta:
      "Posicionamos o seu site nas primeiras posições do Google, incluindo buscas locais na sua cidade, para gerar clientes todos os meses.",
  },
  {
    slug: "criacao-de-sites",
    nome: "Criação de sites",
    titulo: "Criação de sites e landing pages que convertem",
    descricaoCurta:
      "Sites rápidos, bonitos e feitos para transformar visitantes em contatos no seu WhatsApp.",
  },
];

export function getServico(slug: string): Servico | undefined {
  return servicos.find((servico) => servico.slug === slug);
}
