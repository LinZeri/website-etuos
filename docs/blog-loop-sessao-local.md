# Produção do blog por sessão (vigente desde 13/10/2026)

O blog deixou de ser produzido por rotinas em nuvem. As rotinas `etuos-blog-producer` e `etuos-blog-replenish` estão **desativadas** (falhavam por falta de `GOOGLE_AI_API_KEY` na nuvem, não geravam artigo e a produção local rendia mais). Toda a produção e todo o planejamento acontecem em sessões do Claude Code nesta máquina, em lotes, com subagentes. Este documento é o procedimento. As regras de conteúdo (6.2, 6.3b, "Proibições reforçadas" e 6.4) continuam em `docs/blog-loop-rotina-producer.md`, que fica como referência dessas regras.

Planejamento: `docs/calendario-blog-outubro-2026-pt.md` e `docs/calendario-blog-outubro-2026-en.md` (um calendário por mês e idioma), e as filas `docs/blog-queue.json` (pt) e `docs/blog-queue-en.json` (en), com `publish_date` em cada item.

## Cadência e datas
- 4 artigos por semana por idioma, em segunda, terça, quinta e sexta (pt e en são pautas independentes).
- **Data passada ou de hoje**: o post aparece no próximo deploy. Usada para fechar lacunas.
- **Data futura**: o post só aparece na data. O código (`src/lib/blog.ts`, `todosOsPostsParaRotas`) já não gera a rota de post futuro (a URL devolve 404 até a data). Mas o site é estático: o post só entra no ar num deploy feito **na data ou depois**. Para isso ser automático é preciso um deploy diário (workflow agendado do GitHub Actions chamando um Deploy Hook da Vercel, com o segredo `VERCEL_DEPLOY_HOOK`). Enquanto esse deploy diário não existir, um push em dia posterior à data é o que revela o post.
- Fuso do filtro de data: America/Sao_Paulo.

## Passo a passo da sessão (orquestrador)
1. `git pull --ff-only origin main`; `gh auth status` com LinZeri ativa; `git config user.email` = `127788553+LinZeri@users.noreply.github.com`.
2. `check-lock` (`python .claude/scripts/blog_loop_helpers.py check-lock --lock docs/.blog-loop.lock --ttl 10800`); se livre, `acquire-lock`, commit e push do lock.
3. Escolher o lote no calendário (5 por idioma é o tamanho usado) e `pick-batch` / `mark-in-progress` por item (em `docs/blog-queue.json` e `docs/blog-queue-en.json`). A data de cada artigo é o `publish_date` do item no calendário.
4. Disparar um subagente `general-purpose` por artigo, em paralelo, com este prompt base: "Siga integralmente docs/blog-loop-sessao-local.md, seção 'Instruções para o subagente de artigo'. Seu artigo: idioma <pt|en>, slug <slug>, item em docs/blog-queue(-en).json. DATA DE PUBLICAÇÃO: <data>. Slugs do mesmo lote: <lista>." Acrescente avisos específicos do tema (Meta Ads sem fonte, custo sem faixa, etc.).
5. Se um agente voltar sem nota de audit por categoria, sem brief ou acima de 130% do alvo, devolva-o (SendMessage) para completar.
6. Conferência geral antes de commitar: travessão (U+2014) nos arquivos novos; JSON dos schemas válido; resíduos dos dados eliminados; prazos sem fonte (grep do 6.4); imagens do slug em WebP e todo `![](...)` apontando para arquivo existente; links entre posts existentes; `npm run validar:blog`; `npm run build`.
7. Fontes sugeridas pelos agentes: verificar (WebFetch, duas chamadas de pergunta diferente por URL) e registrar no registro, com IDs sem duplicar. Só o orquestrador edita `docs/blog-fontes-verificadas.md`.
8. Um commit por artigo (`content(blog): publica <slug> (<idioma>, agendado <data>)`, com a nota estimada no corpo e o trailer `Co-Authored-By`), `git pull --ff-only`, `git push origin main`; depois `mark-published` e `append-log` por artigo, `release-lock`, e um commit final `chore(blog-loop): registra lote ... e libera lock`.
9. Atualizar o calendário do mês (status por linha) e, ao fechar o mês, planejar o seguinte.

