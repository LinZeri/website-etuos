# Runbook da rotina producer (nuvem)

Procedimento executado todo dia pela rotina `etuos-blog-producer`, numa sessão de nuvem isolada, sem memória de execuções anteriores. A rotina em si só aponta para este arquivo, então **alterar este documento altera o comportamento da rotina**, sem mexer na configuração dela.

Objetivo do dia: publicar **1 artigo em português e 1 em inglês**, cada um com capa própria, passando pelos mesmos portões de qualidade, e dar push em `main` (a Vercel publica sozinha).

Regras inegociáveis do projeto valem integralmente: leia `CLAUDE.md` antes de escrever qualquer coisa. Duas que quebram a entrega se forem ignoradas: **nenhum travessão em lugar nenhum** e **todo commit sai como LinZeri**.

## Passo 0: identidade do git

```bash
git config user.name "LinZeri"
git config user.email "127788553+LinZeri@users.noreply.github.com"
```

Obrigatório antes de qualquer commit. Sem isso o commit pode ser atribuído à conta errada no GitHub, o que é proibido neste projeto.

## Passo 1: config e sanidade

```bash
python3 .claude/scripts/blog_loop_helpers.py load-config --project .
git rev-parse --abbrev-ref HEAD
git fetch origin main && git pull --ff-only origin main
```

Guarde o JSON como CONFIG. Se o load-config falhar, responda `ABORT: infra ausente` e pare. Se o branch não for `main`, responda `ABORT: wrong branch` e pare. Se o pull falhar, responda `ABORT: git pull failed` e pare.

## Passo 2: decidir se produz hoje

Para cada idioma, com o `queueFile` de `CONFIG.idiomas.<idioma>`:

```bash
python3 .claude/scripts/blog_loop_helpers.py replenish-check --queue <queueFile> --batch-size 1 --multiplier 7
```

Use o campo `pending`. Um idioma com `pending` igual a zero é pulado no dia (anote no relatório final). Se os dois estiverem em zero, responda `NO-OP: as duas filas estão vazias, aguardando a rotina de replenish` e termine sem tocar no lock.

## Passo 3: lock entre ambientes

Sempre nesta ordem:

1. `git pull --ff-only origin main`
2. `python3 .claude/scripts/blog_loop_helpers.py check-lock --lock docs/.blog-loop.lock --ttl 10800`
3. Se vier `{"locked": true, "stale": false}`, responda `ABORT: lock held, skipping today` e termine. Não insista.
4. Senão: `python3 .claude/scripts/blog_loop_helpers.py acquire-lock --lock docs/.blog-loop.lock --iteration "cloud-producer-<8 caracteres aleatórios>"`, depois `git add docs/.blog-loop.lock && git commit -m "chore(blog-loop): acquire lock (cloud-producer)" && git push origin main`.
5. Se o push falhar por non-fast-forward: `git pull --ff-only origin main` e refaça o check-lock uma única vez. Se agora estiver travado por outra iteração, responda `ABORT: lost lock race` e termine.
6. `python3 .claude/scripts/blog_loop_helpers.py recover-stale --queue <queueFile> --ttl 10800` para cada idioma. Se alterar arquivo, inclua no próximo commit.

## Passo 4: dependências

```bash
npm ci
```

Necessário para o `npm run build` e para o `sharp` usado na geração de imagem. Se falhar, libere o lock (passo 9) e responda `ABORT: npm ci failed`.

## Passo 5: teste de rede (define se o factcheck roda)

Faça um `WebFetch` em `https://support.google.com/business/answer/3038177`.

- **Funcionou**: o ambiente tem rede liberada. Use `factcheck.enabled = true` na config do Workflow e cite fontes normalmente, sempre de domínios listados em `docs/blog-dominios-confiaveis.md`.
- **Bloqueado**: passe `factcheck.enabled = false` na config do Workflow e escreva **sem nenhuma estatística externa citada**. Nesse modo, número só entra se for dos números autorizados da Etuos (em `CLAUDE.md`) ou como observação qualitativa, sem link. Registre isso no relatório final.

Em qualquer dos dois casos, `WebSearch` funciona e pode ser usado para entender a concorrência e a estrutura do conteúdo.

## Passo 6: para cada idioma, produzir o artigo

Ordem: primeiro `pt`, depois `en`. Trate cada idioma como um ciclo independente; a falha de um não impede o outro.

### 6.1 Selecionar o item

```bash
python3 .claude/scripts/blog_loop_helpers.py pick-batch --queue <queueFile> --n 1
python3 .claude/scripts/blog_loop_helpers.py author-for-date --queue <queueFile> --date <hoje AAAA-MM-DD> --cap 1
python3 .claude/scripts/blog_loop_helpers.py mark-in-progress --queue <queueFile> --slug <slug> --iteration <iteration-id>
```

A data de publicação é **hoje**, nunca no futuro (o site esconde posts com data futura) e nunca retroativa. Autor: `Lin Zeri`.

### 6.2 Gerar a capa

```bash
node scripts/gerar-imagem-blog.mjs --slug <slug> --tema "<title do item>" --contexto "<image_context do item>" --idioma <pt|en>
```

