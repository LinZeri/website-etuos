export type Depoimento = {
  texto: string;
  nome: string;
  negocio: string;
};

export const depoimentos: Depoimento[] = [
  {
    texto:
      "Ajudou a alavancar meu consultório como nunca tinha ocorrido. Obtive com seus serviços, tanto de criação de sites como gerenciamento do Google Ads, um aumento de mais de 300% no número de pacientes. Responsabilidade e competência! Recomendo a todos os que queiram dar uma virada em seus negócios.",
    nome: "Rodrigo Souza",
    negocio: "Clínica de Psicologia",
  },
  {
    texto: "O trabalho é muito profissional, feito com bastante esforço.",
    nome: "Eduardo Donadi",
    negocio: "Instalação de Baterias Residenciais",
  },
  {
    texto: "Só tenho a agradecer por este tempo que trabalhamos juntos.",
    nome: "Letícia",
    negocio: "Loja de Roupas",
  },
];
