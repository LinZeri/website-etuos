import type { Metadata } from "next";
import Link from "next/link";
import { servicos } from "@/data/servicos";

export const metadata: Metadata = {
  title: "Serviços de marketing digital",
  description:
    "Tráfego pago, SEO e criação de sites para brasileiros que empreendem nos Estados Unidos. Veja como a Etuos pode ajudar o seu negócio.",
  alternates: { canonical: "/servicos" },
};

export default function ServicosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold md:text-4xl">Nossos serviços</h1>
      <p className="mt-4 max-w-2xl text-lg opacity-80">
        Tudo o que o seu negócio precisa para atrair clientes nos Estados
        Unidos, em um só lugar.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {servicos.map((servico) => (
          <Link
            key={servico.slug}
            href={`/servicos/${servico.slug}`}
            className="rounded-xl border border-border p-6 transition hover:border-foreground/40"
          >
            <h2 className="text-xl font-semibold">{servico.nome}</h2>
            <p className="mt-2 opacity-80">{servico.descricaoCurta}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
