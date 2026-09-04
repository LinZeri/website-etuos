import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  titulo: string;
  descricao: string;
  children?: ReactNode;
};

// Cabeçalho escuro das páginas utilitárias (serviços, blog, contato): mesma
// linguagem do herói, sem o letreiro.
export function CabecalhoPagina({ eyebrow, titulo, descricao, children }: Props) {
  return (
    <section className="grid-dark grao relative overflow-clip bg-foreground text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="rise rise-1 inline-block border border-accent/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h1 className="rise rise-2 mt-6 max-w-3xl text-4xl leading-[0.95] md:text-6xl">
          {titulo}
        </h1>
        <p className="rise rise-3 mt-6 max-w-xl text-lg text-white/70">
          {descricao}
        </p>
        {children && <div className="rise rise-4 mt-9">{children}</div>}
      </div>
    </section>
  );
}
