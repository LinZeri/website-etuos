"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { linkWhatsApp } from "@/data/site";
import { registrarConversao } from "@/lib/conversoes";

const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";

// Parâmetros que o Google Ads e as UTMs anexam à URL de destino.
// O gclid é o mais importante: é ele que permite importar conversões offline
// no Google Ads depois, quando o lead virar cliente de verdade.
const PARAMETROS = [
  "gclid",
  "wbraid",
  "gbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

type Estado = "parado" | "enviando" | "sucesso" | "erro";

type Props = {
  origem: "seo" | "trafego-pago";
  titulo: string;
  descricao: string;
  textoBotao: string;
  mensagemWhatsApp: string;
  id?: string;
};

export function FormularioCampanha({
  origem,
  titulo,
  descricao,
  textoBotao,
  mensagemWhatsApp,
  id,
}: Props) {
  const [estado, setEstado] = useState<Estado>("parado");
  const rastreio = useRef<Record<string, string>>({});

  useEffect(() => {
    const busca = new URLSearchParams(window.location.search);
    const coletado: Record<string, string> = {};

    for (const chave of PARAMETROS) {
      const valor = busca.get(chave);
      if (valor) coletado[chave] = valor;
    }

    coletado.pagina = window.location.pathname;
    coletado.referencia = document.referrer;
    coletado.userAgent = navigator.userAgent;

    rastreio.current = coletado;
  }, []);

  async function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const formulario = evento.currentTarget;
    const dados = new FormData(formulario);

    // Honeypot: humano não enxerga esse campo, robô preenche.
    // Fingimos sucesso para não ensinar o robô a contornar.
    if (dados.get("empresa")) {
      setEstado("sucesso");
      return;
    }

    // Sem endpoint configurado, um fetch("") viraria um POST para a própria
    // página. Melhor cair direto no estado de erro, que oferece o WhatsApp.
    if (!endpoint) {
      setEstado("erro");
      return;
    }

    setEstado("enviando");

    const payload = {
      origem,
      nome: String(dados.get("nome") ?? "").trim(),
      whatsapp: String(dados.get("whatsapp") ?? "").trim(),
      site: String(dados.get("site") ?? "").trim(),
      pais: String(dados.get("pais") ?? "").trim(),
      cidade: String(dados.get("cidade") ?? "").trim(),
      enviadoEm: new Date().toISOString(),
      ...rastreio.current,
    };

    try {
      // O Apps Script não responde a preflight CORS. Usar text/plain mantém a
      // requisição no grupo "simples", que dispensa o preflight.
      const resposta = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);

      registrarConversao("formulario");
      setEstado("sucesso");
      formulario.reset();
    } catch {
      setEstado("erro");
    }
  }

  // Sem endpoint configurado, mostrar um formulário que não envia seria pior
  // que não ter formulário. A landing cai para o WhatsApp, que é a conversão
  // principal do site de qualquer jeito.
  if (!endpoint) {
    return (
      <div
        id={id}
        className="rounded-2xl border border-border bg-background p-6 text-foreground md:p-7"
      >
        <h2 className="text-2xl">{titulo}</h2>
        <p className="mt-3 leading-relaxed text-muted">
          Chama no WhatsApp, conta em duas linhas como está o seu negócio e o
          plano de ação sai em até 48 horas.
        </p>
        <a
          href={linkWhatsApp(mensagemWhatsApp)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => registrarConversao("whatsapp")}
          className="mt-6 inline-block rounded-lg bg-accent px-7 py-4 text-lg font-semibold text-foreground transition hover:brightness-95"
        >
          {textoBotao}
        </a>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          Resposta no mesmo dia, direto com o Lin. Sem robô e sem formulário
          longo.
        </p>
      </div>
    );
  }

  if (estado === "sucesso") {
    return (
      <div
        id={id}
        className="rounded-2xl border border-border bg-background p-7 text-foreground"
      >
        <p className="font-display text-5xl text-accent">Feito</p>
        <h2 className="mt-4 text-2xl">Recebemos o seu pedido</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Seu plano de ação fica pronto em até 48 horas e chega no WhatsApp que
          você informou. Se quiser adiantar a conversa, chama a gente agora.
        </p>
        <a
          href={linkWhatsApp(mensagemWhatsApp)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => registrarConversao("whatsapp")}
          className="mt-6 inline-block rounded-lg bg-accent px-7 py-4 font-semibold text-foreground transition hover:brightness-95"
        >
          Falar no WhatsApp agora
        </a>
      </div>
    );
  }

  return (
    <div
      id={id}
      className="rounded-2xl border border-border bg-background p-6 text-foreground md:p-7"
    >
      <h2 className="text-2xl">{titulo}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">{descricao}</p>

      <form onSubmit={enviar} className="mt-6 grid gap-4">
        <Campo rotulo="Seu nome" nome="nome" autoComplete="name" />
        <Campo
          rotulo="WhatsApp com DDD"
          nome="whatsapp"
          tipo="tel"
          autoComplete="tel"
          dica="Pode ser número do Brasil ou dos Estados Unidos"
        />
        <Campo
          rotulo="Endereço do seu site"
          nome="site"
          tipo="text"
          autoComplete="url"
          dica="Se ainda não tem site, escreva não tenho"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid min-w-0 gap-1.5">
            <span className="text-sm font-medium">Onde fica o negócio</span>
            <select
              name="pais"
              required
              defaultValue="Brasil"
              className="w-full min-w-0 rounded-lg border border-border bg-surface px-3 py-2.5 text-foreground outline-none transition focus:border-foreground"
            >
              <option value="Brasil">Brasil</option>
              <option value="Estados Unidos">Estados Unidos</option>
            </select>
          </label>
          <Campo rotulo="Cidade" nome="cidade" autoComplete="address-level2" />
        </div>

        {/* Honeypot: escondido de gente, visível para robô. */}
        <div className="h-0 w-0 overflow-hidden" aria-hidden="true">
          <label>
            Empresa
            <input name="empresa" type="text" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <button
          type="submit"
          disabled={estado === "enviando"}
          className="mt-2 rounded-lg bg-accent px-6 py-4 text-lg font-semibold text-foreground transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {estado === "enviando" ? "Enviando..." : textoBotao}
        </button>

        {estado === "erro" && (
          <p className="text-sm leading-relaxed text-foreground">
            Não conseguimos enviar agora. Tenta de novo ou{" "}
            <a
              href={linkWhatsApp(mensagemWhatsApp)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => registrarConversao("whatsapp")}
              className="font-semibold underline decoration-accent decoration-2 underline-offset-4"
            >
              chama no WhatsApp
            </a>
            , que a gente resolve por lá.
          </p>
        )}

        <p className="text-xs leading-relaxed text-muted">
          Seus dados servem só para montar o plano e falar com você. Sem
          disparo de spam. Detalhes na{" "}
          <a
            href="/politica-de-privacidade"
            className="underline underline-offset-2"
          >
            política de privacidade
          </a>
          .
        </p>
      </form>
    </div>
  );
}

type CampoProps = {
  rotulo: string;
  nome: string;
  tipo?: string;
  autoComplete?: string;
  dica?: string;
};

function Campo({ rotulo, nome, tipo = "text", autoComplete, dica }: CampoProps) {
  return (
    // min-w-0 é obrigatório: item de grid tem min-width auto por padrão, e a
    // largura intrínseca do input estoura a coluna (o campo Cidade vazava).
    <label className="grid min-w-0 gap-1.5">
      <span className="text-sm font-medium">{rotulo}</span>
      <input
        name={nome}
        type={tipo}
        required
        autoComplete={autoComplete}
        className="w-full min-w-0 rounded-lg border border-border bg-surface px-3 py-2.5 text-foreground outline-none transition placeholder:text-muted focus:border-foreground"
      />
      {dica && <span className="text-xs text-muted">{dica}</span>}
    </label>
  );
}
