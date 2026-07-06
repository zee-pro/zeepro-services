# 05 User Flows: Zeepro Website

## Purpose
To map the step-by-step paths that the target personas will take to achieve their goals on the website. This ensures the Information Architecture and UI design naturally guide users toward the desired business outcomes (validation and contact) with minimal friction.

## Scope
This document covers the core v1 user journeys: validation/research, formal inquiry, and rapid contact. It maps to the IA defined in `03-information-architecture.md`.

## Assumptions
- **Assumption 1: Mobile Dominance in Rapid Contact.** We assume the "Rapid Contact" flow will occur almost exclusively on mobile devices via WhatsApp.
  - **Justification:** UAE field professionals rely heavily on WhatsApp for fast business communication. A floating action button will capture this intent.
- **Assumption 2: Validation Precedes Formal Inquiry.** We assume users submitting the formal contact form will visit the "About" and "Services" pages first.
  - **Justification:** B2B partners need to vet Zeepro's capabilities and legitimacy before committing to a formal email inquiry.

## Known Facts
- **No Transactional Flows:** There are no e-commerce checkout, pricing calculator, or online booking flows to map.
- **Global CTA:** A WhatsApp quick-action button will be globally available on all pages.

## Unknown Information
- **Form Complexity:** Depending on the required fields (yet to be defined by stakeholders), the Formal Inquiry Flow might experience user drop-off if the contact form is overly complex.

## TODOs
- `TODO: [UX/UI]` Ensure the wireframes visually support these three core flows with clear navigational signposting.
- `TODO: [Analytics]` Set up event tracking for the "WhatsApp Click" and "Form Submit" actions to measure the success of these flows post-launch.

## Dependencies
- `03-information-architecture.md` (Provides the available pages).
- `04-user-personas.md` (Provides the user motivations).

## Acceptance Criteria
- Stakeholders agree these are the most critical paths for users to take.
- The design team can use these flows to dictate CTA placement and page hierarchy.

## Future Considerations
- **Consideration: Portfolio Browsing Flow.** 
  - **Reasoning:** When the "Projects" section is added in v2, a new flow must be mapped showing how users transition from reading a detailed case study to requesting a formal quote.

## Core User Flows (v1)

### Flow 1: Rapid Contact (Mobile User - Persona: Tariq the Broker)
**Goal:** Quickly connect with Zeepro for an urgent job.
1. User lands on Home Page (Mobile).
2. User scrolls past hero section, identifying the "Maintenance" service block.
3. User taps the floating WhatsApp icon (bottom right).
4. Device prompts to open WhatsApp, pre-filled with: "Hello Zeepro, I am interested in your services."
5. User hits Send.

### Flow 2: Formal Inquiry & Validation (Desktop User - Persona: Sarah the Main Contractor)
**Goal:** Vet Zeepro's corporate legitimacy and request a capability statement.
1. User lands on Home Page (Desktop).
2. User clicks "About Us" in main navigation to verify company history and trade licenses.
3. User clicks "Services -> Mechanical & Electromechanical" to verify specific technical capabilities.
4. Convinced of credibility, user clicks "Contact Us" in main navigation.
5. User fills out formal contact form (Name, Company, Message) and submits.
6. User reaches a "Thank You" confirmation screen.

## Revision History
| Date | Author | Version | Notes |
|---|---|---|---|
| 2026-07-06 | UX Strategist | 1.0 | Initial mapping of B2B validation and contact flows. |
