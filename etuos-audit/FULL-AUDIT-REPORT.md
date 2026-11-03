# Auditoria SEO completa: etuos.com

Data: 2026-10-20. Escopo: 122 URLs do sitemap (3 idiomas, 56 artigos de blog, 33 páginas de cidade, serviços, institucionais). Todas rastreadas por HTTP real, sem JavaScript (o site é SSG, o HTML já vem completo).

## Resumo executivo

**SEO Health Score: 88/100** (atualizado em 2026-11-03 com dados reais de PageSpeed, Search Console e GA4; a versão inicial, de 20/10, dava 86 com performance estimada).
**Tipo de negócio:** agência de marketing digital remota, sem endereço físico, com páginas de cidade (service-area content) e blog. Não é Local Service com GBP, então `seo-local` e `seo-maps` não se aplicam; `seo-google`, `seo-matomo` e `seo-drift` não foram acionados (sem credenciais/baseline). A auditoria foi feita inline, sem subagentes.

O site está tecnicamente acima da média: 122 de 122 URLs respondem 200, canonical correto em todas, 1 H1 por página, zero imagens sem alt, hreflang recíproco (no HTML e no sitemap), JSON-LD em 100% das páginas, sem títulos ou descrições duplicados, sem página órfã, nenhuma página acima de 1,5 s no TTFB. Os problemas são de acabamento, não de base.

### Top 5 problemas

1. **Prazos sem fonte na copy institucional e no JSON-LD (viola a regra do próprio projeto).** "30 a 60 dias", "60 a 90 dias", "pronto em duas a quatro semanas" aparecem na FAQ da home e nos serviços nos 3 idiomas, inclusive dentro do schema FAQPage. O CLAUDE.md proíbe prazo sem fonte registrada.
2. **`lastmod` do sitemap pouco confiável:** 63 das 122 URLs têm exatamente `2026-10-14T08:20:48-03:00` (data de build, não de edição). O Google tende a ignorar o campo quando ele não reflete mudança real.
3. **`/es/blog` está no sitemap e indexável sem nenhum artigo** (187 palavras, só o shell). É página rasa com hreflang apontando para ela.
4. **Sem `sameAs` nem perfis externos no schema Organization/Person.** Fraco para entidade e para citação por IA, que cruza fontes externas.
5. **Tráfego orgânico ainda mínimo:** 754 impressões e 2 cliques em 28 dias (GSC), 2 sessões orgânicas (GA4). O site está indexando e já aparece, mas quase não recebe visitas. Ver "Dados reais do Google".

### Top 5 quick wins

1. Trocar `og:locale` do espanhol de `es_ES` para `es_US` (público é a comunidade hispânica dos EUA).
2. Gerar `lastmod` a partir da data real de edição do conteúdo, não do build.
3. Cache longo para `/images/*` em `next.config.ts` (hoje `max-age=0, must-revalidate`).
4. `noindex` temporário (e sair do sitemap) em `/es/blog` até haver artigos, ou publicar os primeiros.
5. Reescrever os prazos de forma qualitativa (ou registrar fonte) e atualizar o JSON-LD junto.

## Pontuação por categoria

| Categoria | Peso | Nota | Observação |
|---|---|---|---|
| Technical SEO | 22% | 88 | Base sólida; lastmod e cache pesam |
| Content Quality | 23% | 84 | Blog forte (média 2.513 palavras); prazos sem fonte; es/blog vazio |
| On-Page SEO | 20% | 90 | Títulos, descrições, H1, canonical impecáveis |
| Schema | 10% | 82 | Cobertura total; falta sameAs; FAQPage sem rich result |
| Performance | 10% | 98 (medida) | PageSpeed 99 mobile, 100 desktop |
| AI Search Readiness | 10% | 85 | llms.txt, robots aberto, conteúdo citável |
| Images | 5% | 90 | 100% com alt, WebP; falta cache longo |

Total ponderado: 87,7, arredondado para 88.

