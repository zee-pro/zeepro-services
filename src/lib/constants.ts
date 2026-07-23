export const SITE_CONFIG = {
  name: "Zeepro",
  slogan: "Where Expertise Meets Execution",
  tagline: "Interior Renovation, Construction & Technical Services",
  description:
    "Zeepro is a UAE-based licensed contractor specializing in interior renovation, construction, joinery, mechanical, and plumbing services.",
  url: "https://zeepro.ae",
  email: "zeepro.services@gmail.com",
  phone: "+971504786043",
  phone2: "+971502061768",
  whatsappNumber: "971504786043",
  address: "Near Insurance Market Metro Station, Al Bashra 1, Dubai",
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
        label: "Interior Renovation & Construction",
        href: "/services/interior-finishing",
      },
      {
        label: "Joinery & Custom Woodwork",
        href: "/services/joinery",
      },
      {
        label: "Mechanical & Electromechanical",
        href: "/services/mechanical-electromechanical",
      },
      {
        label: "Plumbing & Sanitary Works",
        href: "/services/plumbing-sanitary",
      },
    ],
  },
  { label: "Reviews", href: "/reviews" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${SITE_CONFIG.whatsappNumber}`,
} as const;
