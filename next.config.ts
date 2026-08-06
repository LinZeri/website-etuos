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

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: headersDeSeguranca,
      },
    ];
  },
};

export default nextConfig;
