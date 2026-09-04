import Image from "next/image";
import Link from "next/link";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import { caminho } from "@/i18n/rotas";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { SeletorIdioma } from "./SeletorIdioma";
import { WhatsAppButton } from "./WhatsAppButton";
import { linksNavegacao } from "./nav";

// Fixo no desktop (o CTA acompanha a rolagem das páginas longas). No celular
// não: header fixo mais a barra de CTA comeriam a tela.
export function Header({ idioma }: { idioma: Idioma }) {
  const t = dicionario(idioma);
  const links = linksNavegacao(idioma);

  return (
    <header className="z-40 border-b border-border bg-background/90 backdrop-blur md:sticky md:top-0">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link
          href={caminho(idioma, { tipo: "home" })}
          aria-label={t.header.irParaHome}
        >
          <Image
            src="/images/logo-etuos.svg"
            alt="Etuos"
            width={122}
            height={40}
            priority
          />
        </Link>
        <NavLinks links={links} />
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <SeletorIdioma
              idiomaAtual={idioma}
              rotulo={t.seletorIdioma.rotulo}
              variante="header"
            />
          </div>
          <WhatsAppButton
            idioma={idioma}
            texto={t.header.whatsapp}
            className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-foreground transition hover:brightness-95 md:inline-block"
          />
          <MobileMenu
            idioma={idioma}
            links={links}
            textos={{
              abrir: t.menu.abrir,
              fechar: t.menu.fechar,
              whatsapp: t.menu.whatsapp,
              idioma: t.seletorIdioma.rotulo,
            }}
          />
        </div>
      </div>
    </header>
  );
}
