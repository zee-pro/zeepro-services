"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  ClipboardCheck,
  Gauge,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Licensed & Compliant",
    description:
      "Fully licensed to operate across 10 specialised trades within the UAE construction and maintenance sector.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Assurance",
    description:
      "Every project follows structured quality control processes to ensure consistent, professional results.",
  },
  {
    icon: Gauge,
    title: "Technical Expertise",
    description:
      "Skilled engineers and tradespeople with hands-on experience across interior renovation, construction, joinery, mechanical, and plumbing disciplines.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description:
      "We operate as an extension of our partners' teams, aligned with project goals and invested in shared success.",
  },
];

const activities = [
  "Interior Renovation & Construction",
  "Joinery & Custom Woodwork",
  "HVAC Installation & Maintenance",
  "Air Filtration Systems",
  "Ventilation Systems",
  "Electromechanical Equipment",
  "Cladding Works",
  "Plumbing & Sanitary Contracting",
  "Floor & Wall Tiling Works",
  "Painting Contracting",
];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-muted/50 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-accent)/4%,transparent_50%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-5">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
              Why Zeepro
            </p>
            <p className="mb-2 text-sm font-medium italic tracking-wide text-accent/80">
              Where Expertise Meets Execution
            </p>
            <h2
              className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
              style={{ fontSize: "clamp(1.875rem, 1.5rem + 2vw, 3rem)" }}
            >
              Built on{" "}
              <span className="text-accent">Technical Expertise</span> and
              Reliable Partnerships
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              As a UAE-based licensed contractor, we bring together 10
              specialised trades under one accountable partnership. Our focus is
              on delivering quality, on time, every time.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10"
                  >
                    <item.icon
                      className="size-5 text-accent"
                      aria-hidden="true"
                    />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <Link
                href="/about"
                className="link-underline mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
              >
                Learn more about Zeepro
                <ArrowRight className="size-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5">
              {/* Subtle background image */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.1]">
                <Image
                  src={IMAGES.about}
                  alt=""
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>

              {/* Accent corner glow on hover */}
              <div className="pointer-events-none absolute -top-12 -right-12 size-32 rounded-full bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                  10 Licensed Activities
                </p>
                <ul className="space-y-3">
                  {activities.map((activity, i) => (
                    <motion.li
                      key={activity}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2 + i * 0.04,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      className="flex items-center gap-3 border-b border-border pb-3 text-sm font-medium text-foreground last:border-b-0 last:pb-0"
                    >
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-accent/10 text-xs font-bold text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {activity}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
