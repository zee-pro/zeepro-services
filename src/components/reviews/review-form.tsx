"use client";

import { useState } from "react";
import { Star, Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ReviewForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [text, setText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim() || rating === 0) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), company: company.trim(), rating, text: text.trim() }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setIsSubmitted(true);
      setName("");
      setCompany("");
      setRating(0);
      setText("");
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-background p-12 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle2 className="size-8 text-accent" aria-hidden="true" />
        </div>
        <h2 className="mt-6 text-xl font-bold text-foreground">Thank You</h2>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Your review has been submitted and will appear after moderation.
        </p>
        <Button
          variant="outline"
          className="mt-8"
          onClick={() => setIsSubmitted(false)}
        >
          Submit Another Review
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="rounded-xl border border-border bg-background p-6 sm:p-8">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Share Your Experience
          </p>
          <h2 className="mt-1 text-2xl font-bold text-foreground">
            Leave a Review
          </h2>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="review-rating">
              Rating <span className="text-destructive">*</span>
            </Label>
            <div className="flex gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setRating(i + 1)}
                  onMouseEnter={() => setHoveredStar(i + 1)}
                  onMouseLeave={() => setHoveredStar(0)}
                  className="transition-colors hover:scale-110"
                  aria-label={`${i + 1} star${i + 1 > 1 ? "s" : ""}`}
                >
                  <Star
                    className={`size-7 ${
                      i < (hoveredStar || rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-muted-foreground/20 text-muted-foreground/20"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="review-name">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="review-name"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="review-company">Company</Label>
              <Input
                id="review-company"
                placeholder="Your company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="h-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="review-text">
              Your Review <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="review-text"
              placeholder="Tell others about your experience working with Zeepro..."
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
        </div>

        {submitError && (
          <p className="mt-4 text-sm text-destructive">{submitError}</p>
        )}

        <Button
          type="submit"
          size="lg"
          className="mt-6 gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
          disabled={isSubmitting || !name.trim() || !text.trim() || rating === 0}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="size-4" aria-hidden="true" />
              Submit Review
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
