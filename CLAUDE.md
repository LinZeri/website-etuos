@AGENTS.md

# Site da Etuos (etuos.com)

Site institucional da Etuos, agência de marketing digital para brasileiros que empreendem nos Estados Unidos (atende também clientes no Brasil). O site existe em três idiomas: português do Brasil (língua fonte), inglês e espanhol, cada um na própria subpasta (`/pt`, `/en`, `/es`).

## Regras inegociáveis

1. **PROIBIDO usar travessão "—"** em qualquer texto e em qualquer idioma: código, docs, conteúdo do site, artigos do blog, commits, prompts de rotinas agendadas. Use vírgula, dois pontos, parênteses ou reescreva a frase. Antes de finalizar qualquer entrega, confira que não há "—" nos arquivos criados.
2. **Conteúdo em pt-BR, en e es.** O português é a língua fonte e define os tipos; toda página nova nasce nos três idiomas (o TypeScript obriga: `Record<Idioma, ...>` e `satisfies Dicionario`). Copy em inglês e espanhol é escrita para o público daquele idioma (dono de negócio americano, comunidade hispânica), não tradução literal. Termos em inglês no texto em português só quando consagrados (marketing digital, ads, landing page).
3. **Imagens sempre em WebP**, salvas em `public/images/`. Converta antes de adicionar.
4. **Site 100% estático (SSG).** Nunca introduzir SSR, proxy/middleware, API routes, server actions ou qualquer dependência de runtime. Toda rota deve sair pré-renderizada no `next build`. Redirecionamentos declarativos em `next.config.ts` (`redirects()` com `has`/`missing`) são permitidos: viram regras da camada de roteamento da Vercel, sem função em runtime.
5. **Páginas de cidade com conteúdo único**, por cidade e por idioma. Nunca duplicar texto trocando só o nome da cidade, nem traduzir a versão pt para en/es (a pt fala com a comunidade brasileira; a en com o dono de negócio local; a es com a comunidade hispânica).
6. **Idiomas e URLs.** Toda URL vive sob `/pt`, `/en` ou `/es`; a raiz `/` só redireciona (cookie > idioma do navegador > país do IP > inglês). Slugs de entidades existem só em `src/i18n/mapa-slugs.ts` e segmentos de seção só em `src/i18n/rotas.ts`. Toda página indexável passa `alternativas` para `metadataDaPagina` (hreflang recíproco, x-default = en). As landings `/lp/*` são noindex, sem hreflang e fora do sitemap.

## Git e GitHub (obrigatório)

- **PROIBIDO usar a conta GitHub `LinEosCommits` neste projeto, para qualquer coisa.** Sempre usar **LinZeri**.
- **Atenção: esta máquina tem as duas contas logadas no `gh`** (LinZeri e LinEosCommits), e a ativa pode mudar por causa de outros projetos. Nunca presuma qual está ativa.
- Antes de qualquer push ou comando `gh`: conferir com `gh auth status` que a conta ativa é LinZeri; se não for, rodar `gh auth switch --user LinZeri`.
- A regra vale também para automações (rotinas em nuvem do blog-loop, scripts, subagentes): todo commit e push sai como LinZeri, com o e-mail abaixo.
- E-mail de commit deste repo: `127788553+LinZeri@users.noreply.github.com` (já no `git config` local). **Nunca** usar `lin.zeri@eos-e.com` em commits: esse e-mail pertence à conta LinEosCommits no GitHub e faz o commit ser atribuído à conta errada.

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4
- Rota única `src/app/[idioma]/[[...caminho]]/page.tsx`, resolvida pela tabela de rotas de `src/i18n/rotas.ts` e despachada para `src/paginas/*`
- Blog em MDX: arquivos em `content/blog/<idioma>/*.mdx`, lidos por `src/lib/blog.ts` (gray-matter + next-mdx-remote/rsc). Traduções do mesmo artigo compartilham o campo `grupo` no frontmatter
- Deploy: Vercel, repo GitHub `LinZeri/website-etuos`, branch `main`

## Estrutura

