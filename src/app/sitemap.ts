import type { MetadataRoute } from "next";
import { cidades } from "@/data/cidades";
import { servicos } from "@/data/servicos";
import { getPosts } from "@/lib/blog";
import { site } from "@/data/site";

// As landings de campanha (/lp/*) ficam fora do sitemap de propósito: são
// noindex para não competirem com as páginas de serviço nas buscas orgânicas.
export default function sitemap(): MetadataRoute.Sitemap {
  const estaticas = [
    "",
    "/eua",
    "/brasil",
    "/sobre",
    "/servicos",
    "/blog",
    "/contato",
  ].map((rota) => ({
    url: `${site.dominio}${rota}`,
    changeFrequency: "monthly" as const,
    priority: rota === "" ? 1 : rota === "/eua" || rota === "/brasil" ? 0.9 : 0.8,
  }));

  const politica = {
    url: `${site.dominio}/politica-de-privacidade`,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  };

  const rotasServicos = servicos.map((servico) => ({
    url: `${site.dominio}/servicos/${servico.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const rotasCidades = cidades.map((cidade) => ({
    url: `${site.dominio}/cidades/${cidade.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const rotasPosts = getPosts().map((post) => ({
    url: `${site.dominio}/blog/${post.slug}`,
    lastModified: post.frontmatter.data,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    ...estaticas,
    ...rotasServicos,
    ...rotasCidades,
    ...rotasPosts,
    politica,
  ];
}
