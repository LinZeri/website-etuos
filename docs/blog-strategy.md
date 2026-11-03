# Estratégia de blog: Etuos (português)

> Atualização de 22/09/2026: este documento passa a governar **só o português**. O inglês tem estratégia e fila próprias em `docs/blog-strategy-en.md` e `docs/blog-queue-en.json`, com público, keywords e pautas independentes (sem `grupo` no frontmatter, logo sem hreflang entre os idiomas). Cadência atual: 4 artigos por semana por idioma, produzidos por sessão local (`docs/blog-loop-sessao-local.md`).
>
> **Atualização de 20/10/2026: a Fase 2 (logo abaixo) governa a produção de 02/11/2026 a 29/01/2027.** Os pilares 1 a 3 da Fase 1 estão fechados; a fila deve ser reposta com os pilares 5 a 8 da Fase 2. O restante do documento (audiências, regras on-site, padrões de qualidade, CTA) continua válido.

## Fase 2: novembro de 2026 a janeiro de 2027

Insumos: Search Console de 20/07 a 18/10/2026 (`docs/gsc/gsc-2026-10-18.json`), volumes DataForSEO consultados em 20/10/2026 (Google Ads, Brasil em português, salvo indicação), auditoria SEO de 20/10/2026 (`etuos-audit/`, score 86/100) e a lista de setores atendidos da página Sobre (`src/paginas/conteudo/sobre/pt.ts`).

### Onde estamos

- 34 artigos em português publicados ou agendados até 30/10; os pilares 1, 2 e 3 estão no teto de spokes.
- Search Console, 90 dias: 340 impressões e 2 cliques no site inteiro. Páginas do blog pt com impressão: o pilar "como divulgar seu negócio nos Estados Unidos" (11 impressões, posição média 8,3), Local Services Ads (10, posição 35), SEO local (10, posição 88) e anunciar em inglês ou português (6, posição 11). É cedo: a maioria dos posts tem menos de 6 semanas.
- Única query pt na faixa de 8 a 30: "anuncio em inglês" (posição 20,5) no post de anunciar em inglês ou português.
- Citação por IA: baseline zerado (09/10); segunda coleta prevista para o início de novembro.

### Tese da Fase 2

A Fase 1 respondeu "como conseguir cliente" e "como anunciar". A Fase 2 cobre o que acontece **antes e depois do anúncio**: o site que recebe o clique, o atendimento que transforma contato em venda, o marketing específico de cada setor que a Etuos já atendeu e a decisão de contratar ajuda. Os quatro pilares novos ligam o blog às três páginas de serviço (site, tráfego, SEO) e trazem, pela primeira vez, termos com volume real no Brasil ("landing page o que é", 6.600/mês; "funil de vendas", 18.100/mês; "agência de marketing digital", 6.600/mês; "marketing médico", 1.300/mês).

**Regra de setor:** só entra playbook de setor que está na lista de setores atendidos da página Sobre (real estate e imobiliário, construção e reformas, energia solar, baterias e energy backup, estética e beleza, medicina e clínicas, psicologia, restaurantes e alimentação, limpeza e serviços domésticos, mercado financeiro, eventos, moda e vestuário, jornalismo). Advogados (590/mês) e dentistas (170/mês) têm volume, mas ficam de fora enquanto não forem setor atendido.

**Regra de preço:** posts de custo (site, agência) explicam o que compõe o preço e citam faixas só de fonte externa registrada. Nunca uma faixa de preço da Etuos.

### Pilar 5: Site que traz cliente

- **Propósito**: sustentar `/pt/servicos/criacao-de-sites`, que não tinha cluster próprio. Três posts existentes passam a ser spokes deste pilar e recebem link para o hub novo: "preciso de site se já tenho Instagram", "site em português ou inglês" e "site não aparece no Google".
- **Ângulo único**: o próprio site da Etuos (estático, Lighthouse 100, evento de clique no WhatsApp medido no GA4) é o exemplo prático.
- **Potencial de citação por IA**: médio (tema concorrido no Brasil), alto nas variantes EUA.

