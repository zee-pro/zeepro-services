"use client";

import { motion } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";

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
      "We operate as an extension of our partners teams, aligned with their goals and invested in their reputation.",
  },
];

export function CompanyProfile() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Zeepro
          </h1>
          {/* TODO: [Copywriter] About Us - Our Story */}
          <div className="mt-6 max-w-3xl space-y-4 text-lg text-muted-foreground">
            <p>
              Zeepro is a UAE-based licensed contractor specializing in
              mechanical, plumbing, interior finishing, and steel services.
              We serve contractors, facility managers, and property partners
              with professional, reliable service delivery.
            </p>
            <p>
              {/* TODO: [Client] Provide company history, founding story, and mission statement */}
              Company history and detailed background pending client input.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Our Values
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border p-6"
              >
                <value.icon
                  className="size-8 text-primary"
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
