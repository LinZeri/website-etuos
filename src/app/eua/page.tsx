import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicosLista } from "@/components/sections/ServicosLista";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { CidadesGrid } from "@/components/sections/CidadesGrid";
import { CtaFinal } from "@/components/sections/CtaFinal";

export const metadata: Metadata = {
  title: "Marketing digital para brasileiros nos EUA",
  description:
    "Agência de marketing digital para brasileiros que empreendem nos Estados Unidos. Tráfego pago, SEO e criação de sites que trazem clientes de verdade.",
  alternates: { canonical: "/eua" },
};

export default function EuaPage() {
  return (
    <>
      <Hero
        eyebrow="Agência para brasileiros nos EUA"
        titulo="Marketing digital para brasileiros que querem"
        destaque="vencer nos EUA"
        mostrarCidades
      />
      <ServicosLista />
      <Depoimentos />
      <ComoFunciona />
      <CidadesGrid />
      <CtaFinal
        titulo="Pronto para crescer nos EUA?"
        descricao="Chama a gente no WhatsApp. Você recebe um diagnóstico honesto do seu marketing, sem compromisso e sem enrolação."
        textoBotao="Falar no WhatsApp"
      />
    </>
  );
}
