// Disparo de conversões do Google Ads no cliente.
//
// Os identificadores vêm de variáveis NEXT_PUBLIC_, que o Next embute no bundle
// durante o build. Se elas não estiverem definidas, tudo aqui vira no-op e o
// site continua funcionando normalmente (útil em desenvolvimento).

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "";

const rotulos = {
  formulario: process.env.NEXT_PUBLIC_GOOGLE_ADS_LABEL_FORM ?? "",
  whatsapp: process.env.NEXT_PUBLIC_GOOGLE_ADS_LABEL_WHATSAPP ?? "",
} as const;

export type TipoConversao = keyof typeof rotulos;

export function registrarConversao(tipo: TipoConversao): void {
  const rotulo = rotulos[tipo];

  if (!googleAdsId || !rotulo) return;
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "conversion", {
    send_to: `${googleAdsId}/${rotulo}`,
  });
}
