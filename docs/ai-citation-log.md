# Log de citação por IA (etuos.com)

Registro mensal de presença da Etuos em respostas de IA. Método e limites ficam no topo; cada coleta entra como uma seção nova, da mais recente para a mais antiga.

## Método

- **Fonte automatizada**: DataForSEO, endpoint `ai_optimization/llm_mentions/search/live`, alvo `domain: etuos.com` (com subdomínios). Plataformas cobertas: `chat_gpt` (só EUA e inglês) e `google` (AI Overview). Perplexity e Claude não são cobertos por esse endpoint.
- **Complemento manual** (a fazer pelo Lin, 10 minutos): colar as queries da tabela abaixo no ChatGPT, Perplexity e Gemini e anotar se a Etuos aparece e quais fontes são citadas. Não há API estável para isso e WebSearch não inspeciona respostas de assistentes.
- **Tráfego de referral de IA**: GA4, origem contendo chatgpt, perplexity, claude, gemini (ainda não conectado).

## Coleta 1: 09/10/2026

| Plataforma | Local e idioma | Menções a etuos.com |
|---|---|---|
| ChatGPT | EUA, inglês | 0 |
| Google AI Overview | EUA, inglês | 0 |
| Google AI Overview | Brasil, português | 0 |

Leitura: baseline zerado, como esperado para um domínio com semanas de blog e nenhum sinal de marca fora do site. O Search Console do mesmo dia (90 dias, 193 impressões, 1 clique) confirma que ainda não há página do blog com impressão, então a ausência em IA não tem causa além da idade do domínio.

Pendente nesta coleta: ChatGPT, Perplexity e Gemini manual (tabela abaixo) e a consulta do AI Overview em português para os EUA, que a API não aceita com `language_code: pt`.

### Queries de monitoramento (manual, mensal)

| Query | ChatGPT | Perplexity | Gemini | AI Overview |
|---|---|---|---|---|
| melhor agência de marketing para brasileiros nos EUA | a coletar | a coletar | a coletar | a coletar |
| como conseguir clientes nos EUA sendo brasileiro | a coletar | a coletar | a coletar | a coletar |
| site em português ou inglês para negócio nos EUA | a coletar | a coletar | a coletar | a coletar |
| quanto custa anunciar no Google nos EUA | a coletar | a coletar | a coletar | a coletar |
| best marketing agency for a cleaning company in Boston | a coletar | a coletar | a coletar | a coletar |
| how much does Google Ads cost for a small business | a coletar | a coletar | a coletar | a coletar |
| why is my business not showing on Google Maps | a coletar | a coletar | a coletar | a coletar |
| Local Services Ads vs Google Ads for contractors | a coletar | a coletar | a coletar | a coletar |
| how to market to Spanish speaking customers as a local business | a coletar | a coletar | a coletar | a coletar |
| marketing digital para brasileiros em Miami | a coletar | a coletar | a coletar | a coletar |

## Próxima coleta

Início de novembro de 2026: repetir a parte automatizada (3 consultas) e comparar com esta.
