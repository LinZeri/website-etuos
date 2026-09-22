# Domínios confiáveis do blog-loop

Documento vivo, revisado em 22/09/2026. Ele tem dois usos, e os dois leem a mesma lista:

1. **Liberação de rede das rotinas em nuvem.** A sessão de nuvem roda com egresso fechado por padrão: sem liberar, `WebFetch` e `curl` falham e o factcheck não roda. A lista da seção "Lista para o allowlist" é a que fica cadastrada no *environment* usado pelas rotinas (claude.ai > Code > Environments > Network access > Custom).
2. **Critério de citação.** Artigo do blog só cita estatística cuja fonte esteja em um domínio desta lista. Fonte fora daqui: ou não entra, ou o domínio é acrescentado aqui antes, com justificativa.

Regra prática ao escrever: **fonte primária vence secundária**. Entre um número no `census.gov` e o mesmo número repetido num blog de agência, cita o `census.gov`.

## Por que um domínio entra aqui

- **Órgão oficial ou instituto de pesquisa**: dado primário, metodologia pública.
- **Documentação oficial de plataforma**: a regra do Google Ads, do Meta ou do Google Business Profile vem da própria plataforma, nunca de terceiro.
- **Pesquisa de mercado com amostra publicada**: entra quando a metodologia está aberta e a data é recente.
- **Imprensa de negócios**: entra como ponte para a fonte primária, não como fonte final.

Nunca entram: agregadores de conteúdo gerado por IA, sites de "estatísticas" sem metodologia, conteúdo de concorrente direto usado como dado, e qualquer página atrás de paywall que impeça a verificação.

## Infraestrutura (obrigatório para a rotina funcionar)

Sem estes a rotina nem chega a escrever: são clone, dependências, build e geração de imagem.

| Domínio | Para quê |
|---|---|
| `github.com`, `api.github.com`, `codeload.github.com`, `objects.githubusercontent.com` | clone, pull e push do repo |
| `registry.npmjs.org` | `npm ci` antes do `npm run build` |
| `fonts.googleapis.com`, `fonts.gstatic.com` | `next/font/google` baixa Anton e Inter durante o build |
| `generativelanguage.googleapis.com` | Gemini, usado por `scripts/gerar-imagem-blog.mjs` |
| `api.anthropic.com` | sessão do próprio Claude (já liberado por padrão) |
| `pypi.org`, `files.pythonhosted.org` | reserva, caso algum helper precise instalar pacote |

## Fontes de dados

### Estados Unidos, oficiais
`census.gov`, `bls.gov`, `sba.gov`, `ftc.gov`, `irs.gov`, `federalreserve.gov`, `uscis.gov`, `dhs.gov`, `usa.gov`

### Brasil, oficiais
`ibge.gov.br`, `gov.br`, `bcb.gov.br`, `ipea.gov.br`, `sebrae.com.br`, `apexbrasil.com.br`, `fgv.br`

### Institutos de pesquisa
`pewresearch.org`, `migrationpolicy.org`, `nielsen.com`, `datareportal.com`, `statista.com`, `emarketer.com`

### Documentação oficial de plataforma
`support.google.com`, `developers.google.com`, `business.google.com`, `blog.google`, `thinkwithgoogle.com`, `web.dev`, `schema.org`, `about.fb.com`, `developers.facebook.com`, `business.facebook.com`, `help.instagram.com`, `faq.whatsapp.com`, `business.whatsapp.com`, `business.tiktok.com`, `business.linkedin.com`, `business.yelp.com`, `help.nextdoor.com`

### Mercado, SEO e marketing (secundárias)
`semrush.com`, `ahrefs.com`, `moz.com`, `similarweb.com`, `brightlocal.com`, `sparktoro.com`, `backlinko.com`, `searchengineland.com`, `searchenginejournal.com`, `hubspot.com`, `wordstream.com`, `localiq.com`, `sproutsocial.com`, `gs.statcounter.com`

### Consultorias e imprensa de negócios
`mckinsey.com`, `deloitte.com`, `pwc.com`, `reuters.com`, `cnbc.com`, `forbes.com`, `inc.com`, `entrepreneur.com`, `smallbiztrends.com`, `g1.globo.com`, `valor.globo.com`, `exame.com`, `infomoney.com.br`

## Lista para o allowlist

Cole no campo de domínios permitidos do environment das rotinas. Um por linha:

```
github.com
api.github.com
codeload.github.com
objects.githubusercontent.com
registry.npmjs.org
fonts.googleapis.com
fonts.gstatic.com
generativelanguage.googleapis.com
pypi.org
files.pythonhosted.org
census.gov
bls.gov
sba.gov
ftc.gov
irs.gov
federalreserve.gov
uscis.gov
dhs.gov
usa.gov
ibge.gov.br
gov.br
bcb.gov.br
ipea.gov.br
sebrae.com.br
apexbrasil.com.br
fgv.br
pewresearch.org
migrationpolicy.org
nielsen.com
datareportal.com
statista.com
emarketer.com
support.google.com
developers.google.com
business.google.com
blog.google
thinkwithgoogle.com
web.dev
schema.org
about.fb.com
developers.facebook.com
business.facebook.com
help.instagram.com
faq.whatsapp.com
business.whatsapp.com
business.tiktok.com
business.linkedin.com
business.yelp.com
help.nextdoor.com
semrush.com
ahrefs.com
moz.com
similarweb.com
brightlocal.com
sparktoro.com
backlinko.com
searchengineland.com
searchenginejournal.com
hubspot.com
wordstream.com
localiq.com
sproutsocial.com
gs.statcounter.com
mckinsey.com
deloitte.com
pwc.com
reuters.com
cnbc.com
forbes.com
inc.com
entrepreneur.com
smallbiztrends.com
g1.globo.com
valor.globo.com
exame.com
infomoney.com.br
```

## Como alterar

Domínio novo entra por uma destas duas portas:

1. Um artigo precisou de um dado que só existe lá, e a fonte passa nos critérios acima.
2. A infraestrutura passou a depender do domínio (uma dependência de build nova, por exemplo).

Acrescente o domínio na seção temática **e** no bloco do allowlist, e atualize o environment na claude.ai. Enquanto o environment não for atualizado, o domínio novo não funciona na nuvem, mesmo estando aqui.
