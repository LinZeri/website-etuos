import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";
import { TAMANHO_OG } from "@/lib/metadata";

// Imagem de preview usada por WhatsApp, Facebook, LinkedIn e X. Gerada no
// build, uma por idioma (nenhuma rota vira dinâmica) e servida como PNG,
// porque o WhatsApp não renderiza WebP de forma confiável em todos os aparelhos.

async function logoBrancoDataUri(): Promise<string> {
  const svg = await readFile(
    join(process.cwd(), "public", "images", "logo-etuos.svg"),
    "utf8",
  );
  // O logo original é grafite. Sobre o fundo escuro do card, vira branco.
  const branco = svg.replaceAll("#0f172a", "#ffffff");
  return `data:image/svg+xml;base64,${Buffer.from(branco).toString("base64")}`;
}

export async function criarImagemOg(idioma: Idioma) {
  const logo = await logoBrancoDataUri();
  const t = dicionario(idioma).og;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0F172A",
          color: "#FFFFFF",
          padding: "68px 76px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={264} height={87} alt="Etuos" />

        {/* Barra vertical de acento, o mesmo recurso usado nas seções do site */}
        <div
          style={{
            display: "flex",
            maxWidth: 960,
            borderLeft: "10px solid #A3E635",
            paddingLeft: 36,
            fontSize: 62,
            lineHeight: 1.14,
            letterSpacing: -1,
          }}
        >
          {t.titulo}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
            color: "#9CA3AF",
          }}
        >
          <div style={{ display: "flex" }}>{t.subtitulo}</div>
          <div style={{ display: "flex", color: "#A3E635" }}>etuos.com</div>
        </div>
      </div>
    ),
    TAMANHO_OG,
  );
}
