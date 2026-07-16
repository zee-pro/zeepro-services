import { NextResponse } from "next/server";
import { z } from "zod";
import { writeFile, readFile } from "node:fs/promises";
import { join } from "node:path";
import { checkRateLimit } from "@/lib/rate-limit";

const DATA_PATH = join(process.cwd(), "data", "applications.json");

const applicationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("A valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  trade: z.string().min(1, "Please select a trade"),
  experience: z.string().optional(),
  message: z.string().min(10, "Please provide at least 10 characters"),
});

async function readApplications() {
  try {
    const raw = await readFile(DATA_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeApplications(applications: unknown) {
  await writeFile(DATA_PATH, JSON.stringify(applications, null, 2), "utf-8");
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
    const data = applicationSchema.parse(body);

    const applications = await readApplications();
    const id = String(Date.now());
    const date = new Date().toISOString();

    applications.unshift({
      id,
      ...data,
      date,
    });

    await writeApplications(applications);

    return NextResponse.json(
      { success: true, message: "Application submitted" },
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
