import type { Metadata } from "next";
import { ReviewsContent } from "@/components/reviews/reviews-content";

export const metadata: Metadata = {
  title: "Reviews & Testimonials",
  description:
    "Read what contractors, facility managers, and property partners say about Zeepro's interior renovation, joinery, mechanical, and plumbing services in the UAE.",
  openGraph: {
    title: "Reviews & Testimonials | Zeepro",
    description:
      "Read what contractors, facility managers, and property partners say about Zeepro's interior renovation, joinery, mechanical, and plumbing services in the UAE.",
  },
  alternates: {
    canonical: "https://zeeproservices.com/reviews",
  },
};

export default function ReviewsPage() {
  return <ReviewsContent />;
}
