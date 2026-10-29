# Calendário do blog em português: dezembro de 2026

Planejado em 29/10/2026. Cadência: 4 artigos por semana, em segunda, terça, quinta e sexta (01/12 a 22/12, 13 datas), mais 2 na semana de 28/12 (28 e 29/12). Sem posts em 24, 25 e 31/12. Produção por sessão local (`docs/blog-loop-sessao-local.md`). Fonte: `docs/blog-queue.json` (15 itens pendentes, ordenados por `publish_date`). Registro de fontes consultado: `docs/blog-fontes-verificadas.md` (S, T1 a T31, N1 a N7, M1 a M3, W1, W2, O1).

Legenda: **A** = sustentado pelo registro atual. **B** = precisa de fonte nova verificada por WebFetch antes de escrever. **C** = depende de material ou autorização do dono, ou setor regulado: nenhum item C neste mês.

Resumo: **11 itens A e 4 itens B** (limite 5). Os B ficam depois da primeira semana, para dar tempo de verificar: radiografia (10/12), site lento (18/12), Pixel da Meta (21/12) e domínio e e-mail (22/12). Cada B tem plano B na `notes` do item (versão qualitativa curta ou troca pela reserva).

## Calendário

| Data | Dia | Slug | Título | Pilar | Pront. | Fontes (IDs) ou URLs a verificar |
|---|---|---|---|---|---|---|
| 01/12 | ter | `crm-para-pequenas-empresas-o-que-voce-precisa` | CRM para pequenas empresas: planilha, WhatsApp ou sistema? | 7 | A (fraco) | W1, W2 |
| 03/12 | qui | `landing-page-ou-site-o-que-o-negocio-precisa-primeiro` | Landing page ou site: o que o seu negócio precisa primeiro | 5 | A | S32, S35, T11 |
| 04/12 | sex | `sinais-de-que-sua-agencia-de-marketing-nao-esta-funcionando` | Sinais de que sua agência de marketing não está funcionando | 8 | A | T27, T28, S37, T14, S10, S27, S34, S35, S15 |
| 07/12 | seg | `como-saber-de-onde-vem-seus-clientes-rastrear-whatsapp-ligacao-formulario` | Como saber de onde vêm seus clientes | 7 | A | T21 a T26, W1, W2 |
| 08/12 | ter | `o-que-um-relatorio-de-marketing-deve-mostrar` | O que um relatório de marketing deve mostrar (e o que é métrica de vaidade) | 8 | A | S37, T14, T9, T21 |
| 10/12 | qui | `radiografia-do-empreendedor-brasileiro-nos-eua` | Radiografia do empreendedor brasileiro nos EUA | 4 | B | N2, N3, N4, N6 + verificar census.gov, bls.gov, sba.gov |
| 11/12 | sex | `marketing-para-loja-de-roupas-vender-no-bairro-e-no-instagram` | Marketing para loja de roupas | 6 | A | S10, S11, S14, S15, S9 |
| 14/12 | seg | `como-atrair-clientes-para-negocio-local-os-canais-comparados` | Como atrair clientes para negócio local: os canais comparados | 7 | A (risco de canibalização) | S10, T8, T6, W1, W2 |
| 15/12 | ter | `marketing-para-eventos-como-lotar-sem-depender-de-indicacao` | Marketing para eventos | 6 | A | S10, S11, S18, S15, S9 |
| 17/12 | qui | `marketing-para-imobiliaria-e-corretor-do-brasil-ao-realtor-brasileiro-nos-eua` | Marketing para imobiliária e corretor | 6 | A (setor regulado, só busca local) | S10, S11, S14, S15, S9, S18 |
| 18/12 | sex | `site-lento-no-celular-como-medir-e-o-que-resolver-primeiro` | Site lento no celular: como medir e o que resolver primeiro | 5 | B | S32 + verificar web.dev/articles/vitals, lcp, inp e PageSpeed Insights |
| 21/12 | seg | `pixel-da-meta-o-que-e-como-instalar-e-o-que-ele-mede` | Pixel da Meta: o que é, como instalar e o que ele mede | 7 | B (teste) | Verificar developers.facebook.com/docs/meta-pixel |
| 22/12 | ter | `dominio-hospedagem-e-email-profissional-o-basico-sem-complicacao` | Domínio, hospedagem e e-mail profissional | 5 | B | S41 + verificar suporte do Google |
| 28/12 | seg | `checklist-de-marketing-para-comecar-o-ano-negocio-local` | Checklist de marketing para começar o ano | 7 | A | só regras já registradas |
| 29/12 | ter | `seo-ou-trafego-pago-o-que-fazer-primeiro` | SEO ou tráfego pago: o que fazer primeiro | 2 | A | S10, S27, T5, T10, T11 |

Pilares: 5 com 3, 6 com 3, 7 com 4, 8 com 2, 4 com 1, 2 com 1. O pilar 6 usa o hub de 24/11 (os spokes de loja de roupas, eventos e imobiliária linkam o hub).

## Ordem de verificação (semana de 02/11 a 06/12, antes da produção dos B)

1. **Pixel da Meta (21/12):** teste de WebFetch em `developers.facebook.com/docs/meta-pixel` (autorizado pelo dono em 28/10). Se o corpo não abrir ou as duas chamadas divergirem, o item cai: antecipar `seo-ou-trafego-pago-o-que-fazer-primeiro` para 21/12, mover a data de 29/12 para o item de reserva do GSC e anotar o domínio como bloqueado em `docs/blog-dominios-confiaveis.md`.
2. **Radiografia (10/12):** tentar `census.gov` (tabelas do ACS sobre população nascida no Brasil e trabalho por conta própria), `bls.gov` e `sba.gov`. Se nada abrir, usar N2, N4 e N6 e reduzir para 1.300 palavras, ou trocar pela reserva.
3. **Site lento (18/12):** `web.dev/articles/vitals`, `lcp`, `inp` e a documentação do PageSpeed Insights. Limiar numérico só se for literal e registrado.
4. **Domínio e e-mail (22/12):** fonte além de S41 só em `support.google.com`; sem ela, o post fica curto e qualitativo, ou cai.

## Canibalização e riscos

- **Atrair clientes (14/12):** risco alto com `como-conseguir-clientes-nos-eua` e `google-ads-ou-meta-ads-onde-investir-primeiro`. O post decide por perfil de negócio e linka os dois. Se virar repetição, trocar pela reserva.
- **Rastrear origem (07/12):** o post de 26/11 trata do botão e da medição do clique; este trata da origem do cliente. Não citar o formato `wa.me` (sem fonte).
- **Agência (04/12 e 08/12):** tom de autoridade mantido (decisão do dono, 28/10), sem preço, garantia ou cliente; 04/12 é diagnóstico, não repete as 10 perguntas de 17/11.
- **Setores (11/12, 15/12, 17/12):** sem dado de setor e sem fonte da Meta. Imobiliária é setor regulado: nenhuma regra afirmada sem fonte.
- **CRM (01/12):** é o A mais fraco; se não sustentar 1.500 palavras sem produto, reduzir para 1.200.
- **Atualizações de frescor (fora do calendário, precisam de decisão):** o reforço de `anunciar-em-ingles-ou-portugues` ("anúncio em inglês" no título e num H2) segue pendente. Reler o GSC em 14/12.
- **Fim de ano:** 28 e 29/12 em cadência mínima; sem posts em 24, 25 e 31/12.
- **Deploy diário:** post futuro só entra num deploy da data ou depois (workflow `deploy-diario.yml`); conferir que o segredo `VERCEL_DEPLOY_HOOK` segue válido.
