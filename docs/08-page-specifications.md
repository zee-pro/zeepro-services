# 08 Page Specifications: Zeepro Website

## Purpose
To detail the layout requirements, functional elements, and specific asset constraints required on every individual page of the Zeepro website.

## Scope
This document covers the core pages: Home, About Us, Services, and Contact Us.

## Mandated Asset Specifications
To maintain a high-end corporate aesthetic and optimize Next.js `<Image>` components, all supplied imagery must strictly adhere to the following dimensions:
- **Hero Backgrounds:** 1920×1080
- **Projects (Future):** 1600×1200
- **Services (Cards/Headers):** 1200×900
- **OG Image (Social Sharing):** 1200×630
- **Logo:** SVG format is strongly preferred. Fallback to high-res PNG.

## Known Facts
- **Modular Construction:** Pages will be built using reusable blocks styled via Tailwind CSS v4 and `shadcn/ui`.
- **RTL Readiness:** All page layouts will utilize logical CSS properties (e.g., `ps`, `pe`) to support future Arabic layout mirroring without structural changes.

## Unknown Information
- **Trust Badges:** Are specific client logos or safety certifications ready to be displayed?

## TODOs
- `TODO: [Client]` Provide authentic photos of job sites matching the mandated dimensions above.
- `TODO: [Brand Agency]` Provide the final SVG Logo.

## Dependencies
- `03-information-architecture.md` (Defines the page list).
- `12-component-specifications.md` (Defines UI blocks).

## Acceptance Criteria
- Engineers map the image placeholders to the exact dimensions specified.

## Revision History
| Date | Author | Version | Notes |
|---|---|---|---|
| 2026-07-06 | UX Strategist | 1.1 | Added strict asset dimension mandates for Hero, Projects, Services, OG Image, and Logo. |
