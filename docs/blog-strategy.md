# Estratégia de blog: Etuos (português)

> Atualização de 22/09/2026: este documento passa a governar **só o português**. O inglês tem estratégia e fila próprias em `docs/blog-strategy-en.md` e `docs/blog-queue-en.json`, com público, keywords e pautas independentes (sem `grupo` no frontmatter, logo sem hreflang entre os idiomas). Cadência: 1 artigo por dia em cada idioma, produzido pelas rotinas em nuvem do blog-loop. O restante do documento continua válido.

Data: 06/08/2026. Insumos: auditoria SEO completa de 06/08/2026 (etuos.com-audit/), análise competitiva de SERP (findings/sxo.md), volumes de busca via DataForSEO (Google Ads, consultados em 06/08/2026), docs/seo.md e docs/escopo.md.

## Resumo executivo

O blog é a peça que falta para o site sair de 0 keywords ranqueando: a fundação técnica está pronta (Lighthouse 100, SSG, on-page correto) e não há conteúdo para o Google ranquear. A estratégia tem uma tese central: **o nicho da Etuos não se ganha por volume de busca, se ganha por resposta certa**. O termo "marketing digital para brasileiros nos EUA" tem volume não mensurável no Google (menos de 10 buscas/mês em qualquer país), mas as perguntas que esse público faz (como conseguir clientes, quanto custa anunciar, site em inglês ou português) têm SERPs dominadas por conteúdo educativo de terceiros e nenhuma agência do nicho respondendo bem. Quem responder primeiro e melhor vira a citação padrão do Google e das IAs (ChatGPT, Perplexity, AI Overviews) para o nicho inteiro.

Três números que sustentam a tese (DataForSEO, 06/08/2026):

| Termo | Volume/mês EUA (pt) | Volume/mês Brasil |
|---|---|---|
| marketing digital para brasileiros nos eua | sem dados (<10) | sem dados (<10) |
| tráfego pago | 320 | 60.500 |
| gestor de tráfego pago | 20 | 5.400 |
| como anunciar no google | 20 | 2.900 |
| abrir empresa nos eua | 30 | 170 |
| seo local | sem dados | 480 |

Leitura: o público-alvo primário (brasileiro nos EUA) é pequeno em volume de busca, então cada artigo precisa servir a dois mercados ao mesmo tempo: a cauda longa do nicho nos EUA (concorrência quase zero) e a cauda longa qualificada no Brasil (volume real, onde a Etuos também vende). Termos genéricos de alto volume no Brasil ("tráfego pago", 60.500) são pauta de suporte, não de aposta: a Etuos não vence Rock Content e Sebrae de frente hoje.

## Audiências

### Segmento 1: Brasileiro dono de negócio nos EUA (primário)
- **Perfil**: dono de negócio de serviço local (limpeza, construção, beleza, alimentação, saúde) em FL, MA, NJ, CT, GA, TX. Chegou há 2 a 15 anos, opera em português, vende para a comunidade e quer romper para o mercado americano.
- **Dores**: depende de indicação, não sabe anunciar em inglês, não tem tempo, já foi mal atendido por "agência" amadora.
- **Busca no Google**: "como conseguir clientes nos eua", "como divulgar meu negócio nos estados unidos", "anunciar no google em ingles ou portugues". Volumes baixos, intenção altíssima, concorrência quase nula.
- **Pergunta às IAs**: "qual a melhor agência de marketing para brasileiros nos EUA", "como fazer meu negócio de limpeza crescer em Boston".
- **Formato preferido**: respostas diretas, listas práticas, exemplos do nicho dele, vídeo curto. Lê no celular.
- **Estágio**: consciência do problema até decisão.

### Segmento 2: Brasileiro no Brasil planejando empreender nos EUA
- **Perfil**: pesquisa do Brasil antes de migrar ou expandir; consome conteúdo sobre abrir empresa, vistos, custos.
- **Busca**: "abrir empresa nos eua" (170/mês BR), "empreender nos estados unidos". SERPs dominadas por contadores e consultorias de imigração, não por marketing.
- **Papel na estratégia**: topo de funil e ponte. A Etuos não fala de visto nem contabilidade (não é a expertise dela); ela entra na pergunta seguinte, que ninguém responde: "abri a empresa, e agora, como consigo clientes?".
- **Estágio**: consciência.

