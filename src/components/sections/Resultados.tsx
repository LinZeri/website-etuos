import { getServicoPorId } from "@/data/servicos";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";

// Cases com número grande. Os valores vêm do dicionário e foram confirmados
// pelo dono; só segmento, nunca nome de cliente.
export function Resultados({ idioma }: { idioma: Idioma }) {
  const t = dicionario(idioma).resultados;

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
        <p className="mt-4 max-w-xl text-white/65">{t.descricao}</p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {t.itens.map((item, indice) => (
            <article
              key={item.figura}
              className={`revelar flex flex-col justify-between rounded-xl border border-white/10 bg-foreground/60 p-7 backdrop-blur-sm md:p-8 ${
                indice === 0 ? "md:col-span-2" : ""
              } ${indice > 0 ? `revelar-${indice}` : ""}`}
            >
              <div>
                <p
                  className={`font-display leading-none text-accent ${
                    indice === 0 ? "text-6xl md:text-8xl" : "text-5xl md:text-6xl"
                  }`}
                >
                  {item.figura}
                </p>
                <p className="mt-4 max-w-md text-white/80">{item.contexto}</p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-2">
                {item.servicos.map((id) => (
                  <span
                    key={id}
                    className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70"
                  >
                    {getServicoPorId(idioma, id).nome}
                  </span>
                ))}
                <span className="ml-auto text-xs text-white/45">{item.segmento}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
