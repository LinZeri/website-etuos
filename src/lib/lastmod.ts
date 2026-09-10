import { execSync } from "node:child_process";

// Data do último commit que tocou um arquivo, em ISO 8601. Usada pelo sitemap
// para dar ao Google um sinal real de "quando essa página mudou por último",
// em vez de omitir lastmod (como antes) ou usar a data do build (que muda
// todo dia sem o conteúdo ter mudado). Sem git disponível ou fora de um
// repositório (alguns ambientes de build), devolve undefined: o Next omite
// o campo, que é opcional.
const cache = new Map<string, string | undefined>();

export function lastmodDoArquivo(caminhoRelativo: string): string | undefined {
  if (cache.has(caminhoRelativo)) return cache.get(caminhoRelativo);

  let resultado: string | undefined;
  try {
    const saida = execSync(`git log -1 --format=%cI -- "${caminhoRelativo}"`, {
      cwd: process.cwd(),
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    resultado = saida || undefined;
  } catch {
    resultado = undefined;
  }

  cache.set(caminhoRelativo, resultado);
  return resultado;
}
