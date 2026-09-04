import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import { WhatsAppButton } from "./WhatsAppButton";

// Barra de CTA fixa no rodapé do celular. No desktop fica o botão redondo
// (FloatingWhatsApp). A altura é reservada em CSS (--barra-cta), então não
// há deslocamento de layout.
export function BarraCtaMobile({ idioma }: { idioma: Idioma }) {
  const t = dicionario(idioma).barraCta;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-foreground pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="flex h-16 items-center justify-between gap-3 px-4">
        <p className="text-xs leading-tight text-white/65">{t.texto}</p>
        <WhatsAppButton
          idioma={idioma}
          texto={t.botao}
          className="shrink-0 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-foreground"
        />
      </div>
    </div>
  );
}
