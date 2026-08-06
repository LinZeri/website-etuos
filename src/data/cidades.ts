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
  // Como cada serviço se aplica àquela cidade. Substitui o bloco genérico que
  // era idêntico nas 10 páginas e derrubava a nota de conteúdo na auditoria.
  servicosLocais: { slug: string; texto: string }[];
  // Comportamento de busca do cliente local, em um parágrafo.
  comoBuscam: string;
  // Perguntas específicas da cidade. Viram seção na página e FAQPage no JSON-LD.
  faq: { pergunta: string; resposta: string }[];
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
    servicosLocais: [
      {
        slug: "trafego-pago",
        texto:
          "Em Brickell e Aventura o clique é caro e o público é disputado. A gente separa campanha por bairro e por idioma, para você não pagar por gente de Kendall quando o seu atendimento é em Doral, nem falar em português com quem só pesquisa em inglês.",
      },
      {
        slug: "seo",
        texto:
          "Miami tem concorrente brasileiro em quase todo nicho, e quem aparece no mapa leva a ligação. O trabalho aqui é dominar as buscas do seu serviço nos bairros onde você atende de verdade, com perfil no Google impecável e páginas que respondem o que o cliente pergunta antes de fechar.",
      },
      {
        slug: "criacao-de-sites",
        texto:
          "O público de Miami compara antes de escolher, e muita gente entra no seu perfil só para conferir se o negócio existe mesmo. Seu site precisa carregar rápido no celular, mostrar trabalho real e ter versão em inglês quando o cliente americano faz parte da conta.",
      },
    ],
    comoBuscam:
      "O cliente de Miami pesquisa em dois idiomas e em três lugares: o Google, o mapa e o grupo de brasileiros da região. É comum buscar em português, comparar no Instagram e só então chamar no WhatsApp. Quem tem avaliação boa, foto de trabalho recente e resposta rápida sai na frente, mesmo cobrando mais caro que o concorrente do lado.",
    faq: [
      {
        pergunta:
          "Meu nicho em Miami já tem muito brasileiro anunciando. Ainda vale a pena?",
        resposta:
          "Vale, desde que a estratégia seja mais fina que a do vizinho. Em mercado cheio não ganha quem grita mais alto, e sim quem fala com o público certo, no bairro certo, com uma oferta clara. Costuma render mais dominar Doral inteiro do que aparecer mal em Miami toda.",
      },
      {
        pergunta: "Preciso do site em inglês para atender em Miami?",
        resposta:
          "Depende de quem paga a sua conta. Se boa parte dos seus clientes é americana ou hispânica, a versão em inglês deixa de ser luxo. Se você atende só a comunidade brasileira, o português resolve, e a gente concentra o esforço em SEO local e prova social.",
      },
      {
        pergunta:
          "Estou começando agora em Miami, sem cliente e sem site. Por onde começo?",
        resposta:
          "Pelo básico bem feito: perfil no Google com foto e serviços corretos, uma página que explique o que você faz e um canal de contato que você consiga atender rápido. Com isso no ar, o tráfego pago traz os primeiros clientes enquanto o SEO começa a andar.",
      },
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
    servicosLocais: [
      {
        slug: "trafego-pago",
        texto:
          "Orlando tem dois públicos e cada um pede uma campanha: o turista que planeja a viagem semanas antes, ainda no Brasil, e o morador que precisa do serviço nesta semana. A gente separa as duas e move a verba conforme a temporada de férias esquenta ou esfria.",
      },
      {
        slug: "seo",
        texto:
          "Quem vem passear pesquisa muito antes de comprar, e é aí que o conteúdo trabalha por você de graça. Para o morador de Kissimmee ou Winter Garden, o que decide é aparecer no mapa na hora em que ele busca o seu serviço na região.",
      },
      {
        slug: "criacao-de-sites",
        texto:
          "Boa parte das visitas em Orlando vem do celular, muitas vezes de alguém em outro fuso conferindo preço e disponibilidade. Um site que carrega rápido, mostra o que está incluso e permite pedir orçamento em dois toques evita perder a reserva para o concorrente.",
      },
    ],
    comoBuscam:
      "Aqui a busca começa cedo. O turista pesquisa transfer, casa e passeio semanas antes de embarcar, compara em grupo de viagem e fecha pelo WhatsApp. Já o morador busca como qualquer local: serviço mais cidade, olha as avaliações e chama quem responde primeiro. Atender bem os dois momentos é o que enche a agenda o ano inteiro.",
    faq: [
      {
        pergunta: "Dá para anunciar para o brasileiro que ainda está no Brasil?",
        resposta:
          "Dá, e para quem atende turista costuma ser a campanha que mais rende. O Google e a Meta permitem mirar quem está no Brasil pesquisando sobre Orlando. A gente aproveita a janela do planejamento, quando a pessoa ainda está decidindo com quem vai gastar.",
      },
      {
        pergunta: "Meu negócio é sazonal. Como fica a verba nos meses fracos?",
        resposta:
          "A verba acompanha o calendário. Nos picos de férias escolares e feriados a gente sobe o investimento; na baixa temporada, reduz e mantém só o que traz retorno. Cortar tudo de uma vez costuma sair caro, porque a campanha perde histórico e leva tempo para recuperar o ritmo.",
      },
      {
        pergunta: "Preciso aparecer no Google Maps se meu cliente é turista?",
        resposta:
          "Precisa. Boa parte dos turistas busca já na cidade, no celular, com o mapa aberto. E o perfil também trabalha a favor da confiança: fotos, horário e avaliações recentes são o que fazem alguém de fora escolher você sem conhecer ninguém que já usou o seu serviço.",
      },
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
    servicosLocais: [
      {
        slug: "trafego-pago",
        texto:
          "Serviço de campo em Broward vive de raio de atendimento. A gente configura a campanha para aparecer em Oakland Park, Plantation e Sunrise sem gastar com clique de quem está a uma hora de distância, e leva a pessoa direto para o WhatsApp, onde você fecha.",
      },
      {
        slug: "seo",
        texto:
          "Aqui o cliente busca o serviço e a cidade juntos e pede três orçamentos antes de decidir. Aparecer no mapa em Fort Lauderdale e nas vizinhas, com avaliações e fotos de obras recentes, vale mais do que qualquer folheto ou carro adesivado.",
      },
      {
        slug: "criacao-de-sites",
        texto:
          "Construção, limpeza e beleza vendem pelo olho: antes e depois, portfólio e prazo. Um site com fotos do seu trabalho e um formulário curto de orçamento transforma a curiosidade de quem viu o seu carro na rua em pedido de visita.",
      },
    ],
    comoBuscam:
      "O morador de Broward pergunta no grupo de brasileiros e confirma no Google. Ele quer três coisas antes de chamar: foto de trabalho de verdade, avaliação recente e resposta rápida no WhatsApp. Quem some por dois dias perde o serviço para quem respondeu em dez minutos, mesmo cobrando mais caro.",
    faq: [
      {
        pergunta: "Atendo Broward inteira. Dá para aparecer em mais de uma cidade?",
        resposta:
          "Dá. No anúncio, a gente desenha o raio real do seu deslocamento. No SEO, o caminho é ter conteúdo próprio para as cidades onde você mais trabalha, em vez de uma página só repetindo nomes. Prometer atender vinte cidades sem nada específico sobre nenhuma não engana o Google nem o cliente.",
      },
      {
        pergunta:
          "Não tenho endereço comercial, trabalho de casa. Dá para aparecer no mapa?",
        resposta:
          "Dá. O Google permite perfil de negócio com área de atendimento, sem endereço público, que é exatamente o caso de quem presta serviço na casa do cliente. O endereço fica oculto e você aparece nas buscas da região que declarar.",
      },
      {
        pergunta: "Trabalho sozinho e a agenda já está quase cheia. Vale investir?",
        resposta:
          "Vale se o objetivo for trocar volume por preço. Com fluxo constante de contato, você escolhe o trabalho melhor pago em vez de aceitar o que aparece. Se a agenda está no limite e você não quer montar equipe, a conversa é outra, e eu digo isso antes de te vender qualquer coisa.",
      },
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
    servicosLocais: [
      {
        slug: "trafego-pago",
        texto:
          "Com raio curto e público que compra em português, dá para fazer muito com verba modesta. A campanha mira quem está a poucos minutos da sua porta, em Pompano, Deerfield e Margate, e o anúncio fala a língua de quem vai comprar.",
      },
      {
        slug: "seo",
        texto:
          "Aqui o mapa é o balcão. Perfil no Google com foto de produto, horário certo e avaliação recente é o que decide quem recebe a visita de quem buscou padaria, salão ou mercado brasileiro perto de casa.",
      },
      {
        slug: "criacao-de-sites",
        texto:
          "Comércio de bairro não precisa de site grande, precisa de site que responde rápido: o que você vende, onde fica, que horas abre e como chamar no WhatsApp. Isso, leve e bem feito no celular, converte mais que um site bonito e confuso.",
      },
    ],
    comoBuscam:
      "Em Pompano a busca é curta e prática: nome do serviço em português, olhada no mapa, conferida nas fotos e ligação. Muita gente chega por indicação e usa o Google só para confirmar endereço e horário. Quando o perfil está desatualizado, o cliente entende que o negócio fechou e vai para o próximo da lista.",
    faq: [
      {
        pergunta: "Meu público é só brasileiro. Preciso de alguma coisa em inglês?",
        resposta:
          "Não precisa. Se todo o seu faturamento vem da comunidade, é melhor investir tudo em aparecer bem nas buscas em português e no mapa. A versão em inglês entra depois, se você quiser abrir uma frente nova de cliente americano.",
      },
      {
        pergunta: "Tenho loja física. O que dá mais retorno: anúncio ou Google Maps?",
        resposta:
          "Para comércio de rua, quase sempre o perfil no Google vem primeiro: é gratuito, aparece na hora da decisão e mostra foto, horário e avaliação. O anúncio entra depois, para empurrar promoção, produto novo ou período fraco do mês.",
      },
      {
        pergunta: "Consigo resultado com verba pequena em Pompano?",
        resposta:
          "Consegue, porque o raio é curto e o clique custa menos que em Miami. Com pouca verba a regra é focar: um serviço, um público, uma oferta clara. Espalhar pouco dinheiro em muita campanha é a forma mais rápida de não ver resultado nenhum.",
      },
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
    servicosLocais: [
      {
        slug: "trafego-pago",
        texto:
          "Cleaning, construção e paisagismo têm clique caro na Grande Boston, então cada dólar precisa ir para a busca certa. A gente separa campanha por serviço e por cidade, de Everett a Peabody, e acompanha o custo por contato semana a semana.",
      },
      {
        slug: "seo",
        texto:
          "Concorrência estabelecida há décadas não cai no grito, cai na consistência: uma página forte para cada serviço, presença no mapa das cidades onde você atende e avaliações novas entrando todo mês.",
      },
      {
        slug: "criacao-de-sites",
        texto:
          "O cliente americano do subúrbio pesquisa, compara e desconfia de quem não tem site. Uma página em inglês, com serviços claros, área atendida e pedido de orçamento simples, tira você da lista dos improvisados antes da primeira conversa.",
      },
    ],
    comoBuscam:
      "Na Grande Boston convivem dois comportamentos. O cliente brasileiro chega por indicação e confirma no WhatsApp. O americano busca em inglês, lê avaliação, pede dois ou três orçamentos e escolhe quem parece mais profissional. Quem atende só o primeiro grupo deixa metade do mercado na mesa.",
    faq: [
      {
        pergunta: "Meu cliente é americano. O site pode ser só em inglês?",
        resposta:
          "Pode, e em muitos casos deve. Se quem paga a conta busca em inglês, o site precisa falar com ele do começo ao fim, sem tradução truncada. Se você também atende a comunidade brasileira, aí sim vale ter as duas versões, cada uma com texto próprio.",
      },
      {
        pergunta: "Meu serviço tem pico no inverno ou no verão. Como planejar?",
        resposta:
          "Planejando o ano inteiro, não só o pico. A gente sobe a verba nas semanas de maior procura, mantém presença mínima na baixa para a campanha não perder histórico e usa o período fraco para trabalhar SEO e juntar avaliação, que é o que sustenta o pico seguinte.",
      },
      {
        pergunta: "Vivo de indicação há anos. Por que investir agora?",
        resposta:
          "Porque indicação não tem torneira. Ela vem quando vem e não cresce no ritmo que você decide. O marketing digital não substitui a sua rede: cobre os meses em que a indicação não aparece e te deixa escolher o trabalho em vez de aceitar qualquer um.",
      },
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
    servicosLocais: [
      {
        slug: "trafego-pago",
        texto:
          "Cidade menor significa clique mais barato e raio curto: dá para cobrir Framingham, Natick e Ashland com verba bem menor que a de um grande centro. A campanha fala em português e leva direto para o WhatsApp, que é onde o cliente daqui fecha.",
      },
      {
        slug: "seo",
        texto:
          "Em uma cidade onde a reputação corre rápido, o Google funciona como confirmação. Perfil completo, fotos atuais e um fluxo constante de avaliações fazem o boca a boca virar cliente novo em vez de parar no meio do caminho.",
      },
      {
        slug: "criacao-de-sites",
        texto:
          "Muito negócio bom em Framingham ainda vive só de página em rede social. Um site simples, com serviços, horário e endereço, faz você parecer o que já é: um negócio sério, e não alguém que atende quando dá.",
      },
    ],
    comoBuscam:
      "Aqui quase toda decisão começa com uma indicação e termina no Google. A pessoa ouve o seu nome no salão, na igreja ou no mercado e busca para confirmar se você existe, onde fica e se as avaliações combinam com a fama. Se não achar nada, a indicação esfria antes de virar cliente.",
    faq: [
      {
        pergunta: "Todo mundo já me conhece na cidade. Preciso mesmo de marketing?",
        resposta:
          "Precisa se quiser continuar crescendo. Ser conhecido é ótimo para quem já mora aqui, mas Framingham recebe gente nova o tempo todo, e essa gente não conhece ninguém: ela busca no Google. Quem aparece nessa hora ganha o cliente que ainda não tem fornecedor de confiança.",
      },
      {
        pergunta: "Quanto custa anunciar em uma cidade do tamanho de Framingham?",
        resposta:
          "Bem menos que em Boston. O público é menor e o clique é mais barato, então uma verba modesta já cobre a cidade e as vizinhas. O maior ganho aqui costuma vir da combinação de anúncio local com perfil no Google bem cuidado.",
      },
      {
        pergunta: "Como consigo mais avaliações no Google?",
        resposta:
          "Pedindo no momento certo e facilitando o caminho. A gente monta um link direto para a avaliação, define quando pedir (logo depois do serviço entregue, não uma semana depois) e cria o hábito na equipe. Nada de comprar avaliação: o Google detecta e a punição custa caro.",
      },
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
    servicosLocais: [
      {
        slug: "trafego-pago",
        texto:
          "Boa parte do movimento do Ironbound vem de fora: gente de Nova York, Elizabeth e Kearny que decide no meio da semana onde vai comer ou comprar no fim de semana. A campanha mira esse raio maior e concentra a verba nos dias em que a decisão acontece.",
      },
      {
        slug: "seo",
        texto:
          "Quem vai dirigir até a Ferry Street pesquisa antes: cardápio, foto, horário e avaliação. Aparecer no mapa com tudo isso em ordem é o que faz o carro sair de outra cidade em direção ao seu endereço, e não ao do vizinho de rua.",
      },
      {
        slug: "criacao-de-sites",
        texto:
          "Restaurante, padaria e casa de eventos vendem pela imagem e pela facilidade. Um site com cardápio atualizado, fotos boas, endereço e reserva ou orçamento em um toque evita que o cliente desista no meio do caminho.",
      },
    ],
    comoBuscam:
      "O público do Ironbound é grande, exigente e tem opção de sobra. Ele pesquisa no celular, olha as fotos, lê as avaliações mais recentes e decide em poucos minutos. Como muita gente vem de outra cidade, informação errada no mapa não é detalhe: é cliente que vira a esquina e vai embora.",
    faq: [
      {
        pergunta: "Meu movimento é de fim de semana. Dá para concentrar o anúncio?",
        resposta:
          "Dá, e costuma ser o que mais rende. A gente concentra a verba nos dias e horários em que a decisão é tomada, em geral da quinta ao sábado, em vez de espalhar o investimento por sete dias e aparecer fraco justamente quando o cliente está escolhendo.",
      },
      {
        pergunta: "Recebo gente de Nova York. Como alcançar quem está fora de Newark?",
        resposta:
          "Ampliando o raio da campanha e falando a língua de quem vem de fora: estacionamento, tempo de viagem e o que só tem aqui. No orgânico, o caminho é o perfil no Google bem montado, porque é ele que aparece para quem procura churrascaria ou padaria brasileira na região metropolitana.",
      },
      {
        pergunta: "Já tenho rede social movimentada. Vale a pena ter site?",
        resposta:
          "Vale. A rede mostra o seu dia a dia para quem já te segue; o site aparece para quem nunca ouviu falar de você e está procurando agora. Além disso, cardápio, horário e endereço no seu próprio domínio são o que o Google usa para te mostrar no mapa.",
      },
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
    servicosLocais: [
      {
        slug: "trafego-pago",
        texto:
          "Com clique mais barato do que na Flórida e em Massachusetts, dá para cobrir Danbury, Bethel e Brookfield com uma verba enxuta. A campanha pode rodar em português para a comunidade e em inglês para o cliente americano, separadas, cada uma com o argumento que funciona.",
      },
      {
        slug: "seo",
        texto:
          "Cidade média é onde o SEO local rende mais rápido: menos gente disputando as mesmas buscas e um mapa que ainda tem espaço para quem organiza perfil, avaliações e páginas de serviço direito.",
      },
      {
        slug: "criacao-de-sites",
        texto:
          "O cliente de Ridgefield e Brookfield pesquisa preço, prazo e credencial antes de deixar alguém entrar em casa. Um site em inglês, com serviços, área atendida e prova de trabalho, resolve metade da desconfiança antes do primeiro contato.",
      },
    ],
    comoBuscam:
      "Danbury junta dois mundos. A comunidade brasileira circula por indicação e WhatsApp; o cliente americano do entorno pesquisa em inglês, lê avaliações e pede dois ou três orçamentos. Quem consegue falar com os dois, cada um do seu jeito, cresce mais rápido do que quem escolhe só um lado.",
    faq: [
      {
        pergunta: "Atendo várias cidades pequenas. Como aparecer em todas?",
        resposta:
          "No anúncio, com um raio que cubra a sua rota real. No orgânico, priorizando duas ou três cidades onde você quer mesmo crescer e construindo conteúdo próprio para cada uma. Página genérica trocando só o nome da cidade não ranqueia e ainda passa impressão de negócio improvisado.",
      },
      {
        pergunta: "Meu cliente é americano. O anúncio precisa ser em inglês?",
        resposta:
          "Precisa, e o texto tem que ser escrito em inglês, não traduzido. Termo, tom e argumento mudam. A gente costuma rodar duas campanhas separadas, uma por idioma, para comparar o custo por contato e colocar mais verba onde o retorno aparece.",
      },
      {
        pergunta: "Vale a pena fazer SEO em cidade pequena?",
        resposta:
          "Vale, e o retorno costuma vir antes. Com menos gente disputando as mesmas buscas, um trabalho consistente coloca você no topo do seu nicho na cidade em poucos meses. Depois disso, o custo de manter é baixo e o telefone toca sem você pagar por clique.",
      },
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
    servicosLocais: [
      {
        slug: "trafego-pago",
        texto:
          "Com menos brasileiro anunciando do que na Flórida, o clique aqui ainda sai em conta. A campanha cobre o eixo norte, de Marietta a Buford, e mira quem já está procurando o seu serviço, em vez de disputar a atenção de quem não pediu nada.",
      },
      {
        slug: "seo",
        texto:
          "Vários nichos em Atlanta ainda não têm um líder brasileiro claro no Google. Quem organiza perfil, páginas de serviço e avaliações primeiro ocupa esse lugar e passa a colher contato por anos, com custo de manutenção baixo.",
      },
      {
        slug: "criacao-de-sites",
        texto:
          "A comunidade cresce com gente chegando o tempo todo, sem fornecedor de confiança e sem referência de ninguém. Nessa hora, o site é o que separa quem parece empresa de quem parece bico, e costuma decidir a primeira conversa.",
      },
    ],
    comoBuscam:
      "A comunidade em Atlanta é nova e espalhada pelo norte da metrópole, então quase ninguém tem o fornecedor de sempre. A pessoa pergunta no grupo, recebe três nomes e pesquisa os três no Google. Quem tem perfil completo, site no ar e avaliação recente costuma ser o único dos três que passa nesse filtro.",
    faq: [
      {
        pergunta: "A comunidade aqui é menor que na Flórida. Tem gente buscando?",
        resposta:
          "Tem, e cresce a cada ano. Além disso, em Atlanta você não depende só do público brasileiro: muitos serviços atendem o cliente americano do entorno, que é enorme. A vantagem é chegar antes, quando ainda dá para ocupar o topo do seu nicho sem guerra de preço.",
      },
      {
        pergunta: "Estou chegando agora em Atlanta. Por onde começo?",
        resposta:
          "Pelo perfil no Google e por uma página que explique o que você faz, para quem e onde. Com isso no ar, o tráfego pago traz os primeiros clientes em semanas, enquanto o SEO começa a construir o que vai te sustentar depois. Fazer na ordem inversa custa mais caro.",
      },
      {
        pergunta: "Dá para atender clientes espalhados por Marietta, Alpharetta e Buford?",
        resposta:
          "Dá, desde que a campanha respeite o seu deslocamento real. Aceitar serviço a uma hora de distância costuma comer o lucro do dia. A gente desenha o raio junto com você e prioriza as regiões onde o seu ticket compensa o trajeto.",
      },
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
    servicosLocais: [
      {
        slug: "trafego-pago",
        texto:
          "Anunciar para Houston inteira é a forma mais rápida de queimar verba. A gente monta campanhas por subúrbio, de Katy a The Woodlands, com raio e público próprios, e compara o custo por contato de cada região antes de decidir onde colocar mais dinheiro.",
      },
      {
        slug: "seo",
        texto:
          "A busca aqui é por bairro, não pela cidade. Aparecer para quem procura o seu serviço em Cypress ou Pearland exige perfil com área de atendimento bem definida e conteúdo que fale das regiões onde você realmente trabalha.",
      },
      {
        slug: "criacao-de-sites",
        texto:
          "Seu cliente pode ser o brasileiro recém-chegado ou o americano que nunca ouviu falar de você. Um site rápido, nos dois idiomas quando fizer sentido, com área atendida e orçamento fácil, atende os dois sem parecer improviso para nenhum.",
      },
    ],
    comoBuscam:
      "Em Houston, distância é dinheiro. O cliente busca por serviço perto dele, olha quem atende o subúrbio onde mora e descarta quem parece longe demais. Ele também compara preço com mais frieza que em cidade pequena, então prova de trabalho, avaliação e clareza sobre o que está incluso pesam na decisão.",
    faq: [
      {
        pergunta: "Atendo Katy e Sugar Land. Dá para separar as campanhas?",
        resposta:
          "Dá, e é o certo. Cada região vira uma campanha com verba, anúncio e medição próprios. Assim você enxerga qual subúrbio traz cliente mais barato e cresce onde a conta fecha, em vez de tirar uma média que esconde o que está dando prejuízo.",
      },
      {
        pergunta: "Houston é enorme. Quanto preciso investir para aparecer?",
        resposta:
          "Menos do que parece, se a mira for estreita. O custo não depende do tamanho da cidade, e sim de quantas buscas você quer cobrir. Começar por dois ou três subúrbios com verba concentrada rende muito mais do que espalhar o mesmo dinheiro pela área metropolitana inteira.",
      },
      {
        pergunta: "Meu cliente é brasileiro e americano. Como falar com os dois?",
        resposta:
          "Com campanhas e páginas separadas por idioma. O argumento que convence o brasileiro, confiança e atendimento na língua dele, não é o mesmo que convence o americano, que quer licença, seguro, prazo e orçamento por escrito. Misturar tudo em uma mensagem só costuma não convencer ninguém.",
      },
    ],
  },
];

export function getCidade(slug: string): Cidade | undefined {
  return cidades.find((cidade) => cidade.slug === slug);
}
