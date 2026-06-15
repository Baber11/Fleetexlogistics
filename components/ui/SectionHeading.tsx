interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  number?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  number,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-14 max-w-3xl ${alignClass}`}>
      {(eyebrow || number) && (
        <div
          className={`mb-5 flex items-center gap-4 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          {number && (
            <span
              className={`font-display text-4xl font-light leading-none ${
                light ? "text-champagne/60" : "text-champagne"
              }`}
            >
              {number}
            </span>
          )}
          {eyebrow && (
            <p
              className={`text-[0.7rem] font-medium uppercase tracking-[0.2em] ${
                light ? "text-champagne" : "text-accent"
              }`}
            >
              {eyebrow}
            </p>
          )}
        </div>
      )}
      <h2
        className={`font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/75" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
      <div className={`editorial-rule mt-8 ${align === "center" ? "mx-auto w-24" : "w-16"}`} />
    </div>
  );
}
