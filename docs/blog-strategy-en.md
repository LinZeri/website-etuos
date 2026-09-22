# Blog strategy: Etuos in English (/en)

Date: 22/09/2026. Inputs: Google Ads search volumes for the United States pulled from DataForSEO on 22/09/2026, the English site copy (`src/data/servicos/en.ts`, `src/paginas/conteudo/sobre/en.ts`), `docs/seo.md` and `docs/escopo.md`.

> This document drives the **English** production queue (`docs/blog-queue-en.json`). It is independent from the Portuguese strategy (`docs/blog-strategy.md`): different reader, different keywords, no hreflang between the two. An English post is never a translation of a Portuguese one.

## Executive summary

The Portuguese blog bets on a niche with almost no competition (Brazilians doing business in the US). English is the opposite situation: every keyword here already has agencies, SaaS companies and HubSpot ranking for it. So the English blog does not try to outrank HubSpot on "digital marketing for small business". It wins on three things the big publishers cannot copy:

1. **Operator specificity.** Lin runs US accounts every day. Posts carry real numbers (US CPC ranges, what a lead actually costs in these industries), not generic advice.
2. **Industry playbooks.** Cleaning, construction, HVAC, roofing, landscaping, med spa, restaurants: 13 industries served, each with its own buying cycle. Generic publishers write one "local marketing" post; we write the one for the roofer.
3. **The multilingual market.** This is the real differentiator and nobody in US local marketing writes it well: a Boston cleaning company, a Newark contractor, a Houston restaurant all sell to customers who search in English, Spanish and Portuguese. Etuos runs campaigns in all three. Every competitor treats the US market as monolingual.

The measurable bet is the local search cluster: `google business profile optimization` (6,600/month, competition index 7) and `google local service ads` (33,100/month) are high volume with low advertiser competition, which means the SERP is documentation and forum threads, not polished commercial content.

## Audience

**US small business owner, service business, 1 to 50 employees**, in the ten cities the site covers (Miami, Orlando, Fort Lauderdale, Pompano Beach, Boston, Framingham, Newark, Danbury, Atlanta, Houston).

- **Pains**: the phone stopped ringing, referrals dried up, a previous agency charged a retainer and showed nothing, Google Ads burned money in a week, competitors sit above them in the map pack.
- **How they search**: problem-first and cost-first. "how much does google ads cost", "why is my google business profile not showing up", "how to get more cleaning clients". They do not search for "omnichannel strategy".
- **What convinces them**: a number they can check against their own business, a step they can do today, and a person on the other end. Not a whitepaper.
- **Where they ask AI**: "best marketing agency for my cleaning company", "is Google Local Services Ads worth it for contractors". Posts must answer those in a citable, self-contained paragraph.

## Keyword baseline (DataForSEO, United States, 22/09/2026)

| Keyword | Volume/month | Competition index | Read |
|---|---|---|---|
| google local service ads | 33,100 | 36 | Highest volume in the set; SERP is Google docs plus forums |
| google business profile optimization | 6,600 | 7 | The anchor of the local cluster |
| google ads for small business | 1,900 | 19 | Commercial intent, CPC 42 dollars |
| local seo for small business | 1,300 | 6 | Pillar term, weak SERP for a specialist |
| how much does google ads cost | 1,300 | 33 | Cost intent, converts well |
| small business marketing agency | 1,300 | 21 | Bottom of funnel, serves the services pages |
| digital marketing for small business | 1,000 | 25 | Crowded, support topic only |
| how to get google reviews | 880 | 47 | Reviews sub-cluster |
| marketing plan for small business | 720 | 12 | Top of funnel |
| roofing marketing | 590 | 33 | Industry playbook |
| hvac marketing | 480 | 46 | Industry playbook |
| landscaping marketing | 390 | 28 | Industry playbook |
| med spa marketing | 390 | 41 | Industry playbook, high ticket |
| how to respond to negative google reviews | 390 | 13 | Reviews sub-cluster |
| landing page vs website | 390 | 46 | Website cluster |
| lead generation for contractors | 320 | 55 | Industry playbook |
| how to rank higher on google maps | 260 | 12 | Local cluster |
| marketing for contractors | 260 | 30 | Industry playbook |
| facebook ads for local business | 260 | 10 | Paid cluster |
| marketing for cleaning business | 210 | 45 | Industry playbook |
| restaurant marketing ideas | 210 | 45 | Industry playbook |
| how much should a small business spend on marketing | 90 | 4 | Budget question, very weak SERP |
| small business website design cost | 90 | 72 | Cost intent for the website service |
| why is my google business profile not showing up | 50 | 22 | Troubleshooting, high intent |
| how to get more cleaning clients | 50 | 64 | Long tail, owner language |

