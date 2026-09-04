import type { IdServico } from "@/i18n/mapa-slugs";
import type { ConteudoServico } from "./index";

// English copy, written for US business owners (not a literal translation of
// pt.ts). Slugs live in src/i18n/mapa-slugs.ts. Same structure as pt.ts: a
// concrete promise in the title, specific pains, deliverables with a mechanism,
// a short process, who it is for, a comparison table and the objections we hear.
export const servicosEn: Record<IdServico, ConteudoServico> = {
  "trafego-pago": {
    nome: "Paid ads",
    titulo: "Paid ads management: Google and Meta Ads that make your phone ring",
    descricaoCurta:
      "Campaigns on Google, Instagram and Facebook that put your business in front of people already searching for what you sell, in your city, and send them straight to your WhatsApp.",
    heroDescricao:
      "A good ad isn't the one that shows up the most. It's the one that shows up for the right person, at the right moment, and ends in a conversation. That's what we build, measure and adjust every week.",
    dores: [
      "You live on referrals and never know whether next month will be good or bad",
      "Your competitors show up first on Google and on social media, even when you do better work",
      "You've boosted a post, the money vanished and not a single customer came out of it",
      "Every time you open Google Ads you close the tab five minutes later",
    ],
    entregas: [
      {
        titulo: "Google Ads campaigns",
        descricao:
          "Your business shows up exactly when someone types what you sell, within the radius you serve. People who search already want to buy; we just put you in front of them.",
      },
      {
        titulo: "Meta Ads (Instagram and Facebook) campaigns",
        descricao:
          "Ads with creative built for the people who actually hire you in your city, each with the message that convinces that audience. No boosting posts in the dark.",
      },
      {
        titulo: "Targeting by neighborhood and by language",
        descricao:
          "You choose where you want to grow. We aim at the right city, radius and audience, so you never pay for a click from someone who lives too far away or speaks a language you don't serve.",
      },
      {
        titulo: "Optimization every week",
        descricao:
          "We review the campaigns week by week: the ad that brings customers gets more budget, the one that doesn't gets cut. Every dollar goes to what's working.",
      },
      {
        titulo: "A report you actually understand",
        descricao:
          "Every month you get a one-page summary in plain English: what you spent, how many leads came in, what each one cost and what comes next. No hundred-tab spreadsheet.",
      },
    ],
    processo: [
      {
        titulo: "Free diagnosis on WhatsApp",
        descricao:
          "You tell us how the business is doing today and we look at where ads can bring a return fastest. If the math doesn't work, we'll tell you.",
      },
      {
        titulo: "A strategy built for you",
        descricao:
          "We define channels, budget, audience and offer for your case. No one-size-fits-all package.",
      },
      {
        titulo: "Campaigns live in days",
        descricao:
          "We create the ads, set up tracking for every lead and get the campaigns running.",
      },
      {
        titulo: "Optimize and scale",
        descricao:
          "With the first results in hand, we adjust what pays off and raise the budget safely, without gambling in the dark.",
      },
    ],
    paraQuem:
      "For business owners who need customers now. Paid ads are the fastest way to generate leads: the campaigns start working in the same month, while SEO matures.",
    comparativo: [
      {
        criterio: "Who builds and runs it",
        sozinho: "You, between one customer and the next",
        agencia: "An account manager and an intern",
        etuos: "Lin, from diagnosis to report",
      },
      {
        criterio: "Targeting",
        sozinho: "A boosted post shown to everyone",
        agencia: "The whole city, one language",
        etuos: "Your customer's neighborhood, radius and language",
      },
      {
        criterio: "First lead",
        sozinho: "Weeks of trial and error",
        agencia: "Depends on the package",
        etuos: "Usually arrives in the first week",
      },
      {
        criterio: "Reporting",
        sozinho: "A Google dashboard nobody understands",
        agencia: "A 40-page PDF",
        etuos: "One page: spent, leads, cost, next step",
      },
      {
        criterio: "Your ad account",
        sozinho: "Yours",
        agencia: "Often stays with the agency",
        etuos: "Yours, on your card, always",
      },
    ],
    faq: [
      {
        pergunta: "How much do I need to spend per month for this to be worth it?",
        resposta:
          "It depends on your industry, your average ticket and the city you serve. Advertising in Miami costs more than advertising in Danbury, and selling a $200 service takes less budget than selling a $5,000 one. In the free diagnosis we work out the number for your case and tell you honestly whether the math works with what you have today.",
      },
      {
        pergunta: "How long until the ads start bringing in customers?",
        resposta:
          "A well-built campaign usually generates the first leads within the first week. Fine-tuning takes 30 to 60 days, which is how long it takes to learn which ads, audiences and times of day perform best for your business. After that, it's a matter of scaling what works.",
      },
      {
        pergunta: "Is the management fee charged together with the ad budget?",
        resposta:
          "No. The ad budget goes straight to Google and Meta, on your account and your card, so you see exactly how much went to the platform. Management is a separate fee, agreed on before we start. The ad account is yours and stays yours.",
      },
      {
        pergunta: "Can you run ads in Spanish (or another language) for my customers?",
        resposta:
          "Yes, and in many markets that's where the best return is. If part of your customer base speaks Spanish, Portuguese or another language, we build separate campaigns for each one, with their own creative and landing page, because different audiences don't respond to the same argument. The copy is written natively in each language, never translated word for word.",
      },
      {
        pergunta: "I've boosted posts before and nothing happened. Will this be different?",
        resposta:
          "Boosting a post means handing your money to the algorithm to pick who sees it, with no clear offer and no destination. A campaign is a different thing: a defined audience, creative built to sell, a page that converts and tracking for every lead that comes in. It's the difference between hoping and measuring.",
      },
      {
        pergunta: "Do I need a website to run ads?",
        resposta:
          "Not necessarily. We can send the ad straight to WhatsApp. But with a landing page the cost per lead usually drops, because the person arrives already knowing what you do and why they should trust you. If that's your case, we build the page together with the campaign.",
      },
    ],
  },
  seo: {
    nome: "SEO",
    titulo: "Local SEO: show up on Google and Maps without paying per click",
    descricaoCurta:
      "We get your website and your Google Business Profile into the top spots for searches in your city, so customers find you every day, with no ad budget.",
    heroDescricao:
      "When someone searches for your service on Google, whoever shows up first gets the customer. Our job is to make that someone find you, today, next month and next year, without paying for every click.",
    dores: [
      "Your business doesn't show up on Google, not even when people search for your name",
      "People looking for your service in your city find your competitor on the map, not you",
      "You pay for ads forever because the moment the budget stops, so does the phone",
      "Your Google Business Profile is abandoned: no photos, no recent reviews",
    ],
    entregas: [
      {
        titulo: "Local SEO and Google Business Profile",
        descricao:
          "We optimize your Google Business Profile and your website for searches in your city and in the neighborhoods you actually serve. The map is where local customers decide who to call.",
      },
      {
        titulo: "Technical site optimization",
        descricao:
          "Speed, structure, structured data and everything Google looks at when it decides who deserves the top spots. A slow, confusing site doesn't rank, no matter how good the business is.",
      },
      {
        titulo: "Content that ranks and sells",
        descricao:
          "Pages and articles that answer exactly what your customer searches for before buying, written with the words people in your area actually use, in English and in any other language your customers speak.",
      },
      {
        titulo: "Ranking tracking",
        descricao:
          "Every month you get a one-page summary in plain English: which keywords are climbing, how traffic is growing and how many leads came in. No pretty chart hiding a bad result.",
      },
    ],
    processo: [
      {
        titulo: "Full audit",
        descricao:
          "We analyze your website, your Google Business Profile and the competitors showing up ahead of you, to know exactly where to strike first.",
      },
      {
        titulo: "90-day plan",
        descricao:
          "We prioritize what brings results fastest and lay out the content and optimization plan, with goals you can measure.",
      },
      {
        titulo: "We do the work",
        descricao:
          "Technical fixes, content and authority: we roll up our sleeves. You keep running your business.",
      },
      {
        titulo: "Compound growth",
        descricao:
          "SEO is compound interest: every month of work adds to the last, and traffic grows without you paying per click. After a year, it's the cheapest channel you have.",
      },
    ],
    paraQuem:
      "For business owners who want a customer machine that doesn't depend on ads. It takes longer than paid ads, but the results stick, keep building and don't switch off when the budget runs out.",
    comparativo: [
      {
        criterio: "Focus",
        sozinho: "Tips from YouTube videos",
        agencia: "Traffic, a vanity metric",
        etuos: "Searches that turn into leads in your city",
      },
      {
        criterio: "Google Maps",
        sozinho: "An abandoned profile",
        agencia: "One item on a checklist",
        etuos: "Profile, reviews and service area as the priority",
      },
      {
        criterio: "Content",
        sozinho: "When you find the time",
        agencia: "Generic copy from a writer",
        etuos: "Written for what your customer searches, per language",
      },
      {
        criterio: "Timeline",
        sozinho: "Years, never sure you're on track",
        agencia: "Page one in 30 days (doesn't exist)",
        etuos: "First movement in 60 to 90 days, against a measured goal",
      },
      {
        criterio: "Technical side",
        sozinho: "Plugin on top of plugin",
        agencia: "Outsourced",
        etuos: "A fast, well-structured site, by the same team",
      },
    ],
    faq: [
      {
        pergunta: "How long does SEO take to show results?",
        resposta:
          "The first movement usually shows up between 60 and 90 days, and the strong results come after month six. SEO is compound interest: every month of work adds to the last. Whoever promises page one in 30 days is selling an illusion, and we'd rather lose the contract than lie.",
      },
      {
        pergunta: "How much does SEO cost?",
        resposta:
          "We don't sell off-the-shelf packages. The price depends on the size of your site, how competitive your niche is and the city where you want to show up. The diagnosis is free, and that's where the price comes from, along with the scope of what gets done in the first 90 days.",
      },
      {
        pergunta: "Does SEO work for a small, local business?",
        resposta:
          "It does, and that's usually where the return shows up fastest. Searches like service plus city have less competition and very high intent: whoever types that has the problem in their hands right now. A well-kept Google Business Profile and well-written local pages solve a big part of the game.",
      },
      {
        pergunta: "Do I need a website, or is my Google Business Profile enough?",
        resposta:
          "The profile handles searches from people who are already nearby and want to solve it today. The website is what builds authority, answers questions before the first contact and ranks for the searches the profile can't reach. Together they bring in far more than either one alone.",
      },
      {
        pergunta: "Can my site rank in English and in Spanish (or another language) at the same time?",
        resposta:
          "Yes, with separate pages for each language. The common mistake is translating word for word: people searching in Spanish or Portuguese look for the same thing with different terms. We research both vocabularies and write for both audiences.",
      },
      {
        pergunta: "Is it worth doing SEO and paid ads at the same time?",
        resposta:
          "In most cases, yes. Ads bring customers now and pay the bills while SEO matures. Once organic traffic starts moving, you reduce your dependence on ad spend without losing lead volume. That's how the cost per customer drops year after year.",
      },
    ],
  },
  "criacao-de-sites": {
    nome: "Website design",
    titulo: "Website design and landing pages that turn visitors into customers",
    descricaoCurta:
      "Fast, mobile-first websites with copy that sells, built to send every visitor straight to your WhatsApp. Ready for Google from day one.",
    heroDescricao:
      "Your website isn't a business card. It's a salesperson working 24 hours a day, answering your customer's questions before you do and walking them to the WhatsApp button. We build yours to do exactly that.",
    dores: [
      "You don't have a website and you lose the customers who research before they buy, which is almost all of them",
      "Your site is slow, looks bad on a phone or seems abandoned since 2019",
      "Visitors land on your site and do nothing: no message, no call, no quote request",
      "You pay for ads that send people to a page that doesn't convert",
    ],
    entregas: [
      {
        titulo: "Professional, one-of-a-kind design",
        descricao:
          "No generic template that looks just like your competitor's. A site that looks like your business, sharp on a phone and on a desktop, with your identity and your photos.",
      },
      {
        titulo: "Copy that sells",
        descricao:
          "We write every section to walk the visitor to the WhatsApp button: a clear promise, proof, objections answered. In your tone and in the language your customers speak.",
      },
      {
        titulo: "Real speed",
        descricao:
          "Static sites that load in the blink of an eye, on your customer's 4G and on their home Wi-Fi. Speed is conversion, and it's ranking on Google.",
      },
      {
        titulo: "SEO from day one",
        descricao:
          "Structure, titles, structured data and content already optimized so Google can find and rank your site. Plus tracking on every WhatsApp click, so you know where each lead comes from.",
      },
    ],
    processo: [
      {
        titulo: "A direct briefing",
        descricao:
          "One conversation to understand your business, your customers, what people usually ask before they hire you and what the site needs to do for you.",
      },
      {
        titulo: "Design and copy",
        descricao:
          "We create the layout and the copy together, thinking about conversion from the first screen to the last button.",
      },
      {
        titulo: "Build and review",
        descricao:
          "We build the site, you review it and we adjust until it's exactly the way you want. No surprises at the end.",
      },
      {
        titulo: "Live and measuring",
        descricao:
          "We publish with your domain, analytics and WhatsApp set up. Ready to receive traffic the same day.",
      },
    ],
    paraQuem:
      "For business owners starting from scratch or stuck with a site that brings in nothing. It's the foundation for everything else: ads and SEO perform far better on a site that converts.",
    comparativo: [
      {
        criterio: "Design",
        sozinho: "A template that looks like your competitor's",
        agencia: "A template in your colors",
        etuos: "One of a kind, looks like your business",
      },
      {
        criterio: "Copy",
        sozinho: "You write it at night, when you can",
        agencia: "Lorem ipsum until delivery",
        etuos: "Written to walk visitors to WhatsApp",
      },
      {
        criterio: "Speed",
        sozinho: "Slow WordPress, full of plugins",
        agencia: "Depends on the theme",
        etuos: "A static site that opens in the blink of an eye",
      },
      {
        criterio: "SEO",
        sozinho: "Install a plugin and hope",
        agencia: "Billed separately",
        etuos: "Ready for Google from day one",
      },
      {
        criterio: "Ownership",
        sozinho: "Yours",
        agencia: "Tied to the agency's platform",
        etuos: "Domain and site in your name, always",
      },
    ],
    faq: [
      {
        pergunta: "How long does it take to get the site ready?",
        resposta:
          "A business site with a few pages is usually ready in two to four weeks. What slows things down isn't the development: it's the photos, the information about your business and your approval. With the material in hand, it moves fast.",
      },
      {
        pergunta: "Can the site be in English and in Spanish (or another language)?",
        resposta:
          "Yes, in whatever language your customers speak, and it can be more than one. If you serve English-speaking and Spanish-speaking customers, we build both versions, each with its own copy written for that audience. Automatic translation pushes people away, and you never find out.",
      },
      {
        pergunta: "Who writes the copy for the site?",
        resposta:
          "We do. You tell us what you do, who you do it for and what people usually ask before they hire you; we turn that into copy that walks the visitor to the WhatsApp button. You review everything before it goes live.",
      },
      {
        pergunta: "Is the site really mine, or am I locked in with the agency?",
        resposta:
          "The domain stays in your name and the site is yours. If one day you want someone else to take care of it, you take it with you. We'd rather keep clients through results, not passwords.",
      },
      {
        pergunta: "I already sell through Instagram and WhatsApp. Do I need a website?",
        resposta:
          "Social media is rented land: reach and rules change without notice. Your website is the only channel you own. It shows up on Google, works around the clock and lets customers check you out before they message you. And almost everyone checks before spending money with someone they don't know.",
      },
      {
        pergunta: "Does the site come ready for Google?",
        resposta:
          "It does. Structure, titles, speed and structured data are ready from day one, along with tracking of every WhatsApp click, so you know where each lead comes from instead of guessing.",
      },
    ],
  },
};
