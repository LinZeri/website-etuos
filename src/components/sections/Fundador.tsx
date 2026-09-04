import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import { caminho } from "@/i18n/rotas";

type Props = {
  idioma: Idioma;
  // Versão curta para páginas de serviço e cidade.
  compacto?: boolean;
};

// Agência com fundador à frente: nome, rosto e WhatsApp. A foto do evento fica
// em preto e branco para o verde ácido continuar sendo a única cor.
export function Fundador({ idioma, compacto = false }: Props) {
  const t = dicionario(idioma).fundador;
  const linkSobre = caminho(idioma, { tipo: "sobre" });

  if (compacto) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="revelar grid items-center gap-8 rounded-xl border border-border bg-surface p-7 md:grid-cols-[auto_1fr_auto] md:p-9">
          <Image
            src="/images/lin-zeri.webp"
            alt={t.fotoAlt}
            width={120}
            height={144}
            className="h-36 w-30 rounded-xl object-cover"
          />
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {t.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl">{t.titulo}</h2>
            <p className="mt-3 leading-relaxed text-foreground/85">{t.texto}</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <WhatsAppButton idioma={idioma} texto={t.whatsapp} />
            <Link
              href={linkSobre}
              className="text-sm font-semibold underline decoration-accent decoration-2 underline-offset-4"
            >
              {t.conhecer}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="grao relative overflow-clip bg-foreground text-white">
      <span aria-hidden className="fantasma text-white/[0.06]">
        {t.fantasma}
      </span>
      <div className="relative mx-auto grid max-w-6xl items-center md:grid-cols-2">
        <div className="px-4 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 text-4xl md:text-6xl">{t.titulo}</h2>
          <p className="mt-6 max-w-lg text-lg text-white/75">{t.texto}</p>
          <blockquote className="mt-8 max-w-lg border-l-2 border-accent pl-5 text-white/60">
            {t.citacao}
          </blockquote>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <WhatsAppButton
              idioma={idioma}
              texto={t.whatsapp}
              className="inline-block rounded-lg bg-accent px-7 py-4 font-semibold text-foreground transition hover:brightness-95"
            />
            <Link
              href={linkSobre}
              className="rounded-lg border border-white/25 px-7 py-4 font-semibold text-white transition hover:border-accent hover:text-accent"
            >
              {t.conhecer}
            </Link>
          </div>
        </div>
        <div className="relative min-h-[360px] md:min-h-[560px]">
          <Image
            src="/images/lin-zeri-evento.webp"
            alt={t.fotoAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-[30%_center] grayscale contrast-110"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/40 to-transparent md:via-foreground/20"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-foreground to-transparent md:hidden"
          />
        </div>
      </div>
    </section>
  );
}
