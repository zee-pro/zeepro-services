# 12 Component Specifications: Zeepro Website

## Purpose
To detail the UI libraries and technical structure of the reusable components for the Zeepro website. 

## Scope
This document covers the core v1 functional and presentation components, bridging the gap between design and engineering.

## Defined UI Stack
- **UI Components:** `shadcn/ui` (Accessible, unstyled components configured strictly with Tailwind v4 logical properties).
- **Animations:** `Framer Motion` (For high-end micro-interactions and smooth page transitions).
- **Icons:** `Lucide React`.

## Known Facts
- **WhatsApp Integration:** The floating WhatsApp button is strictly a lightweight anchor link: `href="https://wa.me/<number>"`. Do not use heavy third-party chat widget scripts that degrade performance.
- **Data Structure Placeholder:** To prepare for the v2 portfolio, the codebase will include an initially empty data file at `data/projects.ts`.

## Unknown Information
- **WhatsApp Number:** The exact phone number to append to the link is pending.

## TODOs
- `TODO: [Client]` Provide the official WhatsApp number for the CTA link.

## Dependencies
- `11-technical-architecture.md` (Next.js/Tailwind).

## Acceptance Criteria
- All interactive components are initialized via `shadcn/ui`.
- Form validation is handled purely by React Hook Form and Zod schemas.

## Core Data Structures (v1)
### `data/projects.ts`
To prepare for v2 without blocking v1, a strict TypeScript interface and empty array will be created initially:
```typescript
export interface Project {
  id: string;
  title: string;
  slug: string;
  image: string;
  category: string;
  location: string;
  description: string;
}

export const projects: Project[] = []; // Initially empty
```

## Revision History
| Date | Author | Version | Notes |
|---|---|---|---|
| 2026-07-06 | Software Architect | 1.1 | Defined shadcn/ui, Framer Motion, Lucide, and data/projects.ts structure. |
