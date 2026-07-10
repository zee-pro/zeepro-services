# 06 Brand Strategy: Zeepro Website

## Purpose
To define the visual identity, tone of voice, and brand positioning for Zeepro. Because formal brand assets do not yet exist, this document outlines the *interim* brand strategy necessary to unblock website design and engineering, as well as the requirements for the final brand identity.

## Scope
This document covers the interim typographic and color guidelines for the v1 website build, and establishes the tone for copywriting. It serves as a placeholder and brief for the eventual brand agency.

## Assumptions
- **Assumption 1: Conservative Corporate Aesthetic.** We assume a highly professional, conservative, and trust-focused aesthetic is required.
  - **Justification:** In the B2B construction sector, overly playful or avant-garde branding can undermine perceived reliability. The interim brand must project absolute stability and competence.
- **Assumption 2: Engineering Cannot Wait.** We assume development must proceed before the final logo and brand book are ready.
  - **Justification:** Waiting for a full brand book will delay the project indefinitely. The site will be built using CSS variables (design tokens) so the final brand colors and logo can be swapped in instantly when ready without refactoring code.

## Known Facts
- **Current State:** Zeepro has a logo (PNG format) and defined interim color palette. Final brand assets still pending.
- **Core Values:** Professionalism, reliability, and B2B partnership.

## Unknown Information
- **Final Brand Assets:** Everything visual (logo, colors, fonts) is pending.
- **Brand Story:** The "Why" behind the founding of Zeepro is currently undocumented.

## TODOs
- `TODO: [Client/Brand Agency]` Convert logo to SVG format for better scalability and crisp rendering at all sizes.
- `TODO: [Client/Brand Agency]` Provide the primary and secondary brand color hex codes.
- `TODO: [Client/Brand Agency]` Provide the official brand typography guidelines (heading and body fonts).
- `TODO: [Stakeholders]` Provide the core brand story or company history to inform the "About" page copy.

## Dependencies
- `01-business-requirements.md` (Dictates the B2B professional tone).

## Acceptance Criteria
- Stakeholders approve the interim "stark/corporate" aesthetic to allow development to begin immediately.
- The engineering team understands they must use strict CSS variables for all colors and fonts to allow for rapid rebranding later.

## Future Considerations
- **Consideration: Full Rebranding QA.** 
  - **Reasoning:** When the final brand book is delivered and implemented, the UX team must conduct a visual QA pass on the website to ensure the new colors meet WCAG (Web Content Accessibility Guidelines) contrast ratios.

## Brand Status
- **Logo:** Integrated — `zeepro-logo.png` (header) and `zeepro-logo-white-bg.png` (footer) are in use. SVG format still preferred for scalability.
- **Brand Colors:** Interim Palette only (Deep Navy/Slate primary, Muted Gold accent). Final hex codes pending.
- **Final Identity:** Pending client approval from brand agency.
- **Implementation:** All colors and fonts use CSS design tokens (`@theme` directives) so the final brand identity can be applied without code refactoring.

## Interim Brand Guidelines (v1 Placeholder)

### Visual Style
The website must communicate the following attributes through all visual choices:
- **Professionalism**
- **Trust**
- **Technical Expertise**
- **Reliability**
- **Execution Capability**

### Tone of Voice
- **Authoritative but Accessible:** The copy should sound like an experienced engineer talking to a peer. Confident, direct, and free of marketing fluff.
- **Action-Oriented:** Use active verbs (e.g., "We build," "We maintain," "Partner with us") rather than passive descriptions.

### Interim Visual Identity
To unblock development, the design and engineering teams will use the following placeholder design system:
- **Logo:** PNG logo files (`zeepro-logo.png` for light backgrounds, `zeepro-logo-white-bg.png` for dark backgrounds) integrated in header and footer. SVG format still preferred for future scalability.
- **Primary Color:** Deep Navy/Slate (Projects trust, stability, and corporate professionalism).
- **Accent Color:** Muted Gold (Subtle accent conveying quality and technical precision, without being visually overwhelming).
- **Typography:**
  - **Headings:** Geist (via `next/font/google`, set as CSS variable `--font-geist-sans`).
  - **Body:** Geist (Same font family for visual consistency).
- **Imagery:** Professional industrial imagery only. Approved subject matter includes:
  - HVAC systems and mechanical installations
  - Commercial buildings and construction sites
  - Technical installations (electrical, plumbing, ventilation)
  - Interior finishing work (tiling, flooring, painting)
  - Engineering and blueprints
  - Workshop and fabrication environments
  - Steel structures and cladding
- **Imagery — Strictly Avoid:**
  - Generic illustrations or vector artwork
  - Cartoon or abstract graphics
  - SaaS-style abstract hero graphics
  - Real-estate-only imagery (empty apartments, staged living rooms)
  - Overly staged stock photography with fake smiles

## Revision History
| Date | Author | Version | Notes |
|---|---|---|---|
| 2026-07-11 | Developer | 1.1 | Integrated logo PNGs in header/footer, added OG image metadata. |
| 2026-07-06 | Branding Consultant | 1.0 | Interim strategy created to unblock design/engineering while awaiting final assets. |
