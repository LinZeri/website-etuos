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
- Idiomas: português do Brasil (língua fonte), inglês e espanhol, em subpastas do mesmo domínio (`/pt`, `/en`, `/es`). Não há domínio nem subdomínio por idioma. A raiz `/` só redireciona (cookie do seletor > idioma do navegador > país do IP > inglês).

## Mapa do site

Toda rota existe nos três idiomas, com slug traduzido (tabela completa em `docs/seo.md`). Abaixo, a rota em português.

| Rota | Página | Objetivo | CTA |
| --- | --- | --- | --- |
| `/` | Raiz | Só redireciona para `/pt`, `/en` ou `/es` | Nenhum |
| `/pt` | Home | Conversão genérica: promessa clara, prova social, serviços, direcionamento para EUA ou Brasil | WhatsApp |
| `/pt/eua` | Página EUA | Conversão focada em brasileiros que empreendem nos Estados Unidos (cidades atendidas) | WhatsApp |
| `/pt/brasil` | Página Brasil | Conversão focada em negócios e profissionais no Brasil | WhatsApp |
| `/pt/sobre` | Sobre | Confiança: quem somos, por que existimos | WhatsApp |
| `/pt/servicos` | Hub de serviços | Direcionar para o serviço certo | Links + WhatsApp |
| `/pt/servicos/trafego-pago` | Tráfego pago | Vender gestão de Google e Meta Ads | WhatsApp |
| `/pt/servicos/seo` | SEO | Vender posicionamento orgânico e SEO local | WhatsApp |
| `/pt/servicos/criacao-de-sites` | Criação de sites | Vender sites e landing pages | WhatsApp |
| `/pt/cidades/[slug]` | 10 páginas de cidade | SEO local + conversão regional | WhatsApp |
| `/pt/blog` | Lista de artigos | SEO topo de funil | Links para artigos |
| `/pt/blog/[slug]` | Artigo | SEO + autoridade | WhatsApp no fim do artigo |
| `/pt/contato` | Contato | Conversão direta | WhatsApp |
| `/pt/politica-de-privacidade` | Legal | Obrigação legal | Nenhum |
| `/pt/lp/seo`, `/pt/lp/trafego-pago` | Landings de campanha (noindex) | Conversão de anúncio pago, com formulário | Formulário + WhatsApp |

Públicos por idioma: `/pt` fala com brasileiros (no Brasil e nos EUA); `/en` com o dono de negócio nos Estados Unidos em geral; `/es` com a comunidade hispânica nos Estados Unidos.

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

Regra de qualidade: cada página precisa de conteúdo único sobre o mercado local daquela cidade, em cada idioma (pt: comunidade brasileira; en: dono de negócio local; es: comunidade hispânica). Proibido duplicar texto trocando apenas o nome da cidade ou traduzir a versão pt. Novas cidades entram em `src/i18n/mapa-slugs.ts` e em `src/data/cidades/{base,pt,en,es}.ts`.

## Blog

- Artigos em MDX versionados no repo (`content/blog/<idioma>/*.mdx`); traduções ligadas pelo campo `grupo`
- Papel: atrair tráfego orgânico de topo e meio de funil e alimentar as redes
- Pautas orientadas por SEO (ver `docs/seo.md`)

## Fora do escopo (por enquanto)

- Domínio ou subdomínio separado por idioma (a arquitetura é subpasta no mesmo domínio)
- CMS ou painel de administração
- Área logada, e-commerce, pagamentos
- Formulários com backend (a conversão é via WhatsApp)
