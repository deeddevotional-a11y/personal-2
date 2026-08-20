import { ArrowRight, BadgeCheck, MapPin } from "lucide-react";
import { siteConfig, whatsappUrl } from "../config";

export default function Hero() {
  const cfg = siteConfig;

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-forest-950 pt-16 text-ivory sm:pt-[4.5rem]"
      aria-labelledby="hero-heading"
    >
      {/* Quiet radial wash — not a gradient template look */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-forest-700/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-20">
        <div className="lg:col-span-7">
          <p className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-semibold tracking-[0.22em] text-gold-400 uppercase sm:text-xs">
            <span>{cfg.professionType}</span>
            <span className="hidden h-3 w-px bg-gold-500/50 sm:block" aria-hidden />
            <span className="inline-flex items-center gap-1.5 font-sans tracking-[0.14em] normal-case">
              <MapPin size={12} aria-hidden />
              {cfg.location}
            </span>
          </p>

          <h1
            id="hero-heading"
            className="font-display text-[2.35rem] leading-[1.08] font-semibold tracking-tight text-ivory sm:text-5xl md:text-6xl lg:text-[4.15rem]"
          >
            {cfg.professionName}
          </h1>

          <p className="mt-3 text-sm tracking-wide text-gold-300/90 sm:text-base">
            {cfg.credentialsLine}
          </p>

          <p className="mt-6 max-w-xl font-display text-xl leading-snug text-ivory/90 italic sm:text-2xl md:text-[1.65rem]">
            {cfg.tagline}
          </p>

          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ivory/70 sm:text-[17px]">
            {cfg.valueProposition}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-gold-500 px-6 text-sm font-semibold tracking-wide text-forest-950 transition-colors hover:bg-gold-400"
            >
              {cfg.cta.primary}
              <ArrowRight size={16} aria-hidden />
            </a>
            <a
              href={cfg.contact.phoneHref}
              className="inline-flex min-h-12 items-center justify-center border border-ivory/25 px-6 text-sm font-semibold tracking-wide text-ivory transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              {cfg.cta.secondary}
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center px-2 text-sm font-medium text-ivory/70 underline-offset-4 transition-colors hover:text-gold-400 hover:underline sm:ml-1"
            >
              WhatsApp
            </a>
          </div>

          <p className="mt-5 max-w-lg text-sm text-ivory/55">
            {cfg.cta.complimentaryNote}
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="photo-frame mx-auto mb-6 max-w-sm lg:mb-2 lg:ml-auto lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden bg-forest-800">
              <img
                src={cfg.photos.profile}
                alt={cfg.photos.profileAlt}
                className="h-full w-full object-cover object-top"
                width={720}
                height={900}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-forest-950/50 via-transparent to-transparent"
              />
            </div>
            <div className="absolute -bottom-3 left-4 right-4 z-10 flex items-center gap-2 border border-gold-500/30 bg-forest-900/95 px-4 py-3 backdrop-blur-sm sm:left-6 sm:right-auto">
              <BadgeCheck size={18} className="shrink-0 text-gold-400" aria-hidden />
              <p className="text-xs leading-snug text-ivory/90 sm:text-sm">
                <span className="font-semibold text-gold-300">{cfg.professionBadge}</span>
                <span className="text-ivory/60"> · {cfg.social.registrationNumber}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="border-t border-ivory/10">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-ivory/10 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {cfg.stats.map((stat) => (
            <div key={stat.label} className="px-4 py-6 text-center sm:px-6 sm:py-8">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-semibold text-gold-400 sm:text-4xl">
                {stat.value}
              </dd>
              <p className="mt-1 text-[11px] leading-snug tracking-wide text-ivory/60 uppercase sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