### Segmento 3: Empreendedor no Brasil (mercado /pt/brasil)
- **Perfil**: dono de negócio local ou profissional liberal no Brasil que quer tráfego pago, SEO e site.
- **Busca**: cauda longa de "quanto custa tráfego pago" (210/mês), "como anunciar no google" (2.900/mês), "seo local" (480/mês), "marketing para [nicho]".
- **Papel**: aproveitar o mesmo conteúdo com dupla serventia; artigos práticos de tráfego, SEO e site servem os dois países quando escritos sem amarras geográficas, com blocos específicos por mercado.
- **Estágio**: consideração até decisão.

## Pilares de conteúdo e arquitetura de clusters

Quatro pilares, cada um no modelo hub-and-spoke: página pilar de 3.000+ palavras, 6 a 8 spokes de 1.500 a 2.500, todo spoke linka o pilar e 2+ spokes irmãos, e todo artigo linka a página de serviço ou cidade relevante (regra já existente em docs/seo.md).

### Pilar 1: Conseguir clientes nos EUA (a aposta do nicho)

- **Propósito**: dominar todas as perguntas de marketing do brasileiro que empreende nos EUA. É o pilar que define a entidade "Etuos" para o Google e para as IAs.
- **Potencial de citação por IA: Alto.** Não existe hoje resposta boa em português para essas perguntas; a primeira resposta estruturada tende a virar a citação padrão.
- **Ângulo único**: experiência real do Lin Zeri com clientes brasileiros nos EUA e dados próprios das 10 cidades atendidas.

| # | Título de trabalho | Template | Keyword-alvo | Palavras |
|---|---|---|---|---|
| P | Como divulgar seu negócio nos Estados Unidos: o guia do empreendedor brasileiro | pillar-page | como divulgar meu negócio nos estados unidos | 3.000-4.000 |
| 1 | Como conseguir clientes nos EUA além da indicação | how-to-guide | como conseguir clientes nos eua | 1.800 |
| 2 | Anunciar em inglês ou português? Como decidir por público e serviço | comparison | anunciar no google em ingles ou portugues | 1.500 |
| 3 | Site em português, inglês ou os dois? O que faz sentido para o seu negócio | comparison | site em portugues ou ingles para negocio nos eua | 1.500 |
| 4 | Quanto custa anunciar no Google nos EUA (com números reais) | data-research | quanto custa anunciar no google nos eua | 2.000 |
| 5 | Google Business Profile para negócio brasileiro nos EUA: passo a passo | tutorial | google meu negocio nos eua | 1.800 |
| 6 | Marketing para limpeza, construção e beleza: o que muda por nicho nos EUA | listicle | marketing para empresa de limpeza nos eua | 2.000 |
| 7 | Abriu a empresa nos EUA? Os primeiros 90 dias de marketing | how-to-guide | abrir empresa nos eua (cauda: depois de abrir) | 1.800 |
| 8 | Instagram e Facebook para negócios brasileiros nos EUA: o que funciona | how-to-guide | instagram para negocio nos eua | 1.500 |

Links de saída do cluster: /pt/eua, /pt/servicos/trafego-pago, /pt/servicos/criacao-de-sites e páginas de cidade citadas nos exemplos.

### Pilar 2: Tráfego pago na prática

- **Propósito**: sustentar a página de serviço mais vendida com autoridade de meio de funil, nos dois mercados.
- **Potencial de citação por IA: Médio.** Tema concorrido no Brasil; o diferencial é responder com números e casos, não com teoria.
- **Ângulo único**: dados reais de campanhas (o case de 30 para 300+ franquias, os R$ 100 mil/mês geridos) e a visão dupla Brasil/EUA que nenhum concorrente tem.

