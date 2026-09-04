import { getServicos } from "@/data/servicos";
import type { Idioma } from "@/i18n/idiomas";

// Letreiro com os nomes dos serviços em contorno. Decorativo (aria-hidden):
// os mesmos nomes já estão linkados em ServicosLista.
export function TickerServicos({ idioma }: { idioma: Idioma }) {
  const nomes = getServicos(idioma).map((servico) => servico.nome);

  return (
    <div aria-hidden className="overflow-clip border-y border-border py-5">
      <div className="marquee-track marquee-lento">
        {[0, 1].map((copia) => (
          <div key={copia} className="flex shrink-0 items-center">
            {nomes.map((nome) => (
              <span
                key={`${copia}-${nome}`}
                className="flex items-center gap-8 pr-8 font-display text-5xl uppercase leading-none text-foreground/20 texto-contorno md:text-7xl"
              >
                {nome}
                <span className="text-accent [-webkit-text-fill-color:var(--color-accent)]">
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
