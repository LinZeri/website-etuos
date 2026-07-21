import Link from "next/link";
import { cidades } from "@/data/cidades";

export function CidadesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Onde atendemos
      </p>
      <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">
        Fortes onde a comunidade brasileira é forte
      </h2>
      <p className="mt-4 max-w-xl text-muted">
        Atendemos todo os Estados Unidos e o Brasil, com atenção especial às
        cidades onde os brasileiros mais empreendem.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">
        {cidades.map((cidade) => (
          <Link
            key={cidade.slug}
            href={`/cidades/${cidade.slug}`}
            className="group rounded-xl border border-border p-5 transition hover:border-foreground hover:bg-foreground"
          >
            <span className="font-display block text-lg uppercase leading-tight transition group-hover:text-white">
              {cidade.nome}
            </span>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-muted transition group-hover:text-accent">
              {cidade.estado}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
