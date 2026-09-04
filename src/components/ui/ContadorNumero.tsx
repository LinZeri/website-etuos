"use client";

import { useEffect, useRef } from "react";
import { HTML_LANG, type Idioma } from "@/i18n/idiomas";

type Props = {
  idioma: Idioma;
  valor: number;
  prefixo?: string;
  sufixo?: string;
};

// Contador que sobe até o valor quando entra na tela. O HTML já sai do
// servidor com o número final, então SEO e leitores de tela veem o valor
// certo; a animação é só um detalhe para quem rola a página. Com movimento
// reduzido, nada anima.
export function ContadorNumero({ idioma, valor, prefixo, sufixo }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const formato = new Intl.NumberFormat(HTML_LANG[idioma]);
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        observador.disconnect();
        const inicio = performance.now();
        const duracao = 1200;
        const passo = (agora: number) => {
          const progresso = Math.min(1, (agora - inicio) / duracao);
          const suavizado = 1 - Math.pow(1 - progresso, 3);
          elemento.textContent = formato.format(Math.round(valor * suavizado));
          if (progresso < 1) requestAnimationFrame(passo);
        };
        requestAnimationFrame(passo);
      },
      { threshold: 0.4 },
    );
    observador.observe(elemento);
    return () => observador.disconnect();
  }, [idioma, valor]);

  return (
    <>
      {prefixo}
      <span
        ref={ref}
        className="inline-block tabular-nums"
        style={{ minWidth: `${String(valor).length}ch` }}
      >
        {new Intl.NumberFormat(HTML_LANG[idioma]).format(valor)}
      </span>
      {sufixo}
    </>
  );
}
