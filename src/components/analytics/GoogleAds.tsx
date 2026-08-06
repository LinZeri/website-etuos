import Script from "next/script";
import { googleAdsId } from "@/lib/conversoes";

// Tag global do Google Ads. Sem NEXT_PUBLIC_GOOGLE_ADS_ID definido, nada é
// carregado: o site segue 100% estático e sem requisição de terceiros.
export function GoogleAds() {
  if (!googleAdsId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAdsId}');`}
      </Script>
    </>
  );
}
