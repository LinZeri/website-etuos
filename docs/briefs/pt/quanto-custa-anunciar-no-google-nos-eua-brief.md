# Content Brief: Quanto custa anunciar no Google nos EUA: números reais para negócios locais

**Slug**: `quanto-custa-anunciar-no-google-nos-eua`
**Cluster**: pilar1.conseguir-clientes-eua (Spoke P1-S4)
**Data programada**: 2026-10-08
**Autor**: Lin Zeri
**Gerado em**: 2026-10-08

---

## ALERTA DE FONTE: Template revisado por bloqueio de dado

**Fonte bloqueada confirmada:** A fonte principal indicada nas notas do item (WordStream/LocaliQ, "Search Advertising Benchmarks 2026") foi descartada em `docs/blog-fontes-verificadas.md` por falha nos testes de verificação:
- `wordstream.com/blog/*` retorna 403 em todas as tentativas de WebFetch
- `localiq.com/blog/search-advertising-benchmarks/` retornou apenas CSS sem conteúdo legível
- O número "13.474 campanhas" foi identificado como possível artefato de resumo automático de busca (não encontrado na página real)
- CPC de restaurante diverge entre fontes secundárias (US$ 2,05 vs. US$ 3,29), sinal de mistura de edições

**Lacuna documentada:** Na seção "Lacunas de cobertura" de `docs/blog-fontes-verificadas.md`: "sem fonte verificada de CPC médio ou taxa de conversão por setor nos EUA; ao escrever sobre custo de anúncio por clique ou por setor, tratar como experiência própria da Etuos, sem forçar benchmark externo até uma fonte tier 1-3 passar na verificação."

**Consequência:** O template `data-research` com tabela de CPC por nicho não pode ser executado com fontes aprovadas. Template revisado para `how-to-guide`. O artigo ainda responde "quanto custa" com: (a) mecânica de custo do Google Ads via documentação oficial da plataforma, (b) dados de orçamento de PMEs americanas com fonte verificada, (c) modelo Local Services Ads com documentação verificada, (d) aritmética hipotética rotulada explicitamente como ilustrativa, conforme autorizado pelo CLAUDE.md.

**Se uma nova fonte de CPC por nicho passar na verificação futuramente** (WebFetch direto, citação literal confirmada, domínio na allowlist de `docs/blog-dominios-confiaveis.md`), o artigo pode ser atualizado para incorporar esses dados.

---

## Template

**Recommended**: `how-to-guide`: explica como entender e calcular o custo do Google Ads para negócio local nos EUA, usando mecânica oficial da plataforma, dados de mercado verificados e modelo LSA como alternativa concreta.
**Template file**: `skills/blog/templates/how-to-guide.md`

---

## Target Keywords

- **Primary**: quanto custa anunciar no google nos eua
- **Secondary**: custo google ads eua, quanto custa google ads, google ads para negócios locais eua, quanto investir em google ads eua
- **Questions**:
  1. Quanto custa por clique no Google Ads nos EUA?
  2. Google Ads nos EUA é mais caro que no Brasil?
  3. Qual o orçamento mínimo para anunciar no Google nos EUA?
  4. O que são Local Services Ads e como funcionam?
  5. Como calcular quanto vou gastar no Google Ads?

---

## Search Intent

**Informational com fundo comercial.** O buscador é um brasileiro dono de negócio nos EUA, ou avaliando entrar no mercado americano, que quer entender o custo real antes de decidir investir. Quer orientação prática sobre quanto vai pagar e como funciona, não teoria sobre o que é CPC.

---

## Content Parameters

- **Word count**: 2.000 palavras
- **Reading level**: Flesch 60-70 (expert-accessible)
- **Format**: MDX
- **H2 sections**: 7
- **Images**: cover pré-gerado (coverImage: `/images/blog/quanto-custa-anunciar-no-google-nos-eua.webp`)
- **Charts**: 1 SVG de comparação dos dois modelos de cobrança do Google
- **FAQ items**: 4

---

## Recommended Title

Quanto custa anunciar no Google nos EUA: números reais para negócios locais

**Alternative titles:**
1. Google Ads nos EUA: o que você vai pagar e como calcular o seu orçamento
2. Custo do Google Ads nos EUA para negócios locais: guia prático 2026

---

## Meta Description (máx. 160 caracteres)

Google Ads nos EUA cobra por clique ou por lead. Veja como funciona o custo, quanto PMEs americanas investem em média e como estimar o orçamento para o seu negócio.

