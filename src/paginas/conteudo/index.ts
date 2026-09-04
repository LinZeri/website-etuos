import type { Idioma } from "@/i18n/idiomas";
import { lpSeoEn } from "./lp-seo/en";
import { lpSeoEs } from "./lp-seo/es";
import { lpSeoPt, type ConteudoLp } from "./lp-seo/pt";
import { lpTrafegoPagoEn } from "./lp-trafego-pago/en";
import { lpTrafegoPagoEs } from "./lp-trafego-pago/es";
import { lpTrafegoPagoPt } from "./lp-trafego-pago/pt";
import { privacidadeEn } from "./privacidade/en";
import { privacidadeEs } from "./privacidade/es";
import { privacidadePt, type ConteudoPrivacidade } from "./privacidade/pt";
import { sobreEn } from "./sobre/en";
import { sobreEs } from "./sobre/es";
import { sobrePt, type ConteudoSobre } from "./sobre/pt";

// Copy longa de página, por idioma. Os arquivos pt definem a forma; en e es
// satisfazem o mesmo tipo, então uma seção faltando quebra o build.

const SOBRE: Record<Idioma, ConteudoSobre> = {
  pt: sobrePt,
  en: sobreEn,
  es: sobreEs,
};

const PRIVACIDADE: Record<Idioma, ConteudoPrivacidade> = {
  pt: privacidadePt,
  en: privacidadeEn,
  es: privacidadeEs,
};

const LP_SEO: Record<Idioma, ConteudoLp> = {
  pt: lpSeoPt,
  en: lpSeoEn,
  es: lpSeoEs,
};

const LP_TRAFEGO_PAGO: Record<Idioma, ConteudoLp> = {
  pt: lpTrafegoPagoPt,
  en: lpTrafegoPagoEn,
  es: lpTrafegoPagoEs,
};

export const conteudoSobre = (idioma: Idioma) => SOBRE[idioma];
export const conteudoPrivacidade = (idioma: Idioma) => PRIVACIDADE[idioma];
export const conteudoLp = (idioma: Idioma, id: "seo" | "trafego-pago") =>
  id === "seo" ? LP_SEO[idioma] : LP_TRAFEGO_PAGO[idioma];

export type { ConteudoLp, ConteudoPrivacidade, ConteudoSobre };
