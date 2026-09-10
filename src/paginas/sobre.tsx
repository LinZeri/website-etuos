import type { Metadata } from "next";
import Image from "next/image";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { ProvaNumeros } from "@/components/sections/ProvaNumeros";
import { JsonLd } from "@/components/ui/JsonLd";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import { alternativas, caminho } from "@/i18n/rotas";
import { metadataDaPagina } from "@/lib/metadata";
import { pessoaJsonLd, trilhaJsonLd } from "@/lib/schema";
import { conteudoSobre } from "./conteudo";

const pagina = { tipo: "sobre" } as const;

export function metadataSobre(idioma: Idioma): Metadata {
  const c = conteudoSobre(idioma);
  return metadataDaPagina({
    idioma,
    titulo: c.metaTitulo,
    descricao: c.metaDescricao,
    caminho: caminho(idioma, pagina),
    alternativas: alternativas(pagina),
  });
}

export function PaginaSobre({ idioma }: { idioma: Idioma }) {
  const c = conteudoSobre(idioma);
  const t = dicionario(idioma).schema;

  return (
    <>
      <JsonLd
        dados={[
          pessoaJsonLd(idioma),
          trilhaJsonLd([
            { nome: t.trilhaHome, caminho: caminho(idioma, { tipo: "home" }) },
            { nome: t.trilhaSobre, caminho: caminho(idioma, pagina) },
          ]),
        ]}
      />

      {/* Herói com o recorte do Lin ao microfone sobre a tipografia gigante */}
      <section className="grid-dark grao relative overflow-clip bg-foreground text-white">
        <div className="mx-auto grid max-w-6xl items-end gap-8 px-4 pt-20 md:grid-cols-[1fr_minmax(0,380px)] md:pt-28">
          <div className="pb-20 md:pb-28">
            <p className="rise rise-1 inline-block border border-accent/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {c.eyebrow}
            </p>
            <h1 className="rise rise-2 mt-6 max-w-3xl text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.92]">
              {c.h1Antes}{" "}
              <span className="texto-contorno text-accent">{c.h1Destaque}</span>
            </h1>
            <p className="rise rise-3 mt-6 max-w-xl text-lg text-white/70">
              {c.heroDescricao}
            </p>
          </div>
          <div className="rise rise-3 relative self-end">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 rounded-t-full bg-accent/15 blur-3xl"
            />
            <Image
              src="/images/lin-zeri-palco.webp"
              alt={c.recorteAlt}
              width={640}
              height={966}
              priority
              sizes="(min-width: 768px) 380px, 70vw"
              className="relative mx-auto block w-56 md:w-full"
            />
          </div>
        </div>
      </section>

      <ProvaNumeros idioma={idioma} sobreposto />

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,380px)_1fr] md:gap-16">
          <div className="revelar relative">
            <Image
              src="/images/lin-zeri.webp"
              alt={c.fotoAlt}
              width={450}
              height={540}
              className="w-full rounded-xl object-cover"
            />
            <p className="mt-4 border-l-2 border-accent pl-4 text-sm text-muted">
              {c.fotoLegenda}
            </p>
          </div>
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl">{c.apresentacaoTitulo}</h2>
            <div className="mt-6 space-y-5 leading-relaxed text-foreground/85">
              {c.apresentacao.map((paragrafo, indice) => (
                <p
                  key={paragrafo.slice(0, 32)}
                  className={`revelar ${indice > 0 ? `revelar-${Math.min(indice, 3)}` : ""}`}
                >
                  {paragrafo}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {c.setoresTitulo}
          </p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {c.setores.map((setor) => (
              <li
                key={setor}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium"
              >
                {setor}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid-dark grao relative overflow-clip bg-foreground text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_minmax(0,420px)] md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {c.principiosEyebrow}
              </p>
              <h2 className="mt-3 max-w-xl text-3xl md:text-5xl">
                {c.principiosTitulo}
              </h2>
              <div className="mt-10 space-y-8">
                {c.principios.map((principio, indice) => (
                  <div
                    key={principio.titulo}
                    className={`revelar border-l-2 border-accent pl-5 ${indice > 0 ? `revelar-${indice}` : ""}`}
                  >
                    <h3 className="text-xl">{principio.titulo}</h3>
                    <p className="mt-2 text-white/60">{principio.descricao}</p>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="/images/lin-zeri-palestra-grande.webp"
              alt={c.palestraAlt}
              width={1200}
              height={1200}
              sizes="(min-width: 768px) 420px, 100vw"
              className="w-full rounded-xl object-cover grayscale contrast-110"
            />
          </div>
        </div>
      </section>

      <CtaFinal
        idioma={idioma}
        titulo={c.cta.titulo}
        descricao={c.cta.descricao}
        textoBotao={c.cta.botao}
        mensagem={c.cta.mensagem}
      />
    </>
  );
}
