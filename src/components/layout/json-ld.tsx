import { SITE_CONFIG } from "@/lib/constants";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    logo: "/zeepro_logo.png",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address,
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
