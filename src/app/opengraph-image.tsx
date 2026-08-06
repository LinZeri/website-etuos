import { ALT_OG, TAMANHO_OG } from "@/lib/metadata";
import { criarImagemOg } from "@/lib/og-image";

// Vale para todas as rotas do site: qualquer página compartilhada no WhatsApp
// passa a aparecer com imagem, título e descrição.
export const alt = ALT_OG;
export const size = TAMANHO_OG;
export const contentType = "image/png";

export default async function Image() {
  return criarImagemOg();
}
