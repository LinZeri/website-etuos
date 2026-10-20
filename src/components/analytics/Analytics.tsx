"use client";

import Script from "next/script";
import { useEffect } from "react";
import { ga4Id, googleAdsId } from "@/lib/conversoes";

// Tag global do Google (gtag.js): GA4 e Google Ads compartilham o mesmo script.
// Sem nenhum ID definido, nada é carregado.
const idPrincipal = ga4Id || googleAdsId;

function localDoClique(link: HTMLAnchorElement): string {
  if (link.closest("header")) return "header";
  if (link.closest("footer")) return "footer";
  if (link.closest("main")) return "conteudo";
  return "flutuante";
}

export function Analytics() {
  useEffect(() => {
    if (!ga4Id) return;

    // Um único listener cobre todo link do WhatsApp do site, sem editar cada botão.
    function aoClicar(evento: MouseEvent) {
      const alvo = evento.target;
      if (!(alvo instanceof Element)) return;
      const link = alvo.closest<HTMLAnchorElement>('a[href*="wa.me"], a[href*="api.whatsapp.com"]');
      if (!link || typeof window.gtag !== "function") return;

      window.gtag("event", "whatsapp_click", {
        pagina: window.location.pathname,
        idioma: document.documentElement.lang,
        local: localDoClique(link),
      });
    }

    document.addEventListener("click", aoClicar);
    return () => document.removeEventListener("click", aoClicar);
  }, []);

  if (!idPrincipal) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${idPrincipal}`}
        strategy="afterInteractive"
      />
      <Script id="google-gtag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${ga4Id ? `gtag('config', '${ga4Id}');` : ""}
${googleAdsId ? `gtag('config', '${googleAdsId}');` : ""}`}
      </Script>
    </>
  );
}
