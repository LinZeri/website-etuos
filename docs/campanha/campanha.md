# Campanha de crédito: SEO e tráfego pago

Configuração pronta para montar no Google Ads. Objetivo: converter R$ 880 de crédito em leads qualificados numa janela de 2 dias, sem comprar clique de quem procura curso.

Dados de apoio levantados no Keyword Planner via DataForSEO em agosto de 2026.

## Orçamento

| Campanha | Local | Diário | 2 dias |
| --- | --- | --- | --- |
| 1. Brasil | Brasil | R$ 240 | R$ 480 |
| 2. EUA em português | Estados Unidos | R$ 200 | R$ 400 |
| | | **R$ 440** | **R$ 880** |

O Google pode gastar até o dobro do orçamento diário num dia, compensando nos outros, mas nunca ultrapassa o diário multiplicado pelos dias da campanha. Com data de término definida, o teto de R$ 880 fica garantido.

## Configuração comum às duas

- **Tipo:** Rede de Pesquisa, sem parceiros de pesquisa e **sem rede de display** (a opção vem marcada por padrão e queima verba com clique acidental)
- **Estratégia de lance:** Maximizar cliques com limite de CPC. Não usar CPA desejado nem ROAS desejado: as duas precisam de histórico de conversão que a conta não tem
- **Data de término:** definir já na criação
- **Rotação de anúncios:** não otimizar, alternar indefinidamente (em 2 dias não há dados para o Google otimizar nada)
- **Dispositivos:** todos, sem ajuste

## Campanha 1: Brasil

**Orçamento:** R$ 240/dia. **Limite de CPC:** R$ 12. **Local:** Brasil. **Idioma:** Português.

| Grupo | Landing | Palavras-chave | Volume/mês |
| --- | --- | --- | --- |
| G1 SEO agência | `/lp/seo` | `[agência de seo]`, `[agencia seo]`, `[empresa de seo]`, `[seo agência]`, `"agência de seo"` | 1.300 + 390 + 170 |
| G2 SEO consultoria | `/lp/seo` | `[consultoria seo]`, `[consultor seo]`, `[especialista em seo]`, `[auditoria de seo]`, `[serviços de seo]`, `[otimização de sites]` | 1.000 + 590 + 320 + 140 + 50 |
| G3 SEO resultado | `/lp/seo` | `[aparecer no google]`, `[primeira página do google]`, `[posicionamento no google]`, `"como aparecer no google"` | 480 + 170 + 110 + 70 |
| G4 Tráfego pago agência | `/lp/trafego-pago` | `[agência de tráfego pago]`, `[gestão de tráfego pago]`, `[agência de google ads]`, `"agência de tráfego pago"` | 1.900 + 1.000 + 260 |
| G5 Anunciar no Google | `/lp/trafego-pago` | `[anunciar no google]`, `[anúncio no google]`, `[google ads para empresas]` | 1.600 + 1.300 |
| G6 Agência guarda-chuva | `/lp/trafego-pago` | `[agência de marketing digital]`, `[agência de publicidade]`, `[empresa de marketing digital]`, `[marketing digital para empresas]` | 8.100 + 4.400 + 170 |

**G7 Volume vigiado (criar pausado):** `"tráfego pago"` (60.500/mês) e `"gestor de tráfego"` (14.800/mês), só em correspondência de frase.

Só ative esse grupo se, depois das primeiras 6 horas, o gasto estiver muito abaixo do previsto. Esses dois termos têm volume enorme, mas a intenção dominante é gente querendo *virar* gestor de tráfego: curso, vaga, salário. Com o grupo ativo, o relatório de termos de pesquisa precisa ser revisto a cada poucas horas.

## Campanha 2: EUA em português

**Orçamento:** R$ 200/dia. **Limite de CPC:** R$ 30 (os CPCs lá são muito maiores: "seo local" está em R$ 46 e "marketing digital" em R$ 24).

**Local:** Estados Unidos, com ajuste de lance de +30% nas 10 cidades de `src/data/cidades.ts`: Miami, Orlando, Fort Lauderdale, Pompano Beach, Boston, Framingham, Newark, Danbury, Atlanta e Houston.

**Idioma: Todos os idiomas.** Isso é contraintuitivo e importante. A segmentação de idioma do Google Ads usa a configuração de interface do usuário, não o idioma da busca. Muitos brasileiros nos EUA usam o Google em inglês e digitam em português. Limitar a português cortaria boa parte do público. As próprias palavras-chave em português já fazem a filtragem.

| Grupo | Landing | Palavras-chave | Volume/mês |
| --- | --- | --- | --- |
| G1 SEO pt | `/lp/seo` | `[agência de seo]`, `[agencia de seo]`, `[consultoria seo]`, `[consultor seo]`, `[empresa de seo]`, `[serviços de seo]` | 1.000 + 590 + 70 + 50 |
| G2 SEO local pt | `/lp/seo` | `[seo local]`, `[google meu negócio]` | 1.000 + 720 |
| G3 Marketing digital pt | `/lp/trafego-pago` | `[agência de marketing digital]`, `[agencia de marketing digital]` | 1.300 |
| G4 Tráfego pago pt | `/lp/trafego-pago` | `[tráfego pago]`, `[agência de tráfego pago]`, `[gestor de tráfego]` | 320 + 260 + 20 |

