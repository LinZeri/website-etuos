import type { ConteudoServico } from "@/data/servicos";
import { dicionario } from "@/i18n/dicionario";
import type { Idioma } from "@/i18n/idiomas";

type Props = {
  idioma: Idioma;
  linhas: ConteudoServico["comparativo"];
};

// Tabela nativa (rastreável, acessível): a coluna da Etuos é a única em
// grafite com o check em verde. Nunca só cor: o check vem com o texto.
export function Comparativo({ idioma, linhas }: Props) {
  const t = dicionario(idioma).servico.comparativo;

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          {t.eyebrow}
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">{t.titulo}</h2>

        <div className="revelar mt-10 overflow-x-auto rounded-xl border border-border bg-background">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-[0.16em]">
                <th scope="col" className="w-[22%] px-5 py-4 text-muted">
                  {t.colCriterio}
                </th>
                <th scope="col" className="w-[26%] px-5 py-4 text-muted">
                  {t.colSozinho}
                </th>
                <th scope="col" className="w-[26%] px-5 py-4 text-muted">
                  {t.colAgencia}
                </th>
                <th
                  scope="col"
                  className="w-[26%] rounded-t-lg bg-foreground px-5 py-4 font-display text-lg tracking-[0.04em] text-accent"
                >
                  {t.colEtuos}
                </th>
              </tr>
            </thead>
            <tbody>
              {linhas.map((linha, indice) => (
                <tr key={linha.criterio} className="border-t border-border align-top">
                  <th scope="row" className="px-5 py-4 text-left font-semibold">
                    {linha.criterio}
                  </th>
                  <td className="px-5 py-4 text-muted">{linha.sozinho}</td>
                  <td className="px-5 py-4 text-muted">{linha.agencia}</td>
                  <td
                    className={`bg-foreground px-5 py-4 font-medium text-white ${
                      indice === linhas.length - 1 ? "rounded-b-lg" : ""
                    }`}
                  >
                    <span aria-hidden className="mr-2 text-accent">
                      ✓
                    </span>
                    {linha.etuos}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
