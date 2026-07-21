# Estratégia de SEO do site da Etuos

## Visão geral

O site inteiro é otimizado para SEO, com papéis diferentes por tipo de página:

- **Home e páginas de serviço:** keywords comerciais (fundo de funil). A Home prioriza conversão, mas mantém on-page impecável.
- **Páginas de cidade:** SEO local, o principal diferencial competitivo do site.
- **Blog:** topo e meio de funil, construindo autoridade no tema.

## Keywords por página

| Página | Keyword principal (exemplos a validar com pesquisa) |
| --- | --- |
| Home | marketing digital para brasileiros nos EUA |
| Tráfego pago | gestor de tráfego pago para brasileiros nos EUA |
| SEO | agência de SEO para brasileiros nos EUA |
| Criação de sites | criação de sites para brasileiros nos EUA |
| Cidade (ex: Miami) | marketing digital em Miami / agência brasileira em Miami |
| Blog | pautas de cauda longa: como divulgar meu negócio nos EUA, como anunciar no Google em inglês, etc. |

Antes de escrever o conteúdo definitivo, validar volumes e variações com pesquisa de palavras-chave.

## Padrões on-page

- **Title:** até 60 caracteres, keyword no início, marca no fim. Template: `{Assunto} | Etuos`
- **Description:** 140 a 160 caracteres, com benefício e chamada
- **H1:** um por página, contém a keyword principal
- **Headings:** hierarquia estrita (H1 > H2 > H3), sem pular níveis
- **Imagens:** sempre WebP, com `alt` descritivo em português
- **Links internos:** toda página aponta para serviços e cidades relevantes; artigos do blog linkam para páginas de serviço

## Técnico

- `src/app/sitemap.ts` gera o sitemap com todas as rotas (estáticas, serviços, cidades e posts)
- `src/app/robots.ts` libera tudo e aponta o sitemap
- `metadataBase` configurado para `https://etuos.com` no layout raiz
- Open Graph em todas as páginas (via metadata do App Router)
- JSON-LD a implementar: `Organization` no layout, `Article` nos posts do blog
- Site 100% estático garante desempenho (Core Web Vitals)

## Páginas de cidade

Regras de conteúdo para ranquear de verdade:

1. Conteúdo único por cidade: dados da comunidade brasileira local, bairros e região, exemplos de nichos fortes na cidade
2. Nunca gerar página trocando só o nome da cidade (risco de conteúdo duplicado e página de baixa qualidade)
3. H1 padrão: "Marketing digital para brasileiros em {Cidade}, {UF}"
4. Cada cidade linka para os 3 serviços e recebe links do rodapé
5. Expansão futura: novas cidades entram apenas com conteúdo único pronto

## Blog

- Frequência alvo: definir no plano editorial
- Prioridade de pautas: dores práticas do empreendedor brasileiro nos EUA
- Todo artigo: keyword definida antes da escrita, title e description próprios, data no frontmatter, CTA para WhatsApp no fim
- Frontmatter obrigatório: `titulo`, `descricao`, `data` (AAAA-MM-DD); opcionais: `autor`, `imagem`
