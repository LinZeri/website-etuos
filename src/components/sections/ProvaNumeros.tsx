import { ContadorNumero } from "@/components/ui/ContadorNumero";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";

type Props = {
  idioma: Idioma;
  // Fundo grafite (dentro de seções escuras) ou branco com bordas.
  escuro?: boolean;
  // Sobrepõe a seção anterior, quebrando o empilhamento de retângulos.
  sobreposto?: boolean;
};

// Faixa de provas: quatro números da casa, com contador ao entrar na tela.
// Fonte única dos números do site (home, hubs, Sobre e landings).
export function ProvaNumeros({ idioma, escuro = false, sobreposto = false }: Props) {
  const numeros = dicionario(idioma).numeros;

  return (
    <section
      className={
        sobreposto
          ? "relative z-10 mx-auto -mt-10 max-w-6xl px-4 md:-mt-14"
          : "mx-auto max-w-6xl px-4"
      }
    >
      <dl
        className={`grid grid-cols-2 md:grid-cols-4 ${
          escuro
            ? "divide-white/10 border-white/10 text-white"
            : "divide-border border-border bg-background shadow-xl shadow-foreground/5"
        } divide-x divide-y rounded-xl border md:divide-y-0`}
      >
        {numeros.map((numero, indice) => (
          <div
            key={numero.legenda}
            className={`revelar px-5 py-7 md:px-7 md:py-9 ${indice > 0 ? `revelar-${Math.min(indice, 3)}` : ""}`}
          >
            <dd
              className={`font-display text-4xl leading-none md:text-5xl ${
                escuro ? "text-accent" : "text-foreground"
              }`}
            >
              <ContadorNumero
                idioma={idioma}
                valor={numero.valor}
                prefixo={numero.prefixo}
                sufixo={numero.sufixo}
              />
            </dd>
            <dt
              className={`mt-3 text-xs font-semibold uppercase tracking-[0.18em] ${
                escuro ? "text-white/55" : "text-muted"
              }`}
            >
              {numero.legenda}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
