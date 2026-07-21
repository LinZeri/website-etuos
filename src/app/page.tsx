import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicosLista } from "@/components/sections/ServicosLista";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { CidadesGrid } from "@/components/sections/CidadesGrid";
import { CtaFinal } from "@/components/sections/CtaFinal";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicosLista />
      <Depoimentos />
      <ComoFunciona />
      <CidadesGrid />
      <CtaFinal />
    </>
  );
}