**Onde está a oportunidade:** o G3 tem índice de concorrência **4 de 100**. Quase ninguém dá lance em "agência de marketing digital" em português dentro dos EUA. O G1 também está em concorrência baixa. É o público para o qual o site inteiro foi construído e ninguém está disputando.

## Palavras-chave negativas

Aplicar como **lista compartilhada** entre as duas campanhas. Esta é a peça que decide se o crédito vira lead ou lixo.

```
curso
cursos
curso de
grátis
gratis
gratuito
o que é
o que e
significado
como funciona
salário
salario
quanto ganha
vaga
vagas
emprego
freelancer
freela
junior
júnior
pleno
sênior
senior
estágio
estagiário
como ser
como virar
certificação
certificacao
formação
mentoria
aula
aulas
treinamento
apostila
pdf
download
tutorial
aprender
faculdade
ferramenta
ferramentas
plugin
semrush
ahrefs
rd station
hotmart
youtube
tiktok
```

## Anúncios

Um anúncio responsivo por grupo. Limites do Google: título até 30 caracteres, descrição até 90. Confira no editor antes de salvar.

### SEO, Brasil

Títulos: Plano de SEO em 48 horas / Agência de SEO com método / Seu site fora do Google? / Diagnóstico de SEO grátis / 10+ anos de marketing / Apareça no Google / SEO que traz cliente / Plano de ação sem custo / Análise do seu site / Sem promessa milagrosa / Agência de SEO no Brasil / Fale direto com o dono / Concorrente na sua frente? / SEO local e Google Maps / Peça seu plano hoje

Descrições:
- Receba em 48 horas o plano que mostra por que seu site não aparece no Google.
- Análise do seu site, dos concorrentes e a ordem para atacar. Sem custo e sem contrato.
- Mais de 10 anos de marketing digital e R$ 100 mil por mês em mídia gerenciada.
- Quem analisa seu site é o Lin, fundador da Etuos. Sem robô e sem estagiário.

### Tráfego pago, Brasil

Títulos: Plano de anúncios em 48h / Agência de tráfego pago / Pare de queimar dinheiro / Diagnóstico sem custo / Google e Meta Ads / Anúncio que traz cliente / Onde investir e quanto / Impulsionar post não vende / Verba e meta realistas / Gestão de tráfego pago / Fale direto com o dono / Sem contrato de fidelidade / Plano de ação grátis / 10+ anos de marketing / Peça seu plano hoje

Descrições:
- Receba em 48 horas onde investir, quanto investir e o que esperar de retorno.
- Analiso sua conta de anúncios e aponto o que está drenando verba sem retorno.
- De 30 para mais de 300 franquias em 1 ano e 8 meses com marketing digital.
- Se a conta não fechar com a sua verba, eu falo. Sem promessa milagrosa.

### EUA em português

Títulos: Agência de SEO brasileira / SEO para brasileiro nos EUA / Plano de ação em 48 horas / Atendimento em português / Apareça no Google dos EUA / Miami, Orlando e Boston / Seu negócio no Google Maps / Diagnóstico sem custo / 10+ anos de experiência / SEO local nos EUA / Fale direto com o dono / Sem promessa milagrosa / Público brasileiro e local / Plano de ação grátis / Peça seu plano hoje

Descrições:
- Agência brasileira que faz seu negócio nos EUA aparecer no Google. Em português.
- Receba em 48 horas o plano que mostra por que seu site não aparece nas buscas.
- Atendo brasileiros em Miami, Orlando, Boston, Newark, Atlanta e Houston.
- Falo português e inglês, trabalho no seu fuso e entendo o seu público.

## Recursos (extensões)

**Sitelinks:** Quem é a Etuos (`/sobre`), Serviço de SEO (`/servicos/seo`), Tráfego pago (`/lp/trafego-pago`), Onde atendemos (`/eua`)

**Frases de destaque:** Plano em 48 horas / Sem contrato / Atendimento em português / Mais de 10 anos / Fala direto com o dono / Sem promessa milagrosa

**Snippets estruturados** (cabeçalho Serviços): SEO, Tráfego pago, Criação de sites, SEO local, Google Ads, Meta Ads

## URLs finais com UTM (obrigatório)

Rodando sem tracking de conversão no Google Ads, as UTMs viram a única forma de saber qual grupo e qual palavra-chave trouxeram cada lead. O formulário grava tudo na planilha.

O `{keyword}` é um parâmetro ValueTrack: o Google troca pelo termo que de fato acionou o anúncio. É isso que faz cada linha da planilha dizer qual palavra pagou por aquele lead.

Cole a URL inteira no campo **URL final** do anúncio de cada grupo.

### Campanha 1: Brasil

