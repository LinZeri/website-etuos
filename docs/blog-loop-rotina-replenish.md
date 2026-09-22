# Runbook da rotina replenish (nuvem)

Procedimento executado todo dia pela rotina `etuos-blog-replenish`, numa sessão de nuvem isolada, cerca de duas horas antes da rotina producer. A rotina só aponta para este arquivo, então editar aqui muda o comportamento dela.

Objetivo: manter **7 pautas pendentes em cada fila** (português e inglês), geradas a partir da estratégia de cada idioma. Esta rotina não escreve artigo nenhum, só metadados de pauta.

## Passo 0: identidade do git

```bash
git config user.name "LinZeri"
git config user.email "127788553+LinZeri@users.noreply.github.com"
```

## Passo 1: config e sanidade

```bash
python3 .claude/scripts/blog_loop_helpers.py load-config --project .
git rev-parse --abbrev-ref HEAD
git fetch origin main && git pull --ff-only origin main
```

Falhou o load-config: `ABORT: infra ausente`. Branch diferente de `main`: `ABORT: wrong branch`. Pull falhou: `ABORT: git pull failed`.

## Passo 2: decidir se precisa repor (antes de tocar no lock)

Para cada idioma, com o `queueFile` de `CONFIG.idiomas.<idioma>`:

```bash
python3 .claude/scripts/blog_loop_helpers.py replenish-check --queue <queueFile> --batch-size 1 --multiplier 7
```

Retorna `{pending, target, need_replenish, count_to_add}`. Se `need_replenish` for false nos dois idiomas, responda `NO-OP: as duas filas estão acima do alvo de 7 pendentes` e termine, sem lock e sem commit.

## Passo 3: lock entre ambientes

Mesmo protocolo da rotina producer, com a iteração nomeada `cloud-replenish-<8 caracteres aleatórios>`:

1. `git pull --ff-only origin main`
2. `check-lock --lock docs/.blog-loop.lock --ttl 10800`
3. `{"locked": true, "stale": false}`: responda `ABORT: lock held` e termine.
4. Senão `acquire-lock`, depois `git add docs/.blog-loop.lock && git commit -m "chore(blog-loop): acquire lock (cloud-replenish)" && git push origin main`.
5. Push rejeitado: `git pull --ff-only origin main`, recheque uma vez, e se estiver travado por outra iteração responda `ABORT: lost lock race`.

## Passo 4: gerar as pautas

Para cada idioma que precisa de reposição, leia:

- a estratégia daquele idioma (`docs/blog-strategy.md` para pt, `docs/blog-strategy-en.md` para en): pilares, clusters, prioridades e regras editoriais;
- `CLAUDE.md`: regras inegociáveis, números autorizados, tom;
- os artigos já publicados (`ls content/blog/<idioma>/*.mdx`) e todos os itens já existentes na fila daquele idioma, em qualquer status.

Gere exatamente `count_to_add` itens novos, sem repetir tema ou keyword já publicada ou já enfileirada (canibalização é falha, não descuido). Alterne pilares, para o blog não virar um site de assunto único.

Formato de cada item:

```json
{
  "id": "<id curto único>",
  "slug": "<url-slug no idioma do artigo>",
  "title": "<título>",
  "template": "<how-to-guide|listicle|comparison|pillar-page|case-study|data-research|thought-leadership|tutorial>",
  "target_keyword": "<keyword primária>",
  "secondary_keywords": ["..."],
  "word_count": 1900,
  "internal_links": ["/pt/servicos/seo", "/pt/blog/<slug-irmao>", "..."],
  "cluster": "<cluster da estratégia daquele idioma>",
  "notes": "<contexto para quem escreve, incluindo restrições editoriais relevantes>",
  "image_context": "<cena concreta e humana para a capa, sem texto na imagem>",
  "publish_date": null,
  "author": null,
  "status": "pending",
  "attempts": 0,
  "last_error": null,
  "started_at": null,
  "last_score": null
}
```

Cuidados por idioma:

- **pt**: links internos com prefixo `/pt`, público brasileiro que empreende nos EUA (e o mercado brasileiro como segundo público), tom de `docs/diretrizes-comunicacao.md`.
- **en**: links internos com prefixo `/en`, público é o dono de negócio americano das dez cidades atendidas. Pauta em inglês **nunca** é a tradução de uma pauta em português, nem usa o enquadramento de "brasileiro nos EUA".
- Nunca enfileire pauta que dependa de preço, garantia, prazo ou nome de cliente.
- Sem travessão em nenhum campo.

Acrescente os itens ao array `items` da fila do idioma, sem sobrescrever os existentes, e atualize o campo `updated`.

Se todos os pilares da estratégia de um idioma já estiverem cobertos (tudo publicado ou enfileirado), **não invente pilar novo**: gere o mínimo possível (ou zero), marque no relatório final como `EXHAUSTED: <idioma>, <pilares>` e registre o fato no fim do documento de estratégia daquele idioma.

## Passo 5: commit e push

```bash
git add docs/blog-queue.json docs/blog-queue-en.json docs/blog-strategy*.md
git commit -m "chore(blog-loop): reabastece as filas (+<N> pt, +<N> en)"
git push origin main
```

Push rejeitado por non-fast-forward: `git pull --ff-only origin main` e repita (é seguro repetir o push de conteúdo, ao contrário do push do lock).

## Passo 6: liberar o lock (sempre)

```bash
git pull --ff-only origin main
python3 .claude/scripts/blog_loop_helpers.py release-lock --lock docs/.blog-loop.lock
git add docs/.blog-loop.lock && git commit -m "chore(blog-loop): release lock (cloud-replenish)" && git push origin main
```

## Passo 7: log e relatório

Acrescente uma linha a `docs/blog-loop-log.md` no mesmo formato das existentes, resumindo a execução, e inclua no commit do passo 5 ou 6.

Relatório final em três a cinco linhas: quantas pautas entraram em cada idioma, de quais clusters, se algum pilar ficou esgotado e o status (`NO-OP`, `OK` ou `ABORT` com o motivo).
