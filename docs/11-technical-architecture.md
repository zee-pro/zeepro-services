# 11 Technical Architecture: Zeepro Website

## Purpose
To define the definitive technology stack, hosting infrastructure, and architectural patterns for the Zeepro website. This ensures the engineering team (OpenCode) builds a foundation that meets the strict performance requirements of v1 and is future-proof.

## Scope
This document covers the frontend framework, styling methodology, form handling infrastructure, and hosting environment for the v1 informational site.

## Defined Tech Stack
The following technical decisions have been mandated by the Software Architect and are non-negotiable:
- **Framework:** Next.js 15 (App Router).
- **Language:** TypeScript (Strict Mode).
- **Styling:** Tailwind CSS v4.
- **Fonts:** Geist.
- **Analytics:** Google Analytics 4 (GA4).
- **Search:** Google Search Console.
- **Deployment:** Vercel.

## Assumptions
- **Assumption 1: Serverless Execution.** By deploying on Vercel with Next.js 15, we assume native support for Serverless Edge Functions and Next.js Route Handlers for lightweight backend needs (like contact form submission routing).

## Known Facts
- **Performance Baseline:** The architecture must support a 90+ Google Lighthouse score. Vercel and Next.js 15 provide native optimization to guarantee this.

## Unknown Information
- **Business Email Infrastructure:** Which provider is hosting the `@zeepro.ae` email addresses (required to correctly configure email routing from the Vercel Route Handler).

## TODOs
- `TODO: [Client]` Provide the official, active business email address where contact form submissions should be securely routed.
- `TODO: [Client]` Provide the WhatsApp number to append to the `https://wa.me/` link.

## Dependencies
- `02-product-requirements.md` (Dictates the functional needs).

## Acceptance Criteria
- Codebase is initialized with Next.js 15, TypeScript, and Tailwind CSS v4.
- Deployment pipeline is successfully linked to Vercel with zero-downtime CI/CD.

## Future Considerations
- **Headless CMS Integration:** The Next.js App Router architecture is perfectly positioned to fetch data from a headless CMS (like Sanity or Contentful) in v2 without requiring a framework migration.

## Revision History
| Date | Author | Version | Notes |
|---|---|---|---|
| 2026-07-06 | Software Architect | 1.1 | Updated with definitive tech stack (Next.js 15, Tailwind v4, Vercel). |
