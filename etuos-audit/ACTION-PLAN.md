# Plano de ação SEO: etuos.com (2026-10-20)

Score atual: **88/100** (atualizado em 2026-11-03 com dados reais). Nenhum item crítico (nada bloqueia indexação).

## Crítico
Nenhum.

## Alto (até 1 semana)

1. **Prazos sem fonte na copy e no JSON-LD** (regra do projeto).
   - Onde: `src/i18n/dicionario/{pt,en,es}.ts` (FAQ da home), `src/data/servicos/{pt,en,es}.ts`, `src/paginas/conteudo/lp-*`.
   - Fazer: reescrever de forma qualitativa ou registrar fonte; conferir que o JSON-LD FAQPage deriva do mesmo texto. Esforço: baixo (3 arquivos de dicionário + 3 de serviços).
2. **Reforçar os 2 artigos com demanda e posição baixa** (feito o diagnóstico com GSC):
   - `/pt/blog/planejador-de-palavras-chave-google-ads-como-usar` (~350 impressões, posição 42 a 57)
   - `/en/blog/small-business-website-design-cost` (~150 impressões, posição 56 a 85)
   - Fazer: ajustar título e H1 à busca real, aprofundar, linkar de outros artigos do mesmo cluster, atualizar `dateModified`. Dados novos só com fonte registrada. Esforço: médio.

## Médio (até 1 mês)

3. **`lastmod` real no sitemap:** usar data de edição do conteúdo, não de build (63 URLs com a mesma data). Esforço: baixo.
4. **`/es/blog` sem artigos:** `noindex` + remover do sitemap até o primeiro lote, ou publicar os primeiros artigos em espanhol. Esforço: baixo.
5. **`sameAs`** em Organization e Person (LinkedIn da empresa e da Lin, redes ativas). Se não existirem perfis, criá-los. Esforço: baixo.
6. **Cache de `/images/*`** via `headers()` em `next.config.ts` (`public, max-age=31536000, immutable` ou 30 dias). Esforço: baixo.
7. **Medir mais páginas no PageSpeed** (um artigo longo e uma página de serviço); as 2 medidas deram 99 e 100, então a expectativa é de pouca coisa a corrigir.
8. **Páginas de cidade e serviço quase não aparecem** (cidades 5 impressões, serviços 0): linkar dos artigos do blog que já têm alcance para as páginas de cidade e serviço relevantes.

## Baixo (backlog)

9. `og:locale` do espanhol de `es_ES` para `es_US`.
9. Hubs `/servicos` e `/cidades` (375 a 447 palavras): adicionar contexto e "como escolher".
10. HSTS com `includeSubDomains; preload` se todos os subdomínios forem HTTPS.
11. Remover `Access-Control-Allow-Origin: *` do HTML (não afeta ranking).
12. Quando existir número americano de WhatsApp: atualizar `site.whatsapp.numero` e o `telephone` do schema em en/es.
13. Título de `/en/privacy-policy` (22 caracteres) pode ganhar o nome da marca.

## Contínuo

- Manter cadência do blog (4 por semana por idioma) com fontes registradas.
- Reenviar o sitemap no Search Console depois do item 3 e acompanhar indexação das 122 URLs.
- Reauditar em 30 dias e comparar (baseline: `etuos-audit/findings/crawl.json`).
- Construir menções externas (diretórios, LinkedIn, avaliações públicas) para sinal de entidade e citação por IA.
