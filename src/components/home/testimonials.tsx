"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Review } from "@/data/reviews";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-muted-foreground/20 text-muted-foreground/20"}`}
          aria-hidden="true"
        />
      ))}
    </div>
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
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent)/3%,transparent_50%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            What Our{" "}
            <span className="text-accent">Partners Say</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from contractors, facility managers, and property partners who
            trust Zeepro for their project needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((review) => (
            <div
              key={review.id}
              className="flex flex-col rounded-xl border border-border bg-background p-6 transition-colors hover:border-accent/20 sm:p-8"
            >
              <StarRating rating={review.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-6 border-t border-border pt-4">
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
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className="mt-10 text-center"
        >
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            Read all reviews or leave your own
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
