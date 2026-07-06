"use client";

import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="bg-primary py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          Ready to Partner with Zeepro?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80">
          {/* TODO: [Copywriter] CTA section copy */}
          Whether you need mechanical, plumbing, finishing, or steel services,
          our licensed team is ready to discuss your project.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
            <Button
              variant="secondary"
              size="lg"
              className="gap-2"
            >
              <MessageCircle className="size-4" />
              Message on WhatsApp
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Mail className="size-4" />
              Send an Inquiry
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
