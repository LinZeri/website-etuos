# Planilha de leads da campanha

O formulário das landings (`/lp/seo` e `/lp/trafego-pago`) manda os dados para um Web App do Google Apps Script, que grava tudo numa planilha sua. Nada passa por terceiros e nada quebra a regra de site estático: é só um `fetch` do navegador para uma URL externa.

## Passo a passo (uns 5 minutos)

1. Crie uma planilha nova no Google Sheets. Nome sugerido: **Leads campanha Etuos**.
2. Na planilha, vá em **Extensões > Apps Script**.
3. Apague o conteúdo do arquivo `Código.gs` e cole o conteúdo de [apps-script.gs](apps-script.gs).
4. Se quiser aviso por e-mail a cada lead novo, preencha a primeira linha:
   ```js
   var EMAIL_AVISO = 'seu-email@exemplo.com';
   ```
   Deixando vazio, o script só grava na planilha.
5. Salve (ícone de disquete).
6. Clique em **Implantar > Nova implantação**.
7. No ícone de engrenagem, escolha **App da Web**.
8. Configure exatamente assim:
   - **Descrição:** formulário das landings
   - **Executar como:** Eu (sua conta)
   - **Quem pode acessar:** Qualquer pessoa
9. Clique em **Implantar**. O Google vai pedir autorização: aceite. Na tela de aviso, clique em **Avançado > Acessar (nome do projeto)**.
10. Copie a **URL do app da Web**. Ela termina em `/exec`.

## Ligando no site

Cole a URL na variável `NEXT_PUBLIC_FORM_ENDPOINT`:

- Localmente, no arquivo `.env.local`
- Na Vercel, em **Settings > Environment Variables**

**Importante:** variáveis `NEXT_PUBLIC_` são embutidas no momento do build. Depois de cadastrar na Vercel, é obrigatório fazer um novo deploy, senão elas chegam vazias no navegador.

## O que cai na planilha

Uma coluna por campo, nesta ordem:

| Coluna | De onde vem |
| --- | --- |
| `enviadoEm` | Data e hora do envio |
| `origem` | `seo` ou `trafego-pago`, conforme a landing |
| `nome`, `whatsapp`, `site`, `pais`, `cidade` | O que a pessoa preencheu |
| `gclid`, `wbraid`, `gbraid` | Identificador do clique no anúncio |
| `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content` | UTMs da URL |
| `pagina`, `referencia`, `userAgent` | Contexto da visita |

O `gclid` é o campo mais valioso da planilha. É ele que permite, semanas depois, importar conversões offline no Google Ads quando um lead virar cliente de verdade, ensinando o algoritmo quem realmente vale a pena. Guarde a planilha.

## Se precisar mexer no script depois

Toda alteração no código só entra no ar em **Implantar > Gerenciar implantações > Editar > Nova versão**. Se você só salvar, o Web App continua servindo a versão antiga.

## Teste rápido

Com o site rodando em `npm run dev`, abra:

```
http://localhost:3000/lp/seo?gclid=TESTE123&utm_source=google&utm_campaign=teste
```

Preencha e envie. A linha deve aparecer na planilha com `gclid` igual a `TESTE123`.
