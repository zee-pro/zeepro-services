"use client";

import { useState, useEffect, useCallback, type RefObject } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SERVICES } from "@/data/services";

interface MobileCategoryBarProps {
  scrollRef: RefObject<HTMLDivElement | null>;
}

export function MobileCategoryBar({ scrollRef }: MobileCategoryBarProps) {
  const [activeId, setActiveId] = useState<string>(SERVICES[0]?.id ?? "");

  const { scrollY } = useScroll({ container: scrollRef });

  const rawOpacity = useTransform(scrollY, [0, 120], [1, 0]);
  const rawY = useTransform(scrollY, [0, 120], [0, -20]);
  const rawScale = useTransform(scrollY, [0, 120], [1, 0.97]);

  const opacity = useSpring(rawOpacity, { stiffness: 300, damping: 30 });
  const y = useSpring(rawY, { stiffness: 300, damping: 30 });
  const scale = useSpring(rawScale, { stiffness: 300, damping: 30 });

  const handleChange = useCallback(
    (id: string) => {
      setActiveId(id);
      const el = document.getElementById(id);
      const container = scrollRef?.current;
      if (el && container) {
        const top = el.offsetTop - container.offsetTop;
        container.scrollTo({ top, behavior: "smooth" });
      }
    },
    [scrollRef],
  );

  useEffect(() => {
    const container = scrollRef?.current;
    if (!container) return;

    const observers: IntersectionObserver[] = [];

    SERVICES.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(cat.id);
            }
          });
        },
        { root: container, rootMargin: "-10% 0px -70% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [scrollRef]);

  return (
    <div className="lg:hidden flex flex-col border-b border-border/30 bg-background">
      {/* Title section — smooth fade/slide out */}
      <motion.div
        style={{ opacity, y, scale, transformOrigin: "top center" }}
        className="px-4 pt-4 pb-3"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
          Our Services
        </p>
        <h1 className="text-xl font-bold text-foreground leading-snug">
          Licensed{" "}
          <span className="text-accent">Interior Renovation, Construction</span>{" "}
          & Technical Services
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Every activity is fully licensed and executed by qualified
          professionals. We deliver renovation, construction, joinery, and
          technical services to projects throughout the UAE.
        </p>
        <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-accent">
          <span>Scroll to explore</span>
          <ChevronRight className="size-3 animate-pulse" />
        </div>
      </motion.div>

      {/* Dropdown — sticks to top after title scrolls away */}
      <div className="sticky top-16 z-20 bg-background border-t border-border/30">
        <div className="flex items-center gap-3 px-4 py-3">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
            Jump to
          </span>
          <div className="relative flex-1">
            <select
              value={activeId}
              onChange={(e) => handleChange(e.target.value)}
              className="w-full appearance-none rounded-xl border border-border bg-muted/50 px-4 py-2.5 pr-10 text-sm font-medium text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            >
              {SERVICES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.title}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
}
