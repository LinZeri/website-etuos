import type { Metadata } from "next";
import Image from "next/image";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Sobre a Etuos: quem cuida do seu marketing",
  description:
    "A Etuos foi fundada por Lin Zeri, publicitário com mais de 10 anos de marketing digital e cases como a expansão de 30 para mais de 300 franquias. Conheça a história.",
  alternates: { canonical: "/sobre" },
};

const numeros = [
  { valor: "10+", legenda: "anos de marketing digital" },
  { valor: "R$ 100 mil", legenda: "por mês em mídia já gerenciada" },
  { valor: "30 → 300+", legenda: "franquias em 1 ano e 8 meses (case de energia solar)" },
  { valor: "9", legenda: "setores diferentes atendidos" },
];

const setores = [
  "Mercado financeiro",
  "Energia solar",
  "Baterias e energy backup",
  "Estética",
  "Medicina",
  "Psicologia",
  "Eventos",
  "Moda e vestuário",
  "Jornalismo",
];

const principios = [
  {
    titulo: "Honestidade antes do contrato",
    descricao:
      "Prefiro perder um cliente falando a verdade do que ganhar um cliente ludibriando. Se o seu negócio não está pronto para o serviço, eu digo.",
  },
  {
    titulo: "Melhores práticas para todos",
    descricao:
      "O cliente pequeno recebe o mesmo padrão de trabalho do cliente grande. Método é método, e é o mesmo que uso há uma década.",
  },
  {
    titulo: "Sem promessa milagrosa",
    descricao:
      "O mercado está cheio de gente vendendo lead barato e resultado garantido. Aqui a conversa é outra: meta realista, trabalho sério e número medido.",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lin Zeri",
  jobTitle: "Fundador e estrategista de marketing digital",
  worksFor: {
    "@type": "Organization",
    name: site.nome,
    url: site.dominio,
  },
  image: `${site.dominio}/images/lin-zeri.webp`,
  knowsLanguage: ["pt-BR", "en"],
};

export default function SobrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="grid-dark bg-foreground text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Sobre a Etuos
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[0.95] md:text-6xl">
            Quem cuida do seu marketing tem{" "}
            <span className="text-accent">nome e rosto</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            A Etuos não é uma agência sem cara que some depois do contrato. É
            experiência de uma década em marketing digital, aplicada ao seu
            negócio.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,380px)_1fr] md:gap-16">
          <div className="relative">
            <Image
              src="/images/lin-zeri.webp"
              alt="Lin Zeri, fundador da Etuos, sorrindo de braços cruzados em um evento"
              width={450}
              height={540}
              className="w-full rounded-xl object-cover"
              priority
            />
            <p className="mt-4 border-l-2 border-accent pl-4 text-sm text-muted">
              Lin Zeri, publicitário e fundador da Etuos
            </p>
          </div>
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl">Prazer, eu sou o Lin</h2>
            <div className="mt-6 space-y-5 leading-relaxed text-foreground/85">
              <p>
                Sou publicitário, especializado em marketing digital, e comecei
                nessa estrada há mais de 10 anos. Passei por diferentes
                agências de marketing focadas em resultado na internet, onde
                cheguei a gerenciar mais de R$ 100 mil por mês em investimento
                em anúncios.
              </p>
              <p>
                No caminho, colecionei cases de que me orgulho. O maior deles:
                ajudar uma rede de energia solar a sair de 30 para mais de 300
                franquias em 1 ano e 8 meses, com o marketing digital como
                motor da expansão.
              </p>
              <p>
                Fundei a Etuos em 2023, no início atendendo clientes no Brasil
                e com um único cliente nos Estados Unidos. Foi esse cliente que
                me abriu os olhos: o brasileiro que empreende nos EUA trabalha
                demais, tem serviço de qualidade e quase nunca tem um marketing
                à altura. De lá para cá, o mercado americano virou o centro do
                meu trabalho.
              </p>
              <p>
                Moro no Brasil, falo inglês e estou em contato constante com o
                mercado americano. Já estive nos Estados Unidos quatro vezes e
                acompanho de perto a realidade de quem empreende por lá:
                atendo no seu fuso, no seu idioma e entendendo o seu público,
                seja ele brasileiro ou americano.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-4">
            {numeros.map((numero) => (
              <div key={numero.legenda} className="border-t-2 border-accent pt-4">
                <p className="font-display text-4xl md:text-5xl">{numero.valor}</p>
                <p className="mt-2 text-sm text-muted">{numero.legenda}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Setores que já atendi
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {setores.map((setor) => (
                <li
                  key={setor}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium"
                >
                  {setor}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid-dark bg-foreground text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_minmax(0,340px)] md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                No que eu acredito
              </p>
              <h2 className="mt-3 max-w-xl text-3xl md:text-5xl">
                Marketing honesto dá mais resultado
              </h2>
              <div className="mt-10 space-y-8">
                {principios.map((principio) => (
                  <div key={principio.titulo} className="border-l-2 border-accent pl-5">
                    <h3 className="text-xl">{principio.titulo}</h3>
                    <p className="mt-2 text-white/60">{principio.descricao}</p>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="/images/lin-zeri-palestra.webp"
              alt="Lin Zeri palestrando sobre marketing digital em um evento do setor de energia solar"
              width={340}
              height={340}
              className="hidden w-full rounded-xl object-cover md:block"
            />
          </div>
        </div>
      </section>

      <CtaFinal
        titulo="Fale direto comigo"
        descricao="É o meu WhatsApp que atende, sem robô e sem vendedor. Me conta como está o seu negócio e eu te dou um diagnóstico honesto."
        textoBotao="Chamar o Lin no WhatsApp"
        mensagem="Olá Lin! Vi a página Sobre no site da Etuos e quero conversar sobre o meu negócio."
      />
    </>
  );
}
