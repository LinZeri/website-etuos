const passos = [
  {
    titulo: "Diagnóstico no WhatsApp",
    descricao:
      "Você conta como está o negócio hoje. A gente analisa seu mercado, seus concorrentes e onde está o dinheiro deixado na mesa.",
  },
  {
    titulo: "Plano sob medida",
    descricao:
      "Nada de pacote pronto. Montamos a estratégia certa para o seu nicho, a sua cidade e o seu momento.",
  },
  {
    titulo: "Execução completa",
    descricao:
      "Anúncios, SEO, site: a gente coloca tudo em pé e no ar. Você continua cuidando do seu negócio.",
  },
  {
    titulo: "Resultado e escala",
    descricao:
      "Você acompanha tudo em relatórios simples, em português. O que funciona recebe mais investimento.",
  },
];

export function ComoFunciona() {
  return (
    <section className="grid-dark bg-foreground text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Como funciona
        </p>
        <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">
          Do primeiro oi ao WhatsApp tocando
        </h2>

        <ol className="mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
          {passos.map((passo, indice) => (
            <li key={passo.titulo} className="border-t-2 border-accent pt-5">
              <span className="font-display text-5xl text-accent">
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
