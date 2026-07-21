import { linkWhatsApp } from "@/data/site";

type Props = {
  texto?: string;
  mensagem?: string;
  className?: string;
};

export function WhatsAppButton({ texto, mensagem, className }: Props) {
  return (
    <a
      href={linkWhatsApp(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        "inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
      }
    >
      {texto ?? "Falar no WhatsApp"}
    </a>
  );
}
