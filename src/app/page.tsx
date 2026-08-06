import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicosLista } from "@/components/sections/ServicosLista";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { PaisesGrid } from "@/components/sections/PaisesGrid";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { metadataDaPagina } from "@/lib/metadata";

export const metadata: Metadata = metadataDaPagina({ caminho: "/" });

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Agência para negócios e profissionais"
        titulo="Marketing digital para quem quer"
        destaque="crescer no Brasil e nos EUA"
        mostrarCidades={false}
      />
      <ServicosLista />
      <Depoimentos />
      <ComoFunciona />
      <PaisesGrid />
      <CtaFinal />
    </>
  );
}
