import { depoimentos } from "@/data/depoimentos";
import { dicionario } from "@/i18n/dicionario";
import { HTML_LANG, type Idioma } from "@/i18n/idiomas";

type Props = {
  idioma: Idioma;
  // "destaque" põe o primeiro depoimento em citação grande, com o número que
  // ele cita em Anton, e os demais viram uma coluna compacta. "compacta" usa
  // só o cartão de destaque, sem grade: para páginas de serviço e cidade, que
  // já têm outras seções longas.
  variante?: "grade" | "destaque" | "compacta";
};

export function Depoimentos({ idioma, variante = "grade" }: Props) {
  const t = dicionario(idioma).depoimentos;
  const [primeiro, ...outros] = depoimentos;
  const lista = variante === "destaque" ? outros : depoimentos;
  const mostrarDestaque = variante === "destaque" || variante === "compacta";

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          {t.eyebrow}
        </p>
        <h2 className="mt-3 text-4xl md:text-5xl">{t.titulo}</h2>

        <div
          className={`mt-12 grid gap-6 ${
            variante === "destaque"
              ? "lg:grid-cols-[1.4fr_1fr]"
              : variante === "compacta"
                ? ""
                : "md:grid-cols-2"
          }`}
        >
          {mostrarDestaque && primeiro && (
            <figure className="revelar flex flex-col justify-between rounded-xl border border-border bg-background p-8 md:p-10">
              <div>
                {primeiro.destaque && (
                  <p className="font-display text-6xl leading-none text-foreground md:text-8xl">
                    {primeiro.destaque.figura}
                    <span className="ml-3 align-middle font-sans text-base font-semibold uppercase tracking-[0.18em] text-muted">
                      {primeiro.destaque.legenda[idioma]}
                    </span>
                  </p>
                )}
                <blockquote className="mt-8 text-xl font-medium leading-snug tracking-tight text-foreground/90 md:text-2xl">
                  <span aria-hidden className="font-display text-accent">
                    “
                  </span>
                  {primeiro.texto[idioma]}
                </blockquote>
                {primeiro.idiomaOriginal !== idioma && (
                  <p className="mt-3 text-xs text-muted">{t.traduzido}</p>
                )}
              </div>
              <Autor idioma={idioma} nome={primeiro.nome} negocio={primeiro.negocio[idioma]} />
            </figure>
          )}

          <div
            className={
              variante === "destaque"
                ? "grid gap-4"
                : variante === "compacta"
                  ? "hidden"
                  : "contents"
            }
          >
            {variante !== "compacta" && lista.map((depoimento, indice) => (
              <figure
                key={depoimento.nome}
                className={`revelar flex flex-col justify-between rounded-xl border border-border bg-background p-7 ${
                  indice > 0 ? `revelar-${Math.min(indice, 3)}` : ""
                }`}
              >
                <div>
                  <span
                    aria-hidden
                    className="font-display text-5xl leading-none text-accent"
                  >
                    “
                  </span>
                  <blockquote className="mt-1 text-foreground/90">
                    {depoimento.texto[idioma]}
                  </blockquote>
                  {depoimento.idiomaOriginal !== idioma && (
                    <p className="mt-3 text-xs text-muted">{t.traduzido}</p>
                  )}
                </div>
                <Autor
                  idioma={idioma}
                  nome={depoimento.nome}
                  negocio={depoimento.negocio[idioma]}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Autor({
  idioma,
  nome,
  negocio,
}: {
  idioma: Idioma;
  nome: string;
  negocio: string;
}) {
  return (
    <figcaption className="mt-7 flex items-center gap-3">
      <span
        aria-hidden
        className="font-display flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-lg text-accent"
      >
        {nome.charAt(0)}
      </span>
      <span>
        <span className="block font-semibold">{nome}</span>
        <span className="block text-sm text-muted" lang={HTML_LANG[idioma]}>
          {negocio}
        </span>
      </span>
    </figcaption>
  );
}
