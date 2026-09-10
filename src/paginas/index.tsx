import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { Idioma } from "@/i18n/idiomas";
import type { Pagina } from "@/i18n/rotas";
import { metadataBlog, PaginaBlog } from "./blog";
import { metadataCidade, PaginaCidade } from "./cidade";
import { metadataCidadesHub, PaginaCidadesHub } from "./cidades";
import { metadataContato, PaginaContato } from "./contato";
import { metadataHome, PaginaHome } from "./home";
import { metadataLp, PaginaLp } from "./lp";
import { metadataPais, PaginaPais } from "./pais";
import { buscarPost, metadataPost, PaginaPost } from "./post";
import { metadataPrivacidade, PaginaPrivacidade } from "./privacidade";
import { metadataServico, PaginaServico } from "./servico";
import { metadataServicos, PaginaServicos } from "./servicos";
import { metadataSobre, PaginaSobre } from "./sobre";

// Despacho da rota catch-all (src/app/[idioma]/[[...caminho]]/page.tsx) para
// o módulo de cada tipo de página. Os switches são exaustivos: um tipo novo em
// src/i18n/rotas.ts sem caso aqui é erro de compilação.

// Só o post pode não existir (o slug vem do sistema de arquivos, não da tabela
// de rotas). Devolve undefined para a rota responder 404.
export function metadataDe(idioma: Idioma, pagina: Pagina): Metadata | undefined {
  switch (pagina.tipo) {
    case "home":
      return metadataHome(idioma);
    case "eua":
    case "brasil":
      return metadataPais(idioma, pagina.tipo);
    case "sobre":
      return metadataSobre(idioma);
    case "servicos":
      return metadataServicos(idioma);
    case "servico":
      return metadataServico(idioma, pagina.id);
    case "cidades":
      return metadataCidadesHub(idioma);
    case "cidade":
      return metadataCidade(idioma, pagina.id);
    case "blog":
      return metadataBlog(idioma);
    case "post": {
      const post = buscarPost(idioma, pagina.slug);
      return post ? metadataPost(post) : undefined;
    }
    case "contato":
      return metadataContato(idioma);
    case "privacidade":
      return metadataPrivacidade(idioma);
    case "lp":
      return metadataLp(idioma, pagina.id);
  }
}

export function renderizar(idioma: Idioma, pagina: Pagina): ReactNode | undefined {
  switch (pagina.tipo) {
    case "home":
      return <PaginaHome idioma={idioma} />;
    case "eua":
    case "brasil":
      return <PaginaPais idioma={idioma} tipo={pagina.tipo} />;
    case "sobre":
      return <PaginaSobre idioma={idioma} />;
    case "servicos":
      return <PaginaServicos idioma={idioma} />;
    case "servico":
      return <PaginaServico idioma={idioma} id={pagina.id} />;
    case "cidades":
      return <PaginaCidadesHub idioma={idioma} />;
    case "cidade":
      return <PaginaCidade idioma={idioma} id={pagina.id} />;
    case "blog":
      return <PaginaBlog idioma={idioma} />;
    case "post": {
      const post = buscarPost(idioma, pagina.slug);
      return post ? <PaginaPost post={post} /> : undefined;
    }
    case "contato":
      return <PaginaContato idioma={idioma} />;
    case "privacidade":
      return <PaginaPrivacidade idioma={idioma} />;
    case "lp":
      return <PaginaLp idioma={idioma} id={pagina.id} />;
  }
}
