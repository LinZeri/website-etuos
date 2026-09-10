import type { IdServico } from "@/i18n/mapa-slugs";
import type { ConteudoServico } from "./index";

// Copy em português (língua fonte). O slug mora em src/i18n/mapa-slugs.ts.
// Estrutura de cada serviço: promessa concreta no título, dor específica,
// entregas com mecanismo, processo curto, para quem é e objeções respondidas.
export const servicosPt: Record<IdServico, ConteudoServico> = {
  "trafego-pago": {
    nome: "Tráfego pago",
    titulo: "Gestão de tráfego pago: Google e Meta Ads",
    descricaoCurta:
      "Campanhas no Google, no Instagram e no Facebook que colocam o seu negócio na frente de quem já procura o que você vende, na sua cidade.",
    heroDescricao:
      "Anúncio bom não é o que aparece mais. É o que aparece para a pessoa certa, na hora certa, e termina em conversa. É isso que a gente monta, mede e ajusta toda semana.",
    dores: [
      "Você vive de indicação e nunca sabe se o mês que vem vai ser bom ou ruim",
      "Seus concorrentes aparecem primeiro no Google e nas redes, mesmo sendo piores que você",
      "Você já impulsionou post, o dinheiro sumiu e não chegou um cliente sequer",
      "Anunciar em inglês, para o público americano, parece um bicho de sete cabeças",
    ],
    entregas: [
      {
        titulo: "Campanhas no Google Ads",
        descricao:
          "Seu negócio aparece exatamente quando alguém digita o que você vende, em português ou em inglês, no raio onde você atende. Quem busca já quer comprar; a gente só coloca você na frente.",
      },
      {
        titulo: "Campanhas no Instagram e no Facebook",
        descricao:
          "Anúncios com criativo pensado para o público brasileiro e para o americano da sua cidade, cada um com a mensagem que convence aquele público. Nada de post impulsionado no escuro.",
      },
      {
        titulo: "Segmentação por bairro e por idioma",
        descricao:
          "Você escolhe onde quer crescer. A gente mira a cidade, o raio e o público certos, para não pagar por clique de quem mora longe demais ou fala outra língua.",
      },
      {
        titulo: "Otimização toda semana",
        descricao:
          "Acompanhamos as campanhas semana a semana: o anúncio que traz cliente recebe mais verba, o que não traz é cortado. Cada dólar vai para o que funciona.",
      },
      {
        titulo: "Relatório que você entende",
        descricao:
          "Todo mês, um resumo em português claro: quanto investiu, quantos contatos chegaram, quanto custou cada um e o que vem a seguir. Sem planilha de cem abas.",
      },
    ],
    processo: [
      {
        titulo: "Diagnóstico gratuito no WhatsApp",
        descricao:
          "Você conta como está o negócio hoje e a gente avalia onde o anúncio pode trazer retorno mais rápido. Se a conta não fechar, a gente fala.",
      },
      {
        titulo: "Estratégia sob medida",
        descricao:
          "Definimos canais, verba, público e oferta para o seu caso. Nada de pacote pronto igual para todo mundo.",
      },
      {
        titulo: "Campanhas no ar em dias",
        descricao:
          "Criamos os anúncios, configuramos a medição de cada contato e colocamos as campanhas para rodar.",
      },
      {
        titulo: "Otimização e escala",
        descricao:
          "Com os primeiros resultados, ajustamos o que rende e aumentamos a verba com segurança, sem apostar no escuro.",
      },
    ],
    paraQuem:
      "Para quem precisa de cliente agora. O tráfego pago é o caminho mais rápido para gerar contatos: as campanhas começam a trabalhar no mesmo mês, enquanto o SEO amadurece.",
    comparativo: [
      {
        criterio: "Quem monta e acompanha",
        sozinho: "Você, entre um cliente e outro",
        agencia: "Gerente de conta e estagiário",
        etuos: "O Lin, do diagnóstico ao relatório",
      },
      {
        criterio: "Segmentação",
        sozinho: "Post impulsionado para todo mundo",
        agencia: "Cidade inteira, um idioma só",
        etuos: "Bairro, raio e idioma do seu cliente",
      },
      {
        criterio: "Primeiro contato",
        sozinho: "Semanas de tentativa e erro",
        agencia: "Depende do pacote",
        etuos: "Costuma chegar na primeira semana",
      },
      {
        criterio: "Relatório",
        sozinho: "Painel do Google que ninguém entende",
        agencia: "PDF de 40 páginas",
        etuos: "Uma página: investiu, chegou, custou, próximo passo",
      },
      {
        criterio: "Sua conta de anúncios",
        sozinho: "Sua",
        agencia: "Muitas vezes fica na agência",
        etuos: "Sua, no seu cartão, sempre",
      },
    ],
    faq: [
      {
        pergunta: "Quanto preciso investir por mês para valer a pena?",
        resposta:
          "Depende do seu setor, do seu ticket e da cidade onde você atua. Anunciar em Miami custa mais caro que anunciar em Danbury, e vender um serviço de 200 dólares exige menos verba que vender um de 5 mil. No diagnóstico gratuito a gente calcula o número do seu caso e fala com sinceridade se a conta fecha com o que você tem hoje.",
      },
      {
        pergunta: "Em quanto tempo o anúncio começa a trazer cliente?",
        resposta:
          "Campanha bem montada costuma gerar os primeiros contatos já na primeira semana. O ajuste fino leva de 30 a 60 dias, que é o tempo de descobrir quais anúncios, públicos e horários rendem mais no seu caso. Depois disso, é escalar o que funciona.",
      },
      {
        pergunta: "A gestão é cobrada junto com a verba de anúncio?",
        resposta:
          "Não. A verba vai direto para o Google e para a Meta, na sua conta e no seu cartão, então você vê exatamente quanto foi para a plataforma. A gestão é um valor à parte, combinado antes de começar. A conta de anúncios é sua e continua sua.",
      },
      {
        pergunta: "Dá para anunciar em inglês, para o público americano?",
        resposta:
          "Dá, e em muitos casos é o que mais rende. Montamos campanhas separadas por idioma, com criativo e página de destino próprios, porque o brasileiro e o americano não respondem ao mesmo argumento. O texto em inglês é escrito em inglês, não traduzido.",
      },
      {
        pergunta: "Já impulsionei post e não deu em nada. Vai ser diferente?",
        resposta:
          "Impulsionar post é entregar o seu dinheiro para o algoritmo escolher quem vê, sem oferta clara e sem destino. Campanha é outra coisa: público definido, criativo pensado para vender, uma página que converte e a medição de cada contato que chega. É a diferença entre torcer e medir.",
      },
      {
        pergunta: "Preciso ter site para anunciar?",
        resposta:
          "Não é obrigatório, dá para levar o anúncio direto para o WhatsApp. Só que com uma landing page o custo por contato costuma cair, porque a pessoa chega sabendo o que você faz e por que confiar em você. Se for o seu caso, a gente monta a página junto com a campanha.",
      },
    ],
  },
  seo: {
    nome: "SEO",
    titulo: "SEO local: apareça no Google sem pagar por clique",
    descricaoCurta:
      "Posicionamos o seu site e o seu perfil no Google nas primeiras posições para as buscas da sua cidade, sem verba de anúncio.",
    heroDescricao:
      "Quando alguém busca o seu serviço no Google, quem aparece primeiro leva o cliente. O nosso trabalho é fazer esse alguém encontrar você, hoje, no mês que vem e no ano que vem, sem pagar por cada clique.",
    dores: [
      "Seu negócio não aparece no Google nem quando buscam pelo seu nome",
      "Quem procura o seu serviço na sua cidade encontra o concorrente no mapa, não você",
      "Você paga anúncio para sempre porque sem verba o telefone para de tocar",
      "Seu perfil no Google Maps está abandonado, sem foto, sem avaliação recente",
    ],
    entregas: [
      {
        titulo: "SEO local e Google Maps",
        descricao:
          "Otimizamos o seu perfil no Google e o seu site para as buscas da sua cidade e dos bairros onde você atende de verdade. É no mapa que o cliente local decide para quem liga.",
      },
      {
        titulo: "Otimização técnica do site",
        descricao:
          "Velocidade, estrutura, dados estruturados e tudo o que o Google avalia para decidir quem merece as primeiras posições. Site lento e confuso não ranqueia, por melhor que seja o negócio.",
      },
      {
        titulo: "Conteúdo que ranqueia e vende",
        descricao:
          "Páginas e artigos respondendo exatamente o que o seu cliente pesquisa antes de comprar, em português e em inglês, com o vocabulário que cada público usa de verdade.",
      },
      {
        titulo: "Acompanhamento de posições",
        descricao:
          "Você vê mês a mês as palavras-chave subindo, o tráfego crescendo e os contatos chegando, com relatório em bom português. Sem gráfico bonito escondendo resultado ruim.",
      },
    ],
    processo: [
      {
        titulo: "Auditoria completa",
        descricao:
          "Analisamos seu site, seu perfil no Google e os concorrentes que aparecem na sua frente para saber exatamente onde atacar primeiro.",
      },
      {
        titulo: "Plano de 90 dias",
        descricao:
          "Priorizamos o que traz resultado mais rápido e montamos o plano de conteúdo e otimização, com metas que dá para medir.",
      },
      {
        titulo: "Execução por nossa conta",
        descricao:
          "Técnica, conteúdo e autoridade: a gente coloca a mão na massa. Você continua cuidando do seu negócio.",
      },
      {
        titulo: "Crescimento composto",
        descricao:
          "SEO é juro composto: cada mês de trabalho soma ao anterior e o tráfego cresce sem você pagar por clique. Depois de um ano, é o canal mais barato que você tem.",
      },
    ],
    paraQuem:
      "Para quem quer construir uma máquina de clientes que não depende de anúncio. Leva mais tempo que o tráfego pago, mas o resultado fica, se acumula e não desliga quando a verba acaba.",
    comparativo: [
      {
        criterio: "Foco",
        sozinho: "Dicas de vídeo no YouTube",
        agencia: "Tráfego, uma métrica de vaidade",
        etuos: "Buscas que viram contato na sua cidade",
      },
      {
        criterio: "Google Maps",
        sozinho: "Perfil abandonado",
        agencia: "Um item da lista",
        etuos: "Perfil, avaliações e área de atendimento como prioridade",
      },
      {
        criterio: "Conteúdo",
        sozinho: "Quando sobra tempo",
        agencia: "Texto genérico de redator",
        etuos: "Escrito para o que o seu cliente pesquisa, em português e inglês",
      },
      {
        criterio: "Prazo",
        sozinho: "Anos, sem saber se está no caminho",
        agencia: "Primeira página em 30 dias (não existe)",
        etuos: "Primeiros movimentos em 60 a 90 dias, com meta medida",
      },
      {
        criterio: "Parte técnica",
        sozinho: "Plugin em cima de plugin",
        agencia: "Terceirizada",
        etuos: "Site rápido e estruturado, pela mesma equipe",
      },
    ],
    faq: [
      {
        pergunta: "Em quanto tempo o SEO dá resultado?",
        resposta:
          "Os primeiros movimentos costumam aparecer entre 60 e 90 dias, e o resultado forte vem depois do sexto mês. SEO é juro composto: cada mês de trabalho soma ao anterior. Quem promete primeira página em 30 dias está vendendo ilusão, e a gente prefere perder o contrato a mentir.",
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
          "Na maioria dos casos, sim. O anúncio traz cliente agora e paga a conta enquanto o SEO amadurece. Quando o orgânico começa a andar, você reduz a dependência de mídia sem perder volume de contato. É assim que o custo por cliente cai ano após ano.",
      },
    ],
  },
  "criacao-de-sites": {
    nome: "Criação de sites",
    titulo: "Criação de sites que convertem visita em cliente",
    descricaoCurta:
      "Sites rápidos, com texto que vende e feitos para o celular, que levam quem visita direto para o seu WhatsApp. Prontos para o Google desde o primeiro dia.",
    heroDescricao:
      "Seu site não é um cartão de visitas. É um vendedor que trabalha 24 horas, responde as dúvidas do cliente antes de você e conduz a pessoa até o botão do WhatsApp. A gente constrói o seu para fazer exatamente isso.",
    dores: [
      "Você não tem site e perde os clientes que pesquisam antes de comprar, ou seja, quase todos",
      "Seu site é lento, feio no celular ou parece abandonado desde 2019",
      "Quem visita o seu site não faz nada: não chama, não liga, não pede orçamento",
      "Você paga anúncio que manda gente para uma página que não converte",
    ],
    entregas: [
      {
        titulo: "Design profissional e único",
        descricao:
          "Nada de template genérico igual ao do concorrente. Seu site com a cara do seu negócio, bonito no celular e no computador, com a sua identidade e as suas fotos.",
      },
      {
        titulo: "Texto que vende",
        descricao:
          "Escrevemos cada seção para conduzir o visitante até o botão de WhatsApp: promessa clara, prova, objeções respondidas. No seu tom e no idioma do seu público.",
      },
      {
        titulo: "Velocidade de verdade",
        descricao:
          "Sites estáticos que carregam em um piscar de olhos, no 4G do cliente e no Wi-Fi de casa. Velocidade é conversão e é ranking no Google.",
      },
      {
        titulo: "SEO desde o primeiro dia",
        descricao:
          "Estrutura, títulos, dados estruturados e conteúdo já otimizados para o Google encontrar e ranquear o seu site. E medição dos cliques no WhatsApp, para você saber de onde vem cada contato.",
      },
    ],
    processo: [
      {
        titulo: "Briefing direto",
        descricao:
          "Uma conversa para entender seu negócio, seu público, o que costumam te perguntar antes de fechar e o que o site precisa fazer por você.",
      },
      {
        titulo: "Design e texto",
        descricao:
          "Criamos o layout e a copy juntos, pensando em conversão desde a primeira dobra até o último botão.",
      },
      {
        titulo: "Construção e revisão",
        descricao:
          "Desenvolvemos o site, você revisa e a gente ajusta até ficar do seu jeito. Sem surpresa no fim.",
      },
      {
        titulo: "No ar e medindo",
        descricao:
          "Publicamos com domínio, métricas e WhatsApp configurados. Pronto para receber tráfego no mesmo dia.",
      },
    ],
    paraQuem:
      "Para quem está começando do zero ou tem um site que não gera nada. É a base de tudo: anúncio e SEO rendem muito mais em um site que converte.",
    comparativo: [
      {
        criterio: "Design",
        sozinho: "Template igual ao do concorrente",
        agencia: "Template com as suas cores",
        etuos: "Único, com a cara do seu negócio",
      },
      {
        criterio: "Texto",
        sozinho: "Você escreve à noite, quando dá",
        agencia: "Lorem ipsum até a entrega",
        etuos: "Escrito para conduzir ao WhatsApp",
      },
      {
        criterio: "Velocidade",
        sozinho: "WordPress lento, cheio de plugin",
        agencia: "Depende do tema",
        etuos: "Site estático que abre em um piscar de olhos",
      },
      {
        criterio: "SEO",
        sozinho: "Instala um plugin e torce",
        agencia: "Cobrado à parte",
        etuos: "Pronto para o Google desde o primeiro dia",
      },
      {
        criterio: "Propriedade",
        sozinho: "Sua",
        agencia: "Presa à plataforma da agência",
        etuos: "Domínio e site no seu nome, sempre",
      },
    ],
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
};
