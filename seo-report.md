# SEO Audit — Fix It First by Ruben
**Site:** https://fixitfirstbyruben.com/ (dev: http://localhost:3001/)  
**Business type:** Local Service — Handyman (Service-Area Business), Charlotte County FL  
**Date:** 2026-07-12  
**Specialists:** Technical · Schema · Content/E-E-A-T · Local · GEO/AI · SXO

---

## SEO Health Score: 43 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 42 | 9.2 |
| Content Quality / E-E-A-T | 23% | 41 | 9.4 |
| On-Page SEO | 20% | 55 | 11.0 |
| Schema / Structured Data | 10% | 38 | 3.8 |
| Performance (CWV) | 10% | 62 | 6.2 |
| AI Search / GEO | 10% | 34 | 3.4 |
| Images | 5% | 13 | 0.7 |
| **Total** | | | **43.7** |

**Local SEO sub-score: 24 / 100** (GBP, citations, NAP — tracked separately)

> This is a pre-launch site with no live domain, no Google Business Profile, no verified reviews, and thin E-E-A-T. Most critical gaps are straightforward fixes. The technical foundation (Vite build, schema structure, title/meta) is solid.

---

## CRITICAL — Fix Before Launch

### C1. Remove `aggregateRating` from schema
The 5 reviews are hardcoded in `App.tsx` and stored in `localStorage` only — not from Google, Yelp, or any verifiable source. Publishing `ratingValue: 5, reviewCount: 5` on non-verifiable data is a Google spam policy violation and risks a rich result manual action from day one.  
**Fix:** Delete the `aggregateRating` block from `index.html`. Restore only after Ruben has a live GBP with real accumulated reviews.  
**Monitor:** No manual action in Google Search Console; schema passes Rich Results Test clean.

### C2. Schema `address` is incomplete — blocks LocalBusiness rich results
`addressLocality` and `postalCode` are missing. Google requires a reasonably complete address for LocalBusiness rich result eligibility.  
**Fix:** Add `"addressLocality": "Port Charlotte"` and `"postalCode": "33948"`. Street address can stay omitted for a service-area business.  
**Depends on:** C1 — do both edits in one pass.

### C3. No H1 on the page
The page has zero `<h1>` elements. The logo `alt` text and the hero `<p>` elements are not semantic headings. Google uses H1 to identify the primary topic.  
**Fix:** Add `<h1>` in the hero section:
```
Charlotte County Handyman — Fix It First by Ruben
```
Can be styled identically to the existing hero subheadline — this is a one-line code change.  
**Monitor:** Google Search Console coverage; structured data test.

### C4. Client-side rendering — content invisible to non-JS crawlers
The entire app renders into `<div id="root"></div>`. GPTBot, ClaudeBot, and PerplexityBot do not execute JavaScript. Googlebot does, but in a delayed second wave.  
**Fix (two options):**  
- Option A (preferred): `vite-plugin-ssg` or `vite-ssg` — pre-renders static HTML at build time.  
- Option B: A `prerender.js` Playwright script that writes rendered HTML back to `dist/index.html` post-build. The Technical agent confirmed this approach works.  
**Monitor:** `curl https://fixitfirstbyruben.com/ | grep "PRESSURE WASHING"` returns content without JS.

### C5. Exterior services are hidden from crawlers
The services grid defaults to `activeCategory: 'interior'`. Exterior services — Screen Repair, Pressure Washing, Gutter Cleaning, Fence Repair — are hidden behind a tab click and will not be in the prerendered HTML.  
**Fix:** Render all service cards in the DOM and use CSS to show/hide by category (keep the visual tab UX), so all 13 service names are always in the HTML.  
**Why it matters:** A user searching "pressure washing Punta Gorda" landing here won't see pressure washing mentioned above the fold or in the indexed content.

### C6. "UNNAMED" placeholder in Meet Ruben section
Line 917 in `App.tsx` hardcodes the text `UNNAMED` in the profile photo placeholder. This renders to every visitor and signals an unfinished website.  
**Fix:** Remove the `UNNAMED` text immediately. Replace with Ruben's name or leave the box empty until a photo is ready.

---

## HIGH — Fix Within 1 Week of Launch

### H1. No `og:image` / `twitter:image`
Every social share renders a blank card.  
**Fix:**
```html
<meta property="og:image" content="https://fixitfirstbyruben.com/assets/og-image.jpg" />
<meta property="og:site_name" content="Fix It First by Ruben" />
<meta name="twitter:image" content="https://fixitfirstbyruben.com/assets/og-image.jpg" />
```
Create a 1200×630 image (logo on dark background). Switch `twitter:card` to `summary_large_image` once this exists.