## Instruções para o subagente de artigo
Você produz os ARQUIVOS de um único artigo, e já o audita e faz o factcheck dele no mesmo passo. **NÃO faça git add/commit/push, NÃO mexa em `docs/blog-queue*.json` nem em `docs/.blog-loop.lock`, NÃO edite `docs/blog-fontes-verificadas.md` (outros agentes rodam em paralelo; se um dado valer ser registrado, descreva no relatório: URL, frase literal, cluster), NÃO rode `npm run build` (o orquestrador roda).** Só toque nos seus arquivos.

### Leia antes de escrever
1. `CLAUDE.md`: nenhum travessão em lugar nenhum; só os números autorizados da Etuos; links internos com o prefixo do idioma; sem rodapé de autor; sem comentários HTML no MDX; sem `style={{...}}` no MDX (é descartado; use só classes e CSS existentes).
2. `docs/blog-loop-rotina-producer.md`: seções 6.2, 6.3b, "Proibições reforçadas" e 6.4.
3. A estratégia do idioma (`docs/blog-strategy.md` pt; `docs/blog-strategy-en.md` en), a seção de CTA e `docs/diretrizes-comunicacao.md`.
4. 1 ou 2 posts publicados do mesmo idioma em `content/blog/<idioma>/` (formato de frontmatter, estrutura TL;DR, FAQ, CTA com WhatsApp e o schema em `content/blog/<idioma>/schemas/`). Use os mais recentes: eles já passaram por audit e factcheck.
5. As skills: `.claude/skills/blog-brief`, `blog-write`, `blog-schema`, `blog-seo-check`, `blog-audit` (rubrica de 100 pontos; meta >= 85) e `blog-factcheck` (cada `SKILL.md`).
6. `docs/blog-fontes-verificadas.md` e `docs/blog-dominios-confiaveis.md`.

### Fontes e números (regra de ouro)
O registro é a única fonte de dados. **Use SOMENTE dados que estão no registro**, com o campo "Markdown" exato e respeitando o "Uso proibido" de cada entrada. Regras:
- **ELIMINADOS, NUNCA USE:** os percentuais de peso da Whitespark (32% perfil, 20% avaliações etc.), o estudo de fotos da BrightLocal de 2018 (520%, 2.717%, 1.065%), os dados da HBR sobre indicação (20%, 70% do lucro, 3x), o 62% "pesquisam no Google" da Yext e o "68% / 55%" da BrightLocal 2026.
- **BrightLocal 2026** só com o link da PinMeTo (`([BrightLocal, 2026, via PinMeTo](https://www.pinmeto.com/news/brightlocal-local-consumer-review-survey-2026/), accessed Oct. 2026)`; em pt, "acesso em out. 2026"). **BrightLocal 2025** só com o link do SearchLab Digital e o rótulo 2025. Nunca misture as duas edições numa frase e nunca escreva "principal fonte".
- **Selo dos Local Services Ads: "Google Verified"**. "Google Guaranteed" só como nome antigo, explicado. Triagem do LSA: só "pode incluir licença, seguro e verificação de antecedentes, e varia por categoria e região".
- A frase "Appeals can only be submitted once" é de perfil suspenso (S13); para denúncia de avaliação a página diz "one-time appeal" (S22).
- Prazo, janela de tempo, limiar numérico, faixa de custo, CPC ou CPL, benchmark de setor, percentual de alocação: **proibido sem fonte registrada**, em qualquer parte (TL;DR, FAQ, tabelas, gráficos, schema). Escreva de forma qualitativa. Valores em dólar ou reais só como aritmética hipotética rotulada como ilustrativa.
- **Nada de experiência, caso, cliente, "nas contas que gerenciamos", "we see", "no nosso trabalho" ou resultado da Etuos** além dos números autorizados do CLAUDE.md. Conselho em voz neutra.
- Gráficos SVG só com dados registrados. Quadros conceituais (sem número) só se rotulados como ilustrativos.
- Afirmações sobre cidade ou comunidade só com fonte registrada (N2, N3, N6, M3).
- Se faltar um dado, você NÃO acrescenta fonte nova: escreva qualitativamente.
- Não cite página da Meta ou do Facebook, nem qualquer domínio fora de `docs/blog-dominios-confiaveis.md`; não cite página cujo corpo o WebFetch não abriu (só o título não vale).
Faça o teste de rede uma vez (WebFetch em `https://support.google.com/business/answer/3038177`) e informe no relatório.