*(159 caracteres)*

---

## TL;DR Draft

> **TL;DR:** No Google Ads, você paga por clique (o valor depende do seu nicho, da concorrência local e da qualidade do anúncio). Nos Local Services Ads, você paga por lead válido, sem custo por clique. Pequenas empresas americanas investem em torno de US$ 78 mil por ano em publicidade em geral, mas negócios locais de serviço operam com verbas menores. O que define se vale a pena não é quanto custa o clique: é quanto custa o cliente.

---

## Information Gain Opportunities

- **[UNIQUE INSIGHT]**: Toda a concorrência no SERP para este keyword fala de custos em BRL para o mercado brasileiro. Este artigo é o único em português que foca em custos em USD para o mercado americano, com fontes verificadas do próprio Google. É o diferencial de GEO e AI citation que pode tornar este o artigo de referência para o nicho.
- **[UNIQUE INSIGHT]**: Nenhum concorrente PT-BR explica Local Services Ads para o público brasileiro. A migração do LSA para Performance Max (agosto de 2026) torna o conteúdo especialmente atual e sem equivalente no SERP.
- **[ORIGINAL DATA]**: Aritmética hipotética rotulada como ilustrativa: dado um ticket médio e taxa de fechamento específicos, qual CPL máximo o negócio suporta. Cada leitor aplica à sua própria realidade, sem depender de benchmark externo não verificado.

---

## Content Outline

### Introduction (aprox. 150 palavras)

- **Hook**: A pergunta "quanto custa anunciar no Google nos EUA" não tem uma resposta única, porque o Google não vende anúncios a preço fixo: vende espaços em leilão. Mas existem duas perguntas mais úteis do que "quanto custa por clique": quanto você paga por cliente e qual dos dois produtos do Google faz sentido para o seu tipo de negócio.
- **Problem**: Quem busca esse número no Google encontra artigos com custos em reais para o Brasil. O mercado americano tem outro nível de competição, outra moeda e um produto diferente (LSA) que a maioria dos guias em português ignora.
- **Promise**: Este artigo explica a mecânica de custo de cada produto usando documentação oficial do Google, apresenta os dados verificados sobre gasto de PMEs americanas e mostra como calcular o orçamento para o seu negócio especificamente.
- TL;DR box logo após o parágrafo de abertura.

---

### H2: Como o Google cobra pelos seus anúncios (dois modelos diferentes)

- **Answer-first**: O Google tem dois produtos principais para negócios locais nos EUA com modelos de cobrança distintos: Google Ads cobra por clique (CPC); Local Services Ads cobra por lead válido, sem custo por clique.
- Cobertura: o que é CPC e como ele aparece na fatura, o que é CPL e como o LSA calcula, quando cada modelo faz sentido para o tipo de serviço
- **Chart**: SVG comparativo mostrando os dois modelos lado a lado (CPC x CPL): o que dispara o custo, o que conta como resultado, e quem tem acesso a cada produto
- **Key stat**: T5 (Google Ads Help): "You still only pay for valid leads (such as phone calls and messages) rather than ad clicks"
- **Key stat**: T6 (Google Local Services Help): tipos de lead válido (mensagens, voicemails, ligações atendidas, ligações perdidas com retorno, pedidos de agendamento); leads de mensagem costumam custar menos que leads de ligação

---

### H2: O leilão do Google Ads: por que o custo varia tanto por nicho e cidade

- **Answer-first**: O CPC não é um preço que o Google publica: é o resultado de um leilão que acontece a cada busca e varia por palavra-chave, concorrência local, qualidade do anúncio e contexto (dispositivo, horário, localização geográfica).
- Cobertura: os três componentes do Ad Rank (lance, Índice de Qualidade, contexto), por que anúncio mais relevante custa menos por clique, por que o mesmo serviço custa mais em Miami do que em Framingham, como a qualidade da página de destino afeta o CPC
- **Key stat**: T9 (Google Ads Help): "If someone clicks your ad, that click won't cost you more than the maximum cost-per-click bid (or 'max. CPC') that you set."
- Link interno: [como funciona o leilão do Google Ads](/pt/blog/trafego-pago-como-funciona-quanto-custa-e-quando-vale-a-pena) para quem quiser aprofundar o mecanismo

---

### H2: Quanto pequenas empresas americanas investem em anúncios (os dados que existem)

