import Link from "next/link";
import { cidades } from "@/data/cidades";
import { servicos } from "@/data/servicos";
import { site } from "@/data/site";

export function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-border text-sm">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold">{site.nome}</p>
          <p className="mt-2 max-w-xs opacity-80">{site.descricao}</p>
        </div>
        <div>
          <p className="font-semibold">Serviços</p>
          <ul className="mt-2 space-y-1">
            {servicos.map((servico) => (
              <li key={servico.slug}>
                <Link href={`/servicos/${servico.slug}`} className="hover:underline">
                  {servico.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Onde atendemos</p>
          <ul className="mt-2 grid grid-cols-2 gap-1">
            {cidades.map((cidade) => (
              <li key={cidade.slug}>
                <Link href={`/cidades/${cidade.slug}`} className="hover:underline">
                  {cidade.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-4 opacity-70">
          <p>
            © {ano} {site.nome}. Todos os direitos reservados.
          </p>
          <Link href="/politica-de-privacidade" className="hover:underline">
            Política de privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