| # | Título de trabalho | Template | Keyword-alvo | Palavras |
|---|---|---|---|---|
| P | Tráfego pago: como funciona, quanto custa e quando vale a pena | pillar-page | trafego pago (cauda qualificada) | 3.000-4.000 |
| 1 | Quanto custa tráfego pago (Brasil e EUA, com faixas reais) | data-research | quanto custa trafego pago | 1.800 |
| 2 | O que faz um gestor de tráfego pago (e como escolher o seu) | faq-knowledge | gestor de trafego pago | 1.800 |
| 3 | Google Ads como funciona: leilão, orçamento e o que esperar | tutorial | google ads como funciona | 1.800 |
| 4 | Google Ads ou Meta Ads: onde investir primeiro por tipo de negócio | comparison | google ads ou facebook ads | 1.500 |
| 5 | Orçamento mínimo de anúncios para negócio local | how-to-guide | quanto investir em trafego pago | 1.500 |
| 6 | Os 7 erros que fazem pequenos negócios queimarem dinheiro em anúncios | listicle | erros trafego pago | 1.500 |

### Pilar 3: Aparecer no Google (SEO local e presença)

- **Propósito**: sustentar o serviço de SEO e alimentar as 10 páginas de cidade com links contextuais.
- **Potencial de citação por IA: Alto para as variantes locais.** "Como aparecer no Google em Miami sendo brasileiro" não tem resposta hoje.
- **Ângulo único**: o cruzamento cidade + nicho + idioma que só a Etuos cobre; os bairros e nichos já cadastrados em src/data/cidades/pt.ts viram exemplos concretos.

| # | Título de trabalho | Template | Keyword-alvo | Palavras |
|---|---|---|---|---|
| P | Como aparecer no Google: o guia do negócio local | pillar-page | como aparecer no google | 3.000-4.000 |
| 1 | SEO local: o que é e como funciona para negócio de bairro | faq-knowledge | seo local | 1.800 |
| 2 | Google Meu Negócio: guia completo de otimização | tutorial | google meu negocio | 2.000 |
| 3 | Avaliações no Google: como pedir e responder (sem violar regras) | how-to-guide | como conseguir avaliacoes no google | 1.500 |
| 4 | SEO para quem atende em português nos EUA: o guia que não existia | how-to-guide | seo em portugues nos eua | 1.800 |
| 5 | Quanto tempo demora o SEO para dar resultado (com cronograma real) | faq-knowledge | quanto tempo demora seo | 1.500 |
| 6 | Site que aparece no Google: os 10 requisitos técnicos em linguagem simples | listicle | site nao aparece no google | 1.500 |

### Pilar 4: Comunidade e dados próprios (diferenciação e E-E-A-T)

- **Propósito**: gerar o conteúdo que ninguém pode copiar: casos reais, entrevistas e dados originais da comunidade empreendedora brasileira nos EUA. É o pilar que gera backlinks e citações espontâneas, alimentando a meta de autoridade da auditoria (10 a 20 links reais em 6 meses).
- **Potencial de citação por IA: Alto.** Dados originais são o formato mais citado por Perplexity e AI Overviews.
- **Ângulo único**: acesso direto a clientes reais nas 10 cidades; ninguém mais tem essa amostra.

| # | Título de trabalho | Template | Papel | Palavras |
|---|---|---|---|---|
| P | Radiografia do empreendedor brasileiro nos EUA: mercado, nichos e cidades | data-research | Âncora de citações e links | 3.000 |
| 1 | Case: como a clínica do Rodrigo aumentou 300% os pacientes | case-study | Prova social linkável por página de cidade e serviço | 1.500 |
| 2-4 | 1 case ou entrevista por trimestre (nicho + cidade variados) | case-study | Idem | 1.500 |
| 5 | De 30 a 300 franquias em 20 meses: o que aprendi gerindo a expansão | thought-leadership | Autoridade pessoal do Lin | 2.000 |

Regra dos cases: sempre rotular cidade + nicho + métrica e linkar a página da cidade correspondente (resolve o achado High da auditoria: cidades sem prova social local).

## Posicionamento competitivo

Dois conjuntos de concorrentes, com estratégias distintas:

