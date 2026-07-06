export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary/30 border-t-primary" />
      <span className="sr-only">Loading contact page...</span>
    </div>
  );
}
