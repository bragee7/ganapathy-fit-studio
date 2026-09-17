type SectionHeadingProps = {
  index: string;
  kicker: string;
  title: React.ReactNode;
  label?: string;
  dark?: boolean;
};

export default function SectionHeading({
  index,
  kicker,
  title,
  label,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-14">
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span
          className={`micro-label ${dark ? "text-ink" : "text-lime"}`}
        >
          {index} / {kicker}
        </span>
        {label ? (
          <span
            className={`micro-label border px-2 py-1 ${
              dark ? "border-ink/30 text-ink/70" : "border-white/20 text-white/55"
            }`}
          >
            {label}
          </span>
        ) : null}
      </div>
      <h2
        className={`font-display text-section-title uppercase ${
          dark ? "text-ink" : "text-white"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
