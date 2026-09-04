import type { ConteudoPrivacidade } from "./pt";

// Privacy policy copy in English. Same shape as pt.ts.
export const privacidadeEn = {
  metaTitulo: "Privacy policy",
  metaDescricao:
    "How Etuos collects, uses and protects the data of people who visit the site and fill out the forms, in line with Brazil's data protection law (LGPD).",
  titulo: "Privacy policy",
  intro:
    "Updated on August 6, 2026. In plain English, no legalese: what we collect, what we use it for and how you ask us to delete it.",
  secoes: [
    {
      titulo: "Who is responsible for your data",
      paragrafos: [
        "Etuos is a digital marketing agency founded and run by Lin Zeri, serving businesses in the United States and Brazil. Etuos is a Brazilian company, so the personal data handled on this site is governed by the Brazilian data protection law (LGPD, Law 13.709/2018), under which Etuos is the data controller. If you're in the United States, you get the same rights described on this page.",
        "All privacy-related contact goes through the official Etuos WhatsApp, at the bottom of this page. Etuos doesn't keep a public support e-mail.",
      ],
    },
    {
      titulo: "What data we collect",
      paragrafos: [
        "When you fill out a form on the site, we collect what you type: name, WhatsApp number, your website address, and the city and country where your business is located.",
        "Along with the submission, we also record technical data about the visit: the page you were on, where you came from, the browser you used, the date and time, and the campaign identifiers that come attached to the ad link (gclid, wbraid, gbraid and UTM parameters). These identifiers tell us which ad brought you here.",
        "When you click to talk on WhatsApp, you're taken to the app and the conversation also becomes subject to WhatsApp's privacy policy, which Etuos doesn't control.",
      ],
    },
    {
      titulo: "What we use it for",
      paragrafos: [
        "To reply to you, put together the action plan or proposal you asked for, and continue the conversation about your business. That's the main purpose, and the legal basis is carrying out pre-contractual steps at your request.",
        "To measure the results of our ads and understand which campaigns bring in real leads. Here the legal basis is legitimate interest, and the processing is limited to what's needed for that measurement.",
        "We don't sell, rent or trade your data with anyone. We also don't use your data for mass messaging.",
      ],
    },
    {
      titulo: "Who we share it with",
      paragrafos: [
        "Form data is stored in Google Workspace (Google Sheets and Google Apps Script), in an account controlled by Etuos.",
        "The site is hosted on Vercel and uses the Google Ads tag to measure conversions. These providers handle data as processors, following our instructions and their own privacy policies.",
        "We may share data when required by law or by order of a competent authority.",
      ],
    },
    {
      titulo: "Cookies and measurement",
      paragrafos: [
        "This site uses the Google Ads tag, which sets cookies to recognize when a click on an ad turned into a contact. This measurement is aggregated and isn't used on our side to identify you individually.",
        "The site also sets its own cookie, called etuos_idioma, when you pick a language in the menu. Its only job is to open the site in the right language on your next visit, and it doesn't identify you.",
        "You can block or delete cookies in your browser settings. The site keeps working normally, only the campaign measurement gets less precise.",
      ],
    },
    {
      titulo: "How long we keep it",
      paragrafos: [
        "We keep contact data for as long as the sales conversation lasts and, after that, for up to 2 years, a period in which it still makes sense to pick the subject back up. After that, or sooner if you ask, the data is deleted.",
      ],
    },
    {
      titulo: "Your rights",
      paragrafos: [
        "The LGPD guarantees that you can confirm whether we process your data, access what we have, correct wrong information, request deletion, withdraw consent and object to processing based on legitimate interest. These rights apply to you wherever you are, including in the United States.",
        "To exercise any of these rights, just message us on WhatsApp. We reply within 15 days.",
      ],
    },
    {
      titulo: "Security",
      paragrafos: [
        "The site is served entirely over HTTPS, and access to the contact spreadsheet is restricted to the Etuos account, with two-step verification. No system is foolproof, but we treat your data with the care we'd want for our own.",
      ],
    },
    {
      titulo: "Changes to this policy",
      paragrafos: [
        "If anything changes in how we handle data, we update this page and the date at the top. It's worth checking back once in a while.",
      ],
    },
  ],
  caixa: {
    titulo: "Talk about your data",
    texto:
      "Want to know what we have on file, fix something or ask us to delete everything? Message us on WhatsApp and we'll sort it out.",
    botao: "Talk about privacy",
    mensagem:
      "Hi! I came from the privacy policy on the Etuos website and I'd like to talk about my data.",
  },
} satisfies ConteudoPrivacidade;