### H2. No `robots.txt` or `sitemap.xml`
**Fix — `public/robots.txt`:**
```
User-agent: *
Allow: /
Sitemap: https://fixitfirstbyruben.com/sitemap.xml
```
**Fix — `public/sitemap.xml`:** Single `<url>` entry for the homepage, `<priority>1.0`, `<lastmod>` set to build date.

### H3. `openingHours` mismatch — schema says 08:00, page says 07:00
Pick one and enforce it everywhere before any external listing is created. Every citation (Angi, Yelp, GBP) built with the wrong time creates a permanent NAP conflict.  
**Fix:** Update schema and the visible contact section to match.

### H4. `image` property missing from LocalBusiness schema
Required for many LocalBusiness rich result types.  
**Fix:** `"image": "https://fixitfirstbyruben.com/assets/logo-cropped.png"` (once domain is live).

### H5. No Google Business Profile — zero local pack presence
Without a GBP, Fix It First cannot appear in the Google Maps local pack for any handyman query in Charlotte County. The local pack drives the majority of calls for service businesses.  
**Fix:** Create a GBP at business.google.com as a **service-area business** (no published address). Set primary category to **Handyman**. Add secondary categories: Painting Contractor, Pressure Washing Service. List all five service cities. Set hours to the value decided in H3. Upload 5–10 job photos. Once live, add GBP URL to schema `sameAs`.  
**Target:** First 5 Google reviews within 30 days of GBP creation.

### H6. Zero trust signals above the fold
The hero has the logo, a quote, and decorative tiles (CHARLOTTE_COUNTY, RELIABLE_SCHEDULE, HANDY_MAN) — none carry numbers or social proof. A homeowner evaluating a stranger entering their home needs trust signals before they scroll.  
**Fix (minimum viable):** Add a trust strip directly below the hero quote:
```
★★★★★ 5-Star Rated · Serving Charlotte County Since [Year] · Insured
```
Replace placeholder tiles with: verified review count, years in business, and insurance/bonding status.

### H7. Design language creates conversion friction for the primary audience
Charlotte County's median homeowner age is ~53 with a large retiree population. "DISPATCH_CONSOLE", "COMPILE_TRANSMISSION", "SUBMIT_QUOTE_REQUEST_V2", "TRANSMISSION SUCCESSFUL" reads as a broken website or scam to this demographic — not a trusted neighbor.  
The SXO agent scored the primary persona (Patricia, 68, retired homeowner) at **48/100**, with Clarity scoring 8/25 specifically due to this vocabulary.  
**Fix:** Keep the visual design. Replace only the user-facing functional copy:

| Current | Replace with |
|---|---|
| COMPILE_TRANSMISSION | Request a Free Estimate |
| SUBMIT_QUOTE_REQUEST_V2 | Send My Request |
| INITIALIZE_ESTIMATE | Get a Free Estimate |
| TRANSMISSION SUCCESSFUL! | Request Sent — Ruben Will Call You Today |
| CALL_OR_TEXT_RUBEN | Call or Text Ruben |

---

## MEDIUM — Fix Within 1 Month

### M1. Meet Ruben section has no photo and almost no bio
One paragraph, two bullets, a wrench icon, and the text "UNNAMED". For a business where someone is letting a stranger into their home, this is the primary E-E-A-T failure on the page. The Content agent scored Experience at **3/20** — the lowest sub-dimension.  
**Fix:** Add Ruben's photo (replaces the placeholder). Add 150–200 words covering: how long he has been doing this, what he did before, why he started Fix It First, and one or two specific job examples. Add a `Person` schema entity once this content exists.

### M2. No pricing information — comparison shoppers bounce
Competitors on Angi/Thumbtack show starting rates. A user comparing three handymen will leave a page with no pricing context.  
**Fix:** Add one sentence to the estimate section: "Most small repairs: $75–$150 · Free estimates · No surprise fees." This doesn't lock Ruben in but eliminates the blank-pricing anxiety that drives bounce.

