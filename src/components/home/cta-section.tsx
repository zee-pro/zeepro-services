"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/lib/constants";

const headingWords = "Ready to Discuss Your Next Project?".split(" ");

export function CTASection() {
  return (
    <section className="relative overflow-hidden selection:bg-accent-foreground/15 selection:text-accent-foreground">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent to-accent/80 animate-gradient-bg" />

      {/* Subtle pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)
          `,
        }}
      />

      {/* Floating orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="aurora-blob-1 absolute -top-[20%] left-[15%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1),transparent_60%)] blur-2xl" />
        <div className="aurora-blob-2 absolute -bottom-[15%] right-[10%] h-[250px] w-[250px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-foreground/60">
            Get Started
          </p>

          {/* Animated heading - word by word */}
          <h2
            className="text-3xl font-bold text-accent-foreground sm:text-4xl lg:text-5xl"
            style={{ fontSize: "clamp(1.875rem, 1.5rem + 2vw, 3rem)" }}
          >
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="mt-4 text-lg text-accent-foreground/80"
          >
            Whether you need interior renovation, construction, joinery,
            mechanical, or plumbing services, our licensed team is ready to
            support your project requirements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="btn-magnetic gap-2 bg-accent-foreground text-background hover:bg-accent-foreground/90 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/25 transition-all duration-300"
              >
                <MessageCircle className="size-4" />
                Message on WhatsApp
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="btn-magnetic gap-2 border-accent-foreground/30 bg-transparent text-accent-foreground hover:bg-accent-foreground/10 hover:border-accent-foreground/50 transition-all duration-300 backdrop-blur-sm"
              >
                <Mail className="size-4" />
                Send an Inquiry
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
