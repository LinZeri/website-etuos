"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LinkNavegacao } from "./nav";

// Links do menu de desktop com sublinhado em verde no item ativo. Cliente só
// por causa do usePathname; os links em si já vêm prontos do servidor.
export function NavLinks({ links }: { links: LinkNavegacao[] }) {
  const pathname = usePathname();

  return (
    <nav className="hidden gap-6 md:flex">
      {links.map((link, indice) => {
        const ehHome = indice === 0;
        const ativo = ehHome
          ? pathname === link.href
          : pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={ativo ? "page" : undefined}
            className={`relative py-1 text-sm font-medium transition after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:after:scale-x-100 ${
              ativo ? "after:scale-x-100" : "text-foreground/80 hover:text-foreground"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
