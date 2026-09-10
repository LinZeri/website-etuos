import type { IdServico } from "@/i18n/mapa-slugs";
import type { ConteudoServico } from "./index";

// Copy en español, escrita para dueños de negocio hispanos en Estados Unidos
// (no es una traducción literal de pt.ts). El slug vive en src/i18n/mapa-slugs.ts.
// Misma estructura que pt.ts: promesa concreta en el título, dolor específico,
// entregas con mecanismo, proceso corto, para quién es, tabla comparativa y las
// objeciones que más escuchamos.
export const servicosEs: Record<IdServico, ConteudoServico> = {
  "trafego-pago": {
    nome: "Anuncios pagados",
    titulo: "Anuncios pagados: Google y Meta Ads",
    descricaoCurta:
      "Campañas en Google, Instagram y Facebook que ponen tu negocio frente a quien ya busca lo que vendes, en tu ciudad y en tu idioma.",
    heroDescricao:
      "Un buen anuncio no es el que más aparece. Es el que aparece frente a la persona correcta, en el momento correcto, y termina en una conversación. Eso es lo que armamos, medimos y ajustamos cada semana.",
    dores: [
      "Vives de recomendaciones y nunca sabes si el próximo mes va a ser bueno o malo",
      "Tus competidores aparecen primero en Google y en las redes, aunque trabajen peor que tú",
      "Ya promocionaste una publicación, el dinero desapareció y no llegó ni un solo cliente",
      "Anunciar en inglés y en español, cada uno a su público, parece demasiado complicado",
    ],
    entregas: [
      {
        titulo: "Campañas en Google Ads",
        descricao:
          "Tu negocio aparece justo cuando alguien escribe lo que vendes, en español o en inglés, en el radio donde atiendes. Quien busca ya quiere comprar; solo te ponemos al frente.",
      },
      {
        titulo: "Campañas en Meta Ads (Instagram y Facebook)",
        descricao:
          "Anuncios con creativos pensados para el público hispano y para el público angloparlante de tu ciudad, cada uno con el mensaje que convence a esa audiencia. Nada de promocionar publicaciones a ciegas.",
      },
      {
        titulo: "Segmentación por zona y por idioma",
        descricao:
          "Eliges dónde quieres crecer. Apuntamos a la ciudad, el radio y el público correctos, para no pagar por clics de gente que vive demasiado lejos o habla otro idioma.",
      },
      {
        titulo: "Optimización cada semana",
        descricao:
          "Seguimos las campañas semana a semana: el anuncio que trae clientes recibe más presupuesto, el que no trae se corta. Cada dólar va a lo que funciona.",
      },
      {
        titulo: "Un reporte que entiendes",
        descricao:
          "Cada mes recibes un resumen de una página en español claro: cuánto invertiste, cuántos contactos llegaron, cuánto costó cada uno y qué sigue. Sin hojas de cálculo de cien pestañas.",
      },
    ],
    processo: [
      {
        titulo: "Diagnóstico gratuito por WhatsApp",
        descricao:
          "Nos cuentas cómo está tu negocio hoy y evaluamos dónde el anuncio puede traer retorno más rápido. Si los números no cierran, te lo decimos.",
      },
      {
        titulo: "Estrategia a tu medida",
        descricao:
          "Definimos canales, presupuesto, público y oferta para tu caso. Nada de paquetes enlatados iguales para todos.",
      },
      {
        titulo: "Campañas en marcha en días",
        descricao:
          "Creamos los anuncios, configuramos la medición de cada contacto y ponemos las campañas a correr.",
      },
      {
        titulo: "Optimización y escala",
        descricao:
          "Con los primeros resultados, ajustamos lo que rinde y subimos el presupuesto con seguridad, sin apostar a ciegas.",
      },
    ],
    paraQuem:
      "Para quien necesita clientes ahora. Los anuncios pagados son el camino más rápido para generar contactos: las campañas empiezan a trabajar el mismo mes, mientras el SEO madura.",
    comparativo: [
      {
        criterio: "Quién arma y da seguimiento",
        sozinho: "Tú, entre un cliente y otro",
        agencia: "Un ejecutivo de cuenta y un pasante",
        etuos: "Lin, del diagnóstico al reporte",
      },
      {
        criterio: "Segmentación",
        sozinho: "Publicación promocionada para todo el mundo",
        agencia: "Toda la ciudad, un solo idioma",
        etuos: "Zona, radio e idioma de tu cliente",
      },
      {
        criterio: "Primer contacto",
        sozinho: "Semanas de prueba y error",
        agencia: "Depende del paquete",
        etuos: "Suele llegar en la primera semana",
      },
      {
        criterio: "Reporte",
        sozinho: "Panel de Google que nadie entiende",
        agencia: "PDF de 40 páginas",
        etuos: "Una página: invertiste, llegó, costó, siguiente paso",
      },
      {
        criterio: "Tu cuenta de anuncios",
        sozinho: "Tuya",
        agencia: "Muchas veces se queda en la agencia",
        etuos: "Tuya, con tu tarjeta, siempre",
      },
    ],
    faq: [
      {
        pergunta: "¿Cuánto necesito invertir al mes para que valga la pena?",
        resposta:
          "Depende de tu sector, de tu ticket promedio y de la ciudad donde trabajas. Anunciar en Miami cuesta más que anunciar en Danbury, y vender un servicio de $200 exige menos presupuesto que vender uno de $5,000. En el diagnóstico gratuito calculamos el número de tu caso y te decimos con sinceridad si los números cierran con lo que tienes hoy.",
      },
      {
        pergunta: "¿En cuánto tiempo el anuncio empieza a traer clientes?",
        resposta:
          "Una campaña bien armada suele generar los primeros contactos en la primera semana. El ajuste fino toma de 30 a 60 días, que es el tiempo que lleva descubrir qué anuncios, públicos y horarios rinden más en tu caso. Después de eso, es escalar lo que funciona.",
      },
      {
        pergunta: "¿La gestión se cobra junto con el presupuesto de anuncios?",
        resposta:
          "No. El presupuesto va directo a Google y a Meta, en tu cuenta y con tu tarjeta, así ves exactamente cuánto fue a la plataforma. La gestión es un valor aparte, acordado antes de empezar. La cuenta de anuncios es tuya y sigue siendo tuya.",
      },
      {
        pergunta: "¿Pueden anunciar en inglés y en español?",
        resposta:
          "Sí, y en muchos casos es lo que más rinde. Armamos campañas separadas por idioma, con creativo y landing page propios, porque el cliente hispano y el cliente angloparlante no responden al mismo argumento. El texto en inglés se escribe en inglés, no se traduce.",
      },
      {
        pergunta: "Ya promocioné publicaciones y no pasó nada. ¿Va a ser diferente?",
        resposta:
          "Promocionar una publicación es entregarle tu dinero al algoritmo para que elija quién la ve, sin oferta clara y sin destino. Una campaña es otra cosa: público definido, creativo pensado para vender, una página que convierte y la medición de cada contacto que llega. Es la diferencia entre cruzar los dedos y medir.",
      },
      {
        pergunta: "¿Necesito tener sitio web para anunciar?",
        resposta:
          "No es obligatorio: se puede llevar el anuncio directo a WhatsApp. Pero con una landing page el costo por contacto suele bajar, porque la persona llega sabiendo qué haces y por qué confiar en ti. Si es tu caso, armamos la página junto con la campaña.",
      },
    ],
  },
  seo: {
    nome: "SEO",
    titulo: "SEO local: aparece en Google sin pagar por clic",
    descricaoCurta:
      "Posicionamos tu sitio web y tu Perfil de Negocio de Google en los primeros lugares para las búsquedas de tu ciudad, sin presupuesto de anuncios.",
    heroDescricao:
      "Cuando alguien busca tu servicio en Google, quien aparece primero se lleva al cliente. Nuestro trabajo es hacer que ese alguien te encuentre, hoy, el próximo mes y el próximo año, sin pagar por cada clic.",
    dores: [
      "Tu negocio no aparece en Google ni cuando buscan tu nombre",
      "Quien busca tu servicio en tu ciudad encuentra al competidor en el mapa, no a ti",
      "Pagas anuncios para siempre porque sin presupuesto el teléfono deja de sonar",
      "Tu Perfil de Negocio de Google está abandonado, sin fotos y sin reseñas recientes",
    ],
    entregas: [
      {
        titulo: "SEO local y Perfil de Negocio de Google",
        descricao:
          "Optimizamos tu Perfil de Negocio de Google y tu sitio web para las búsquedas de tu ciudad y de las zonas donde de verdad atiendes. En el mapa es donde el cliente local decide a quién llamar.",
      },
      {
        titulo: "Optimización técnica del sitio",
        descricao:
          "Velocidad, estructura, datos estructurados y todo lo que Google evalúa para decidir quién merece los primeros lugares. Un sitio lento y confuso no posiciona, por bueno que sea el negocio.",
      },
      {
        titulo: "Contenido que posiciona y vende",
        descricao:
          "Páginas y artículos que responden exactamente lo que tu cliente busca antes de comprar, en español y en inglés, con el vocabulario que cada público usa de verdad.",
      },
      {
        titulo: "Seguimiento de posiciones",
        descricao:
          "Cada mes recibes un resumen de una página en español claro: las palabras clave que suben, el tráfico que crece y los contactos que llegan. Sin gráficos bonitos que escondan un mal resultado.",
      },
    ],
    processo: [
      {
        titulo: "Auditoría completa",
        descricao:
          "Analizamos tu sitio, tu Perfil de Negocio de Google y a los competidores que aparecen antes que tú, para saber exactamente por dónde atacar primero.",
      },
      {
        titulo: "Plan de 90 días",
        descricao:
          "Priorizamos lo que trae resultados más rápido y armamos el plan de contenido y optimización, con metas que se pueden medir.",
      },
      {
        titulo: "Ejecución por nuestra cuenta",
        descricao:
          "Técnica, contenido y autoridad: nos ponemos manos a la obra. Tú sigues ocupándote de tu negocio.",
      },
      {
        titulo: "Crecimiento compuesto",
        descricao:
          "El SEO es interés compuesto: cada mes de trabajo se suma al anterior y el tráfico crece sin que pagues por clic. Después de un año, es el canal más barato que tienes.",
      },
    ],
    paraQuem:
      "Para quien quiere construir una máquina de clientes que no dependa de anuncios. Toma más tiempo que los anuncios pagados, pero el resultado se queda, se acumula y no se apaga cuando se acaba el presupuesto.",
    comparativo: [
      {
        criterio: "Enfoque",
        sozinho: "Consejos de videos en YouTube",
        agencia: "Tráfico, una métrica de vanidad",
        etuos: "Búsquedas que se vuelven contactos en tu ciudad",
      },
      {
        criterio: "Google Maps",
        sozinho: "Perfil abandonado",
        agencia: "Un punto más de la lista",
        etuos: "Perfil, reseñas y zona de servicio como prioridad",
      },
      {
        criterio: "Contenido",
        sozinho: "Cuando sobra tiempo",
        agencia: "Texto genérico de redactor",
        etuos: "Escrito para lo que tu cliente busca, en español e inglés",
      },
      {
        criterio: "Plazo",
        sozinho: "Años, sin saber si vas por buen camino",
        agencia: "Primera página en 30 días (no existe)",
        etuos: "Primeros movimientos en 60 a 90 días, con meta medida",
      },
      {
        criterio: "Parte técnica",
        sozinho: "Plugin sobre plugin",
        agencia: "Tercerizada",
        etuos: "Sitio rápido y estructurado, por el mismo equipo",
      },
    ],
    faq: [
      {
        pergunta: "¿En cuánto tiempo el SEO da resultados?",
        resposta:
          "Los primeros movimientos suelen aparecer entre los 60 y 90 días, y el resultado fuerte llega después del sexto mes. El SEO es interés compuesto: cada mes de trabajo se suma al anterior. Quien promete primera página en 30 días está vendiendo una ilusión, y preferimos perder el contrato antes que mentir.",
      },
      {
        pergunta: "¿Cuánto cuesta hacer SEO?",
        resposta:
          "No trabajamos con paquetes enlatados. El valor depende del tamaño del sitio, de la competencia en tu nicho y de la ciudad donde quieres aparecer. El diagnóstico es gratuito y de ahí sale el precio, con el alcance de lo que se hará en los primeros 90 días.",
      },
      {
        pergunta: "¿El SEO funciona para un negocio pequeño y local?",
        resposta:
          "Funciona, y suele ser donde el retorno aparece más rápido. Las búsquedas del tipo servicio más ciudad tienen menos competencia e intención altísima: quien escribe eso tiene el problema en la mano ahora mismo. Un Perfil de Negocio de Google bien cuidado y páginas locales bien escritas resuelven buena parte del juego.",
      },
      {
        pergunta: "¿Necesito sitio web o con el Perfil de Negocio de Google basta?",
        resposta:
          "El perfil resuelve la búsqueda de quien ya está cerca y quiere resolver hoy. El sitio web es lo que sostiene la autoridad, responde las dudas antes del primer contacto y posiciona para las búsquedas que el perfil no alcanza. Juntos rinden mucho más que cualquiera de los dos por separado.",
      },
      {
        pergunta: "¿Se puede aparecer en español y en inglés al mismo tiempo?",
        resposta:
          "Sí, con páginas propias para cada idioma. El error común es traducir palabra por palabra: el cliente angloparlante y el hispano buscan lo mismo con términos distintos. Investigamos los dos vocabularios y escribimos para los dos públicos.",
      },
      {
        pergunta: "¿Vale la pena hacer SEO y anuncios pagados al mismo tiempo?",
        resposta:
          "En la mayoría de los casos, sí. El anuncio trae clientes ahora y paga las cuentas mientras el SEO madura. Cuando lo orgánico empieza a moverse, reduces la dependencia de los anuncios sin perder volumen de contactos. Así es como el costo por cliente baja año tras año.",
      },
    ],
  },
  "criacao-de-sites": {
    nome: "Creación de sitios web",
    titulo: "Sitios web que convierten visitas en clientes",
    descricaoCurta:
      "Sitios rápidos, con texto que vende y hechos para el celular, que llevan a quien visita directo a tu WhatsApp. Listos para Google desde el primer día.",
    heroDescricao:
      "Tu sitio web no es una tarjeta de presentación. Es un vendedor que trabaja las 24 horas, responde las dudas del cliente antes que tú y lo lleva hasta el botón de WhatsApp. Construimos el tuyo para hacer exactamente eso.",
    dores: [
      "No tienes sitio web y pierdes a los clientes que investigan antes de comprar, o sea, casi todos",
      "Tu sitio es lento, se ve mal en el celular o parece abandonado desde 2019",
      "Quien visita tu sitio no hace nada: no escribe, no llama, no pide cotización",
      "Pagas anuncios que mandan gente a una página que no convierte",
    ],
    entregas: [
      {
        titulo: "Diseño profesional y único",
        descricao:
          "Nada de plantillas genéricas iguales a la del competidor. Un sitio que se ve como tu negocio, bonito en el celular y en la computadora, con tu identidad y tus fotos.",
      },
      {
        titulo: "Texto que vende",
        descricao:
          "Escribimos cada sección para llevar al visitante hasta el botón de WhatsApp: promesa clara, pruebas, objeciones respondidas. Con tu tono y en el idioma de tu público, en español, en inglés o en los dos.",
      },
      {
        titulo: "Velocidad de verdad",
        descricao:
          "Sitios estáticos que cargan en un abrir y cerrar de ojos, con los datos móviles de tu cliente y con el Wi-Fi de su casa. La velocidad es conversión y es posicionamiento en Google.",
      },
      {
        titulo: "SEO desde el primer día",
        descricao:
          "Estructura, títulos, datos estructurados y contenido ya optimizados para que Google encuentre y posicione tu sitio. Y medición de los clics en WhatsApp, para que sepas de dónde viene cada contacto.",
      },
    ],
    processo: [
      {
        titulo: "Briefing directo",
        descricao:
          "Una conversación para entender tu negocio, tu público, lo que te suelen preguntar antes de cerrar y lo que el sitio necesita hacer por ti.",
      },
      {
        titulo: "Diseño y texto",
        descricao:
          "Creamos el diseño y el texto juntos, pensando en la conversión desde la primera pantalla hasta el último botón.",
      },
      {
        titulo: "Construcción y revisión",
        descricao:
          "Desarrollamos el sitio, lo revisas y ajustamos hasta que quede a tu gusto. Sin sorpresas al final.",
      },
      {
        titulo: "En marcha y midiendo",
        descricao:
          "Publicamos con dominio, métricas y WhatsApp configurados. Listo para recibir tráfico el mismo día.",
      },
    ],
    paraQuem:
      "Para quien está empezando desde cero o tiene un sitio que no genera nada. Es la base de todo: los anuncios y el SEO rinden mucho más en un sitio que convierte.",
    comparativo: [
      {
        criterio: "Diseño",
        sozinho: "Plantilla igual a la del competidor",
        agencia: "Plantilla con tus colores",
        etuos: "Único, se ve como tu negocio",
      },
      {
        criterio: "Texto",
        sozinho: "Lo escribes de noche, cuando puedes",
        agencia: "Lorem ipsum hasta la entrega",
        etuos: "Escrito para llevar al WhatsApp",
      },
      {
        criterio: "Velocidad",
        sozinho: "WordPress lento, lleno de plugins",
        agencia: "Depende de la plantilla",
        etuos: "Sitio estático que abre en un abrir y cerrar de ojos",
      },
      {
        criterio: "SEO",
        sozinho: "Instalas un plugin y cruzas los dedos",
        agencia: "Se cobra aparte",
        etuos: "Listo para Google desde el primer día",
      },
      {
        criterio: "Propiedad",
        sozinho: "Tuya",
        agencia: "Atado a la plataforma de la agencia",
        etuos: "Dominio y sitio a tu nombre, siempre",
      },
    ],
    faq: [
      {
        pergunta: "¿Cuánto tiempo toma tener el sitio listo?",
        resposta:
          "Un sitio institucional de pocas páginas suele estar listo en dos a cuatro semanas. Lo que más atrasa no es el desarrollo: son las fotos, la información de tu negocio y tu aprobación. Con el material en mano, avanza rápido.",
      },
      {
        pergunta: "¿El sitio queda en español o en inglés?",
        resposta:
          "En el idioma de tu cliente, y pueden ser los dos. Si atiendes clientes hispanos y angloparlantes, armamos las dos versiones, cada una con texto propio, escrito para ese público. La traducción automática aleja al cliente angloparlante y ni te enteras.",
      },
      {
        pergunta: "¿Quién escribe los textos del sitio?",
        resposta:
          "Nosotros los escribimos. Nos cuentas qué haces, para quién y qué te suelen preguntar antes de cerrar; lo convertimos en texto que lleva a la persona hasta el botón de WhatsApp. Revisas todo antes de publicar.",
      },
      {
        pergunta: "¿El sitio es realmente mío o quedo atado a la agencia?",
        resposta:
          "El dominio queda a tu nombre y el sitio es tuyo. Si un día quieres que otra persona lo cuide, te lo llevas. Preferimos mantener clientes por resultados, no por contraseñas.",
      },
      {
        pergunta: "Ya vendo por Instagram y por WhatsApp. ¿Necesito un sitio web?",
        resposta:
          "Las redes sociales son terreno alquilado: el alcance y las reglas cambian sin aviso. El sitio web es el único canal que es tuyo, aparece en Google, trabaja las 24 horas y deja que el cliente te investigue antes de escribirte. Y casi todo el mundo investiga antes de gastar dinero con un desconocido.",
      },
      {
        pergunta: "¿El sitio ya viene preparado para Google?",
        resposta:
          "Sí. Estructura, títulos, velocidad y datos estructurados salen listos desde el primer día, junto con la medición de los clics en WhatsApp, para que sepas de dónde viene cada contacto en vez de adivinar.",
      },
    ],
  },
};
