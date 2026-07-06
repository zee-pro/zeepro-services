# 10 SEO Strategy: Zeepro Website

## Purpose
To define the foundational Search Engine Optimization (SEO) strategy for the Zeepro website. While the primary goal of v1 is B2B validation rather than organic lead generation, establishing a technically sound SEO baseline ensures the site will rank for branded terms and lays the groundwork for future organic growth.

## Scope
This document covers the technical SEO requirements (meta tags, site speed, indexing) and foundational on-page SEO (keyword targeting) for the v1 launch. It explicitly excludes ongoing content marketing strategies (e.g., blogging, continuous backlink building).

## Assumptions
- **Assumption 1: Local SEO Priority.** We assume the SEO strategy must be strictly localized to the UAE.
  - **Justification:** Zeepro's operations are geographically constrained to the UAE. Ranking for generic global terms (e.g., "best construction company") is both highly competitive and entirely irrelevant to the business model.
- **Assumption 2: Branded Search is the MVP.** We assume the Minimum Viable Product (MVP) for SEO is ranking #1 for "Zeepro Construction UAE" and exact-match variations.
  - **Justification:** Because the site acts as a validation tool, partners who hear the name offline must be able to find the official website immediately upon searching for it.

## Known Facts
- **Performance Impact:** Site speed (Core Web Vitals) directly impacts mobile search rankings. The technical architecture must be fast (`02-product-requirements.md`).
- **Semantic HTML:** The engineering team (OpenCode) must use proper semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<h1>`, `<h2>`) to ensure search engine crawlers can easily parse the site hierarchy.

## Unknown Information
- **Domain Authority:** Since the domain is not yet purchased, we do not know if we are starting with a brand-new domain (zero authority) or purchasing an aged domain.
- **Target Keywords:** The specific localized long-tail keywords (e.g., "commercial MEP maintenance Dubai") are undefined until the exact service offerings are finalized by the stakeholders.

## TODOs
- `TODO: [SEO Specialist]` Conduct localized keyword research for the UAE mechanical, plumbing, finishing, and steel sectors to map to the individual `Services` sub-pages.
- `TODO: [Engineering]` Ensure an XML sitemap and `robots.txt` file are automatically generated and submitted to Google Search Console upon launch. Sitemap must include all four service sub-pages.
- `TODO: [Client]` Create and verify a Google Business Profile (Google My Business) for Zeepro to dominate the local map pack for branded searches.

## Dependencies
- `03-information-architecture.md` (Determines the URL slug structure, e.g., `/services/maintenance`).
- `09-copywriting.md` (Provides the actual text where keywords must be naturally integrated).

## Acceptance Criteria
- Every page has a unique, optimized `<title>` tag and `<meta name="description">`.
- The URL structure is clean, lowercase, and uses hyphens (e.g., `zeepro.ae/services/mechanical-electromechanical`).
- All images contain descriptive `alt` text for accessibility and image search indexing.
- There is only one `<h1>` tag per page.

## Future Considerations
- **Consideration: Content Marketing / Blogging.**
  - **Reasoning:** If Zeepro decides to invest in organic lead generation (inbound marketing) in v2, a "News" or "Insights" blog section will need to be developed to target informational search queries in the UAE construction sector.

## Revision History
| Date | Author | Version | Notes |
|---|---|---|---|
| 2026-07-06 | SEO Specialist | 1.0 | Initial foundational SEO strategy mapped for v1 launch. |
| 2026-07-06 | Stakeholder | 2.0 | Updated keyword research scope and URL examples to reflect new mechanical, plumbing, finishing, and steel service categories. |
