import { linkWhatsApp } from "@/data/site";

type Props = {
  texto?: string;
  mensagem?: string;
  className?: string;
};

// Regra de marca: o verde ácido (--color-accent) sempre com texto grafite,
// nunca com texto branco (contraste insuficiente).
export function WhatsAppButton({ texto, mensagem, className }: Props) {
  return (
    <a
      href={linkWhatsApp(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        "inline-block rounded-lg bg-accent px-6 py-3 font-semibold text-foreground transition hover:brightness-95"
      }
    >
      {texto ?? "Falar no WhatsApp"}
    </a>
  );
}
