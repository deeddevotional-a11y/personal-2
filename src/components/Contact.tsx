import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { siteConfig, whatsappUrl } from "../config";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { cn } from "../utils/cn";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  const digits = values.phone.replace(/[\s-]/g, "");
  if (!/^(\+91)?[6-9]\d{9}$/.test(digits)) {
    errors.phone = "Enter a 10-digit Indian mobile number.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "A little more detail helps — at least a sentence.";
  }
  return errors;
}

export default function Contact() {
  const cfg = siteConfig;
  const [values, setValues] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [attempted, setAttempted] = useState(false);

  function set<K extends keyof FormState>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setAttempted(true);
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  }

  const fieldClass =
    "min-h-12 w-full border border-forest-800/15 bg-ivory px-4 text-[16px] text-ink outline-none transition-colors placeholder:text-ink-muted/50 focus:border-gold-500 focus:bg-white";

  return (
    <section
      id="contact"
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="contact-heading"
            eyebrow="Start a conversation"
            title="Contact & bookings"
            subtitle={cfg.cta.complimentaryNote}
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Form */}
          <Reveal className="lg:col-span-6">
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="flex h-full flex-col items-start justify-center border border-gold-500/40 bg-ivory p-8 sm:p-10"
              >
                <CheckCircle2 className="text-forest-700" size={36} aria-hidden />
                <h3 className="mt-4 font-display text-2xl font-semibold text-forest-900">
                  Enquiry received
                </h3>
                <p className="mt-3 max-w-md text-ink-muted">{cfg.cta.formSuccess}</p>
                <button
                  type="button"
                  className="mt-6 text-sm font-semibold text-forest-800 underline underline-offset-4"
                  onClick={() => {
                    setSubmitted(false);
                    setValues(EMPTY);
                    setAttempted(false);
                    setErrors({});
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                className="border border-forest-800/10 bg-white p-5 sm:p-8"
              >
                <h3 className="font-display text-2xl font-semibold text-forest-900">
                  Write to the office
                </h3>
                <p className="mt-1 text-sm text-ink-muted">
                  All fields required. We never share your details.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-forest-900">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={values.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={cn(fieldClass, errors.name && attempted && "border-red-700")}
                      aria-invalid={Boolean(errors.name && attempted)}
                      aria-describedby={errors.name && attempted ? "err-name" : undefined}
                    />
                    {errors.name && attempted ? (
                      <p id="err-name" className="mt-1 text-sm text-red-800">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-forest-900">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={(e) => set("email", e.target.value)}
                      className={cn(fieldClass, errors.email && attempted && "border-red-700")}
                      aria-invalid={Boolean(errors.email && attempted)}
                      aria-describedby={errors.email && attempted ? "err-email" : undefined}
                    />
                    {errors.email && attempted ? (
                      <p id="err-email" className="mt-1 text-sm text-red-800">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-forest-900">
                      Mobile
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="98765 43210"
                      value={values.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      className={cn(fieldClass, errors.phone && attempted && "border-red-700")}
                      aria-invalid={Boolean(errors.phone && attempted)}
                      aria-describedby={errors.phone && attempted ? "err-phone" : undefined}
                    />
                    {errors.phone && attempted ? (
                      <p id="err-phone" className="mt-1 text-sm text-red-800">
                        {errors.phone}
                      </p>
                    ) : null}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-forest-900">
                      Matter (optional)
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={values.service}
                      onChange={(e) => set("service", e.target.value)}
                      className={cn(fieldClass, "appearance-none")}
                    >
                      <option value="">Select a service…</option>
                      {cfg.services.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other">Other / not sure</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-forest-900">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={(e) => set("message", e.target.value)}
                      className={cn(
                        fieldClass,
                        "min-h-[8.5rem] resize-y py-3",
                        errors.message && attempted && "border-red-700",
                      )}
                      aria-invalid={Boolean(errors.message && attempted)}
                      aria-describedby={errors.message && attempted ? "err-message" : undefined}
                    />
                    {errors.message && attempted ? (
                      <p id="err-message" className="mt-1 text-sm text-red-800">
                        {errors.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center bg-forest-900 px-6 text-sm font-semibold tracking-wide text-ivory transition-colors hover:bg-forest-800 sm:w-auto"
                >
                  {cfg.cta.formSubmit}
                </button>
              </form>
            )}
          </Reveal>

          {/* Details + map */}
          <Reveal className="lg:col-span-6" delay={100}>
            <div className="grid gap-5 sm:grid-cols-2">
              <a
                href={cfg.contact.phoneHref}
                className="flex min-h-12 items-start gap-3 border border-forest-800/10 bg-ivory p-5 transition-colors hover:border-gold-500"
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-gold-600" aria-hidden />
                <span>
                  <span className="block text-xs tracking-[0.16em] text-ink-muted uppercase">
                    Call
                  </span>
                  <span className="font-medium text-forest-900">{cfg.contact.phone}</span>
                </span>
              </a>
              <a
                href={`mailto:${cfg.contact.email}`}
                className="flex min-h-12 items-start gap-3 border border-forest-800/10 bg-ivory p-5 transition-colors hover:border-gold-500"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-gold-600" aria-hidden />
                <span>
                  <span className="block text-xs tracking-[0.16em] text-ink-muted uppercase">
                    Email
                  </span>
                  <span className="font-medium break-all text-forest-900">
                    {cfg.contact.email}
                  </span>
                </span>
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-start gap-3 border border-forest-800/10 bg-ivory p-5 transition-colors hover:border-gold-500 sm:col-span-2"
              >
                <MessageCircle size={18} className="mt-0.5 shrink-0 text-gold-600" aria-hidden />
                <span>
                  <span className="block text-xs tracking-[0.16em] text-ink-muted uppercase">
                    WhatsApp
                  </span>
                  <span className="font-medium text-forest-900">
                    Message {cfg.firstName} on WhatsApp — usually the fastest reply.
                  </span>
                </span>
              </a>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="border border-forest-800/10 p-5">
                <div className="flex items-center gap-2 text-forest-900">
                  <MapPin size={16} className="text-gold-600" aria-hidden />
                  <h3 className="text-xs font-semibold tracking-[0.16em] uppercase">
                    Chambers
                  </h3>
                </div>
                <address className="mt-3 text-[15.5px] leading-relaxed text-ink-muted not-italic">
                  {cfg.contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <a
                  href={cfg.contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-forest-800 underline underline-offset-4"
                >
                  Open in Maps
                </a>
              </div>

              <div className="border border-forest-800/10 p-5">
                <div className="flex items-center gap-2 text-forest-900">
                  <Clock size={16} className="text-gold-600" aria-hidden />
                  <h3 className="text-xs font-semibold tracking-[0.16em] uppercase">
                    Working hours
                  </h3>
                </div>
                <ul className="mt-3 space-y-2 text-[15.5px]">
                  {cfg.contact.workingHours.map((row) => (
                    <li key={row.days} className="flex flex-col">
                      <span className="font-medium text-forest-900">{row.days}</span>
                      <span className="text-ink-muted">{row.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5 overflow-hidden border border-forest-800/10">
              <iframe
                title={`Map showing ${cfg.practiceName}, ${cfg.location}`}
                src={cfg.contact.mapEmbedUrl}
                className="h-64 w-full grayscale contrast-[1.05] lg:h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
