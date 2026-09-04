import Link from "next/link";
import { getCidades } from "@/data/cidades";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import { caminho } from "@/i18n/rotas";

export function CidadesGrid({ idioma }: { idioma: Idioma }) {
  const t = dicionario(idioma).cidadesGrid;

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        {t.eyebrow}
      </p>
      <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">{t.titulo}</h2>
      <p className="mt-4 max-w-xl text-muted">{t.descricao}</p>

      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">
        {getCidades(idioma).map((cidade, indice) => (
          <Link
            key={cidade.id}
            href={caminho(idioma, { tipo: "cidade", id: cidade.id })}
            className={`group revelar rounded-xl border border-border p-5 transition hover:border-foreground hover:bg-foreground ${indice % 5 > 0 ? `revelar-${Math.min(indice % 5, 3)}` : ""}`}
          >
            <span className="font-display block text-lg uppercase leading-tight transition group-hover:text-white">
              {cidade.nome}
            </span>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-muted transition group-hover:text-accent">
              {cidade.estado}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
