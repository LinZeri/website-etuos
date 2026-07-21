import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "./WhatsAppButton";

const links = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" aria-label="Etuos, ir para a Home">
          <Image
            src="/images/logo-etuos.svg"
            alt="Etuos"
            width={122}
            height={40}
            priority
          />
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>
        <WhatsAppButton
          texto="Fale conosco"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-foreground transition hover:brightness-95"
        />
      </div>
    </header>
  );
}
