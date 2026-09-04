import type { IdCidade } from "@/i18n/mapa-slugs";

// Fatos que não mudam com o idioma. O nome do estado por extenso fica na
// copy de cada idioma (Flórida, Florida, Florida).
export const CIDADES_BASE: Record<
  IdCidade,
  { nome: string; estadoSigla: string }
> = {
  miami: { nome: "Miami", estadoSigla: "FL" },
  orlando: { nome: "Orlando", estadoSigla: "FL" },
  "fort-lauderdale": { nome: "Fort Lauderdale", estadoSigla: "FL" },
  "pompano-beach": { nome: "Pompano Beach", estadoSigla: "FL" },
  boston: { nome: "Boston", estadoSigla: "MA" },
  framingham: { nome: "Framingham", estadoSigla: "MA" },
  newark: { nome: "Newark", estadoSigla: "NJ" },
  danbury: { nome: "Danbury", estadoSigla: "CT" },
  atlanta: { nome: "Atlanta", estadoSigla: "GA" },
  houston: { nome: "Houston", estadoSigla: "TX" },
};
