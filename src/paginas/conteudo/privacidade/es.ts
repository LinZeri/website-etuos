import type { ConteudoPrivacidade } from "./pt";

// Copy de la política de privacidad en español. Misma forma que pt.ts.
export const privacidadeEs = {
  metaTitulo: "Política de privacidad",
  metaDescricao:
    "Cómo Etuos recopila, usa y protege los datos de quienes visitan el sitio y llenan los formularios, según la ley brasileña de protección de datos (LGPD).",
  titulo: "Política de privacidad",
  intro:
    "Actualizada el 6 de agosto de 2026. En lenguaje claro, sin jerga legal: qué recopilamos, para qué lo usamos y cómo pides que lo borremos.",
  secoes: [
    {
      titulo: "Quién es el responsable de tus datos",
      paragrafos: [
        "Etuos es una agencia de marketing digital fundada y operada por Lin Zeri, que atiende negocios en Estados Unidos y Brasil. Etuos es una empresa brasileña, por eso los datos personales tratados en este sitio se rigen por la ley brasileña de protección de datos (LGPD, Ley 13.709/2018), bajo la cual Etuos es la responsable del tratamiento. Si estás en Estados Unidos, tienes los mismos derechos descritos en esta página.",
        "Todo contacto sobre privacidad se hace por el WhatsApp oficial de Etuos, al final de esta página. Etuos no mantiene un correo electrónico público de atención.",
      ],
    },
    {
      titulo: "Qué datos recopilamos",
      paragrafos: [
        "Cuando llenas un formulario en el sitio, recopilamos lo que escribes: nombre, número de WhatsApp, la dirección de tu sitio web y la ciudad y el país donde está tu negocio.",
        "Junto con el envío, también registramos datos técnicos de la visita: la página en la que estabas, de dónde venías, el navegador que usaste, la fecha y la hora, y los identificadores de campaña que acompañan el enlace del anuncio (gclid, wbraid, gbraid y parámetros UTM). Esos identificadores nos sirven para saber qué anuncio te trajo.",
        "Cuando haces clic para hablar por WhatsApp, te lleva a la aplicación y la conversación pasa a regirse también por la política de privacidad de WhatsApp, que Etuos no controla.",
      ],
    },
    {
      titulo: "Para qué los usamos",
      paragrafos: [
        "Para responderte, armar el plan de acción o la propuesta que pediste y darle continuidad a la conversación sobre tu negocio. Esa es la finalidad principal y la base legal es la ejecución de procedimientos previos a un contrato, a petición tuya.",
        "Para medir el resultado de nuestros anuncios y entender qué campañas traen contactos de verdad. Aquí la base legal es el interés legítimo, y el tratamiento se limita a lo necesario para esa medición.",
        "No vendemos, alquilamos ni intercambiamos tus datos con nadie. Tampoco usamos tus datos para envíos masivos de mensajes.",
      ],
    },
    {
      titulo: "Con quién los compartimos",
      paragrafos: [
        "Los datos de los formularios se guardan en Google Workspace (Google Sheets y Google Apps Script), en una cuenta controlada por Etuos.",
        "El sitio está alojado en Vercel y utiliza la etiqueta de Google Ads para medir conversiones. Esos proveedores tratan los datos como encargados, siguiendo nuestras instrucciones y sus propias políticas de privacidad.",
        "Podemos compartir datos cuando exista una obligación legal o una orden de autoridad competente.",
      ],
    },
    {
      titulo: "Cookies y medición",
      paragrafos: [
        "Este sitio usa la etiqueta de Google Ads, que guarda cookies para reconocer cuándo un clic en un anuncio se convirtió en un contacto. Esa medición es agregada y no sirve para identificarte individualmente de nuestro lado.",
        "El sitio también guarda una cookie propia, llamada etuos_idioma, cuando eliges un idioma en el menú. Solo sirve para abrir el sitio en el idioma correcto en tu próxima visita y no te identifica.",
        "Puedes bloquear o borrar las cookies en la configuración de tu navegador. El sitio sigue funcionando con normalidad, solo la medición de las campañas queda menos precisa.",
      ],
    },
    {
      titulo: "Por cuánto tiempo los guardamos",
      paragrafos: [
        "Mantenemos los datos de contacto mientras dure la conversación comercial y, después de eso, por hasta 2 años, un plazo en el que todavía tiene sentido retomar el tema. Pasado ese período, o antes si tú lo pides, los datos se borran.",
      ],
    },
    {
      titulo: "Tus derechos",
      paragrafos: [
        "La LGPD garantiza que puedas confirmar si tratamos tus datos, acceder a lo que tenemos, corregir información equivocada, pedir la eliminación, revocar el consentimiento y oponerte al tratamiento basado en interés legítimo. Esos derechos valen donde sea que estés, incluso en Estados Unidos.",
        "Para ejercer cualquiera de esos derechos, solo escríbenos por WhatsApp. Respondemos en un plazo de hasta 15 días.",
      ],
    },
    {
      titulo: "Seguridad",
      paragrafos: [
        "El sitio se sirve completamente por HTTPS y el acceso a la hoja de cálculo de contactos está restringido a la cuenta de Etuos, con verificación en dos pasos. Ningún sistema es infalible, pero tratamos tus datos con el cuidado con el que nos gustaría que trataran los nuestros.",
      ],
    },
    {
      titulo: "Cambios en esta política",
      paragrafos: [
        "Si algo cambia en la forma en que tratamos los datos, actualizamos esta página y la fecha de arriba. Vale la pena volver a revisarla de vez en cuando.",
      ],
    },
  ],
  caixa: {
    titulo: "Hablar sobre tus datos",
    texto:
      "¿Quieres saber qué tenemos guardado, corregir algo o pedir que borremos todo? Escríbenos por WhatsApp y lo resolvemos.",
    botao: "Hablar sobre privacidad",
    mensagem:
      "¡Hola! Vengo de la política de privacidad del sitio de Etuos y quiero hablar sobre mis datos.",
  },
} satisfies ConteudoPrivacidade;
