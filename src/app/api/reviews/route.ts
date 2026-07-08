import { NextResponse } from "next/server";
import { z } from "zod";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { checkRateLimit } from "@/lib/rate-limit";

const DATA_PATH = join(process.cwd(), "data", "reviews.json");

const reviewSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().optional(),
  rating: z.number().int().min(1).max(5),
  text: z.string().min(10, "Review must be at least 10 characters"),
});

async function readReviews() {
  try {
    const raw = await readFile(DATA_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeReviews(reviews: unknown) {
  await writeFile(DATA_PATH, JSON.stringify(reviews, null, 2), "utf-8");
}

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

    const reviews = await readReviews();
    const id = String(Date.now());
    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });

    reviews.unshift({
      id,
      ...data,
      date,
    });

    await writeReviews(reviews);

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
