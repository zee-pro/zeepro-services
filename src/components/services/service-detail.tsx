"use client";

import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ServiceDetailProps {
  title: string;
  description: string;
  capabilities: string[];
  todoNote?: string;
}

export function ServiceDetail({
  title,
  description,
  capabilities,
  todoNote,
}: ServiceDetailProps) {
  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              href="/services"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              &larr; All Services
            </Link>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              {description}
            </p>
            {todoNote && (
              <p className="mt-2 text-xs italic text-muted-foreground/60">
                {todoNote}
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="mt-12"
          >
            <h2 className="text-xl font-semibold text-foreground">
              Key Capabilities
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-muted-foreground">{capability}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="bg-primary py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground">
            Need {title.toLowerCase()} Services?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Contact Zeepro to discuss your project requirements and how we can
            support your next build.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="gap-2"
              >
                Start a Conversation
                <ChevronRight className="size-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
