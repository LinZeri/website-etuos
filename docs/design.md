# Diretrizes de design do site da Etuos

## Identidade visual

Os arquivos originais ficam em `_references/Logo/` (pasta fora do Git). Versões prontas para o site: logo em `public/images/logo-etuos.svg` e favicon em `src/app/icon.svg` (ambos com viewBox ajustado, sem a área vazia do arquivo original).

### Paleta oficial

| Papel | Cor | Hex | Token Tailwind |
| --- | --- | --- | --- |
| Fundo | Branco | `#FFFFFF` | `background` |
| Texto principal | Grafite | `#0F172A` | `foreground` |
| Texto secundário | Cinza | `#6B7280` | `muted` |
| Acento (única cor) | Verde ácido | `#A3E635` | `accent` |
| Fundo de seção alternada | Cinza claríssimo | `#F8FAFC` | `surface` |
| Bordas e divisores | Cinza claro | `#E2E8F0` | `border` |

Os tokens são declarados em `src/app/globals.css` e usados como classes (`bg-accent`, `text-muted`, `border-border`, `bg-surface`).

Regras de uso do acento:

1. O verde ácido é a ÚNICA cor de acento. Nada de azul, laranja ou segundo verde.
2. **Nunca texto branco sobre o verde ácido** (contraste insuficiente). Botões: fundo `accent` com texto `foreground`.
3. O verde funciona muito bem sobre grafite: seções escuras (fundo `foreground`) podem usar o verde em títulos, sublinhados e CTAs.
4. Usar com moderação: o verde marca ação e destaque, não decoração.

### Tipografia

- **Títulos (h1, h2, h3):** Anton, sempre em caixa alta, peso único 400. Carregada via `next/font` (`--font-anton`).
- **Texto:** Inter, via `next/font` (`--font-inter`).
- Ambas configuradas em `src/app/layout.tsx` e aplicadas globalmente em `globals.css`.

## Referências e o que aproveitar de cada uma

1. **agoravaee.com.br:** comunicação direta com o público brasileiro, prova social forte, CTA de WhatsApp onipresente. Referência principal de estrutura de conversão.
2. **black3000.com:** ousadia visual, personalidade de marca, tipografia grande e confiante. Referência de atitude estética, sem copiar o excesso.
3. **pearllemon.com:** profundidade de SEO (muitas páginas de serviço e localidade bem estruturadas), textos longos que ranqueiam. Referência de arquitetura SEO, não de visual.

## Princípios

- **Mobile-first:** o público navega principalmente pelo celular; toda seção nasce no mobile e expande para desktop
- **Conversão sempre visível:** CTA de WhatsApp no header e em todas as seções-chave; considerar botão flutuante no mobile
- **Performance:** site 100% estático, imagens WebP com `next/image`, fontes otimizadas via `next/font`, sem bibliotecas pesadas de animação sem necessidade
- **Acessibilidade:** contraste AA no mínimo, `alt` em toda imagem, navegação por teclado funcional
- **Consistência:** componentes reutilizáveis em `src/components/ui` e seções em `src/components/sections`; nada de estilo avulso repetido

## Status

Identidade aplicada na base: paleta em tokens, fontes carregadas, logo no header e favicon no lugar. As páginas ainda são placeholders; o design real das seções (herói, prova social, etc.) será construído na fase de design.
