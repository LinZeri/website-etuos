import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/data/site";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import { alternativas, caminho } from "@/i18n/rotas";
import { metadataDaPagina } from "@/lib/metadata";
import { trilhaJsonLd } from "@/lib/schema";
import { conteudoPrivacidade } from "./conteudo";

const pagina = { tipo: "privacidade" } as const;

export function metadataPrivacidade(idioma: Idioma): Metadata {
  const c = conteudoPrivacidade(idioma);
  return metadataDaPagina({
    idioma,
    titulo: c.metaTitulo,
    descricao: c.metaDescricao,
    caminho: caminho(idioma, pagina),
    alternativas: alternativas(pagina),
  });
}

export function PaginaPrivacidade({ idioma }: { idioma: Idioma }) {
  const c = conteudoPrivacidade(idioma);
  const d = dicionario(idioma);

  return (
    <>
      <JsonLd
        dados={trilhaJsonLd([
          { nome: d.schema.trilhaHome, caminho: caminho(idioma, { tipo: "home" }) },
          { nome: d.footer.privacidade, caminho: caminho(idioma, pagina) },
        ])}
      />
      <section className="grid-dark bg-foreground text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {site.nome}
          </p>
          <h1 className="mt-4 text-4xl leading-[0.95] md:text-5xl">
            {c.titulo}
          </h1>
          <p className="mt-6 text-white/70">{c.intro}</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <div className="grid gap-12">
          {c.secoes.map((secao) => (
            <section key={secao.titulo}>
              <h2 className="text-2xl md:text-3xl">{secao.titulo}</h2>
              <div className="mt-5 space-y-4 leading-relaxed text-foreground/85">
                {secao.paragrafos.map((paragrafo) => (
                  <p key={paragrafo}>{paragrafo}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-xl border-t-2 border-accent bg-surface p-7">
          <h2 className="text-2xl">{c.caixa.titulo}</h2>
          <p className="mt-4 leading-relaxed text-muted">{c.caixa.texto}</p>
          <div className="mt-6">
            <WhatsAppButton
              idioma={idioma}
              texto={c.caixa.botao}
              mensagem={c.caixa.mensagem}
            />
          </div>
        </div>
      </div>
    </>
  );
}
