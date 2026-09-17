import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "lime" | "outline" | "ink";
  className?: string;
  external?: boolean;
};

const variants = {
  lime: "bg-lime text-ink hover:bg-white",
  outline: "border border-white/25 text-white hover:border-lime hover:text-lime",
  ink: "bg-ink text-white hover:bg-coal",
};

export default function Button({
  children,
  href,
  variant = "lime",
  className = "",
  external = false,
}: ButtonProps) {
  const cls = `inline-flex min-h-[44px] items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
