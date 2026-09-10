import type { Dicionario } from "./pt";
import type { IdServico } from "@/i18n/mapa-slugs";

// English interface dictionary. Must match the shape of pt.ts exactly:
// a missing or extra key breaks the build.
//
// Reader: a US small-business owner searching in English. Positioning:
// digital marketing agency for businesses in the United States (Brazil only
// on the Brazil hub and the country cards). Main offer: free diagnosis.
// Copy rule: concrete promise, specific pain, proof with a number, CTA with
// verb and benefit. No dashes, no miracle promises, no invented figures.

type Resultado = {
  figura: string;
  contexto: string;
  servicos: IdServico[];
  segmento: string;
};

export const en = {
  nav: {
    home: "Home",
    brasil: "Brazil",
    eua: "USA",
    sobre: "About",
    servicos: "Services",
    blog: "Blog",
    contato: "Contact",
  },
  header: {
    irParaHome: "Etuos, go to the home page",
    whatsapp: "Free diagnosis",
  },
  menu: {
    abrir: "Open menu",
    fechar: "Close menu",
    whatsapp: "Get my free diagnosis",
  },
  footer: {
    servicos: "Services",
    ondeAtendemos: "Where we work",
    brasil: "Brazil",
    eua: "United States",
    direitos: "All rights reserved.",
    privacidade: "Privacy policy",
  },
  whatsapp: {
    botao: "Message us on WhatsApp",
    flutuante: "Message Etuos on WhatsApp",
  },
  // Sticky bar at the bottom of the screen on mobile.
  barraCta: {
    texto: "Free diagnosis, same-day reply",
    botao: "Message on WhatsApp",
  },
  seletorIdioma: {
    rotulo: "Language",
  },
  // Shown in the target language: the reader is currently on another language.
  bannerIdioma: {
    texto: "This page is also available in English.",
    trocar: "View in English",
    fechar: "Dismiss",
  },
  hero: {
    descricao:
      "Paid ads, local SEO and websites built to convert, for businesses in the United States and Brazil. Free diagnosis, same-day reply, straight from the founder.",
    cta: "Get my free diagnosis",
    verServicos: "See services",
  },
  // Proof strip right below the hero. The numeric values feed the animated
  // counter; the HTML ships with the final number already in place.
  numeros: [
    { valor: 10, sufixo: "+", legenda: "years in digital marketing" },
    { prefixo: "$", valor: 500, sufixo: "K+", legenda: "in ad spend managed" },
    { prefixo: "30 → ", valor: 300, sufixo: "+", legenda: "franchises in 1 year and 8 months" },
    { prefixo: "+", valor: 300, sufixo: "%", legenda: "revenue growth for clients" },
  ],
  servicosLista: {
    eyebrow: "What we do",
    tituloAntes: "Everything standing between you and",
    tituloDestaque: "more customers",
  },
  resultados: {
    eyebrow: "Results",
    titulo: "Numbers, not promises",
    descricao:
      "Good marketing can be measured. These are real results from clients who combined ads, a website and SEO, all built to convert.",
    fantasma: "RESULTS",
    itens: [
      {
        figura: "+300%",
        contexto:
          "revenue growth for clients who paired Google Ads with a website built to turn a visit into a conversation.",
        servicos: ["trafego-pago", "criacao-de-sites"],
        segmento: "Clinics and service businesses",
      },
      {
        figura: "30 → 300+",
        contexto:
          "franchises in 1 year and 8 months, with digital marketing as the engine behind a solar energy network's expansion.",
        servicos: ["trafego-pago", "seo"],
        segmento: "Solar energy franchise network",
      },
      {
        figura: "$500K+",
        contexto:
          "in ad spend managed on Google and Meta, with every dollar tracked down to the lead that landed on WhatsApp.",
        servicos: ["trafego-pago"],
        segmento: "13 industries served",
      },
    ] satisfies Resultado[],
  },
  depoimentos: {
    eyebrow: "Social proof",
    titulo: "Businesses that grew with Etuos",
    traduzido: "Translated from the original in Portuguese",
  },
  comoFunciona: {
    eyebrow: "How it works",
    titulo: "From the first hello to your phone ringing",
    fantasma: "PROCESS",
    passos: [
      {
        titulo: "Free diagnosis",
        descricao:
          "You tell us how the business is doing today. We look at your market, your competitors and where money is being left on the table. No cost, no commitment.",
      },
      {
        titulo: "A plan built for you",
        descricao:
          "No cookie-cutter packages. We build the right strategy for your niche, your city and your current stage, with a goal you can actually measure.",
      },
      {
        titulo: "Full execution",
        descricao:
          "Ads, SEO, website: we set everything up and get it live. You keep running your business.",
      },
      {
        titulo: "Measure, then scale",
        descricao:
          "You follow everything in simple monthly reports, in plain English. What brings in customers gets more budget. What doesn't gets cut.",
      },
    ],
  },
  fundador: {
    eyebrow: "Who handles your marketing",
    titulo: "A name, a face and a WhatsApp number",
    texto:
      "I'm Lin Zeri, and I've worked in advertising for over 10 years. There's no account manager or intern in between: the person who builds the strategy, runs the campaign and answers your message is me.",
    citacao:
      "I'd rather lose a client by telling the truth than win one by misleading them.",
    conhecer: "Meet Lin",
    whatsapp: "Message Lin",
    fantasma: "LIN ZERI",
    fotoAlt:
      "Lin Zeri, founder of Etuos, smiling with his arms crossed at a packed event",
  },
  paisesGrid: {
    eyebrow: "Where we work",
    titulo: "Where is your business based?",
    descricao:
      "Etuos works with businesses in the United States and in Brazil, each with its own strategy and in the language your customers speak.",
    verComoAtuamos: "See how we work",
    brasil: {
      nome: "Brazil",
      descricao:
        "Businesses and professionals across Brazil who want more customers coming from Google and Instagram.",
    },
    eua: {
      nome: "United States",
      descricao:
        "Businesses anywhere in the US, including Brazilian-owned businesses that serve both their community and the American customer.",
    },
  },
  cidadesGrid: {
    eyebrow: "Cities we know",
    titulo: "Where we already know the market",
    descricao:
      "We serve the entire United States, with dedicated pages, campaigns and market knowledge for the cities where we know the neighborhoods, the competition and how people search.",
  },
  ctaFinal: {
    titulo: "Ready to make your phone ring?",
    descricao:
      "Message us on WhatsApp. You get an honest, free diagnosis of your marketing, with no commitment and no runaround.",
    botao: "Get my free diagnosis",
    rodape: "Same-day reply, straight from Lin. No bots, no salespeople.",
    fantasma: "LET'S GO",
  },
  faq: {
    titulo: "Questions we hear all the time",
  },
  home: {
    hero: {
      eyebrow: "Digital marketing agency for business owners",
      titulo: "Digital marketing that makes your",
      destaque: "phone ring",
    },
    faq: [
      {
        pergunta: "How much does it cost to hire Etuos?",
        resposta:
          "It depends on the service, the size of your business and how competitive your city is. We don't sell off-the-shelf packages: the diagnosis is free, and that's where a proposal with a clear scope and price comes from. Ad budget is always separate and goes straight to Google and Meta, in your own account.",
      },
      {
        pergunta: "How soon will I see results?",
        resposta:
          "Paid ads usually bring the first leads within the first week and settle in over 30 to 60 days. SEO shows early movement between 60 and 90 days, with the strong results after month six. A new website is ready in two to four weeks. In the diagnosis we tell you which path makes sense first.",
      },
      {
        pergunta: "Do you serve my city?",
        resposta:
          "We serve the entire United States and all of Brazil, remotely and on your time zone. In the US we have dedicated pages and market knowledge for Miami, Orlando, Fort Lauderdale, Pompano Beach, Boston, Framingham, Newark, Danbury, Atlanta and Houston, but the strategy works in any city.",
      },
      {
        pergunta: "Do I need all three services?",
        resposta:
          "No. Plenty of clients start with one: ads to get customers now, or a website to stop losing the people who research before they buy. The diagnosis tells you where to start. When all three work together, your cost per customer drops, but that's your call, at your pace.",
      },
      {
        pergunta: "How does the free diagnosis work?",
        resposta:
          "You message us on WhatsApp and tell us in a few lines how the business is doing. Lin reviews your website, your Google Business Profile and your competitors, then replies with an honest read: what's holding you back, what to fix first and whether it makes sense for us to work together. No cost, no commitment, no bots.",
      },
    ],
  },
  eua: {
    metaTitulo: "Digital marketing agency for businesses in the US",
    metaDescricao:
      "Digital marketing agency for businesses in the United States. Google Ads, Meta Ads, local SEO and websites that bring in real customers. Free diagnosis.",
    hero: {
      eyebrow: "Agency for businesses in the US",
      titulo: "Digital marketing for businesses that want to",
      destaque: "win in the US",
    },
    faq: [
      {
        pergunta: "Do you actually understand the US market?",
        resposta:
          "Yes. We build campaigns for the way Americans search and buy: Google Ads for people looking for a service right now, Meta Ads for the ones who don't know you yet, and a Google Business Profile that shows up on Maps. English copy is written in English, never run through a translator. If your business also serves a second-language audience, that gets its own campaign with its own message.",
      },
      {
        pergunta: "Is Etuos based in the United States?",
        resposta:
          "Etuos is a remote agency. The founder lives in Brazil and works US hours, in constant contact with the American market and the cities where our clients operate. With no office to pay for, your budget goes into what brings in customers. You reach Lin directly on WhatsApp, in English, on your time zone.",
      },
      {
        pergunta: "Do I need ads in Spanish too?",
        resposta:
          "Only if a meaningful share of your customers search in Spanish. If they do, we run a separate Spanish campaign with its own copy and landing page, written in Spanish, not translated. If your customers search in English, the full budget goes there. The diagnosis answers this for your case.",
      },
      {
        pergunta: "How do I pay for the ads?",
        resposta:
          "Your ad budget goes straight to Google and Meta, in your own account and on your own card. Our management fee is a separate amount, agreed on before we start. The ad account is yours and stays yours if you ever decide to leave.",
      },
    ],
    cta: {
      titulo: "Ready to grow in the US?",
      descricao:
        "Message us on WhatsApp. You get an honest, free diagnosis of your marketing, with no commitment and no runaround.",
      botao: "Get my free diagnosis",
    },
  },
  brasil: {
    metaTitulo: "Digital marketing agency for businesses in Brazil",
    metaDescricao:
      "Digital marketing agency for businesses and professionals in Brazil. Paid ads, SEO and websites that bring in real customers. Free diagnosis on WhatsApp.",
    hero: {
      eyebrow: "Agency for businesses in Brazil",
      titulo: "Digital marketing for businesses that want to",
      destaque: "grow in Brazil",
    },
    faq: [
      {
        pergunta: "Do you serve any city in Brazil?",
        resposta:
          "Yes. The work is remote and the strategy is local: campaigns and SEO target your city, your neighborhood and your audience. We've worked with clinics, independent professionals, retail and franchise networks across several Brazilian states.",
      },
      {
        pergunta: "My business is small. Is advertising worth it?",
        resposta:
          "It is, as long as the aim is narrow: one service, one audience, one clear offer. With a modest budget and the right targeting, a local business usually sees the first leads within the first week. In the diagnosis we run the numbers for your case and tell you whether they add up.",
      },
      {
        pergunta: "I already have someone handling my social media. Do I still need Etuos?",
        resposta:
          "Pretty posts and new customers are two different things. Social media keeps the people who already know you; ads, SEO and a website bring in the people searching right now who've never heard of you. We handle the part that fills your calendar and work alongside whoever creates your content.",
      },
      {
        pergunta: "How do I keep track of what's being done?",
        resposta:
          "Every month you get a simple report, in English or Portuguese, whichever you prefer: what you invested, how many leads came in, what each one cost and what comes next. Between reports, Lin's WhatsApp stays open for any question along the way.",
      },
    ],
    cta: {
      titulo: "Ready to grow in Brazil?",
      descricao:
        "Message us on WhatsApp. You get an honest, free diagnosis of your marketing, with no commitment and no runaround.",
      botao: "Get my free diagnosis",
    },
  },
  servicos: {
    metaTitulo: "Services: paid ads, SEO and website design",
    metaDescricao:
      "Paid ads management, local SEO and website design for businesses in the United States and Brazil. See how Etuos makes your phone ring with new customers.",
    eyebrow: "Services",
    titulo: "Three services, one goal: customers messaging you",
    descricao:
      "Ads bring customers now, SEO brings customers for good, and your website turns both into a conversation. You can start with one. Together, your cost per customer drops.",
  },
  servico: {
    eyebrow: "Service",
    ctaHero: "I want this service",
    mensagem: (nome: string) =>
      `Hi! I came from the Etuos website and I'd like a free diagnosis about ${nome.toLowerCase()}.`,
    doresTitulo: "Does this sound like your week?",
    doresFecho:
      "If even one of those hit home, this service was built for you.",
    entregasEyebrow: "What's included",
    entregasTitulo: "What we deliver",
    comparativo: {
      eyebrow: "Compare",
      titulo: "Do it yourself, a typical agency, or Etuos?",
      colCriterio: "What changes",
      colSozinho: "Doing it yourself",
      colAgencia: "Typical agency",
      colEtuos: "Etuos",
    },
    processoEyebrow: "Process",
    processoTitulo: "How it works in practice",
    faqTitulo: (nome: string) => `Common questions: ${nome.toLowerCase()}`,
    ctaTitulo: "Ready to get started?",
    ctaDescricao:
      "Message us on WhatsApp, tell us about your business, and we'll tell you honestly whether this service is the right move for you right now.",
  },
  cidadesPagina: {
    metaTitulo: "Cities we serve in the United States",
    metaDescricao:
      "Digital marketing for businesses in 10 US cities: Miami, Orlando, Boston, Newark and more. Find your city and see how we can help.",
    eyebrow: "Cities we serve",
    titulo: "The 10 cities where Etuos already works",
    descricao:
      "Each city has its own page, with the local market, the neighborhoods we cover and the questions business owners actually ask.",
  },
  cidade: {
    metaTitulo: (nome: string, uf: string) =>
      `Digital marketing agency in ${nome}, ${uf}`,
    metaDescricao: (nome: string, estado: string) =>
      `Digital marketing for businesses in ${nome}, ${estado}: Google Ads, local SEO and websites that bring in more customers. Free diagnosis on WhatsApp.`,
    // The city name is highlighted right after this text.
    h1Antes: "Digital marketing agency for businesses in",
    ctaHero: (nome: string) => `Get customers in ${nome}`,
    mensagem: (nome: string) =>
      `Hi! I have a business in the ${nome} area and I'd like a free diagnosis to bring in more customers.`,
    mercadoTitulo: (nome: string) => `What the ${nome} market actually looks like`,
    nichosTitulo: "Strong industries in the area",
    comoAjudamosTitulo: (nome: string) => `How we help businesses in ${nome}`,
    saibaMais: "Learn more",
    comoBuscamTitulo: (nome: string) =>
      `How your customers search in ${nome}`,
    atendemosTitulo: (nome: string) => `We serve ${nome} and the surrounding area`,
    atendemosDescricao: (nome: string) =>
      `We work with businesses across the ${nome} area, including:`,
    faqTitulo: (nome: string) => `Questions from business owners in ${nome}`,
    ctaTitulo: (nome: string) => `Ready to grow in ${nome}?`,
    ctaDescricao:
      "Message us on WhatsApp and get a free diagnosis of your marketing in your area, with no commitment.",
  },
  blog: {
    metaTitulo: "Blog: digital marketing for business owners",
    metaDescricao:
      "Practical articles on digital marketing, paid ads, local SEO and sales for business owners in the United States and Brazil, written from real campaigns.",
    eyebrow: "Blog",
    titulo: "Practical content to bring in more customers",
    descricao:
      "What we learn running campaigns, SEO and websites every day, written so you can apply it to your own business.",
    por: "by",
    ler: "Read article",
  },
  contato: {
    metaTitulo: "Contact: free diagnosis on WhatsApp",
    metaDescricao:
      "Message Etuos on WhatsApp and get a free diagnosis of your marketing. Same-day reply, straight from the founder, with no bots and no commitment.",
    eyebrow: "Contact",
    titulo: "Talk directly to the person who'll handle your marketing",
    descricao:
      "The fastest way is WhatsApp. Tell us in a few lines how your business is doing and get a free diagnosis, with no commitment.",
    passos: [
      "You message us on WhatsApp and tell us how the business is doing today",
      "Lin reviews your website, your Google Business Profile and your competitors",
      "You get an honest read on what to fix first",
    ],
  },
  formulario: {
    semEndpointTexto:
      "Message us on WhatsApp, tell us in two lines how your business is doing, and your action plan is ready within 48 hours.",
    semEndpointRodape:
      "Same-day reply, straight from Lin. No bots and no long forms.",
    feito: "Done",
    recebemosTitulo: "We got your request",
    recebemosTexto:
      "Your action plan will be ready within 48 hours and will arrive on the WhatsApp number you gave us. Want to get the conversation going sooner? Message us now.",
    falarAgora: "Message us on WhatsApp now",
    nome: "Your name",
    whatsapp: "WhatsApp number with area code",
    whatsappDica: "US or international numbers are fine",
    site: "Your website address",
    siteDica: "If you don't have a website yet, type: none",
    ondeFica: "Where the business is located",
    paisBrasil: "Brazil",
    paisEua: "United States",
    cidade: "City",
    enviando: "Sending...",
    erroAntes: "We couldn't send it right now. Try again or",
    erroLink: "message us on WhatsApp",
    erroDepois: " and we'll sort it out there.",
    privacidadeAntes:
      "Your details are used only to build your plan and get in touch with you. No spam. Details in our",
    privacidadeLink: "privacy policy",
    privacidadeDepois: ".",
  },
  campanha: {
    comoFunciona: "How it works",
    quemMonta: "Who builds your plan",
    prazer: "Nice to meet you, I'm Lin",
    fotoLinAlt:
      "Lin Zeri, founder of Etuos, smiling with his arms crossed at an event",
    prefereConversar: "Would you rather just talk it through? The door's open.",
    falarWhatsApp: "Message us on WhatsApp",
  },
  naoEncontrada: {
    titulo: "Page not found",
    texto: "This page doesn't exist, or it moved.",
    voltar: "Go to the home page",
  },
  metadata: {
    tituloPadrao: "Etuos | Digital marketing agency in the US and Brazil",
    template: "%s | Etuos",
  },
  og: {
    titulo: "Digital marketing that makes your phone ring",
    subtitulo: "Paid ads, local SEO and website design",
    alt: "Etuos: digital marketing for businesses in the United States and Brazil. Paid ads, local SEO and website design.",
  },
  schema: {
    contatoTipo: "customer service",
    eua: "United States",
    brasil: "Brazil",
    cargoLin: "Founder and digital marketing strategist",
    audiencia:
      "Business owners and professionals in the United States and Brazil",
    trilhaHome: "Home",
    trilhaEua: "United States",
    trilhaServicos: "Services",
    trilhaBlog: "Blog",
    trilhaSobre: "About",
  },
} satisfies Dicionario;
