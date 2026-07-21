# Escopo do site da Etuos

## O que é a Etuos

A Etuos é uma agência de marketing digital focada em brasileiros que empreendem nos Estados Unidos. Também atende clientes no Brasil. A empresa é 100% remota, sem endereço público: o contato é feito por WhatsApp e e-mail.

## Público-alvo

- **Primário:** brasileiros donos de negócio nos Estados Unidos (serviços, comércio, construção, beleza, alimentação, saúde, entre outros). Dores principais: atrair clientes com previsibilidade, competir no mercado americano, barreira do idioma e falta de tempo para cuidar do marketing.
- **Secundário:** empreendedores no Brasil que querem os mesmos serviços.

## Objetivo do site

Gerar contatos qualificados no WhatsApp. Todas as páginas levam para esse CTA. O site também constrói autoridade via SEO (páginas de cidade e blog).

## Stack e hospedagem

- Next.js (App Router) + TypeScript + Tailwind CSS, 100% estático (SSG)
- Código no GitHub (`LinZeri/website-etuos`), deploy na Vercel
- Domínio: `etuos.com`
- Idioma: português do Brasil, sem versão em inglês por enquanto

## Mapa do site

| Rota | Página | Objetivo | CTA |
| --- | --- | --- | --- |
| `/` | Home | Conversão: promessa clara, prova social, serviços, cidades | WhatsApp |
| `/sobre` | Sobre | Confiança: quem somos, por que existimos | WhatsApp |
| `/servicos` | Hub de serviços | Direcionar para o serviço certo | Links + WhatsApp |
| `/servicos/trafego-pago` | Tráfego pago | Vender gestão de Google e Meta Ads | WhatsApp |
| `/servicos/seo` | SEO | Vender posicionamento orgânico e SEO local | WhatsApp |
| `/servicos/criacao-de-sites` | Criação de sites | Vender sites e landing pages | WhatsApp |
| `/cidades/[slug]` | 10 páginas de cidade | SEO local + conversão regional | WhatsApp |
| `/blog` | Lista de artigos | SEO topo de funil | Links para artigos |
| `/blog/[slug]` | Artigo | SEO + autoridade | WhatsApp no fim do artigo |
| `/contato` | Contato | Conversão direta | WhatsApp + e-mail |
| `/politica-de-privacidade` | Legal | Obrigação legal | Nenhum |

## Home (prioridade máxima de conversão)

Seções previstas:

1. Herói com promessa clara e CTA WhatsApp
2. Prova social (depoimentos, resultados, logos de clientes)
3. Serviços (3 cards)
4. Cidades atendidas
5. Como funciona (processo em 3 ou 4 passos)
6. CTA final

## Serviços (3 páginas)

1. **Tráfego pago:** gestão de Google Ads e Meta Ads (Instagram e Facebook)
2. **SEO:** posicionamento orgânico no Google, incluindo SEO local
3. **Criação de sites:** sites institucionais e landing pages focadas em conversão

Cada página de serviço deve ter: dor do cliente, como o serviço resolve, o que está incluso, processo, prova social e CTA.

## Páginas de cidade (10 no lançamento)

Miami, Orlando, Fort Lauderdale, Pompano Beach (FL); Boston, Framingham (MA); Newark (NJ); Danbury (CT); Atlanta (GA); Houston (TX).

Regra de qualidade: cada página precisa de conteúdo único sobre a comunidade brasileira e o mercado local daquela cidade. Proibido duplicar texto trocando apenas o nome da cidade. Novas cidades podem ser adicionadas em `src/data/cidades.ts`.

## Blog

- Artigos em MDX versionados no repo (`content/blog/*.mdx`)
- Papel: atrair tráfego orgânico de topo e meio de funil e alimentar as redes
- Pautas orientadas por SEO (ver `docs/seo.md`)

## Fora do escopo (por enquanto)

- Versão em inglês / i18n
- CMS ou painel de administração
- Área logada, e-commerce, pagamentos
- Formulários com backend (a conversão é via WhatsApp)
