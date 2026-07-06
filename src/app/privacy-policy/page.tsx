import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: [Date pending]
      </p>

      {/* TODO: [Legal/Client] Provide complete Privacy Policy text */}
      <div className="mt-8 space-y-6 text-muted-foreground">
        <p>
          This Privacy Policy describes how Zeepro collects, uses, and
          protects your personal information when you use our website and
          services.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            1. Information We Collect
          </h2>
          <p className="mt-2">
            We collect information you provide directly to us, such as your
            name, email address, phone number, and company name when you submit
            our contact form.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            2. How We Use Your Information
          </h2>
          <p className="mt-2">
            We use the information we collect to respond to your inquiries,
            provide our services, and communicate with you about your projects.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            3. Data Protection
          </h2>
          <p className="mt-2">
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            4. Contact Us
          </h2>
          <p className="mt-2">
            If you have any questions about this Privacy Policy, please contact
            us using the information provided on our Contact page.
          </p>
        </section>

        <p className="border-t border-border pt-6 text-xs italic text-muted-foreground/60">
          Full Privacy Policy text pending client legal review and approval.
        </p>
      </div>
    </div>
  );
}
