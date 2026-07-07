"use client";

import Link from "next/link";
import Image from "next/image";
import { Fan, Droplets, PaintRoller, Building2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";

const services = [
  {
    id: "mechanical",
    title: "Mechanical & Electromechanical",
    description:
      "HVAC installation, air filtration, ventilation, and electromechanical equipment services.",
    longDescription:
      "Comprehensive mechanical and electromechanical solutions for commercial and industrial facilities. Our licensed technicians deliver installation, maintenance, and optimisation across all major HVAC and air systems.",
    icon: Fan,
    href: "/services/mechanical-electromechanical",
    image: IMAGES.services.mechanical,
    accent: "from-blue-900/60 to-blue-950/80",
    border: "border-blue-800/30",
    label: "HVAC & Air Systems",
    capabilities: [
      "HVAC installation & maintenance",
      "Air filtration systems",
      "Ventilation engineering",
      "Electromechanical servicing",
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
    image: IMAGES.services.plumbing,
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
  {
    id: "interior",
    title: "Interior Finishing & Renovation",
    description:
      "Professional tiling, painting, carpentry, and wood flooring for commercial and residential spaces.",
    longDescription:
      "High-quality interior finishing and renovation services delivered by skilled tradespeople. We handle tiling, painting, carpentry, and wood flooring to deliver premium finishes on schedule.",
    icon: PaintRoller,
    href: "/services/interior-finishing",
    image: IMAGES.services.interior,
    accent: "from-amber-900/60 to-amber-950/80",
    border: "border-amber-800/30",
    label: "Fit-Out & Finishes",
    capabilities: [
      "Floor & wall tiling",
      "Painting & surface finishing",
      "Carpentry & joinery",
      "Wood flooring installation",
    ],
  },
  {
    id: "steel",
    title: "Steel & Cladding Solutions",
    description:
      "Cladding system installation, steel fabrication, structural maintenance, and corrosion protection.",
    longDescription:
      "Specialist cladding and steel solutions for major commercial and industrial projects. From facade cladding to steel structure fabrication, delivering durable code-compliant results.",
    icon: Building2,
    href: "/services/steel-cladding",
    image: IMAGES.services.steel,
    accent: "from-slate-900/60 to-slate-950/80",
    border: "border-slate-800/30",
    label: "Structural Systems",
    capabilities: [
      "Cladding system installation",
      "Steel fabrication & installation",
      "Structural steel maintenance",
      "Corrosion protection & coating",
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
            Licensed Technical Services Across{" "}
            <span className="text-accent">Four Core Disciplines</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every activity is fully licensed and executed by qualified
            professionals. We deliver to commercial, industrial, and residential
            projects throughout the UAE.
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
                  {/* Background image with overlay */}
                  <div className="pointer-events-none absolute inset-0">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.accent}`} />
                  </div>

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
    </section>
  );
}
