# Estrategia de blog: Etuos en español (/es)

Fecha: 21/10/2026. Decisión del dueño (21/10/2026): el español entra al blog-loop con **2 artículos por semana**. Insumos: Search Console del 20/07 al 18/10/2026 (`docs/gsc/gsc-2026-10-18.json`), volúmenes de Google Ads vía DataForSEO para Estados Unidos en español (20 y 21/10/2026), la auditoría SEO del 20/10/2026 (`etuos-audit/`) y el copy del sitio en español (`src/data/servicos/es.ts`, `src/data/cidades/es.ts`).

> Este documento gobierna **solo el español** y la cola `docs/blog-queue-es.json`. Es independiente de `docs/blog-strategy.md` (pt) y `docs/blog-strategy-en.md` (en): otro lector, otras keywords, sin `grupo` en el frontmatter y sin hreflang entre idiomas. Un artículo en español nunca es traducción de uno en portugués o inglés.

## Resumen ejecutivo

El español es el idioma con la señal más clara en Search Console y el único sin una sola página de blog. `/es/ciudades/houston` es la página con más impresiones de todo el sitio (90 en 90 días), con búsquedas en español en posiciones de 10 a 25: "agencia de marketing en houston" (9,7), "agencia de publicidad en houston" (13,1), "agencia de marketing digital en houston" (12,1), "manejo de redes sociales en houston" (24,6). Google ya entiende a Etuos como opción para el dueño hispano en Houston; falta el contenido que lo confirme.

La tesis es la misma del portugués: **en este nicho no se gana por volumen, se gana por respuesta correcta**. Casi todas las colas largas en español dentro de Estados Unidos tienen menos de 100 búsquedas al mes y casi nadie les responde bien desde la experiencia de una agencia que opera campañas en los tres idiomas. El primer contenido serio en español para el dueño de negocio de servicios en Houston y Miami tiende a ser la referencia, para Google y para las IAs.

## Audiencia

**Dueño hispano de negocio de servicios en Estados Unidos**, de 1 a 30 empleados, sobre todo en Houston y Miami (y después Orlando, Fort Lauderdale, Atlanta y Newark).

- **Rubros**: limpieza, construcción y remodelación, restaurantes y comida, belleza y estética, bienes raíces. Solo rubros que Etuos atiende (lista de la página Sobre nosotros).
- **Dolores**: depende de la recomendación de boca en boca, no sabe si anunciar en español o en inglés, ya pagó a alguien por "manejo de redes" sin ver clientes, no aparece en Google Maps aunque lleva años en el barrio.
- **Cómo busca**: en español y con lenguaje de dueño ("publicidad para mi negocio", "como promocionar mi negocio", "google mi negocio"). Muchas veces mezcla términos en inglés (ads, leads, reviews).
- **Qué lo convence**: ejemplos de su rubro y de su ciudad, pasos que puede hacer hoy, y una persona real del otro lado en WhatsApp.
- **Tono**: "tú", frases cortas, voz activa, español neutro de Estados Unidos (ni de España ni regionalismos marcados). Términos en inglés solo cuando el dueño ya los usa (Google Ads, leads, landing page).

## Keywords base (DataForSEO, Estados Unidos, español, 20 y 21/10/2026)

| Keyword | Volumen/mes | Competencia | Lectura |
|---|---|---|---|
| marketing digital | 6.600 | 48 | Término cabeza, solo soporte |
| agencia de marketing digital | 1.600 | 5 | Comercial, competencia bajísima |
| google mi negocio | 1.000 | 42 | Ancla del pilar de Google local |
| seo local | 880 | 33 | Pilar de Google local |
| publicidad para mi negocio | 320 | 100 | Lenguaje de dueño, intención alta |
| como promocionar mi negocio | 260 | 69 | Hub del pilar 1 |
| diseño de paginas web | 260 | 17 | Pilar de página web |
| como anunciar mi negocio en google | 140 | 72 | Pilar de anuncios |
| pagina web para negocio | 110 | 76 | Pilar de página web |
| como hacer publicidad en facebook | 70 | 66 | Pilar de anuncios |
| perfil de empresa en google | 70 | 18 | Nombre nuevo de Google Mi Negocio, subiendo |
| como crear una pagina web para mi negocio | 70 | 73 | Pilar de página web |
| como empezar un negocio de limpieza | 50 | 60 | Puente al rubro limpieza |
| como aparecer en google maps | 40 | 41 | Google local |
| como conseguir clientes para mi negocio de limpieza | 30 | 65 | Subió a 90 en 09/2026 |
| agencia de marketing en miami | 30 | 14 | Comercial local |

Notas: "whatsapp business" (40.500) y "google ads" (550.000) son búsquedas de navegación, no pautas; sirven solo como término secundario. "marketing para hispanos" y "marketing para negocios hispanos" no tienen volumen medible: igual que en portugués, el ángulo diferencial no tiene volumen pero tiene intención alta y competencia cero.

## Pilares y arquitectura de clusters

