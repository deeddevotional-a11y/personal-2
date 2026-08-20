import { Check } from "lucide-react";
import { siteConfig } from "../config";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const cfg = siteConfig;
  const paragraphs = cfg.bio.split("\n\n");

  return (
    <section id="about" className="bg-ivory py-16 sm:py-20 lg:py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              id="about-heading"
              eyebrow="The Practice"
              title={`About ${cfg.firstName}`}
            />
            <div className="mt-8 space-y-4 text-[17px] leading-relaxed text-ink-muted sm:text-lg">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <blockquote className="relative mt-10 border-l-2 border-gold-500 pl-6">
              <p className="font-display text-xl leading-snug text-forest-900 italic sm:text-2xl">
                “{cfg.philosophy}”
              </p>
              <footer className="mt-3 text-sm tracking-wide text-ink-muted">
                — {cfg.philosophyAttribution}
              </footer>
            </blockquote>

            <div className="mt-10">
              <h3 className="text-[11px] font-semibold tracking-[0.22em] text-gold-600 uppercase">
                Focus areas
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cfg.specializations.map((item) => (
                  <li
                    key={item}
                    className="border border-forest-800/15 bg-white px-3 py-1.5 text-sm text-forest-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={120}>
            <div className="relative mb-6 sm:mb-12">
              <img
                src={cfg.photos.office}
                alt={cfg.photos.officeAlt}
                className="aspect-[4/3] w-full object-cover"
                width={900}
                height={675}
              />
              <img
                src={cfg.photos.consultation}
                alt={cfg.photos.consultationAlt}
                className="absolute -bottom-5 right-4 hidden w-[42%] border-[6px] border-ivory object-cover shadow-lg sm:block"
                width={400}
                height={300}
              />
            </div>

            <div className="border border-forest-800/10 border-t-0 bg-white p-6 sm:p-8">
              <h3 className="font-display text-2xl font-semibold text-forest-900">
                Qualifications
              </h3>
              <ul className="mt-5 space-y-4">
                {cfg.qualifications.map((q) => (
                  <li key={q.title} className="flex gap-3">
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-gold-600"
                      aria-hidden
                    />
                    <div>
                      <p className="font-medium text-forest-900">{q.title}</p>
                      <p className="text-sm text-ink-muted">
                        {q.issuer}
                        <span className="text-gold-600"> · {q.year}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
