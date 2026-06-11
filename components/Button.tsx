import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "light";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  ariaLabel?: string;
};

const baseClasses =
  "inline-flex min-h-12 max-w-full items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-purple text-white shadow-soft hover:bg-purple-dark",
  secondary:
    "border border-border bg-surface text-ink hover:border-purple hover:text-purple-dark",
  light:
    "border border-white/20 bg-white text-ink hover:bg-purple-soft hover:text-purple-dark",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonProps) {
  const classes = `${baseClasses} ${variants[variant]} ${className}`.trim();
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
