"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Star, Quote } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Review } from "@/data/reviews";

function StarRating({ rating, animate }: { rating: number; animate?: boolean }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={i}
          initial={animate ? { scale: 0, rotate: -30, opacity: 0 } : false}
          whileInView={animate ? { scale: 1, rotate: 0, opacity: 1 } : undefined}
          viewport={{ once: true }}
          transition={
            animate
              ? {
                  delay: i * 0.08,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }
              : undefined
          }
        >
          <Star
            className={`size-4 ${i < rating ? "fill-yellow-400 text-yellow-400 drop-shadow-sm" : "fill-muted-foreground/20 text-muted-foreground/20"}`}
            aria-hidden="true"
          />
        </motion.div>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: Review;
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        rotateX,
        rotateY,
        perspective: 800,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 sm:p-8">
        {/* Animated gradient accent bar at top */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Quote icon */}
        <Quote className="size-8 text-accent/15 mb-3" aria-hidden="true" />

        <StarRating rating={review.rating} animate />

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          &ldquo;{review.text}&rdquo;
        </p>

        <div className="mt-6 border-t border-border pt-4">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
              {review.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {review.name}
              </p>
              {review.company && (
                <p className="text-xs text-muted-foreground">
                  {review.company}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        const list = Array.isArray(data) ? data : [];
        setReviews(list.sort((a: Review, b: Review) => b.rating - a.rating));
      })
      .catch(() => setReviews([]));
  }, []);

  const featured = reviews.slice(0, 3);

  return (
    <section className="relative overflow-hidden pb-24 sm:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent)/3%,transparent_50%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Testimonials
          </p>
          <h2
            className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
            style={{ fontSize: "clamp(1.875rem, 1.5rem + 2vw, 3rem)" }}
          >
            What Our{" "}
            <span className="text-accent">Partners Say</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from contractors, facility managers, and property partners who
            trust Zeepro for their project needs.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className="mt-10 text-center"
        >
          <Link
            href="/reviews"
            className="link-underline inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            Read all reviews or leave your own
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
