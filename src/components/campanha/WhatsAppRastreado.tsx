"use client";

import { linkWhatsApp } from "@/data/site";
import { registrarConversao } from "@/lib/conversoes";

type Props = {
  texto: string;
  mensagem: string;
  className?: string;
};

// Versão do botão de WhatsApp para as landings de campanha: igual à do site,
// mas registrando a conversão no Google Ads antes de sair da página.
export function WhatsAppRastreado({ texto, mensagem, className }: Props) {
  return (
    <a
      href={linkWhatsApp(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => registrarConversao("whatsapp")}
      className={
        className ??
        "inline-block rounded-lg border-2 border-white/25 px-7 py-4 font-semibold text-white transition hover:border-white/60"
      }
    >
      {texto}
    </a>
  );
}
