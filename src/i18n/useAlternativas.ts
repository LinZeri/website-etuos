"use client";

import { usePathname } from "next/navigation";
import { useMemo, useSyncExternalStore } from "react";
import {
  COOKIE_IDIOMA,
  HREFLANG,
  IDIOMAS,
  ehIdioma,
  type Idioma,
} from "./idiomas";
import { caminho, resolverCaminho } from "./rotas";

// Descobre a URL da página atual em cada idioma, no cliente, para o seletor
// de idioma e o banner. Primeiro resolve pela tabela de rotas (funciona no
// servidor, sem hidratação divergente); depois refina com os <link hreflang>
// que a própria página emitiu, o que cobre posts do blog com slug traduzido.

function resolverPeloCaminho(pathname: string): Record<Idioma, string> {
  const segmentos = pathname.split("/").filter(Boolean);
  const [primeiro, ...resto] = segmentos;
  const atual = primeiro && ehIdioma(primeiro) ? primeiro : undefined;
  const pagina = atual ? resolverCaminho(atual, resto) : undefined;

  return Object.fromEntries(
    IDIOMAS.map((idioma) => {
      if (!pagina) return [idioma, caminho(idioma, { tipo: "home" })];
      // Post: sem saber se a tradução existe, o destino seguro é o índice do
      // blog daquele idioma. Os <link hreflang> corrigem quando existe.
      if (pagina.tipo === "post" && idioma !== atual) {
        return [idioma, caminho(idioma, { tipo: "blog" })];
      }
      return [idioma, caminho(idioma, pagina)];
    }),
  ) as Record<Idioma, string>;
}

// Snapshot dos <link hreflang> do <head>, serializado para ser um valor
// primitivo estável (exigência do useSyncExternalStore).
function lerHreflangDoDocumento(): string {
  const pares: [Idioma, string][] = [];
  document
    .querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]')
    .forEach((link) => {
      const codigo = link.getAttribute("hreflang");
      const idioma = IDIOMAS.find((candidato) => HREFLANG[candidato] === codigo);
      if (!idioma) return;
      try {
        pares.push([idioma, new URL(link.href).pathname]);
      } catch {
        // href inválido: ignora e mantém a resolução pela tabela.
      }
    });
  return JSON.stringify(pares);
}

const semAssinatura = () => () => {};

export function useAlternativas(): Record<Idioma, string> {
  const pathname = usePathname();
  const hreflang = useSyncExternalStore(
    semAssinatura,
    lerHreflangDoDocumento,
    () => "",
  );

  return useMemo(() => {
    const base = resolverPeloCaminho(pathname);
    if (hreflang) {
      for (const [idioma, rota] of JSON.parse(hreflang) as [Idioma, string][]) {
        base[idioma] = rota;
      }
    }
    return base;
  }, [pathname, hreflang]);
}

export function gravarCookieIdioma(idioma: Idioma) {
  const seguro = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_IDIOMA}=${idioma}; max-age=31536000; path=/; SameSite=Lax${seguro}`;
}

export function lerCookieIdioma(): string | undefined {
  const par = document.cookie
    .split(";")
    .map((item) => item.trim())
    .find((item) => item.startsWith(`${COOKIE_IDIOMA}=`));
  return par?.slice(COOKIE_IDIOMA.length + 1);
}
