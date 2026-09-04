import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";

export function ComoFunciona({ idioma }: { idioma: Idioma }) {
  const t = dicionario(idioma).comoFunciona;

  return (
    <section className="grid-dark grao relative overflow-clip bg-foreground text-white">
      <span aria-hidden className="fantasma text-white/[0.06]">
        {t.fantasma}
      </span>
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {t.eyebrow}
        </p>
        <h2 className="mt-3 max-w-2xl text-4xl md:text-6xl">{t.titulo}</h2>

        <ol className="mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
          {t.passos.map((passo, indice) => (
            <li
              key={passo.titulo}
              className={`revelar border-t-2 border-accent pt-5 ${
                indice > 0 ? `revelar-${Math.min(indice, 3)}` : ""
              }`}
            >
              <span className="font-display texto-contorno text-6xl text-accent md:text-7xl">
                {indice + 1}
              </span>
              <h3 className="mt-3 text-xl">{passo.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {passo.descricao}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
