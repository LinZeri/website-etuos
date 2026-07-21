import { depoimentos } from "@/data/depoimentos";

export function Depoimentos() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Prova social
        </p>
        <h2 className="mt-3 text-4xl md:text-5xl">Quem confia na Etuos</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {depoimentos.map((depoimento, indice) => (
            <figure
              key={indice}
              className="flex flex-col justify-between rounded-xl border border-border bg-background p-8"
            >
              <div>
                <span aria-hidden className="font-display text-6xl leading-none text-accent">
                  “
                </span>
                <blockquote className="mt-2 text-foreground/90">
                  {depoimento.texto}
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center gap-3">
                <span
                  aria-hidden
                  className="font-display flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-lg text-accent"
                >
                  {depoimento.nome.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold">{depoimento.nome}</span>
                  <span className="block text-sm text-muted">
                    {depoimento.negocio}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
