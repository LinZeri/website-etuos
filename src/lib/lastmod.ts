import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";

// Data do último commit que tocou um arquivo, em ISO 8601. Usada pelo sitemap
// para dar ao Google um sinal real de "quando essa página mudou por último",
// em vez de omitir lastmod (como antes) ou usar a data do build (que muda
// todo dia sem o conteúdo ter mudado). Sem git disponível ou fora de um
// repositório (alguns ambientes de build), devolve undefined: o Next omite
// o campo, que é opcional.
//
// Clone raso (a Vercel clona com profundidade 10 se VERCEL_DEEP_CLONE não
// estiver ativo): o histórico acaba nos commits listados em .git/shallow, e o
// git atribui a eles todo arquivo mais antigo. Nesse caso a data real é
// desconhecida e o arquivo também fica sem lastmod; arquivos tocados por
// commits mais novos que o limite continuam com a data certa.
const cache = new Map<string, string | undefined>();

function git(comando: string): string {
  return execSync(`git ${comando}`, {
    cwd: process.cwd(),
    stdio: ["ignore", "pipe", "ignore"],
  })
    .toString()
    .trim();
}

let limitesDoClone: Set<string> | undefined;

function commitsLimiteDoClone(): Set<string> {
  if (limitesDoClone) return limitesDoClone;
  limitesDoClone = new Set();
  try {
    const arquivo = git("rev-parse --git-path shallow");
    if (existsSync(arquivo)) {
      for (const linha of readFileSync(arquivo, "utf8").split("\n")) {
        if (linha.trim()) limitesDoClone.add(linha.trim());
      }
    }
  } catch {
    // Sem git: lastmodDoArquivo já devolve undefined.
  }
  return limitesDoClone;
}

export function lastmodDoArquivo(caminhoRelativo: string): string | undefined {
  if (cache.has(caminhoRelativo)) return cache.get(caminhoRelativo);

  let resultado: string | undefined;
  try {
    const [hash, data] = git(
      `log -1 --format=%H%x20%cI -- "${caminhoRelativo}"`,
    ).split(" ");
    resultado =
      hash && data && !commitsLimiteDoClone().has(hash) ? data : undefined;
  } catch {
    resultado = undefined;
  }

  cache.set(caminhoRelativo, resultado);
  return resultado;
}
