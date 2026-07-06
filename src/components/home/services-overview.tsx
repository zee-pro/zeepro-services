"use client";

import Link from "next/link";
import { Fan, Droplets, PaintRoller, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Mechanical & Electromechanical",
    description:
      "HVAC installation, air filtration, ventilation, and electromechanical equipment services.",
    icon: Fan,
    href: "/services/mechanical-electromechanical",
  },
  {
    title: "Plumbing & Sanitary Works",
    description:
      "Plumbing system installation, sanitary contracting, drainage, and emergency repair services.",
    icon: Droplets,
    href: "/services/plumbing-sanitary",
  },
  {
    title: "Interior Finishing & Renovation",
    description:
      "Tiling, painting, carpentry, and wood flooring for commercial and residential spaces.",
    icon: PaintRoller,
    href: "/services/interior-finishing",
  },
  {
    title: "Steel & Cladding Solutions",
    description:
      "Cladding installation, steel fabrication, structural maintenance, and corrosion protection.",
    icon: Building2,
    href: "/services/steel-cladding",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ServicesOverview() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Licensed mechanical, plumbing, finishing, and steel services
            delivered by qualified professionals across the UAE.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Link href={service.href} className="group block h-full">
                <Card className="h-full transition-colors hover:bg-muted/50">
                  <CardHeader>
                    <service.icon
                      className="size-8 text-primary"
                      aria-hidden="true"
                    />
                    <CardTitle className="mt-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
