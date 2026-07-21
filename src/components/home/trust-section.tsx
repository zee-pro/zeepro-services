"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
      "Skilled engineers and tradespeople with deep experience across interior renovation, construction, joinery, mechanical, and plumbing disciplines.",
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
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-primary py-24 sm:py-32"
    >
      {/* Parallax grid pattern */}
      <motion.div
        style={{ y: gridY }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
      >
        <div
          className="absolute inset-0 -top-10 -bottom-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      </motion.div>

      {/* Subtle aurora blobs for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="aurora-blob-1 absolute -top-[30%] right-[10%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,oklch(0.7821_0.1832_120.4/0.06),transparent_60%)] blur-3xl" />
        <div className="aurora-blob-2 absolute -bottom-[20%] left-[5%] h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,oklch(0.7821_0.1832_120.4/0.04),transparent_60%)] blur-3xl" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/90"
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
            Trust & Credibility
          </p>
          <h2
            className="text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl"
            style={{ fontSize: "clamp(1.875rem, 1.5rem + 2vw, 3rem)" }}
          >
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
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {trustItems.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.05] p-6 transition-all duration-500 hover:bg-primary-foreground/[0.08] hover:shadow-xl hover:shadow-black/5 hover:border-accent/20"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="flex size-11 items-center justify-center rounded-xl bg-accent/15 mb-4"
              >
                <item.icon
                  className="size-5 text-accent"
                  aria-hidden="true"
                />
              </motion.div>
              <h3 className="font-semibold text-primary-foreground group-hover:text-accent transition-colors duration-300">
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
