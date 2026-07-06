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
    <section className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Certifications &amp; Licenses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {/* TODO: [Copywriter] Certifications intro text */}
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
              className="rounded-xl border border-border bg-background p-6"
            >
              <item.icon
                className="size-8 text-primary"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
              <p className="mt-3 text-xs italic text-muted-foreground/60">
                {item.status}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
