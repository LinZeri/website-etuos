import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const { lastmodDoArquivo } = await import(pathToFileURL(resolve(process.argv[2])).href);
for (const f of [
  "src/i18n/dicionario/pt.ts",
  "src/data/cidades/pt.ts",
  "src/paginas/conteudo/sobre/es.ts",
  "content/blog/en/what-to-do-with-leads-from-google-ads.mdx",
  ".github/workflows/deploy-diario.yml",
  "src/app/[idioma]/layout.tsx",
])
  console.log(f.padEnd(62), lastmodDoArquivo(f));