Se o item não tiver `image_context`, descreva você mesmo uma cena concreta e humana ligada ao tema (uma pessoa, um lugar, um momento de trabalho real), nunca uma cena abstrata. A imagem é sempre fotorrealista e **sem nenhum texto**; isso já está no script, não tente sobrescrever.

O script devolve JSON com `path` (`/images/blog/<slug>.webp`). Coloque esse valor no item como `coverImage` **e** garanta que ele vá para o campo `imagem` do frontmatter do post.

Se a geração falhar (sem chave, sem rede, erro da API): marque o item como failed com motivo `image_generation_failed`, não publique esse idioma hoje e siga para o próximo. Não invente uma imagem nem publique sem capa.

### 6.3 Rodar o pipeline

Monte a config do Workflow assim: comece por CONFIG, aplique por cima as chaves de `CONFIG.idiomas.<idioma>` (blogDir, schemaDir, briefDir, queueFile, strategyFile, ctaPattern) e ajuste `factcheck.enabled` conforme o passo 5. Então:

```
Workflow({
  scriptPath: "<caminho absoluto do checkout>/.claude/workflows/blog-loop.js",
  args: {
    projectDir: "<caminho absoluto do checkout>",
    config: <config do idioma>,
    batchItems: [<item, já com publish_date, author e coverImage>],
    hardRules: <as "Regras inegociáveis", a seção "Git e GitHub", "Comunicação", "Identidade visual" e "Provas e números autorizados" de CLAUDE.md, mais a decisão de rede do passo 5>,
    ctaFramework: <seção de CTA da estratégia do idioma>,
    skillMdPaths: {
      brief: "<abs>/.claude/skills/blog-brief/SKILL.md",
      write: "<abs>/.claude/skills/blog-write/SKILL.md",
      schema: "<abs>/.claude/skills/blog-schema/SKILL.md",
      seoCheck: "<abs>/.claude/skills/blog-seo-check/SKILL.md",
      audit: "<abs>/.claude/skills/blog-audit/SKILL.md",
      rewrite: "<abs>/.claude/skills/blog-rewrite/SKILL.md",
      factcheck: "<abs>/.claude/skills/blog-factcheck/SKILL.md"
    },
    iterationId: "<iteration-id>",
    dryRun: false
  }
})
```

Se a tool Workflow não existir ou falhar por infraestrutura, marque o item como failed com motivo `workflow_tool_unavailable`, libere o lock e relate. Não tente reimplementar o pipeline na mão.

### 6.4 Conferências obrigatórias antes de commitar

1. **Travessão**: `grep -n "—" <caminho do post>`. Qualquer ocorrência é erro. Corrija (vírgula, dois pontos, parênteses ou reescrita) e confira de novo.
2. **Frontmatter**: `titulo`, `descricao`, `data` (hoje), `autor` ("Lin Zeri") e `imagem` (`/images/blog/<slug>.webp`). **Sem o campo `grupo`**: pt e en são pautas independentes e não devem virar hreflang um do outro.
3. **Links internos**: todos com o prefixo do idioma (`/pt/...` ou `/en/...`). Nenhum link para `/lp/`, que é noindex.
4. **Números**: nenhuma alegação sobre a Etuos fora dos números autorizados de `CLAUDE.md`. Nenhum preço, nenhuma garantia, nenhum nome de cliente inventado.

## Passo 7: build

```bash
npm run build
```

Com todos os arquivos do dia no working tree. Se falhar, tente **uma** correção pontual e rode de novo. Se ainda falhar, marque o lote como failed com motivo `verify_command_failed`, não comite nada e vá para o passo 9.

## Passo 8: commit, push e registro

Para cada artigo aprovado, um commit próprio:

```bash
git add content/blog/<idioma>/<slug>.mdx content/blog/<idioma>/schemas/<slug>.schema.json docs/briefs/<idioma>/<slug>-brief.md public/images/blog/<slug>.webp docs/blog-queue*.json
git commit -m "content(blog): publica <slug> (<idioma>, agendado <data>)"
git push origin main
```

O corpo do commit registra a iteração e o score, e termina com o trailer `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>`. Se o push falhar por non-fast-forward, `git pull --ff-only origin main` e repita.

Depois de cada push, capture `git rev-parse HEAD` e rode `mark-published` e `append-log` (em `blog_loop_helpers.py`) com esse sha. Para os que falharam, rode `mark-failed --queue <queueFile> --slug <slug> --error "<motivo>"`.

## Passo 9: liberar o lock (sempre)

```bash
git pull --ff-only origin main
python3 .claude/scripts/blog_loop_helpers.py release-lock --lock docs/.blog-loop.lock
git add docs/.blog-loop.lock && git commit -m "chore(blog-loop): release lock (cloud-producer)" && git push origin main
```

Vale mesmo quando tudo falhou. Um lock preso bloqueia todos os dias seguintes.

## Relatório final

Três a seis linhas: o que foi publicado em cada idioma (slug e score), o que falhou e por quê, se o factcheck rodou ou caiu para o modo sem citações, e o status geral (`OK`, `PARCIAL`, `NO-OP` ou `ABORT` com o motivo).
