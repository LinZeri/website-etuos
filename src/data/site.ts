export const site = {
  nome: "Etuos",
  dominio: "https://etuos.com",
  descricao:
    "Agência de marketing digital para brasileiros que empreendem nos Estados Unidos. Tráfego pago, SEO e criação de sites que trazem clientes de verdade.",
  whatsapp: {
    // TODO: definir o numero oficial no formato internacional, ex: 13050000000
    numero: "13050000000",
    mensagemPadrao:
      "Olá! Vim pelo site da Etuos e quero atrair mais clientes para o meu negócio.",
  },
} as const;

export function linkWhatsApp(mensagem?: string): string {
  const texto = encodeURIComponent(mensagem ?? site.whatsapp.mensagemPadrao);
  return `https://wa.me/${site.whatsapp.numero}?text=${texto}`;
}
