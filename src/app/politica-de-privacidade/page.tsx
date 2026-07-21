import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Política de privacidade do site da Etuos.",
  robots: { index: false },
};

// Placeholder: texto legal definitivo será redigido antes do lançamento.
export default function PoliticaDePrivacidadePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold md:text-4xl">Política de privacidade</h1>
      <p className="mt-4 opacity-80">
        Esta página receberá a política de privacidade completa do site da
        Etuos antes do lançamento.
      </p>
    </div>
  );
}
