# 15 Future Roadmap: Zeepro Website

## Purpose
To outline the strategic vision for subsequent versions (v2, v3) of the Zeepro website. This ensures that architectural and design decisions made in v1 do not box the company into a corner when it comes time to scale the digital product.

## Scope
This document covers features, integrations, and business pivots explicitly excluded from v1 (`00-project-overview.md`) but desired for future iterations based on the initial project brief.

## Assumptions
- **Assumption 1: Business Maturation.** We assume Zeepro's digital marketing maturity will increase, eventually demanding inbound lead generation capabilities rather than just passive B2B validation.
  - **Justification:** As the company grows, relying solely on offline networking becomes a bottleneck. The website must eventually become an active sales channel.
- **Assumption 2: CMS Requirement.** We assume v2 will require a Content Management System (CMS).
  - **Justification:** Adding projects, news, or updating services frequently cannot rely on an engineer (or OpenCode) editing raw code every time. The client will need an intuitive dashboard to manage content.

## Known Facts
- **Immediate Goals:** The business has stated a direct desire to eventually expand into quote requests and detailed project portfolios.
- **Tech Stack Readiness:** The v1 architecture (`11-technical-architecture.md`) has been explicitly chosen (e.g., Next.js/React) to seamlessly integrate with a headless CMS and dynamic routing in the future.

## Unknown Information
- **Timeline:** The timeline for starting v2 development is completely undefined. It depends on the success of v1 and business growth.
- **B2C Expansion:** It is unknown if the planned "Quote Request" feature will strictly target B2B partners, or if it signals a pivot into direct-to-consumer (B2C) residential maintenance.

## TODOs
- `TODO: [Stakeholders]` Schedule a v2 Roadmap Review meeting 3 months after the v1 launch to assess business needs and user feedback.
- `TODO: [Product Manager]` Gather analytics data (traffic, form submissions, WhatsApp clicks) during the first 3 months to justify the ROI of v2 development.

## Dependencies
- Relies on the successful launch, stabilization, and data-gathering phase of v1 (`14-implementation-phases.md`).

## Acceptance Criteria
- The engineering team (OpenCode) acknowledges these future features and confirms that the v1 codebase will not actively prevent or heavily complicate their implementation.

## Future Considerations
*(N/A - This entire document is dedicated to future considerations).*

## Feature Roadmap (v2 & Beyond)

### 1. Interactive Project Portfolio
- **Description:** A dedicated section showcasing completed projects with high-resolution galleries, before/after sliders, and detailed case studies (Client, Scope, Challenges, Solutions).
- **Justification:** Essential for proving technical capability on large-scale construction/renovation jobs and drastically improves SEO for specific project types.

### 2. Automated Quote Requests
- **Description:** A multi-step, interactive form allowing users to input project dimensions, select required trades (e.g., MEP vs. Civil), and upload photos to receive an estimated quote or trigger an automated site-visit booking.
- **Justification:** Reduces the administrative burden on the sales and operations teams by pre-qualifying leads before a human makes contact.

### 3. Arabic Localization (I18N)
- **Description:** Full translation of the website into Arabic, including complex Right-to-Left (RTL) layout switching.
- **Justification:** Necessary for capturing government/municipal contracts or local Emirati clientele who prefer or require doing business in Arabic.

### 4. Headless CMS Integration
- **Description:** Connecting the static frontend to a headless CMS (e.g., Sanity, Strapi, Contentful) so non-technical staff can update content, add new team members, or publish projects.
- **Justification:** Removes the engineering bottleneck for daily marketing updates.

## Revision History
| Date | Author | Version | Notes |
|---|---|---|---|
| 2026-07-06 | Product Manager | 1.0 | Initial future roadmap outlining post-v1 capabilities. |
