import Link from "next/link";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { cidades } from "@/data/cidades";

type Props = {
  eyebrow?: string;
  titulo?: string;
  destaque?: string;
  descricao?: string;
  ctaTexto?: string;
  ctaMensagem?: string;
  mostrarCidades?: boolean;
};

export function Hero({
  eyebrow = "Agência para brasileiros nos EUA",
  titulo = "Marketing digital para brasileiros que querem",
  destaque = "vencer nos EUA",
  descricao = "Tráfego pago, SEO e sites que transformam quem procura no Google em conversa no seu WhatsApp.",
  ctaTexto = "Quero atrair clientes",
  ctaMensagem,
  mostrarCidades = true,
}: Props) {
  return (
    <section className="grid-dark relative overflow-hidden bg-foreground text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-accent/15 blur-[140px]"
      />
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-20 md:pb-32 md:pt-28">
        <p className="rise rise-1 inline-block border border-accent/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h1 className="rise rise-2 mt-6 max-w-4xl text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
          {titulo} <span className="text-accent">{destaque}</span>
        </h1>
        <p className="rise rise-3 mt-6 max-w-xl text-lg text-white/70 md:text-xl">
          {descricao}
        </p>
        <div className="rise rise-4 mt-10 flex flex-wrap items-center gap-4">
          <WhatsAppButton
            texto={ctaTexto}
            mensagem={ctaMensagem}
            className="inline-block rounded-lg bg-accent px-7 py-4 text-lg font-semibold text-foreground transition hover:brightness-95"
          />
          <Link
            href="/servicos"
            className="rounded-lg border border-white/25 px-7 py-4 text-lg font-semibold text-white transition hover:border-accent hover:text-accent"
          >
            Ver serviços
          </Link>
        </div>
      </div>

      {mostrarCidades && (
        <div className="relative border-t border-white/10 py-4">
          <div className="marquee-track" aria-hidden>
            {[0, 1].map((copia) => (
              <div key={copia} className="flex shrink-0">
                {cidades.map((cidade) => (
                  <span
                    key={`${copia}-${cidade.slug}`}
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
