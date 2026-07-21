import Link from "next/link";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { cidades } from "@/data/cidades";
import { servicos } from "@/data/servicos";

// Home focada em conversão. Estrutura placeholder: design real na próxima fase.
export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="py-20 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold md:text-5xl">
          Marketing digital para brasileiros que empreendem nos Estados Unidos
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg opacity-80">
          A Etuos ajuda o seu negócio a atrair clientes todos os dias com
          tráfego pago, SEO e sites feitos para converter.
        </p>
        <div className="mt-8">
          <WhatsAppButton texto="Quero atrair mais clientes" />
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-bold">Como podemos ajudar</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {servicos.map((servico) => (
            <Link
              key={servico.slug}
              href={`/servicos/${servico.slug}`}
              className="rounded-xl border border-border p-6 transition hover:border-foreground/40"
            >
              <h3 className="text-lg font-semibold">{servico.nome}</h3>
              <p className="mt-2 text-sm opacity-80">{servico.descricaoCurta}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-bold">Atendemos brasileiros em todos os EUA</h2>
        <p className="mt-2 opacity-80">
          Conhecemos as cidades onde a comunidade brasileira é mais forte.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {cidades.map((cidade) => (
            <Link
              key={cidade.slug}
              href={`/cidades/${cidade.slug}`}
              className="rounded-full border border-border px-4 py-2 text-sm transition hover:border-foreground/40"
            >
              {cidade.nome}, {cidade.estadoSigla}
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold">Pronto para crescer nos EUA?</h2>
        <p className="mx-auto mt-2 max-w-xl opacity-80">
          Fale com a gente no WhatsApp e receba um diagnóstico do seu marketing
          sem compromisso.
        </p>
        <div className="mt-6">
          <WhatsAppButton />
        </div>
      </section>
    </div>
  );
}
