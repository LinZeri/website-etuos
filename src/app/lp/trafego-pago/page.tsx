import type { Metadata } from "next";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { FormularioCampanha } from "@/components/campanha/FormularioCampanha";
import { Faq } from "@/components/sections/Faq";
import {
  CtaCampanha,
  HeroCampanha,
  Passos,
  PlanoDeAcao,
  QuemFaz,
} from "@/components/campanha/secoes";

// Landing de campanha paga. Fica fora do índice do Google de propósito, para
// não competir com /servicos/trafego-pago, e fora do sitemap.
export const metadata: Metadata = {
  title: "Plano de ação de tráfego pago em 48 horas",
  description:
    "Receba em 48 horas um plano mostrando onde investir em anúncios, quanto investir e o que esperar de retorno. Sem custo e sem compromisso.",
  robots: { index: false, follow: false },
};

const MENSAGEM_WHATSAPP =
  "Olá! Vim pela página de plano de ação de tráfego pago da Etuos e quero conversar sobre os meus anúncios.";

const itensDoPlano = [
  {
    titulo: "Onde o seu cliente está",
    descricao:
      "Google, Instagram ou Facebook. Cada negócio tem um canal que rende mais, e quase nunca são os três ao mesmo tempo.",
  },
  {
    titulo: "Quanto custa falar com ele",
    descricao:
      "O custo real por clique e por contato no seu setor e na sua região, com número na mão, não com chute.",
  },
  {
    titulo: "O que está queimando dinheiro hoje",
    descricao:
      "Se você já anuncia, aponto o que está drenando verba sem retorno. Se ainda não anuncia, aponto os erros que quase todo mundo comete no começo.",
  },
  {
    titulo: "Verba e meta realistas",
    descricao:
      "Quanto investir por mês para o volume de cliente que você quer, e em quanto tempo isso deve acontecer.",
  },
];

const passos = [
  {
    titulo: "Você preenche o formulário",
    descricao:
      "Leva menos de um minuto. Só o essencial para eu conseguir olhar o seu caso.",
  },
  {
    titulo: "Eu analiso na mão",
    descricao:
      "Seu site, os anúncios que você roda hoje e o custo de mídia no seu mercado e na sua região.",
  },
  {
    titulo: "Você recebe no WhatsApp",
    descricao:
      "Em até 48 horas, com o plano e uma conversa para tirar dúvidas. Se fizer sentido trabalharmos juntos, a gente fala sobre isso. Se não fizer, o plano continua sendo seu.",
  },
];

const perguntas = [
  {
    pergunta: "Quanto custa o plano de ação?",
    resposta:
      "Nada. É o meu jeito de mostrar trabalho antes de falar de contrato. Você recebe o plano e decide o que fazer com ele, mesmo que seja executar por conta própria.",
  },
  {
    pergunta: "Em quanto tempo o anúncio começa a trazer cliente?",
    resposta:
      "Campanha bem montada costuma gerar os primeiros contatos na primeira semana. O ajuste fino leva de 30 a 60 dias, que é o tempo de descobrir o que rende mais no seu caso.",
  },
  {
    pergunta: "Qual a verba mínima para valer a pena?",
    resposta:
      "Depende do seu setor e do seu ticket. No plano eu digo o número do seu caso. Se a conta não fechar com a verba que você tem hoje, prefiro falar isso a aceitar o trabalho.",
  },
  {
    pergunta: "Tem contrato de fidelidade?",
    resposta:
      "Para o plano de ação, nenhum. Se depois virarmos parceiros, o combinado fica claro desde o começo e você sabe exatamente o que acontece se quiser sair.",
  },
  {
    pergunta: "Atende quem está nos Estados Unidos?",
    resposta:
      "Atendo. Boa parte dos meus clientes são brasileiros que empreendem nos EUA, em cidades como Miami, Orlando, Boston e Newark. Anuncio em português e em inglês, e trabalho no seu fuso.",
  },
];

export default function LandingTrafegoPagoPage() {
  return (
    <>
      <HeroCampanha
        eyebrow="Plano de ação em 48 horas"
        titulo="Você já impulsionou post e viu o dinheiro"
        destaque="sumir sem trazer cliente"
        descricao="Em 48 horas você recebe um plano mostrando onde investir, quanto investir e o que esperar de retorno. Sem custo e sem compromisso."
        provas={[
          "Análise da sua conta de anúncios, se você já tiver uma",
          "Onde está o seu público e quanto custa falar com ele",
          "Feito por quem já gerenciou mais de R$ 100 mil por mês em mídia",
        ]}
      >
        <FormularioCampanha
          origem="trafego-pago"
          id="plano"
          titulo="Peça o seu plano de ação"
          descricao="Preencha e receba em até 48 horas, direto no seu WhatsApp."
          textoBotao="Quero meu plano de ação"
          mensagemWhatsApp={MENSAGEM_WHATSAPP}
        />
      </HeroCampanha>

      <PlanoDeAcao
        eyebrow="O que você recebe"
        titulo="O que vem no plano de ação"
        descricao="Não é proposta comercial disfarçada. É o mapa de onde colocar o seu dinheiro e do que ele deve trazer de volta."
        itens={itensDoPlano}
      />

      <Passos titulo="Do pedido ao plano em 48 horas" passos={passos} />

      <Depoimentos />

      <QuemFaz texto="Sou publicitário, trabalho com marketing digital há mais de 10 anos e já gerenciei mais de R$ 100 mil por mês em anúncios. Ajudei uma rede de energia solar a sair de 30 para mais de 300 franquias em 1 ano e 8 meses. Quem vai olhar a sua conta sou eu, não um estagiário com um modelo pronto." />

      <Faq perguntas={perguntas} />

      <CtaCampanha
        titulo="Anúncio ruim não é caro, é desperdício"
        descricao="O plano é gratuito, sai em 48 horas e mostra onde o seu dinheiro deveria estar. O que você faz com ele é decisão sua."
        mensagemWhatsApp={MENSAGEM_WHATSAPP}
      >
        <FormularioCampanha
          origem="trafego-pago"
          titulo="Peça o seu plano de ação"
          descricao="Preencha e receba em até 48 horas, direto no seu WhatsApp."
          textoBotao="Quero meu plano de ação"
          mensagemWhatsApp={MENSAGEM_WHATSAPP}
        />
      </CtaCampanha>
    </>
  );
}