| Grupo | URL final |
| --- | --- |
| G1 SEO agência | `https://etuos.com/lp/seo?utm_source=google&utm_medium=cpc&utm_campaign=br&utm_content=seo-agencia&utm_term={keyword}` |
| G2 SEO consultoria | `https://etuos.com/lp/seo?utm_source=google&utm_medium=cpc&utm_campaign=br&utm_content=seo-consultoria&utm_term={keyword}` |
| G3 SEO resultado | `https://etuos.com/lp/seo?utm_source=google&utm_medium=cpc&utm_campaign=br&utm_content=seo-resultado&utm_term={keyword}` |
| G4 Tráfego pago agência | `https://etuos.com/lp/trafego-pago?utm_source=google&utm_medium=cpc&utm_campaign=br&utm_content=tp-agencia&utm_term={keyword}` |
| G5 Anunciar no Google | `https://etuos.com/lp/trafego-pago?utm_source=google&utm_medium=cpc&utm_campaign=br&utm_content=tp-anunciar&utm_term={keyword}` |
| G6 Agência guarda-chuva | `https://etuos.com/lp/trafego-pago?utm_source=google&utm_medium=cpc&utm_campaign=br&utm_content=tp-guardachuva&utm_term={keyword}` |

### Campanha 2: EUA em português

| Grupo | URL final |
| --- | --- |
| G1 SEO pt | `https://etuos.com/lp/seo?utm_source=google&utm_medium=cpc&utm_campaign=eua&utm_content=seo-pt&utm_term={keyword}` |
| G2 SEO local pt | `https://etuos.com/lp/seo?utm_source=google&utm_medium=cpc&utm_campaign=eua&utm_content=seo-local-pt&utm_term={keyword}` |
| G3 Marketing digital pt | `https://etuos.com/lp/trafego-pago?utm_source=google&utm_medium=cpc&utm_campaign=eua&utm_content=mkt-digital-pt&utm_term={keyword}` |
| G4 Tráfego pago pt | `https://etuos.com/lp/trafego-pago?utm_source=google&utm_medium=cpc&utm_campaign=eua&utm_content=tp-pt&utm_term={keyword}` |

Confirme também que a **tag automática** está ligada em Configurações da conta. É ela que anexa o `gclid` ao link, e o formulário grava esse valor. Mesmo sem conversão configurada agora, o `gclid` guardado permite importar conversões offline mais para a frente, quando um lead virar cliente.

## Conversões (opcional nesta rodada)

Nesta campanha de 2 dias o tracking de conversão foi deixado de fora. A perda é pequena: com estratégia de Maximizar cliques e apenas 48 horas, o Google não teria tempo de otimizar por conversão de qualquer forma. A leitura de resultado sai da planilha, via UTMs.

Duas coisas para não fazer nesse cenário:

- **Não aceitar a recomendação do Google para mudar de estratégia de lance.** Ele vai insistir em Maximizar conversões, que sem dados de conversão gasta às cegas
- **Não estranhar a coluna de conversões zerada.** Ela vai ficar zerada mesmo, e não significa que a campanha não trouxe lead

Quando quiser ligar, criar duas ações em Metas > Conversões > Nova ação de conversão > Site, com configuração manual da tag:

| Nome | Categoria | Onde dispara |
| --- | --- | --- |
| Lead formulário | Enviar formulário de lead | Sucesso do envio nas landings |
| Lead WhatsApp | Contato | Clique no botão de WhatsApp das landings |

Ao criar cada uma, o Google mostra o `send_to` no formato `AW-XXXXXXXXX/AbCdEfGhIj`. A parte antes da barra vai em `NEXT_PUBLIC_GOOGLE_ADS_ID` e a parte depois vai nos rótulos. Veja `.env.example`.

Marque **Lead formulário** como conversão principal e **Lead WhatsApp** como secundária, para não contar a mesma pessoa duas vezes na otimização.

## Ordem de lançamento

A revisão de anúncios pode levar até um dia útil, e esse é o maior risco numa janela de 2 dias.

1. Landings publicadas em produção e abrindo normalmente
2. Apps Script publicado e formulário gravando de verdade na planilha
3. Conversões criadas, variáveis cadastradas na Vercel, **novo deploy** (variáveis `NEXT_PUBLIC_` só entram no build)
4. Política de privacidade no ar
5. Só então criar campanhas e anúncios

Não vale subir os anúncios apontando para outra página e trocar o URL depois: alterar o URL final reinicia a revisão.

## Monitoramento durante a veiculação

- **Primeiras 2 horas:** confirmar que os anúncios foram aprovados e que há impressão. Se o gasto estiver perto de zero, o problema costuma ser lance baixo ou anúncio ainda em revisão
- **A cada poucas horas:** abrir o relatório de termos de pesquisa e adicionar negativas novas. Com termos de tráfego pago na conta, isso é obrigatório
- **Fim do dia 1:** comparar gasto real com R$ 440. Se estiver bem abaixo, subir o limite de CPC antes de ativar o grupo G7
- **Sempre:** responder os leads rápido. O gancho promete plano em 48 horas e a promessa vale mais que a campanha