- `docs/` documentação do projeto: [escopo](docs/escopo.md), [comunicação](docs/diretrizes-comunicacao.md), [SEO](docs/seo.md) (inclui a seção de SEO internacional), [design](docs/design.md). Leia antes de criar páginas ou conteúdo.
- `src/i18n/` núcleo de idiomas: `idiomas.ts` (lista, cookie, hreflang, og:locale), `mapa-slugs.ts` (slugs por idioma), `rotas.ts` (segmentos, `caminho()`, `resolverCaminho()`, `alternativas()`, `hreflangDe()`), `dicionario/{pt,en,es}.ts` (strings de interface), `useAlternativas.ts` (seletor e banner no cliente)
- `src/data/` fontes de verdade: `site.ts` (domínio, WhatsApp, descrição por idioma), `servicos/{pt,en,es}.ts` (3 serviços), `cidades/{base,pt,en,es}.ts` (10 cidades), `depoimentos.ts`
- `src/paginas/` corpo de cada página, parametrizado por idioma; `src/paginas/conteudo/` prosa longa (Sobre, privacidade, landings) por idioma
- `src/components/` dividido em `layout/`, `sections/`, `campanha/`, `ui/`
- `_references/` logo, identidade visual e referências (fica fora do Git; nunca remover do .gitignore)

## Blog automatizado (blog-loop)

- O blog publica **1 artigo por dia em pt e 1 em en**, por duas rotinas em nuvem que clonam este repo e dão push em `main` (a Vercel publica). Espanhol fica fora do loop por enquanto.
- **pt e en são pautas independentes**, com fila e estratégia próprias e sem `grupo` no frontmatter (logo, sem hreflang entre elas). A versão en nasce da estratégia en, para o dono de negócio americano; nunca é tradução da pt.
- Fontes de verdade: `.blog-loop.config.json` (bloco `idiomas` com os caminhos de cada língua), `docs/blog-strategy.md` e `docs/blog-queue.json` (pt), `docs/blog-strategy-en.md` e `docs/blog-queue-en.json` (en), `docs/blog-dominios-confiaveis.md` (rede liberada na nuvem e critério de citação).
- **Imagens do blog:** `node scripts/gerar-imagem-blog.mjs --slug <slug> --tema "<titulo>"` gera a capa com o Gemini e salva em `public/images/blog/<slug>.webp`. Sempre fotorrealista, sem nenhum texto na imagem. Precisa de `GOOGLE_AI_API_KEY` (local: `.env.local`). O MCP nanobanana só existe nesta máquina, então o script é o caminho oficial, que roda igual aqui e na nuvem.
- As skills e os scripts do loop são vendorizados em `.claude/` (a nuvem não enxerga o `~/.claude` desta máquina). Depois de atualizar as skills globais, rode `.claude/scripts/sync-blog-skills.ps1` e comite.
- `docs/.blog-loop.lock` **fica no git de propósito**: é o lock entre ambientes. Nunca ignorá-lo.

## Desenvolvimento local

- O header `x-vercel-ip-country` só existe na Vercel. No `next dev`, a raiz `/` vai para `/en` a menos que o navegador esteja em pt/es ou o cookie `etuos_idioma` exista. Abra `/pt` direto ou use o seletor uma vez.
- Para testar a regra de país: `npm run build && npm run start` e `curl -I -H "x-vercel-ip-country: BR" http://localhost:3000/`.

## Comunicação (resumo)

Tom próximo e direto: usa "você" (en: "you"; es: "tú"), frases curtas, voz ativa, confiante sem arrogância. Nada de juridiquês ou corporativês. A conversão principal do site é o WhatsApp: todo CTA relevante aponta para ele. Detalhes em `docs/diretrizes-comunicacao.md`.

## Identidade visual (resumo)

Paleta: fundo branco, texto grafite `#0F172A`, secundário `#6B7280`, acento único verde ácido `#A3E635` (nunca com texto branco por cima). Fontes: Anton para títulos (caixa alta), Inter para texto. Tokens em `src/app/globals.css`, detalhes e regras em `docs/design.md`. A Etuos não tem e-mail público: todo contato é via WhatsApp.

## Provas e números autorizados

Só estes números podem aparecer na copy, em qualquer idioma: 10+ anos de marketing digital; mais de meio milhão de dólares (US$ 500 mil+) em anúncios gerenciados; 30 para 300+ franquias em 1 ano e 8 meses (rede de energia solar); +300% de faturamento em clientes atendidos; 13 setores atendidos. Fonte única: `dicionario.numeros` e `dicionario.resultados`. Nunca inventar faixa de investimento, garantia ou nome de cliente. A oferta do site é o **diagnóstico gratuito, sem prazo**; o "plano de ação em 48 horas" existe só nas landings de campanha (`/lp/*`).

## Pendências conhecidas

- Número de WhatsApp americano para as versões `/en` e `/es`: quando existir, trocar em `site.whatsapp.numero.en` e `.es` (`src/data/site.ts`). Até lá, os três idiomas usam o +55 16 99125-2073. Sem e-mail público.
- Depois do deploy das versões em idiomas: atualizar as URLs finais do Google Ads para `/pt/lp/seo` e `/pt/lp/trafego-pago` (os 308 cobrem enquanto isso) e reenviar o sitemap no Search Console.
