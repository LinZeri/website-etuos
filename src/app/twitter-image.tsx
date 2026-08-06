import { ALT_OG, TAMANHO_OG } from "@/lib/metadata";
import { criarImagemOg } from "@/lib/og-image";

// Mesma arte do Open Graph, servida também como twitter:image para o card
// grande (summary_large_image, declarado em src/app/layout.tsx).
export const alt = ALT_OG;
export const size = TAMANHO_OG;
export const contentType = "image/png";

export default async function Image() {
  return criarImagemOg();
}
