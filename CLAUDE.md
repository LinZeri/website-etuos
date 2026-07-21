@AGENTS.md

# Site da Etuos (etuos.com)

Site institucional da Etuos, agência de marketing digital para brasileiros que empreendem nos Estados Unidos (atende também clientes no Brasil). Todo o site é em português do Brasil.

## Regras inegociáveis

1. **PROIBIDO usar travessão "—"** em qualquer texto: código, docs, conteúdo do site, artigos do blog, commits. Use vírgula, dois pontos, parênteses ou reescreva a frase. Antes de finalizar qualquer entrega, confira que não há "—" nos arquivos criados.
2. **Todo conteúdo em português do Brasil.** Termos em inglês só quando consagrados no mercado (marketing digital, ads, landing page).
3. **Imagens sempre em WebP**, salvas em `public/images/`. Converta antes de adicionar.
4. **Site 100% estático (SSG).** Nunca introduzir SSR, API routes, server actions ou qualquer dependência de runtime. Toda rota deve sair pré-renderizada no `next build`.
5. **Páginas de cidade com conteúdo único.** Nunca duplicar texto trocando só o nome da cidade.

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4
- Blog em MDX: arquivos em `content/blog/*.mdx`, lidos por `src/lib/blog.ts` (gray-matter + next-mdx-remote/rsc)
- Deploy: Vercel, repo GitHub `LinZeri/website-etuos`, branch `main`

## Estrutura

- `docs/` documentação do projeto: [escopo](docs/escopo.md), [comunicação](docs/diretrizes-comunicacao.md), [SEO](docs/seo.md), [design](docs/design.md). Leia antes de criar páginas ou conteúdo.
- `src/data/` fontes de verdade: `site.ts` (domínio, WhatsApp, e-mail), `cidades.ts` (10 cidades), `servicos.ts` (3 serviços)
- `src/components/` dividido em `layout/`, `sections/`, `ui/`
- `_references/` logo, identidade visual e referências (fica fora do Git; nunca remover do .gitignore)

## Comunicação (resumo)

Tom próximo e direto: usa "você", frases curtas, voz ativa, confiante sem arrogância. Nada de juridiquês ou corporativês. A conversão principal do site é o WhatsApp: todo CTA relevante aponta para ele. Detalhes em `docs/diretrizes-comunicacao.md`.

## Identidade visual (resumo)

Paleta: fundo branco, texto grafite `#0F172A`, secundário `#6B7280`, acento único verde ácido `#A3E635` (nunca com texto branco por cima). Fontes: Anton para títulos (caixa alta), Inter para texto. Tokens em `src/app/globals.css`, detalhes e regras em `docs/design.md`. A Etuos não tem e-mail público: todo contato é via WhatsApp.

## Pendências conhecidas

- Nenhuma no momento. Contatos oficiais: WhatsApp +55 16 99125-2073 (em `src/data/site.ts`), sem e-mail público.
