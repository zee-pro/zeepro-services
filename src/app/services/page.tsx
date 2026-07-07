import type { Metadata } from "next";
import { Fan, Droplets, PaintRoller, Building2 } from "lucide-react";
import { ServiceCard } from "@/components/services/service-card";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Zeepro's licensed mechanical, plumbing, interior finishing, and steel services across the UAE.",
  openGraph: {
    title: "Services | Zeepro",
    description:
      "Explore Zeepro's licensed mechanical, plumbing, interior finishing, and steel services across the UAE.",
  },
};

const services = [
  {
    title: "Mechanical & Electromechanical",
    description:
      "Comprehensive HVAC, air filtration, ventilation, and electromechanical services for commercial and industrial facilities across the UAE.",
    icon: Fan,
    href: "/services/mechanical-electromechanical",
    capabilities: [
      "HVAC installation and maintenance",
      "Air filtration systems",
      "Ventilation system engineering",
      "Electromechanical equipment servicing",
    ],
  },
  {
    title: "Plumbing & Sanitary Works",
    description:
      "Full plumbing and sanitary contracting services including system design, installation, maintenance, and emergency repairs.",
    icon: Droplets,
    href: "/services/plumbing-sanitary",
    capabilities: [
      "Plumbing system installation",
      "Sanitary fixture contracting",
      "Drainage and wastewater systems",
      "Emergency leak detection and repair",
    ],
  },
  {
    title: "Interior Finishing & Renovation",
    description:
      "Professional tiling, painting, carpentry, and wood flooring services for commercial and residential spaces.",
    icon: PaintRoller,
    href: "/services/interior-finishing",
    capabilities: [
      "Floor and wall tiling works",
      "Painting and surface finishing",
      "Carpentry and joinery",
      "Wood flooring installation",
    ],
  },
  {
    title: "Steel & Cladding Solutions",
    description:
      "Cladding system installation, steel product fabrication, and structural steel maintenance for industrial projects.",
    icon: Building2,
    href: "/services/steel-cladding",
    capabilities: [
      "Cladding system design and installation",
      "Steel fabrication and installation",
      "Structural steel maintenance",
      "Corrosion protection and coating",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent)/3%,transparent_50%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Our Services
          </p>
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Licensed Technical Services Across{" "}
            <span className="text-accent">Four Core Disciplines</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Zeepro delivers specialist mechanical, plumbing, finishing, and
            steel services across the UAE. Every activity is fully licensed and
            executed by qualified professionals.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              capabilities={service.capabilities}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
