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
- **Current State:** Zeepro currently has no logo, no defined color palette, and no official typography.
- **Core Values:** Professionalism, reliability, and B2B partnership.

## Unknown Information
- **Final Brand Assets:** Everything visual (logo, colors, fonts) is pending.
- **Brand Story:** The "Why" behind the founding of Zeepro is currently undocumented.

## TODOs
- `TODO: [Client/Brand Agency]` Design and provide the official Zeepro logo (SVG format preferred for web).
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

## Interim Brand Guidelines (v1 Placeholder)

### Tone of Voice
- **Authoritative but Accessible:** The copy should sound like an experienced engineer talking to a peer. Confident, direct, and free of marketing fluff.
- **Action-Oriented:** Use active verbs (e.g., "We build," "We maintain," "Partner with us") rather than passive descriptions.

### Interim Visual Identity
To unblock development, the design and engineering teams will use the following placeholder design system:
- **Logo:** A clean, bold, sans-serif text logo ("ZEEPRO") in dark slate.
- **Primary Color:** Deep Navy/Slate (Projects trust, stability, and corporate professionalism).
- **Accent Color:** A muted Gold or Industrial Orange (Projects a subtle construction/hard-hat aesthetic without being visually overwhelming).
- **Typography:**
  - **Headings:** Inter or Roboto (Strong, geometric, highly legible).
  - **Body:** Inter or Roboto (Clean, modern, web-safe).
- **Imagery:** High-quality, realistic stock photography focusing on completed structures, blueprints, or professional workers in safety gear (strictly avoiding overly staged/fake smiles).

## Revision History
| Date | Author | Version | Notes |
|---|---|---|---|
| 2026-07-06 | Branding Consultant | 1.0 | Interim strategy created to unblock design/engineering while awaiting final assets. |
