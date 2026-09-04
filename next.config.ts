import type { NextConfig } from "next";

// Headers de segurança aplicados a todas as rotas. Nenhum deles depende de
// runtime: a Vercel os aplica na borda, o site continua 100% estático.
const headersDeSeguranca = [
  // Impede o navegador de "adivinhar" o tipo de um arquivo e executar como script
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Envia o referrer completo só dentro do próprio domínio
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Bloqueia o site de ser embutido em iframe de terceiros (clickjacking)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
  // Desliga APIs sensíveis que o site não usa
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

// ---------------------------------------------------------------------------
// Redirecionamento da raiz "/" por idioma.
//
// Regras declarativas, compiladas para a camada de roteamento da Vercel:
// nenhuma função roda em runtime, o site continua 100% estático. Só a raiz
// redireciona; toda URL com /pt, /en ou /es é servida como está, para que o
// Google (que rastreia com IP dos EUA e sem Accept-Language) enxergue as três
// versões. O hreflang de cada página faz o resto.
//
// Prioridade: cookie gravado pelo seletor de idioma > idioma do navegador
// (só pt e es; inglês cai na regra de país) > país do IP > inglês.
//
// O Next compila cada `value` como new RegExp("^" + value + "$") sem flags,
// então maiúsculas e minúsculas são tratadas com classes de caracteres.
// Os headers só existem na Vercel: no `next dev` a raiz vai para /en a menos
// que o navegador esteja em pt/es ou o cookie exista.
// ---------------------------------------------------------------------------

const COOKIE_IDIOMA = "etuos_idioma";

// Accept-Language começa pelo idioma preferido: "pt-BR,pt;q=0.9,en;q=0.8".
const NAVEGADOR_PT = "[pP][tT]([-,;].*)?";
const NAVEGADOR_ES = "[eE][sS]([-,;].*)?";

const PAISES_PT = "(BR|PT|AO|MZ|CV)";
const PAISES_ES =
  "(ES|MX|AR|CO|CL|PE|VE|EC|GT|CU|BO|DO|HN|PY|SV|NI|CR|PA|UY|PR|GQ)";

const semCookieValido = [
  { type: "cookie" as const, key: COOKIE_IDIOMA, value: "(pt|en|es)" },
];

const semNavegadorPtOuEs = [
  { type: "header" as const, key: "accept-language", value: NAVEGADOR_PT },
  { type: "header" as const, key: "accept-language", value: NAVEGADOR_ES },
];

const redirecionamentosDaRaiz = [
  // 1. Cookie de preferência vence tudo
  ...(["pt", "en", "es"] as const).map((idioma) => ({
    source: "/",
    has: [{ type: "cookie" as const, key: COOKIE_IDIOMA, value: idioma }],
    destination: `/${idioma}`,
    permanent: false,
  })),
  // 2. Idioma do navegador
  {
    source: "/",
    missing: semCookieValido,
    has: [
      { type: "header" as const, key: "accept-language", value: NAVEGADOR_PT },
    ],
    destination: "/pt",
    permanent: false,
  },
  {
    source: "/",
    missing: semCookieValido,
    has: [
      { type: "header" as const, key: "accept-language", value: NAVEGADOR_ES },
    ],
    destination: "/es",
    permanent: false,
  },
  // 3. País do IP (header x-vercel-ip-country, presente só na Vercel)
  {
    source: "/",
    missing: [...semCookieValido, ...semNavegadorPtOuEs],
    has: [
      { type: "header" as const, key: "x-vercel-ip-country", value: PAISES_PT },
    ],
    destination: "/pt",
    permanent: false,
  },
  {
    source: "/",
    missing: [...semCookieValido, ...semNavegadorPtOuEs],
    has: [
      { type: "header" as const, key: "x-vercel-ip-country", value: PAISES_ES },
    ],
    destination: "/es",
    permanent: false,
  },
  // 4. Todo o resto: inglês (também o destino do hreflang x-default)
  { source: "/", destination: "/en", permanent: false },
];

// URLs do site antigo (só em português, sem prefixo) -> /pt/... com 308.
// Fontes literais, sem /:path* genérico: /_next, /images, /sitemap.xml,
// /robots.txt, /icon.svg e as rotas /pt|/en|/es nunca casam, e nenhum destino
// é fonte de outra regra, então não há loop. A query string (gclid, UTMs)
// é preservada.
const redirecionamentosLegados = [
  ["/eua", "/pt/eua"],
  ["/brasil", "/pt/brasil"],
  ["/sobre", "/pt/sobre"],
  ["/servicos", "/pt/servicos"],
  ["/servicos/:slug", "/pt/servicos/:slug"],
  ["/cidades/:slug", "/pt/cidades/:slug"],
  ["/blog", "/pt/blog"],
  ["/blog/:slug", "/pt/blog/:slug"],
  ["/contato", "/pt/contato"],
  ["/politica-de-privacidade", "/pt/politica-de-privacidade"],
  ["/lp/seo", "/pt/lp/seo"],
  ["/lp/trafego-pago", "/pt/lp/trafego-pago"],
].map(([source, destination]) => ({ source, destination, permanent: true }));

const nextConfig: NextConfig = {
  experimental: {
    // O root layout mora em app/[idioma]; o 404 de URL sem idioma sai de
    // app/global-not-found.tsx.
    globalNotFound: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: headersDeSeguranca,
      },
    ];
  },
  async redirects() {
    return [...redirecionamentosDaRaiz, ...redirecionamentosLegados];
  },
};

export default nextConfig;
