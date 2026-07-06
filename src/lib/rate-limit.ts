const requestMap = new Map<string, { count: number; resetTime: number }>();

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

export function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = requestMap.get(ip);

  if (!entry || now > entry.resetTime) {
    requestMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return { allowed: true };
  }

  entry.count += 1;

  if (entry.count > MAX_REQUESTS) {
    const retryAfter = Math.ceil((entry.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }

  return { allowed: true };
}
