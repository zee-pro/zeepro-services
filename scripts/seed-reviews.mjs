import { readFile } from "node:fs/promises";
import { Redis } from "@upstash/redis";

const REVIEWS_KEY = "reviews";

async function main() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    console.error("Missing UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN");
    process.exit(1);
  }

  const reviews = JSON.parse(
    await readFile(new URL("../data/reviews.json", import.meta.url), "utf-8"),
  );

  if (!Array.isArray(reviews) || reviews.length === 0) {
    console.log("No reviews to seed.");
    return;
  }

  const redis = new Redis({ url, token });
  const existing = await redis.lrange(REVIEWS_KEY, 0, -1);

  if (existing.length > 0) {
    console.log(`Key already has ${existing.length} reviews. Skipping seed.`);
    console.log("Run 'redis.del(REVIEWS_KEY)' first if you want to reseed.");
    return;
  }

  await redis.lpush(REVIEWS_KEY, ...reviews);
  console.log(`Seeded ${reviews.length} reviews into Redis.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
