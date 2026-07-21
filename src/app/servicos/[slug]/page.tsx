import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { getServico, servicos } from "@/data/servicos";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicos.map((servico) => ({ slug: servico.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const servico = getServico(slug);
  if (!servico) return {};
  return {
    title: servico.titulo,
    description: servico.descricaoCurta,
  };
}

// Placeholder: conteúdo real de cada serviço na próxima fase.
export default async function ServicoPage({ params }: Props) {
  const { slug } = await params;
  const servico = getServico(slug);
  if (!servico) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold md:text-4xl">{servico.titulo}</h1>
      <p className="mt-4 text-lg opacity-80">{servico.descricaoCurta}</p>
      <div className="mt-8">
        <WhatsAppButton
          texto="Quero esse serviço"
          mensagem={`Olá! Vim pelo site da Etuos e quero saber mais sobre ${servico.nome}.`}
        />
      </div>
    </div>
  );
}
