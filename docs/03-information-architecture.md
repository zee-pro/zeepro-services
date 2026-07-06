# 03 Information Architecture: Zeepro Website

## Purpose
To define the structural blueprint and navigational hierarchy of the Zeepro website. This document ensures that users (specifically contractors, brokers, and partners) can logically and intuitively find the information they need to evaluate Zeepro's capabilities and make contact.

## Scope
This document covers the v1 site map, main navigation (header/footer), and the hierarchical relationship between static pages. It maps directly to the features defined in the Product Requirements Document (`02-product-requirements.md`).

## Assumptions
- **Assumption 1: Flat Hierarchy is Optimal.** We assume a "flat" information architecture (where every main page is accessible within one click from the homepage) is the best approach for v1.
  - **Justification:** B2B users are time-poor. Burying services or contact information deep within sub-menus increases bounce rates. A straightforward, shallow architecture projects transparency and efficiency.
- **Assumption 2: Dedicated Sub-pages for Services.** We assume each major service category (Construction, Renovation, Maintenance) requires its own dedicated sub-page, rather than just an anchor link on a single long "Services" page.
  - **Justification:** Dedicated pages allow for much stronger SEO targeting per service category in the UAE market, and provide enough space to detail the specific B2B capabilities, processes, and equipment of each division without overwhelming the user.

## Known Facts
- **Navigation Elements:** The site requires a persistent Header (with Main Navigation) and a rich Footer.
- **Primary Pages:** Based on the B2B goals, the core pages are Home, About, Services, and Contact.
- **No Private Areas:** There is no "User Dashboard," "Login," or "Client Portal" to account for in the v1 architecture.

## Unknown Information
- **Legal/Footer Pages:** Are specific legal pages (e.g., Privacy Policy, Terms of Service) legally mandated for launch based on UAE data laws, or will a simple footer disclaimer suffice?
- **Service Granularity:** Are there sub-categories within "Maintenance" (e.g., MEP, HVAC, Civil) that are significant enough to warrant their own standalone pages, or should they remain descriptive sections within the main Maintenance page?

## TODOs
- `TODO: [Stakeholders]` Confirm the exact names of the core service offerings to finalize the `Services` dropdown menu.
- `TODO: [Legal/Client]` Confirm requirements and provide the text for the Privacy Policy and Terms and Conditions pages, if mandated.

## Dependencies
- `02-product-requirements.md` (Defines what functions the IA must support).

## Acceptance Criteria
- Stakeholders agree on the naming conventions and structure used in the main navigation.
- The UX/UI Designer can use this document to create accurate wireframes without guessing the page count.

## Future Considerations
- **Consideration: "Projects" or "Portfolio" Section.** 
  - **Reasoning:** As Zeepro completes notable projects, a new top-level `Projects` tab will be necessary to host case studies. The v1 header navigation must be designed with enough spatial flexibility to accommodate this addition later.
- **Consideration: Arabic Language Switcher.**
  - **Reasoning:** If Arabic is implemented in v2, the header must accommodate a language toggle (EN | AR), which impacts the spatial layout of the main navigation and reverses the visual flow (RTL).

## Proposed Sitemap (v1)
```text
[Header Navigation]
├── Home (/)
├── About Us (/about)
│   ├── Company Profile (On-page section)
│   └── Certifications & Licenses (On-page section)
├── Services (/services)
│   ├── Construction (/services/construction)
│   ├── Renovation (/services/renovation)
│   └── Maintenance (/services/maintenance)
├── Contact Us (/contact)
└── [WhatsApp Quick Action - Floating/Persistent on all pages]

[Footer Navigation]
├── Quick Links (Home, About, Services, Contact)
├── Contact Details (Physical Address, Email, Phone)
└── Legal
    ├── Privacy Policy (/privacy-policy) - *Pending confirmation*
    └── Terms & Conditions (/terms) - *Pending confirmation*
```

## Revision History
| Date | Author | Version | Notes |
|---|---|---|---|
| 2026-07-06 | UX Strategist | 1.0 | Initial IA generation based on B2B product requirements. |
