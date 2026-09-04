import { IDIOMAS, ehIdioma } from "@/i18n/idiomas";
import { TAMANHO_OG } from "@/lib/metadata";
import { criarImagemOg } from "@/lib/og-image";

// Mesma arte do Open Graph, servida também como twitter:image para o card
// grande (summary_large_image, declarado no layout).
export const size = TAMANHO_OG;
export const contentType = "image/png";

export function generateStaticParams() {
  return IDIOMAS.map((idioma) => ({ idioma }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ idioma: string }>;
}) {
  const { idioma } = await params;
  return criarImagemOg(ehIdioma(idioma) ? idioma : "en");
}
