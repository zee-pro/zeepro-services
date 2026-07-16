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
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
              About Us
            </p>
            <p className="mb-2 text-sm font-medium italic tracking-wide text-accent/80">
              Where Expertise Meets Execution
            </p>
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Licensed Technical Contractor{" "}
              <span className="text-accent">Serving the UAE</span>
            </h1>
            {/* TODO: [Copywriter] About Us - Our Story */}
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Zeepro is a UAE-based licensed contractor specialising in
                mechanical, plumbing, interior finishing, and steel services.
                We serve contractors, facility managers, and property partners
                with professional, reliable service delivery.
              </p>
              <p>
                {/* TODO: [Client] Provide company history, founding story, and mission statement */}
                Our team brings together extensive experience across all 10
                licensed trades, ensuring every project benefits from skilled
                technical oversight and a partnership-focused approach.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            <div className="rounded-xl border border-border bg-muted/30 p-8">
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent">
                Our Values
              </p>
              <div className="space-y-6">
                {values.map((value) => (
                  <div key={value.title} className="flex gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <value.icon
                        className="size-5 text-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
