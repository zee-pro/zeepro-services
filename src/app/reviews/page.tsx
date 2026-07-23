import type { Metadata } from "next";
import { ReviewsContent } from "@/components/reviews/reviews-content";
import { BreadcrumbSchema } from "@/components/layout/breadcrumb-schema";

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
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Reviews", url: "/reviews" },
        ]}
      />
      <ReviewsContent />
    </>
  );
}
