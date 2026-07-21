export type Cidade = {
  slug: string;
  nome: string;
  estado: string;
  estadoSigla: string;
  descricaoCurta: string;
  // Conteúdo único por cidade (regra do docs/seo.md: nunca duplicar texto)
  introducao: string[];
  nichos: string[];
  regioes: string[];
};

export const cidades: Cidade[] = [
  {
    slug: "miami",
    nome: "Miami",
    estado: "Flórida",
    estadoSigla: "FL",
    descricaoCurta:
      "Um dos maiores polos de negócios brasileiros nos Estados Unidos, com forte concorrência local e grande potencial de crescimento.",
    introducao: [
      "Miami é a porta de entrada do brasileiro nos Estados Unidos. É onde estão os investidores, os restaurantes, as clínicas, os corretores e milhares de prestadores de serviço que falam português. Isso é ótimo para a comunidade e é também o seu maior desafio: aqui, quase todo nicho já tem concorrente brasileiro anunciando.",
      "Em um mercado assim, quem aparece primeiro no Google e faz o melhor anúncio leva o cliente. Marketing amador até funciona em cidade pequena. Em Miami, não. É por isso que o investimento certo em tráfego pago e SEO local faz tanta diferença por aqui.",
    ],
    nichos: [
      "Gastronomia e restaurantes",
      "Imobiliário e investimento",
      "Estética e beleza",
      "Saúde e clínicas",
      "Serviços para turistas",
      "Construção e remodeling",
    ],
    regioes: [
      "Brickell",
      "Downtown Miami",
      "Doral",
      "Aventura",
      "Kendall",
      "Miami Beach",
    ],
  },
  {
    slug: "orlando",
    nome: "Orlando",
    estado: "Flórida",
    estadoSigla: "FL",
    descricaoCurta:
      "Cidade com uma das comunidades brasileiras que mais crescem nos EUA, movida por turismo, serviços e empreendedorismo.",
    introducao: [
      "Orlando vive uma explosão de brasileiros. Todo ano chegam famílias novas, abrem negócios novos e o mercado se renova. O motor é o turismo: milhões de brasileiros visitam a cidade e movimentam transporte, casas de temporada, ingressos, compras e alimentação.",
      "Isso cria dois públicos diferentes para o seu marketing: o turista brasileiro que planeja a viagem ainda no Brasil e o morador local que precisa de serviços no dia a dia. Cada um exige uma estratégia. A gente monta as duas.",
    ],
    nichos: [
      "Turismo e ingressos",
      "Casas de temporada",
      "Transporte e transfer",
      "Alimentação e delivery",
      "Construção e handyman",
      "Limpeza residencial e comercial",
    ],
    regioes: [
      "Kissimmee",
      "Winter Garden",
      "Hunters Creek",
      "Lake Nona",
      "Davenport",
      "Clermont",
    ],
  },
  {
    slug: "fort-lauderdale",
    nome: "Fort Lauderdale",
    estado: "Flórida",
    estadoSigla: "FL",
    descricaoCurta:
      "Vizinha de Miami e Pompano Beach, concentra milhares de empresas de brasileiros em serviços, construção e beleza.",
    introducao: [
      "Fort Lauderdale fica no meio do corredor brasileiro de Broward County, entre Miami e Pompano Beach. A região concentra uma das maiores comunidades brasileiras do país, com empresas de construção, beleza, limpeza e serviços espalhadas por toda a cidade.",
      "Aqui o cliente busca no Google e pergunta em grupo de brasileiros antes de fechar qualquer serviço. Estar bem posicionado nas buscas locais e ter presença profissional é o que separa quem vive de indicação de quem tem agenda cheia o ano todo.",
    ],
    nichos: [
      "Construção e remodeling",
      "Beleza e estética",
      "Limpeza e pool service",
      "Serviços náuticos",
      "Restaurantes",
      "Imobiliário",
    ],
    regioes: [
      "Oakland Park",
      "Wilton Manors",
      "Plantation",
      "Sunrise",
      "Coral Springs",
      "Hollywood",
    ],
  },
  {
    slug: "pompano-beach",
    nome: "Pompano Beach",
    estado: "Flórida",
    estadoSigla: "FL",
    descricaoCurta:
      "Conhecida como um dos corações da comunidade brasileira no sul da Flórida, cheia de comércios e prestadores de serviço.",
    introducao: [
      "Pompano Beach é um pedaço do Brasil na Flórida. Mercados brasileiros, padarias, igrejas, salões e restaurantes formam um ecossistema onde dá para viver falando só português. Para quem empreende, isso significa um público fiel e concentrado, que prefere comprar de brasileiro.",
      "A oportunidade está em dominar as buscas dessa comunidade: quem procura um serviço em Pompano quase sempre pesquisa em português e escolhe quem aparece com avaliações boas e presença profissional. É exatamente isso que a gente constrói para você.",
    ],
    nichos: [
      "Mercados e produtos brasileiros",
      "Restaurantes e padarias",
      "Salões e barbearias",
      "Construção e reformas",
      "Transporte e mudanças",
      "Serviços automotivos",
    ],
    regioes: [
      "Deerfield Beach",
      "Lighthouse Point",
      "Margate",
      "Coconut Creek",
      "Boca Raton",
      "Fort Lauderdale",
    ],
  },
  {
    slug: "boston",
    nome: "Boston",
    estado: "Massachusetts",
    estadoSigla: "MA",
    descricaoCurta:
      "Massachusetts abriga uma das maiores populações de brasileiros dos EUA, e Boston é o centro econômico dessa comunidade.",
    introducao: [
      "Massachusetts é um dos estados com mais brasileiros nos Estados Unidos, e a região metropolitana de Boston é o coração disso tudo. Cidades como Everett, Malden, Somerville e Allston têm comércio brasileiro forte e uma rede de serviços que atende a comunidade inteira.",
      "O mercado de Boston é maduro: cleaning, construção e serviços têm concorrência estabelecida há décadas. Para crescer aqui, não basta ser bom no que faz. É preciso aparecer nas buscas certas, ter avaliações fortes e um site que passe confiança em português e em inglês.",
    ],
    nichos: [
      "Limpeza residencial e comercial",
      "Construção e pintura",
      "Paisagismo e snow removal",
      "Estética e beleza",
      "Contabilidade e serviços de imigração",
      "Restaurantes",
    ],
    regioes: [
      "Everett",
      "Malden",
      "Somerville",
      "Allston e Brighton",
      "Revere",
      "Peabody",
    ],
  },
  {
    slug: "framingham",
    nome: "Framingham",
    estado: "Massachusetts",
    estadoSigla: "MA",
    descricaoCurta:
      "Uma das cidades com maior proporção de brasileiros nos Estados Unidos, com comércio local fortemente brasileiro.",
    introducao: [
      "Framingham é referência nacional quando o assunto é comunidade brasileira. O centro da cidade tem tanta loja, restaurante e serviço brasileiro que é chamado por muitos de pequena Governador Valadares. Aqui, o português é língua de negócio.",
      "Em uma cidade onde quase todo mundo conhece todo mundo, reputação viaja rápido. Ter um perfil no Google impecável, avaliações fortes e presença digital profissional transforma essa rede de confiança em um fluxo constante de clientes novos.",
    ],
    nichos: [
      "Restaurantes e padarias",
      "Mercados brasileiros",
      "Salões e barbearias",
      "Serviços domésticos",
      "Oficinas e serviços automotivos",
      "Envio de dinheiro e serviços",
    ],
    regioes: [
      "Downtown Framingham",
      "Natick",
      "Marlborough",
      "Milford",
      "Ashland",
      "Hudson",
    ],
  },
  {
    slug: "newark",
    nome: "Newark",
    estado: "Nova Jersey",
    estadoSigla: "NJ",
    descricaoCurta:
      "O bairro do Ironbound é referência da comunidade brasileira na costa leste, com forte presença de comércios e serviços.",
    introducao: [
      "O Ironbound, em Newark, é um dos endereços mais famosos da imigração brasileira nos Estados Unidos. A Ferry Street reúne churrascarias, padarias, lojas e serviços brasileiros que atraem gente de toda a região de Nova York e Nova Jersey.",
      "Competir aqui é competir pela atenção de uma comunidade grande, exigente e acostumada a ter opção. Quem investe em marketing profissional se destaca rápido, porque a maioria dos negócios da região ainda depende só de fachada e boca a boca.",
    ],
    nichos: [
      "Churrascarias e restaurantes",
      "Padarias e mercados",
      "Construção e demolição",
      "Transporte e logística",
      "Beleza e estética",
      "Eventos e festas",
    ],
    regioes: [
      "Ironbound",
      "Harrison",
      "Kearny",
      "Elizabeth",
      "Long Branch",
      "Mineola e região de NY",
    ],
  },
  {
    slug: "danbury",
    nome: "Danbury",
    estado: "Connecticut",
    estadoSigla: "CT",
    descricaoCurta:
      "Polo da comunidade brasileira em Connecticut, com grande concentração de pequenos negócios de brasileiros.",
    introducao: [
      "Danbury é o coração brasileiro de Connecticut. A cidade concentra uma comunidade grande e ativa, com igrejas, comércios e uma rede densa de prestadores de serviço que atendem tanto brasileiros quanto o público americano da região.",
      "O tamanho da cidade é uma vantagem: com estratégia local bem feita, dá para dominar as buscas do seu nicho em Danbury e nas cidades vizinhas com investimento menor do que nos grandes centros. É crescimento eficiente, sem queimar dinheiro.",
    ],
    nichos: [
      "Limpeza comercial e residencial",
      "Construção e carpintaria",
      "Paisagismo",
      "Beleza e barbearias",
      "Mercados e restaurantes",
      "Serviços automotivos",
    ],
    regioes: [
      "Bethel",
      "Brookfield",
      "New Milford",
      "Ridgefield",
      "Waterbury",
      "Bridgeport",
    ],
  },
  {
    slug: "atlanta",
    nome: "Atlanta",
    estado: "Geórgia",
    estadoSigla: "GA",
    descricaoCurta:
      "Comunidade brasileira em rápido crescimento no sul dos EUA, em uma das economias regionais mais dinâmicas do país.",
    introducao: [
      "Atlanta virou destino de brasileiros que buscam custo de vida menor e uma economia em plena expansão. A comunidade cresce ano após ano, concentrada principalmente na região norte da metrópole, e o mercado ainda tem espaço em quase todos os nichos.",
      "Essa é a janela de oportunidade: diferente da Flórida ou de Massachusetts, em Atlanta muitos nichos ainda não têm um líder brasileiro claro no Google. Quem se posicionar primeiro colhe clientes por anos. Nosso trabalho é colocar você nessa posição.",
    ],
    nichos: [
      "Construção e remodeling",
      "Limpeza residencial",
      "Beleza e estética",
      "Alimentação e delivery",
      "Eventos e fotografia",
      "Serviços de imigração e contabilidade",
    ],
    regioes: [
      "Marietta",
      "Roswell",
      "Alpharetta",
      "Buford",
      "Lawrenceville",
      "Sandy Springs",
    ],
  },
  {
    slug: "houston",
    nome: "Houston",
    estado: "Texas",
    estadoSigla: "TX",
    descricaoCurta:
      "Uma das maiores cidades dos EUA, com comunidade brasileira crescente ligada a energia, serviços e construção.",
    introducao: [
      "Houston é gigante: uma das maiores cidades dos Estados Unidos, capital mundial da energia e um mercado consumidor enorme. A comunidade brasileira cresce puxada por profissionais do setor de óleo e gás, engenheiros e uma nova onda de empreendedores de serviços.",
      "Em uma cidade dessas dimensões, marketing local bem segmentado é tudo. Anunciar para Houston inteira queima dinheiro; anunciar para o bairro e o público certos enche a agenda. A gente conhece a diferença e monta a estratégia para o seu raio de atuação.",
    ],
    nichos: [
      "Construção e reformas",
      "Serviços para o setor de energia",
      "Limpeza e organização",
      "Alimentação brasileira",
      "Transporte e frete",
      "Beleza e estética",
    ],
    regioes: [
      "Katy",
      "Sugar Land",
      "The Woodlands",
      "Spring",
      "Pearland",
      "Cypress",
    ],
  },
];

export function getCidade(slug: string): Cidade | undefined {
  return cidades.find((cidade) => cidade.slug === slug);
}