| # | Título de trabalho | Template | Keyword-alvo | Volume BR |
|---|---|---|---|---|
| P | Site para pequena empresa: o que precisa ter, quanto custa e como saber se funciona | pillar-page | site para pequena empresa | (cauda) |
| 1 | Landing page: o que é, para que serve e quando usar | faq-knowledge | landing page o que é | 6.600 |
| 2 | Como criar uma landing page que converte, passo a passo | how-to-guide | como criar landing page | 720 |
| 3 | Quanto custa um site profissional: o que muda o preço (Brasil e EUA) | data-research | quanto custa um site | 590 + 590 |
| 4 | Landing page ou site: o que o seu negócio precisa primeiro | comparison | landing page ou site | (cauda) |
| 5 | Página de serviço que vende: a estrutura que transforma visita em contato | how-to-guide | página de serviço | (cauda) |
| 6 | Botão de WhatsApp no site: como colocar e medir quantos contatos ele gera | tutorial | botão whatsapp no site | (cauda) |
| 7 | Site lento no celular: como medir e o que resolver primeiro | how-to-guide | site lento | (cauda) |
| 8 | Domínio, hospedagem e e-mail profissional: o básico sem complicação | faq-knowledge | domínio próprio | (cauda) |

Links de saída: `/pt/servicos/criacao-de-sites`, e o spoke 6 também para `/pt/servicos/trafego-pago`.

### Pilar 6: Marketing por setor

- **Propósito**: um playbook por setor atendido, falando com os dois mercados (Brasil e brasileiros nos EUA) em blocos separados. O post existente "marketing para limpeza, construção e beleza nos EUA" vira spoke e linka o hub.
- **Ângulo único**: experiência real em cada setor. Energia solar tem o case das franquias (30 para 300+ em 1 ano e 8 meses), o mais forte que a Etuos tem.
- **Atenção YMYL**: medicina e psicologia têm regras de publicidade dos conselhos (CFM e CFP). Esses posts só saem com a resolução vigente registrada em `docs/blog-fontes-verificadas.md` e o domínio do conselho liberado em `docs/blog-dominios-confiaveis.md`.

| # | Título de trabalho | Template | Keyword-alvo | Volume BR |
|---|---|---|---|---|
| P | Marketing para negócio local por setor: o que muda em cada um | pillar-page | marketing por segmento | (cauda) |
| 1 | Como vender energia solar: marketing para integradoras que querem escalar | how-to-guide | como vender energia solar | 480 |
| 2 | Marketing médico: como divulgar a clínica dentro das regras do CFM | how-to-guide | marketing médico | 1.300 |
| 3 | Marketing para clínicas de estética: o que atrai paciente e o que é proibido | listicle | marketing para clínicas | 140 + 70 |
| 4 | Marketing para psicólogos: como divulgar seguindo o código de ética | how-to-guide | marketing para psicólogos | 70 |
| 5 | Marketing para restaurante: delivery, Google e Instagram no mesmo plano | listicle | marketing para restaurante | 260 |
| 6 | Marketing para imobiliária e corretor: do Brasil ao realtor brasileiro nos EUA | how-to-guide | marketing para imobiliária | 110 + 50 |
| 7 | Marketing para construtora e empresa de reforma | how-to-guide | marketing para construtora | 110 |
| 8 | Marketing para loja de roupas: vender no bairro e no Instagram | listicle | marketing para loja de roupas | 110 |
| 9 | Marketing para eventos: como lotar sem depender de indicação | how-to-guide | marketing para eventos | 70 |

Links de saída: a página de serviço mais próxima do canal principal de cada setor e, quando houver exemplo nos EUA, a página da cidade.

### Pilar 7: Do clique ao cliente (conversão e atendimento)

- **Propósito**: o pedaço que os concorrentes ignoram. O anúncio funciona e a venda não sai porque o atendimento demora, ninguém faz follow-up e ninguém sabe de onde veio o cliente. Liga tráfego pago a resultado e reforça o post existente de WhatsApp Business (que vira spoke).
- **Potencial de citação por IA**: alto em "remarketing" e "funil de vendas para negócio local", termos com volume e SERP genérica.

| # | Título de trabalho | Template | Keyword-alvo | Volume BR |
|---|---|---|---|---|
| P | Funil de vendas para negócio local: do anúncio ao cliente fechado | pillar-page | funil de vendas | 18.100 |
| 1 | O que é remarketing e quando vale a pena para negócio local | faq-knowledge | o que é remarketing | 1.000 (3.600 a cabeça) |
| 2 | Pixel da Meta: o que é, como instalar e o que ele mede | tutorial | pixel do facebook | 210 |
| 3 | CRM para pequenas empresas: o que você realmente precisa | comparison | crm para pequenas empresas | 170 |
| 4 | Quanto tempo você demora para responder um contato (e quanto isso custa) | data-research | tempo de resposta ao cliente | (cauda) |
| 5 | Como saber de onde vêm seus clientes: rastrear WhatsApp, ligação e formulário | tutorial | rastrear conversões | (cauda) |
| 6 | Pediu orçamento e sumiu: como fazer follow-up sem ser chato | how-to-guide | follow-up de vendas | (cauda) |
| 7 | Como atrair clientes para negócio local: os canais comparados | comparison | como atrair clientes | 590 |

