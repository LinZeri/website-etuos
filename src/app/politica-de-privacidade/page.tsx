import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Como a Etuos coleta, usa e protege os dados de quem visita o site e preenche os formulários, de acordo com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
};

const secoes = [
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
];

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <section className="grid-dark bg-foreground text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {site.nome}
          </p>
          <h1 className="mt-4 text-4xl leading-[0.95] md:text-5xl">
            Política de privacidade
          </h1>
          <p className="mt-6 text-white/70">
            Atualizada em 6 de agosto de 2026. Em bom português, sem juridiquês:
            o que a gente coleta, para que usa e como você pede para apagar.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <div className="grid gap-12">
          {secoes.map((secao) => (
            <section key={secao.titulo}>
              <h2 className="text-2xl md:text-3xl">{secao.titulo}</h2>
              <div className="mt-5 space-y-4 leading-relaxed text-foreground/85">
                {secao.paragrafos.map((paragrafo) => (
                  <p key={paragrafo}>{paragrafo}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-xl border-t-2 border-accent bg-surface p-7">
          <h2 className="text-2xl">Falar sobre os seus dados</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Quer saber o que temos guardado, corrigir alguma coisa ou pedir que
            a gente apague tudo? Chama no WhatsApp que resolvemos.
          </p>
          <div className="mt-6">
            <WhatsAppButton
              texto="Falar sobre privacidade"
              mensagem="Olá! Vim pela política de privacidade do site da Etuos e quero falar sobre os meus dados."
            />
          </div>
        </div>
      </div>
    </>
  );
}
