import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit } from "@/lib/rate-limit";
import { readReviews, addReview } from "@/lib/reviews-store";
import { sendNewReviewEmail } from "@/lib/notifications";

const reviewSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().optional(),
  rating: z.number().int().min(1).max(5),
  text: z.string().min(10, "Review must be at least 10 characters"),
});

export async function GET() {
  const reviews = await readReviews();
  return NextResponse.json(reviews);
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const { allowed, retryAfter } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { success: false, message: "Too many requests" },
      {
        status: 429,
        headers: { "Retry-After": String(retryAfter) },
      },
    );
  }

  try {
    const body = await request.json();
    const data = reviewSchema.parse(body);

    const id = String(Date.now());
    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });

    const review = {
      id,
      ...data,
      date,
    };

    await addReview(review);

    await Promise.allSettled([sendNewReviewEmail(review)]);

    return NextResponse.json(
      { success: true, message: "Review submitted" },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Validation failed", errors: error.issues },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
