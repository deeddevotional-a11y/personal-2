import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../config";
import { cn } from "../utils/cn";

export default function Header() {
  const { professionName, practiceName, professionType, nav, cta } = siteConfig;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const initials = professionName
    .replace(/^CA\s+/i, "")
    .split(" ")
    .filter((w) => w.length > 1 && !w.endsWith("."))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-forest-950/95 shadow-[0_1px_0_0_rgba(196,160,53,0.18)] backdrop-blur-md"
          : "bg-forest-950/70 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex min-h-11 items-center gap-3"
          aria-label={`${practiceName} — home`}
        >
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold-500/70 font-display text-sm font-semibold tracking-wider text-gold-400"
            aria-hidden
          >
            {initials}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-wide text-ivory sm:text-lg">
              {practiceName}
            </span>
            <span className="hidden text-[10px] tracking-[0.18em] text-gold-400/90 uppercase sm:block">
              {professionType}
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="min-h-11 px-3 py-2 text-[13px] font-medium tracking-wide text-ivory/80 transition-colors hover:text-gold-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden min-h-11 items-center bg-gold-500 px-5 text-[13px] font-semibold tracking-wide text-forest-950 transition-colors hover:bg-gold-400 md:inline-flex"
          >
            {cta.primary}
          </a>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-ivory lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} strokeWidth={1.75} /> : <Menu size={24} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 top-16 z-40 bg-forest-950/98 sm:top-[4.5rem] lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          className="flex h-full flex-col px-6 pt-6 pb-28"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-ivory/10 py-4 font-display text-3xl text-ivory transition-colors hover:text-gold-400"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex min-h-12 items-center justify-center bg-gold-500 px-6 text-sm font-semibold tracking-wide text-forest-950"
          >
            {cta.primary}
          </a>
        </nav>
      </div>
    </header>
  );
}
