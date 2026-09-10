import type { Metadata } from "next";
import Image from "next/image";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CabecalhoPagina } from "@/components/sections/CabecalhoPagina";
import { JsonLd } from "@/components/ui/JsonLd";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import { alternativas, caminho } from "@/i18n/rotas";
import { metadataDaPagina } from "@/lib/metadata";
import { trilhaJsonLd } from "@/lib/schema";

const pagina = { tipo: "contato" } as const;

export function metadataContato(idioma: Idioma): Metadata {
  const t = dicionario(idioma).contato;
  return metadataDaPagina({
    idioma,
    titulo: t.metaTitulo,
    descricao: t.metaDescricao,
    caminho: caminho(idioma, pagina),
    alternativas: alternativas(pagina),
  });
}

export function PaginaContato({ idioma }: { idioma: Idioma }) {
  const d = dicionario(idioma);
  const t = d.contato;
  return (
    <>
      <JsonLd
        dados={trilhaJsonLd([
          { nome: d.schema.trilhaHome, caminho: caminho(idioma, { tipo: "home" }) },
          { nome: d.nav.contato, caminho: caminho(idioma, pagina) },
        ])}
      />
      <CabecalhoPagina
        eyebrow={t.eyebrow}
        titulo={t.titulo}
        descricao={t.descricao}
      >
        <WhatsAppButton
          idioma={idioma}
          texto={d.hero.cta}
          className="inline-block rounded-lg bg-accent px-7 py-4 text-lg font-semibold text-foreground transition hover:brightness-95"
        />
      </CabecalhoPagina>
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,300px)_1fr] md:gap-16">
          <Image
            src="/images/lin-zeri.webp"
            alt={d.fundador.fotoAlt}
            width={450}
            height={540}
            className="w-full max-w-[300px] rounded-xl object-cover"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {d.comoFunciona.eyebrow}
            </p>
            <ol className="mt-6 grid gap-6">
              {t.passos.map((passo, indice) => (
                <li
                  key={passo}
                  className={`revelar flex items-start gap-5 ${indice > 0 ? `revelar-${indice}` : ""}`}
                >
                  <span className="font-display texto-contorno text-5xl leading-none text-foreground/40">
                    {indice + 1}
                  </span>
                  <p className="pt-2 text-lg leading-snug">{passo}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm text-muted">{d.ctaFinal.rodape}</p>
            <div className="mt-6">
              <WhatsAppButton idioma={idioma} texto={d.fundador.whatsapp} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