Regra: o spoke 4 depende de dado de tempo de resposta com fonte registrada; sem fonte, sai qualitativo e sem número.

### Pilar 8: Contratar marketing sem erro (fundo de funil)

- **Propósito**: responder as perguntas de quem já decidiu contratar ajuda e está comparando. É o pilar mais perto da conversão no WhatsApp e o que alimenta a query de monitoramento "melhor agência de marketing para brasileiros nos EUA".
- **Ângulo único**: honestidade de quem está do lado de dentro (princípio "Honestidade antes do contrato" da página Sobre). Nada de autoelogio: o post ensina a avaliar qualquer agência, inclusive a Etuos.
- **Volume**: as caudas não têm volume mensurável; a cabeça "agência de marketing digital" tem 6.600/mês no Brasil. Aposta de citação por IA e de conversão, não de tráfego.

| # | Título de trabalho | Template | Keyword-alvo | Volume BR |
|---|---|---|---|---|
| P | Agência de marketing digital: o que faz, como escolher e quando contratar | pillar-page | agência de marketing digital | 6.600 |
| 1 | Agência, freelancer ou fazer sozinho: como decidir | comparison | agência ou freelancer | (cauda) |
| 2 | Perguntas para fazer antes de contratar uma agência de marketing | faq-knowledge | como escolher agência de marketing | (cauda) |
| 3 | Sinais de que sua agência de marketing não está funcionando | listicle | agência de marketing não dá resultado | (cauda) |
| 4 | O que um relatório de marketing deve mostrar (e o que é métrica de vaidade) | how-to-guide | relatório de marketing | (cauda) |
| 5 | Quem é dono da sua conta de anúncios? O que olhar no contrato antes de assinar | faq-knowledge | conta google ads agência | (cauda) |
| 6 | Agência de marketing para brasileiros nos EUA: o que avaliar antes de fechar | how-to-guide | agência de marketing para brasileiros nos eua | (nicho) |

Links de saída: `/pt/sobre`, `/pt/servicos` e `/pt/eua`. Nunca preço, garantia ou nome de cliente.

### Pilar 4 (continua): dados próprios

- 30/10: artigo de autoridade das franquias (já na fila).
- Dezembro: "Radiografia do empreendedor brasileiro nos EUA", com dados públicos (Census/ACS) registrados antes da escrita.
- Cases: só com autorização e dados do cliente, entregues pelo Lin. A sessão de produção nunca cria pauta de case sozinha.

### Reforço e frescor (a partir do GSC)

1. **Anunciar em inglês ou português** (posição 11, query "anuncio em inglês" na 20,5): incluir "anúncio em inglês" no título e num H2. Primeira atualização de novembro.
2. **SEO local: o que é** (10 impressões, posição 88): conferir intenção da SERP (definição curta) e reforçar a cápsula de resposta do primeiro H2.
3. Releitura do GSC a cada 2 semanas (`python scripts/gsc-export.py 90`). Post com 6+ semanas e zero impressão entra na lista de revisão; query pt na faixa de 8 a 30 vira reforço ou spoke.

### Ordem de produção (fila)

Alternar pilares para o blog não parecer de um tema só. Prioridade por semana: pilar 5 e pilar 7 primeiro (maior volume e ligação direta com serviço), depois 6 e 8. Hubs saem na primeira semana de cada pilar, para os spokes já nascerem linkando.

| Semana | Itens |
|---|---|
| 02/11 | Hub P5, Hub P7, P5.1 landing page o que é, P7.1 remarketing |
| 09/11 | Hub P6, P6.1 energia solar, P5.2 criar landing page, P7.2 pixel da Meta |
| 16/11 | Hub P8, P8.2 perguntas para a agência, P5.3 quanto custa um site, P7.3 CRM |
| 23/11 | P6.2 marketing médico (se a fonte do CFM estiver registrada), P5.4, P7.5, P8.1 |
| 30/11 a 21/12 | Restante dos pilares 5 a 8, mais a Radiografia (pilar 4) |
| Janeiro | Spokes restantes, reforços do GSC e as 2 atualizações de frescor por mês |

São 35 pautas novas (34 dos pilares 5 a 8 mais a Radiografia) para cerca de 9 semanas de produção. Na semana de 28/12, cadência mínima (2 posts).

