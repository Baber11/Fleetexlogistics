"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full border border-border-brand bg-background px-4 py-3.5 text-ink outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent/30";

  if (submitted) {
    return (
      <div className="border border-border-brand bg-surface-warm py-16 text-center">
        <p className="font-display text-3xl font-semibold text-ink">Thank you</p>
        <p className="mx-auto mt-3 max-w-sm text-sm text-muted">
          Your inquiry has been received. Our team will respond within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-2 block text-[0.7rem] uppercase tracking-[0.14em] text-muted">
            First Name
          </label>
          <input id="firstName" name="firstName" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-2 block text-[0.7rem] uppercase tracking-[0.14em] text-muted">
            Last Name
          </label>
          <input id="lastName" name="lastName" type="text" required className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-[0.7rem] uppercase tracking-[0.14em] text-muted">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="phone" className="mb-2 block text-[0.7rem] uppercase tracking-[0.14em] text-muted">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" className={inputClass} />
      </div>
      <div>
        <label htmlFor="service" className="mb-2 block text-[0.7rem] uppercase tracking-[0.14em] text-muted">
          Service
        </label>
        <select id="service" name="service" className={inputClass}>
          <option value="">Select a service</option>
          <option value="air">Air Freight</option>
          <option value="ocean">Ocean Freight</option>
          <option value="road">Road Freight</option>
          <option value="warehousing">Warehousing</option>
          <option value="customs">Customs Clearance</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-[0.7rem] uppercase tracking-[0.14em] text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Describe your shipment requirements..."
          className={`${inputClass} resize-none`}
        />
      </div>
      <Button type="submit" variant="primary">
        Send Inquiry
        <Send className="h-4 w-4" />
      </Button>
      <p className="text-xs text-muted">
        This form is for inquiry purposes only. No data is transmitted to a server.
      </p>
    </form>
  );
}
