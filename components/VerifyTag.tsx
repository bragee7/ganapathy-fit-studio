type VerifyTagProps = {
  label: string;
  tone?: "default" | "onLime";
  className?: string;
};

export default function VerifyTag({
  label,
  tone = "default",
  className = "",
}: VerifyTagProps) {
  const styles =
    tone === "onLime"
      ? "border-ink/30 text-ink/80"
      : "border-white/20 text-white/60";
  return (
    <span
      className={`micro-label inline-block border px-2 py-1 leading-relaxed ${styles} ${className}`}
      role="note"
    >
      {label}
    </span>
  );
}
