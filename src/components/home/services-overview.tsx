"use client";

import Link from "next/link";
import { PaintRoller, Hammer, Fan, Droplets, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
    hoverBorder: "hover:border-amber-600/50",
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
    hoverBorder: "hover:border-orange-600/50",
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
    hoverBorder: "hover:border-blue-600/50",
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
    hoverBorder: "hover:border-teal-600/50",
    label: "Water & Drainage",
    capabilities: [
      "Plumbing system installation",
      "Sanitary fixture contracting",
      "Drainage & wastewater systems",
      "Emergency leak detection",
    ],
  },
];

function ServiceCard({
  service,
  index,
  large,
}: {
  service: (typeof services)[0];
  index: number;
  large?: boolean;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [4, -4]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-4, 4]), {
    stiffness: 300,
    damping: 30,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        rotateX: large ? rotateX : undefined,
        rotateY: large ? rotateY : undefined,
        perspective: 800,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={service.href} className="group block h-full">
        <article
          className={`relative flex h-full flex-col overflow-hidden rounded-2xl border ${service.border} ${service.hoverBorder} transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 ${large ? "p-8 sm:p-10" : "p-6"}`}
        >
          {/* Background gradient overlay */}
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.accent} transition-opacity duration-500 group-hover:opacity-90`} />

          {/* Hover glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,oklch(0.7821_0.1832_120.4/0.08),transparent_70%)]" />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col">
            {/* Top row: icon + label */}
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className={`flex items-center justify-center rounded-xl bg-accent/20 backdrop-blur-sm ${large ? "size-12" : "size-10"}`}
              >
                <service.icon
                  className="text-accent drop-shadow-sm"
                  aria-hidden="true"
                  style={{ width: large ? 24 : 20, height: large ? 24 : 20 }}
                />
              </motion.div>
              <span className="rounded-md bg-black/30 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur-sm drop-shadow-sm">
                {service.label}
              </span>
            </div>

            {/* Title */}
            <h3
              className={`mt-4 font-bold text-white ${large ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              className={`mt-2 leading-relaxed text-white/70 ${large ? "text-base" : "text-sm"}`}
            >
              {large ? service.longDescription : service.description}
            </p>

            {/* Capabilities */}
            <ul className={`mt-4 grid gap-x-4 gap-y-1.5 ${large ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2"}`}>
              {service.capabilities.map((cap) => (
                <li
                  key={cap}
                  className="flex items-center gap-2 text-sm text-white/60"
                >
                  <span className="size-1.5 rounded-full bg-accent shrink-0" />
                  {cap}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-auto pt-6 flex items-center gap-2 text-sm font-medium text-accent drop-shadow-sm">
              View service details
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
          </div>

          {/* Animated corner accent on hover */}
          <div className="pointer-events-none absolute -bottom-12 -right-12 size-24 rounded-full bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </article>
      </Link>
    </motion.div>
  );
}

export function ServicesOverview() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent)/3%,transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-accent)/2%,transparent_50%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Our Services
          </p>
          <h2
            className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
            style={{ fontSize: "clamp(1.875rem, 1.5rem + 2vw, 3rem)" }}
          >
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

        {/* Grid layout: first card spans 2 cols + 2 rows on desktop */}
        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3 auto-rows-[minmax(280px,auto)]">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
            >
              <ServiceCard
                service={service}
                index={index}
                large={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <ServiceImageCarousel />
      </div>
    </section>
  );
}