## Technical SEO

**O que funciona**
- `robots.txt` permite tudo e declara o sitemap. Sem bloqueio de crawlers de IA.
- Sitemap com 122 URLs, `xhtml:link` de hreflang (pt-BR, en, es, x-default = en) em todas.
- HTML também traz `link rel=alternate hreflang` recíproco (página de blog índice confirmada) e canonical absoluto.
- Redirecionamentos corretos: `www` para apex em 308; barra final removida em 308; raiz `/` em 307 para o idioma (temporário é o correto para redirecionamento por geografia); 404 real (status 404) em URL inexistente.
- HSTS (63072000), `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`.
- Resposta pré-renderizada (`X-Nextjs-Prerender: 1`, `X-Vercel-Cache: HIT`), TTFB baixo em todas as 122 URLs.
- Blog pt e en sem hreflang entre si: coerente com a decisão de pautas independentes (e o índice `/blog` tem hreflang).

**Achados**
- **Médio:** `lastmod` replicado (63 URLs com a mesma data/hora de build). Posts de blog têm datas reais (9 set a 20 out), mas páginas de cidade, serviços e institucionais não.
- **Médio:** `/images/*` serviu `Cache-Control: public, max-age=0, must-revalidate` (testado em `/images/logo-etuos.svg`). Visitas recorrentes revalidam todo ativo. Definir `headers()` em `next.config.ts` para `/images/:path*` com `public, max-age=31536000, immutable` (nomes de arquivo do blog são por slug, então use um prazo menor, ex. 30 dias, se houver chance de trocar a imagem mantendo o nome).
- **Baixo:** HSTS sem `includeSubDomains; preload`. Só vale se todos os subdomínios forem HTTPS.
- **Baixo:** `Access-Control-Allow-Origin: *` no HTML. Sem risco de SEO, mas desnecessário.
- **Baixo:** CSP apenas com `frame-ancestors`. Não afeta SEO.
- **Info:** `og:image` e `twitter:image` são rotas dinâmicas PNG (`/en/opengraph-image`), permitido pela regra de imagens do projeto.

## Content Quality

**O que funciona**
- Média por seção: home ~1.150 palavras, serviços ~1.050, cidades ~900 a 1.100, blog 2.513. Nenhum conteúdo realmente raso fora de utilitárias e hubs.
- Páginas de cidade com texto próprio por idioma (média de 897 palavras em pt, 1.033 em en, 1.105 em es), sem sinal de duplicação por troca de nome (títulos e descrições 100% únicos).
- Autor identificado (Lin Zeri) com `Person` e link para `/sobre`; blog com 56 artigos publicados em cadência de 4 por semana por idioma, citações com fonte verificada.
- FAQs em home, serviços e artigos.

**Achados**
- **Alto:** prazos sem fonte. Arquivos: `src/i18n/dicionario/{pt,en,es}.ts` (FAQ da home, linhas ~198 a 215), `src/data/servicos/{pt,en,es}.ts` (tráfego pago, SEO, sites; ex. `en.ts:114`, `en.ts:220`, `en.ts:357`), `src/paginas/conteudo/lp-*` (as LPs são noindex, risco menor). O mesmo texto vai no JSON-LD FAQPage, então vira dado estruturado que motores de IA podem citar como promessa. Reescreva qualitativamente ("os primeiros contatos costumam aparecer cedo; o SEO leva meses") ou registre a fonte no padrão de `docs/blog-fontes-verificadas.md`.
- **Médio:** `/es/blog` com 187 palavras e 0 artigos. Espanhol está fora do loop de propósito, então o ideal é `noindex` + fora do sitemap até o primeiro lote, mantendo o link no menu.
- **Baixo:** hubs `/servicos`, `/cidades` (375 a 447 palavras) e `/contato` (~220) são curtos. Para hubs, um parágrafo de contexto e um bloco de "como escolher" ajudam a ranquear termos genéricos. Contato pode continuar curto.
- **Info:** `/en/privacy-policy` tem título de 22 caracteres; trivial.

