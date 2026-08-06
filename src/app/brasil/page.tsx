import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicosLista } from "@/components/sections/ServicosLista";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { metadataDaPagina } from "@/lib/metadata";

export const metadata: Metadata = metadataDaPagina({
  titulo: "Marketing digital para negócios no Brasil",
  descricao:
    "Agência de marketing digital para negócios e profissionais no Brasil. Tráfego pago, SEO e criação de sites que trazem clientes de verdade.",
  caminho: "/brasil",
});

export default function BrasilPage() {
  return (
    <>
      <Hero
        eyebrow="Agência para negócios no Brasil"
        titulo="Marketing digital para quem quer"
        destaque="crescer no Brasil"
        mostrarCidades={false}
      />
      <ServicosLista />
      <Depoimentos />
      <ComoFunciona />
      <CtaFinal
        titulo="Pronto para crescer no Brasil?"
        descricao="Chama a gente no WhatsApp. Você recebe um diagnóstico honesto do seu marketing, sem compromisso e sem enrolação."
        textoBotao="Falar no WhatsApp"
      />
    </>
  );
}
