# Site da Etuos

Site institucional da [Etuos](https://etuos.com), agência de marketing digital para brasileiros que empreendem nos Estados Unidos. O site existe em três idiomas: `/pt` (português, língua fonte), `/en` (inglês) e `/es` (espanhol).

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- 100% estático (SSG), rota única `src/app/[idioma]/[[...caminho]]` guiada pela tabela de rotas de `src/i18n/rotas.ts`
- Blog em MDX, um diretório por idioma (`content/blog/pt`, `content/blog/en`, `content/blog/es`)
- Deploy na Vercel

## Rodando localmente

```bash
npm install
npm run dev
```

A raiz `/` redireciona por cookie, idioma do navegador e país do IP. O header de país (`x-vercel-ip-country`) só existe na Vercel, então em desenvolvimento a raiz vai para `/en` a menos que o navegador esteja em português ou espanhol. Abra `/pt` direto ou use o seletor de idioma no menu, que grava o cookie.

Para testar as regras de país:

```bash
npm run build && npm run start
curl -I -H "x-vercel-ip-country: BR" http://localhost:3000/
```

## Documentação

Antes de mexer no projeto, leia:

- [CLAUDE.md](CLAUDE.md): regras do projeto
- [docs/escopo.md](docs/escopo.md): escopo e mapa do site
- [docs/diretrizes-comunicacao.md](docs/diretrizes-comunicacao.md): tom de voz e regras de escrita nos três idiomas
- [docs/seo.md](docs/seo.md): estratégia de SEO, incluindo SEO internacional (hreflang, slugs, redirect)
- [docs/design.md](docs/design.md): diretrizes de design
