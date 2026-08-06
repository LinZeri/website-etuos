export type Pergunta = {
  pergunta: string;
  resposta: string;
};

type Props = {
  titulo?: string;
  perguntas: Pergunta[];
};

// Accordion nativo com details/summary: sem JavaScript, sem client component
// e acessível por padrão. Mantém a landing leve, o que conta para o Índice de
// Qualidade do Google Ads.
export function Faq({ titulo = "Perguntas que sempre chegam", perguntas }: Props) {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl">{titulo}</h2>
        <div className="mt-10 grid gap-3">
          {perguntas.map((item) => (
            <details
              key={item.pergunta}
              className="group rounded-xl border border-border bg-background p-5 open:border-accent"
            >
              <summary className="cursor-pointer list-none font-semibold marker:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.pergunta}
                  <span
                    aria-hidden
                    className="font-display text-xl text-accent transition group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-muted">{item.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
