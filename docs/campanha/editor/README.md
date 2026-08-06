# Importação no Google Ads Editor

Arquivos prontos para importar no Google Ads Editor. Evita digitar 11 grupos, 41 palavras-chave, 49 negativas e 11 anúncios na mão.

Os textos já foram validados contra os limites do Google: maior título com 28 de 30 caracteres, maior descrição com 86 de 90.

**Os cabeçalhos estão em inglês de propósito.** O Google Ads Editor lê os nomes das colunas no idioma da interface dele. Com cabeçalho em português ele responde "Missing CSV header" e "Some required columns have not been specified". Se o seu Editor estiver em português, troque os cabeçalhos por Campanha, Grupo de anúncios, Palavra-chave, Tipo de correspondência, Status e assim por diante.

Os arquivos também são gravados **sem BOM**. O Editor trata o BOM como parte do nome da primeira coluna e reclama de cabeçalho ausente.

## Arquivos

| Arquivo | Conteúdo |
| --- | --- |
| `01-ad-groups.csv` | 11 grupos com CPC máximo e status |
| `02-keywords.csv` | 41 palavras-chave com tipo de correspondência |
| `03-negative-keywords.csv` | 49 negativas nas duas campanhas |
| `04-ads.csv` | 11 anúncios responsivos com 15 títulos, 4 descrições e URL final com UTM |
| `negativas-para-colar.txt` | As mesmas 49 negativas em lista simples, para colar direto |

## Passo 1: criar as duas campanhas na mão

Isto vem antes de qualquer importação. Sem a campanha existindo, o Editor não sabe onde pendurar o grupo de anúncios.

Configuração de campanha também é a parte que a importação faz pior, e são só duas. Crie no próprio Editor, em **Campaigns > Add campaign**, com os nomes exatos:

**`Brasil | Pesquisa`**
- Tipo: Search only
- Orçamento diário: R$ 240
- Estratégia de lance: Maximize clicks, limite de CPC R$ 12
- Locais: Brasil
- Idiomas: Português
- Redes: **desmarcar** Display Network e search partners
- Data de término: definir

**`EUA PT | Pesquisa`**
- Tipo: Search only
- Orçamento diário: R$ 200
- Estratégia de lance: Maximize clicks, limite de CPC R$ 30
- Locais: Estados Unidos, com ajuste de +30% em Miami, Orlando, Fort Lauderdale, Pompano Beach, Boston, Framingham, Newark, Danbury, Atlanta e Houston
- Idiomas: **All languages**, não português (o porquê está em `../campanha.md`)
- Redes: **desmarcar** Display Network e search partners
- Data de término: definir

Os nomes precisam bater exatamente com a coluna `Campaign` dos CSVs, com o espaço antes e depois da barra vertical. Se não baterem, o Editor cria campanhas duplicadas.

## Passo 2: importar, na ordem numérica

Para cada arquivo: **Account > Import > From file**, escolher o CSV, conferir a prévia e aplicar.

A ordem importa: o Editor precisa do grupo existir antes da palavra-chave e antes do anúncio.

Se um arquivo der erro, o caminho alternativo costuma funcionar melhor: abra o CSV no Google Sheets, copie tudo incluindo o cabeçalho, e use **Account > Make multiple changes > Paste from clipboard**, marcando a opção de que a planilha inclui colunas de campanha e grupo de anúncios. Colar da área de transferência também elimina qualquer problema de codificação de acentos.

## Sobre as negativas

O cabeçalho aceito para negativas muda entre versões do Editor. Se o `03-negative-keywords.csv` não passar, faça pela interface, que leva o mesmo tempo:

1. Selecione a campanha
2. Vá em **Keywords and targeting > Keywords, Negative**
3. Escolha o nível de campanha
4. Cole o conteúdo de `negativas-para-colar.txt`
5. Repita na outra campanha

## Passo 3: revisar antes de publicar

- O grupo **Volume vigiado** está pausado (é o de risco, com `tráfego pago` e `gestor de tráfego`)
- As URLs finais apontam para `etuos.com/lp/seo` e `etuos.com/lp/trafego-pago`, não para as páginas de serviço
- O parâmetro `utm_term={keyword}` sobreviveu à importação. É ele que faz a planilha dizer qual palavra trouxe cada lead
- Os acentos não viraram símbolos estranhos nos títulos dos anúncios
- Nenhum erro pendente na aba de erros

Publicar dispara a revisão dos anúncios, que pode levar até um dia útil. Publique só depois de confirmar que o formulário está gravando na planilha.

## Recursos que ficam na interface web

O Editor não cria tudo. Depois de publicar, entre na interface web e adicione, na aba **Recursos**:

- **Sitelinks:** Quem é a Etuos (`/sobre`), Serviço de SEO (`/servicos/seo`), Tráfego pago (`/lp/trafego-pago`), Onde atendemos (`/eua`)
- **Frases de destaque:** Plano em 48 horas, Sem contrato, Atendimento em português, Mais de 10 anos, Fala direto com o dono, Sem promessa milagrosa
- **Snippets estruturados**, cabeçalho Serviços: SEO, Tráfego pago, Criação de sites, SEO local, Google Ads, Meta Ads

Confirme também que a **tag automática** está ligada em Configurações da conta, para o `gclid` chegar na planilha.
