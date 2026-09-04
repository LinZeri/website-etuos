# Estratégia de SEO do site da Etuos

## Visão geral

O site inteiro é otimizado para SEO, com papéis diferentes por tipo de página:

- **Home e páginas de serviço:** keywords comerciais (fundo de funil). A Home prioriza conversão, mas mantém on-page impecável.
- **Páginas de cidade:** SEO local, o principal diferencial competitivo do site.
- **Blog:** topo e meio de funil, construindo autoridade no tema.

O site existe em três idiomas (pt, en, es), cada um mirando um público e um mercado de busca diferentes. Ver a seção "SEO internacional" abaixo.

## Keywords por página

| Página | pt (Brasil e brasileiros nos EUA) | en (dono de negócio nos EUA) | es (comunidade hispânica nos EUA) |
| --- | --- | --- | --- |
| Home | marketing digital para brasileiros nos EUA | digital marketing agency for small business | agencia de marketing digital para negocios |
| Tráfego pago | gestor de tráfego pago para brasileiros nos EUA | Google Ads management for small business | manejo de Google Ads para negocios |
| SEO | agência de SEO para brasileiros nos EUA | local SEO agency | agencia de SEO local |
| Criação de sites | criação de sites para brasileiros nos EUA | small business website design | diseño de sitios web para negocios |
| Cidade (ex: Miami) | marketing digital em Miami / agência brasileira em Miami | digital marketing agency Miami | agencia de marketing digital en Miami |
| Blog | pautas de cauda longa: como divulgar meu negócio nos EUA, como anunciar no Google em inglês, etc. | a definir por pauta | a definir por pauta |

Antes de escrever o conteúdo definitivo, validar volumes e variações com pesquisa de palavras-chave em cada idioma.

## Padrões on-page

- **Title:** até 60 caracteres, keyword no início, marca no fim. Template: `{Assunto} | Etuos`
- **Description:** 140 a 160 caracteres, com benefício e chamada
- **H1:** um por página, contém a keyword principal
- **Headings:** hierarquia estrita (H1 > H2 > H3), sem pular níveis
- **Imagens:** sempre WebP, com `alt` descritivo no idioma da página
- **Links internos:** toda página aponta para serviços e cidades relevantes, sempre no mesmo idioma (`caminho(idioma, ...)`); artigos do blog linkam para páginas de serviço

## SEO internacional

### Arquitetura

- Um domínio, subpastas por idioma: `etuos.com/pt/...`, `/en/...`, `/es/...`. Subpastas herdam a autoridade do domínio (o Google recomenda para este caso; domínios separados partiriam do zero).
- A raiz `/` não tem conteúdo e não entra no sitemap: ela só redireciona (regras em `next.config.ts`, aplicadas na borda da Vercel, sem função em runtime). Prioridade: cookie `etuos_idioma` > idioma do navegador (`Accept-Language` começando por pt ou es) > país do IP (`x-vercel-ip-country`: BR, PT, AO, MZ, CV para pt; países hispânicos para es) > inglês. Status 307.
- Páginas internas nunca redirecionam por idioma. Motivo: o Googlebot rastreia com IP dos EUA e sem `Accept-Language`; redirecionar URL interna esconderia versões do índice. O inglês é também o destino do `x-default`, então o robô e o usuário sem preferência recebem a mesma coisa.
- As URLs antigas (só em português, sem prefixo) recebem 308 para `/pt/...`, preservando query string (gclid, UTMs).

### Slugs traduzidos

| Página | pt | en | es |
| --- | --- | --- | --- |
| Hub EUA | `/pt/eua` | `/en/usa` | `/es/estados-unidos` |
| Hub Brasil | `/pt/brasil` | `/en/brazil` | `/es/brasil` |
| Sobre | `/pt/sobre` | `/en/about` | `/es/sobre-nosotros` |
| Serviços | `/pt/servicos` | `/en/services` | `/es/servicios` |
| Tráfego pago | `/pt/servicos/trafego-pago` | `/en/services/paid-ads` | `/es/servicios/trafico-pagado` |
| SEO | `/pt/servicos/seo` | `/en/services/seo` | `/es/servicios/seo` |
| Sites | `/pt/servicos/criacao-de-sites` | `/en/services/website-design` | `/es/servicios/creacion-de-sitios-web` |
| Cidade | `/pt/cidades/miami` | `/en/cities/miami` | `/es/ciudades/miami` |
| Blog | `/pt/blog/<slug>` | `/en/blog/<slug-en>` | `/es/blog/<slug-es>` |
| Contato | `/pt/contato` | `/en/contact` | `/es/contacto` |
| Privacidade | `/pt/politica-de-privacidade` | `/en/privacy-policy` | `/es/politica-de-privacidad` |
| Landings (noindex) | `/pt/lp/seo`, `/pt/lp/trafego-pago` | `/en/lp/seo`, `/en/lp/paid-ads` | `/es/lp/seo`, `/es/lp/trafico-pagado` |

Segmentos ficam em `src/i18n/rotas.ts` (`SEGMENTOS`) e slugs de entidade em `src/i18n/mapa-slugs.ts`. Nunca escrever uma URL à mão: usar `caminho(idioma, pagina)`.

### Sinais por página

