import { Redis } from "@upstash/redis";
import type { Review } from "@/data/reviews";

const REVIEWS_KEY = "reviews";

export function getReviewsClient(): Redis {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    throw new Error("Upstash Redis env vars are not configured");
  }
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
}

export async function readReviews(): Promise<Review[]> {
  try {
    const redis = getReviewsClient();
    const reviews = await redis.lrange(REVIEWS_KEY, 0, -1);
    return (reviews as unknown as Review[]).filter((r) => r && typeof r === "object");
  } catch {
    return [];
  }
}

export async function addReview(review: Review): Promise<void> {
  const redis = getReviewsClient();
  await redis.lpush(REVIEWS_KEY, review);
}