- **Answer-first**: O orçamento médio anual de publicidade de pequenas empresas nos EUA ficou em torno de US$ 78 mil em 2025, segundo pesquisa com 1.006 donos de negócio conduzida pela Intuit SMB MediaLabs. É uma média que mistura empresas de diferentes tamanhos e serve como âncora do mercado, não como orçamento recomendado.
- Cobertura: por que a média de US$ 78k é puxada para cima por empresas maiores, o que isso representa em gasto mensal (aritmética simples: US$ 78k / 12 meses = aprox. US$ 6.500/mês como média geral do mercado), por que negócios locais de prestação de serviço no início operam com verbas menores
- **Key stat**: T2 (Intuit QuickBooks / Intuit SMB MediaLabs, 2025): "The average small business advertising budget is estimated to be roughly $78,000 this year." Com ressalva obrigatória: amostra de 1.006 donos de negócio em empresas de 0 a 100+ funcionários, marta 2025.
- **Key stat contextual**: T1 (IAB/PwC, 2026): mercado americano de publicidade digital chegou a US$ 294,6 bilhões em 2025 (+13,9%), com receita de busca em US$ 114,2 bilhões. Serve para mostrar a escala do mercado onde este anunciante entra.

---

### H2: Local Services Ads: quando você paga por lead, não por clique

- **Answer-first**: Para negócios de serviço local nos EUA (limpeza, construção, encanamento, elétrica, beleza, entre outros), o Google tem um produto diferente: Local Services Ads, onde você paga só quando alguém liga ou manda mensagem, não por cada clique.
- Cobertura: como funciona a elegibilidade e triagem (Google Verified badge), como o orçamento é definido (meta de leads semanais, não lance por clique), a mudança de agosto de 2026 (migração do LSA para PMax para anunciantes selecionados dos EUA), por que esse modelo é relevante para quem está começando sem histórico de campanha, quais setores têm acesso
- **Key stat**: T5 (Google Ads Help): "August 2026: The first phase of the migration begins for select home and storefront service advertisers in the United States." / "You still only pay for valid leads (such as phone calls and messages) rather than ad clicks."
- **Key stat**: T8 (Google, Getting started with LSA): "helps inspire confidence by signaling to consumers that your business has passed Google's proprietary screening process" (Google Verified badge)
- **Key stat**: T7 (Google, How providers qualify for LSA): "Local Services businesses...undergo screening procedures that vary by category and region but may include license, insurance, and background checks."
- Nota: T5 e T6 confirmam que o preço por lead não é publicado pelo Google; não inventar faixa de custo por lead.
- Link interno: [gerenciamento de campanhas de tráfego pago para negócios nos EUA](/pt/servicos/trafego-pago)

---

### H2: Como calcular quanto você vai gastar: a conta do CPL alvo

- **Answer-first**: O Google não publica tabela de preço por lead para cada nicho, mas você pode calcular qual CPL máximo o seu negócio consegue pagar mantendo margem. Essa conta é mais útil do que qualquer benchmark externo.
- Cobertura: a fórmula (CPL máximo = ticket médio multiplicado pela margem, dividido por 1 sobre taxa de fechamento), as três variáveis que o dono de negócio precisa conhecer antes de ativar qualquer campanha, o que fazer quando o CPL real ultrapassar o CPL alvo
- **Exemplos hipotéticos rotulados** (conforme CLAUDE.md: "aritmética hipotética rotulada como ilustrativa"):
  - Serviço de limpeza: ticket US$ 300, margem 40%, taxa de fechamento de orçamentos 25% (ou seja: 1 em cada 4 leads vira cliente). CPL máximo ilustrativo: US$ 300 x 0,40 / 4 = US$ 30. Se o canal custar mais do que US$ 30 por lead, a margem fica comprometida com esse exemplo.
  - Serviço de construção: ticket US$ 4.000, margem 30%, taxa de fechamento 20%. CPL máximo ilustrativo: US$ 4.000 x 0,30 / 5 = US$ 240.
  - Rotular explicitamente: "estes exemplos são hipotéticos para ilustrar a fórmula; use os seus próprios números."
- Nota para o escritor: este é cálculo de capacidade do próprio negócio, não benchmark externo. Não apresentar como "CPL médio do setor."

---

### H2: O que afeta o custo no mercado americano (diferente do Brasil)

