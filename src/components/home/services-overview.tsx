"use client";

import Link from "next/link";
import { PaintRoller, Hammer, Fan, Droplets, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ServiceImageCarousel } from "./service-image-carousel";

const services = [
  {
    id: "interior",
    title: "Interior Renovation & Construction",
    description:
      "Full-scale apartment, villa, and commercial renovation and construction services delivered by licensed professionals.",
    longDescription:
      "Comprehensive interior renovation and construction solutions for apartments, villas, and commercial spaces. Our licensed team handles everything from structural改造 and fit-outs to precision finishing, delivering high-quality transformations on schedule.",
    icon: PaintRoller,
    href: "/services/interior-finishing",
    accent: "from-yellow-800/50 to-yellow-950/70",
    border: "border-amber-800/30",
    label: "Renovation & Construction",
    capabilities: [
      "Apartment & villa renovations",
      "Commercial fit-out & construction",
      "Floor & wall tiling",
      "Painting & surface finishing",
    ],
  },
  {
    id: "joinery",
    title: "Joinery & Custom Woodwork",
    description:
      "Bespoke cabinetry, kitchen joinery, wardrobe fabrication, decorative millwork, and office fit-out solutions.",
    longDescription:
      "Specialist joinery and custom woodwork crafted by skilled woodworkers. From bespoke cabinetry and kitchen installations to decorative millwork and commercial fit-outs, we deliver precision-crafted pieces for residential and hospitality projects.",
    icon: Hammer,
    href: "/services/joinery",
    accent: "from-orange-900/60 to-orange-950/80",
    border: "border-orange-800/30",
    label: "Custom Woodwork",
    capabilities: [
      "Custom cabinetry & built-in furniture",
      "Kitchen joinery & countertops",
      "Wardrobe & storage fabrication",
      "Decorative woodwork & millwork",
    ],
  },
  {
    id: "mechanical",
    title: "Mechanical & Electromechanical",
    description:
      "Home AC, HVAC, air filtration, ventilation, cladding, and electromechanical equipment services.",
    longDescription:
      "Comprehensive mechanical and electromechanical solutions for residential, commercial, and industrial facilities. Our licensed technicians handle home AC installation and repair, HVAC systems, air filtration, ventilation, cladding systems, and electromechanical equipment.",
    icon: Fan,
    href: "/services/mechanical-electromechanical",
    accent: "from-blue-900/60 to-blue-950/80",
    border: "border-blue-800/30",
    label: "HVAC & Air Systems",
    capabilities: [
      "Home AC — window, split, cassette & central",
      "HVAC installation & maintenance",
      "Air filtration & ventilation systems",
      "Cladding system installation",
    ],
  },
  {
    id: "plumbing",
    title: "Plumbing & Sanitary Works",
    description:
      "Full plumbing and sanitary contracting including design, installation, maintenance, and emergency repairs.",
    longDescription:
      "End-to-end plumbing and sanitary contracting for commercial, industrial, and residential projects. From system design through installation to ongoing maintenance, fully code-compliant.",
    icon: Droplets,
    href: "/services/plumbing-sanitary",
    accent: "from-teal-900/60 to-teal-950/80",
    border: "border-teal-800/30",
    label: "Water & Drainage",
    capabilities: [
      "Plumbing system installation",
      "Sanitary fixture contracting",
      "Drainage & wastewater systems",
      "Emergency leak detection",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function ServicesOverview() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent)/3%,transparent_50%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Our Services
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Licensed{" "}
            <span className="text-accent">Interior Renovation, Construction</span>{" "}
            & Technical Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every activity is fully licensed and executed by qualified
            professionals. We deliver renovation, construction, joinery, and
            technical services to projects throughout the UAE.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-8 lg:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Link href={service.href} className="group block h-full">
                <article
                  className={`relative flex h-full flex-col overflow-hidden rounded-xl border ${service.border} p-6 transition-all duration-300 hover:border-foreground/20 sm:p-8`}
                >
                  {/* Background gradient overlay */}
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.accent}`} />

                  {/* Content relative to overlay */}
                  <div className="relative z-10 flex h-full flex-col">

                  {/* Top row: icon + label */}
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-accent/20 backdrop-blur-sm">
                      <service.icon
                        className="size-5 text-accent drop-shadow-sm"
                        aria-hidden="true"
                      />
                    </div>
              <span className="rounded-md bg-black/30 px-2 py-0.5 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur-sm drop-shadow-sm">
                    {service.label}
                  </span>
                </div>

                  {/* Content */}
                  <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {service.longDescription}
                  </p>

                  {/* Capabilities list */}
                  <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {service.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-center gap-2 text-sm text-white/60"
                      >
                        <span className="size-1.5 rounded-full bg-accent" />
                        {cap}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent drop-shadow-sm">
                    View service details
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <br />

      <ServiceImageCarousel />
    </section>
  );
}
