import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition duration-200 ease-out disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-yellow text-brand-navy shadow-[0_6px_16px_-6px_rgb(230_184_0/0.7)] hover:-translate-y-0.5 hover:bg-[#ffdd2e] hover:shadow-[0_10px_22px_-8px_rgb(230_184_0/0.8)] active:translate-y-0",
  secondary:
    "bg-white text-brand-navy ring-1 ring-brand-navy/15 hover:-translate-y-0.5 hover:ring-brand-navy/40 hover:shadow-soft active:translate-y-0",
  ghost: "text-brand-navy hover:bg-brand-navy/5",
  light: "bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

type CommonProps = { variant?: Variant; size?: Size; className?: string; children: ReactNode };

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...rest
}: CommonProps & Omit<ComponentPropsWithoutRef<typeof Link>, "className">) {
  return (
    <Link href={href} className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

export function Button({
  variant,
  size,
  className,
  children,
  type = "button",
  ...rest
}: CommonProps & Omit<ComponentPropsWithoutRef<"button">, "className">) {
  return (
    <button type={type} className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