- **Answer-first**: O mercado americano tem leilões mais competitivos do que o brasileiro em quase todos os nichos de serviço local, porque há mais anunciantes disputando o mesmo espaço. Mas os tickets médios também são maiores, o que pode manter o CPL viável em relação à receita gerada.
- Cobertura: diferença de competitividade por cidade (grandes mercados como NY, Miami, LA costumam ter leilões mais disputados do que cidades menores como Framingham ou Danbury), o idioma do anúncio como variável de custo (inglês compete com volume maior de anunciantes do que português), ciclo de aprendizado do algoritmo (por que o início da campanha tende a custar mais por resultado), o que é comportamento esperado vs. sinal de problema
- Nota: sem inventar CPCs por cidade ou por idioma; tratar como diferença qualitativa documentada pela mecânica do leilão.
- Link interno: [como decidir o idioma do anúncio](/pt/blog/anunciar-em-ingles-ou-portugues) para aprofundar essa camada

---

### H2: Vale a pena investir no Google Ads para o meu negócio nos EUA?

- **Answer-first**: Vale quando você tem oferta definida, página que converte e verba para sustentar a campanha enquanto ela junta dados. Não vale quando você ainda está definindo o produto, não tem capacidade de atender o volume de leads ou não tem orçamento para a fase de aprendizado.
- Cobertura: os três critérios práticos de "vale a pena" (oferta clara, página de destino preparada, capacidade de resposta rápida), por que começar com LSA (se elegível) pode ser mais seguro para quem não tem histórico de campanhas, quando migrar para Google Ads de busca
- **Key stat**: T1 (IAB/PwC): US$ 114,2 bilhões em receita de busca digital nos EUA em 2025. Uso: contexto de mercado, mais verba circulando significa mais concorrência E mais demanda.
- Conexão com pilar: link para [o plano completo de divulgação nos EUA](/pt/blog/como-divulgar-seu-negocio-nos-estados-unidos)
- CTA secundário: link contextual para `/pt/servicos/trafego-pago`

---

### Optional FAQ Section (4 perguntas)

1. **Existe orçamento mínimo para anunciar no Google nos EUA?** O Google Ads não tem mínimo oficial, mas verbas muito baixas raramente geram dados suficientes para o algoritmo aprender e otimizar. Para LSA, o orçamento é definido em meta de leads semanais e pode começar com valores menores.
2. **Google Ads nos EUA é mais caro que no Brasil?** Em dólar, os lances tendem a ser mais altos do que em reais para serviços equivalentes, porque o mercado americano tem mais anunciantes competindo no leilão. O ticket médio do serviço nos EUA também costuma ser maior, o que pode manter o CPL viável.
3. **Anuncio em inglês ou português no Google nos EUA?** Depende do público que você quer atingir e do serviço que oferece. Veja [o guia completo sobre idioma de anúncio](/pt/blog/anunciar-em-ingles-ou-portugues).
4. **Quanto tempo demora para ver resultado no Google Ads nos EUA?** Não existe prazo fixo, e ninguém deveria prometer um: depende do nicho, da concorrência, da oferta e da página de destino.

---

### Conclusion (100-150 palavras)

- Resumo: dois modelos (pay-per-click e pay-per-lead), uma âncora de orçamento de referência (US$ 78k de média anual para PMEs americanas), e a conta que o seu negócio específico precisa fazer (CPL alvo pela fórmula do ticket).
- 3 bullets de ação:
  1. Calcule o CPL máximo que o seu negócio suporta com a fórmula: ticket médio x margem, dividido pela sua taxa de fechamento.
  2. Verifique se o seu nicho é elegível para LSA antes de ir direto para o Google Ads padrão.
  3. Reserve verba para manter a campanha rodando por tempo suficiente antes de tirar conclusão sobre o canal.
- CTA principal: WhatsApp com mensagem contextual

---

## Statistics to Include

| # | Estatística | Entrada em fontes-verificadas.md | Seção |
|---|-------------|----------------------------------|-------|
| 1 | LSA: "You still only pay for valid leads (such as phone calls and messages) rather than ad clicks" | T5 | H2: Dois modelos |
| 2 | LSA: tipos de lead válido; mensagem costuma custar menos que ligação | T6 | H2: Dois modelos |
| 3 | Google Ads billing: "won't cost you more than the maximum cost-per-click bid that you set" | T9 | H2: O leilão |
| 4 | Orçamento médio PME americana: aprox. US$ 78 mil por ano (1.006 donos de negócio, março 2025) | T2 | H2: Quanto PMEs investem |
| 5 | IAB/PwC 2025: US$ 294,6 bilhões em publicidade digital nos EUA (+13,9%); busca US$ 114,2 bilhões | T1 | H2: Vale a pena |
| 6 | LSA migration Aug 2026: "The first phase of the migration begins for select home and storefront service advertisers in the United States" | T5 | H2: Local Services Ads |
| 7 | Google Verified badge: "passed Google's proprietary screening process" | T8 | H2: Local Services Ads |
| 8 | Triagem LSA: "may include license, insurance, and background checks" | T7 | H2: Local Services Ads |

