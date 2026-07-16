"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ReviewForm } from "@/components/reviews/review-form";
import { Star } from "lucide-react";
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

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);

  const loadReviews = () => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        const list = Array.isArray(data) ? data : [];
        setReviews(list.sort((a: Review, b: Review) => b.rating - a.rating));
      })
      .catch(() => setReviews([]));
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const visible = reviews.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.length;

  return (
    <>
      <section className="relative flex min-h-[400px] items-center overflow-hidden">
        <Image
          src="/images/review.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none absolute inset-0 object-cover object-[center_30%]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[oklch(0.1962_0.002_286.2/0.9)] via-[oklch(0.1962_0.002_286.2/0.8)] to-[oklch(0.1962_0.002_286.2/0.5)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[oklch(0.1962_0.002_286.2/0.7)] via-transparent to-[oklch(0.1962_0.002_286.2/0.3)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            Testimonials
          </p>
          <h1 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
            What Our Partners Say
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/70">
            We value feedback from the contractors, facility managers, and
            property partners we work with across the UAE.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-muted/50 py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent)/3%,transparent_50%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="grid gap-6 sm:grid-cols-2">
                {visible.map((review) => (
                  <div
                    key={review.id}
                    className="flex flex-col rounded-xl border border-border bg-background p-6 sm:p-8"
                  >
                    <StarRating rating={review.rating} />
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
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
                      <span className="text-xs text-muted-foreground/60">
                        {review.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {hasMore && (
                <div className="mt-8 text-center sm:hidden">
                  <button
                    onClick={() => setVisibleCount((c) => c + 3)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                  >
                    Show more
                  </button>
                </div>
              )}
            </div>
            <div>
              <ReviewForm onSuccess={loadReviews} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
