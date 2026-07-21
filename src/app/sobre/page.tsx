import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Sobre a Etuos",
  description:
    "Conheça a Etuos, agência de marketing digital criada para ajudar brasileiros a crescerem com seus negócios nos Estados Unidos.",
};

// Placeholder: conteúdo real na próxima fase.
export default function SobrePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold md:text-4xl">Sobre a Etuos</h1>
      <p className="mt-4 text-lg opacity-80">
        Somos uma agência de marketing digital feita para brasileiros que
        empreendem nos Estados Unidos. Falamos a sua língua, entendemos o
        mercado americano e trabalhamos com um objetivo: trazer clientes para o
        seu negócio.
      </p>
      <div className="mt-8">
        <WhatsAppButton texto="Conversar com a Etuos" />
      </div>
    </div>
  );
}
