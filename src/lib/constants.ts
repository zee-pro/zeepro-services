export const SITE_CONFIG = {
  name: "Zeepro",
  tagline: "Mechanical, Plumbing, Finishing & Steel",
  description:
    "Zeepro is a UAE-based licensed contractor specializing in mechanical, plumbing, interior finishing, and steel services.",
  url: "https://zeepro.ae",
  email: "zeepro.services@gmail.com",
  phone: "+971504786043",
  whatsappNumber: "971504786043",
  address: "Zeepro Services, Near Mashreq Metro Station (R33), Dubai, UAE",
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export interface NavItemParent extends NavLink {
  children: readonly NavLink[];
}

export type NavItem = NavLink | NavItemParent;

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Mechanical & Electromechanical",
        href: "/services/mechanical-electromechanical",
      },
      {
        label: "Plumbing & Sanitary Works",
        href: "/services/plumbing-sanitary",
      },
      {
        label: "Interior Finishing & Renovation",
        href: "/services/interior-finishing",
      },
      {
        label: "Steel & Cladding Solutions",
        href: "/services/steel-cladding",
      },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${SITE_CONFIG.whatsappNumber}`,
} as const;
