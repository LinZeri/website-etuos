#!/usr/bin/env node
/**
 * Gera a imagem de capa de um artigo do blog com o Gemini e salva em
 * public/images/blog/<slug>.webp (1200x630, WebP, como manda o CLAUDE.md).
 *
 * Por que um script proprio, e nao o MCP nanobanana: o nanobanana e um servidor
 * MCP stdio local, que nao existe dentro das rotinas em nuvem. Este script fala
 * direto com a mesma API (Gemini) usando a mesma chave, entao roda igual aqui e
 * la. O prompt e sempre fotorrealista e proibe qualquer texto na imagem.
 *
 * Uso:
 *   node scripts/gerar-imagem-blog.mjs --slug <slug> --tema "<titulo do artigo>" \
 *     [--contexto "cena desejada"] [--idioma pt|en] [--forcar]
 *
 * Chave: GOOGLE_AI_API_KEY no ambiente (local: .env.local; nuvem: variavel de
 * ambiente do environment da rotina). Saida JSON na ultima linha do stdout.
 */

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const API = "https://generativelanguage.googleapis.com/v1beta/models";
const MODELOS = [
  process.env.NANOBANANA_MODEL,
  "gemini-3.1-flash-image-preview",
  "gemini-3.1-flash-image",
  "gemini-3-pro-image",
].filter(Boolean);

const LARGURA = 1200;
const ALTURA = 630;

function args() {
  const a = process.argv.slice(2);
  const out = {};
  for (let i = 0; i < a.length; i += 1) {
    if (!a[i].startsWith("--")) continue;
    const chave = a[i].slice(2);
    const valor = a[i + 1] && !a[i + 1].startsWith("--") ? a[(i += 1)] : "true";
    out[chave] = valor;
  }
  return out;
}

function carregarEnvLocal() {
  if (process.env.GOOGLE_AI_API_KEY) return;
  const arquivo = path.join(process.cwd(), ".env.local");
  if (!fs.existsSync(arquivo)) return;
  for (const linha of fs.readFileSync(arquivo, "utf8").split(/\r?\n/)) {
    const m = linha.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) {
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
}

/**
 * Prompt da imagem. Regras fixas: foto real, nunca ilustracao, nunca texto.
 * Texto gerado por IA sai errado e ainda quebraria a regra de idioma do site,
 * entao a proibicao aparece de varias formas (letras, placas, interface, marca).
 */
function montarPrompt({ tema, contexto, idioma }) {
  const cena =
    contexto && contexto !== "true"
      ? contexto
      : `a real-life scene connected to the topic "${tema}"`;
  const mercado =
    idioma === "en"
      ? "Setting: a small business in the United States."
      : "Setting: a Brazilian-owned small business in the United States.";
  return [
    "Photorealistic editorial photograph, shot on a full-frame camera with a 35mm lens.",
    `Subject: ${cena}.`,
    mercado,
    "Natural available light, shallow depth of field, candid documentary framing, true-to-life skin tones and colors.",
    "Composition: 16:9 horizontal, clean and uncluttered, room for a headline overlay on one side.",
    "Absolutely no text of any kind in the image: no words, letters, numbers, captions, watermarks, logos, brand names, signage, posters, screen interfaces or readable documents.",
    "No illustration, no 3D render, no digital art, no collage, no infographic, no charts, no AI-looking gloss.",
    "Looks like a real photo from a business magazine.",
  ].join(" ");
}

async function gerar(prompt, chave) {
  let ultimoErro = "nenhum modelo tentado";
  for (const modelo of MODELOS) {
    try {
      const resposta = await fetch(
        `${API}/${modelo}:generateContent?key=${encodeURIComponent(chave)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: prompt }] }],
            generationConfig: {
              responseModalities: ["IMAGE"],
              imageConfig: { aspectRatio: "16:9" },
            },
          }),
        },
      );
      if (!resposta.ok) {
        ultimoErro = `${modelo}: HTTP ${resposta.status} ${(await resposta.text()).slice(0, 300)}`;
        continue;
      }
      const dados = await resposta.json();
      const partes = dados?.candidates?.[0]?.content?.parts ?? [];
      const imagem = partes.find((p) => p.inlineData?.data)?.inlineData;
      if (!imagem) {
        ultimoErro = `${modelo}: resposta sem imagem`;
        continue;
      }
      return { bytes: Buffer.from(imagem.data, "base64"), modelo };
    } catch (erro) {
      ultimoErro = `${modelo}: ${erro.message}`;
    }
  }
  throw new Error(`falha ao gerar imagem (${ultimoErro})`);
}

async function main() {
  const a = args();
  if (!a.slug || !a.tema) {
    console.error(
      'uso: node scripts/gerar-imagem-blog.mjs --slug <slug> --tema "<titulo>" [--contexto "<cena>"] [--idioma pt|en] [--forcar]',
    );
    process.exit(2);
  }

  carregarEnvLocal();
  const chave = process.env.GOOGLE_AI_API_KEY;
  if (!chave) {
    console.error(
      "GOOGLE_AI_API_KEY ausente. Local: coloque em .env.local. Nuvem: variavel de ambiente do environment da rotina.",
    );
    process.exit(3);
  }

  const destino = path.join(process.cwd(), "public", "images", "blog", `${a.slug}.webp`);
  const publico = `/images/blog/${a.slug}.webp`;
  if (fs.existsSync(destino) && !a.forcar) {
    console.log(JSON.stringify({ ok: true, path: publico, reused: true }));
    return;
  }

  const prompt = montarPrompt({ tema: a.tema, contexto: a.contexto, idioma: a.idioma || "pt" });
  const { bytes, modelo } = await gerar(prompt, chave);

  fs.mkdirSync(path.dirname(destino), { recursive: true });
  await sharp(bytes)
    .resize(LARGURA, ALTURA, { fit: "cover", position: "attention" })
    .webp({ quality: 82 })
    .toFile(destino);

  const { size } = fs.statSync(destino);
  console.log(
    JSON.stringify({ ok: true, path: publico, arquivo: destino, bytes: size, modelo, prompt }),
  );
}

main().catch((erro) => {
  console.error(erro.message);
  console.log(JSON.stringify({ ok: false, error: erro.message }));
  process.exit(1);
});
