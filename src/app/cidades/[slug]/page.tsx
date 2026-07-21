import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { cidades, getCidade } from "@/data/cidades";
import { servicos } from "@/data/servicos";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cidades.map((cidade) => ({ slug: cidade.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cidade = getCidade(slug);
  if (!cidade) return {};
  return {
    title: `Marketing digital para brasileiros em ${cidade.nome}, ${cidade.estadoSigla}`,
    description: `Agência de marketing digital para brasileiros em ${cidade.nome}, ${cidade.estado}. Tráfego pago, SEO e sites para atrair mais clientes na região.`,
  };
}

// Placeholder: cada cidade terá conteúdo único escrito na fase de conteúdo,
// nada de texto duplicado trocando apenas o nome da cidade.
export default async function CidadePage({ params }: Props) {
  const { slug } = await params;
  const cidade = getCidade(slug);
  if (!cidade) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold md:text-4xl">
        Marketing digital para brasileiros em {cidade.nome}, {cidade.estadoSigla}
      </h1>
      <p className="mt-4 text-lg opacity-80">{cidade.descricaoCurta}</p>

      <h2 className="mt-10 text-2xl font-bold">
        Como ajudamos negócios em {cidade.nome}
      </h2>
      <ul className="mt-4 space-y-2">
        {servicos.map((servico) => (
          <li key={servico.slug}>
            <Link href={`/servicos/${servico.slug}`} className="hover:underline">
              {servico.nome}: {servico.descricaoCurta}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <WhatsAppButton
          texto={`Atrair clientes em ${cidade.nome}`}
          mensagem={`Olá! Tenho um negócio na região de ${cidade.nome} e quero atrair mais clientes.`}
        />
      </div>
    </div>
  );
}
