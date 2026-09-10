import Link from "next/link";
import { getCidades } from "@/data/cidades";
import { getServicos } from "@/data/servicos";
import { site } from "@/data/site";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import { caminho } from "@/i18n/rotas";

export function Footer({ idioma }: { idioma: Idioma }) {
  const t = dicionario(idioma).footer;
  const ano = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border text-sm">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold">{site.nome}</p>
          <p className="mt-2 max-w-xs opacity-80">{site.descricao[idioma]}</p>
        </div>
        <div>
          <p className="font-semibold">{t.servicos}</p>
          <ul className="mt-2 space-y-1">
            {getServicos(idioma).map((servico) => (
              <li key={servico.id}>
                <Link
                  href={caminho(idioma, { tipo: "servico", id: servico.id })}
                  className="hover:underline"
                >
                  {servico.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link
            href={caminho(idioma, { tipo: "cidades" })}
            className="font-semibold hover:underline"
          >
            {t.ondeAtendemos}
          </Link>
          <ul className="mt-2 space-y-1">
            <li>
              <Link
                href={caminho(idioma, { tipo: "brasil" })}
                className="hover:underline"
              >
                {t.brasil}
              </Link>
            </li>
            <li>
              <Link
                href={caminho(idioma, { tipo: "eua" })}
                className="hover:underline"
              >
                {t.eua}
              </Link>
            </li>
          </ul>
          <ul className="mt-3 grid grid-cols-2 gap-1">
            {getCidades(idioma).map((cidade) => (
              <li key={cidade.id}>
                <Link
                  href={caminho(idioma, { tipo: "cidade", id: cidade.id })}
                  className="hover:underline"
                >
                  {cidade.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-4 opacity-70">
          <p>
            © {ano} {site.nome}. {t.direitos}
          </p>
          <Link
            href={caminho(idioma, { tipo: "privacidade" })}
            className="hover:underline"
          >
            {t.privacidade}
          </Link>
        </div>
      </div>
    </footer>
  );
}