### M3. Service descriptions are one sentence each — thin for SEO
Each card is 8–15 words. Google cannot differentiate "drywall repair Port Charlotte" from a competitor on this content alone.  
**Fix (two paths):**  
- Path A: Expand each card to 3–4 sentences covering what's included, what's excluded, and typical job time.  
- Path B (recommended): Create individual service pages (`/drywall-repair-port-charlotte`, `/pressure-washing-charlotte-county`) with 300+ words each. This is the #1 local organic ranking factor per Whitespark 2026 and the single biggest unlock for long-tail traffic.

### M4. Zero citation presence
Angi, HomeAdvisor, Thumbtack, Yelp, and Nextdoor are the primary citation sources for handymen in SW Florida. No presence = no NAP signals for Google's local algorithm.  
**Fix:** Create free profiles on Angi, Thumbtack, and Yelp with identical NAP: "Fix It First by Ruben" + resolved hours from H3 + (941) 661-9500.

### M5. Social links all `href="#"` — dead placeholders
Dead social links are worse than absent links. They signal abandonment to both users and crawlers.  
**Fix:** Create real Instagram and Facebook business profiles. Update footer `href` values and add to schema `sameAs`.

### M6. 3 services missing from schema `hasOfferCatalog`
Schema lists 10 services; the page renders 13. Missing: Hanging & Mounting, Blinds & Curtains, Fixture Swaps.  
**Fix:** Add the 3 missing Offer entries. See Appendix A for the complete corrected schema block.

### M7. AI crawlers cannot read the site (GEO)
GEO score: **34/100**. With CSR and no `llms.txt`, GPTBot and ClaudeBot see an empty shell. The site gets zero AI citation value.  
**Fix — two steps:**  
1. Implement SSG/prerender (C4) — makes content visible.  
2. Add `public/llms.txt`:
```
# Fix It First by Ruben

Neighborhood handyman serving Charlotte County, FL.
Phone: (941) 661-9500
Hours: Monday–Saturday, 8am–6pm

Services: Drywall patching, door & window maintenance, cabinet repairs,
painting & touch-ups, screen repair, furniture assembly, hanging & mounting,
TV wall mounting, blinds & curtains, pressure washing, gutter cleaning,
fence repair, fixture swaps.

Service areas: Port Charlotte, Punta Gorda, Deep Creek,
South Gulf Cove, Charlotte Harbor.

No middlemen. Honest pricing. Call or text for a free estimate.
```

### M8. Add FAQPage schema for AI citation value and PAA capture
Google removed FAQPage SERP rich results in May 2026, but FAQPage schema retains strong AI citation value for ChatGPT, Perplexity, and Bing Copilot. The GEO agent found **zero citable passages** on the current page — no passage reaches 100 words of coherent on-topic prose.  
**Fix:** Add a FAQ section with 5–7 Q&As targeting local intent:
- "What handyman services does Fix It First offer in Charlotte County?"
- "What areas does Ruben serve?"
- "How much do small home repairs cost in Port Charlotte?"
- "Is Fix It First by Ruben insured?"
- "How quickly can Ruben respond to a request?"
Each answer 80–140 words, plain prose. Add matching `FAQPage` JSON-LD.

### M9. Add insurance/liability statement
The Content agent identified this as the most significant trust deficit for a homeowner hiring an unknown handyman — and it directly enables Angi/Thumbtack listings which require proof of coverage.  
**Fix:** Add one sentence to the Meet Ruben section: "Ruben carries general liability coverage for all work performed in Charlotte County."

### M10. `sameAs`, `geo`, and `@id` missing from schema
Entity disambiguation and map pack signals both depend on these. Use the replacement schema block in Appendix A. Fill `TODO` placeholders as social/GBP URLs become available.

---

## LOW — Backlog

### L1. Add service-area copy block with neighborhood names
Community names (Port Charlotte, Punta Gorda, Deep Creek, South Gulf Cove, Charlotte Harbor) appear only in testimonial reviewer locations — not in any body copy or dedicated service-area block. Adding a named list as body text improves geo-relevance signals and captures "handyman [neighborhood name]" long-tail searches.

### L2. Reduce form friction for first contact
The estimate form requires name, phone, and subdivision before submission. Consider making phone optional (with email as alternative) or adding a "quick question" low-commitment path alongside the full form.

### L3. `@id`, `@graph`, trailing slash inconsistency
Schema `url` is `"https://fixitfirstbyruben.com"` (no trailing slash); canonical has trailing slash. Resolved in Appendix A replacement block.

### L4. No `WebSite` schema entity
Low impact for a single-page site but costs nothing to add. Included in Appendix A.

### L5. `twitter:card` should be `summary_large_image` once og:image is added

