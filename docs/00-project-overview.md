# 00 Project Overview: Zeepro Website

## Purpose
To establish a definitive, high-level understanding of the Zeepro website project. This document serves to align all stakeholders—including the executive team, product managers, designers, and the engineering AI (OpenCode)—on the core mission, target audience, and current project constraints.

## Scope
The scope of this initial engagement (v1) is limited to creating a highly professional, informational online presence for Zeepro, a UAE-based construction, renovation, and maintenance company.
- **In-Scope:** Static informational pages (Home, About, Services, Contact), responsive design, foundational SEO setup, and scalable architecture.
- **Out-of-Scope:** Instant online quotations, direct e-commerce, customer portal logins, or automated booking systems. 
- **Reasoning for Out-of-Scope:** Zeepro currently operates strictly through B2B channels (contractors, brokers, partners). Implementing direct B2C transactional features would misalign with the current operational model and create unnecessary technical overhead for the v1 launch.

## Assumptions
- **Assumption 1: B2B First Audience.** We assume the primary audience consists of industry professionals evaluating Zeepro's credibility, rather than consumers looking for quick home repairs.
  - **Justification:** The business model relies on partnerships. Therefore, the tone, imagery, and structural flow of the site must reflect high-end B2B professionalism rather than aggressive direct-to-consumer sales tactics.
- **Assumption 2: Interim Brand Identity.** We assume the initial design phase must proceed using the interim brand palette (Deep Navy/Slate primary, Muted Gold accent) and a temporary text-based wordmark.
  - **Justification:** Since no logo, official color palette, or typography currently exists, development cannot wait for a finalized brand book. The interim palette (Deep Navy/Slate, Muted Gold) will be used as a placeholder via CSS design tokens, allowing the final brand to be swapped in without code refactoring.

## Known Facts
- **Company Name:** Zeepro
- **Industry Sector:** Licensed mechanical, plumbing, interior finishing, and steel contracting services.
- **Geographic Market:** United Arab Emirates (UAE).
- **Current Business Model:** Operations are currently driven exclusively through established relationships with contractors, brokers, and industry partners.
- **Primary Business Goal:** To establish a professional online presence that builds trust and credibility.
- **Secondary Goals:** Showcase service offerings, display company professionalism, provide clear contact information, and lay the technical groundwork for future expansion (such as project galleries and quote requests).
- **Licensed Activities (10):** HVAC Installation & Maintenance, Air Filtration Systems, Ventilation Systems, Electromechanical Equipment Installation & Maintenance, Plumbing & Sanitary Contracting, Floor & Wall Tiling Works, Painting Contracting, Carpentry & Wood Flooring Works, Cladding Works, Steel Products Installation & Maintenance.
- **Service Categories (4):** Mechanical & Electromechanical Services, Plumbing & Sanitary Works, Interior Finishing & Renovation, Steel & Cladding Solutions.
- **Brand Status:** Logo TBD (interim text wordmark used). Interim palette: Deep Navy/Slate primary, Muted Gold accent. Final brand identity pending client approval. Implementation uses CSS design tokens for seamless future rebranding.

## Unknown Information
- **Domain Name:** The official web address (e.g., zeepro.ae, zeepro.com) has not been selected or purchased.
- **Hosting Infrastructure:** No hosting provider has been chosen.
- **Brand Assets:** No logo, official colors, or typography have been defined.
- **Content:** No finalized company copy, mission statement, or professional photography is available.
- **Contact Details:** No official business email, phone numbers, or physical office address have been provided.

## TODOs
- `TODO: [Client]` Select, approve, and purchase a primary domain name.
- `TODO: [Client/Brand Agency]` Provide a finalized company logo (SVG format preferred) and basic brand guidelines (primary colors, typography).
- `TODO: [Client]` Provide official business contact information (email, phone, physical address).
- `TODO: [Client]` Provide a brief company history and mission statement to inform the copywriting process.

## Dependencies
- None. This is the foundational document from which all other documentation (e.g., `01-business-requirements.md`, `02-product-requirements.md`) stems.

## Acceptance Criteria
- All stakeholders (including the client and engineering leads) have reviewed and formally approved the stated project goals and scope boundaries.
- The distinction between the v1 informational site and future interactive versions is understood and agreed upon by all parties.

## Future Considerations
- **Consideration:** Expanding into direct B2C services (e.g., direct quote requests and portfolio showcases).
  - **Reasoning:** As Zeepro grows its operational capacity, it may eventually target direct consumers. Therefore, the technical architecture chosen in v1 must utilize a scalable CMS (Content Management System) or flexible framework that allows for the seamless addition of dynamic content types (like a "Projects" or "Case Studies" collection) without requiring a complete platform rebuild.

## Revision History
| Date | Author | Version | Notes |
|---|---|---|---|
| 2026-07-06 | Senior Architect / PM | 1.0 | Initial formulation of the project overview based on kickoff constraints. |
| 2026-07-06 | Stakeholder | 2.0 | Updated industry sector to reflect licensed mechanical, plumbing, interior finishing, and steel contracting services. |