Hub and spoke, igual que pt y en: pilar de 2.500 a 3.500 palabras, spokes de 1.400 a 2.200, todo spoke enlaza el pilar y 2 spokes hermanos, todo artículo enlaza la página de servicio o de ciudad que corresponde en `/es`.

### Pilar 1: Conseguir clientes en Estados Unidos

| # | Título de trabajo | Template | Keyword | Vol. |
|---|---|---|---|---|
| P | Cómo promocionar tu negocio en Estados Unidos: guía para dueños hispanos | pillar-page | como promocionar mi negocio | 260 |
| 1 | Publicidad para tu negocio: por dónde empezar con poco presupuesto | how-to-guide | publicidad para mi negocio | 320 |
| 2 | Cómo conseguir clientes para tu negocio de limpieza | how-to-guide | como conseguir clientes para mi negocio de limpieza | 30 |
| 3 | ¿Anunciar en español, en inglés o en los dos? Cómo decidir | comparison | anunciar en español o ingles | (cola) |
| 4 | WhatsApp Business para tu negocio: cómo atender y cerrar más ventas | tutorial | whatsapp business para negocios | (sec. 40.500) |
| 5 | Abriste tu negocio en Estados Unidos: los primeros pasos de marketing | how-to-guide | como abrir un negocio en estados unidos (después de abrir) | 50 |

Enlaces de salida: `/es/estados-unidos`, `/es/servicios/anuncios-pagados`, `/es/ciudades/houston`, `/es/ciudades/miami`.

### Pilar 2: Aparecer en Google y Google Maps

| # | Título de trabajo | Template | Keyword | Vol. |
|---|---|---|---|---|
| P | SEO local: cómo aparecer en Google cuando el cliente busca cerca | pillar-page | seo local | 880 |
| 1 | Google Mi Negocio (Perfil de Empresa): guía paso a paso | tutorial | google mi negocio | 1.000 + 70 |
| 2 | ¿Por qué mi negocio no aparece en Google Maps? | faq-knowledge | como aparecer en google maps | 40 |
| 3 | Reseñas en Google: cómo pedirlas y cómo responder las malas | how-to-guide | reseñas en google | (cola) |
| 4 | SEO en español en Estados Unidos: ¿Google muestra tu página a quien busca en español? | faq-knowledge | seo en español | (cola) |

Enlaces de salida: `/es/servicios/seo` y la página de ciudad del ejemplo.

### Pilar 3: Anuncios que se pagan solos

| # | Título de trabajo | Template | Keyword | Vol. |
|---|---|---|---|---|
| P | Cómo anunciar tu negocio en Google: guía en español | pillar-page | como anunciar mi negocio en google | 140 |
| 1 | Publicidad en Facebook e Instagram para un negocio local | how-to-guide | como hacer publicidad en facebook | 70 + 50 |
| 2 | Google Ads o Facebook Ads: dónde invertir primero según tu negocio | comparison | google ads o facebook ads | (cola) |
| 3 | Local Services Ads y Google Garantizado en español: cómo funcionan | faq-knowledge | google garantizado | (cola) |
| 4 | Cuánto invertir en anuncios: cómo armar tu primer presupuesto | how-to-guide | cuanto invertir en publicidad | (cola) |

Enlaces de salida: `/es/servicios/anuncios-pagados`. Las landings `/es/lp/*` nunca se enlazan desde el blog (noindex).

### Pilar 4: Página web que trae clientes

| # | Título de trabajo | Template | Keyword | Vol. |
|---|---|---|---|---|
| P | Página web para tu negocio: qué necesita tener para traer clientes | pillar-page | pagina web para negocio | 110 |
| 1 | Diseño de páginas web para pequeños negocios: qué mirar antes de contratar | how-to-guide | diseño de paginas web | 260 |
| 2 | Cómo crear una página web para tu negocio, paso a paso | how-to-guide | como crear una pagina web para mi negocio | 70 |
| 3 | ¿Necesito página web si ya tengo Facebook y Google? | faq-knowledge | necesito pagina web | (cola) |
| 4 | Página web bilingüe: cómo atender en español e inglés sin duplicar trabajo | how-to-guide | pagina web bilingue | (cola) |

Enlaces de salida: `/es/servicios/creacion-de-sitios-web`.

### Pilar 5 (desde enero): Ciudades y rubros

Lecturas por ciudad con datos públicos (Census/ACS registrados antes de escribir), Houston primero y después Miami; playbooks de rubro (construcción y remodelación, restaurantes, belleza) solo de rubros atendidos. Se abre cuando los pilares 1 a 4 tengan hub y al menos 3 spokes.

## Reglas editoriales (no negociables)

