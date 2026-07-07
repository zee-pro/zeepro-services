import type { Metadata } from "next";
import { ReviewForm } from "@/components/reviews/review-form";
import { reviews } from "@/data/reviews";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read reviews from contractors, facility managers, and property partners who trust Zeepro for their construction and maintenance needs in the UAE.",
  openGraph: {
    title: "Reviews | Zeepro",
    description:
      "Read reviews from contractors, facility managers, and property partners who trust Zeepro for their construction and maintenance needs in the UAE.",
  },
};

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
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-accent)/3%,transparent_50%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Testimonials
          </p>
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            What Our Partners Say
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We value feedback from the contractors, facility managers, and
            property partners we work with across the UAE.
          </p>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="relative overflow-hidden bg-muted/50 pb-24 sm:pb-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {reviews.map((review) => (
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
        </div>
      </section>

      {/* Submit review form */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent)/3%,transparent_50%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl">
            <ReviewForm />
          </div>
        </div>
      </section>
    </>
  );
}
