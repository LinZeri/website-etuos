import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Etuos pelo WhatsApp ou e-mail e descubra como atrair mais clientes para o seu negócio nos Estados Unidos.",
};

export default function ContatoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold md:text-4xl">Fale com a Etuos</h1>
      <p className="mt-4 text-lg opacity-80">
        O caminho mais rápido é o WhatsApp. Responda algumas perguntas sobre o
        seu negócio e receba um diagnóstico sem compromisso.
      </p>
      <div className="mt-8">
        <WhatsAppButton />
      </div>
      <p className="mt-8 opacity-80">
        Prefere e-mail? Escreva para{" "}
        <a href={`mailto:${site.email}`} className="underline">
          {site.email}
        </a>
        .
      </p>
    </div>
  );
}