- **Agências do nicho** (Local Rank Brasil, RGB America, Way Studio, Vybria, GV8): disputam as SERPs comerciais. A Local Rank Brasil é a referência a bater: tem cases locais nomeados e FAQ nas páginas de cidade, mas blog fraco. Nenhuma tem cluster de conteúdo educativo completo. **Vencemos com o blog que elas não têm.**
- **Educadores genéricos** (Sebrae, Rock Content, Kapthalead, Wise, Soul Brasil Magazine): dominam as SERPs informacionais, mas respondem genericamente, sem o recorte "brasileiro nos EUA" e sem experiência de agência. **Vencemos com especificidade e experiência real, não com volume.**

### Mapa de citação por IA (baseline)

Checagem direta de ChatGPT/Perplexity/AI Overviews não foi executada nesta rodada (sem export disponível); a auditoria GEO confirmou que a Etuos não tem nenhum sinal de marca fora do domínio, então a presença atual em qualquer plataforma de IA é efetivamente **nenhuma**. Baseline a coletar no dia 1 do plano (manual, 10 queries por plataforma) e mensalmente a partir daí:

| Query de monitoramento | ChatGPT | Perplexity | AI Overview |
|---|---|---|---|
| melhor agência de marketing para brasileiros nos EUA | a coletar | a coletar | a coletar |
| como conseguir clientes nos EUA sendo brasileiro | a coletar | a coletar | a coletar |
| quanto custa tráfego pago | a coletar | a coletar | a coletar |
| como divulgar negócio de limpeza em Boston | a coletar | a coletar | a coletar |
| site em português ou inglês nos EUA | a coletar | a coletar | a coletar |

## Estratégia de superfície de IA

### On-site (regra para todo artigo)
- Primeiro parágrafo de cada H2 responde a pergunta em 40 a 60 palavras, autocontido (cápsula de citação).
- 60 a 70% dos H2 formulados como pergunta.
- Terminologia de entidade consistente: sempre "Etuos, agência de marketing digital para brasileiros que empreendem nos Estados Unidos" na primeira menção.
- Schema em todo post: BlogPosting + author Person (Lin Zeri, com link para /pt/sobre) + BreadcrumbList; FAQPage quando houver seção de FAQ genuína.
- Autor sempre Lin Zeri (nunca "Equipe Etuos"), com bio curta e link para /pt/sobre. Corrigir o post existente.
- 8+ fontes tier 1-3 por artigo com dados; dados próprios sempre que possível.
- Regras do projeto: pt-BR, sem travessão, imagens WebP, CTA WhatsApp no fim.

### Off-site (ordem de prioridade, alinhada à Fase 3 da auditoria)
1. **Perfis-base** (semana 1): LinkedIn Company e Clutch; adicionar ao sameAs do Organization.
2. **Comunidades**: grupos de Facebook e WhatsApp de brasileiros nas 10 cidades (onde esse público realmente está; Reddit é secundário no nicho). Participação genuína respondendo dúvidas de marketing, sem spam de link.
3. **YouTube**: 1 vídeo companheiro por página pilar (4 vídeos no trimestre), do Lin, em português, cortes para Shorts/Reels.
4. **Parcerias editoriais**: contadores e advogados de imigração que atendem o mesmo público (guest post mútuo), podcasts de brasileiros nos EUA.
5. **Wikipedia/Wikidata**: fora de alcance por ora (sem notabilidade); revisitar em 12 meses.

### Por plataforma
- **ChatGPT**: consistência de marca + frescor (atualizar posts principais a cada 90 dias).
- **Perplexity**: fontes citadas e tabelas de dados em todo artigo data-research.
- **AI Overviews**: cobertura completa dos clusters + formato featured-snippet (resposta direta sob o H2).

## Padrões de qualidade (todo post antes de publicar)

| Métrica | Alvo | Verificação |
|---|---|---|
| Score /blog analyze | 80+ | rodar antes do commit |
| Palavras | 1.500+ spoke, 3.000+ pilar | contagem |
| Fontes tier 1-3 | 8+ em posts com dados | revisão |
| Links internos | 5+ (pilar, spokes irmãos, serviço, cidade) | auditoria de links |
| Schema | BlogPosting + Person + BreadcrumbList | teste de dados estruturados |
| Cápsulas de citação | 1 por H2 | revisão |
| Regras Etuos | sem travessão, pt-BR, WebP, CTA WhatsApp | grep + revisão |

## Velocidade de conteúdo

