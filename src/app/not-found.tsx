import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-accent)/5%,transparent_50%)]"
      />

      <div className="relative mx-auto max-w-md px-4 text-center sm:px-6">
        <h1
          className="text-accent font-bold"
          style={{ fontSize: "clamp(4rem, 3rem + 5vw, 6rem)" }}
        >
          404
        </h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page Not Found
        </h2>
        <p className="mt-2 text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn-magnetic mt-8 inline-flex items-center rounded-xl bg-accent px-6 py-3 text-sm font-medium text-accent-foreground shadow-lg shadow-accent/20 transition-all duration-300 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
