import type { MetadataRoute } from "next";
import { cidades } from "@/data/cidades";
import { servicos } from "@/data/servicos";
import { getPosts } from "@/lib/blog";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const estaticas = ["", "/sobre", "/servicos", "/blog", "/contato"].map(
    (rota) => ({
      url: `${site.dominio}${rota}`,
      changeFrequency: "monthly" as const,
      priority: rota === "" ? 1 : 0.8,
    }),
  );

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

  return [...estaticas, ...rotasServicos, ...rotasCidades, ...rotasPosts];
}