### Superfície de IA e off-site (Fase 2)

- Regras on-site da Fase 1 continuam (cápsula de resposta por H2, entidade "Etuos" consistente, autor Lin Zeri, schema BlogPosting + Person + BreadcrumbList).
- **Sinal de entidade**: o LinkedIn da empresa (https://www.linkedin.com/company/etuos/) entrou no `sameAs` do Organization em 21/10 (`site.perfis` em `src/data/site.ts`). Faltam o LinkedIn pessoal do Lin (para o `sameAs` do Person) e um perfil em diretório de agências (Clutch), item 5 da auditoria de 20/10. Sem perfis externos, a citação por IA tende a continuar em zero, independentemente do volume de posts.
- Coleta de citação por IA no início de novembro e no início de dezembro, acrescentando 2 queries da Fase 2: "o que é remarketing para negócio local" e "como escolher agência de marketing digital".

### Espanhol (decidido em 21/10/2026)

**Decisão do dono: abrir o espanhol com 2 posts por semana (quarta e sexta) a partir de 04/11/2026**, com estratégia e fila próprias em `docs/blog-strategy-es.md` e `docs/blog-queue-es.json`. Contexto que levou à decisão:

O dado mais forte do Search Console não está no blog: `/es/ciudades/houston` é a página com mais impressões do site (90 em 90 dias), com queries em espanhol entre as posições 10 e 25 ("agencia de marketing en houston", 9,7; "agencia de publicidad en houston", 13,1). "Agencia de marketing digital" tem 1.600 buscas/mês nos EUA em espanhol, e "google mi negocio", 1.000. Ao mesmo tempo, `/es/blog` está vazio e indexável (item 4 da auditoria), o que o primeiro post em espanhol resolve.

### Metas da Fase 2 (até 29/01/2027)

- Blog pt com 60+ artigos e 8 pilares, cada um com hub e 6+ spokes.
- Impressões do site no GSC (90 dias) acima de 1.500, com pelo menos 10 páginas do blog pt com impressão. Ponto de partida: 340 no site inteiro.
- 5+ queries pt do blog na faixa de 1 a 20.
- Primeira menção da Etuos em qualquer plataforma de IA monitorada.
- Primeira conversa de WhatsApp atribuída ao blog (evento `whatsapp_click` no GA4, com página de origem em `/pt/blog/`).

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
- **Ângulo único**: dados reais de campanhas (o case de 30 para 300+ franquias, os US$ 500 mil+ em anúncios gerenciados) e a visão dupla Brasil/EUA que nenhum concorrente tem.

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

Atualizado em 09/10/2026. Produção pelo blog-loop (rotinas em nuvem), com os mesmos portões de qualidade e fontes verificadas.

- **Novos posts: 4 por semana**, todos spokes, publicados em segunda, terça, quinta e sexta (fuso de Nova York). Piso absoluto: 2 por semana; semana abaixo disso vira retroativo na fila.
- **Retroativos**: 5 posts em pt para fechar as semanas sem publicação (22/09, 29/09 e 05/10), com `publish_date` na própria semana: 22/09, 24/09, 29/09, 01/10 e 05/10. Ficam na frente da fila e saem à razão de 1 por dia útil (a rotina trabalha em qualquer dia da semana enquanto houver retroativo).
- **Fila**: 8 pautas pendentes (duas semanas), repostas pela rotina replenish, priorizando os pilares 2 e 3, que tinham só o hub.
- Pilares, cases e atualizações de posts antigos entram como itens avulsos, no máximo 1 por mês.
- Atualizações de frescor: a partir de 01/12/2026, 2 posts revisados por mês, escolhidos pelo GSC.
- Visuais: capa + 3 a 4 ilustrações por post (runbook do producer); 1 gráfico SVG próprio por post data-research.

## Roadmap de 90 dias

Reescrito em 09/10/2026. Situação de partida: 7 posts publicados (hubs dos pilares 1 a 3 e 4 spokes do pilar 1), 5 pendentes no início do dia, baseline de IA zerado (`docs/ai-citation-log.md`) e GSC com 193 impressões em 90 dias, nenhuma delas em página do blog (`docs/gsc/`). As semanas de 21/09 e 28/09 ficaram sem posts e a de 05/10 teve 1.

### Outubro de 2026: recuperar o ritmo e cobrir os pilares 2 e 3
- [x] Baseline de citação por IA coletado em 09/10 (zero menções no ChatGPT e no Google AI Overviews).
- [x] Exportação do GSC automatizada (`scripts/gsc-export.py`).
- [ ] Publicar os 5 retroativos (22/09, 24/09, 29/09, 01/10, 05/10) e depois 4 spokes por semana.
- [ ] Spokes dos pilares 2 e 3: seo local, avaliações, quanto custa tráfego pago, gestor de tráfego, SEO em português nos EUA.
- [ ] Criar perfis LinkedIn e Clutch; adicionar sameAs (dependência do Lin).
- [ ] 1ª exportação quinzenal do GSC em 23/10.

### Novembro de 2026: completar clusters e medir
- [ ] Fechar os clusters dos pilares 2 e 3 (6 a 8 spokes cada) e os spokes restantes do pilar 1.
- [ ] 1º case study rotulado com cidade (Pilar 4), linkado da página da cidade; depende de dados e autorização do cliente.
- [ ] Reler o GSC: queries com posição de 8 a 30 viram pautas de reforço; páginas do blog sem impressão após 6 semanas entram na lista de revisão.
- [ ] 2ª coleta de baseline de IA (início de novembro) e primeira comparação.
- [ ] Entrar em 3 a 5 grupos de comunidade; primeira participação genuína.

### Dezembro de 2026: autoridade e otimização
- [ ] "Radiografia do empreendedor brasileiro nos EUA" (âncora de links) e o artigo de autoridade do Lin sobre as franquias.
- [ ] Rodar /blog analyze em todos os posts; revisar os abaixo de 80; começar as 2 atualizações de frescor por mês.
- [ ] Primeira rodada de parcerias editoriais (2 guest posts ou entrevistas).
- [ ] 3ª coleta de baseline de IA e revisão geral da estratégia com os dados de GSC de 90 dias.

## Medição

- **SEO clássico**: keywords no top 100/10/3 (DataForSEO ou GSC, mensal; meta 90 dias: primeiras 50 keywords indexadas, ecoando a meta da auditoria), tráfego orgânico (GA4), backlinks reais (meta: 10+ em 6 meses).
- **Ciclo do GSC (ativo desde 09/10/2026)**: a cada 2 semanas rodar `python scripts/gsc-export.py 90` (service account somente leitura, propriedade `sc-domain:etuos.com`), que grava `docs/gsc/gsc-<data>.json` com páginas, queries, query x página, países e série diária. Comitar o arquivo; a rotina replenish lê o mais recente. Decisões: (1) query com posição 8 a 30 vira spoke de reforço; (2) página do blog com 0 impressão após 6 semanas indexada entra na lista de revisão; (3) página com impressão e CTR abaixo de 1% ganha título e descrição novos.
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

## Nota de cobertura dos pilares (rotina replenish, 13/10/2026)

Registro da rotina `etuos-blog-replenish` sobre o estoque de pautas desta estratégia, para a próxima rodada não perder tempo:

- **Pilar 1 (conseguir clientes nos EUA): fechado.** Os 8 spokes da tabela estão publicados e há 1 spoke extra na fila (anunciar em espanhol), totalizando 9. Acima do teto de 6 a 8 do modelo hub-and-spoke.
- **Pilar 2 (tráfego pago): fechado na tabela.** Os 6 spokes planejados estão publicados, mais 2 extras (Local Services Ads e Planejador de palavras-chave) e o spoke de medição enfileirado nesta rodada, que fecha a lacuna de "como ler resultado". Total de 9.
- **Pilar 3 (aparecer no Google): no teto.** Com os 3 spokes desta rodada, o cluster fica com 8 spokes. Dois itens da tabela seguem fora de propósito: "Quanto tempo demora o SEO" depende de prazo (proibido pelo CLAUDE.md sem fonte registrada, e não há fonte) e "Google Meu Negócio: guia completo de otimização" canibalizaria o hub e o post de Google Business Profile para brasileiros nos EUA.
- **Pilar 4 (comunidade e dados próprios): aberto, mas limitado.** O item de autoridade das franquias entrou nesta rodada como o avulso do mês. Os cases dependem de autorização e de dados de cliente (a rotina não pode enfileirar pauta com nome de cliente) e a "Radiografia do empreendedor brasileiro nos EUA" segue reservada para dezembro, conforme o roadmap.

Consequência prática: a partir da próxima reposição em português, o estoque de spokes planejados acabou. Sem decisão humana (liberar um case com autorização, antecipar a Radiografia, abrir um pilar novo ou liberar fonte de prazo de SEO), a rotina só conseguirá repor com spokes de reforço derivados do Search Console, que hoje não aponta nenhuma query em português na faixa de posição 8 a 30.
