export const site = {
  nome: "Etuos",
  dominio: "https://etuos.com",
  descricao:
    "Agência de marketing digital para brasileiros que empreendem nos Estados Unidos. Tráfego pago, SEO e criação de sites que trazem clientes de verdade.",
  whatsapp: {
    // +55 16 99125-2073 no formato internacional do wa.me
    numero: "5516991252073",
    mensagemPadrao:
      "Olá! Vim pelo site da Etuos e quero atrair mais clientes para o meu negócio.",
  },
} as const;

export function linkWhatsApp(mensagem?: string): string {
  const texto = encodeURIComponent(mensagem ?? site.whatsapp.mensagemPadrao);
  return `https://wa.me/${site.whatsapp.numero}?text=${texto}`;
}