---

## Action Plan — Sequenced by Dependency

```
Pre-launch (do before the domain goes live):
  1. Remove "UNNAMED" text from App.tsx                    [C6] — 5 minutes
  2. Add H1 to hero section                               [C3] — 30 minutes
  3. Remove aggregateRating from schema                   [C1] — 5 minutes
  4. Fix address in schema (city + zip)                   [C2] — 5 minutes
  5. Resolve hours mismatch — pick 07:00 or 08:00        [H3] — 10 minutes
  6. Replace jargon copy in form/success messages         [H7] — 1 hour
  7. Fix exterior services tab → render all in DOM        [C5] — 1-2 hours
  8. Implement SSG/prerender at build                     [C4] — 2-4 hours
  9. Add robots.txt + sitemap.xml to /public             [H2] — 30 minutes
  10. Create OG image + add og:image meta tags            [H1] — 1-2 hours
  11. Add image property to schema                        [H4] — 5 minutes
  12. Add llms.txt to /public                            [M7] — 30 minutes
  13. Apply replacement schema block (Appendix A)         [M10] — 30 minutes

Launch week:
  14. Create Google Business Profile                      [H5] — unblocks aggregateRating restore later
  15. Add trust strip to hero section                     [H6]
  16. Fix social link hrefs in footer                     [M5]
  17. Add 3 missing services to schema catalog            [M6]
  18. Add insurance statement to Meet Ruben section       [M9]

Month 1:
  19. Create Angi + Thumbtack + Yelp profiles             [M4]
  20. Add Ruben's photo + expanded bio (150-200 words)    [M1]
  21. Add FAQ section + FAQPage schema                    [M8]
  22. Add pricing note to estimate section                [M2]
  23. Add service-area copy block with neighborhood names [L1]
  24. Expand service card descriptions                    [M3]
```

---

## Appendix A — Replacement Schema Block

Replace the entire `<script type="application/ld+json">` in `index.html`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
      "@id": "https://fixitfirstbyruben.com/#business",
      "name": "Fix It First by Ruben",
      "description": "Neighborhood handyman specializing in small home repairs, maintenance, and odd jobs in Charlotte County, FL. No middlemen, honest pricing.",
      "url": "https://fixitfirstbyruben.com/",
      "telephone": "+19416619500",
      "image": "https://fixitfirstbyruben.com/assets/logo-cropped.png",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fixitfirstbyruben.com/assets/logo-cropped.png"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Port Charlotte",
        "addressRegion": "FL",
        "postalCode": "33948",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.97755,
        "longitude": -82.09121
      },
      "areaServed": [
        { "@type": "City", "name": "Port Charlotte" },
        { "@type": "City", "name": "Punta Gorda" },
        { "@type": "AdministrativeArea", "name": "Deep Creek" },
        { "@type": "AdministrativeArea", "name": "South Gulf Cove" },
        { "@type": "Place", "name": "Charlotte Harbor" },
        { "@type": "AdministrativeArea", "name": "Charlotte County" }
      ],
      "priceRange": "$$",
      "paymentAccepted": "Cash, Venmo, Zelle, Check",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Handyman Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drywall Patching & Repair" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Door & Window Maintenance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cabinet Repairs" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Painting & Touch-ups" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Screen Repair" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Furniture Assembly" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hanging & Mounting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "TV Wall Mounting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Blinds & Curtains Installation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pressure Washing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gutter Cleaning" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Minor Fence Repair" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fixture Swaps" } }
        ]
      },
      "sameAs": [
        "TODO: https://www.instagram.com/YOUR_HANDLE",
        "TODO: https://www.facebook.com/YOUR_PAGE",
        "TODO: https://g.co/kgs/YOUR_GBP_ID"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://fixitfirstbyruben.com/#website",
      "name": "Fix It First by Ruben",
      "url": "https://fixitfirstbyruben.com/",
      "publisher": { "@id": "https://fixitfirstbyruben.com/#business" }
    },
    {
      "@type": "Person",
      "@id": "https://fixitfirstbyruben.com/#ruben",
      "name": "Ruben",
      "jobTitle": "Handyman",
      "worksFor": { "@id": "https://fixitfirstbyruben.com/#business" },
      "areaServed": "Charlotte County, FL"
    }
  ]
}
```

> `aggregateRating` is deliberately omitted. Restore only after a verified GBP with real reviews exists. Fill all `TODO` placeholders before publishing.

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
