# Zeepro Project Documentation

This directory contains the comprehensive, implementation-ready documentation for the Zeepro website. This documentation acts as the single source of truth for the project and is specifically designed to be consumed by the engineering team (including coding AI like OpenCode) and design teams.

**Project Name:** Zeepro
**Industry:** Construction, Renovation, Maintenance (UAE)
**Primary Goal:** Establish a professional online presence that builds trust and credibility.

## Principles of Documentation

1. **No Assumptions:** All requirements must be unambiguous. Any missing information must be explicitly marked with a `TODO: [Action required by client/stakeholder]`.
2. **Traceability:** All technical and design decisions must trace back to business or product requirements documented here.
3. **Implementation-Ready:** Documents are written for senior engineers and designers to execute without needing to guess intent.

---

## Documentation Index & Status

The following table outlines the required documentation suite, the recommended implementation order, dependencies, ownership, and current status. 

> **Legend:**
> 🔴 **Pending:** Document is empty or in initial draft state.
> 🟡 **In Progress:** Document is actively being written or pending client info.
> 🟢 **Complete:** Document is finalized and approved.

| Order | Document | Purpose | Dependencies | Owner | Status | Blocks Dev? |
|:---:|---|---|---|---|:---:|:---:|
| 1 | `00-project-overview.md` | High-level summary of the project goals, scope, background, and current status. | None | Product Manager | 🔴 Pending | Yes |
| 2 | `01-business-requirements.md` | Core business objectives, KPIs, constraints, and target market definition. | `00-project-overview.md` | Business Stakeholders | 🔴 Pending | Yes |
| 3 | `02-product-requirements.md` | Functional and non-functional requirements of the website. What the site must do. | `01-business-requirements.md` | Product Manager | 🔴 Pending | Yes |
| 4 | `03-information-architecture.md` | Sitemap, site structure, and navigation hierarchy. | `02-product-requirements.md` | UX Strategist | 🔴 Pending | Yes |
| 5 | `04-user-personas.md` | Detailed profiles of the target audience to guide UX and copywriting. | `01-business-requirements.md` | UX Strategist | 🔴 Pending | No |
| 6 | `05-user-flows.md` | Step-by-step paths users will take to complete key goals (e.g., finding contact info). | `03-information-architecture.md`, `04-user-personas.md` | UX Strategist | 🔴 Pending | Yes |
| 7 | `06-brand-strategy.md` | Brand guidelines, voice, tone, colors, typography, and logo specifications. | Client Input (Currently: None) | Branding Consultant | 🔴 Pending | Yes (Design) |
| 8 | `07-design-system.md` | UI components, spacing, layout grids, and interactive states. | `06-brand-strategy.md` | UX/UI Designer | 🔴 Pending | Yes (Frontend) |
| 9 | `08-page-specifications.md` | Detailed breakdown of content and layout requirements for every page. | `03-information-architecture.md`, `07-design-system.md` | UX Strategist | 🔴 Pending | Yes |
| 10 | `09-copywriting.md` | Finalized text content for all pages, headings, and CTAs. | `06-brand-strategy.md`, `08-page-specifications.md` | Copywriter | 🔴 Pending | No (can use placeholder) |
| 11 | `10-seo-strategy.md` | Target keywords, meta tag rules, URL structures, and technical SEO guidelines. | `01-business-requirements.md`, `09-copywriting.md` | SEO Specialist | 🔴 Pending | No |
| 12 | `11-technical-architecture.md` | Hosting, domain setup, tech stack, CMS choice, and performance targets. | `02-product-requirements.md` | Software Architect | 🔴 Pending | Yes |
| 13 | `12-component-specifications.md` | Technical breakdown of reusable UI components (React/Vue/HTML). | `07-design-system.md`, `11-technical-architecture.md` | Software Architect | 🔴 Pending | Yes |
| 14 | `13-development-guidelines.md` | Coding standards, git workflows, testing requirements, and accessibility rules (WCAG). | `11-technical-architecture.md` | Software Architect | 🔴 Pending | Yes |
| 15 | `14-implementation-phases.md` | Milestone breakdown for design, development, and launch. | All prior docs | Product Manager | 🔴 Pending | No |
| 16 | `15-future-roadmap.md` | Plans for v2 features (portfolios, quote requests, CMS integration). | `01-business-requirements.md` | Product Manager | 🔴 Pending | No |

---

## Action Items & Next Steps

1. **Review and Approve README:** Ensure stakeholders agree with this documentation structure.
2. **Begin Phase 1 Documentation:** Start drafting `00-project-overview.md`, `01-business-requirements.md`, and `02-product-requirements.md`.
3. **Information Gathering:** Compile a list of immediate `TODO`s required from the client (e.g., Domain choice, branding kickoff, contact details).
