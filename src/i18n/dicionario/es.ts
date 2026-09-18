// Diccionario de interfaz en español. Debe tener exactamente la misma forma
// que pt.ts: una clave faltante o sobrante rompe el build.
//
// Lector: dueño o dueña de negocio hispano que vive en Estados Unidos y busca
// en español. Español latinoamericano neutro, siempre "tú", sin regionalismos.
// Servicio de anuncios: "Anuncios pagados". Oferta principal: diagnóstico
// gratuito por WhatsApp.
import type { Dicionario } from "./pt";

export const es = {
  nav: {
    home: "Inicio",
    brasil: "Brasil",
    eua: "EE. UU.",
    sobre: "Nosotros",
    servicos: "Servicios",
    blog: "Blog",
    contato: "Contacto",
  },
  header: {
    irParaHome: "Etuos, ir al inicio",
    whatsapp: "Diagnóstico gratuito",
  },
  menu: {
    abrir: "Abrir menú",
    fechar: "Cerrar menú",
    whatsapp: "Quiero mi diagnóstico gratuito",
  },
  footer: {
    servicos: "Servicios",
    ondeAtendemos: "Dónde atendemos",
    brasil: "Brasil",
    eua: "Estados Unidos",
    direitos: "Todos los derechos reservados.",
    privacidade: "Política de privacidad",
  },
  whatsapp: {
    botao: "Escribir por WhatsApp",
    flutuante: "Escribir a Etuos por WhatsApp",
  },
  // Barra fija al pie de la pantalla en celular.
  barraCta: {
    texto: "Diagnóstico gratuito, respuesta el mismo día",
    botao: "Escribir por WhatsApp",
  },
  seletorIdioma: {
    rotulo: "Idioma",
  },
  // Se muestra en el idioma de destino: quien lee está en otro idioma.
  bannerIdioma: {
    texto: "Esta página también está disponible en español.",
    trocar: "Ver en español",
    fechar: "Cerrar",
  },
  hero: {
    descricao:
      "Anuncios pagados, SEO local y sitios web que convierten, para negocios hispanos en Estados Unidos y negocios en Brasil. Diagnóstico gratuito, respuesta el mismo día, directo con el fundador.",
    cta: "Quiero mi diagnóstico gratuito",
    verServicos: "Ver servicios",
  },
  // Franja de pruebas debajo del héroe. Los valores numéricos alimentan el
  // contador animado; el HTML ya sale con el número final.
  numeros: [
    { valor: 10, sufixo: "+", legenda: "años en marketing digital" },
    { prefixo: "$", valor: 500, sufixo: "K+", legenda: "en inversión publicitaria gestionada" },
    { prefixo: "30 → ", valor: 300, sufixo: "+", legenda: "franquicias en 1 año y 8 meses" },
    { prefixo: "+", valor: 300, sufixo: "%", legenda: "de facturación en clientes atendidos" },
  ],
  servicosLista: {
    eyebrow: "Lo que hacemos",
    tituloAntes: "Todo lo que te separa de",
    tituloDestaque: "más clientes",
  },
  resultados: {
    eyebrow: "Resultados",
    titulo: "Números, no promesas",
    descricao:
      "El buen marketing se mide. Estos son resultados reales de clientes que combinaron anuncios, sitio web y SEO hechos para convertir.",
    fantasma: "RESULTADOS",
    itens: [
      {
        figura: "+300%",
        contexto:
          "de facturación en clientes que unieron anuncios en Google con un sitio web hecho para convertir cada visita en una conversación.",
        servicos: ["trafego-pago", "criacao-de-sites"],
        segmento: "Clínicas y servicios",
      },
      {
        figura: "30 → 300+",
        contexto:
          "franquicias en 1 año y 8 meses, con el marketing digital como motor de expansión de una red de energía solar.",
        servicos: ["trafego-pago", "seo"],
        segmento: "Red de franquicias de energía solar",
      },
      {
        figura: "$500K+",
        contexto:
          "en inversión publicitaria gestionada en Google y Meta, con cada dólar medido hasta el mensaje que llegó por WhatsApp.",
        servicos: ["trafego-pago"],
        segmento: "13 sectores atendidos",
      },
    ],
  },
  depoimentos: {
    eyebrow: "Prueba social",
    titulo: "Negocios que ya crecieron con Etuos",
    traduzido: "Traducido del original en portugués",
  },
  comoFunciona: {
    eyebrow: "Cómo funciona",
    titulo: "Del primer hola a tu WhatsApp sonando",
    fantasma: "PROCESO",
    passos: [
      {
        titulo: "Diagnóstico gratuito",
        descricao:
          "Nos cuentas cómo está tu negocio hoy. Analizamos tu mercado, tu competencia y dónde está el dinero que se te está escapando. Sin costo y sin compromiso.",
      },
      {
        titulo: "Plan a tu medida",
        descricao:
          "Nada de paquetes genéricos. Armamos la estrategia correcta para tu nicho, tu ciudad y tu momento, con metas que se pueden medir.",
      },
      {
        titulo: "Ejecución completa",
        descricao:
          "Anuncios, SEO, sitio web: lo montamos todo y lo ponemos a funcionar. Mientras tanto, tú sigues atendiendo a tus clientes.",
      },
      {
        titulo: "Resultados medidos y escala",
        descricao:
          "Sigues todo en reportes sencillos, en español, cada mes. Lo que trae clientes recibe más inversión; lo que no, se corta.",
      },
    ],
  },
  fundador: {
    eyebrow: "Quién cuida tu marketing",
    titulo: "Tiene nombre, rostro y WhatsApp",
    texto:
      "Soy Lin Zeri, publicista con más de 10 años de experiencia. No hay gerente de cuenta ni practicante de por medio: quien arma la estrategia, sigue la campaña y responde tu mensaje soy yo.",
    citacao:
      "Prefiero perder un cliente diciendo la verdad que ganarlo con engaños.",
    conhecer: "Conocer a Lin",
    whatsapp: "Escribirle a Lin",
    fantasma: "LIN ZERI",
    fotoAlt:
      "Lin Zeri, fundador de Etuos, sonriendo con los brazos cruzados en un evento lleno de gente",
  },
  paisesGrid: {
    eyebrow: "Dónde trabajamos",
    titulo: "¿Dónde está tu negocio?",
    descricao:
      "Etuos atiende negocios hispanos en Estados Unidos y negocios en Brasil, cada uno con su propia estrategia y en el idioma de su cliente.",
    verComoAtuamos: "Ver cómo trabajamos",
    brasil: {
      nome: "Brasil",
      descricao:
        "Negocios y profesionales en todo Brasil que quieren más clientes llegando desde Google e Instagram.",
    },
    eua: {
      nome: "Estados Unidos",
      descricao:
        "Negocios hispanos en EE. UU., con marketing pensado para tu comunidad, tu ciudad y también el cliente americano.",
    },
  },
  cidadesGrid: {
    eyebrow: "Ciudades que conocemos",
    titulo: "Fuertes donde la comunidad hispana crece",
    descricao:
      "Atendemos todo Estados Unidos, con páginas, campañas y conocimiento de mercado para las ciudades donde más crecen los negocios hispanos.",
  },
  ctaFinal: {
    titulo: "¿Listo para que suene tu WhatsApp?",
    descricao:
      "Escríbenos. Recibes un diagnóstico honesto y gratuito de tu marketing, sin compromiso y sin rodeos.",
    botao: "Quiero mi diagnóstico gratuito",
    rodape: "Respuesta el mismo día, directo con Lin. Sin robots y sin vendedores.",
    fantasma: "VAMOS",
  },
  faq: {
    titulo: "Preguntas que siempre nos hacen",
  },
  home: {
    hero: {
      eyebrow: "Agencia de marketing digital para dueños de negocio",
      titulo: "Marketing digital que hace sonar tu",
      destaque: "WhatsApp",
    },
    faq: [
      {
        pergunta: "¿Cuánto cuesta contratar a Etuos?",
        resposta:
          "Depende del servicio, del tamaño de tu negocio y de la competencia en tu ciudad. No trabajamos con paquetes genéricos: el diagnóstico es gratuito y de ahí sale una propuesta con alcance y precio claros. La inversión publicitaria siempre va aparte y directo a Google y a Meta, en tu propia cuenta.",
      },
      {
        pergunta: "¿En cuánto tiempo veo resultados?",
        resposta:
          "Los anuncios pagados suelen traer los primeros contactos en la primera semana y se estabilizan en 30 a 60 días. El SEO muestra los primeros movimientos entre 60 y 90 días y el resultado fuerte después del sexto mes. Un sitio web nuevo queda listo en dos a cuatro semanas. En el diagnóstico te decimos qué camino tiene sentido primero.",
      },
      {
        pergunta: "¿Atienden mi ciudad?",
        resposta:
          "Atendemos todo Estados Unidos y todo Brasil, de forma remota y en tu horario. En EE. UU. tenemos páginas y conocimiento de mercado para Miami, Orlando, Fort Lauderdale, Pompano Beach, Boston, Framingham, Newark, Danbury, Atlanta y Houston, pero la estrategia funciona en cualquier ciudad.",
      },
      {
        pergunta: "¿Necesito contratar los tres servicios?",
        resposta:
          "No. Muchos empiezan por uno: anuncios para tener clientes ahora, o un sitio web para dejar de perder a quien investiga antes de comprar. El diagnóstico te dice por dónde empezar. Cuando los tres trabajan juntos, el costo por cliente baja, pero esa decisión es tuya y a tu ritmo.",
      },
      {
        pergunta: "¿Cómo funciona el diagnóstico gratuito?",
        resposta:
          "Nos escribes por WhatsApp y nos cuentas en pocas líneas cómo está tu negocio. Lin revisa tu sitio web, tu Perfil de Negocio de Google y tu competencia, y te responde con una lectura honesta: qué te está frenando, qué resolver primero y si vale la pena trabajar juntos. Sin costo, sin compromiso y sin robots.",
      },
    ],
  },
  eua: {
    metaTitulo: "Marketing digital para negocios hispanos en EE. UU.",
    metaDescricao:
      "Marketing digital para negocios hispanos en Estados Unidos: anuncios pagados, SEO local y sitios web que traen clientes de verdad. Diagnóstico gratuito.",
    hero: {
      eyebrow: "Agencia para negocios hispanos en EE. UU.",
      titulo: "Marketing digital para negocios hispanos que quieren",
      destaque: "triunfar en EE. UU.",
    },
    faq: [
      {
        pergunta: "¿Entienden el mercado hispano y también el americano?",
        resposta:
          "Los dos, y ahí está la diferencia. Armamos campañas separadas por idioma y por público: una le habla al hispano de tu ciudad y la otra al cliente americano, cada una con el argumento que convence a ese público. El texto en inglés se escribe en inglés, no se traduce.",
      },
      {
        pergunta: "¿Etuos está en Estados Unidos?",
        resposta:
          "Etuos es remota y el fundador vive en Brasil, en contacto constante con el mercado americano. Te atendemos en español y en tu horario, con conocimiento de las ciudades donde la comunidad hispana emprende. Sin oficina que pagar, la inversión va a lo que trae clientes.",
      },
      {
        pergunta: "¿Necesito anuncios en inglés y en español?",
        resposta:
          "Depende de quién te paga. Si buena parte de tus clientes busca en inglés, sí: campañas y textos propios en cada idioma, no traducción automática. Si atiendes solo a la comunidad hispana, el español alcanza y concentramos el esfuerzo en SEO local y prueba social. El diagnóstico responde eso para tu caso.",
      },
      {
        pergunta: "¿Cómo pago los anuncios?",
        resposta:
          "La inversión publicitaria va directo a Google y a Meta, en tu propia cuenta y con tu tarjeta. La gestión es un valor aparte, acordado antes de empezar. La cuenta de anuncios es tuya y sigue siendo tuya si algún día decides irte.",
      },
    ],
    cta: {
      titulo: "¿Listo para crecer en EE. UU.?",
      descricao:
        "Escríbenos por WhatsApp. Recibes un diagnóstico honesto y gratuito de tu marketing, sin compromiso y sin rodeos.",
      botao: "Quiero mi diagnóstico gratuito",
    },
  },
  brasil: {
    metaTitulo: "Marketing digital para negocios en Brasil",
    metaDescricao:
      "Marketing digital para negocios y profesionales en Brasil: anuncios pagados, SEO y sitios web que traen clientes. Diagnóstico gratuito por WhatsApp.",
    hero: {
      eyebrow: "Agencia para negocios en Brasil",
      titulo: "Marketing digital para quien quiere",
      destaque: "crecer en Brasil",
    },
    faq: [
      {
        pergunta: "¿Atienden cualquier ciudad de Brasil?",
        resposta:
          "Sí. El trabajo es remoto y la estrategia es local: campañas y SEO apuntan a tu ciudad, tu barrio y tu público. Ya atendimos clínicas, profesionales independientes, comercios y redes de franquicias en distintos estados de Brasil.",
      },
      {
        pergunta: "Mi negocio es pequeño. ¿Vale la pena anunciar?",
        resposta:
          "Vale, siempre que apuntes bien: un servicio, un público, una oferta clara. Con una inversión modesta y la segmentación correcta, un negocio local suele ver los primeros contactos en la primera semana. En el diagnóstico calculamos el número para tu caso y te decimos si las cuentas cierran.",
      },
      {
        pergunta: "Mi cliente en Brasil habla portugués. ¿Quién escribe los anuncios?",
        resposta:
          "Lin, que es brasileño y vive en Brasil. Anuncios, sitio web y SEO se escriben en portugués de Brasil, con el tono que convence a ese cliente. Tú recibes la atención y los reportes en español, sin nada perdido en la traducción.",
      },
      {
        pergunta: "¿Cómo sigo lo que se está haciendo?",
        resposta:
          "Cada mes recibes un reporte sencillo, en español: cuánto invertiste, cuántos contactos llegaron, cuánto costó cada uno y qué sigue. Y el WhatsApp de Lin queda abierto para cualquier duda en el camino.",
      },
    ],
    cta: {
      titulo: "¿Listo para crecer en Brasil?",
      descricao:
        "Escríbenos por WhatsApp. Recibes un diagnóstico honesto y gratuito de tu marketing, sin compromiso y sin rodeos.",
      botao: "Quiero mi diagnóstico gratuito",
    },
  },
  servicos: {
    metaTitulo: "Servicios: anuncios pagados, SEO y sitios web",
    metaDescricao:
      "Anuncios pagados, SEO local y sitios web para negocios hispanos en Estados Unidos y negocios en Brasil. Mira cómo Etuos hace sonar tu WhatsApp.",
    eyebrow: "Servicios",
    titulo: "Tres servicios, un objetivo: clientes en tu WhatsApp",
    descricao:
      "Los anuncios traen clientes ahora, el SEO los trae para siempre y el sitio web convierte a los dos en conversación. Puedes empezar por uno. Juntos, el costo por cliente baja.",
  },
  servico: {
    eyebrow: "Servicio",
    ctaHero: "Quiero este servicio",
    mensagem: (nome: string) =>
      `¡Hola! Llegué por el sitio de Etuos y quiero un diagnóstico gratuito sobre ${nome.toLowerCase()}.`,
    doresTitulo: "¿Esto se parece a tu día a día?",
    doresFecho:
      "Si te identificaste con al menos una, este servicio es para ti.",
    entregasEyebrow: "Qué incluye",
    entregasTitulo: "Lo que entregamos",
    comparativo: {
      eyebrow: "Compara",
      titulo: "¿Hacerlo solo, agencia común o Etuos?",
      colCriterio: "Qué cambia",
      colSozinho: "Haciéndolo solo",
      colAgencia: "Agencia común",
      colEtuos: "Etuos",
    },
    processoEyebrow: "Proceso",
    processoTitulo: "Cómo funciona en la práctica",
    faqTitulo: (nome: string) => `Preguntas frecuentes: ${nome.toLowerCase()}`,
    ctaTitulo: "¿Empezamos?",
    ctaDescricao:
      "Escríbenos por WhatsApp, cuéntanos de tu negocio y te decimos con sinceridad si este servicio es el correcto para tu momento.",
  },
  cidadesPagina: {
    metaTitulo: "Ciudades donde atendemos en EE. UU.",
    metaDescricao:
      "Marketing digital para negocios hispanos en 10 ciudades de EE. UU.: Miami, Orlando, Boston, Newark y más. Encuentra tu ciudad y hablemos.",
    eyebrow: "Ciudades donde atendemos",
    titulo: "Las 10 ciudades donde Etuos ya trabaja",
    descricao:
      "Cada ciudad tiene su propia página, con el mercado local, las zonas que cubrimos y las preguntas que hacen quienes emprenden ahí.",
  },
  cidade: {
    metaTitulo: (nome: string, uf: string) =>
      `Agencia de marketing digital en ${nome}, ${uf}`,
    metaDescricao: (nome: string, estado: string) =>
      `Marketing digital para negocios hispanos en ${nome}, ${estado}: anuncios pagados, SEO local y sitios web que traen clientes. Diagnóstico gratuito.`,
    // El nombre de la ciudad va destacado justo después de este texto.
    h1Antes: "Marketing digital para negocios hispanos en",
    ctaHero: (nome: string) => `Atraer clientes en ${nome}`,
    mensagem: (nome: string) =>
      `¡Hola! Tengo un negocio en la zona de ${nome} y quiero un diagnóstico gratuito para atraer más clientes.`,
    mercadoTitulo: (nome: string) => `El mercado hispano en ${nome}`,
    nichosTitulo: "Nichos fuertes en la zona",
    comoAjudamosTitulo: (nome: string) => `Cómo ayudamos a negocios en ${nome}`,
    saibaMais: "Saber más",
    comoBuscamTitulo: (nome: string) =>
      `Cómo busca tu cliente en ${nome}`,
    atendemosTitulo: (nome: string) => `Atendemos ${nome} y alrededores`,
    atendemosDescricao: (nome: string) =>
      `Trabajamos con negocios en toda el área de ${nome}, incluyendo:`,
    faqTitulo: (nome: string) => `Preguntas de quienes emprenden en ${nome}`,
    ctaTitulo: (nome: string) => `¿Listo para crecer en ${nome}?`,
    ctaDescricao:
      "Escríbenos por WhatsApp y recibe un diagnóstico gratuito de tu marketing en tu zona, sin compromiso.",
  },
  blog: {
    metaTitulo: "Blog: marketing digital para negocios hispanos",
    metaDescricao:
      "Artículos prácticos sobre marketing digital, anuncios pagados, SEO local y ventas para negocios hispanos en Estados Unidos y negocios en Brasil.",
    eyebrow: "Blog",
    titulo: "Contenido práctico para atraer más clientes",
    descricao:
      "Lo que aprendemos cada día gestionando campañas, SEO y sitios web, escrito para que lo apliques en tu negocio.",
    por: "por",
    ler: "Leer artículo",
  },
  contato: {
    metaTitulo: "Contacto: diagnóstico gratuito por WhatsApp",
    metaDescricao:
      "Escríbele a Etuos por WhatsApp y recibe un diagnóstico gratuito de tu marketing. Respuesta el mismo día, directo con el fundador, sin robots y sin compromiso.",
    eyebrow: "Contacto",
    titulo: "Habla directo con quien va a cuidar tu marketing",
    descricao:
      "El camino más rápido es WhatsApp. Cuéntanos en pocas líneas cómo está tu negocio y recibe un diagnóstico gratuito, sin compromiso.",
    passos: [
      "Nos escribes por WhatsApp y nos cuentas cómo está tu negocio hoy",
      "Lin revisa tu sitio web, tu Perfil de Negocio de Google y tu competencia",
      "Recibes una lectura honesta de qué resolver primero",
    ],
    numeroRotulo: "¿Prefieres guardar el número? WhatsApp",
  },
  formulario: {
    semEndpointTexto:
      "Escríbenos por WhatsApp, cuéntanos en dos líneas cómo está tu negocio y tu plan de acción sale en un máximo de 48 horas.",
    semEndpointRodape:
      "Respuesta el mismo día, directo con Lin. Sin robots y sin formularios largos.",
    feito: "Listo",
    recebemosTitulo: "Recibimos tu solicitud",
    recebemosTexto:
      "Tu plan de acción queda listo en un máximo de 48 horas y llega al WhatsApp que nos dejaste. Si quieres adelantar la conversación, escríbenos ahora.",
    falarAgora: "Escribir por WhatsApp ahora",
    nome: "Tu nombre",
    whatsapp: "WhatsApp con código de área",
    whatsappDica: "Puede ser un número de Estados Unidos o de Brasil",
    site: "Dirección de tu sitio web",
    siteDica: "Si todavía no tienes sitio, escribe: no tengo",
    ondeFica: "Dónde está el negocio",
    paisBrasil: "Brasil",
    paisEua: "Estados Unidos",
    cidade: "Ciudad",
    enviando: "Enviando...",
    erroAntes: "No pudimos enviarlo ahora. Intenta de nuevo o",
    erroLink: "escríbenos por WhatsApp",
    erroDepois: ", que por ahí lo resolvemos.",
    privacidadeAntes:
      "Tus datos sirven solo para armar el plan y hablar contigo. Sin spam. Más detalles en la",
    privacidadeLink: "política de privacidad",
    privacidadeDepois: ".",
  },
  campanha: {
    comoFunciona: "Cómo funciona",
    quemMonta: "Quién arma tu plan",
    prazer: "Mucho gusto, soy Lin",
    fotoLinAlt:
      "Lin Zeri, fundador de Etuos, sonriendo con los brazos cruzados en un evento",
    prefereConversar: "¿Prefieres resolverlo conversando? La puerta también está abierta.",
    falarWhatsApp: "Escribir por WhatsApp",
  },
  naoEncontrada: {
    titulo: "Página no encontrada",
    texto: "Esta página no existe o cambió de dirección.",
    voltar: "Ir al inicio",
  },
  metadata: {
    tituloPadrao: "Etuos | Agencia de marketing digital en EE. UU. y Brasil",
    template: "%s | Etuos",
  },
  og: {
    titulo: "Marketing digital que hace sonar tu WhatsApp",
    subtitulo: "Anuncios pagados, SEO local y sitios web",
    alt: "Etuos: marketing digital para negocios en Estados Unidos y Brasil. Anuncios pagados, SEO local y creación de sitios web.",
  },
  schema: {
    contatoTipo: "atención al cliente",
    eua: "Estados Unidos",
    brasil: "Brasil",
    cargoLin: "Fundador y estratega de marketing digital",
    audiencia:
      "Dueños de negocios y profesionales en Estados Unidos y Brasil",
    trilhaHome: "Inicio",
    trilhaEua: "Estados Unidos",
    trilhaServicos: "Servicios",
    trilhaBlog: "Blog",
    trilhaSobre: "Nosotros",
  },
} satisfies Dicionario;
