import { siteConfig, whatsappUrl } from "../config";

export default function Footer() {
  const cfg = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 pb-24 text-ivory lg:pb-0">
      <div className="gold-rule" aria-hidden />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-5">
          <p className="font-display text-2xl font-semibold tracking-wide">
            {cfg.practiceName}
          </p>
          <p className="mt-1 text-sm tracking-[0.18em] text-gold-400 uppercase">
            {cfg.professionType}
          </p>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ivory/65">
            {cfg.valueProposition}
          </p>
          <p className="mt-5 text-sm text-ivory/55">
            {cfg.social.registrationLabel}:{" "}
            <span className="text-gold-300">{cfg.social.registrationNumber}</span>
          </p>
        </div>

        <nav className="md:col-span-3" aria-label="Footer">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-gold-400 uppercase">
            On this page
          </p>
          <ul className="mt-4 space-y-2">
            {cfg.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-[15px] text-ivory/75 transition-colors hover:text-gold-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-gold-400 uppercase">
            Chambers
          </p>
          <address className="mt-4 text-[15px] leading-relaxed text-ivory/75 not-italic">
            {cfg.contact.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <div className="mt-4 flex flex-col gap-1 text-[15px]">
            <a
              href={cfg.contact.phoneHref}
              className="inline-flex min-h-11 items-center text-ivory/80 hover:text-gold-400"
            >
              {cfg.contact.phone}
            </a>
            <a
              href={`mailto:${cfg.contact.email}`}
              className="inline-flex min-h-11 items-center text-ivory/80 hover:text-gold-400"
            >
              {cfg.contact.email}
            </a>
          </div>
          <div className="mt-3 flex gap-3">
            <a
              href={cfg.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-ivory/20 text-ivory/80 transition-colors hover:border-gold-400 hover:text-gold-400"
              aria-label="LinkedIn profile"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
              </svg>
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center border border-ivory/20 px-3 text-sm text-ivory/80 transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {cfg.practiceName}. {cfg.professionName}. All rights reserved.
          </p>
          <p>
            Professional services are provided subject to engagement terms. This
            website does not constitute legal or tax advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
