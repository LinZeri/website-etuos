import { IDIOMAS, ehIdioma } from "@/i18n/idiomas";
import { TAMANHO_OG } from "@/lib/metadata";
import { criarImagemOg } from "@/lib/og-image";

// Uma imagem por idioma, gerada no build: /pt/opengraph-image, /en/... O alt
// localizado é declarado por página em src/lib/metadata.ts.
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