## On-Page SEO

- Títulos: 121 de 122 entre 30 e 65 caracteres (exceção: `/en/privacy-policy`, 22).
- Descrições: 122 de 122 entre 70 e 165 caracteres, nenhuma duplicada.
- H1 único em todas as páginas; H2 presentes.
- Open Graph completo (title, description, url, image com 1200x630 e alt, locale, locale:alternate, type) e Twitter Card `summary_large_image` em todas.
- Breadcrumbs em JSON-LD nas páginas internas. Linkagem interna: nenhuma das 122 URLs sem link de entrada.
- **Baixo:** `og:locale` do espanhol é `es_ES`; para o público do site é `es_US`. O hreflang `es` genérico está correto (cobre ES e US), mas uma versão `es-US` só faz sentido se houver uma `es-ES` separada, o que não há.

## Schema / dados estruturados

**Presente (por URL):** Organization (com `areaServed` de 10 cidades, `contactPoint` WhatsApp), WebSite, BreadcrumbList, FAQPage (91 páginas), BlogPosting + Person nos artigos (55 artigos em um padrão com WebPage), Service + Audience nas páginas de serviço. 100% das páginas têm JSON-LD.

**Achados**
- **Médio:** Organization e Person sem `sameAs` (LinkedIn, Instagram, Facebook, perfil do Google Business se existir). Principal sinal de entidade que falta. Se a Etuos não tem perfis públicos, crie ao menos LinkedIn da Lin e da empresa.
- **Baixo:** `telephone` +55 em `/en` e `/es`: já é pendência conhecida (número americano). Quando existir, trocar também no schema.
- **Info:** FAQPage já não gera rich result no Google para sites comerciais (restrito desde 2023). Mantém valor para leitura por IA, mas não conte com ganho de SERP. Isso reforça o item de prazos: o que está no schema é dado que IAs leem.
- **Info:** não há `LocalBusiness`/`ProfessionalService`, e está certo: sem endereço público, esse tipo criaria dado falso. Não adicionar.

## Performance (Core Web Vitals)

**Medido em 2026-11-03 (PageSpeed Insights, Lighthouse 13.6).**

| Página | Estratégia | Performance | Acessibilidade | Boas práticas | SEO |
|---|---|---|---|---|---|
| `/en` | mobile | 99 | 100 | 100 | 100 |
| `/pt/cidades/miami` | desktop | 100 | 100 | 100 | 100 |

Home en no mobile: FCP 1,0 s, LCP 2,1 s, TBT 10 ms, CLS 0, Speed Index 2,1 s, 510 KiB no total. Todas as métricas de laboratório estão no verde. A única oportunidade apontada é "JavaScript não usado" (ganho estimado de 150 ms).

**Dados de campo (CrUX):** indisponíveis. O Chrome não tem tráfego suficiente do site para gerar histórico, o que é esperado enquanto o volume é baixo. Reavaliar quando houver mais visitas.

Pontos de atenção (baixa prioridade):
- GA4 (`gtag/js`) é pré-carregado em todas as páginas. Com TBT de 10 ms, o impacto hoje é desprezível.
- Cache de `/images/*` (ver Technical): ajuda visitas recorrentes, não o score de laboratório.
- Só foram medidas 2 páginas; vale amostrar um artigo de blog longo (média de 2.500 palavras) depois.

## Imagens

- 100% das imagens com `alt` em todas as 122 páginas.
- Formato WebP conforme regra do projeto; OG em PNG (exceção prevista).
- Capas de blog com 1200x630 declarados no OG.
- **Médio:** cache (ver Technical).

## AI Search Readiness (GEO)

