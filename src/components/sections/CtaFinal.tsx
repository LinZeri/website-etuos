import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";

type Props = {
  idioma: Idioma;
  titulo?: string;
  descricao?: string;
  textoBotao?: string;
  mensagem?: string;
};

// A faixa verde é o ponto de exclamação da página: título grande, palavra
// fantasma atrás e uma linha de segurança embaixo do botão.
export function CtaFinal({
  idioma,
  titulo,
  descricao,
  textoBotao,
  mensagem,
}: Props) {
  const t = dicionario(idioma).ctaFinal;

  return (
    <section className="relative overflow-clip border-t-8 border-foreground bg-accent">
      <span aria-hidden className="fantasma text-foreground/10">
        {t.fantasma}
      </span>
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center md:py-28">
        <h2 className="mx-auto max-w-4xl text-5xl text-foreground md:text-7xl">
          {titulo ?? t.titulo}
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-medium text-foreground/80">
          {descricao ?? t.descricao}
        </p>
        <div className="mt-9">
          <WhatsAppButton
            idioma={idioma}
            texto={textoBotao ?? t.botao}
            mensagem={mensagem}
            className="inline-block rounded-lg bg-foreground px-8 py-4 text-lg font-semibold text-white transition hover:bg-foreground/90"
          />
        </div>
        <p className="mt-4 text-sm text-foreground/60">{t.rodape}</p>
      </div>
    </section>
  );
}
