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
// não competir com /servicos/seo, e fora do sitemap (src/app/sitemap.ts).
export const metadata: Metadata = {
  title: "Plano de ação de SEO em 48 horas",
  description:
    "Receba em 48 horas um plano mostrando por que seu site não aparece no Google e o que fazer para mudar isso. Sem custo e sem compromisso.",
  robots: { index: false, follow: false },
};

const MENSAGEM_WHATSAPP =
  "Olá! Vim pela página de plano de ação de SEO da Etuos e quero conversar sobre o meu site.";

const itensDoPlano = [
  {
    titulo: "Por que o Google ignora o seu site",
    descricao:
      "Os problemas que estão travando você hoje: velocidade, estrutura e páginas que o Google nem consegue ler direito.",
  },
  {
    titulo: "As buscas que trazem cliente para você",
    descricao:
      "Quais palavras a sua gente digita no Google antes de comprar, e quanta gente busca cada uma por mês.",
  },
  {
    titulo: "Quem está na sua frente e por quê",
    descricao:
      "Os concorrentes que aparecem antes de você nessas buscas, e o que eles têm que você ainda não tem.",
  },
  {
    titulo: "A ordem para atacar",
    descricao:
      "O que resolver na primeira semana, no primeiro mês e nos primeiros 90 dias, priorizado por esforço e retorno.",
  },
];

const passos = [
  {
    titulo: "Você preenche o formulário",
    descricao:
      "Leva menos de um minuto. Só o essencial para eu conseguir olhar o seu site.",
  },
  {
    titulo: "Eu analiso na mão",
    descricao:
      "Seu site, seu perfil no Google Maps e os concorrentes que aparecem nas buscas do seu serviço.",
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
    pergunta: "Em quanto tempo o SEO dá resultado?",
    resposta:
      "Os primeiros movimentos costumam aparecer entre 60 e 90 dias. SEO é juro composto: cada mês de trabalho soma ao anterior. Quem promete primeira página em 30 dias está vendendo ilusão.",
  },
  {
    pergunta: "Tem contrato de fidelidade?",
    resposta:
      "Para o plano de ação, nenhum. Se depois virarmos parceiros, o combinado fica claro desde o começo e você sabe exatamente o que acontece se quiser sair.",
  },
  {
    pergunta: "Vocês atendem o meu setor?",
    resposta:
      "Já trabalhei com 9 setores diferentes, de energia solar a medicina, estética e mercado financeiro. Se eu achar que não sou a pessoa certa para o seu caso, falo isso no próprio plano.",
  },
  {
    pergunta: "Atende quem está nos Estados Unidos?",
    resposta:
      "Atendo. Boa parte dos meus clientes são brasileiros que empreendem nos EUA, em cidades como Miami, Orlando, Boston e Newark. Falo inglês e trabalho no seu fuso.",
  },
];

export default function LandingSeoPage() {
  return (
    <>
      <HeroCampanha
        eyebrow="Plano de ação em 48 horas"
        titulo="Seu cliente procura no Google e encontra"
        destaque="o seu concorrente"
        descricao="Em 48 horas você recebe um plano mostrando por que o seu site não aparece e o que fazer para mudar isso. Sem custo e sem compromisso."
        provas={[
          "Análise do seu site e do seu perfil no Google Maps",
          "Comparação com os concorrentes que aparecem na sua frente",
          "Feito por quem trabalha com marketing digital há mais de 10 anos",
        ]}
      >
        <FormularioCampanha
          origem="seo"
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
        descricao="Não é um PDF genérico com dicas de internet. É uma análise do seu site, feita à mão, com o que dá para resolver primeiro."
        itens={itensDoPlano}
      />

      <Passos titulo="Do pedido ao plano em 48 horas" passos={passos} />

      <Depoimentos />

      <QuemFaz texto="Sou publicitário, trabalho com marketing digital há mais de 10 anos e já gerenciei mais de R$ 100 mil por mês em anúncios. Fundei a Etuos em 2023 e hoje atendo negócios no Brasil e brasileiros que empreendem nos Estados Unidos. Quem vai olhar o seu site sou eu, não um robô rodando relatório automático." />

      <Faq perguntas={perguntas} />

      <CtaCampanha
        titulo="Seu concorrente não vai parar de aparecer sozinho"
        descricao="O plano é gratuito, sai em 48 horas e não tem pegadinha. O que você faz com ele é decisão sua."
        mensagemWhatsApp={MENSAGEM_WHATSAPP}
      >
        <FormularioCampanha
          origem="seo"
          titulo="Peça o seu plano de ação"
          descricao="Preencha e receba em até 48 horas, direto no seu WhatsApp."
          textoBotao="Quero meu plano de ação"
          mensagemWhatsApp={MENSAGEM_WHATSAPP}
        />
      </CtaCampanha>
    </>
  );
}
