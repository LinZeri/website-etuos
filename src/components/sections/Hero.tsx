import Link from "next/link";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { getCidades } from "@/data/cidades";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import { caminho } from "@/i18n/rotas";

type Props = {
  idioma: Idioma;
  eyebrow: string;
  titulo: string;
  destaque: string;
  // "acento" pinta a palavra de verde; "contorno" deixa só o traço em verde,
  // com preenchimento vazio (mais ousado, usado na home).
  destaqueEstilo?: "acento" | "contorno";
  descricao?: string;
  ctaTexto?: string;
  ctaMensagem?: string;
  mostrarCidades?: boolean;
};

export function Hero({
  idioma,
  eyebrow,
  titulo,
  destaque,
  destaqueEstilo = "acento",
  descricao,
  ctaTexto,
  ctaMensagem,
  mostrarCidades = true,
}: Props) {
  const t = dicionario(idioma).hero;

  return (
    <section className="grid-dark grao relative overflow-clip bg-foreground text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 hidden h-120 w-120 rounded-full bg-accent/15 blur-[140px] md:block"
      />
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-20 md:pb-32 md:pt-28">
        <p className="rise rise-1 inline-block border border-accent/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h1 className="rise rise-2 mt-6 max-w-5xl text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.92]">
          {titulo}{" "}
          <span
            className={
              destaqueEstilo === "contorno"
                ? "texto-contorno text-accent"
                : "text-accent"
            }
          >
            {destaque}
          </span>
        </h1>
        <p className="rise rise-3 mt-7 max-w-xl text-lg text-white/70 md:text-xl">
          {descricao ?? t.descricao}
        </p>
        <div className="rise rise-4 mt-10 flex flex-wrap items-center gap-4">
          <WhatsAppButton
            idioma={idioma}
            texto={ctaTexto ?? t.cta}
            mensagem={ctaMensagem}
            className="inline-block rounded-lg bg-accent px-7 py-4 text-lg font-semibold text-foreground transition hover:brightness-95"
          />
          <Link
            href={caminho(idioma, { tipo: "servicos" })}
            className="rounded-lg border border-white/25 px-7 py-4 text-lg font-semibold text-white transition hover:border-accent hover:text-accent"
          >
            {t.verServicos}
          </Link>
        </div>
      </div>

      {mostrarCidades && (
        <div className="relative border-t border-white/10 py-4">
          <div className="marquee-track" aria-hidden>
            {[0, 1].map((copia) => (
              <div key={copia} className="flex shrink-0">
                {getCidades(idioma).map((cidade) => (
                  <span
                    key={`${copia}-${cidade.id}`}
                    className="flex items-center gap-6 pr-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/50"
                  >
                    {cidade.nome}, {cidade.estadoSigla}
                    <span className="text-accent">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
