"use client";

import { Briefcase, MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { ApplicationForm } from "@/components/careers/application-form";
import { JOB_LISTINGS } from "@/data/jobs";

function JobCard({ job }: { job: (typeof JOB_LISTINGS)[number] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-xl border border-border bg-background p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-foreground">{job.title}</h3>
          <p className="mt-1 text-sm text-accent">{job.trade}</p>
        </div>
        <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
          {job.type}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <MapPin className="size-3.5" aria-hidden="true" />
          {job.location}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="size-3.5" aria-hidden="true" />
          {job.type}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {job.description}
      </p>

      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
      >
        {expanded ? "Hide requirements" : "View requirements"}
        {expanded ? (
          <ChevronUp className="size-4" />
        ) : (
          <ChevronDown className="size-4" />
        )}
      </button>

      {expanded && (
        <ul className="mt-3 space-y-1.5 border-t border-border pt-3">
          {job.requirements.map((req) => (
            <li
              key={req}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-accent" />
              {req}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function CareersPage() {
  return (
    <>
      <section className="relative flex min-h-[400px] items-center overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-accent)/3%,transparent_50%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            Careers
          </p>
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Build Your Career with Zeepro
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Join a licensed contractor delivering mechanical, plumbing,
            interior finishing, and joinery services across the UAE. We are
            always looking for skilled tradespeople and professionals.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-muted/50 py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent)/3%,transparent_50%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Left column: Text + Job Listings */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground">
                  Open Positions
                </h2>
                <p className="mt-2 text-muted-foreground">
                  We are currently hiring for the following roles across our
                  UAE operations. If you are a skilled professional looking for
                  your next opportunity, we would like to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                {JOB_LISTINGS.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-dashed border-border bg-background/50 p-6">
                <div className="flex items-start gap-3">
                  <Briefcase
                    className="mt-0.5 size-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      No Suitable Role?
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      We are always interested in hearing from skilled
                      professionals. Use the form on the right to send us your
                      details and we will keep your application on file for
                      future openings that match your experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Application Form */}
            <div>
              <ApplicationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
