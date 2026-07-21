export type Depoimento = {
  texto: string;
  nome: string;
  negocio: string;
};

// TODO: substituir pelos depoimentos reais quando o cliente enviar.
// Manter 3 depoimentos, texto de 2 a 3 frases cada.
export const depoimentos: Depoimento[] = [
  {
    texto:
      "Depoimento do cliente entra aqui. Duas ou três frases contando o resultado que o negócio alcançou com a Etuos.",
    nome: "Nome do cliente",
    negocio: "Segmento do negócio, Cidade",
  },
  {
    texto:
      "Depoimento do cliente entra aqui. Duas ou três frases contando o resultado que o negócio alcançou com a Etuos.",
    nome: "Nome do cliente",
    negocio: "Segmento do negócio, Cidade",
  },
  {
    texto:
      "Depoimento do cliente entra aqui. Duas ou três frases contando o resultado que o negócio alcançou com a Etuos.",
    nome: "Nome do cliente",
    negocio: "Segmento do negócio, Cidade",
  },
];