- `llms.txt` presente e bem escrito: descreve a entidade, os três idiomas, as páginas-chave e deixa claro que o contato é só WhatsApp.
- `robots.txt` aberto (GPTBot, ClaudeBot, PerplexityBot, Google-Extended podem rastrear).
- Conteúdo em respostas diretas, FAQs e blog de ~2.500 palavras com fontes verificadas: bom para citação.
- Faltam: `sameAs` e presença em fontes de terceiros (menções de marca, LinkedIn, diretórios, avaliações públicas), que são o principal fator de citação por IA que o site sozinho não resolve. Os depoimentos já existem em `src/data/depoimentos.ts`; vale marcá-los com `Review` só se forem verificáveis e públicos.
- Risco: os prazos sem fonte (item 1) podem ser repetidos por IAs como promessa da agência.

## Dados reais do Google (2026-11-03)

Fontes: Search Console (`sc-domain:etuos.com`, 05 a 30/10), GA4 (propriedade 559754366, 06/10 a 02/11). Dados brutos em `findings/gsc-query-page-28d.csv`.

**Visão geral:** 754 impressões, 2 cliques (CTR 0,27%) no GSC; 2 sessões orgânicas e 2 usuários no GA4, ambos no mesmo artigo (`/pt/blog/instagram-e-facebook-para-negocios-brasileiros-nos-eua`). Sitemap processado, 0 erros, 0 avisos. Os números dos dois sistemas batem.

**Impressões por idioma (consulta + página, 118 linhas):** pt 415, en 209, es 5. O espanhol praticamente não aparece, coerente com o fato de `/es/blog` estar vazio e o loop em espanhol só começar em 04/11.

**Impressões por tipo de página:** blog 599 (80%), home 12, sobre 9, cidades 5, eua 4. O blog é quase todo o alcance orgânico; as páginas de cidade e serviço ainda quase não aparecem.

**Onde o blog já ganha impressões, mas em posição baixa:**

| Artigo | Consultas principais | Impressões | Posição média |
|---|---|---|---|
| `/pt/blog/planejador-de-palavras-chave-google-ads-como-usar` | "planejador de palavras-chave" e variações | ~350 | 42 a 57 |
| `/en/blog/small-business-website-design-cost` | "small business website cost" e variações | ~150 | 56 a 85 |

Os dois já têm demanda real comprovada e estão fora da primeira página. São os melhores candidatos a reforço (atualização, mais profundidade, links internos de outros artigos, título que case com a busca).

**Buscas de marca:** "etuos" aparece na posição 1,7 na home en e 3,6 em `/en/about`. A entidade já é reconhecida.

**Páginas de cidade em espanhol (as buscas que você perguntou):** são buscas em espanhol e caem nas páginas certas, em posição boa e com volume ínfimo:
- "agencia de marketing en houston" (3 impressões, posição 5,7) para `/es/ciudades/houston`
- "agencia de marketing en fort lauderdale" (1 impressão, posição 7) para `/es/ciudades/fort-lauderdale`
- "agencia de marketing online cerca de mí" (posição 10) para `/es/ciudades/miami`

Sinal positivo: o conteúdo único por cidade e idioma está sendo reconhecido para buscas locais, mesmo sem ainda ter tráfego.

**Leitura:** o site está indexado e começa a ranquear, mas o gargalo hoje é volume e posição, não técnica. A performance e o SEO técnico estão no teto; o ganho vem de conteúdo (blog) e de tempo de maturação.

## Pendências e limites desta auditoria

- CrUX sem dados de campo por baixo volume de tráfego. Só 2 páginas medidas no PageSpeed.
- Indexação por URL (URL Inspection) não foi consultada; só o status do sitemap.
- Backlinks não analisados (sem Moz/Bing configurados).
- Nenhum subagente foi acionado; o crawl cobriu as 122 URLs do sitemap, não links externos nem recursos estáticos individualmente.
- Os 63 itens com lastmod idêntico podem ser, na verdade, o último deploy completo; só o código de `sitemap` confirma (procure por `lastModified` em `src/app/sitemap.ts`).
