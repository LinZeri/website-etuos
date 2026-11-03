# Blog strategy: Etuos in English (/en)

Date: 22/09/2026. Inputs: Google Ads search volumes for the United States pulled from DataForSEO on 22/09/2026, the English site copy (`src/data/servicos/en.ts`, `src/paginas/conteudo/sobre/en.ts`), `docs/seo.md` and `docs/escopo.md`.

> This document drives the **English** production queue (`docs/blog-queue-en.json`). It is independent from the Portuguese strategy (`docs/blog-strategy.md`): different reader, different keywords, no hreflang between the two. An English post is never a translation of a Portuguese one.
>
> **Update 10/20/2026: Phase 2 (right below) drives production from 11/02/2026 to 01/29/2027.** Pillars 1 and 2 are closed and pillars 3 to 5 had one or two topics left. Refill the queue from Phase 2. Audience, editorial rules and the CTA framework further down still apply.

## Phase 2: November 2026 to January 2027

Inputs: Search Console 07/20 to 10/18/2026 (`docs/gsc/gsc-2026-10-18.json`), DataForSEO Google Ads volumes for the United States pulled 10/20/2026, the SEO audit of 10/20/2026 (`etuos-audit/`, score 86/100) and the industries list on the About page (`src/paginas/conteudo/sobre/en.ts`).

### Where we are

- 34 English posts published or scheduled through 10/30.
- Search Console, 90 days: 340 impressions and 2 clicks site wide. The English blog is already the largest share of blog impressions: `small-business-website-design-cost` (38 impressions, average position 75, a dozen "small business website cost" variants), the GBP checklist (7, position 55), negative reviews (7, position 8.7) and the local SEO hub (7, position 45).
- Queries in the 8 to 30 band on the English blog: "local seo for service businesses" (26), "adwords quality score checker" (21). Thin, as expected for posts under six weeks old.
- AI citations: zero at the 10/09 baseline; next check early November.

### Phase 2 thesis

Phase 1 covered getting found (local search) and paying for clicks (paid ads). Phase 2 covers what decides whether those clicks become revenue, and the moment an owner decides to hire help:

1. **Industry playbooks, only for industries Etuos has actually served.** The About page lists them: real estate, construction and remodeling, solar energy, battery and energy backup, aesthetics and beauty, medical practices, psychology, restaurants, cleaning, financial services, events, fashion and apparel, journalism. Plumbers (480/month), auto repair (720), pest control (320) and dental (1,300) have volume but stay out until they are real experience.
2. **Lead to customer.** "crm for small business" (4,400), "call tracking" (1,600), "speed to lead" (880): owner-level problems with SaaS-dominated SERPs that never speak to a service business.
3. **Beyond Google.** "google guaranteed" (4,400) and "nextdoor advertising" (2,900) are the two biggest local ad terms we have not touched.
4. **Hiring marketing help.** "what does a marketing agency do" (390, competition 9), "how to choose a marketing agency" (110, rising to 260 in 2026), "local seo cost" (140, competition 1). Bottom of funnel, closest to the WhatsApp conversion.

**Price rule:** cost posts explain what drives the price and quote ranges only from a registered external source. Never an Etuos price.

### Pillar 3 (reopened): Industry playbooks

| # | Working title | Template | Target keyword | US volume |
|---|---|---|---|---|
| 1 | Solar lead generation: what scaled a solar network from 30 to 300+ franchises | case-study | solar lead generation | 590 |
| 2 | Real estate agent marketing that brings listings, not just likes | how-to-guide | real estate agent marketing | 720 |
| 3 | Medical practice marketing within HIPAA and advertising rules | how-to-guide | medical practice marketing | 320 |
| 4 | Therapist marketing: filling a private practice without ethics problems | how-to-guide | therapist marketing | 390 + 110 |
| 5 | Financial advisor marketing under the SEC marketing rule | how-to-guide | financial advisor marketing | 320 |
| 6 | Home battery backup marketing: selling resilience after the outage | thought-leadership | solar battery marketing | (no data) |
| 7 | Boutique marketing: local foot traffic plus Instagram | listicle | boutique marketing | 90 |
| 8 | Event planner marketing: booking the calendar past word of mouth | how-to-guide | event planner marketing | 70 |

YMYL note: posts 3, 4 and 5 ship only with the governing rule (HHS for HIPAA, the SEC marketing rule, the relevant licensing board guidance) registered in `docs/blog-fontes-verificadas.md` first. Post 1 is the strongest E-E-A-T piece on the English blog: first-hand, uses only the authorized franchise numbers, and never names the client.

### Pillar 6 (new): Lead to customer

- **Hub**: the lead to customer system for a local service business: answer fast, track the source, follow up, ask for the review.
- The published `what-to-do-with-leads-from-google-ads` becomes a spoke and links the new hub.

