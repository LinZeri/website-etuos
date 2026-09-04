import Link from "next/link";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import { caminho } from "@/i18n/rotas";

export function PaisesGrid({ idioma }: { idioma: Idioma }) {
  const t = dicionario(idioma).paisesGrid;
  const paises = [
    { tipo: "brasil" as const, ...t.brasil },
    { tipo: "eua" as const, ...t.eua },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        {t.eyebrow}
      </p>
      <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">{t.titulo}</h2>
      <p className="mt-4 max-w-xl text-muted">{t.descricao}</p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {paises.map((pais, indice) => (
          <Link
            key={pais.tipo}
            href={caminho(idioma, { tipo: pais.tipo })}
            className={`group revelar rounded-xl border border-border p-8 transition hover:border-foreground hover:bg-foreground ${indice > 0 ? "revelar-2" : ""}`}
          >
            <span className="font-display block text-3xl uppercase leading-tight transition group-hover:text-white">
              {pais.nome}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted transition group-hover:text-white/70">
              {pais.descricao}
            </p>
            <span className="mt-6 inline-block text-sm font-semibold transition group-hover:translate-x-1 group-hover:text-accent">
              {t.verComoAtuamos} →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
