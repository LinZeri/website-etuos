import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { dicionario } from "@/i18n/dicionario";
import { HTML_LANG, IDIOMAS, NOME_IDIOMA } from "@/i18n/idiomas";
import { caminho } from "@/i18n/rotas";

// 404 global: usado para qualquer URL que não case com rota nenhuma. Como o
// root layout mora em app/[idioma], esta página é um documento completo e
// trilíngue (não sabemos o idioma de quem chegou aqui). O Next já marca
// noindex.

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "404 | Etuos",
};

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-4 py-16">
          <p className="font-display text-7xl text-accent md:text-9xl">404</p>
          <div className="mt-10 grid gap-8">
            {IDIOMAS.map((idioma) => {
              const t = dicionario(idioma).naoEncontrada;
              return (
                <section
                  key={idioma}
                  lang={HTML_LANG[idioma]}
                  className="border-l-2 border-accent pl-5"
                >
                  <h2 className="text-2xl">{t.titulo}</h2>
                  <p className="mt-2 text-muted">{t.texto}</p>
                  <a
                    href={caminho(idioma, { tipo: "home" })}
                    hrefLang={HTML_LANG[idioma]}
                    className="mt-3 inline-block font-semibold underline decoration-accent decoration-2 underline-offset-4"
                  >
                    {t.voltar} ({NOME_IDIOMA[idioma].curto})
                  </a>
                </section>
              );
            })}
          </div>
        </main>
      </body>
    </html>
  );
}
