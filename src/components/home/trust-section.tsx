"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  FileCheck,
  Clock,
  HardHat,
  Handshake,
} from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Licensed Operations",
    description:
      "Fully licensed contractor operating under UAE regulations for all 10 specialised trade activities.",
  },
  {
    icon: FileCheck,
    title: "Quality Commitment",
    description:
      "Structured quality control processes ensure every project meets professional standards before handover.",
  },
  {
    icon: Wrench,
    title: "Technical Expertise",
    description:
      "Skilled engineers and tradespeople with deep experience across mechanical, plumbing, finishing, and steel disciplines.",
  },
  {
    icon: HardHat,
    title: "Safety Standards",
    description:
      "Commitment to UAE safety regulations and industry-standard compliance protocols on every site.",
  },
  {
    icon: Clock,
    title: "Reliable Execution",
    description:
      "We honour project timelines and budgets, reducing delays that cost our partners time and reputation.",
  },
  {
    icon: Handshake,
    title: "Partnership Model",
    description:
      "We work as an extension of our partners' teams, aligned with their goals and invested in their success.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 sm:py-32">
      {/* Grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/90"
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
            Trust & Credibility
          </p>
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
            Why Contractors and Partners{" "}
            <span className="text-accent">Choose Zeepro</span>
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/60">
            We bring together licensed expertise, technical capability, and a
            partnership approach that makes every project run smoother.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {trustItems.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/[0.03] p-6 backdrop-blur-sm transition-colors hover:bg-primary-foreground/5"
            >
              <item.icon
                className="size-6 text-accent"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-semibold text-primary-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/60">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
