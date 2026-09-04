import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IDIOMAS, ehIdioma, type Idioma } from "@/i18n/idiomas";
import { caminho, paginasEstaticas, resolverCaminho } from "@/i18n/rotas";
import { todosOsPostsParaRotas } from "@/lib/blog";
import { metadataDe, renderizar } from "@/paginas";

// Rota única do site. O caminho depois do idioma é resolvido pela tabela de
// rotas (src/i18n/rotas.ts), que também alimenta hreflang, sitemap e seletor
// de idioma: as quatro coisas não têm como divergir. Tudo é pré-renderizado
// no build; qualquer URL fora da lista responde 404.

type Props = {
  params: Promise<{ idioma: string; caminho?: string[] }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  const segmentosDe = (idioma: Idioma, rota: string) =>
    rota.split("/").filter(Boolean).slice(1); // remove o idioma

  const estaticas = IDIOMAS.flatMap((idioma) =>
    paginasEstaticas().map((pagina) => ({
      idioma,
      caminho: segmentosDe(idioma, caminho(idioma, pagina)),
    })),
  );

  const posts = todosOsPostsParaRotas().map(({ idioma, slug }) => ({
    idioma,
    caminho: segmentosDe(idioma, caminho(idioma, { tipo: "post", slug })),
  }));

  return [...estaticas, ...posts];
}

async function resolver({ params }: Props) {
  const { idioma, caminho: segmentos } = await params;
  if (!ehIdioma(idioma)) return undefined;
  const pagina = resolverCaminho(idioma, segmentos ?? []);
  return pagina ? { idioma, pagina } : undefined;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const alvo = await resolver(props);
  if (!alvo) return {};
  return metadataDe(alvo.idioma, alvo.pagina) ?? {};
}

export default async function Pagina(props: Props) {
  const alvo = await resolver(props);
  if (!alvo) notFound();
  const conteudo = renderizar(alvo.idioma, alvo.pagina);
  if (!conteudo) notFound();
  return conteudo;
}
