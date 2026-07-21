"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { JOB_LISTINGS } from "@/data/jobs";

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  trade?: string;
  message?: string;
}

export function ApplicationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [trade, setTrade] = useState("");
  const [customTrade, setCustomTrade] = useState("");
  const [experience, setExperience] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const trades = [...new Set(JOB_LISTINGS.map((j) => j.trade)), "Others"];

  const validate = (): FieldErrors => {
    const errs: FieldErrors = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!phone.trim()) errs.phone = "Phone number is required";
    if (!trade) errs.trade = "Please select a trade";
    if (trade === "Others" && !customTrade.trim()) errs.trade = "Please specify your trade";
    if (!message.trim()) {
      errs.message = "Please tell us about yourself";
    } else if (message.trim().length < 10) {
      errs.message = "Please provide at least 10 characters";
    }
    return errs;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setTouched({ name: true, email: true, phone: true, trade: true, message: true });
    if (errs.name || errs.email || errs.phone || errs.trade || errs.message) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          trade: trade === "Others" ? customTrade : trade,
          experience: experience.trim(),
          message: message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setIsSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setTrade("");
      setCustomTrade("");
      setExperience("");
      setMessage("");
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-background p-12 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle2 className="size-8 text-accent" aria-hidden="true" />
        </div>
        <h2 className="mt-6 text-xl font-bold text-foreground">
          Application Received
        </h2>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Thank you for your interest. We will review your application and
          contact you if a suitable position becomes available.
        </p>
        <Button
          variant="outline"
          className="mt-8"
          onClick={() => setIsSubmitted(false)}
        >
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="rounded-xl border border-border bg-background p-6 sm:p-8">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Join Our Team
          </p>
          <h2 className="mt-1 text-2xl font-bold text-foreground">
            Send Your Application
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Don&apos;t see a suitable role? Submit your details and we&apos;ll
            keep your application on file for future openings.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="app-name">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="app-name"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => handleBlur("name")}
              aria-invalid={!!errors.name}
              className="h-10"
            />
            {touched.name && errors.name && (
              <p className="text-xs text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="app-email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="app-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => handleBlur("email")}
                aria-invalid={!!errors.email}
                className="h-10"
              />
              {touched.email && errors.email && (
                <p className="text-xs text-destructive">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="app-phone">
                Phone <span className="text-destructive">*</span>
              </Label>
              <Input
                id="app-phone"
                type="tel"
                placeholder="+971 50 000 0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={() => handleBlur("phone")}
                aria-invalid={!!errors.phone}
                className="h-10"
              />
              {touched.phone && errors.phone && (
                <p className="text-xs text-destructive">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="app-trade">
                Preferred Trade <span className="text-destructive">*</span>
              </Label>
              <select
                id="app-trade"
                value={trade}
                onChange={(e) => {
                  setTrade(e.target.value);
                  setTouched((prev) => ({ ...prev, trade: true }));
                  setErrors((prev) => ({ ...prev, trade: undefined }));
                }}
                onBlur={() => handleBlur("trade")}
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Select a trade</option>
                {trades.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {trade === "Others" && (
                <Input
                  id="app-custom-trade"
                  placeholder="Specify your trade..."
                  value={customTrade}
                  onChange={(e) => setCustomTrade(e.target.value)}
                  onBlur={() => handleBlur("trade")}
                  className="h-10"
                />
              )}
              {touched.trade && errors.trade && (
                <p className="text-xs text-destructive">{errors.trade}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="app-experience">Years of Experience</Label>
              <Input
                id="app-experience"
                type="number"
                min={0}
                placeholder="e.g. 5"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="h-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="app-message">
              About You <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="app-message"
              placeholder="Tell us about your skills, certifications, and availability..."
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={() => handleBlur("message")}
              aria-invalid={!!errors.message}
            />
            {touched.message && errors.message && (
              <p className="text-xs text-destructive">{errors.message}</p>
            )}
          </div>
        </div>

        {submitError && (
          <p className="mt-4 text-sm text-destructive">{submitError}</p>
        )}

        <Button
          type="submit"
          size="lg"
          className="mt-6 gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="size-4" aria-hidden="true" />
              Submit Application
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
