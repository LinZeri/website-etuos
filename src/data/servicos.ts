export type Servico = {
  slug: string;
  nome: string;
  titulo: string;
  descricaoCurta: string;
  heroDescricao: string;
  dores: string[];
  entregas: { titulo: string; descricao: string }[];
  processo: { titulo: string; descricao: string }[];
  paraQuem: string;
};

export const servicos: Servico[] = [
  {
    slug: "trafego-pago",
    nome: "Tráfego pago",
    titulo: "Gestão de tráfego pago (Google e Meta Ads)",
    descricaoCurta:
      "Campanhas no Google, Instagram e Facebook para colocar o seu negócio na frente de quem já está procurando o que você vende.",
    heroDescricao:
      "Anúncios no Google, no Instagram e no Facebook feitos para uma coisa: fazer seu WhatsApp tocar com gente pronta para comprar.",
    dores: [
      "Você depende só de indicação e nunca sabe como vai ser o próximo mês",
      "Seus concorrentes aparecem primeiro no Google e nas redes",
      "Você já tentou impulsionar posts e o dinheiro sumiu sem trazer cliente",
      "Anunciar em inglês, para o público certo, parece um bicho de sete cabeças",
    ],
    entregas: [
      {
        titulo: "Campanhas no Google Ads",
        descricao:
          "Seu negócio aparece exatamente quando alguém busca o que você vende, em português ou em inglês, na sua região.",
      },
      {
        titulo: "Campanhas no Instagram e Facebook",
        descricao:
          "Anúncios com criativos pensados para o público brasileiro e americano da sua cidade.",
      },
      {
        titulo: "Segmentação local e por idioma",
        descricao:
          "Você escolhe onde quer crescer. A gente mira a cidade, o raio e o público certos para o seu tipo de negócio.",
      },
      {
        titulo: "Otimização contínua",
        descricao:
          "Acompanhamos as campanhas toda semana: o que traz cliente recebe mais verba, o que não traz é cortado.",
      },
      {
        titulo: "Relatório simples, sem enrolação",
        descricao:
          "Todo mês você recebe um resumo claro: quanto investiu, quantos contatos chegaram e o que vem a seguir.",
      },
    ],
    processo: [
      {
        titulo: "Diagnóstico no WhatsApp",
        descricao:
          "Você conta como está o negócio hoje e a gente avalia onde o anúncio pode trazer retorno mais rápido.",
      },
      {
        titulo: "Estratégia sob medida",
        descricao:
          "Definimos canais, verba, público e oferta. Nada de pacote pronto igual para todo mundo.",
      },
      {
        titulo: "Campanhas no ar",
        descricao:
          "Criamos os anúncios, configuramos tudo e colocamos as campanhas para rodar.",
      },
      {
        titulo: "Otimização e escala",
        descricao:
          "Com os primeiros resultados, ajustamos e aumentamos o que funciona para crescer com segurança.",
      },
    ],
    paraQuem:
      "Para quem precisa de cliente agora. O tráfego pago é o caminho mais rápido para gerar contatos: as campanhas começam a trabalhar no mesmo mês.",
  },
  {
    slug: "seo",
    nome: "SEO",
    titulo: "SEO: apareça no Google sem pagar por clique",
    descricaoCurta:
      "Posicionamos o seu site nas primeiras posições do Google, incluindo buscas locais na sua cidade, para gerar clientes todos os meses.",
    heroDescricao:
      "Quando alguém busca o seu serviço no Google, quem aparece primeiro leva o cliente. Nosso trabalho é fazer esse alguém encontrar você.",
    dores: [
      "Seu negócio não aparece no Google nem quando buscam pelo seu nome",
      "Quem procura seu serviço na sua cidade encontra o concorrente",
      "Você paga anúncio para sempre porque não tem tráfego orgânico",
      "Seu perfil no Google Maps está abandonado ou incompleto",
    ],
    entregas: [
      {
        titulo: "SEO local",
        descricao:
          "Otimizamos seu perfil no Google (Maps) e seu site para as buscas da sua cidade, onde estão seus clientes.",
      },
      {
        titulo: "Otimização técnica do site",
        descricao:
          "Velocidade, estrutura e tudo o que o Google avalia para decidir quem merece as primeiras posições.",
      },
      {
        titulo: "Conteúdo que ranqueia",
        descricao:
          "Páginas e artigos respondendo exatamente o que seu cliente pesquisa, em português e em inglês.",
      },
      {
        titulo: "Acompanhamento de posições",
        descricao:
          "Você vê mês a mês as palavras-chave subindo e o tráfego crescendo, com relatório em bom português.",
      },
    ],
    processo: [
      {
        titulo: "Auditoria completa",
        descricao:
          "Analisamos seu site, seu perfil no Google e seus concorrentes para saber exatamente onde atacar.",
      },
      {
        titulo: "Plano de 90 dias",
        descricao:
          "Priorizamos o que traz resultado mais rápido e montamos o plano de conteúdo e otimização.",
      },
      {
        titulo: "Execução",
        descricao:
          "Colocamos a mão na massa: técnica, conteúdo e autoridade, tudo por nossa conta.",
      },
      {
        titulo: "Crescimento composto",
        descricao:
          "SEO é juro composto: cada mês de trabalho soma ao anterior e o tráfego cresce sem você pagar por clique.",
      },
    ],
    paraQuem:
      "Para quem quer construir uma máquina de clientes que não depende de anúncio. Leva mais tempo que o tráfego pago, mas o resultado fica e se acumula.",
  },
  {
    slug: "criacao-de-sites",
    nome: "Criação de sites",
    titulo: "Criação de sites e landing pages que convertem",
    descricaoCurta:
      "Sites rápidos, bonitos e feitos para transformar visitantes em contatos no seu WhatsApp.",
    heroDescricao:
      "Seu site não é um cartão de visitas. É um vendedor que trabalha 24 horas. A gente constrói o seu para transformar visita em conversa no WhatsApp.",
    dores: [
      "Você não tem site e perde clientes que pesquisam antes de comprar",
      "Seu site é lento, feio no celular ou parece abandonado",
      "Quem visita seu site não faz nada: não chama, não liga, não compra",
      "Você paga anúncio que manda gente para uma página que não converte",
    ],
    entregas: [
      {
        titulo: "Design profissional e único",
        descricao:
          "Nada de template genérico. Seu site com a cara do seu negócio, bonito no celular e no computador.",
      },
      {
        titulo: "Texto que vende",
        descricao:
          "Escrevemos cada seção para conduzir o visitante até o botão de WhatsApp, no seu tom e no idioma do seu público.",
      },
      {
        titulo: "Velocidade de verdade",
        descricao:
          "Sites estáticos que carregam em um piscar de olhos. Velocidade é conversão e é ranking no Google.",
      },
      {
        titulo: "SEO desde o primeiro dia",
        descricao:
          "Estrutura, títulos e conteúdo já otimizados para o Google encontrar e ranquear o seu site.",
      },
    ],
    processo: [
      {
        titulo: "Briefing direto",
        descricao:
          "Uma conversa para entender seu negócio, seu público e o que o site precisa fazer por você.",
      },
      {
        titulo: "Design e texto",
        descricao:
          "Criamos o layout e a copy juntos, pensando em conversão desde a primeira dobra.",
      },
      {
        titulo: "Construção e revisão",
        descricao:
          "Desenvolvemos o site, você revisa e a gente ajusta até ficar do seu jeito.",
      },
      {
        titulo: "No ar e medindo",
        descricao:
          "Publicamos com domínio, métricas e WhatsApp configurados. Pronto para receber tráfego.",
      },
    ],
    paraQuem:
      "Para quem está começando do zero ou tem um site que não gera nada. É a base de tudo: anúncio e SEO rendem muito mais em um site que converte.",
  },
];

export function getServico(slug: string): Servico | undefined {
  return servicos.find((servico) => servico.slug === slug);
}
