"use client";

import { useState, useSyncExternalStore } from "react";
import { HREFLANG, ehIdioma, type Idioma } from "@/i18n/idiomas";
import {
  gravarCookieIdioma,
  lerCookieIdioma,
  useAlternativas,
} from "@/i18n/useAlternativas";

type Textos = { texto: string; trocar: string; fechar: string };

type Props = {
  idiomaAtual: Idioma;
  // Textos do banner em cada idioma. O banner é exibido no idioma de destino,
  // que é o que a pessoa entende.
  textos: Record<Idioma, Textos>;
};

// Idioma sugerido pelo navegador, ou "" quando não há o que sugerir: já existe
// cookie (a pessoa escolheu ou dispensou), ou o navegador está no idioma da
// página. Lido como snapshot externo para não renderizar nada no servidor.
function sugestaoDoNavegador(idiomaAtual: Idioma): Idioma | "" {
  if (lerCookieIdioma()) return "";
  const navegador = navigator.language?.slice(0, 2).toLowerCase();
  if (!navegador || !ehIdioma(navegador) || navegador === idiomaAtual) return "";
  return navegador;
}

const semAssinatura = () => () => {};

// Sugestão de idioma, sem redirecionar: só aparece quando o navegador está em
// outro idioma suportado e a pessoa ainda não escolheu nada (sem cookie).
// Nada é renderizado no servidor, então não afeta SEO nem causa CLS.
export function BannerIdioma({ idiomaAtual, textos }: Props) {
  const [fechado, setFechado] = useState(false);
  const alternativas = useAlternativas();
  const sugestao = useSyncExternalStore<Idioma | "">(
    semAssinatura,
    () => sugestaoDoNavegador(idiomaAtual),
    () => "",
  );

  if (fechado || !sugestao) return null;
  const alvo = sugestao;
  const t = textos[alvo];

  return (
    <div
      role="region"
      aria-label={t.texto}
      lang={HREFLANG[alvo]}
      className="fixed bottom-(--barra-cta) left-0 right-0 z-30 border-t border-border bg-background/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3 text-sm md:pr-24">
        <p className="flex-1">{t.texto}</p>
        <a
          href={alternativas[alvo]}
          hrefLang={HREFLANG[alvo]}
          onClick={() => gravarCookieIdioma(alvo)}
          className="rounded-lg bg-accent px-4 py-2 font-semibold text-foreground transition hover:brightness-95"
        >
          {t.trocar}
        </a>
        <button
          type="button"
          onClick={() => {
            gravarCookieIdioma(idiomaAtual);
            setFechado(true);
          }}
          className="rounded-lg border border-border px-3 py-2 text-muted transition hover:text-foreground"
        >
          {t.fechar}
        </button>
      </div>
    </div>
  );
}