Premissa (ajustar se a capacidade real for outra): produção assistida por IA com revisão e aprovação do Lin.

- **Novos posts: 1 por semana** (mínimo aceitável: 2 por mês; abaixo disso a estratégia não fecha em 90 dias).
- Atualizações de frescor: a partir do mês 4, 2 posts revisados por mês.
- Visuais: 1 gráfico SVG próprio por post data-research; foto ou ilustração WebP nos demais.

## Roadmap de 90 dias

### Mês 1: Fundação (Pilar 1)
- [ ] Corrigir o post "bem-vindo" (autor Lin Zeri, links para serviços) ou despublicar.
- [ ] Publicar o pilar "Como divulgar seu negócio nos Estados Unidos" + spokes 1, 2 e 4.
- [ ] Implementar schema BlogPosting + Person + BreadcrumbList no template de post (pré-requisito, Fase 2 da auditoria).
- [ ] Criar perfis LinkedIn e Clutch; adicionar sameAs.
- [ ] Coletar baseline de citação por IA (tabela acima) e registrar em docs/ai-citation-log.md.

### Mês 2: Expansão (Pilares 2 e 3)
- [ ] Publicar pilar "Tráfego pago" + spokes 1 e 2 (aproveitam volume BR: 210 e 5.400/mês).
- [ ] Publicar spoke "SEO em português nos EUA" (Pilar 3).
- [ ] Primeiro case study rotulado com cidade (Pilar 4), linkado da página da cidade.
- [ ] Entrar em 3 a 5 grupos de comunidade; primeira participação genuína.
- [ ] Gravar o primeiro vídeo companheiro do pilar 1.

### Mês 3: Autoridade e otimização
- [ ] Publicar pilar "Como aparecer no Google" + spoke "SEO local".
- [ ] Publicar "Radiografia do empreendedor brasileiro nos EUA" (âncora de links; divulgar para podcasts e parceiros).
- [ ] Rodar /blog analyze em todos os posts; revisar os que ficarem abaixo de 80.
- [ ] Primeira rodada de parcerias editoriais (2 guest posts ou entrevistas).
- [ ] Reauditar citações de IA e keywords (comparar com baseline); ajustar pautas do mês 4 pelos dados do GSC.

## Medição

- **SEO clássico**: keywords no top 100/10/3 (DataForSEO ou GSC, mensal; meta 90 dias: primeiras 50 keywords indexadas, ecoando a meta da auditoria), tráfego orgânico (GA4), backlinks reais (meta: 10+ em 6 meses).
- **Citação por IA**: log mensal manual das 10 a 20 queries por plataforma em docs/ai-citation-log.md; tráfego de referral de IA no GA4 (source contém chatgpt, perplexity, claude); impressões de IA no GSC quando disponível.
- **Qualidade**: score médio /blog analyze 80+; 100% dos posts com schema e autor.
- **Negócio**: conversas de WhatsApp iniciadas a partir de posts (UTM interna nos CTAs do blog).

## CTA Framework

Regras de conversão para todo artigo do blog (consumidas pelo blog-loop):

- CTA principal: link para o WhatsApp oficial (wa.me/5516991252073) no fim de todo artigo, com mensagem pré-preenchida contextual ao tema (ex.: artigo de tráfego pago: "Olá! Li o artigo sobre tráfego pago e quero saber como funciona para o meu negócio."). Padrão de UTM interna: ?utm_source=blog&utm_content=<slug> quando aplicável ao link interno de apoio.
- CTA secundário: 1 link contextual no meio do artigo para a página de serviço ou cidade mais relevante (nunca mais de um, para não virar panfleto).
- Nunca usar pop-up, banner ou promessa de preço. Tom do CTA segue docs/diretrizes-comunicacao.md: convite direto, sem pressão.
- Todo artigo linka a página pilar do seu cluster e pelo menos 2 spokes irmãos (ver tabelas dos pilares acima).

## Próximos passos

1. `/blog calendar` para detalhar o calendário editorial do mês 1.
2. `/blog brief` para o pilar "Como divulgar seu negócio nos Estados Unidos".
3. `/blog write` para produzir o primeiro artigo.
4. Coletar o baseline de citação por IA (tabela do posicionamento competitivo).