**STAT PROIBIDA:** Qualquer CPC por nicho atribuído ao WordStream/LocaliQ. Ver "Fontes proibidas" em `docs/blog-fontes-verificadas.md`.

---

## Evidence-Backed Section Plan

| Seção | Foco do argumento | Evidência verificada | Entrada |
|-------|-------------------|----------------------|---------|
| Como o Google cobra | Dois modelos: CPC vs. CPL por lead | "only pay for valid leads...rather than ad clicks" | T5 |
| O leilão do Google Ads | CPC é resultado de leilão, não preço fixo | "won't cost more than the maximum CPC bid" | T9 |
| Quanto PMEs investem | Âncora de mercado com caveats claros | US$ 78k médio anual, 1.006 donos de negócio | T2 |
| Local Services Ads | Alternativa pay-per-lead com triagem oficial | Docs oficiais Google (T5, T6, T7, T8) | T5-T8 |
| Como calcular CPL alvo | Aritmética de capacidade de pagamento | Fórmula lógica, sem benchmark externo | N/A |
| Vale a pena | Escala do mercado americano como contexto | US$ 294,6B mercado, busca US$ 114,2B | T1 |

---

## Cover Image

Pré-gerado: `/images/blog/quanto-custa-anunciar-no-google-nos-eua.webp`
(campo `coverImage` já definido no item da fila; não regenerar)

---

## Visual Element Plan

| # | Tipo | Dado | Seção |
|---|------|------|-------|
| 1 | SVG comparativo (2 colunas ou tabela visual) | Google Ads (CPC): o que dispara o custo, como é cobrado, quem pode usar vs. Local Services Ads (CPL): o que dispara o custo, como é cobrado, triagem obrigatória | H2: Dois modelos |
| 2 | SVG flowchart simples (3 caixas) | Fluxo: lead chega > orçamento enviado > cliente fecha, com os três pontos de entrada da fórmula de CPL alvo | H2: Como calcular CPL |

Nota: ambos os gráficos usam mecânica verificada do produto (T5-T9) e aritmética ilustrativa, sem dados de benchmark bloqueados.

---

## Competitive Gaps to Exploit

1. **Gap de mercado**: Todos os concorrentes no SERP PT-BR falam de custos em BRL para o Brasil. Este artigo é o único em português focado em custos em USD para o mercado americano. Diferencial alto de GEO e AI citation.
2. **Gap de produto**: Nenhum concorrente PT-BR explica Local Services Ads para o público brasileiro. A mudança de agosto de 2026 (migração para PMax) torna o conteúdo atual e sem equivalente.
3. **Gap de honestidade**: Concorrentes listam tabelas de CPC por nicho sem verificar a fonte primária. Este artigo se diferencia sendo transparente sobre o que é dado verificado e o que é aritmética hipotética, sem inventar benchmarks.

---

## Internal Link Architecture

**Link TO (deste novo post para páginas existentes):**
1. `/pt/blog/trafego-pago-como-funciona-quanto-custa-e-quando-vale-a-pena` - âncora: "como funciona o leilão do Google Ads"
2. `/pt/blog/anunciar-em-ingles-ou-portugues` - âncora: "decidir o idioma do anúncio"
3. `/pt/blog/como-divulgar-seu-negocio-nos-estados-unidos` - âncora: "o plano completo de divulgação nos EUA" (pilar)
4. `/pt/servicos/trafego-pago` - âncora: "campanhas de tráfego pago para negócios nos EUA"
5. `/pt/blog/como-aparecer-no-google-guia-do-negocio-local` - âncora: "presença orgânica no Google" (opcional, em seção complementar)

**Link FROM (atualizar esses posts para linkar para este novo artigo):**
1. `/pt/blog/trafego-pago-como-funciona-quanto-custa-e-quando-vale-a-pena` - seção "Quanto custa o tráfego pago: Brasil e EUA": acrescentar âncora "custo do Google Ads no mercado americano"
2. `/pt/blog/como-divulgar-seu-negocio-nos-estados-unidos` - seção de tráfego pago: acrescentar âncora "quanto custa anunciar no Google nos EUA"
3. `/pt/blog/como-conseguir-clientes-nos-eua` - ao mencionar Google Ads: acrescentar link contextual