- **Español neutro de Estados Unidos**, escrito para el dueño hispano. Nunca traducción de un artículo pt o en, y nunca el enfoque "brasileño en Estados Unidos", que pertenece a `/pt`.
- **Sin raya larga (carácter U+2014)** en ningún lugar, igual que el resto del proyecto.
- **Solo números autorizados** para hablar de Etuos: más de 10 años de marketing digital, más de US$ 500 mil en anuncios gestionados, de 30 a más de 300 franquicias en 1 año y 8 meses, +300% de facturación en clientes atendidos, 13 rubros atendidos. Nunca nombre de cliente, rango de precio ni garantía.
- **Sin plazos ni cifras sin fuente** registrada en `docs/blog-fontes-verificadas.md` (incluye FAQ, TL;DR y JSON-LD). Fuentes solo de `docs/blog-dominios-confiaveis.md`; preferir fuentes primarias (census.gov, sba.gov, ayuda de Google y Meta, que existen en español).
- **La oferta es el diagnóstico gratis, sin plazo.** El "plan de acción en 48 horas" existe solo en las landings de campaña.
- **Enlaces internos siempre con `/es`**: `/es/servicios/anuncios-pagados`, `/es/servicios/seo`, `/es/servicios/creacion-de-sitios-web`, `/es/ciudades/<ciudad>`, `/es/estados-unidos`, `/es/sobre-nosotros`.
- **Frontmatter**: `titulo`, `descricao`, `data` (AAAA-MM-DD), `autor` ("Lin Zeri"), `imagem` (`/images/blog/<slug>.webp`). Sin `grupo`. Slug en español, sin acentos.

## CTA

Una conversión en todo artículo: **WhatsApp, diagnóstico gratis, sin plazo.**

- CTA final: párrafo corto que dice qué recibe el lector ("cuéntame cómo va tu negocio hoy y te digo dónde conviene empezar"), con enlace a `https://wa.me/5516991252073` y mensaje precargado en español según el tema.
- CTA intermedio: solo si hay un punto natural, apuntando a la página de servicio, no a WhatsApp dos veces.
- El número es brasileño (+55) mientras no exista el número americano (`site.whatsapp.numero.es`); el texto no lo esconde ni lo comenta.

## Cadencia

- **2 artículos por semana, miércoles y viernes** (hora de Nueva York), días en que pt y en no publican, para repartir la carga de la sesión de producción.
- Primer artículo: **miércoles 04/11/2026**. Piso: 1 por semana; semana sin artículo vuelve como retroactivo.
- Cola: 6 pendientes (tres semanas). Portada más 3 a 4 ilustraciones por artículo (mismo runbook).

## Orden de producción

Los hubs salen primero, para que los spokes nazcan enlazando.

| Semana | Miércoles | Viernes |
|---|---|---|
| 04/11 | Hub P2: SEO local | Hub P1: promocionar tu negocio |
| 11/11 | P2.1 Google Mi Negocio | Hub P3: anunciar en Google |
| 18/11 | P1.1 publicidad con poco presupuesto | Hub P4: página web |
| 25/11 | P1.3 español, inglés o los dos | P2.2 no aparece en Google Maps |
| 02/12 | P3.1 Facebook e Instagram | P4.1 diseño de páginas web |
| 09/12 | P1.2 clientes para limpieza | P2.3 reseñas en Google |
| 16/12 | P3.2 Google Ads o Facebook Ads | P1.4 WhatsApp Business |
| 23/12 | P4.3 ¿necesito página web? | (semana de fiestas: 1 artículo) |
| 30/12 | P2.4 SEO en español | (1 artículo) |
| Enero | Restantes de los pilares 1 a 4, después pilar 5 | |

Son 21 pautas en los pilares 1 a 4 para cerca de 12 semanas; el pilar 5 completa enero.

## Superficie de IA

- Cápsula de respuesta de 40 a 60 palabras al inicio de cada H2; 60 a 70% de los H2 como pregunta.
- Entidad consistente en la primera mención: "Etuos, agencia de marketing digital para negocios en Estados Unidos y Brasil" (misma descripción de `site.descricao.es`).
- Schema en todo artículo: BlogPosting + Person (Lin Zeri, `/es/sobre-nosotros`) + BreadcrumbList; FAQPage solo con FAQ real. El Organization ya trae `sameAs` con el LinkedIn de Etuos.
- Consultas de monitoreo nuevas en `docs/ai-citation-log.md`: "agencia de marketing digital en Houston", "cómo aparecer en Google Maps con mi negocio", "anunciar mi negocio en español o en inglés".

## Medición y metas (al 29/01/2027)

- Punto de partida: 0 artículos; `/es/ciudades/houston` con 90 impresiones y queries en español en posición de 10 a 25.
- Meta: 20+ artículos en español, 8+ páginas del blog `/es` con impresiones y al menos 3 queries del blog en posición de 1 a 20.
- Houston: alguna query "agencia de marketing ... houston" en el top 10, con el blog enlazando la página de ciudad.
- Ciclo de Search Console cada 2 semanas (`python scripts/gsc-export.py 90`), mismo criterio de pt y en: query en posición de 8 a 30 se vuelve refuerzo; página con 6+ semanas y cero impresiones va a revisión.