### Passos
1. **Capa**: `node scripts/gerar-imagem-blog.mjs --slug <slug> --tema "<title>" --contexto "<image_context>" --idioma <pt|en>` (devolve JSON com `path`). Se o item não tiver `image_context`, invente uma cena humana e concreta. Confira a imagem com Read: fotorrealista, sem texto, sem logo (se tiver texto ou logo, regenere uma vez com `--forcar` e cena mais simples). Se falhar, pare e relate `image_generation_failed`.
2. **Brief** em `docs/briefs/<idioma>/<slug>-brief.md` (curto, com as fontes que usará por ID). Sempre criar.
3. **Post** em `content/blog/<idioma>/<slug>.mdx`. Frontmatter: `titulo`, `descricao` (no máximo 160), `data` = a data de publicação recebida, `autor: "Lin Zeri"`, `imagem: "/images/blog/<slug>.webp"`; sem `grupo`; `metaTitulo` (no máximo 52) se `titulo` passar de 52 caracteres. Tamanho entre 100% e 130% do `word_count` (passar muito do alvo não é virtude). Conteúdo ORIGINAL para o público do idioma (pt: brasileiro dono de negócio nos EUA ou empreendedor no Brasil; en: dono de negócio americano), nunca tradução. Use os `internal_links` do item só se as páginas existirem (confira `content/blog/<idioma>/`, `src/i18n/rotas.ts` e `mapa-slugs.ts`); troque os inexistentes por equivalentes. Nenhum link para `/lp/`. Só linke posts já publicados ou do mesmo lote. CTA final com o WhatsApp conforme o `ctaPattern` do idioma (`.blog-loop.config.json`). Não acrescente frase factual de transição sem fonte.
4. **Schema JSON-LD** em `content/blog/<idioma>/schemas/<slug>.schema.json` no formato dos existentes. O FAQ do schema repete o FAQ do post, palavra por palavra.
5. **Ilustrações do corpo** (6.3b): 3 a 4, geradas, conferidas uma a uma com Read, inseridas no MDX logo abaixo do `##` escolhido (nunca FAQ, conclusão ou CTA), com alt descritivo.
6. **Auto-revisão rigorosa**, antes de entregar:
   - greps do 6.4: travessão, prova inventada ("accounts we", "we see", "nossas contas"), prazos sem fonte, comentários HTML, `style={{`; links internos existem; ilustrações existem em WebP.
   - `npm run validar:blog` (falhas de OUTROS posts em edição paralela podem ser ignoradas).
   - **Audit (obrigatório; o relatório sem nota por categoria será devolvido):** aplique a rubrica do `blog-audit` (leia o `SKILL.md`; não existe `analyze_blog.py`, pontue à mão) e dê nota por categoria e total. Se ficar abaixo de 85, melhore o que for corrigível sem violar as regras acima.
   - **Factcheck:** para CADA número, citação ou regra de plataforma do post E do schema, confira contra o registro (campo exato) e, quando citar uma página com URL, confirme com WebFetch na URL exata (duas chamadas de pergunta diferente: o WebFetch resume com modelo pequeno e pode inventar; só aceite se as duas coincidirem). Corrija o que não passar.

### Relatório final (curto)
Slug; arquivos criados; nota do audit por categoria e total; palavras; ilustrações "N de 4"; tabela do factcheck (afirmação, fonte ou ID, resultado); o que você cortou por falta de fonte; se o WebFetch funcionou; dados que valeriam registrar (URL, frase literal, cluster); pendências. Se não conseguiu entregar, diga o motivo.
