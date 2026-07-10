"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot detected"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const SERVICE_OPTIONS = [
  { value: "", label: "Select a service..." },
  {
    value: "mechanical-electromechanical",
    label: "Mechanical & Electromechanical",
  },
  { value: "plumbing-sanitary", label: "Plumbing & Sanitary Works" },
  {
    value: "interior-finishing",
    label: "Interior Finishing & Renovation",
  },
  { value: "steel-cladding", label: "Steel & Cladding Solutions" },
  { value: "general", label: "General Inquiry" },
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitError(null);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setIsSubmitted(true);
      reset();
    } catch {
      setSubmitError("Something went wrong. Please try again or contact us directly.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-background p-12 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle2 className="size-8 text-accent" aria-hidden="true" />
        </div>
        <h2 className="mt-6 text-xl font-bold text-foreground">Thank You</h2>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Your inquiry has been received. A member of the Zeepro team will
          review your message and get back to you promptly.
        </p>
        <Button
          variant="outline"
          className="mt-8"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label htmlFor="honeypot">Leave this empty</label>
        <input
          id="honeypot"
          {...register("honeypot")}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="rounded-xl border border-border bg-background p-6 sm:p-8">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Get Started
          </p>
          <h2 className="mt-1 text-2xl font-bold text-foreground">
            Send an Inquiry
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Your full name"
              {...register("name")}
              aria-invalid={!!errors.name}
              className="h-10"
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">
              Company <span className="text-destructive">*</span>
            </Label>
            <Input
              id="company"
              placeholder="Your company name"
              {...register("company")}
              aria-invalid={!!errors.company}
              className="h-10"
            />
            {errors.company && (
              <p className="text-xs text-destructive">
                {errors.company.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="email@company.com"
              {...register("email")}
              aria-invalid={!!errors.email}
              className="h-10"
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+971 XX XXX XXXX"
              {...register("phone")}
              aria-invalid={!!errors.phone}
              className="h-10"
            />
            {errors.phone && (
              <p className="text-xs text-destructive">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="service">
              Service Interest <span className="text-destructive">*</span>
            </Label>
            <select
              id="service"
              className="flex h-10 w-full min-w-0 rounded-lg border border-input bg-transparent px-3 py-2 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30"
              {...register("service")}
              aria-invalid={!!errors.service}
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-xs text-destructive">
                {errors.service.message}
              </p>
            )}
          </div>

          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="message">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project or requirements..."
              rows={5}
              {...register("message")}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p className="text-xs text-destructive">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>

        {submitError && (
          <p className="mt-4 text-sm text-destructive">{submitError}</p>
        )}

        <Button
          type="submit"
          size="lg"
          className="mt-4 gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              <Send className="size-4" aria-hidden="true" />
              Send Inquiry
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
