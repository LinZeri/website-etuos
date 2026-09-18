import type { Idioma } from "@/i18n/idiomas";

export const site = {
  nome: "Etuos",
  dominio: "https://etuos.com",
  descricao: {
    pt: "Agência de marketing digital para negócios no Brasil e brasileiros nos Estados Unidos: tráfego pago, SEO local e sites que fazem o WhatsApp tocar.",
    en: "Digital marketing agency for businesses in the United States and Brazil. Paid ads, local SEO and websites that turn searches into customers.",
    es: "Agencia de marketing digital para negocios en Estados Unidos y Brasil. Anuncios pagados, SEO local y sitios web que convierten búsquedas en clientes.",
  } satisfies Record<Idioma, string>,
  whatsapp: {
    // Número por idioma. Hoje os três apontam para o +55 16 99125-2073; quando
    // o número americano existir, basta trocar en e es aqui.
    numero: {
      pt: "5516991252073",
      en: "5516991252073",
      es: "5516991252073",
    } satisfies Record<Idioma, string>,
    mensagemPadrao: {
      pt: "Olá! Vim pelo site da Etuos e quero um diagnóstico gratuito para atrair mais clientes.",
      en: "Hi! I came from the Etuos website and I'd like a free diagnosis to get more customers.",
      es: "¡Hola! Llegué por el sitio de Etuos y quiero un diagnóstico gratuito para atraer más clientes.",
    } satisfies Record<Idioma, string>,
  },
} as const;

// Número legível para exibir na página: +55 16 99125-2073 ou +1 (305) 555-0100.
export function numeroWhatsAppFormatado(idioma: Idioma): string {
  const n = site.whatsapp.numero[idioma];
  if (n.startsWith("55")) {
    return `+55 ${n.slice(2, 4)} ${n.slice(4, -4)}-${n.slice(-4)}`;
  }
  if (n.startsWith("1") && n.length === 11) {
    return `+1 (${n.slice(1, 4)}) ${n.slice(4, 7)}-${n.slice(7)}`;
  }
  return `+${n}`;
}

export function linkWhatsApp(idioma: Idioma, mensagem?: string): string {
  const texto = encodeURIComponent(
    mensagem ?? site.whatsapp.mensagemPadrao[idioma],
  );
  return `https://wa.me/${site.whatsapp.numero[idioma]}?text=${texto}`;
}
