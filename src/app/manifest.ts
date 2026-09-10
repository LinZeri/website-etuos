import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Manifest minimo: o site nao e um app instalavel, mas o arquivo evita o 404
// que navegadores e ferramentas de auditoria pedem por padrao e reforca a
// marca (nome, cor de tema) quando alguem adiciona o site a tela inicial.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.nome} | Marketing digital`,
    short_name: site.nome,
    description: site.descricao.pt,
    start_url: "/pt",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
