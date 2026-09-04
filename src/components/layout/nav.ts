import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import { caminho } from "@/i18n/rotas";

export function linksNavegacao(idioma: Idioma) {
  const t = dicionario(idioma).nav;
  return [
    { href: caminho(idioma, { tipo: "home" }), label: t.home },
    { href: caminho(idioma, { tipo: "brasil" }), label: t.brasil },
    { href: caminho(idioma, { tipo: "eua" }), label: t.eua },
    { href: caminho(idioma, { tipo: "sobre" }), label: t.sobre },
    { href: caminho(idioma, { tipo: "servicos" }), label: t.servicos },
    { href: caminho(idioma, { tipo: "blog" }), label: t.blog },
    { href: caminho(idioma, { tipo: "contato" }), label: t.contato },
  ];
}

export type LinkNavegacao = ReturnType<typeof linksNavegacao>[number];
