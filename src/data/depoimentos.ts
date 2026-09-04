import type { Idioma } from "@/i18n/idiomas";

// Depoimentos reais de clientes, dados em português. Em en/es mostramos a
// tradução com a legenda "traduzido do original em português": prova social
// honesta, sem inventar depoimento em outro idioma.
export type Depoimento = {
  nome: string;
  negocio: Record<Idioma, string>;
  texto: Record<Idioma, string>;
  idiomaOriginal: Idioma;
  // Número que o próprio depoimento cita. Vira o destaque grande da seção.
  destaque?: { figura: string; legenda: Record<Idioma, string> };
};

export const depoimentos: Depoimento[] = [
  {
    nome: "Rodrigo Souza",
    idiomaOriginal: "pt",
    negocio: {
      pt: "Clínica de Psicologia",
      en: "Psychology clinic",
      es: "Clínica de psicología",
    },
    destaque: {
      figura: "+300%",
      legenda: {
        pt: "de pacientes",
        en: "more patients",
        es: "más pacientes",
      },
    },
    texto: {
      pt: "Ajudou a alavancar meu consultório como nunca tinha ocorrido. Obtive com seus serviços, tanto de criação de sites como gerenciamento do Google Ads, um aumento de mais de 300% no número de pacientes. Responsabilidade e competência! Recomendo a todos os que queiram dar uma virada em seus negócios.",
      en: "Working with Lin boosted my practice like never before. With his website design and Google Ads management, I saw an increase of over 300% in the number of patients. Responsible and competent! I recommend him to anyone who wants to turn their business around.",
      es: "Trabajar con Lin impulsó mi consultorio como nunca antes. Con sus servicios de creación de sitio web y gestión de Google Ads, logré un aumento de más del 300% en el número de pacientes. ¡Responsabilidad y competencia! Lo recomiendo a todos los que quieran darle un giro a su negocio.",
    },
  },
  {
    nome: "Pedro Henrique Geraldini",
    idiomaOriginal: "pt",
    negocio: {
      pt: "Clínica",
      en: "Clinic",
      es: "Clínica",
    },
    texto: {
      pt: "Recomendo bastante, pois tenho obtido ótimos resultados. Sou recém formado e, devido ao trabalho do Lin, minha agenda está sempre cheia.",
      en: "I highly recommend him. I've been getting great results: I recently graduated and, thanks to Lin's work, my schedule is always full.",
      es: "Lo recomiendo mucho, porque he tenido excelentes resultados. Soy recién graduado y, gracias al trabajo de Lin, mi agenda siempre está llena.",
    },
  },
  {
    nome: "Eduardo Donadi",
    idiomaOriginal: "pt",
    negocio: {
      pt: "Instalação de Baterias Residenciais",
      en: "Home battery installation",
      es: "Instalación de baterías residenciales",
    },
    texto: {
      pt: "O trabalho é muito profissional, feito com bastante esforço.",
      en: "The work is very professional and done with real dedication.",
      es: "El trabajo es muy profesional, hecho con mucha dedicación.",
    },
  },
  {
    nome: "Letícia",
    idiomaOriginal: "pt",
    negocio: {
      pt: "Loja de Roupas",
      en: "Clothing store",
      es: "Tienda de ropa",
    },
    texto: {
      pt: "Só tenho a agradecer por este tempo que trabalhamos juntos.",
      en: "I'm just grateful for the time we worked together.",
      es: "Solo puedo agradecer por el tiempo que trabajamos juntos.",
    },
  },
];
