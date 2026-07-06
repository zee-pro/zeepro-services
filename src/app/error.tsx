"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight">
        Something went wrong
      </h1>
      <p className="max-w-md text-muted-foreground">
        An unexpected error occurred. Please try again or contact us if the
        problem persists.
      </p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
