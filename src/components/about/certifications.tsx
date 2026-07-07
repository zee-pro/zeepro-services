"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Building2 } from "lucide-react";

const licenses = [
  {
    icon: Building2,
    title: "Trade License",
    description:
      "Licensed to operate within the United Arab Emirates construction and maintenance sector.",
    status: "TODO: [Legal/Client] Provide trade license number and issuing authority",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Safety",
    description:
      "Committed to UAE safety regulations and industry-standard compliance protocols.",
    status: "TODO: [Legal/Client] Confirm required compliance certifications",
  },
  {
    icon: FileCheck,
    title: "Certifications",
    description:
      "Pursuing and maintaining relevant industry certifications to ensure quality assurance.",
    status: "TODO: [Legal/Client] Provide ISO or other certification details",
  },
];

export function Certifications() {
  return (
    <section className="relative overflow-hidden bg-muted/50 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--color-accent)/3%,transparent_50%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Credentials
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Certifications &amp; Licenses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Zeepro operates with full compliance under UAE regulations,
            ensuring every project meets the required legal and safety
            standards.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {licenses.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-background p-6 transition-colors hover:border-accent/20 sm:p-8"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-accent/10">
                <item.icon
                  className="size-5 text-accent"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <p className="mt-4 text-xs italic text-muted-foreground/40">
                {item.status}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