- **hreflang:** `metadataDaPagina` recebe `alternativas` (URLs da mesma página nos idiomas em que ela existe) e emite `<link rel="alternate" hreflang>` autorreferente e recíproco, com `x-default` apontando para a versão em inglês. Com um idioma só (post sem tradução), nada é emitido. Códigos: `pt-BR`, `en`, `es`.
- **Canonical:** sempre a própria URL, no próprio idioma.
- **`<html lang>`:** `pt-BR`, `en` ou `es`, definido no layout raiz (`src/app/[idioma]/layout.tsx`).
- **Open Graph:** `og:locale` (`pt_BR`, `en_US`, `es_ES`) mais `og:locale:alternate` dos outros idiomas; imagem OG gerada por idioma em `/<idioma>/opengraph-image`.
- **JSON-LD:** `Organization` é uma entidade só (`@id` fixo) nos três idiomas; `WebSite`, `Service`, `BlogPosting` e `BreadcrumbList` têm `url` e `inLanguage` por idioma.
- **Sitemap:** uma entrada por página e por idioma, com `xhtml:link` das alternativas. Raiz e landings ficam fora.
- **Landings `/lp/*`:** `noindex, nofollow`, sem hreflang, fora do sitemap.

### Blog multilíngue

- Um diretório por idioma: `content/blog/pt`, `content/blog/en`, `content/blog/es`. O blog-loop grava em `content/blog/pt`.
- Traduções do mesmo artigo declaram o mesmo `grupo` no frontmatter (o valor é o slug do post em português). Sem `grupo`, o post é independente e não recebe hreflang.
- Slug traduzido é livre: o `grupo` é o que liga as versões.

### Como adicionar

- **Uma página nova:** adicionar o tipo em `Pagina` e o segmento em `SEGMENTOS` (`src/i18n/rotas.ts`), o módulo em `src/paginas/`, o caso no despacho de `src/paginas/index.tsx` e as strings no dicionário dos três idiomas. O TypeScript aponta o que faltou.
- **Um serviço ou cidade:** id e slugs em `src/i18n/mapa-slugs.ts`, copy em `src/data/<entidade>/{pt,en,es}.ts`. Sem os três idiomas o build não passa.
- **Um idioma:** incluir em `IDIOMAS` (`src/i18n/idiomas.ts`) e seguir os erros de compilação: segmentos, slugs, dicionário, dados, conteúdo, textos OG e as regras de redirect em `next.config.ts`.

### Verificação depois do build

```bash
npm run build
grep -io '<link rel="alternate" hreflang="[^"]*" href="[^"]*"' .next/server/app/en/services/paid-ads.html
grep -c "<loc>" .next/server/app/sitemap.xml.body
npm run start
curl -I -H "x-vercel-ip-country: BR" http://localhost:3000/
curl -I -H "accept-language: pt-BR" -H "x-vercel-ip-country: US" http://localhost:3000/
curl -I --cookie "etuos_idioma=en" -H "x-vercel-ip-country: BR" http://localhost:3000/
curl -I http://localhost:3000/servicos/seo
```

Validadores externos: Rich Results Test (uma página por tipo e idioma), teste de hreflang da Merkle (technicalseo.com), Facebook Sharing Debugger nas homes. No Search Console, reenviar o sitemap e acompanhar a migração das URLs antigas para "Página com redirecionamento".

## Técnico

- `src/app/sitemap.ts` gera o sitemap com todas as rotas indexáveis nos três idiomas (estáticas, serviços, cidades e posts), com alternates
- `src/app/robots.ts` libera tudo e aponta o sitemap
- `metadataBase` configurado para `https://etuos.com` no layout raiz
- Open Graph em todas as páginas (via `metadataDaPagina` em `src/lib/metadata.ts`)
- JSON-LD em `src/lib/schema.ts`: `Organization` e `WebSite` no layout, `Service` e `FAQPage` nos serviços, `FAQPage` nas cidades, `BlogPosting` nos posts, `BreadcrumbList` nas páginas internas
- Site 100% estático garante desempenho (Core Web Vitals)

## Páginas de cidade

Regras de conteúdo para ranquear de verdade:

1. Conteúdo único por cidade e por idioma. Cada idioma fala com um público: pt com a comunidade brasileira (bairros, nichos e comportamento de busca do brasileiro local), en com o dono de negócio da cidade em geral, es com a comunidade hispânica local.
2. Nunca gerar página trocando só o nome da cidade, nem traduzir a versão pt para outro idioma (risco de conteúdo duplicado e página de baixa qualidade)
3. H1 por idioma: pt "Marketing digital para brasileiros em {Cidade}"; en "Digital marketing agency for businesses in {City}"; es "Marketing digital para negocios hispanos en {Ciudad}"
4. Cada cidade linka para os 3 serviços e recebe links do rodapé
5. Expansão futura: novas cidades entram apenas com conteúdo único pronto nos três idiomas

## Blog

- Frequência alvo: definir no plano editorial
- Prioridade de pautas: dores práticas do empreendedor brasileiro nos EUA
- Todo artigo: keyword definida antes da escrita, title e description próprios, data no frontmatter, CTA para WhatsApp no fim, links internos com o prefixo do idioma (`/pt/...`)
- Frontmatter obrigatório: `titulo`, `descricao`, `data` (AAAA-MM-DD); opcionais: `autor`, `imagem`, `grupo` (só em traduções)
