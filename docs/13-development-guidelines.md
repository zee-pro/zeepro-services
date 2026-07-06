# 13 Development Guidelines: Zeepro Website

## Purpose
To establish the strict coding standards and quality assurance processes for the Zeepro website, explicitly ensuring AI-assisted engineering does not introduce technical debt (especially regarding localization).

## Scope
This document covers the frontend development guidelines, RTL (Right-to-Left) styling mandates, and Git workflow for the v1 build.

## Mandate: The RTL (Arabic) Safety Rule
To future-proof the site for Arabic (Right-to-Left) localization in v2, **CSS Logical Properties are strictly mandated**.
- **NEVER USE:** `margin-left`, `margin-right`, `padding-left`, `padding-right`, `left`, `right`.
- **INSTEAD USE (Tailwind v4 equivalents):** `ms`, `me`, `ps`, `pe`, `justify-start`, `justify-end`, `inset-inline`, `margin-inline`, `padding-inline`.
By following this mandate, when Arabic is introduced later, the layout will automatically mirror perfectly without a massive CSS rewrite.

## Known Facts
- **Language:** TypeScript is strictly enforced for all code.
- **Forms:** Form logic must be managed using `React Hook Form` and validated securely via `Zod`.

## Unknown Information
- **Testing Framework:** The necessity for automated unit testing (Jest/RTL) versus manual QA is pending decision.

## TODOs
- `TODO: [Software Architect]` Initialize the central codebase repository enforcing these Tailwind logical property rules and Zod schemas.

## Dependencies
- `11-technical-architecture.md` (Defines the overarching Next.js stack).

## Acceptance Criteria
- A scan of the codebase reveals absolutely zero instances of directional CSS properties (`ml-`, `mr-`, `pl-`, `pr-`, `left-`, `right-`). All spacing relies on logical properties.

## Future Considerations
- **End-to-End Testing:** When interactive features (quoting) are introduced, Cypress or Playwright must be added to the pipeline to test form logic.

## Revision History
| Date | Author | Version | Notes |
|---|---|---|---|
| 2026-07-06 | Software Architect | 1.1 | Added strict RTL logical property mandates and Form stack (React Hook Form + Zod). |
