import { SITE_CONFIG } from "@/lib/constants";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    logo: "https://zeeproservices.com/zeepro_logo.png",
    slogan: SITE_CONFIG.slogan,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: [SITE_CONFIG.phone, SITE_CONFIG.phone2],
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address,
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.2631,
      longitude: 55.2972,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    knowsAbout: [
      "Interior Renovation & Construction",
      "Joinery & Custom Woodwork",
      "Mechanical & Electromechanical Services",
      "Plumbing & Sanitary Works",
    ],
    areaServed: {
      "@type": "Country",
      name: "AE",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "4",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Ahmed Al Maktoum" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Zeepro delivered exceptional mechanical works on our Dubai office development.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sarah Johnson" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "We've partnered with Zeepro for plumbing maintenance across our portfolio for over a year.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "David Chen" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Outstanding steel cladding installation on our commercial project.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
