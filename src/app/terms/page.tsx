import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Terms &amp; Conditions
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: July 7, 2026
      </p>

      <div className="mt-8 space-y-6 text-muted-foreground">
        <p>
          These Terms and Conditions govern your use of the Zeepro website and
          the services we provide.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            1. Acceptance of Terms
          </h2>
          <p className="mt-2">
            By accessing or using this website, you agree to be bound by these
            Terms and Conditions. If you do not agree, please do not use our
            website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            2. Services
          </h2>
          <p className="mt-2">
            Zeepro provides construction, renovation, and maintenance services
            in the United Arab Emirates. All service agreements are governed by
            separate contracts executed between Zeepro and its partners.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            3. Website Use
          </h2>
          <p className="mt-2">
            You agree to use this website for lawful purposes only and in a
            manner that does not infringe the rights of others.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            4. Limitation of Liability
          </h2>
          <p className="mt-2">
            Zeepro shall not be liable for any indirect, incidental, or
            consequential damages arising from your use of this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            5. Governing Law
          </h2>
          <p className="mt-2">
            These terms are governed by the laws of the United Arab Emirates.
          </p>
        </section>

      </div>
    </div>
  );
}
