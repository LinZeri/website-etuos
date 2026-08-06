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
  // Perguntas reais de quem chega pelo WhatsApp. Viram seção na página e
  // FAQPage no JSON-LD, que é o formato que as IAs leem para citar resposta.
  faq: { pergunta: string; resposta: string }[];
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
    faq: [
      {
        pergunta: "Quanto preciso investir por mês para valer a pena?",
        resposta:
          "Depende do seu setor, do seu ticket e da cidade onde você atua. Anunciar em Miami custa mais caro que anunciar em Danbury, e vender um serviço de 200 dólares exige menos verba que vender um de 5 mil. No diagnóstico a gente calcula o número do seu caso e fala com sinceridade se a conta fecha com o que você tem hoje.",
      },
      {
        pergunta: "Em quanto tempo o anúncio começa a trazer cliente?",
        resposta:
          "Campanha bem montada costuma gerar os primeiros contatos já na primeira semana. O ajuste fino leva de 30 a 60 dias, que é o tempo de descobrir quais anúncios, públicos e horários rendem mais no seu caso.",
      },
      {
        pergunta: "A gestão é cobrada junto com a verba de anúncio?",
        resposta:
          "Não. A verba vai direto para o Google e para a Meta, na sua conta e no seu cartão, então você vê exatamente quanto foi para a plataforma. A gestão é um valor à parte, combinado antes de começar.",
      },
      {
        pergunta: "Dá para anunciar em inglês, para o público americano?",
        resposta:
          "Dá, e em muitos casos é o que mais rende. Montamos campanhas separadas por idioma, com criativo e página de destino próprios, porque o brasileiro e o americano não respondem ao mesmo argumento.",
      },
      {
        pergunta: "Já impulsionei post e não deu em nada. Vai ser diferente?",
        resposta:
          "Impulsionar post é entregar o seu dinheiro para o algoritmo escolher quem vê, sem oferta clara e sem destino. Campanha é outra coisa: público definido, criativo pensado para vender, uma página que converte e a medição de cada contato que chega.",
      },
      {
        pergunta: "Preciso ter site para anunciar?",
        resposta:
          "Não é obrigatório, dá para levar o anúncio direto para o WhatsApp. Só que com uma landing page o custo por contato costuma cair, porque a pessoa chega sabendo o que você faz e por que confiar em você. Se for o seu caso, a gente monta a página junto com a campanha.",
      },
    ],
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
    faq: [
      {
        pergunta: "Em quanto tempo o SEO dá resultado?",
        resposta:
          "Os primeiros movimentos costumam aparecer entre 60 e 90 dias, e o resultado forte vem depois do sexto mês. SEO é juro composto: cada mês de trabalho soma ao anterior. Quem promete primeira página em 30 dias está vendendo ilusão.",
      },
      {
        pergunta: "Quanto custa fazer SEO?",
        resposta:
          "Não trabalhamos com pacote de prateleira. O valor depende do tamanho do site, da concorrência do seu nicho e da cidade onde você quer aparecer. O diagnóstico é gratuito e é dele que sai o preço, com o escopo do que será feito nos primeiros 90 dias.",
      },
      {
        pergunta: "SEO funciona para negócio pequeno e local?",
        resposta:
          "Funciona, e costuma ser onde o retorno aparece mais rápido. Buscas do tipo serviço mais cidade têm menos concorrência e intenção altíssima: quem digita isso está com o problema na mão agora. Um perfil no Google bem cuidado e páginas locais bem escritas resolvem boa parte do jogo.",
      },
      {
        pergunta: "Preciso ter site ou o perfil no Google Maps basta?",
        resposta:
          "O perfil resolve a busca de quem já está perto e quer resolver hoje. O site é o que sustenta a autoridade, responde as dúvidas antes do primeiro contato e ranqueia para as buscas que o perfil não alcança. Juntos, rendem muito mais do que qualquer um dos dois sozinho.",
      },
      {
        pergunta: "Dá para aparecer em português e em inglês ao mesmo tempo?",
        resposta:
          "Dá, com páginas próprias para cada idioma. O erro comum é traduzir palavra por palavra: o americano e o brasileiro procuram a mesma coisa com termos diferentes. A gente pesquisa os dois vocabulários e escreve para os dois públicos.",
      },
      {
        pergunta: "Vale a pena fazer SEO e tráfego pago ao mesmo tempo?",
        resposta:
          "Na maioria dos casos, sim. O anúncio traz cliente agora e paga a conta enquanto o SEO amadurece. Quando o orgânico começa a andar, você reduz a dependência de mídia sem perder volume de contato.",
      },
    ],
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
    faq: [
      {
        pergunta: "Quanto tempo leva para o site ficar pronto?",
        resposta:
          "Um site institucional de poucas páginas costuma ficar pronto em duas a quatro semanas. O que mais atrasa não é o desenvolvimento: são as fotos, as informações do seu negócio e a sua aprovação. Com o material em mãos, anda rápido.",
      },
      {
        pergunta: "O site fica em português ou em inglês?",
        resposta:
          "No idioma do seu cliente, e pode ser nos dois. Se você atende brasileiro e americano, montamos as duas versões, cada uma com texto próprio, escrito para aquele público. Tradução automática afasta cliente americano e você nem fica sabendo.",
      },
      {
        pergunta: "Quem escreve os textos do site?",
        resposta:
          "A gente escreve. Você conta o que faz, para quem e o que costumam te perguntar antes de fechar; a gente transforma isso em texto que conduz a pessoa até o botão do WhatsApp. Você revisa tudo antes de publicar.",
      },
      {
        pergunta: "O site é meu mesmo ou fico preso à agência?",
        resposta:
          "O domínio fica no seu nome e o site é seu. Se um dia você quiser levar para outra pessoa cuidar, leva. Preferimos manter cliente por resultado, não por senha.",
      },
      {
        pergunta: "Já vendo pelo Instagram e pelo WhatsApp. Preciso de site?",
        resposta:
          "Rede social é território alugado: alcance e regras mudam sem aviso. O site é o único canal que é seu, aparece no Google, trabalha de madrugada e deixa o cliente pesquisar você antes de chamar. E quase todo mundo pesquisa antes de gastar dinheiro com um desconhecido.",
      },
      {
        pergunta: "O site já vem preparado para o Google?",
        resposta:
          "Vem. Estrutura, títulos, velocidade e dados estruturados saem prontos desde o primeiro dia, junto com a medição dos cliques no WhatsApp, para você saber de onde vem cada contato em vez de adivinhar.",
      },
    ],
  },
];

export function getServico(slug: string): Servico | undefined {
  return servicos.find((servico) => servico.slug === slug);
}
