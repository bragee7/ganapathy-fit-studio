type BadgeProps = {
  children: React.ReactNode;
  tone?: "lime" | "dark" | "outline";
  className?: string;
};

const tones = {
  lime: "bg-lime text-ink",
  dark: "bg-coal text-white border border-white/10",
  outline: "border border-white/20 text-white/80",
};

export default function Badge({
  children,
  tone = "outline",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
