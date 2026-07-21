export type Cidade = {
  slug: string;
  nome: string;
  estado: string;
  estadoSigla: string;
  descricaoCurta: string;
};

export const cidades: Cidade[] = [
  {
    slug: "miami",
    nome: "Miami",
    estado: "Flórida",
    estadoSigla: "FL",
    descricaoCurta:
      "Um dos maiores polos de negócios brasileiros nos Estados Unidos, com forte concorrência local e grande potencial de crescimento.",
  },
  {
    slug: "orlando",
    nome: "Orlando",
    estado: "Flórida",
    estadoSigla: "FL",
    descricaoCurta:
      "Cidade com uma das comunidades brasileiras que mais crescem nos EUA, movida por turismo, serviços e empreendedorismo.",
  },
  {
    slug: "fort-lauderdale",
    nome: "Fort Lauderdale",
    estado: "Flórida",
    estadoSigla: "FL",
    descricaoCurta:
      "Vizinha de Miami e Pompano Beach, concentra milhares de empresas de brasileiros em serviços, construção e beleza.",
  },
  {
    slug: "pompano-beach",
    nome: "Pompano Beach",
    estado: "Flórida",
    estadoSigla: "FL",
    descricaoCurta:
      "Conhecida como um dos corações da comunidade brasileira no sul da Flórida, cheia de comércios e prestadores de serviço.",
  },
  {
    slug: "boston",
    nome: "Boston",
    estado: "Massachusetts",
    estadoSigla: "MA",
    descricaoCurta:
      "Massachusetts abriga uma das maiores populações de brasileiros dos EUA, e Boston é o centro econômico dessa comunidade.",
  },
  {
    slug: "framingham",
    nome: "Framingham",
    estado: "Massachusetts",
    estadoSigla: "MA",
    descricaoCurta:
      "Uma das cidades com maior proporção de brasileiros nos Estados Unidos, com comércio local fortemente brasileiro.",
  },
  {
    slug: "newark",
    nome: "Newark",
    estado: "Nova Jersey",
    estadoSigla: "NJ",
    descricaoCurta:
      "O bairro do Ironbound é referência da comunidade brasileira na costa leste, com forte presença de comércios e serviços.",
  },
  {
    slug: "danbury",
    nome: "Danbury",
    estado: "Connecticut",
    estadoSigla: "CT",
    descricaoCurta:
      "Polo da comunidade brasileira em Connecticut, com grande concentração de pequenos negócios de brasileiros.",
  },
  {
    slug: "atlanta",
    nome: "Atlanta",
    estado: "Geórgia",
    estadoSigla: "GA",
    descricaoCurta:
      "Comunidade brasileira em rápido crescimento no sul dos EUA, em uma das economias regionais mais dinâmicas do país.",
  },
  {
    slug: "houston",
    nome: "Houston",
    estado: "Texas",
    estadoSigla: "TX",
    descricaoCurta:
      "Uma das maiores cidades dos EUA, com comunidade brasileira crescente ligada a energia, serviços e construção.",
  },
];

export function getCidade(slug: string): Cidade | undefined {
  return cidades.find((cidade) => cidade.slug === slug);
}
