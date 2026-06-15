import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "light";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-white hover:bg-ink-soft border border-ink",
  secondary:
    "bg-accent text-white hover:bg-accent-deep border border-accent",
  outline:
    "border border-ink/25 text-ink bg-transparent hover:border-ink hover:bg-ink hover:text-white",
  ghost:
    "text-ink hover:text-accent bg-transparent",
  light:
    "bg-white text-ink hover:bg-surface-warm border border-white/20",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[0.8rem] font-medium uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
