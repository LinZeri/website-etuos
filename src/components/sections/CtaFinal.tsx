import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

type Props = {
  titulo?: string;
  descricao?: string;
  textoBotao?: string;
  mensagem?: string;
};

export function CtaFinal({
  titulo = "Pronto para crescer nos EUA?",
  descricao = "Chama a gente no WhatsApp. Você recebe um diagnóstico honesto do seu marketing, sem compromisso e sem enrolação.",
  textoBotao = "Falar no WhatsApp",
  mensagem,
}: Props) {
  return (
    <section className="bg-accent">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center md:py-28">
        <h2 className="mx-auto max-w-3xl text-4xl text-foreground md:text-6xl">
          {titulo}
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-medium text-foreground/80">
          {descricao}
        </p>
        <div className="mt-9">
          <WhatsAppButton
            texto={textoBotao}
            mensagem={mensagem}
            className="inline-block rounded-lg bg-foreground px-8 py-4 text-lg font-semibold text-white transition hover:bg-foreground/90"
          />
        </div>
      </div>
    </section>
  );
}
