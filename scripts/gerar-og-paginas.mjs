// Compõe as imagens de preview (og:image) das páginas de serviço e de cidade a
// partir das fotos geradas no nanobanana: recorte 1200x630, gradiente grafite,
// logo branco e barra de acento verde. Sem texto na imagem, então a mesma
// arte serve para pt, en e es (o título vem do og:title da página).
//
// Uso: node scripts/gerar-og-paginas.mjs <pasta-com-as-fotos>
// Cada foto é <arquivo>.png; o mapa abaixo liga o arquivo ao id da entidade.
// Saída: public/images/og/<colecao>-<id>.jpg
//
// O og:image sai em JPEG (e não WebP) pelo mesmo motivo do og padrão em PNG
// (src/lib/og-image.tsx): o WhatsApp não renderiza WebP de forma confiável.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ORIGEM = process.argv[2];
if (!ORIGEM) {
  console.error("Uso: node scripts/gerar-og-paginas.mjs <pasta-com-as-fotos>");
  process.exit(1);
}

const SAIDA = path.join(process.cwd(), "public", "images", "og");
const L = 1200;
const A = 630;

// arquivo da foto -> [colecao, id]
const FOTOS = {
  "paid-ads": ["servico", "trafego-pago"],
  seo: ["servico", "seo"],
  "website-design": ["servico", "criacao-de-sites"],
  miami: ["cidade", "miami"],
  orlando: ["cidade", "orlando"],
  "fort-lauderdale": ["cidade", "fort-lauderdale"],
  "pompano-beach": ["cidade", "pompano-beach"],
  boston: ["cidade", "boston"],
  framingham: ["cidade", "framingham"],
  newark: ["cidade", "newark"],
  danbury: ["cidade", "danbury"],
  atlanta: ["cidade", "atlanta"],
  houston: ["cidade", "houston"],
};

const logoSvg = fs
  .readFileSync(path.join(process.cwd(), "public", "images", "logo-etuos.svg"), "utf8")
  .replaceAll("#0f172a", "#ffffff");
const logo = await sharp(Buffer.from(logoSvg), { density: 300 })
  .resize({ height: 64 })
  .png()
  .toBuffer();

const gradiente = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${L}" height="${A}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0F172A" stop-opacity="0.72"/>
        <stop offset="0.38" stop-color="#0F172A" stop-opacity="0.12"/>
        <stop offset="1" stop-color="#0F172A" stop-opacity="0.55"/>
      </linearGradient>
    </defs>
    <rect width="${L}" height="${A}" fill="url(#g)"/>
    <rect x="0" y="${A - 14}" width="${L}" height="14" fill="#A3E635"/>
  </svg>`,
);

fs.mkdirSync(SAIDA, { recursive: true });

for (const [arquivo, [colecao, id]] of Object.entries(FOTOS)) {
  const origem = path.join(ORIGEM, `${arquivo}.png`);
  const destino = path.join(SAIDA, `${colecao}-${id}.jpg`);
  await sharp(origem)
    .resize(L, A, { fit: "cover", position: "centre" })
    .composite([
      { input: gradiente, top: 0, left: 0 },
      { input: logo, top: 44, left: 60 },
    ])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(destino);
  console.log(`${colecao}-${id}.jpg`, (fs.statSync(destino).size / 1024).toFixed(0) + " KB");
}
