import Link from "next/link";
import { getServicos } from "@/data/servicos";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import { caminho } from "@/i18n/rotas";

export function ServicosLista({ idioma }: { idioma: Idioma }) {
  const t = dicionario(idioma).servicosLista;

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        {t.eyebrow}
      </p>
      <h2 className="mt-3 max-w-3xl text-4xl md:text-6xl">
        {t.tituloAntes} <span className="marca">{t.tituloDestaque}</span>
      </h2>

      <div className="mt-12 border-t border-border">
        {getServicos(idioma).map((servico, indice) => (
          <Link
            key={servico.id}
            href={caminho(idioma, { tipo: "servico", id: servico.id })}
            className={`group revelar grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-border px-2 py-8 transition hover:bg-foreground hover:text-white md:gap-10 md:px-4 md:py-10 ${
              indice > 0 ? `revelar-${indice}` : ""
            }`}
          >
            <span className="font-display texto-contorno text-4xl text-foreground/30 transition group-hover:text-accent md:text-7xl">
              0{indice + 1}
            </span>
            <span>
              <span className="font-display block text-2xl uppercase md:text-4xl">
                {servico.nome}
              </span>
              <span className="mt-2 block max-w-xl text-sm text-muted transition group-hover:text-white/70 md:text-base">
                {servico.descricaoCurta}
              </span>
            </span>
            <span
              aria-hidden
              className="text-2xl text-foreground/20 transition group-hover:translate-x-2 group-hover:text-accent md:text-4xl"
            >
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
