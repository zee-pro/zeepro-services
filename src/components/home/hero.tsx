"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ShieldCheck, Wrench, HardHat } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/images";

const serviceHighlights = [
  { label: "Interior Renovation & Construction", href: "/services/interior-finishing" },
  { label: "Joinery & Custom Woodwork", href: "/services/joinery" },
  { label: "Mechanical & Electromechanical", href: "/services/mechanical-electromechanical" },
  { label: "Plumbing & Sanitary Works", href: "/services/plumbing-sanitary" },
];

const trustIndicators = [
  { icon: ShieldCheck, text: "Licensed Contractor" },
  { icon: Wrench, text: "10 Specialised Trades" },
  { icon: HardHat, text: "UAE Operations" },
];

const floatingParticles = [
  { size: 3, top: "15%", left: "10%", duration: "6s", delay: "0s" },
  { size: 2, top: "25%", left: "85%", duration: "8s", delay: "1s" },
  { size: 4, top: "70%", left: "15%", duration: "7s", delay: "2s" },
  { size: 2, top: "80%", left: "75%", duration: "9s", delay: "0.5s" },
  { size: 3, top: "45%", left: "90%", duration: "6.5s", delay: "1.5s" },
  { size: 2, top: "60%", left: "5%", duration: "8.5s", delay: "3s" },
  { size: 3, top: "35%", left: "70%", duration: "7.5s", delay: "2.5s" },
  { size: 2, top: "90%", left: "50%", duration: "6s", delay: "0.8s" },
];

const headingLines = [
  "Technical Expertise.",
  "Construction Excellence.",
  "Reliable Delivery.",
];

const wordVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const wordChild = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const lineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <Image
          src={IMAGES.hero.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover scale-110"
        />
      </motion.div>

      {/* Aurora background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="aurora-blob-1 absolute -top-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.7821_0.1832_120.4/0.12),transparent_60%)] blur-3xl" />
        <div className="aurora-blob-2 absolute top-[30%] -left-[15%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,oklch(0.7_0.15_150/0.08),transparent_60%)] blur-3xl" />
        <div className="aurora-blob-3 absolute -bottom-[10%] right-[20%] h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,oklch(0.8_0.12_90/0.06),transparent_60%)] blur-3xl" />
      </div>

      {/* Dark gradient overlays for readability */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[oklch(0.1962_0.002_286.2/0.93)] via-[oklch(0.1962_0.002_286.2/0.85)] to-[oklch(0.1962_0.002_286.2/0.55)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[oklch(0.1962_0.002_286.2/0.85)] via-transparent to-[oklch(0.1962_0.002_286.2/0.3)]"
      />

      {/* Industrial grid pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {floatingParticles.map((p, i) => (
          <div
            key={i}
            className="floating-particle absolute rounded-full bg-accent/30"
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
              "--duration": p.duration,
              "--delay": p.delay,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <motion.div
        style={{ y: contentY }}
        className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <span className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent">
                <span className="shimmer absolute inset-0" />
                <ShieldCheck className="size-3.5 relative z-10" />
                <span className="relative z-10">Licensed UAE Contractor</span>
              </span>
            </motion.div>

            {/* Animated heading - word by word */}
            <motion.h1
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl"
              style={{ fontSize: "clamp(2.25rem, 1.5rem + 3vw, 3.75rem)" }}
            >
              {headingLines.map((line, lineIndex) => (
                <motion.span
                  key={lineIndex}
                  className="block"
                  variants={wordVariants}
                >
                  {line.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      className="inline-block mr-[0.25em]"
                      variants={wordChild}
                    >
                      {lineIndex === 1 ? (
                        <span className="text-accent">{word}</span>
                      ) : (
                        word
                      )}
                    </motion.span>
                  ))}
                </motion.span>
              ))}
            </motion.h1>

            {/* Staggered paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70"
            >
              Zeepro delivers licensed interior renovation, construction,
              joinery, mechanical, and plumbing services to contractors,
              facility managers, and property partners across the United Arab
              Emirates.
            </motion.p>

            {/* Animated buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="btn-magnetic gap-2 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 pulse-glow"
                >
                  Partner with Us
                  <ChevronRight className="size-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-magnetic border-white/30 bg-white/5 text-primary-foreground hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                >
                  Explore Our Services
                </Button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
              className="mt-10 flex flex-wrap gap-6"
            >
              {trustIndicators.map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <item.icon
                    className="size-4 text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-primary-foreground/60">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Service highlights panel */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.07] p-8 shadow-2xl shadow-black/10 relative overflow-hidden backdrop-blur-sm">
              {/* Subtle gradient overlay inside the card */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-accent/[0.06]" />

              <p className="mb-6 relative text-xs font-semibold uppercase tracking-widest text-primary-foreground/40">
                Licensed Service Categories
              </p>
              <div className="relative space-y-3">
                {serviceHighlights.map((service, index) => (
                  <motion.div
                    key={service.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.6 + index * 0.1,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      href={service.href}
                      className="group flex items-center gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-accent/10"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/15 text-xs font-bold text-accent backdrop-blur-sm group-hover:bg-accent/25 group-hover:border-accent/50 group-hover:shadow-md group-hover:shadow-accent/10 transition-all duration-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-primary-foreground/90 group-hover:text-primary-foreground transition-colors">
                          {service.label}
                        </p>
                      </div>
                      <ChevronRight className="size-4 text-primary-foreground/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
