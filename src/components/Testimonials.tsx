import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { siteConfig } from "../config";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { cn } from "../utils/cn";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-gold-500 text-gold-500" : "text-ivory-dark"}
          aria-hidden
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { testimonials, firstName } = siteConfig;
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[index];

  return (
    <section
      id="testimonials"
      className="bg-ivory py-16 sm:py-20 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Client words"
            title="What they say"
            subtitle={`A practice is only as good as the people who stay. These are long relationships, not one-season filings.`}
          />
        </Reveal>

        {/* Mobile / tablet carousel */}
        <Reveal className="mt-12 lg:hidden">
          <article className="border border-forest-800/10 bg-white p-6 sm:p-8">
            <Stars rating={t.rating} />
            <blockquote className="mt-5 font-display text-xl leading-snug text-forest-900 italic sm:text-2xl">
              “{t.quote}”
            </blockquote>
            <footer className="mt-6">
              <p className="font-semibold text-forest-900">{t.name}</p>
              <p className="text-sm text-ink-muted">{t.role}</p>
            </footer>
          </article>

          <div className="mt-5 flex items-center justify-between">
            <p className="text-sm text-ink-muted">
              {index + 1} / {testimonials.length}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                className="inline-flex min-h-11 min-w-11 items-center justify-center border border-forest-800/20 text-forest-800 transition-colors hover:border-gold-500 hover:text-gold-600"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={next}
                className="inline-flex min-h-11 min-w-11 items-center justify-center border border-forest-800/20 text-forest-800 transition-colors hover:border-gold-500 hover:text-gold-600"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Desktop grid */}
        <ul className="mt-12 hidden gap-6 lg:grid lg:grid-cols-2">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 80} as="li">
              <article
                className={cn(
                  "flex h-full flex-col border border-forest-800/10 bg-white p-8",
                  i === 0 && "lg:col-span-2 lg:flex-row lg:gap-10 lg:p-10",
                )}
              >
                <div className={cn(i === 0 && "lg:flex-1")}>
                  <Stars rating={item.rating} />
                  <blockquote
                    className={cn(
                      "mt-5 font-display leading-snug text-forest-900 italic",
                      i === 0 ? "text-2xl xl:text-3xl" : "text-xl",
                    )}
                  >
                    “{item.quote}”
                  </blockquote>
                </div>
                <footer
                  className={cn(
                    "mt-6",
                    i === 0 && "lg:mt-0 lg:flex lg:w-56 lg:shrink-0 lg:flex-col lg:justify-end lg:border-l lg:border-forest-800/10 lg:pl-8",
                  )}
                >
                  <p className="font-semibold text-forest-900">{item.name}</p>
                  <p className="text-sm text-ink-muted">{item.role}</p>
                  <p className="mt-2 text-xs tracking-wide text-gold-600 uppercase">
                    Client of {firstName}
                  </p>
                </footer>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
