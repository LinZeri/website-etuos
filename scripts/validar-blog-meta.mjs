// Confere o frontmatter dos posts contra os limites de SERP. Roda no prebuild,
// então o blog-loop (verifyCommand = npm run build) e a Vercel falham se um
// post sair com título ou descrição que o Google trunca.
//
// Regras:
// - O <title> final é "<metaTitulo ?? titulo> | Etuos". O sufixo tem 8
//   caracteres, então o texto precisa ter no máximo 52 para fechar em 60.
//   Se o titulo passar de 52, o post precisa declarar metaTitulo.
// - descricao com no máximo 160 caracteres.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const LIMITE_TITULO = 52;
const LIMITE_DESCRICAO = 160;
const RAIZ = path.join(process.cwd(), "content", "blog");

const erros = [];

for (const idioma of fs.existsSync(RAIZ) ? fs.readdirSync(RAIZ) : []) {
  const dir = path.join(RAIZ, idioma);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const arquivo of fs.readdirSync(dir)) {
    if (!arquivo.endsWith(".mdx")) continue;
    const rotulo = `${idioma}/${arquivo}`;
    const { data } = matter(fs.readFileSync(path.join(dir, arquivo), "utf8"));
    const titulo = data.metaTitulo ?? data.titulo ?? "";
    const descricao = data.descricao ?? "";
    if (titulo.length > LIMITE_TITULO) {
      erros.push(
        `${rotulo}: título do <title> com ${titulo.length} caracteres (máx. ${LIMITE_TITULO}). Declare metaTitulo curto no frontmatter.`,
      );
    }
    if (descricao.length > LIMITE_DESCRICAO) {
      erros.push(
        `${rotulo}: descricao com ${descricao.length} caracteres (máx. ${LIMITE_DESCRICAO}).`,
      );
    }
  }
}

if (erros.length > 0) {
  console.error("Frontmatter do blog fora dos limites de SERP:\n" + erros.join("\n"));
  process.exit(1);
}
console.log("Frontmatter do blog dentro dos limites de SERP.");
