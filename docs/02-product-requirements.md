# 02 Product Requirements: Zeepro Website

## Purpose
To translate the defined business objectives (`01-business-requirements.md`) into actionable functional and non-functional requirements for the Zeepro website. This document dictates exactly *what* the website must do (and not do) to be considered successful for launch.

## Scope
The scope is limited to the v1 informational website. It encompasses the core user-facing features (navigation, contact mechanisms, static content display) and system requirements (performance, accessibility, basic security).

## Assumptions
- **Assumption 1: Mobile-First Usage.** We assume the majority of users will access the site via mobile devices.
  - **Justification:** Mobile internet penetration in the UAE is exceptionally high. Contractors, brokers, and facility managers are frequently on-site or traveling, making mobile the primary touchpoint for evaluating Zeepro's capabilities.
- **Assumption 2: WhatsApp is a Critical Channel.** We assume a direct WhatsApp contact integration is required.
  - **Justification:** WhatsApp is the dominant B2B and B2C communication tool in the UAE construction and maintenance sectors. A one-click WhatsApp action is essential for reducing friction in inquiries.

## Known Facts
- **Functional Limitations:** The product will *not* include user authentication, e-commerce checkouts, interactive pricing calculators, or customer portals.
- **Form Routing:** Any contact form submitted on the site must route reliably to a designated Zeepro business email address with basic spam protection (e.g., reCAPTCHA or honeypot).
- **Performance Priority:** The site must load quickly to establish a premium brand feel. Slow load times immediately degrade perceived professionalism.
- **Analytics Requirement:** The product must support basic web analytics (e.g., Google Analytics 4) to measure the KPIs defined by stakeholders.

## Unknown Information
- **Language Requirements (L10N/I18N):** Will the website be English-only, or is an Arabic version required for v1? (Arabic is often necessary for UAE government-related contractors or municipal compliance).
- **Form Data Requirements:** Exactly what fields must be captured in the Contact/Partnership form? (e.g., Company Name, Trade License Number, Project Scope?).
- **Third-Party Integrations:** Aside from standard analytics, are there existing CRM systems (e.g., Salesforce, HubSpot, Zoho) that the contact form must integrate with, or is basic email routing sufficient for v1?

## TODOs
- `TODO: [Stakeholders]` Confirm if an Arabic language toggle (Right-to-Left / RTL support) is required for v1 or deferred to v2.
- `TODO: [Product Manager]` Define the exact fields required for the "Contact Us" / "Partner with Us" form.
- `TODO: [Stakeholders]` Confirm if basic email routing for form submissions is acceptable, or if a direct CRM integration is required immediately.

## Dependencies
- `01-business-requirements.md` (Provides the strategic "why" behind these product features).

## Acceptance Criteria
- **Functional:** A user can successfully submit a contact inquiry via a web form, and the data is securely received by Zeepro.
- **Functional:** A user can click a "WhatsApp" button on mobile and be taken directly to a chat with a designated Zeepro representative.
- **Non-Functional:** The website achieves a Google Lighthouse performance score of 90+ on mobile devices.
- **Non-Functional:** The website is fully responsive, displaying gracefully on desktop, tablet, and mobile viewports.

## Future Considerations
- **Consideration: Content Management System (CMS) Handover.** 
  - **Reasoning:** While v1 is largely static, future iterations will likely require non-technical staff to update project galleries or service details. The product architecture chosen by engineering must eventually support a headless CMS or intuitive admin panel to allow for this.
- **Consideration: Multi-language Architecture.** 
  - **Reasoning:** If Arabic is deferred from v1, the frontend architecture must still be built with Internationalization (I18N) routing principles in mind so that adding an RTL language later does not require a foundational rewrite.

## Revision History
| Date | Author | Version | Notes |
|---|---|---|---|
| 2026-07-06 | Product Manager | 1.0 | Initial PRD generation mapped to B2B constraints. |