| # | Working title | Template | Target keyword | US volume |
|---|---|---|---|---|
| P | From lead to paying customer: the system a local service business needs | pillar-page | lead management for small business | (long tail) |
| 1 | Speed to lead: why the first business to answer usually wins the job | data-research | speed to lead | 880 |
| 2 | Call tracking for a small business: what it shows and what it costs | tutorial | call tracking | 1,600 |
| 3 | CRM for a service business: what you actually need (and what you don't) | comparison | crm for small business | 4,400 |
| 4 | The cost of a missed call, and how to stop missing them | how-to-guide | missed calls small business | (long tail) |
| 5 | Tracking WhatsApp, calls and forms in GA4 without a developer | tutorial | track conversions ga4 | (long tail) |

Spoke 1 and spoke 4 depend on sourced response time data; without a registered source they ship qualitative, with no number.

### Pillar 2 (extended): Beyond Google

| # | Working title | Template | Target keyword | US volume |
|---|---|---|---|---|
| 1 | Google Guaranteed: what the badge means, what it costs and how to get it | faq-knowledge | google guaranteed | 4,400 |
| 2 | Nextdoor advertising for local businesses: who it works for | comparison | nextdoor advertising | 2,900 |
| 3 | Are Yelp ads worth it for a service business? | comparison | yelp ads worth it | 50 |
| 4 | Retargeting for a local business: when it pays and when it is wasted money | faq-knowledge | retargeting for local business | (long tail) |

Spoke 1 must stay distinct from the published LSA versus Google Ads post: the intent here is the badge and the verification process, not the channel choice. Link both ways.

### Pillar 7 (new): Hiring marketing help

| # | Working title | Template | Target keyword | US volume |
|---|---|---|---|---|
| P | What a marketing agency actually does for a local business | pillar-page | what does a marketing agency do | 390 |
| 1 | How to choose a marketing agency: a checklist from the inside | how-to-guide | how to choose a marketing agency | 110 |
| 2 | Questions to ask a marketing agency before you sign | faq-knowledge | questions to ask a marketing agency | 30 |
| 3 | How to choose an SEO company without getting burned | how-to-guide | how to choose an seo company | 90 |
| 4 | How much local SEO costs, and what you should get for it | data-research | local seo cost | 140 |
| 5 | Signs your marketing agency is not working | listicle | (long tail) | (no data) |
| 6 | Who owns your Google Ads account? What to check in an agency contract | faq-knowledge | (long tail) | (no data) |

Internal links: `/en/about`, `/en/services`. No self-praise: the posts teach how to evaluate any agency, Etuos included.

### Standalone authority item

- **Franchise marketing** (1,000/month, very seasonal: 3,600 in 10/2025, 260 in 09/2026): local marketing for a multi-location brand, written from the solar network experience. The standalone item for November.

### Pillar 5 and pillar 4 (continue)

- **Refresh first, write second.** `small-business-website-design-cost` is the English page with the most impressions but sits at position 75. November refresh: match the SERP intent (price ranges with registered sources, a cost table, an answer capsule in the first 60 words) and add "how much should a small business website cost" as an H2.
- Pillar 5 spokes: what makes a service page convert (planned in Phase 1); mobile speed for a small business site; click to call and WhatsApp buttons that get measured.
- Pillar 4 city reads (December): Houston first, given the Spanish language search signal on `/es/ciudades/houston`, then Miami, Newark and Framingham. Census sources registered before writing.

### Production order

Alternate pillars every week. Hubs ship in the first week of their pillar.

| Week of | Items |
|---|---|
| 11/02 | Pillar 6 hub, Google Guaranteed, solar lead generation, website cost refresh |
| 11/09 | Pillar 7 hub, Nextdoor advertising, CRM for a service business, real estate agent marketing |
| 11/16 | Speed to lead, how to choose a marketing agency, therapist marketing, franchise marketing |
| 11/23 | Thanksgiving week: 2 posts (call tracking, local SEO cost) |
| 11/30 to 12/21 | Remaining pillar 2, 3, 6 and 7 spokes, pillar 5 spokes, Houston city read |
| January | Remaining city reads, Search Console reinforcement spokes, two refreshes per month |

That is 33 new topics plus 1 refresh for about 9 weeks of production. Week of 12/28: minimum cadence (2 posts).

### Phase 2 targets (by 01/29/2027)

- 15+ English blog pages with impressions in Search Console; 5+ queries in positions 1 to 20.
- `small-business-website-design-cost` inside the top 30 for its main query after the refresh.
- First Etuos mention in ChatGPT or Google AI Overviews for any monitored query. Add "how to choose a marketing agency for a local business" and "google guaranteed vs local services ads" to `docs/ai-citation-log.md`.
- Entity signal: the company LinkedIn is in the Organization `sameAs` since 10/21 (`site.perfis` in `src/data/site.ts`). Still missing: Lin's personal LinkedIn (Person `sameAs`) and an agency directory profile (Clutch). Without third party mentions, more posts alone will not move AI citations.

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
- Review every 60 days with DataForSEO plus Search Console (connected on 10/09/2026, see "Search Console cycle" above).

## Content velocity (updated 09/10/2026)

- **4 new posts per week**, all spokes, published Monday, Tuesday, Thursday and Friday (New York time). Hard floor: 2 per week; a week below that becomes a backfill item.
- **Backfill**: 6 English posts to close the weeks with no publishing (09/21, 09/28, 10/05), dated inside their own week: 09/22, 09/24, 09/29, 10/01, 10/05 and 10/06. They sit at the front of the queue and ship at one per day, on any day of the week, until cleared.
- **Queue**: 8 pending items (two weeks), refilled by the replenish routine. Standalone items (a new pillar, a refresh of an old post) are capped at one per month.
- Every post ships with a cover image plus 3 to 4 body illustrations (producer runbook).
- From 12/01/2026: two refreshes of older posts per month, chosen from Search Console data.

## 90-day roadmap (10/2026 to 12/2026)

Starting point: 7 posts published (four pillar hubs, plus the GBP checklist, the LSA comparison and the cleaning playbook), zero AI mentions in ChatGPT and Google AI Overviews, and no English blog page with impressions in Search Console yet.

### October: recover the pace and finish the local and paid clusters
- [x] AI citation baseline collected 10/09 (`docs/ai-citation-log.md`).
- [x] Search Console export automated (`scripts/gsc-export.py`).
- [ ] Ship the 6 backfill posts, then 4 spokes per week.
- [ ] Pillar 1 spokes: map pack troubleshooting, reviews (ask and respond). Pillar 2 spokes: Google Ads cost, Facebook and Instagram ads.
- [ ] First biweekly Search Console export on 10/23.

### November: industry playbooks and the multilingual angle
- [ ] Industry playbooks: contractors, HVAC, roofing; then med spa and restaurants.
- [ ] Pillar 4: the multilingual post and Spanish language Google Ads.
- [ ] Pillar 5: website cost and landing page vs website.
- [ ] Read Search Console: queries at position 8 to 30 become reinforcement spokes; blog pages with zero impressions after six weeks go on the refresh list.
- [ ] Second AI citation check (early November), compared with the baseline.

### December: authority and refresh
- [ ] Census backed city reads for Miami, Houston, Newark and Framingham (only with sources registered first).
- [ ] Run `/blog analyze` on every post, rework anything below 80, start the two monthly refreshes.
- [ ] Third AI citation check and a strategy review on 90 days of Search Console data.

## Search Console cycle (active since 09/10/2026)

Every two weeks run `python scripts/gsc-export.py 90` (read only service account, property `sc-domain:etuos.com`). It writes `docs/gsc/gsc-<date>.json` with pages, queries, query by page, countries and the daily series. Commit the file; the replenish routine reads the latest one when choosing topics.

## Queue replenishment

The cloud routine keeps 8 pending items in `docs/blog-queue-en.json`, drawing from the pillars above in this order of priority: pillar 1, pillar 2, pillar 3, pillar 4, pillar 5. Publishing order alternates pillars so the blog does not look like a single topic site. When every planned topic in a pillar is published or queued, mark the pillar closed here instead of inventing topics outside the strategy.

## Pillar coverage note (replenish routine, 10/13/2026)

Status of the planned topics in this document, recorded so the next round does not re-derive it:

- **Pillar 1 (local search): closed.** Every planned spoke is now published or queued: GBP checklist, profile not showing up, service area setup, getting reviews, responding to bad reviews, AI search, and map pack ranking (queued 10/13).
- **Pillar 2 (paid ads): closed.** Cost breakdown, Local Services Ads versus Google Ads, Facebook and Instagram, quality score, and the marketing budget question (queued 10/13). The remaining planned spoke, "what a lead should cost in each industry", stays out: the library has no verified cost per lead benchmark by industry and the replenish routine cannot queue a topic that depends on price data.
- **Pillar 3 (industry playbooks): open.** Published or queued: cleaning, contractors, HVAC, roofing, restaurants, landscaping and med spa (the last two queued 10/13). Still available, and only with real experience to cite: medical and mental health practices, real estate. "Marketing for contractors" is deliberately skipped as a near duplicate of the published lead generation post.
- **Pillar 4 (multilingual market): open.** Published or queued: the hub, multilingual customers, Spanish language Google Ads, bilingual website, and how immigrant communities choose a provider (queued 10/13). Still available: the city level reads for Miami, Houston, Newark and Framingham, which the roadmap holds for December and which need Census sources registered first. "Running ads in two languages without doubling the budget" is skipped: the published Spanish ads post already answers the separate campaigns question.
- **Pillar 5 (website and conversion): open.** Published or queued: website cost, landing page versus website, and the site with no calls. Still available: what makes a service page convert.

Search Console read of 10/07/2026: no English blog page has impressions yet (the oldest posts went live 09/10), so no reinforcement spoke could be derived from query data this round. The only queries in the position 8 to 30 band are Spanish language agency searches in Houston hitting the Spanish city page, which is out of the blog loop for now and was used instead as supporting evidence for the pillar 4 item queued today.
