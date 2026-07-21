import Link from "next/link";
import { servicos } from "@/data/servicos";

export function ServicosLista() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Serviços
      </p>
      <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">
        Como a gente faz você <span className="bg-accent px-2">crescer</span>
      </h2>

      <div className="mt-12 border-t border-border">
        {servicos.map((servico, indice) => (
          <Link
            key={servico.slug}
            href={`/servicos/${servico.slug}`}
            className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-border py-8 transition hover:bg-surface md:gap-10 md:py-10"
          >
            <span className="font-display text-4xl text-foreground/10 transition group-hover:text-accent md:text-6xl">
              0{indice + 1}
            </span>
            <span>
              <span className="font-display block text-2xl uppercase md:text-4xl">
                {servico.nome}
              </span>
              <span className="mt-2 block max-w-xl text-sm text-muted md:text-base">
                {servico.descricaoCurta}
              </span>
            </span>
            <span
              aria-hidden
              className="text-2xl text-foreground/20 transition group-hover:translate-x-2 group-hover:text-foreground md:text-4xl"
            >
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
