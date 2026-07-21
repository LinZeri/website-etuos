# Diretrizes de design do site da Etuos

## Identidade visual

A Etuos já tem logo e cores definidas. Os arquivos ficam em `_references/` (pasta fora do Git).

Pendente de registro quando o material estiver na pasta:

- [ ] Paleta de cores (hex) e papel de cada cor (fundo, destaque, CTA)
- [ ] Tipografia oficial (ou confirmação da Geist como fonte do site)
- [ ] Versões do logo (claro, escuro, ícone) exportadas para `public/images/` em formato adequado (SVG para logo, WebP para fotos)

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

O site está em fase de estrutura (placeholders). O design real será aplicado na próxima fase, depois que a paleta e o logo forem registrados aqui.