Note: "how to market to hispanic customers" and "how to get customers for construction business" returned no volume data, which is exactly the pattern of the Portuguese strategy: the differentiated angle has no measurable volume but very high intent and zero competition. Treat these as AI citation plays, not traffic plays.

## Pillars and cluster architecture

Hub and spoke, same rule as the Portuguese blog: pillar of 3,000+ words, spokes of 1,500 to 2,500, every spoke links the pillar and two sibling spokes, every post links the relevant service or city page in `/en`.

### Pillar 1: Show up on Google Maps (local search)
- **Hub**: local SEO for a local service business, end to end.
- **Spokes**: Google Business Profile optimization checklist; why a profile does not show up; ranking in the map pack; getting reviews without asking awkwardly; responding to bad reviews; service area business setup.
- **Service pages**: `/en/services/seo`, city pages.

### Pillar 2: Paid ads that pay for themselves
- **Hub**: what paid ads really cost a local business in the US and when they are worth it.
- **Spokes**: Google Ads cost breakdown by industry; Local Services Ads versus Google Ads (the 33,100/month term, and the comparison almost nobody writes honestly); Facebook and Instagram ads for a local business; how much of revenue to put into marketing; what a lead should cost in each industry.
- **Service pages**: `/en/services/paid-ads`, `/en/lp/paid-ads` stays out of internal linking (noindex).

### Pillar 3: Industry playbooks
- **Hub**: marketing for local service businesses, with the buying cycle of each trade.
- **Spokes**: one per industry Etuos has actually served: cleaning, construction and remodeling, HVAC, roofing, landscaping, med spa and aesthetics, restaurants, medical and mental health practices, real estate.
- **Rule**: an industry only gets a post if there is real experience to cite. Never invent a case or a client name.

### Pillar 4: The multilingual market (the differentiator)
- **Hub**: selling to customers who search in English, Spanish and Portuguese in the same city.
- **Spokes**: running ads in two languages without doubling the budget; what changes in a Spanish language campaign beyond translation; how immigrant communities choose a local provider; city level reads (Miami, Houston, Newark, Framingham) using public Census data.
- **Note**: low or no search volume by design. This is the AI citation and differentiation pillar, and the bridge to the city pages.

### Pillar 5 (support): Website and conversion
- **Spokes**: what a small business website should cost; landing page versus website; what makes a service page convert; why a beautiful site with no calls is a broken site.
- **Service pages**: `/en/services/website-design`.

## Editorial rules (non negotiable)

- **US English**, written for the American owner. Never a translation of a Portuguese post, and never the "Brazilian entrepreneur in the US" framing that belongs to `/pt`.
- **No em dash** anywhere, same as the rest of the project.
- **Authorized numbers only** for Etuos claims: 10+ years in digital marketing, $500K+ in ad spend managed, 30 to 300+ franchises in 1 year and 8 months, 300%+ revenue growth, 13 industries served. Never invent a client name, a price range or a guarantee.
- **The offer is the free diagnosis, no deadline.** The "action plan in 48 hours" belongs only to the campaign landing pages.
- **Every external statistic gets a source from `docs/blog-dominios-confiaveis.md`.** Prefer primary sources (census.gov, bls.gov, sba.gov, Google and Meta documentation) over agency blogs.
- **Internal links always carry the `/en` prefix** and point to the relevant service or city page. Landing pages under `/en/lp/` are noindex and never linked from a post.
- **Frontmatter**: `titulo`, `descricao`, `data` (YYYY-MM-DD), `autor` ("Lin Zeri"), `imagem` (`/images/blog/<slug>.webp`). No `grupo`: English posts stand alone.

## CTA framework

One conversion, every post: **WhatsApp, free diagnosis, no deadline**.

- Closing CTA: a short paragraph naming what the reader gets ("tell me how your business is doing today and I will tell you where ads or local search pay off first"), linking `https://wa.me/5516991252073` with a contextual prefilled message.
- Mid article CTA: only when the post has a natural handoff point, and pointing to the service page, not to WhatsApp twice.
- Never show prices, never promise a position on Google, never promise a result in a fixed timeframe.

## Measurement

- Baseline: zero English keywords ranking as of 22/09/2026.
- 90 day target: the local cluster (pillar 1) ranking in the top 20 for `google business profile optimization` variants and `how to rank higher on google maps`, plus first AI citations for the multilingual angle.
- Review every 60 days with DataForSEO plus Search Console once access is connected.

## Queue replenishment

The cloud routine keeps 7 pending items in `docs/blog-queue-en.json`, drawing from the pillars above in this order of priority: pillar 1, pillar 2, pillar 3, pillar 4, pillar 5. Publishing order alternates pillars so the blog does not look like a single topic site. When every planned topic in a pillar is published or queued, mark the pillar closed here instead of inventing topics outside the strategy.
