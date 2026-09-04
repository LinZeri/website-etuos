// Copy da política de privacidade em português (língua fonte).
export const privacidadePt = {
  metaTitulo: "Política de privacidade",
  metaDescricao:
    "Como a Etuos coleta, usa e protege os dados de quem visita o site e preenche os formulários, de acordo com a LGPD.",
  titulo: "Política de privacidade",
  intro:
    "Atualizada em 6 de agosto de 2026. Em bom português, sem juridiquês: o que a gente coleta, para que usa e como você pede para apagar.",
  secoes: [
    {
      titulo: "Quem é o responsável pelos seus dados",
      paragrafos: [
        "A Etuos é uma agência de marketing digital fundada e operada por Lin Zeri, que atende negócios no Brasil e brasileiros que empreendem nos Estados Unidos. A Etuos é a controladora dos dados pessoais tratados neste site, nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018).",
        "Todo contato sobre privacidade é feito pelo WhatsApp oficial da Etuos, no fim desta página. A Etuos não mantém e-mail público de atendimento.",
      ],
    },
    {
      titulo: "Que dados a gente coleta",
      paragrafos: [
        "Quando você preenche um formulário no site, coletamos o que você digita: nome, número de WhatsApp, endereço do seu site e a cidade e o país onde o seu negócio fica.",
        "Junto com o envio, registramos também dados técnicos da visita: a página em que você estava, de onde você veio, o navegador que usou, a data e a hora, e os identificadores de campanha que acompanham o link do anúncio (gclid, wbraid, gbraid e parâmetros UTM). Esses identificadores servem para sabermos qual anúncio trouxe você.",
        "Quando você clica para falar no WhatsApp, você é levado para o aplicativo e a conversa passa a ser regida também pela política de privacidade do WhatsApp, que não é controlada pela Etuos.",
      ],
    },
    {
      titulo: "Para que usamos",
      paragrafos: [
        "Para responder você, montar o plano de ação ou a proposta que você pediu e dar continuidade à conversa sobre o seu negócio. Essa é a finalidade principal e a base legal é a execução de procedimentos preliminares a um contrato, a seu pedido.",
        "Para medir o resultado dos nossos anúncios e entender quais campanhas trazem contatos de verdade. Aqui a base legal é o legítimo interesse, e o tratamento se limita ao necessário para essa medição.",
        "A gente não vende, aluga nem troca os seus dados com ninguém. Também não usamos os seus dados para disparo de mensagens em massa.",
      ],
    },
    {
      titulo: "Com quem compartilhamos",
      paragrafos: [
        "Os dados dos formulários ficam guardados no Google Workspace (Google Sheets e Google Apps Script), em conta controlada pela Etuos.",
        "O site é hospedado na Vercel e utiliza a tag do Google Ads para medir conversões. Esses fornecedores tratam dados como operadores, seguindo as nossas instruções e as próprias políticas de privacidade deles.",
        "Podemos compartilhar dados quando houver obrigação legal ou ordem de autoridade competente.",
      ],
    },
    {
      titulo: "Cookies e medição",
      paragrafos: [
        "Este site usa a tag do Google Ads, que grava cookies para reconhecer quando um clique em anúncio virou um contato. Essa medição é agregada e não serve para identificar você individualmente do nosso lado.",
        "O site também grava um cookie próprio, chamado etuos_idioma, quando você escolhe um idioma no menu. Ele serve só para abrir o site no idioma certo na próxima visita e não identifica você.",
        "Você pode bloquear ou apagar cookies nas configurações do seu navegador. O site continua funcionando normalmente, só a medição das campanhas fica menos precisa.",
      ],
    },
    {
      titulo: "Por quanto tempo guardamos",
      paragrafos: [
        "Mantemos os dados de contato enquanto durar a conversa comercial e, depois disso, por até 2 anos, prazo em que ainda faz sentido retomar o assunto. Passado esse período, ou antes disso se você pedir, os dados são apagados.",
      ],
    },
    {
      titulo: "Seus direitos",
      paragrafos: [
        "A LGPD garante que você possa confirmar se tratamos os seus dados, acessar o que temos, corrigir informação errada, pedir a exclusão, revogar o consentimento e se opor ao tratamento feito com base em legítimo interesse.",
        "Para exercer qualquer um desses direitos, é só chamar no WhatsApp. Respondemos em até 15 dias.",
      ],
    },
    {
      titulo: "Segurança",
      paragrafos: [
        "O site é servido inteiramente por HTTPS e o acesso à planilha de contatos é restrito à conta da Etuos, com autenticação em duas etapas. Nenhum sistema é infalível, mas tratamos os seus dados com o cuidado que gostaríamos que tratassem os nossos.",
      ],
    },
    {
      titulo: "Mudanças nesta política",
      paragrafos: [
        "Se algo mudar na forma como tratamos dados, atualizamos esta página e a data no topo. Vale a pena revisitar de vez em quando.",
      ],
    },
  ],
  caixa: {
    titulo: "Falar sobre os seus dados",
    texto:
      "Quer saber o que temos guardado, corrigir alguma coisa ou pedir que a gente apague tudo? Chama no WhatsApp que resolvemos.",
    botao: "Falar sobre privacidade",
    mensagem:
      "Olá! Vim pela política de privacidade do site da Etuos e quero falar sobre os meus dados.",
  },
};

export type ConteudoPrivacidade = typeof privacidadePt;