**Pillar connection**: Pilar 1, `/pt/blog/como-divulgar-seu-negocio-nos-estados-unidos`
**Cluster position**: Spoke (P1-S4)

---

## E-E-A-T Signals to Include

- **Experience**: Autor com mais de 10 anos em marketing digital e mais de US$ 500 mil em anúncios gerenciados (números autorizados pelo CLAUDE.md). Mencionar apenas com esses dados; sem anedotas ou casos de clientes sem os números autorizados.
- **Expertise**: Lin Zeri como autor declarado; bio section com credenciais.
- **Authority**: Fontes oficiais do Google (T5, T6, T7, T8, T9) para dados de produto; Intuit QuickBooks (T2) para dados de mercado; IAB/PwC (T1) para escala do mercado.
- **Trust**: Transparência explícita sobre o que é dado verificado vs. aritmética hipotética; nenhum benchmark de CPC por nicho inventado ou de fonte não verificada.

---

## CTA Framework

**CTA principal (fim do artigo):**
Link WhatsApp com mensagem contextual:
```
https://wa.me/5516991252073?text=Ol%C3%A1!%20Li%20o%20artigo%20sobre%20quanto%20custa%20anunciar%20no%20Google%20nos%20EUA%20e%20quero%20entender%20como%20funciona%20para%20o%20meu%20neg%C3%B3cio.
```
Texto do link: "Quero entender o custo do Google Ads para o meu negócio"

**CTA secundário (meio do artigo, máximo 1):**
Link contextual para `/pt/servicos/trafego-pago` no H2 de Local Services Ads.

**Regras:** sem promessa de preço, sem prazo de resultado. O diagnóstico é gratuito, sem prazo. Tom: convite direto, sem pressão.

---

## Distribution Plan

- **Reddit**: r/BrasilUSA, r/GoAmerica, r/empreendedorismo. Abordagem: responder pergunta real de custo de anúncios em comentário de valor, linkar como recurso. Nunca link post frio.
- **YouTube**: Possível vídeo companion comparando os dois modelos (CPC vs. CPL no LSA) com a fórmula de CPL alvo feita ao vivo. Audiência: empreendedor brasileiro nos EUA considerando Google Ads.
- **LinkedIn**: Ângulo: "Qual o custo real do Google Ads nos EUA para negócios locais? A resposta depende de qual dos dois produtos você usa." Audiência: empreendedores brasileiros nos EUA. Foco no insight do LSA vs. Google Ads.
- **Email**: Trecho do TL;DR com a fórmula de CPL alvo como isca de valor. Subject line sugerido: "Quanto custa um cliente via Google Ads nos EUA?"
- **WhatsApp grupos da comunidade**: Compartilhar como recurso educativo em grupos de empreendedores brasileiros nos EUA, não como auto-promoção.

---

## Notas de pré-produção para o escritor

1. **Verificação obrigatória**: Todas as estatísticas vêm de `docs/blog-fontes-verificadas.md`. Usar entradas T1, T2, T5, T6, T7, T8, T9 conforme mapeado acima. NÃO usar qualquer CPC por nicho do WordStream/LocaliQ.
2. **Aritmética hipotética**: Qualquer exemplo com valores em dólar leva o rótulo explícito "exemplo hipotético" ou "ilustrativo" no corpo do artigo, conforme exigido pelo CLAUDE.md.
3. **Template**: O item da fila especifica `data-research`, mas a fonte-chave está bloqueada. Usar `how-to-guide` conforme documentado neste brief.
4. **Frontmatter**: campos obrigatórios: `titulo`, `descricao` (máx. 160 caracteres), `data`, `autor`, `imagem`. Campo `metaTitulo` obrigatório se o título final ultrapassar 52 caracteres. Sem campo `grupo`.
5. **Cover image**: já existe em `/images/blog/quanto-custa-anunciar-no-google-nos-eua.webp`. Não regenerar.
6. **Fonte nova de CPC**: Se numa rodada futura uma fonte tier 1-3 de CPC por nicho passar na verificação (WebFetch direto, citação literal confirmada, domínio na allowlist), registrar em `docs/blog-fontes-verificadas.md` antes de usar no artigo e atualizar o domínio em `docs/blog-dominios-confiaveis.md` se necessário.
7. **T3 (Google $1=$8)**: Usar apenas se necessário, com atribuição explícita como "estimativa promocional da própria Google baseada em metodologia de 2009", nunca como dado neutro de mercado.
