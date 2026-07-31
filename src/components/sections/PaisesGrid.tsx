import Link from "next/link";

const paises = [
  {
    slug: "brasil",
    nome: "Brasil",
    descricao:
      "Negócios e profissionais em todo o Brasil que querem mais clientes vindos do digital.",
  },
  {
    slug: "eua",
    nome: "Estados Unidos",
    descricao:
      "Brasileiros que empreendem nos EUA, com marketing pensado para a sua comunidade e a sua região.",
  },
];

export function PaisesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Onde atuamos
      </p>
      <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">
        Escolha de onde o seu negócio fala
      </h2>
      <p className="mt-4 max-w-xl text-muted">
        A Etuos atende negócios no Brasil e brasileiros que empreendem nos
        Estados Unidos, cada um com uma estratégia própria.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {paises.map((pais) => (
          <Link
            key={pais.slug}
            href={`/${pais.slug}`}
            className="group rounded-xl border border-border p-8 transition hover:border-foreground hover:bg-foreground"
          >
            <span className="font-display block text-3xl uppercase leading-tight transition group-hover:text-white">
              {pais.nome}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted transition group-hover:text-white/70">
              {pais.descricao}
            </p>
            <span className="mt-6 inline-block text-sm font-semibold transition group-hover:translate-x-1 group-hover:text-accent">
              Ver como atuamos →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
