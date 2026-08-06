import Image from "next/image";
import type { ReactNode } from "react";
import { WhatsAppRastreado } from "@/components/campanha/WhatsAppRastreado";

// Seções compartilhadas pelas landings de campanha. A copy vem de cada página,
// aqui fica só a estrutura visual, seguindo os tokens de docs/design.md.

type HeroProps = {
  eyebrow: string;
  titulo: string;
  destaque: string;
  descricao: string;
  provas: string[];
  children: ReactNode;
};

export function HeroCampanha({
  eyebrow,
  titulo,
  destaque,
  descricao,
  provas,
  children,
}: HeroProps) {
  return (
    <section className="grid-dark relative overflow-hidden bg-foreground text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-accent/15 blur-[140px]"
      />
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 pb-20 pt-16 md:pb-28 md:pt-20 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-16">
        <div>
          <p className="rise rise-1 inline-block border border-accent/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
          <h1 className="rise rise-2 mt-6 max-w-2xl text-4xl leading-[0.95] md:text-6xl">
            {titulo} <span className="text-accent">{destaque}</span>
          </h1>
          <p className="rise rise-3 mt-6 max-w-lg text-lg text-white/70">
            {descricao}
          </p>
          <ul className="rise rise-4 mt-8 grid gap-3">
            {provas.map((prova) => (
              <li key={prova} className="flex items-start gap-3 text-white/80">
                <span aria-hidden className="font-display text-lg text-accent">
                  ✓
                </span>
                {prova}
              </li>
            ))}
          </ul>
        </div>
        <div className="rise rise-3">{children}</div>
      </div>
    </section>
  );
}

type Item = { titulo: string; descricao: string };

export function PlanoDeAcao({
  eyebrow,
  titulo,
  descricao,
  itens,
}: {
  eyebrow: string;
  titulo: string;
  descricao: string;
  itens: Item[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        {eyebrow}
      </p>
      <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">{titulo}</h2>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        {descricao}
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {itens.map((item) => (
          <div
            key={item.titulo}
            className="rounded-xl border-t-2 border-accent bg-surface p-6"
          >
            <h3 className="text-lg">{item.titulo}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.descricao}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Passos({ titulo, passos }: { titulo: string; passos: Item[] }) {
  return (
    <section className="grid-dark bg-foreground text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Como funciona
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">{titulo}</h2>
        <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-6">
          {passos.map((passo, indice) => (
            <li key={passo.titulo} className="border-t-2 border-accent pt-5">
              <span className="font-display text-5xl text-accent">
                {indice + 1}
              </span>
              <h3 className="mt-3 text-xl">{passo.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {passo.descricao}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const numeros = [
  { valor: "10+", legenda: "anos de marketing digital" },
  { valor: "R$ 100 mil", legenda: "por mês em mídia já gerenciada" },
  { valor: "30 → 300+", legenda: "franquias em 1 ano e 8 meses" },
  { valor: "9", legenda: "setores diferentes atendidos" },
];

export function QuemFaz({ texto }: { texto: string }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,300px)_1fr] md:gap-16">
        <Image
          src="/images/lin-zeri.webp"
          alt="Lin Zeri, fundador da Etuos, sorrindo de braços cruzados em um evento"
          width={450}
          height={540}
          className="w-full max-w-[300px] rounded-xl object-cover"
        />
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Quem monta o seu plano
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">Prazer, eu sou o Lin</h2>
          <p className="mt-5 leading-relaxed text-foreground/85">{texto}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {numeros.map((numero) => (
              <div key={numero.legenda} className="border-t-2 border-accent pt-3">
                <p className="font-display text-2xl">{numero.valor}</p>
                <p className="mt-1 text-xs text-muted">{numero.legenda}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaCampanha({
  titulo,
  descricao,
  mensagemWhatsApp,
  children,
}: {
  titulo: string;
  descricao: string;
  mensagemWhatsApp: string;
  children: ReactNode;
}) {
  return (
    <section className="grid-dark bg-foreground text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:py-24 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-16">
        <div>
          <h2 className="max-w-xl text-3xl md:text-5xl">{titulo}</h2>
          <p className="mt-6 max-w-lg text-lg text-white/70">{descricao}</p>
          <p className="mt-8 text-sm text-white/50">
            Prefere resolver conversando? A porta também está aberta.
          </p>
          <div className="mt-3">
            <WhatsAppRastreado
              texto="Falar no WhatsApp"
              mensagem={mensagemWhatsApp}
            />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
