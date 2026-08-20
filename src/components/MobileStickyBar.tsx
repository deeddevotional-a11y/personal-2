import { CalendarDays, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "../config";

/** Thumb-friendly booking bar — mobile and tablet only. */
export default function MobileStickyBar() {
  const cfg = siteConfig;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-forest-800/20 bg-ivory/95 shadow-[0_-8px_24px_rgba(11,36,28,0.12)] backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-3 gap-px bg-forest-800/10 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <a
          href={cfg.contact.phoneHref}
          className="flex min-h-12 flex-col items-center justify-center gap-0.5 bg-white text-forest-900"
        >
          <Phone size={18} aria-hidden />
          <span className="text-[11px] font-semibold tracking-wide">Call</span>
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 flex-col items-center justify-center gap-0.5 bg-white text-forest-900"
        >
          <MessageCircle size={18} aria-hidden />
          <span className="text-[11px] font-semibold tracking-wide">WhatsApp</span>
        </a>
        <a
          href="#contact"
          className="flex min-h-12 flex-col items-center justify-center gap-0.5 bg-gold-500 text-forest-950"
        >
          <CalendarDays size={18} aria-hidden />
          <span className="text-[11px] font-semibold tracking-wide">
            {cfg.cta.stickyBook}
          </span>
        </a>
      </div>
    </div>
  );
}
