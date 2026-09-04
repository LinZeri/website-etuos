import type { IdServico } from "@/i18n/mapa-slugs";

// Dicionário de interface em português (língua fonte). Define a forma que
// en.ts e es.ts precisam satisfazer: chave faltando ou sobrando quebra o build.
// Copy longa de página (Sobre, privacidade, landings) fica em
// src/paginas/conteudo; serviços e cidades ficam em src/data.
//
// Regra de copy: promessa concreta, dor específica, prova com número, CTA com
// verbo e benefício. Sem travessão, sem promessa milagrosa.

type Numero = {
  prefixo?: string;
  valor: number;
  sufixo?: string;
  legenda: string;
};

type Resultado = {
  figura: string;
  contexto: string;
  servicos: IdServico[];
  segmento: string;
};

type Pergunta = { pergunta: string; resposta: string };

export const pt = {
  nav: {
    home: "Home",
    brasil: "Brasil",
    eua: "EUA",
    sobre: "Sobre",
    servicos: "Serviços",
    blog: "Blog",
    contato: "Contato",
  },
  header: {
    irParaHome: "Etuos, ir para a Home",
    whatsapp: "Diagnóstico gratuito",
  },
  menu: {
    abrir: "Abrir menu",
    fechar: "Fechar menu",
    whatsapp: "Quero meu diagnóstico gratuito",
  },
  footer: {
    servicos: "Serviços",
    ondeAtendemos: "Onde atendemos",
    brasil: "Brasil",
    eua: "Estados Unidos",
    direitos: "Todos os direitos reservados.",
    privacidade: "Política de privacidade",
  },
  whatsapp: {
    botao: "Falar no WhatsApp",
    flutuante: "Falar com a Etuos no WhatsApp",
  },
  // Barra fixa no rodapé do celular.
  barraCta: {
    texto: "Diagnóstico gratuito, resposta no mesmo dia",
    botao: "Chamar no WhatsApp",
  },
  seletorIdioma: {
    rotulo: "Idioma",
  },
  // Exibido no idioma de destino: quem lê está em outro idioma.
  bannerIdioma: {
    texto: "Esta página também está disponível em português.",
    trocar: "Ver em português",
    fechar: "Fechar",
  },
  hero: {
    descricao:
      "Tráfego pago, SEO local e sites que convertem, para negócios no Brasil e brasileiros que empreendem nos Estados Unidos. Diagnóstico gratuito, resposta no mesmo dia, direto com o fundador.",
    cta: "Quero meu diagnóstico gratuito",
    verServicos: "Ver serviços",
  },
  // Faixa de provas logo abaixo do herói. Os valores numéricos alimentam o
  // contador animado; o HTML já sai com o número final.
  numeros: [
    { valor: 10, sufixo: "+", legenda: "anos de marketing digital" },
    { prefixo: "US$ ", valor: 500, sufixo: " mil+", legenda: "em anúncios gerenciados" },
    { prefixo: "30 → ", valor: 300, sufixo: "+", legenda: "franquias em 1 ano e 8 meses" },
    { prefixo: "+", valor: 300, sufixo: "%", legenda: "de faturamento em clientes atendidos" },
  ] satisfies Numero[],
  servicosLista: {
    eyebrow: "O que a gente faz",
    tituloAntes: "Tudo o que separa você de",
    tituloDestaque: "mais clientes",
  },
  resultados: {
    eyebrow: "Resultados",
    titulo: "Número, não promessa",
    descricao:
      "Marketing bom se mede. Estes são resultados reais de clientes que combinaram anúncio, site e SEO feitos para converter.",
    fantasma: "RESULTADOS",
    itens: [
      {
        figura: "+300%",
        contexto:
          "de faturamento em clientes que juntaram anúncio no Google com um site feito para transformar visita em conversa.",
        servicos: ["trafego-pago", "criacao-de-sites"],
        segmento: "Clínicas e serviços",
      },
      {
        figura: "30 → 300+",
        contexto:
          "franquias em 1 ano e 8 meses, com o marketing digital como motor da expansão de uma rede de energia solar.",
        servicos: ["trafego-pago", "seo"],
        segmento: "Rede de energia solar",
      },
      {
        figura: "US$ 500 mil+",
        contexto:
          "em anúncios gerenciados no Google e na Meta, com cada dólar medido até o contato que chegou no WhatsApp.",
        servicos: ["trafego-pago"],
        segmento: "13 setores atendidos",
      },
    ] satisfies Resultado[],
  },
  depoimentos: {
    eyebrow: "Prova social",
    titulo: "Quem já cresceu com a Etuos",
    traduzido: "Traduzido do original em português",
  },
  comoFunciona: {
    eyebrow: "Como funciona",
    titulo: "Do primeiro oi ao WhatsApp tocando",
    fantasma: "PROCESSO",
    passos: [
      {
        titulo: "Diagnóstico gratuito",
        descricao:
          "Você conta como está o negócio hoje. A gente analisa seu mercado, seus concorrentes e onde está o dinheiro deixado na mesa. Sem custo e sem compromisso.",
      },
      {
        titulo: "Plano sob medida",
        descricao:
          "Nada de pacote pronto. Montamos a estratégia certa para o seu nicho, a sua cidade e o seu momento, com meta que dá para medir.",
      },
      {
        titulo: "Execução completa",
        descricao:
          "Anúncios, SEO, site: a gente coloca tudo em pé e no ar. Você continua cuidando do seu negócio.",
      },
      {
        titulo: "Resultado medido e escala",
        descricao:
          "Você acompanha tudo em relatórios simples, em português. O que traz cliente recebe mais investimento; o que não traz é cortado.",
      },
    ],
  },
  fundador: {
    eyebrow: "Quem cuida do seu marketing",
    titulo: "Tem nome, rosto e WhatsApp",
    texto:
      "Sou o Lin Zeri, publicitário há mais de 10 anos. Não tem gerente de conta nem estagiário no meio: quem monta a estratégia, acompanha a campanha e responde a sua mensagem sou eu.",
    citacao:
      "Prefiro perder um cliente falando a verdade do que ganhar um cliente ludibriando.",
    conhecer: "Conhecer o Lin",
    whatsapp: "Falar com o Lin",
    fantasma: "LIN ZERI",
    fotoAlt:
      "Lin Zeri, fundador da Etuos, sorrindo de braços cruzados em um evento lotado",
  },
  paisesGrid: {
    eyebrow: "Onde atuamos",
    titulo: "Escolha de onde o seu negócio fala",
    descricao:
      "A Etuos atende negócios no Brasil e brasileiros que empreendem nos Estados Unidos, cada um com uma estratégia própria e no idioma do seu cliente.",
    verComoAtuamos: "Ver como atuamos",
    brasil: {
      nome: "Brasil",
      descricao:
        "Negócios e profissionais em todo o Brasil que querem mais clientes vindos do Google e do Instagram.",
    },
    eua: {
      nome: "Estados Unidos",
      descricao:
        "Brasileiros que empreendem nos EUA, com marketing pensado para a sua comunidade, a sua cidade e o cliente americano.",
    },
  },
  cidadesGrid: {
    eyebrow: "Cidades que a gente conhece",
    titulo: "Fortes onde a comunidade brasileira é forte",
    descricao:
      "Atendemos todos os Estados Unidos, com páginas, campanhas e conhecimento de mercado para as cidades onde os brasileiros mais empreendem.",
  },
  ctaFinal: {
    titulo: "Pronto para o seu WhatsApp tocar?",
    descricao:
      "Chama a gente. Você recebe um diagnóstico honesto e gratuito do seu marketing, sem compromisso e sem enrolação.",
    botao: "Quero meu diagnóstico gratuito",
    rodape: "Resposta no mesmo dia, direto com o Lin. Sem robô e sem vendedor.",
    fantasma: "VAMOS",
  },
  faq: {
    titulo: "Perguntas que sempre chegam",
  },
  home: {
    hero: {
      eyebrow: "Agência de marketing digital para quem empreende",
      titulo: "Marketing digital que faz o seu",
      destaque: "WhatsApp tocar",
    },
    faq: [
      {
        pergunta: "Quanto custa contratar a Etuos?",
        resposta:
          "Depende do serviço, do tamanho do seu negócio e da concorrência na sua cidade. Não trabalhamos com pacote de prateleira: o diagnóstico é gratuito e é dele que sai uma proposta com escopo e valor claros. Verba de anúncio é sempre à parte e vai direto para o Google e para a Meta, na sua conta.",
      },
      {
        pergunta: "Em quanto tempo vejo resultado?",
        resposta:
          "Tráfego pago costuma trazer os primeiros contatos na primeira semana e estabiliza em 30 a 60 dias. SEO mostra os primeiros movimentos entre 60 e 90 dias e o resultado forte depois do sexto mês. Um site novo fica pronto em duas a quatro semanas. No diagnóstico a gente diz qual caminho faz sentido primeiro.",
      },
      {
        pergunta: "Vocês atendem a minha cidade?",
        resposta:
          "Atendemos todo o Brasil e todos os Estados Unidos, de forma remota, no seu fuso. Nos EUA temos páginas e conhecimento de mercado para Miami, Orlando, Fort Lauderdale, Pompano Beach, Boston, Framingham, Newark, Danbury, Atlanta e Houston, mas a estratégia funciona em qualquer cidade.",
      },
      {
        pergunta: "Preciso contratar os três serviços?",
        resposta:
          "Não. Muita gente começa por um: anúncio para ter cliente agora, ou site para parar de perder quem pesquisa antes de comprar. O diagnóstico aponta por onde começar. Quando os três trabalham juntos, o custo por cliente cai, mas isso é uma decisão sua, no seu ritmo.",
      },
      {
        pergunta: "Como funciona o diagnóstico gratuito?",
        resposta:
          "Você chama no WhatsApp e conta em poucas linhas como está o negócio. O Lin analisa seu site, seu perfil no Google e seus concorrentes e responde com uma leitura honesta: o que está travando, o que resolver primeiro e se vale a pena trabalharmos juntos. Sem custo, sem compromisso e sem robô.",
      },
    ] satisfies Pergunta[],
  },
  eua: {
    metaTitulo: "Marketing digital para brasileiros nos EUA",
    metaDescricao:
      "Agência de marketing digital para brasileiros que empreendem nos Estados Unidos. Tráfego pago, SEO local e sites que trazem clientes de verdade. Diagnóstico gratuito.",
    hero: {
      eyebrow: "Agência para brasileiros nos EUA",
      titulo: "Marketing digital para brasileiros que querem",
      destaque: "vencer nos EUA",
    },
    faq: [
      {
        pergunta: "Vocês entendem o mercado americano ou só a comunidade brasileira?",
        resposta:
          "Os dois, e é isso que faz diferença. Montamos campanhas separadas por idioma e por público: uma fala com o brasileiro da sua cidade, a outra com o cliente americano, cada uma com o argumento que convence aquele público. Texto em inglês é escrito em inglês, não traduzido.",
      },
      {
        pergunta: "A Etuos é nos Estados Unidos?",
        resposta:
          "A Etuos é remota e o fundador mora no Brasil, em contato constante com o mercado americano. Você é atendido no seu fuso, em português, por quem conhece as cidades onde a comunidade brasileira empreende. Sem escritório para pagar, o investimento vai para o que traz cliente.",
      },
      {
        pergunta: "Meu cliente busca em inglês. Preciso de site em inglês?",
        resposta:
          "Se boa parte de quem paga a sua conta busca em inglês, sim, e com texto próprio, não tradução automática. Se você atende só a comunidade brasileira, o português resolve e a gente concentra o esforço em SEO local e prova social. O diagnóstico responde isso para o seu caso.",
      },
      {
        pergunta: "Como pago pelos anúncios?",
        resposta:
          "A verba de anúncio vai direto para o Google e para a Meta, na sua conta e no seu cartão americano. A gestão é um valor à parte, combinado antes de começar. A conta de anúncios é sua e continua sua se um dia você quiser sair.",
      },
    ] satisfies Pergunta[],
    cta: {
      titulo: "Pronto para crescer nos EUA?",
      descricao:
        "Chama a gente no WhatsApp. Você recebe um diagnóstico honesto e gratuito do seu marketing, sem compromisso e sem enrolação.",
      botao: "Quero meu diagnóstico gratuito",
    },
  },
  brasil: {
    metaTitulo: "Marketing digital para negócios no Brasil",
    metaDescricao:
      "Agência de marketing digital para negócios e profissionais no Brasil. Tráfego pago, SEO e criação de sites que trazem clientes de verdade. Diagnóstico gratuito no WhatsApp.",
    hero: {
      eyebrow: "Agência para negócios no Brasil",
      titulo: "Marketing digital para quem quer",
      destaque: "crescer no Brasil",
    },
    faq: [
      {
        pergunta: "Vocês atendem qualquer cidade do Brasil?",
        resposta:
          "Sim. O trabalho é remoto e a estratégia é local: campanha e SEO miram a sua cidade, o seu bairro e o seu público. Já atendemos clínicas, profissionais liberais, comércio e redes de franquia em diferentes estados.",
      },
      {
        pergunta: "Meu negócio é pequeno. Vale a pena anunciar?",
        resposta:
          "Vale, desde que a mira seja estreita: um serviço, um público, uma oferta clara. Com verba modesta e segmentação certa, negócio local costuma ver os primeiros contatos na primeira semana. No diagnóstico a gente calcula o número do seu caso e fala se a conta fecha.",
      },
      {
        pergunta: "Já tenho alguém cuidando das minhas redes. Preciso da Etuos?",
        resposta:
          "Post bonito e cliente novo são coisas diferentes. Redes sociais mantêm quem já te conhece; anúncio, SEO e site trazem quem está procurando agora e nunca ouviu falar de você. A gente cuida da parte que enche a agenda e trabalha junto com quem faz o seu conteúdo.",
      },
      {
        pergunta: "Como acompanho o que está sendo feito?",
        resposta:
          "Todo mês você recebe um relatório simples: quanto investiu, quantos contatos chegaram, quanto custou cada um e o que vem a seguir. E o WhatsApp do Lin fica aberto para dúvida no meio do caminho.",
      },
    ] satisfies Pergunta[],
    cta: {
      titulo: "Pronto para crescer no Brasil?",
      descricao:
        "Chama a gente no WhatsApp. Você recebe um diagnóstico honesto e gratuito do seu marketing, sem compromisso e sem enrolação.",
      botao: "Quero meu diagnóstico gratuito",
    },
  },
  servicos: {
    metaTitulo: "Serviços: tráfego pago, SEO e criação de sites",
    metaDescricao:
      "Gestão de tráfego pago, SEO local e criação de sites para negócios no Brasil e brasileiros nos Estados Unidos. Veja como a Etuos faz o seu WhatsApp tocar.",
    eyebrow: "Serviços",
    titulo: "Três serviços, um objetivo: cliente no seu WhatsApp",
    descricao:
      "Anúncio traz cliente agora, SEO traz cliente para sempre e o site transforma os dois em conversa. Você pode começar por um. Juntos, o custo por cliente cai.",
  },
  servico: {
    eyebrow: "Serviço",
    ctaHero: "Quero esse serviço",
    mensagem: (nome: string) =>
      `Olá! Vim pelo site da Etuos e quero um diagnóstico gratuito sobre ${nome}.`,
    doresTitulo: "Isso parece com a sua rotina?",
    doresFecho:
      "Se você se reconheceu em pelo menos uma, este serviço foi feito para você.",
    entregasEyebrow: "O que está incluso",
    entregasTitulo: "O que a gente entrega",
    comparativo: {
      eyebrow: "Compare",
      titulo: "Fazer sozinho, agência comum ou Etuos?",
      colCriterio: "O que muda",
      colSozinho: "Fazendo sozinho",
      colAgencia: "Agência comum",
      colEtuos: "Etuos",
    },
    processoEyebrow: "Processo",
    processoTitulo: "Como funciona na prática",
    faqTitulo: (nome: string) => `Perguntas frequentes: ${nome.toLowerCase()}`,
    ctaTitulo: "Vamos começar?",
    ctaDescricao:
      "Chama no WhatsApp, conta sobre o seu negócio e a gente te diz com sinceridade se esse serviço é o certo para o seu momento.",
  },
  cidade: {
    metaTitulo: (nome: string, uf: string) =>
      `Agência brasileira de marketing em ${nome}, ${uf}`,
    metaDescricao: (nome: string, estado: string) =>
      `Marketing digital para brasileiros em ${nome}, ${estado}: tráfego pago, SEO local e sites para atrair mais clientes na região. Diagnóstico gratuito no WhatsApp.`,
    // O nome da cidade entra em destaque logo depois deste trecho.
    h1Antes: "Marketing digital para brasileiros em",
    ctaHero: (nome: string) => `Atrair clientes em ${nome}`,
    mensagem: (nome: string) =>
      `Olá! Tenho um negócio na região de ${nome} e quero um diagnóstico gratuito para atrair mais clientes.`,
    mercadoTitulo: (nome: string) => `O mercado brasileiro em ${nome}`,
    nichosTitulo: "Nichos fortes na região",
    comoAjudamosTitulo: (nome: string) => `Como ajudamos negócios em ${nome}`,
    saibaMais: "Saiba mais",
    comoBuscamTitulo: (nome: string) =>
      `Como o seu cliente procura em ${nome}`,
    atendemosTitulo: (nome: string) => `Atendemos ${nome} e região`,
    atendemosDescricao: (nome: string) =>
      `Trabalhamos com negócios em toda a área de ${nome}, incluindo:`,
    faqTitulo: (nome: string) => `Perguntas de quem empreende em ${nome}`,
    ctaTitulo: (nome: string) => `Pronto para crescer em ${nome}?`,
    ctaDescricao:
      "Chama a gente no WhatsApp e receba um diagnóstico gratuito do seu marketing na sua região, sem compromisso.",
  },
  blog: {
    metaTitulo: "Blog: marketing digital para brasileiros nos EUA",
    metaDescricao:
      "Artigos práticos sobre marketing digital, tráfego pago, SEO local e vendas para brasileiros que empreendem nos Estados Unidos e negócios no Brasil.",
    eyebrow: "Blog",
    titulo: "Conteúdo prático para atrair mais clientes",
    descricao:
      "O que a gente aprende gerenciando campanhas, SEO e sites todo dia, escrito para você aplicar no seu negócio.",
    por: "por",
    ler: "Ler artigo",
  },
  contato: {
    metaTitulo: "Contato: diagnóstico gratuito no WhatsApp",
    metaDescricao:
      "Fale com a Etuos pelo WhatsApp e receba um diagnóstico gratuito do seu marketing. Resposta no mesmo dia, direto com o fundador, sem robô e sem compromisso.",
    eyebrow: "Contato",
    titulo: "Fale direto com quem vai cuidar do seu marketing",
    descricao:
      "O caminho mais rápido é o WhatsApp. Conta em poucas linhas como está o seu negócio e receba um diagnóstico gratuito, sem compromisso.",
    passos: [
      "Você chama no WhatsApp e conta como está o negócio hoje",
      "O Lin analisa seu site, seu perfil no Google e seus concorrentes",
      "Você recebe uma leitura honesta do que resolver primeiro",
    ],
  },
  formulario: {
    semEndpointTexto:
      "Chama no WhatsApp, conta em duas linhas como está o seu negócio e o plano de ação sai em até 48 horas.",
    semEndpointRodape:
      "Resposta no mesmo dia, direto com o Lin. Sem robô e sem formulário longo.",
    feito: "Feito",
    recebemosTitulo: "Recebemos o seu pedido",
    recebemosTexto:
      "Seu plano de ação fica pronto em até 48 horas e chega no WhatsApp que você informou. Se quiser adiantar a conversa, chama a gente agora.",
    falarAgora: "Falar no WhatsApp agora",
    nome: "Seu nome",
    whatsapp: "WhatsApp com DDD",
    whatsappDica: "Pode ser número do Brasil ou dos Estados Unidos",
    site: "Endereço do seu site",
    siteDica: "Se ainda não tem site, escreva não tenho",
    ondeFica: "Onde fica o negócio",
    paisBrasil: "Brasil",
    paisEua: "Estados Unidos",
    cidade: "Cidade",
    enviando: "Enviando...",
    erroAntes: "Não conseguimos enviar agora. Tenta de novo ou",
    erroLink: "chama no WhatsApp",
    erroDepois: ", que a gente resolve por lá.",
    privacidadeAntes:
      "Seus dados servem só para montar o plano e falar com você. Sem disparo de spam. Detalhes na",
    privacidadeLink: "política de privacidade",
    privacidadeDepois: ".",
  },
  campanha: {
    comoFunciona: "Como funciona",
    quemMonta: "Quem monta o seu plano",
    prazer: "Prazer, eu sou o Lin",
    fotoLinAlt:
      "Lin Zeri, fundador da Etuos, sorrindo de braços cruzados em um evento",
    prefereConversar: "Prefere resolver conversando? A porta também está aberta.",
    falarWhatsApp: "Falar no WhatsApp",
  },
  naoEncontrada: {
    titulo: "Página não encontrada",
    texto: "Esta página não existe ou mudou de endereço.",
    voltar: "Ir para a home",
  },
  metadata: {
    tituloPadrao: "Etuos | Agência de marketing digital no Brasil e nos EUA",
    template: "%s | Etuos",
  },
  og: {
    titulo: "Marketing digital que faz o seu WhatsApp tocar",
    subtitulo: "Tráfego pago, SEO local e criação de sites",
    alt: "Etuos: marketing digital para negócios no Brasil e nos Estados Unidos. Tráfego pago, SEO e criação de sites.",
  },
  schema: {
    contatoTipo: "atendimento ao cliente",
    eua: "Estados Unidos",
    brasil: "Brasil",
    cargoLin: "Fundador e estrategista de marketing digital",
    audiencia:
      "Negócios e profissionais no Brasil e brasileiros que empreendem nos Estados Unidos",
    trilhaHome: "Home",
    trilhaEua: "Estados Unidos",
    trilhaServicos: "Serviços",
    trilhaBlog: "Blog",
    trilhaSobre: "Sobre",
  },
};

export type Dicionario = typeof pt;
