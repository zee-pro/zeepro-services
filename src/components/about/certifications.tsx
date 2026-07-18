"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Building2 } from "lucide-react";

const licenses = [
  {
    icon: Building2,
    title: "Trade License",
    description:
      "Licensed to operate within the United Arab Emirates construction and maintenance sector.",
    status: "Registered with relevant UAE authorities",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Safety",
    description:
      "Committed to UAE safety regulations and industry-standard compliance protocols.",
    status: "Full compliance with UAE safety regulations",
  },
  {
    icon: FileCheck,
    title: "Certifications",
    description:
      "Pursuing and maintaining relevant industry certifications to ensure quality assurance.",
    status: "Industry-recognised certifications maintained",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export function Certifications() {
  return (
    <section className="relative overflow-hidden bg-muted/50 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--color-accent)/3%,transparent_50%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Credentials
          </p>
          <h2
            className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
            style={{ fontSize: "clamp(1.875rem, 1.5rem + 2vw, 3rem)" }}
          >
            Certifications &amp; Licenses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Zeepro operates with full compliance under UAE regulations,
            ensuring every project meets the required legal and safety
            standards.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {licenses.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group rounded-2xl border border-border bg-background p-6 transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 sm:p-8"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="flex size-11 items-center justify-center rounded-xl bg-accent/10"
              >
                <item.icon
                  className="size-5 text-accent"
                  aria-hidden="true"
                />
              </motion.div>
              <h3 className="mt-4 font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <p className="mt-4 text-xs italic text-muted-foreground/40">
                {item.status}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
