"use client";

import { HREFLANG, IDIOMAS, NOME_IDIOMA, type Idioma } from "@/i18n/idiomas";
import { gravarCookieIdioma, useAlternativas } from "@/i18n/useAlternativas";

type Props = {
  idiomaAtual: Idioma;
  rotulo: string;
  variante: "header" | "menu";
};

// Links simples (<a>, não <Link>): trocar de idioma é uma navegação completa
// para outra árvore de layout, e o cookie gravado no clique faz a raiz do
// site lembrar a escolha nas próximas visitas.
export function SeletorIdioma({ idiomaAtual, rotulo, variante }: Props) {
  const alternativas = useAlternativas();
  const escuro = variante === "menu";

  return (
    <nav
      aria-label={rotulo}
      className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-wider ${
        escuro ? "text-white/60" : "text-muted"
      }`}
    >
      {IDIOMAS.map((idioma, indice) => {
        const ativo = idioma === idiomaAtual;
        return (
          <span key={idioma} className="flex items-center gap-1">
            {indice > 0 && <span aria-hidden>/</span>}
            <a
              href={alternativas[idioma]}
              hrefLang={HREFLANG[idioma]}
              lang={HREFLANG[idioma]}
              aria-current={ativo ? "page" : undefined}
              aria-label={NOME_IDIOMA[idioma].longo}
              onClick={() => gravarCookieIdioma(idioma)}
              className={`rounded px-1.5 py-1 transition ${
                ativo
                  ? escuro
                    ? "text-accent"
                    : "text-foreground"
                  : escuro
                    ? "hover:text-white"
                    : "hover:text-foreground"
              }`}
            >
              {NOME_IDIOMA[idioma].curto}
            </a>
          </span>
        );
      })}
    </nav>
  );
}
