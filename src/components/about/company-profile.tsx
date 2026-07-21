"use client";

import { motion } from "framer-motion";
import { Award, Target, Eye } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality",
    description:
      "We deliver work that meets the highest standards of construction and maintenance excellence across every project.",
  },
  {
    icon: Target,
    title: "Reliability",
    description:
      "We honour our commitments and timelines, so our partners can trust their project schedules and budgets.",
  },
  {
    icon: Eye,
    title: "Partnership",
    description:
      "We operate as an extension of our partners' teams, aligned with their goals and invested in their reputation.",
  },
];

export function CompanyProfile() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--color-accent)/3%,transparent_50%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
              About Us
            </p>
            <p className="mb-2 text-sm font-medium italic tracking-wide text-accent/80">
              Where Expertise Meets Execution
            </p>
            <h1
              className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
              style={{ fontSize: "clamp(1.875rem, 1.5rem + 2vw, 3rem)" }}
            >
              Licensed Technical Contractor{" "}
              <span className="text-accent">Serving the UAE</span>
            </h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Zeepro is a UAE-based licensed contractor specialising in
                interior renovation, construction, joinery, mechanical, and
                plumbing services.
                We serve contractors, facility managers, and property partners
                with professional, reliable service delivery.
              </p>
              <p>
                Our team brings together extensive experience across all 10
                licensed trades, ensuring every project benefits from skilled
                technical oversight and a partnership-focused approach.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="group rounded-2xl border border-border bg-muted/30 p-8 transition-all duration-500 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5">
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent">
                Our Values
              </p>
              <div className="space-y-6">
                {values.map((value, i) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group/item flex gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10"
                    >
                      <value.icon
                        className="size-5 text-accent"
                        aria-hidden="true"
                      />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover/item:text-accent transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
