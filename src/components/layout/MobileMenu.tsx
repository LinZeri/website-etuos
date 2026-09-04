"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Idioma } from "@/i18n/idiomas";
import { WhatsAppButton } from "./WhatsAppButton";
import { SeletorIdioma } from "./SeletorIdioma";
import type { LinkNavegacao } from "./nav";

type Props = {
  idioma: Idioma;
  links: LinkNavegacao[];
  textos: { abrir: string; fechar: string; whatsapp: string; idioma: string };
};

export function MobileMenu({ idioma, links, textos }: Props) {
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setAberto(!aberto)}
        aria-expanded={aberto}
        aria-controls="menu-mobile"
        aria-label={aberto ? textos.fechar : textos.abrir}
        className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`h-0.5 w-6 bg-current transition-transform duration-300 ${
            aberto ? "translate-y-1 rotate-45 text-white" : "text-foreground"
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-current transition-transform duration-300 ${
            aberto ? "-translate-y-1 -rotate-45 text-white" : "text-foreground"
          }`}
        />
      </button>

      <div
        id="menu-mobile"
        className={`grid-dark fixed inset-0 z-40 flex flex-col bg-foreground px-6 pb-8 pt-24 transition-opacity duration-300 ${
          aberto ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-1 flex-col gap-2">
          {links.map((link, indice) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setAberto(false)}
              className="font-display flex items-baseline gap-4 border-b border-white/10 py-4 text-3xl uppercase text-white transition hover:text-accent"
            >
              <span className="text-sm text-accent">0{indice + 1}</span>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mb-5 flex justify-center">
          <SeletorIdioma
            idiomaAtual={idioma}
            rotulo={textos.idioma}
            variante="menu"
          />
        </div>
        <WhatsAppButton
          idioma={idioma}
          texto={textos.whatsapp}
          className="block rounded-lg bg-accent px-6 py-4 text-center text-lg font-semibold text-foreground"
        />
      </div>
    </div>
  );
}
