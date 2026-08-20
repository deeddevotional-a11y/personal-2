import { cn } from "../utils/cn";

interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
}

export default function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  light = false,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-2xl text-center")}>
      <p
        className={cn(
          "mb-3 text-[11px] font-semibold tracking-[0.28em] uppercase sm:text-xs",
          light ? "text-gold-400" : "text-gold-600",
        )}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "font-display text-[2rem] leading-[1.15] font-semibold tracking-tight sm:text-4xl md:text-5xl",
          light ? "text-ivory" : "text-forest-900",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed sm:text-lg",
            light ? "text-ivory/75" : "text-ink-muted",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
