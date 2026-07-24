"use client";

import { useState, useEffect, useCallback, useRef, type RefObject } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { SERVICES } from "@/data/services";

interface MobileCategoryBarProps {
  scrollRef: RefObject<HTMLDivElement | null>;
}

export function MobileCategoryBar({ scrollRef }: MobileCategoryBarProps) {
  const [activeId, setActiveId] = useState<string>(SERVICES[0]?.id ?? "");
  const [titleHidden, setTitleHidden] = useState(false);
  const lastScrollTop = useRef(0);
  const titleRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({ container: scrollRef });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = lastScrollTop.current;
    const diff = latest - prev;
    lastScrollTop.current = latest;

    if (diff > 0 && latest > 20 && !titleHidden) {
      setTitleHidden(true);
    } else if (diff < 0 && titleHidden && latest < 10) {
      setTitleHidden(false);
    }
  });

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
    <>
      {/* Title section — CSS transition for smooth height collapse */}
      <div
        ref={titleRef}
        className="lg:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          opacity: titleHidden ? 0 : 1,
          maxHeight: titleHidden ? "0px" : "400px",
          marginTop: titleHidden ? 0 : 12,
        }}
      >
        <div className="px-4 pb-3">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            Our Services
          </p>
          <h1 className="text-2xl font-bold text-foreground leading-snug sm:text-3xl">
            Licensed{" "}
            <span className="text-accent">Interior Renovation, Construction</span>{" "}
            & Technical Services
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Every activity is fully licensed and executed by qualified
            professionals. We deliver renovation, construction, joinery, and
            technical services to projects throughout the UAE.
          </p>
          <div
            onClick={() => scrollRef?.current?.scrollTo({ top: 80, behavior: "smooth" })}
            className="mt-3 flex cursor-pointer items-center gap-1.5 text-xs font-medium text-accent"
          >
            <span>Scroll to explore</span>
            <ChevronRight className="size-3 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Dropdown — sticks to top after title scrolls away */}
      <div data-mobile-dropdown className="lg:hidden sticky -top-2 z-20 bg-background border-t border-border/30">
        <div className="flex items-center gap-3 px-4 py-3">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
            Jump to
          </span>
          <div className="relative flex-1">
            <select
              value={activeId}
              onChange={(e) => handleChange(e.target.value)}
              className="w-full appearance-none rounded-xl border border-border bg-muted/50 px-3 py-2 pr-10 text-xs font-medium text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 sm:px-4 sm:py-2.5 sm:text-sm"
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
    </>
  );
}
