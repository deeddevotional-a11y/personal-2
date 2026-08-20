import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Building2,
  Calculator,
  Compass,
  FileSearch,
  HeartPulse,
  Landmark,
  LineChart,
  Scale,
  ScrollText,
  Stethoscope,
  Users,
} from "lucide-react";
import { siteConfig, type ServiceIcon } from "../config";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ICONS: Record<ServiceIcon, LucideIcon> = {
  calculator: Calculator,
  fileSearch: FileSearch,
  landmark: Landmark,
  lineChart: LineChart,
  scrollText: ScrollText,
  users: Users,
  stethoscope: Stethoscope,
  scale: Scale,
  briefcase: Briefcase,
  building: Building2,
  heartPulse: HeartPulse,
  compass: Compass,
};

export default function Services() {
  const { services, firstName } = siteConfig;

  return (
    <section
      id="services"
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="services-heading"
            eyebrow="How I can help"
            title="Services"
            subtitle={`A focused practice — not a supermarket. If the work sits outside ${firstName}'s desk, she will say so and point you to someone who does it well.`}
          />
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Briefcase;
            return (
              <Reveal key={service.title} delay={i * 70} as="li">
                <article className="group flex h-full flex-col border border-forest-800/10 bg-ivory p-6 transition-colors duration-300 hover:border-gold-500/60 hover:bg-white sm:p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center border border-gold-500/40 bg-white text-forest-800 transition-colors group-hover:border-gold-500 group-hover:bg-forest-900 group-hover:text-gold-400">
                    <Icon size={20} strokeWidth={1.6} aria-hidden />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-forest-900 sm:text-[1.35rem]">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15.5px] leading-relaxed text-ink-muted">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
