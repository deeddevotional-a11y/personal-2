import { Award, Building2, Medal, ShieldCheck } from "lucide-react";
import { siteConfig } from "../config";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Credentials() {
  const cfg = siteConfig;

  return (
    <section
      id="credentials"
      className="relative bg-forest-900 py-16 text-ivory sm:py-20 lg:py-24"
      aria-labelledby="credentials-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="credentials-heading"
            eyebrow="Why this practice"
            title="Credentials & standing"
            subtitle="The letters after the name matter. So does turning up — in assessments, at the bank, and when a notice arrives on a Friday evening."
            light
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-gold-400" size={22} aria-hidden />
              <h3 className="font-display text-2xl font-semibold text-ivory">
                Certifications
              </h3>
            </div>
            <ul className="mt-6 space-y-3">
              {cfg.certifications.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-ivory/10 py-3 last:border-0"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-500"
                    aria-hidden
                  />
                  <span className="text-[16px] text-ivory/85">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex items-center gap-3">
              <Building2 className="text-gold-400" size={22} aria-hidden />
              <h3 className="font-display text-2xl font-semibold text-ivory">
                Affiliations
              </h3>
            </div>
            <ul className="mt-6 space-y-3">
              {cfg.affiliations.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-ivory/10 py-3 last:border-0"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-500"
                    aria-hidden
                  />
                  <span className="text-[16px] text-ivory/85">{item}</span>
                </li>
              ))}
            </ul>

            {cfg.awards.length > 0 ? (
              <div className="mt-10">
                <div className="flex items-center gap-3">
                  <Medal className="text-gold-400" size={20} aria-hidden />
                  <h3 className="font-display text-xl font-semibold text-ivory">
                    Recognition
                  </h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {cfg.awards.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ivory/80">
                      <Award
                        size={16}
                        className="mt-1 shrink-0 text-gold-500"
                        aria-hidden
                      />
                      <span className="text-[15.5px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Reveal>
        </div>

        <Reveal delay={80}>
          <aside className="mt-14 grid gap-px overflow-hidden border border-gold-500/25 bg-gold-500/10 sm:grid-cols-3">
            <p className="bg-forest-900/40 px-6 py-5 text-sm leading-relaxed text-ivory/80">
              <span className="block font-display text-lg text-gold-300">
                {cfg.social.registrationLabel}
              </span>
              {cfg.social.registrationNumber} — verify on the ICAI member directory.
            </p>
            <p className="bg-forest-900/40 px-6 py-5 text-sm leading-relaxed text-ivory/80">
              <span className="block font-display text-lg text-gold-300">
                Independent practice
              </span>
              No product commissions. Advice is advice, not a distribution channel.
            </p>
            <p className="bg-forest-900/40 px-6 py-5 text-sm leading-relaxed text-ivory/80">
              <span className="block font-display text-lg text-gold-300">
                Direct access
              </span>
              Clients speak to {cfg.firstName} — not a rotating associate who left last quarter.
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
