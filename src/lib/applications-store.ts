import { Redis } from "@upstash/redis";

const APPLICATIONS_KEY = "career-applications";

export interface CareerApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  trade: string;
  experience?: string;
  message: string;
  date: string;
}

export function getApplicationsClient(): Redis {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    throw new Error("Upstash Redis env vars are not configured");
  }
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
}

export async function readApplications(): Promise<CareerApplication[]> {
  try {
    const redis = getApplicationsClient();
    const applications = await redis.lrange(APPLICATIONS_KEY, 0, -1);
    return (applications as unknown as CareerApplication[]).filter(
      (a) => a && typeof a === "object",
    );
  } catch {
    return [];
  }
}

export async function addApplication(application: CareerApplication): Promise<void> {
  const redis = getApplicationsClient();
  await redis.lpush(APPLICATIONS_KEY, application);
}
